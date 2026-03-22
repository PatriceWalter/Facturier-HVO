// ============================================================
// HVO FACTURIER - SHARED (Firebase, Auth, Nav, Utilities)
// ============================================================
const STORAGE_KEY = 'hvo_facturier_v2';
const LOGIN_CODE = '362';
const FIREBASE_CONFIG = {
  apiKey:"AIzaSyDmmErTwJuZbv-pw2mGRAVRWsZlmc6zGBI",
  authDomain:"facturier-hvo.firebaseapp.com",
  databaseURL:"https://facturier-hvo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:"facturier-hvo",
  storageBucket:"facturier-hvo.firebasestorage.app",
  messagingSenderId:"938358921868",
  appId:"1:938358921868:web:daddca15bc41f34ddfb9a9"
};

let firebaseReady = false;
let dbRef = null;

// Data store (shared across pages via localStorage + Firebase)
let data = {
  clients:[],vehicles:[],invoices:[],operations:[],occasions:[],
  settings:{
    companyName:'HVO - Helmer Véhicule Occasion',siret:'',address:'',zip:'',city:'',
    phone:'',email:'',tva:'',rcs:'',prefix:'HVO-',nextNum:1,
    mentions:"Conditions de règlement : paiement à réception.\nPas d'escompte pour paiement anticipé.\nPénalités de retard : 3 fois le taux d'intérêt légal.\nIndemnité forfaitaire de recouvrement : 40 €.",
    regime:'auto',tauxURSSAF:23.1,proxyUrl:'https://script.google.com/macros/s/AKfycbwOcO4Xn_5hZiNTbi4uqk9cBGcvFtie-A7YbANtEzwqod83Lzmwox9sVPBkhsOaMHZHkA/exec',
    logo:''
  }
};

// ============================================================
// FIREBASE INIT
// ============================================================
try {
  firebase.initializeApp(FIREBASE_CONFIG);
  const db = firebase.database();
  dbRef = db.ref('facturier');
  firebaseReady = true;
} catch(e){ console.error('Firebase init failed:',e); }

// ============================================================
// AUTH
// ============================================================
function isLoggedIn(){ return sessionStorage.getItem('hvo_auth') === 'ok'; }
function setLoggedIn(){ sessionStorage.setItem('hvo_auth','ok'); }

function checkAuth(){
  if(!isLoggedIn()){ window.location.href = 'index.html'; return false; }
  return true;
}

function doLogin(){
  const code = document.getElementById('loginCode').value;
  if(code === LOGIN_CODE){
    setLoggedIn();
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    if(typeof onPageReady === 'function') onPageReady();
  } else {
    const err = document.getElementById('loginError');
    err.style.display = 'block';
    setTimeout(()=>err.style.display='none',2000);
  }
}

// ============================================================
// DATA LOAD / SAVE
// ============================================================
function loadDataFromLocal(){
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if(s){ const d = JSON.parse(s); data = {...data,...d}; data.settings = {...data.settings,...(d.settings||{})}; }
  } catch(e){}
}

function applyMigrations(){
  if(data.operations.length === 0 && typeof DEFAULT_OPERATIONS !== 'undefined'){
    data.operations = DEFAULT_OPERATIONS.map(o=>({...o,parts:o.parts?o.parts.map(p=>({...p})):[]}));
  }
  if(!data.occasions) data.occasions = [];
  if(!data.settings.regime) data.settings.regime = 'auto';
  if(!data.settings.tauxURSSAF) data.settings.tauxURSSAF = 23.1;
  if(!data.settings.proxyUrl) data.settings.proxyUrl = '';
  data.operations.forEach(o=>{ if(!o.parts) o.parts = []; });
}

function saveData(){
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}catch(e){}
  if(firebaseReady && dbRef){
    dbRef.set(data).catch(e=>console.error('Firebase save error:',e));
  }
}

function initData(callback){
  loadDataFromLocal();
  if(firebaseReady && dbRef){
    const statusEl = document.getElementById('firebaseStatus');
    if(statusEl) statusEl.textContent = '⏳ Chargement...';
    dbRef.once('value').then(snap=>{
      const fb = snap.val();
      if(fb){
        data = {...data,...fb};
        data.settings = {...data.settings,...(fb.settings||{})};
        if(!data.occasions) data.occasions = [];
      }
      applyMigrations();
      saveData();
      if(statusEl){ statusEl.textContent = '🔥 Connecté'; statusEl.style.background = 'rgba(80,255,80,.3)'; }
      // Live listener
      dbRef.on('value', snap2=>{
        const live = snap2.val();
        if(live){
          const curOps = data.operations;
          data = {...data,...live};
          data.settings = {...data.settings,...(live.settings||{})};
          if(!data.occasions) data.occasions = [];
          const fbHasParts = (live.operations||[]).some(o=>o.parts && o.parts.length>0);
          if(!fbHasParts && curOps.some(o=>o.parts && o.parts.length>0)) data.operations = curOps;
          try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}catch(e){}
        }
      });
      if(callback) callback();
    }).catch(err=>{
      console.error('Firebase load error:',err);
      applyMigrations();
      if(statusEl) statusEl.textContent = '❌ Hors ligne';
      if(callback) callback();
    });
  } else {
    applyMigrations();
    if(callback) callback();
  }
}

// ============================================================
// NAVIGATION BAR BUILDER
// ============================================================
function buildNav(activePage){
  const pages = [
    {id:'index',icon:'🏠',label:'Tableau de bord',file:'index.html'},
    {id:'clients',icon:'👥',label:'Clients',file:'clients.html'},
    {id:'vehicules',icon:'🚗',label:'Véhicules',file:'vehicules.html'},
    {id:'factures',icon:'📄',label:'Factures',file:'factures.html'},
    {id:'operations',icon:'🔧',label:'Opérations',file:'operations.html'},
    {id:'urssaf',icon:'🏛️',label:'URSSAF',file:'urssaf.html'},
    {id:'vo',icon:'🏷️',label:'VO Occasions',file:'vo.html'},
    {id:'parametres',icon:'⚙️',label:'Paramètres',file:'parametres.html'}
  ];
  // Header
  const logo = data.settings.logo || '';
  let hdr = `<div class="app-header">`;
  if(logo) hdr += `<img src="${logo}" alt="HVO">`;
  hdr += `<div style="flex:1"><h1 style="margin:0;line-height:1.1">HVO — FACTURIER</h1><div style="font-size:.75em;opacity:.7;font-weight:400">Helmer Véhicule Occasion</div></div><span id="firebaseStatus">⏳</span><button class="btn btn-sm" style="background:rgba(255,255,255,.15);color:#fff;font-size:.75em" onclick="sessionStorage.removeItem('hvo_auth');window.location.href='index.html'">⏻ Déconnexion</button></div>`;
  // Tab bar
  hdr += `<div class="tab-bar">`;
  pages.forEach(p=>{
    const cls = p.id===activePage ? 'tab-btn active' : 'tab-btn';
    hdr += `<a class="${cls}" href="${p.file}">${p.icon} ${p.label}</a>`;
  });
  hdr += `</div>`;
  document.getElementById('navContainer').innerHTML = hdr;
}

// ============================================================
// UTILITIES
// ============================================================
function genId(prefix){ return prefix + Date.now() + Math.random().toString(36).substr(2,4); }

function toast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2500);
}

function autoCity(zipId, cityId){
  const zip = document.getElementById(zipId).value.trim();
  if(zip.length===5){
    fetch('https://geo.api.gouv.fr/communes?codePostal='+zip+'&fields=nom&limit=1')
      .then(r=>r.json()).then(d=>{ if(d.length) document.getElementById(cityId).value = d[0].nom; }).catch(()=>{});
  }
}

function openModal(id){ document.getElementById(id).classList.add('show'); }
function closeModal(id){ document.getElementById(id).classList.remove('show'); }

function setSelectByText(id,text){
  const sel = document.getElementById(id);
  if(!sel || !text) return;
  const textUp = text.toUpperCase();
  for(let o of sel.options){
    if(o.value.toUpperCase()===textUp || o.text.toUpperCase().includes(textUp)){
      sel.value = o.value; sel.dispatchEvent(new Event('change')); return;
    }
  }
}

// ============================================================
// BRANDS / MODELS
// ============================================================
function populateBrandSelect(selectId){
  const sel = document.getElementById(selectId);
  if(!sel || typeof BRANDS_MODELS === 'undefined') return;
  sel.innerHTML = '<option value="">-- Sélectionner --</option>';
  Object.keys(BRANDS_MODELS).sort().forEach(b=>{
    sel.innerHTML += '<option value="'+b+'">'+b+'</option>';
  });
}

function updateModels(prefix){
  const brand = document.getElementById(prefix+'Marque').value;
  const modSel = document.getElementById(prefix+'Modele');
  const motSel = document.getElementById(prefix+'Motorisation');
  modSel.innerHTML = '<option value="">-- Sélectionner --</option>';
  motSel.innerHTML = '<option value="">-- Sélectionner --</option>';
  if(brand && BRANDS_MODELS[brand]){
    Object.keys(BRANDS_MODELS[brand]).sort().forEach(m=>{
      modSel.innerHTML += '<option value="'+m+'">'+m+'</option>';
    });
  }
}

function updateMotors(prefix){
  const brand = document.getElementById(prefix+'Marque').value;
  const model = document.getElementById(prefix+'Modele').value;
  const motSel = document.getElementById(prefix+'Motorisation');
  motSel.innerHTML = '<option value="">-- Sélectionner --</option>';
  if(brand && model && BRANDS_MODELS[brand] && BRANDS_MODELS[brand][model]){
    BRANDS_MODELS[brand][model].forEach(m=>{
      motSel.innerHTML += '<option value="'+m+'">'+m+'</option>';
    });
  }
}

function autoFillMotor(prefix){
  const mot = document.getElementById(prefix+'Motorisation').value;
  if(!mot) return;
  const motLow = mot.toLowerCase();
  let energy = '';
  if(/électrique|electric|ev\d|kwh/i.test(mot)) energy = 'Électrique';
  else if(/hybrid|phev|e-tech|e-power|hev/i.test(motLow)) energy = 'Hybride';
  else if(/tdi|cdi|hdi|bluehdi|d-4d|crdi|dci|jtd|multijet|diesel|skyactiv-d|ecoblue/i.test(motLow)) energy = 'Diesel';
  else if(/tsi|tfsi|vtec|skyactiv-g|puretech|ecoboost|t-gdi|turbo|vvt/i.test(motLow)) energy = 'Essence';
  else if(/gpl|lpg/i.test(motLow)) energy = 'GPL';
  const enSel = document.getElementById(prefix+'Energie');
  if(enSel && energy){ for(let o of enSel.options){ if(o.value===energy||o.text===energy){enSel.value=o.value;break;} }}
  const cylMatch = mot.match(/(\d\.\d)/);
  if(cylMatch){ const cc=Math.round(parseFloat(cylMatch[1])*1000); const el=document.getElementById(prefix+'Cylindree'); if(el) el.value=cc; }
  const nums = mot.match(/\d+/g);
  if(nums && nums.length>0){ const ln=parseInt(nums[nums.length-1]); if(ln>30&&ln<2000){ const cv=document.getElementById(prefix+'CV');const kw=document.getElementById(prefix+'KW'); if(cv)cv.value=ln; if(kw)kw.value=Math.round(ln*0.7355); }}
}

function filterCombo(selId,searchId){
  const search = document.getElementById(searchId).value.toLowerCase();
  const sel = document.getElementById(selId);
  for(let o of sel.options){ if(o.value==='') continue; o.style.display=(!search||o.text.toLowerCase().includes(search))?'':'none'; }
}

// ============================================================
// AUTODOC PARSER
// ============================================================
function toggleAutodoc(prefix){ document.getElementById('autodocPanel_'+prefix).classList.toggle('show'); }

function parseAutodoc(prefix){
  const text = document.getElementById('autodocText_'+prefix).value.trim();
  if(!text){ toast('❌ Collez d\'abord le texte Auto-Doc'); return; }
  const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);
  const fm = {};
  if(lines.length>0){
    const header = lines[0].replace(/\(.*?\)/g,'').trim();
    const words = header.split(/\s+/);
    fm.brand = (words[0]||'').toUpperCase().replace(/Ё/g,'Ë').replace(/CITROEN/,'CITROËN');
    fm.model = words.slice(1).join(' ');
  }
  lines.forEach(line=>{
    const parts = line.split(':');
    if(parts.length>=2){
      const key = parts[0].trim().toLowerCase();
      let val = parts.slice(1).join(':').trim();
      if(val==='...'||val==='') return;
      if(key.includes('année')||key.includes('annee')) fm.annee=val;
      else if(key.includes('carrosserie')) fm.carrosserie=val;
      else if(key.includes('kw')||key.includes('puissance kw')) fm.kw=val.replace(/[^\d]/g,'');
      else if(key.includes('cv')||key.includes('puissance cv')||key.includes('ch')) fm.cv=val.replace(/[^\d]/g,'');
      else if(key.includes('cylindr') && !key.includes('cylindre')) fm.cylindree=val.replace(/[^\d]/g,'');
      else if(key.includes('cylindre') && !key.includes('cylindré')) fm.cylindres=val.replace(/[^\d]/g,'');
      else if(key.includes('soupape')) fm.soupapes=val.replace(/[^\d]/g,'');
      else if(key.includes('code moteur')) fm.codeMoteur=val;
      else if(key.includes('code bo') || key.includes('code boite') || key.includes('code boîte')) fm.codeBoite=val;
      else if(key.includes('gestion') || key.includes('injection')) fm.gestionCarburant=val;
      else if(key.includes('freinage') || key.includes('frein')) fm.freinage=val;
      else if(key.includes('transmission')) fm.transmission=val;
      else if(key.includes('type mine') || key.includes('type') && key.includes('mine')) fm.typeMine=val;
      else if(key.includes('énergie')||key.includes('energie')||key.includes('carburant')) fm.energie=val;
      else if(key.includes('boîte')||key.includes('boite')||key.includes('vitesse')) fm.boite=val;
    }
  });
  const sv=(id,v)=>{const el=document.getElementById(id);if(el&&v)el.value=v;};
  const ss=(id,v)=>{const el=document.getElementById(id);if(!el||!v)return;const vl=v.toLowerCase();for(let o of el.options){if(o.text.toLowerCase().includes(vl)){el.value=o.value;el.dispatchEvent(new Event('change'));return;}}};
  const p = prefix==='veh'?'v':'vo';
  ss(p+'Marque',fm.brand);
  setTimeout(()=>{
    const modSel=document.getElementById(p+'Modele');
    if(fm.model&&modSel){const ml=fm.model.toLowerCase();for(let o of modSel.options){if(o.text.toLowerCase().includes(ml)){modSel.value=o.value;modSel.dispatchEvent(new Event('change'));break;}}}
  },100);
  if(prefix==='veh'){
    sv('vAnnee',fm.annee);sv('vCarrosserie',fm.carrosserie);sv('vCylindree',fm.cylindree);
    sv('vCV',fm.cv);sv('vKW',fm.kw);ss('vEnergie',fm.energie);ss('vBoite',fm.boite);
    sv('vCylindres',fm.cylindres);sv('vSoupapes',fm.soupapes);sv('vCodeMoteur',fm.codeMoteur);
    sv('vCodeBoite',fm.codeBoite);sv('vGestionCarburant',fm.gestionCarburant);
    sv('vFreinage',fm.freinage);sv('vTypeMine',fm.typeMine);ss('vTransmission',fm.transmission);
  } else {
    sv(p+'AnneeVeh',fm.annee);sv(p+'Carrosserie',fm.carrosserie);sv(p+'Cylindree',fm.cylindree);
    sv(p+'CV',fm.cv);sv(p+'KW',fm.kw);ss(p+'Energie',fm.energie);ss(p+'Boite',fm.boite);
  }
  toast('✅ Champs remplis depuis Auto-Doc');
}

// ============================================================
// PLATE SEARCH
// ============================================================
function searchPlate(){
  const plate = document.getElementById('vPlateSearch').value.trim().toUpperCase().replace(/\s+/g,'-');
  if(!plate){toast('Entrez une plaque');return;}
  document.getElementById('vPlaque').value = plate;
  const proxyUrl = data.settings.proxyUrl;
  if(!proxyUrl){toast('⚠️ URL proxy non configurée dans Paramètres');return;}
  document.getElementById('plateResult').textContent = '⏳ Recherche en cours...';
  fetch(proxyUrl+'?plate='+encodeURIComponent(plate))
    .then(r=>r.json()).then(result=>{
      if(result.error||!result.data){document.getElementById('plateResult').textContent='❌ Aucun résultat';return;}
      const d=result.data;
      if(d.marque) setSelectByText('vMarque',d.marque);
      if(d.modele) setTimeout(()=>setSelectByText('vModele',d.modele),200);
      if(d.couleur) document.getElementById('vCouleur').value=d.couleur;
      if(d.energie){for(let o of document.getElementById('vEnergie').options){if(o.text.toLowerCase().includes(d.energie.toLowerCase())){document.getElementById('vEnergie').value=o.value;break;}}}
      if(d.date1ereMec) document.getElementById('vAnnee').value=d.date1ereMec;
      document.getElementById('plateResult').textContent='✅ '+(d.marque||'')+' '+(d.modele||'')+' trouvé';
    }).catch(()=>{document.getElementById('plateResult').textContent='❌ Erreur de recherche';});
}

// ============================================================
// PRINT HELPERS
// ============================================================
function getPrintHeader(){
  const s=data.settings;const logo=s.logo||'';
  return '<div style="display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #1a3a5c;padding-bottom:16px;margin-bottom:20px">'
    +'<div style="display:flex;align-items:center;gap:16px">'
    +(logo?'<img src="'+logo+'" style="width:70px;height:70px;object-fit:contain;border-radius:8px">':'')
    +'<div><div style="font-size:1.5em;font-weight:700;color:#1a3a5c;font-family:Rajdhani,sans-serif">'+(s.companyName||'HVO')+'</div>'
    +'<div style="font-size:.85em;color:#666">'+(s.address||'')+' '+(s.zip||'')+' '+(s.city||'')+'</div>'
    +'<div style="font-size:.85em;color:#666">Tél: '+(s.phone||'')+' — '+(s.email||'')+'</div></div></div>'
    +'<div style="text-align:right;font-size:.82em;color:#666">'
    +(s.siret?'SIRET: '+s.siret+'<br>':'')+(s.tva?'TVA: '+s.tva+'<br>':'')+(s.rcs?'RCS: '+s.rcs:'')+'</div></div>';
}

function openPrintWindow(title,content){
  const w=window.open('','_blank','width=900,height=700');
  w.document.write('<!DOCTYPE html><html><head><title>'+title+'</title>'
    +'<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">'
    +'<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:"DM Sans",sans-serif;padding:30px;color:#333;font-size:13px}h1,h2,h3,h4{font-family:"Rajdhani",sans-serif}'
    +'table{width:100%;border-collapse:collapse;margin:12px 0}th{background:#1a3a5c;color:#fff;padding:8px 10px;text-align:left;font-family:Rajdhani,sans-serif;font-size:.9em}'
    +'td{padding:8px 10px;border-bottom:1px solid #ddd}tr:nth-child(even){background:#f8f9fa}'
    +'.doc-section{background:#f8f9fa;border-radius:8px;padding:14px;margin:12px 0}.doc-section h4{color:#1a3a5c;margin-bottom:8px;font-size:1em}'
    +'.signature-row{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:40px}'
    +'.signature-box{border-top:1px solid #999;padding-top:8px;text-align:center;font-size:.85em;color:#666;min-height:80px}'
    +'@media print{body{padding:15px}button{display:none!important}}</style></head>'
    +'<body>'+content+'<div style="text-align:center;margin-top:20px"><button onclick="window.print()" style="padding:10px 30px;background:#1a3a5c;color:#fff;border:none;border-radius:8px;font-size:1em;cursor:pointer;font-family:Rajdhani,sans-serif">🖨️ Imprimer</button></div></body></html>');
  w.document.close();
}

// ============================================================
// COMMON HTML HEAD (called from each page)
// ============================================================
function getPageHead(){
  return '<link rel="preconnect" href="https://fonts.googleapis.com">'
    +'<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">'
    +'<link rel="stylesheet" href="css/style.css">'
    +'<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"><\/script>'
    +'<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"><\/script>';
}
