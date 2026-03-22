const BRANDS_MODELS = {
    // === MARQUES FRANÇAISES ===
    'ALPINE': ['A106','A108','A110','A310','A610','A110 (2017+)'],
    'BUGATTI': ['Chiron','Divo','EB110','Veyron'],
    'CITROËN': ['2CV','Ami','Ami 6','Ami 8','AX','Berlingo','BX','C-Crosser','C-Elysée','C-Zero','C1','C15','C2','C25','C3','C3 Aircross','C3 Picasso','C3 Pluriel','C4','C4 Aircross','C4 Cactus','C4 Picasso','C4 SpaceTourer','C4 X','C5','C5 Aircross','C5 X','C6','C8','CX','DS','DS3','DS4','DS5','Dyane','Evasion','GS','GSA','Jumper','Jumpy','LN','Méhari','Nemo','Saxo','SM','SpaceTourer','Traction','Visa','Xantia','XM','Xsara','Xsara Picasso','ZX','ë-C4'],
    'CUPRA': ['Ateca','Born','Formentor','Leon','Tavascan','Terramar'],
    'DACIA': ['1300','Dokker','Duster','Jogger','Logan','Lodgy','Sandero','Spring'],
    'DS': ['DS3','DS3 Crossback','DS4','DS4 Cross','DS5','DS7','DS7 Crossback','DS9'],
    'PEUGEOT': ['104','106','107','108','2008','204','205','206','206+','207','208','3008','301','304','305','306','307','308','309','4007','4008','405','406','407','408','5008','504','505','508','604','605','607','806','807','1007','Boxer','Expert','J5','Partner','RCZ','Rifter','Traveller','e-208','e-2008','e-308'],
    'RENAULT': ['4','4L','5','6','8','9','10','11','12','14','15','16','17','18','19','20','21','25','30','Alaskan','Alpine A110','Arkana','Austral','Avantime','Captur','Clio','Dauphine','Espace','Express','Floride','Fluence','Fuego','Grand Espace','Grand Modus','Grand Scenic','Kadjar','Kangoo','Koleos','Laguna','Latitude','Master','Megane','Megane E-Tech','Modus','Rafale','R5 E-Tech','Safrane','Scenic','Super 5','Talisman','Trafic','Twingo','Twizy','Vel Satis','Wind','Zoe'],
    'SIMCA': ['1000','1100','1200','1301','1307','1308','1500','1501','Aronde','Horizon','Rallye','Solara','Talbot Samba'],

    // === MARQUES ALLEMANDES ===
    'ABARTH': ['124 Spider','500','595','695','Grande Punto','Punto'],
    'AUDI': ['50','80','90','100','200','A1','A2','A3','A4','A4 Allroad','A5','A6','A6 Allroad','A7','A8','Cabriolet','Coupé','e-tron','e-tron GT','Q2','Q3','Q4 e-tron','Q5','Q7','Q8','Q8 e-tron','RS3','RS4','RS5','RS6','RS7','RS Q3','RS Q8','S1','S3','S4','S5','S6','S7','S8','SQ5','SQ7','SQ8','TT','TTS','TT RS','V8'],
    'BMW': ['02 Série','1502','1600','1800','2000','2002','114','116','118','120','125','130','218','220','225','225xe','316','318','320','323','325','328','330','330e','335','340','418','420','425','428','430','435','440','518','520','523','525','528','530','530e','535','540','545','550','620','628','630','633','635','640','645','650','725','728','730','735','740','745','745e','750','760','840','850','M2','M3','M4','M5','M6','M8','Série 1','Série 2','Série 2 Active Tourer','Série 2 Gran Coupé','Série 3','Série 4','Série 5','Série 6','Série 7','Série 8','X1','X2','X3','X4','X5','X5 xDrive45e','X6','X7','XM','Z1','Z3','Z4','Z8','i3','i4','i5','i7','i8','iX','iX1','iX3'],
    'MERCEDES': ['170','190','200','220','230','240','250','260','280','300','320','350','380','400','420','450','500','560','600','Classe A','Classe B','Classe C','Classe E','Classe G','Classe M','Classe R','Classe S','Classe V','Classe X','CL','CLA','CLC','CLK','CLS','EQA','EQB','EQC','EQE','EQS','GLA','GLB','GLC','GLE','GLK','GLS','ML','SL','SLC','SLK','SLR','SLS','AMG GT','Sprinter','Vaneo','Viano','Vito'],
    'OPEL': ['Adam','Admiral','Agila','Ampera','Antara','Ascona','Astra','Calibra','Campo','Cascada','Combo','Commodore','Corsa','Crossland','Diplomat','Frontera','Grandland','GT','Insignia','Kadett','Karl','Manta','Meriva','Mokka','Monterey','Omega','Rekord','Senator','Signum','Sintra','Speedster','Tigra','Vectra','Vivaro','Zafira'],
    'PORSCHE': ['356','550','718 Boxster','718 Cayman','911','912','914','924','928','930','944','959','964','968','993','996','997','Boxster','Cayenne','Cayman','Macan','Panamera','Taycan'],
    'SMART': ['ForFour','ForTwo','Roadster','#1','#3'],
    'VOLKSWAGEN': ['Amarok','Arteon','Atlas','Beetle','Bora','Caddy','Caravelle','CC','Coccinelle','Corrado','Crafter','Derby','Eos','Fox','Golf','Golf Plus','Golf Sportsvan','ID.3','ID.4','ID.5','ID.7','ID. Buzz','Jetta','Karmann Ghia','LT','Lupo','Multivan','New Beetle','Passat','Phaeton','Polo','Santana','Scirocco','Sharan','T-Cross','T-Roc','Taigo','Tiguan','Tiguan Allspace','Touareg','Touran','Transporter','Up!','Vento'],

    // === MARQUES ITALIENNES ===
    'ALFA ROMEO': ['33','75','90','145','146','147','155','156','159','164','166','4C','8C','Alfasud','Alfetta','Brera','Giulia','Giulia (2016+)','Giulietta','GT','GTV','Junior','MiTo','Montreal','Spider','Sprint','Stelvio','Tonale'],
    'FERRARI': ['208','246 Dino','250','275','288 GTO','296 GTB','296 GTS','308','328','330','348','355','360','365','375','400','412','456','458','488','512','550','575','599','612','California','Daytona SP3','Enzo','F12','F355','F40','F430','F50','F8','FF','GTC4Lusso','LaFerrari','Mondial','Portofino','Purosangue','Roma','SF90','Testarossa'],
    'FIAT': ['124','126','127','128','130','131','132','500','500C','500e','500L','500X','600','850','Barchetta','Brava','Bravo','Cinquecento','Coupé','Croma','Dino','Doblo','Ducato','Fiorino','Freemont','Grande Punto','Idea','Linea','Marea','Multipla','Panda','Punto','Qubo','Regata','Ritmo','Scudo','Sedici','Seicento','Stilo','Strada','Tempra','Tipo','Ulysse','Uno','X1/9'],
    'LAMBORGHINI': ['350 GT','400 GT','Aventador','Centenario','Countach','Diablo','Espada','Gallardo','Huracán','Islero','Jalpa','Jarama','LM002','Miura','Murciélago','Revuelto','Silhouette','Urraco','Urus'],
    'LANCIA': ['Beta','Dedra','Delta','Flavia','Fulvia','Gamma','Kappa','Lybra','Montecarlo','Musa','Phedra','Prisma','Stratos','Thema','Thesis','Y','Ypsilon','Zeta'],
    'MASERATI': ['3200','Bora','Ghibli','GranCabrio','GranSport','GranTurismo','Grecale','Indy','Khamsin','Levante','MC20','Merak','Mexico','Quattroporte','Shamal','Spyder'],

    // === MARQUES BRITANNIQUES ===
    'ASTON MARTIN': ['DB4','DB5','DB6','DB7','DB9','DB11','DB12','DBS','DBX','Rapide','V8','V12 Vantage','Valhalla','Vanquish','Vantage','Virage','Zagato'],
    'BENTLEY': ['Arnage','Azure','Bentayga','Brooklands','Continental','Continental GT','Continental GTC','Flying Spur','Mulsanne','Turbo R'],
    'JAGUAR': ['D-Type','E-Pace','E-Type','F-Pace','F-Type','I-Pace','Mark II','S-Type','X-Type','XE','XF','XJ','XJ6','XJ12','XJ40','XJ220','XJS','XJR','XK','XK8','XKR'],
    'LAND ROVER': ['Defender','Discovery','Discovery Sport','Freelander','Range Rover','Range Rover Evoque','Range Rover Sport','Range Rover Velar','Series I','Series II','Series III'],
    'LOTUS': ['Elan','Elise','Emira','Esprit','Europa','Evija','Evora','Exige','Seven'],
    'McLAREN': ['540C','570GT','570S','600LT','620R','650S','675LT','720S','750S','765LT','Artura','Elva','GT','MP4-12C','P1','Senna','Speedtail'],
    'MG': ['A','B','C','EHS','F','HS','MG3','MG4','MG5','MG7','Midget','TF','ZR','ZS','ZS EV','ZT'],
    'MINI': ['Clubman','Countryman','Coupé','Hatch 3p','Hatch 5p','John Cooper Works','One','Paceman','Roadster'],
    'ROLLS-ROYCE': ['Camargue','Corniche','Cullinan','Dawn','Ghost','Phantom','Silver Cloud','Silver Shadow','Silver Spirit','Silver Spur','Spectre','Wraith'],

    // === MARQUES JAPONAISES ===
    'DAIHATSU': ['Charade','Copen','Cuore','Feroza','Gran Move','Materia','Sirion','Terios','Trevis','YRV'],
    'HONDA': ['Accord','Civic','CR-V','CR-Z','e','e:Ny1','FR-V','HR-V','Insight','Integra','Jazz','Legend','NSX','Prelude','S2000','S660','ZR-V'],
    'INFINITI': ['EX','FX','G','M','Q30','Q50','Q60','Q70','QX30','QX50','QX70','QX80'],
    'ISUZU': ['Campo','D-Max','Gemini','Piazza','Trooper'],
    'LEXUS': ['CT','ES','GS','GX','IS','LC','LS','LX','NX','RC','RX','RZ','SC','UX'],
    'MAZDA': ['121','2','3','323','5','6','626','929','BT-50','CX-3','CX-30','CX-5','CX-60','CX-7','CX-9','Demio','MX-3','MX-5','MX-6','MX-30','Premacy','RX-7','RX-8','Tribute','Xedos'],
    'MITSUBISHI': ['3000 GT','ASX','Carisma','Colt','Eclipse','Eclipse Cross','Galant','Grandis','i-MiEV','L200','Lancer','Outlander','Pajero','Space Runner','Space Star','Space Wagon'],
    'NISSAN': ['100NX','200SX','300ZX','350Z','370Z','Almera','Ariya','Bluebird','Cherry','GT-R','Interstar','Juke','King Cab','Leaf','Maxima','Micra','Murano','Navara','Note','NV200','NV300','NV400','Pathfinder','Patrol','Pixo','Prairie','Primastar','Primera','Pulsar','Qashqai','Serena','Silvia','Skyline','Sunny','Terrano','Tiida','Townstar','X-Trail','Z'],
    'SUBARU': ['BRZ','Forester','Impreza','Justy','Legacy','Levorg','Outback','Solterra','SVX','Trezia','WRX','XV'],
    'SUZUKI': ['Alto','Baleno','Cappuccino','Carry','Celerio','Grand Vitara','Ignis','Jimny','Kizashi','Liana','S-Cross','Samurai','SJ','Splash','Swift','SX4','Vitara','Wagon R','X-90'],
    'TOYOTA': ['4Runner','Aygo','Aygo X','bZ4X','C-HR','Camry','Carina','Celica','Corolla','Corolla Cross','Corona','FJ Cruiser','GR86','GR Supra','GR Yaris','GT86','Highlander','Hilux','IQ','Land Cruiser','MR2','Mirai','Paseo','Picnic','Prius','Prius+','Prius Prime','ProAce','RAV4','Sequoia','Starlet','Supra','Tercel','Tundra','Urban Cruiser','Verso','Yaris','Yaris Cross'],

    // === MARQUES CORÉENNES ===
    'GENESIS': ['G70','G80','G90','GV60','GV70','GV80'],
    'HYUNDAI': ['Accent','Atos','Bayon','Coupé','Elantra','Galloper','Genesis','Getz','H-1','i10','i20','i30','i40','i50','IONIQ','IONIQ 5','IONIQ 6','ix20','ix35','ix55','Kona','Lantra','Matrix','Nexo','Pony','Santa Fe','Sonata','Staria','Terracan','Trajet','Tucson','Veloster'],
    'KIA': ['Carens','Carnival','Ceed','Cerato','Clarus','EV6','EV9','Joice','Magentis','Mentor','Niro','Opirus','Optima','Picanto','ProCeed','Pride','Rio','Sephia','Shuma','Sorento','Soul','Sportage','Stinger','Stonic','Venga','XCeed'],
    'SSANGYONG': ['Actyon','Korando','Kyron','Musso','Rexton','Rodius','Tivoli','Torres','XLV'],

    // === MARQUES AMÉRICAINES ===
    'CADILLAC': ['ATS','BLS','CTS','CT4','CT5','De Ville','Eldorado','Escalade','Fleetwood','Lyriq','Seville','SRX','STS','XT4','XT5','XT6','XTS'],
    'CHEVROLET': ['Astro','Aveo','Blazer','Bolt','Camaro','Captiva','Colorado','Corvette','Cruze','El Camino','Equinox','Impala','Kalos','Lacetti','Malibu','Matiz','Monte Carlo','Nova','Nubira','Orlando','Silverado','Spark','Suburban','Tahoe','Trailblazer','Trax'],
    'CHRYSLER': ['200','300','300C','300M','Crossfire','Grand Voyager','Neon','PT Cruiser','Pacifica','Sebring','Stratus','Voyager'],
    'DODGE': ['Avenger','Caliber','Challenger','Charger','Dakota','Durango','Grand Caravan','Journey','Magnum','Nitro','Ram','Viper'],
    'FORD': ['Bronco','C-Max','Capri','Cortina','Cougar','EcoSport','Edge','Escape','Escort','Excursion','Expedition','Explorer','F-150','Fairlane','Falcon','Fiesta','Flex','Focus','Fusion','Galaxy','Granada','Ka','Ka+','Kuga','Maverick','Mondeo','Mustang','Mustang Mach-E','Orion','Probe','Puma','Ranger','S-Max','Scorpio','Sierra','Taunus','Thunderbird','Tourneo','Transit','Transit Connect','Transit Custom','Windstar'],
    'GMC': ['Acadia','Canyon','Envoy','Jimmy','Sierra','Terrain','Yukon'],
    'HUMMER': ['H1','H2','H3','EV'],
    'JEEP': ['Avenger','Cherokee','CJ','Comanche','Commander','Compass','Gladiator','Grand Cherokee','Grand Wagoneer','Liberty','Patriot','Renegade','Wagoneer','Willys','Wrangler'],
    'LINCOLN': ['Aviator','Continental','Corsair','MKC','MKS','MKT','MKX','MKZ','Nautilus','Navigator','Town Car'],
    'TESLA': ['Cybertruck','Model 3','Model S','Model X','Model Y','Roadster','Semi'],

    // === MARQUES SUÉDOISES ===
    'SAAB': ['9-2X','9-3','9-5','9-7X','90','900','9000','93','95','96','99','Sonett'],
    'VOLVO': ['140','164','240','260','340','360','440','460','480','740','760','780','850','940','960','C30','C40','C70','EX30','EX40','EX90','S40','S60','S70','S80','S90','V40','V40 Cross Country','V50','V60','V60 Cross Country','V70','V90','V90 Cross Country','XC40','XC60','XC70','XC90'],

    // === MARQUES ESPAGNOLES ===
    'SEAT': ['Alhambra','Altea','Arona','Arosa','Ateca','Cordoba','Exeo','Ibiza','Inca','Leon','Malaga','Marbella','Mii','Tarraco','Terra','Toledo'],

    // === MARQUES TCHÈQUES ===
    'SKODA': ['Citigo','Elroq','Enyaq','Fabia','Favorit','Felicia','Kamiq','Karoq','Kodiaq','Octavia','Rapid','Roomster','Scala','Superb','Yeti'],

    // === MARQUES ROUMAINES ===

    // === MARQUES CHINOISES ===
    'AIWAYS': ['U5','U6'],
    'BYD': ['Atto 3','Dolphin','Han','Seal','Seal U','Tang'],
    'GWM': ['Ora'],
    'LYNK & CO': ['01','02'],
    'NIO': ['EL6','EL7','EL8','ET5','ET7'],
    'SERES': ['3','5'],
    'XPENG': ['G6','G9','P5','P7'],

    // === AUTRES ===
    'CHEVROLET-DAEWOO': ['Evanda','Kalos','Lacetti','Matiz','Nubira','Spark','Tacuma'],
    'DAEWOO': ['Espero','Evanda','Kalos','Lacetti','Lanos','Leganza','Matiz','Nexia','Nubira','Rezzo','Tacuma'],
    'DE TOMASO': ['Deauville','Longchamp','Mangusta','Pantera','Vallelunga'],
    'LIGIER': ['JS50','JS60'],
    'MICROCAR': ['Dué','M.Go','M8'],
    'MORGAN': ['4/4','Aero 8','Plus 4','Plus 6','Plus 8','Roadster','Super 3'],
    'POLESTAR': ['1','2','3','4'],
    'ROVER': ['100','200','25','400','45','600','75','800','City','Metro','Mini','Streetwise'],
    'TATA': ['Indica','Indigo','Safari','Sumo','Xenon'],
    'WIESMANN': ['GT','MF3','MF4','MF5']
};


// ============================================================
// MOTORISATIONS PAR MARQUE/MODÈLE (les plus courantes en France)
// ============================================================
const MOTORIZATIONS = {
'PEUGEOT':{
'104':['1.0 45','1.1 50','1.1 55','1.4 72'],
'106':['1.0i 50','1.1i 60','1.4i 75','1.6i 90','1.6i 16V 120','1.5D 57','1.5D Rallye'],
'107':['1.0i 68','1.0i 70','1.4 HDi 55'],
'108':['1.0 VTi 68','1.0 VTi 72','1.2 PureTech 82'],
'205':['1.0 45','1.1 55','1.4 75','1.6 90','1.6 115','1.9 GTi 130','1.6D 60','1.8D 60','1.8 TD 80'],
'206':['1.1i 60','1.4i 75','1.4 HDi 70','1.6i 16V 110','1.6 HDi 90','1.6 HDi 110','1.9D 70','2.0i 16V 136','2.0 HDi 90','2.0 HDi 110','2.0 16V RC 177'],
'207':['1.4i 75','1.4 HDi 70','1.4 VTi 95','1.6i 16V 110','1.6 HDi 90','1.6 HDi 110','1.6 THP 150','1.6 THP 175'],
'208':['1.0 VTi 68','1.2 PureTech 82','1.2 PureTech 110','1.2 PureTech 130','1.4 HDi 68','1.5 BlueHDi 100','1.5 BlueHDi 130','1.6 BlueHDi 75','1.6 BlueHDi 100','1.6 BlueHDi 120','1.6 THP 165','1.6 THP 208 GTi','e-208 136'],
'2008':['1.2 PureTech 110','1.2 PureTech 130','1.2 PureTech 155','1.5 BlueHDi 100','1.5 BlueHDi 110','1.5 BlueHDi 130','1.6 BlueHDi 100','1.6 BlueHDi 120','e-2008 136'],
'3008':['1.2 PureTech 130','1.5 BlueHDi 130','1.6 BlueHDi 120','1.6 HDi 110','1.6 HDi 115','1.6 THP 165','2.0 BlueHDi 150','2.0 BlueHDi 180','2.0 HDi 150','1.6 Hybrid 225','1.6 Hybrid4 300'],
'301':['1.2 VTi 72','1.6 VTi 115','1.6 HDi 92'],
'305':['1.3 65','1.5 74','1.6 90','1.9 105','1.5D 50','1.9D 65'],
'306':['1.4i 75','1.6i 90','1.6i 110','1.8i 110','1.8i 16V 112','1.9D 68','1.9 TD 90','2.0i 16V 132','2.0 HDi 90','2.0 S16 167'],
'307':['1.4i 75','1.4 HDi 70','1.6i 16V 110','1.6 HDi 90','1.6 HDi 110','2.0i 16V 136','2.0 HDi 90','2.0 HDi 110','2.0 HDi 136','2.0 HDi 140'],
'308':['1.2 PureTech 110','1.2 PureTech 130','1.5 BlueHDi 100','1.5 BlueHDi 130','1.6 BlueHDi 100','1.6 BlueHDi 120','1.6 HDi 90','1.6 HDi 110','1.6 THP 125','1.6 THP 156','1.6 THP 200','1.6 THP 270 GTi','2.0 BlueHDi 150','2.0 BlueHDi 180','2.0 HDi 136','e-308 156'],
'309':['1.1 55','1.3 64','1.4 75','1.6 92','1.6 GTi 105','1.9 GTi 130','1.8D 60','1.9D 65'],
'405':['1.4i 75','1.6i 89','1.8i 105','1.9 D 65','1.9 TD 90','2.0i 121','2.0i 16V 150'],
'406':['1.6i 89','1.8i 110','1.8i 16V 116','1.9 TD 90','2.0i 16V 132','2.0i 16V 135','2.0 HDi 90','2.0 HDi 110','2.1 TD 110','2.2 HDi 133','3.0 V6 194'],
'407':['1.6 HDi 110','1.8i 16V 125','2.0i 16V 140','2.0 HDi 136','2.0 HDi 140','2.0 HDi 163','2.2i 16V 160','2.2 HDi 170','2.7 HDi V6 204','3.0 HDi V6 240','3.0 V6 210'],
'408':['1.2 PureTech 130','1.5 BlueHDi 130','1.6 Hybrid 225'],
'5008':['1.2 PureTech 130','1.5 BlueHDi 130','1.6 BlueHDi 120','1.6 THP 165','2.0 BlueHDi 150','2.0 BlueHDi 180','1.6 Hybrid 225','1.6 Hybrid4 300'],
'504':['1.8 82','2.0 97','2.0 106','2.1D 65','2.1 TD 70','2.3D 70','2.5D 75','2.7 V6 144'],
'505':['1.8 90','2.0 96','2.0 110','2.2 115','2.5D 76','2.5 TD 90','2.5 GTi Turbo 180'],
'508':['1.5 BlueHDi 130','1.6 PureTech 180','1.6 THP 165','2.0 BlueHDi 150','2.0 BlueHDi 160','2.0 BlueHDi 180','2.0 HDi 136','2.0 HDi 140','2.0 HDi 163','2.2 HDi 200','1.6 Hybrid 225','1.6 Hybrid4 360 PSE'],
'607':['2.0 HDi 136','2.2i 16V 158','2.2 HDi 133','2.7 HDi V6 204','3.0 V6 211'],
'806':['2.0i 121','2.0 Turbo 150','1.9 TD 90','2.0 HDi 110','2.1 TD 110'],
'807':['2.0i 140','2.0 HDi 136','2.2 HDi 128','2.2 HDi 170','3.0 V6 210'],
'1007':['1.4i 75','1.6i 16V 110','1.4 HDi 70','1.6 HDi 110'],
'Partner':['1.4i 75','1.6i 16V 110','1.6 HDi 75','1.6 HDi 90','1.6 BlueHDi 75','1.6 BlueHDi 100','1.9D 70','2.0 HDi 90'],
'Rifter':['1.2 PureTech 110','1.2 PureTech 130','1.5 BlueHDi 100','1.5 BlueHDi 130'],
'Boxer':['2.0 BlueHDi 110','2.0 BlueHDi 130','2.0 BlueHDi 160','2.2 HDi 100','2.2 HDi 120','2.2 HDi 130','2.2 HDi 150','3.0 HDi 160'],
'Expert':['1.5 BlueHDi 100','1.5 BlueHDi 120','2.0 BlueHDi 120','2.0 BlueHDi 150','2.0 BlueHDi 180','2.0 HDi 120','2.0 HDi 130','2.0 HDi 150'],
'RCZ':['1.6 THP 156','1.6 THP 200','2.0 HDi 163','1.6 THP 270 R']
,
'204':['1.1 53','1.1D 40'],
'206+':['1.1i 60','1.4i 75','1.4 HDi 70'],
'304':['1.3 65','1.3 75'],
'4007':['2.2 HDi 156','2.4i 170'],
'4008':['1.6 HDi 114','1.8 HDi 150'],
'604':['2.0 99','2.0 Turbo 155','2.5D 75','2.7 V6 144'],
'605':['2.0 121','2.0 Turbo 150','3.0 V6 190','2.1 TD 110','2.5 TD 129'],
'J5':['1.8 73','1.9D 69','2.5D 75','2.5 TD 95'],
'Traveller':['1.5 BlueHDi 100','1.5 BlueHDi 120','2.0 BlueHDi 145','2.0 BlueHDi 180'],
'e-208':['Electrique 136'],
'e-2008':['Electrique 136'],
'e-308':['Electrique 156']},
'RENAULT':{
'4':['0.8 34','1.1 34'],
'5':['0.8 36','0.9 42','1.0 44','1.1 48','1.4 63','1.4 Turbo 115','1.4 Turbo 160 GT','1.6D 55'],
'Super 5':['1.0 42','1.1 45','1.2 55','1.4 60','1.4 75','1.6D 55','1.7 73','1.7 94 GT'],
'9':['1.1 48','1.2 55','1.4 68','1.4 80','1.7 73','1.7 90','1.6D 55'],
'11':['1.2 55','1.4 68','1.4 80','1.7 73','1.7 90','1.4 Turbo 115','1.6D 55'],
'19':['1.2 55','1.4 58','1.4 75','1.4 80','1.7 73','1.7 90','1.8i 95','1.8i 110','1.8i 16V 137','1.9D 65','1.9 TD 90'],
'21':['1.7 90','1.7 95','2.0 120','2.0i Turbo 175','2.1D 67','2.1 TD 88'],
'25':['2.0 110','2.2i 140','2.5 V6 160','2.8 V6 Turbo 205','2.1D 67','2.1 TD 88'],
'Clio':['0.9 TCe 75','0.9 TCe 90','1.0 SCe 65','1.0 SCe 75','1.0 TCe 90','1.0 TCe 100','1.2i 58','1.2i 16V 75','1.4i 75','1.4i 98','1.5 dCi 65','1.5 dCi 75','1.5 dCi 85','1.5 dCi 90','1.5 Blue dCi 85','1.5 Blue dCi 100','1.6i 16V 110','1.6 RS 200','2.0 RS 200','2.0 RS 220','1.6 E-Tech 145'],
'Megane':['1.2 TCe 100','1.2 TCe 115','1.2 TCe 130','1.3 TCe 115','1.3 TCe 140','1.3 TCe 160','1.4i 95','1.5 dCi 85','1.5 dCi 90','1.5 dCi 105','1.5 dCi 110','1.5 Blue dCi 115','1.6i 110','1.6 dCi 130','1.6 dCi 165','1.8 TCe 225 RS','1.8 TCe 280 RS','1.9 dCi 120','1.9 dCi 130','2.0i 140','2.0 dCi 150','2.0 dCi 175','E-Tech 160'],
'Scenic':['1.2 TCe 115','1.2 TCe 130','1.3 TCe 115','1.3 TCe 140','1.3 TCe 160','1.5 dCi 95','1.5 dCi 105','1.5 dCi 110','1.5 Blue dCi 120','1.6 dCi 130','1.6 dCi 160','1.9 dCi 120','1.9 dCi 130','2.0 dCi 150'],
'Captur':['0.9 TCe 90','1.0 TCe 90','1.0 TCe 100','1.2 TCe 120','1.3 TCe 130','1.3 TCe 140','1.3 TCe 155','1.5 dCi 90','1.5 dCi 110','1.5 Blue dCi 95','1.5 Blue dCi 115','1.6 E-Tech 160'],
'Kadjar':['1.2 TCe 130','1.3 TCe 140','1.3 TCe 160','1.5 dCi 110','1.5 Blue dCi 115','1.6 dCi 130','1.7 Blue dCi 150'],
'Kangoo':['1.2i 60','1.2 TCe 115','1.4i 75','1.5 dCi 60','1.5 dCi 65','1.5 dCi 70','1.5 dCi 75','1.5 dCi 80','1.5 dCi 85','1.5 dCi 90','1.5 dCi 105','1.5 dCi 110','1.5 Blue dCi 80','1.5 Blue dCi 95','1.6i 16V 95','1.9 D 55','1.9 D 65'],
'Trafic':['1.6 dCi 90','1.6 dCi 95','1.6 dCi 115','1.6 dCi 120','1.6 dCi 125','1.6 dCi 140','1.6 dCi 145','2.0 dCi 90','2.0 dCi 115','2.0 dCi 150','2.0 Blue dCi 110','2.0 Blue dCi 130','2.0 Blue dCi 150','2.0 Blue dCi 170'],
'Master':['2.3 dCi 100','2.3 dCi 110','2.3 dCi 125','2.3 dCi 130','2.3 dCi 135','2.3 dCi 145','2.3 dCi 150','2.3 dCi 165','2.3 dCi 170','2.3 dCi 180','2.5 dCi 100','2.5 dCi 120','2.5 dCi 150'],
'Twingo':['0.9 TCe 90','0.9 TCe 110','1.0 SCe 65','1.0 SCe 70','1.0 SCe 75','1.2i 60','1.2i 75','1.2 16V 75','1.5 dCi 65','1.5 dCi 75','1.5 dCi 85','1.6 RS 133','E-Tech Electrique'],
'Laguna':['1.6i 110','1.6 dCi 130','1.8i 120','1.9 dCi 100','1.9 dCi 110','1.9 dCi 120','1.9 dCi 130','2.0i 16V 140','2.0 dCi 130','2.0 dCi 150','2.0 dCi 175','2.0 Turbo 170','2.0 Turbo 205','3.0 dCi V6 235','3.5 V6 238'],
'Espace':['1.6 dCi 130','1.6 dCi 160','1.8 TCe 225','2.0 dCi 130','2.0 dCi 150','2.0 dCi 175','2.0 Turbo 170','1.6 E-Tech 200'],
'Zoe':['R110 52kWh','R135 52kWh','R90 41kWh'],
'Austral':['1.2 TCe 130 Mild Hybrid','1.3 TCe 140 Mild Hybrid','1.2 E-Tech 200'],
'Arkana':['1.3 TCe 140','1.3 TCe 160','1.6 E-Tech 145'],
'Talisman':['1.3 TCe 140','1.3 TCe 160','1.5 dCi 110','1.5 Blue dCi 120','1.6 dCi 130','1.6 dCi 160','1.8 TCe 225','2.0 dCi 200'],
'Koleos':['1.3 TCe 160','1.7 Blue dCi 150','2.0 dCi 150','2.0 dCi 175']
,
'4L':['0.8 34','1.1 34'],
'6':['0.8 32','1.1 46'],
'8':['1.0 44','1.1 48'],
'10':['1.1 48'],
'12':['1.3 60','1.6 90'],
'14':['1.2 57','1.4 70'],
'15':['1.3 60','1.6 90'],
'16':['1.5 55','1.6 83'],
'17':['1.6 90'],
'18':['1.4 64','1.6 79','2.0 110','2.1D 65'],
'20':['1.6 96','2.0 109','2.2 115'],
'30':['2.7 V6 144'],
'Fluence':['1.5 dCi 90','1.5 dCi 110','1.6i 110','2.0 dCi 150'],
'Fuego':['1.4 64','1.6 96','2.0 110','2.2 Turbo 170'],
'Safrane':['2.0 132','2.2 130','2.5 170','3.0 V6 170','2.2 dT 115','2.5 dT 113'],
'Modus':['1.2i 75','1.4i 98','1.5 dCi 65','1.5 dCi 85','1.5 dCi 105','1.6i 110'],
'Vel Satis':['2.0i Turbo 170','2.0 dCi 150','2.2 dCi 150','3.0 dCi 177','3.5 V6 241'],
'Wind':['1.2 TCe 100','1.6i 133'],
'Megane E-Tech':['Electrique 220','Electrique Long Range 220'],
'R5 E-Tech':['Electrique 150','Electrique Long Range 150'],
'Twizy':['Electrique 17','Electrique 5'],
'Latitude':['2.0 dCi 150','2.0 dCi 175','3.5 V6 238'],
'Grand Scenic':['1.2 TCe 130','1.3 TCe 140','1.3 TCe 160','1.5 dCi 110','1.5 Blue dCi 120','1.6 dCi 130','1.7 Blue dCi 150'],
'Avantime':['2.0 Turbo 163','2.2 dCi 150','3.0 V6 207'],
'Rafale':['1.2 E-Tech 200','1.2 E-Tech 300'],
'Alaskan':['2.3 dCi 160','2.3 dCi 190'],
'Alpine A110':['1.8 Turbo 252','1.8 Turbo S 300'],
'Dauphine':['0.8 30','0.8 40'],
'Express':['1.1 40','1.4 55','1.9D 55'],
'Floride':['0.8 40','1.0 55'],
'Grand Espace':['1.6 dCi 130','1.6 dCi 160','1.8 TCe 225','2.0 dCi 150','2.0 dCi 175'],
'Grand Modus':['1.2i 75','1.2 TCe 100','1.5 dCi 85','1.5 dCi 90','1.5 dCi 105','1.6i 110']},
'CITROËN':{
'AX':['1.0i 50','1.1i 60','1.4i 75','1.4D 50','1.5D 60'],
'Saxo':['1.0i 50','1.1i 60','1.4i 75','1.5D 57','1.6i 16V VTS 118'],
'C1':['1.0i 68','1.0 VTi 68','1.0 VTi 72','1.4 HDi 55'],
'C2':['1.1i 60','1.4i 75','1.4 HDi 70','1.6i 16V 110','1.6i 16V VTS 122','1.6 HDi 110'],
'C3':['1.0 VTi 68','1.1i 60','1.2 PureTech 68','1.2 PureTech 82','1.2 PureTech 83','1.2 PureTech 110','1.2 PureTech 130','1.4i 75','1.4 HDi 70','1.5 BlueHDi 100','1.6 BlueHDi 75','1.6 BlueHDi 100','1.6 HDi 90','1.6 HDi 110','1.6 VTi 120'],
'C3 Aircross':['1.2 PureTech 82','1.2 PureTech 110','1.2 PureTech 130','1.5 BlueHDi 100','1.5 BlueHDi 110','1.5 BlueHDi 120','1.6 BlueHDi 100','1.6 BlueHDi 120'],
'C4':['1.2 PureTech 100','1.2 PureTech 130','1.2 PureTech 155','1.4i 88','1.5 BlueHDi 130','1.6i 16V 110','1.6 BlueHDi 100','1.6 BlueHDi 120','1.6 HDi 90','1.6 HDi 110','1.6 THP 150','1.6 THP 200','2.0 BlueHDi 150','2.0 HDi 136','2.0 HDi 140','2.0 HDi 150','ë-C4 136'],
'C4 Picasso':['1.2 PureTech 130','1.5 BlueHDi 130','1.6 BlueHDi 100','1.6 BlueHDi 120','1.6 HDi 90','1.6 HDi 110','1.6 THP 155','1.6 THP 165','2.0 BlueHDi 150','2.0 BlueHDi 160','2.0 BlueHDi 180','2.0 HDi 136','2.0 HDi 138','2.0 HDi 150'],
'C4 Cactus':['1.2 PureTech 75','1.2 PureTech 82','1.2 PureTech 110','1.2 PureTech 130','1.5 BlueHDi 100','1.6 BlueHDi 100','1.6 HDi 92'],
'C5':['1.6 HDi 110','1.6 THP 155','1.8i 16V 125','2.0i 16V 140','2.0 HDi 136','2.0 HDi 138','2.0 HDi 140','2.0 HDi 150','2.0 HDi 160','2.2 HDi 170','2.7 HDi V6 204','3.0 HDi V6 240','3.0 V6 210'],
'C5 Aircross':['1.2 PureTech 130','1.5 BlueHDi 130','1.6 PureTech 180','1.6 THP 165','2.0 BlueHDi 180','1.6 Hybrid 225'],
'C5 X':['1.2 PureTech 130','1.6 PureTech 180','1.6 Hybrid 225'],
'Berlingo':['1.1i 60','1.4i 75','1.5 BlueHDi 75','1.5 BlueHDi 100','1.5 BlueHDi 130','1.6i 16V 110','1.6 BlueHDi 75','1.6 BlueHDi 100','1.6 BlueHDi 120','1.6 HDi 75','1.6 HDi 90','1.6 HDi 110','1.8D 60','1.9D 70','2.0 HDi 90','ë-Berlingo 136'],
'Jumpy':['1.5 BlueHDi 100','1.5 BlueHDi 120','1.6 HDi 90','1.6 HDi 110','2.0 BlueHDi 120','2.0 BlueHDi 150','2.0 BlueHDi 180','2.0 HDi 120','2.0 HDi 130','2.0 HDi 150'],
'Jumper':['2.0 BlueHDi 110','2.0 BlueHDi 130','2.0 BlueHDi 160','2.2 HDi 100','2.2 HDi 120','2.2 HDi 130','2.2 HDi 150','3.0 HDi 160'],
'Xsara':['1.4i 75','1.4 HDi 70','1.6i 110','1.6 HDi 90','1.6 HDi 110','1.8i 16V 110','2.0i 16V 136','2.0 HDi 90','2.0 HDi 110'],
'Xsara Picasso':['1.6i 95','1.6i 110','1.6 HDi 90','1.6 HDi 110','1.8i 16V 115','2.0i 16V 136','2.0 HDi 90'],
'BX':['1.4i 72','1.6i 90','1.9i 105','1.9D 65','1.9 TD 90'],
'ZX':['1.1i 60','1.4i 75','1.6i 89','1.8i 110','1.8i 16V 110','1.9D 65','1.9 TD 90','2.0i 16V 152'],
'C8':['2.0i 140','2.0 HDi 136','2.2 HDi 128','2.2 HDi 170','3.0 V6 210'],
'Nemo':['1.4i 75','1.3 HDi 75','1.4 HDi 70'],
'DS3':['1.2 PureTech 82','1.2 PureTech 110','1.2 PureTech 130','1.4 VTi 95','1.6 VTi 120','1.6 THP 155','1.6 THP 165','1.6 THP 200','1.6 THP 208','1.4 HDi 70','1.6 BlueHDi 100','1.6 BlueHDi 120','1.6 HDi 90','1.6 HDi 110','1.6 HDi 115'],
'DS4':['1.2 PureTech 130','1.6 THP 165','1.6 THP 200','1.6 BlueHDi 120','1.6 HDi 110','1.6 HDi 115','2.0 BlueHDi 150','2.0 BlueHDi 180','2.0 HDi 136','2.0 HDi 150'],
'DS5':['1.6 THP 165','1.6 THP 200','2.0 BlueHDi 150','2.0 BlueHDi 180','2.0 HDi 136','2.0 HDi 163','Hybrid4 200']
,
'2CV':['0.4 12','0.6 21','0.6 29'],
'Ami':['Electrique 8'],
'Ami 6':['0.6 22'],
'Ami 8':['0.6 32'],
'Visa':['1.0 50','1.1 55','1.4 75','1.7D 60','1.6 GTi 115'],
'Dyane':['0.4 24','0.6 32'],
'Méhari':['0.6 29'],
'GS':['1.0 55','1.2 56','1.2 65','1.3 65'],
'GSA':['1.3 65','1.3 75'],
'CX':['2.0 106','2.2 112','2.4 128','2.5D 75','2.5 TD 95','GTi Turbo 168'],
'SM':['2.7 V6 Maserati 170'],
'Traction':['1.9 56'],
'XM':['2.0 121','2.0 Turbo 150','3.0 V6 170','2.1 TD 110','2.5 TD 129'],
'Xantia':['1.6i 88','1.8i 103','1.8i 16V 110','2.0i 121','2.0i 16V 135','2.0 Turbo CT 150','1.9D 68','1.9 TD 90','2.0 HDi 90','2.0 HDi 110','2.1 TD 110','3.0 V6 190'],
'C-Elysée':['1.2 VTi 72','1.6 VTi 115','1.6 HDi 92'],
'C-Crosser':['2.2 HDi 156','2.4i 170'],
'C3 Picasso':['1.2 VTi 82','1.4 VTi 95','1.6 VTi 120','1.4 HDi 70','1.6 HDi 90','1.6 HDi 110'],
'C3 Pluriel':['1.4i 75','1.6i 110','1.4 HDi 70'],
'C4 Aircross':['1.6i 117','1.6 HDi 114','1.8 HDi 150'],
'C4 SpaceTourer':['1.2 PureTech 130','1.5 BlueHDi 130','2.0 BlueHDi 160'],
'C4 X':['1.2 PureTech 130','1.5 BlueHDi 130','ë-C4 X 136'],
'C6':['2.2 HDi 170','2.7 HDi V6 204','3.0 V6 211','3.0 HDi V6 240'],
'C-Zero':['Electrique 67'],
'C15':['1.1 55','1.8D 60','1.9D 70'],
'C25':['1.8 73','1.9D 69','2.5D 75','2.5 TD 95'],
'SpaceTourer':['1.5 BlueHDi 100','1.5 BlueHDi 120','2.0 BlueHDi 145','2.0 BlueHDi 180'],
'DS':['1.9 75','2.0 86','2.2 109','2.3 115'],
'Evasion':['1.8i 100','2.0i 121','2.0 Turbo 150','1.9 TD 90','2.0 HDi 110'],
'LN':['0.6 32'],
'ë-C4':['Electrique 136']},
'VOLKSWAGEN':{
'Golf':['1.0 TSI 85','1.0 TSI 95','1.0 TSI 110','1.2 TSI 85','1.2 TSI 105','1.4 TSI 122','1.4 TSI 125','1.4 TSI 140','1.4 TSI 150','1.5 TSI 115','1.5 TSI 130','1.5 TSI 150','1.5 eTSI 130','1.5 eTSI 150','1.6i 100','1.6 TDI 90','1.6 TDI 105','1.6 TDI 110','1.6 TDI 115','1.9 TDI 90','1.9 TDI 100','1.9 TDI 105','1.9 TDI 110','1.9 TDI 115','1.9 TDI 130','1.9 TDI 150','2.0i 115','2.0 TDI 115','2.0 TDI 136','2.0 TDI 140','2.0 TDI 150','2.0 TDI 200','2.0 TSI GTI 200','2.0 TSI GTI 220','2.0 TSI GTI 230','2.0 TSI GTI 245','2.0 TSI R 300','2.0 TSI R 320','1.4 GTE Hybrid 204','1.4 eHybrid 245'],
'Polo':['1.0i 60','1.0i 65','1.0 TSI 65','1.0 TSI 80','1.0 TSI 95','1.0 TSI 110','1.2i 60','1.2i 70','1.2 TSI 90','1.2 TSI 110','1.4i 75','1.4 TDI 70','1.4 TDI 75','1.4 TDI 80','1.4 TSI 150','1.5 TSI 150','1.6i 100','1.6 TDI 75','1.6 TDI 80','1.6 TDI 90','1.6 TDI 105','1.9 SDI 64','1.9 TDI 100','1.9 TDI 130','2.0 GTI 200','2.0 TSI GTI 200'],
'Passat':['1.4 TSI 122','1.4 TSI 125','1.4 TSI 150','1.5 TSI 150','1.6i 102','1.6 TDI 105','1.6 TDI 120','1.8 TSI 160','1.8 TSI 180','1.9 TDI 90','1.9 TDI 100','1.9 TDI 105','1.9 TDI 110','1.9 TDI 115','1.9 TDI 130','2.0i 115','2.0 TDI 122','2.0 TDI 136','2.0 TDI 140','2.0 TDI 150','2.0 TDI 170','2.0 TDI 190','2.0 TDI 200','2.0 TDI 240','2.0 TSI 190','2.0 TSI 220','2.0 TSI 272','2.5 TDI V6 150','2.5 TDI V6 163','2.5 TDI V6 180','1.4 TSI GTE 218'],
'Tiguan':['1.4 TSI 125','1.4 TSI 150','1.5 TSI 130','1.5 TSI 150','2.0 TDI 115','2.0 TDI 122','2.0 TDI 140','2.0 TDI 150','2.0 TDI 190','2.0 TDI 200','2.0 TSI 190','2.0 TSI 220','2.0 TSI 245','1.4 eHybrid 245'],
'Touran':['1.2 TSI 105','1.2 TSI 110','1.4 TSI 140','1.4 TSI 150','1.5 TSI 150','1.6i 102','1.6 TDI 90','1.6 TDI 105','1.6 TDI 110','1.6 TDI 115','1.9 TDI 90','1.9 TDI 100','1.9 TDI 105','2.0 TDI 136','2.0 TDI 140','2.0 TDI 150','2.0 TDI 190'],
'T-Roc':['1.0 TSI 110','1.0 TSI 115','1.5 TSI 150','2.0 TDI 115','2.0 TDI 150','2.0 TSI 190','2.0 TSI R 300'],
'T-Cross':['1.0 TSI 95','1.0 TSI 110','1.0 TSI 115','1.5 TSI 150','1.6 TDI 95'],
'Transporter':['1.9 TDI 84','1.9 TDI 102','2.0 BiTDI 180','2.0 TDI 84','2.0 TDI 102','2.0 TDI 114','2.0 TDI 140','2.0 TDI 150','2.0 TDI 180','2.0 TDI 204','2.5 TDI 130','2.5 TDI 174'],
'Caddy':['1.2 TSI 84','1.4i 75','1.5 TSI 114','1.6i 102','1.6 TDI 75','1.6 TDI 102','1.9 TDI 75','1.9 TDI 105','2.0 SDI 70','2.0 TDI 102','2.0 TDI 122','2.0 TDI 150'],
'Up!':['1.0i 60','1.0i 65','1.0i 68','1.0i 75','e-Up! 83'],
'Touareg':['2.0 TDI 193','3.0 TDI 204','3.0 TDI 231','3.0 TDI 245','3.0 TDI 262','3.0 TDI 286','3.0 TSI 340','3.0 V6 eHybrid 381','4.2 TDI V8 340'],
'Crafter':['2.0 TDI 102','2.0 TDI 109','2.0 TDI 122','2.0 TDI 140','2.0 TDI 163','2.0 TDI 177'],
'Arteon':['1.5 TSI 150','2.0 TDI 150','2.0 TDI 190','2.0 TSI 190','2.0 TSI 280 R','1.4 eHybrid 218'],
'ID.3':['Pure 150','Pro 204','Pro S 204','GTX 286'],
'ID.4':['Pure 170','Pro 204','Pro S 204','GTX 299'],
'ID.5':['Pro 204','Pro S 204','GTX 299'],
'Scirocco':['1.4 TSI 122','1.4 TSI 160','2.0 TDI 140','2.0 TDI 150','2.0 TDI 170','2.0 TDI 184','2.0 TSI 200','2.0 TSI 210','2.0 TSI R 265','2.0 TSI R 280'],
'Sharan':['1.4 TSI 150','2.0 TDI 115','2.0 TDI 140','2.0 TDI 150','2.0 TDI 170','2.0 TDI 184'],
'Amarok':['2.0 TDI 140','2.0 TDI 163','2.0 TDI 180','2.0 BiTDI 163','2.0 BiTDI 180','3.0 TDI V6 204','3.0 TDI V6 224','3.0 TDI V6 258'],
'Coccinelle':['1.2 TSI 105','1.4 TSI 150','1.4 TSI 160','2.0 TDI 110','2.0 TDI 140','2.0 TDI 150','2.0 TSI 200','2.0 TSI 220'],
'Bora':['1.4i 75','1.6i 100','1.6i 102','1.8 Turbo 150','1.8 Turbo 180','1.9 TDI 90','1.9 TDI 100','1.9 TDI 115','1.9 TDI 130','1.9 TDI 150','2.0i 115','2.3 V5 150','2.8 V6 204']
,
'Atlas':['2.0 TSI 235','3.6 V6 276'],
'Beetle':['1.2 TSI 105','1.4 TSI 150','2.0 TDI 110','2.0 TDI 150','2.0 TSI 200','2.0 TSI 220'],
'Caravelle':['2.0 TDI 102','2.0 TDI 114','2.0 TDI 150','2.0 TDI 199','2.0 TSI 150','2.0 TSI 204'],
'CC':['1.4 TSI 160','1.8 TSI 160','2.0 TDI 140','2.0 TDI 170','2.0 TSI 200','2.0 TSI 210','3.6 V6 300'],
'Corrado':['1.8 16V 136','2.0i 115','2.0 16V 136','2.9 VR6 190'],
'Derby':['0.9 40','1.1 50','1.3 55','1.3D 45'],
'Eos':['1.4 TSI 122','1.4 TSI 160','2.0 TDI 140','2.0 TSI 200','2.0 TSI 210','3.6 V6 260'],
'Fox':['1.2i 55','1.4i 75','1.4 TDI 70'],
'Golf Plus':['1.2 TSI 105','1.4i 80','1.4 TSI 122','1.4 TSI 140','1.6i 102','1.6 TDI 90','1.6 TDI 105','1.9 TDI 90','1.9 TDI 105','2.0 TDI 136','2.0 TDI 140'],
'Golf Sportsvan':['1.2 TSI 85','1.2 TSI 110','1.4 TSI 125','1.4 TSI 150','1.6 TDI 90','1.6 TDI 110','2.0 TDI 150'],
'ID.7':['Pro 286','Pro S 286','GTX 340'],
'ID. Buzz':['Pro 204','Pro S 204','GTX 340'],
'Jetta':['1.2 TSI 105','1.4 TSI 122','1.4 TSI 150','1.4 TSI 160','1.6i 102','1.6 TDI 105','1.9 TDI 105','2.0 TDI 140','2.0 TDI 150','2.0 TDI 170','2.0 TSI 200'],
'Karmann Ghia':['1.2 30','1.2 34','1.5 44','1.6 50'],
'LT':['2.5 TDI 75','2.5 TDI 90','2.5 TDI 109','2.8 TDI 130','2.8 TDI 158'],
'Lupo':['1.0i 50','1.4i 60','1.4i 75','1.4i 16V 100','1.2 TDI 61','1.4 TDI 75','1.7 SDI 60'],
'Multivan':['1.5 TSI 136','2.0 TDI 102','2.0 TDI 150','2.0 TDI 204','1.4 eHybrid 218'],
'New Beetle':['1.4i 75','1.6i 102','1.8 Turbo 150','1.9 TDI 90','1.9 TDI 100','1.9 TDI 105','2.0i 115','2.5i 150'],
'Phaeton':['3.0 TDI V6 224','3.0 TDI V6 240','3.2 V6 241','4.2 V8 335','6.0 W12 450'],
'Santana':['1.3 55','1.6 75','1.8 90','1.6D 54','1.6 TD 70'],
'Taigo':['1.0 TSI 95','1.0 TSI 110','1.5 TSI 150'],
'Tiguan Allspace':['1.4 TSI 150','1.5 TSI 150','2.0 TDI 150','2.0 TDI 190','2.0 TDI 200','2.0 TSI 190','2.0 TSI 245'],
'Vento':['1.4i 60','1.6i 75','1.6i 100','1.8i 90','2.0i 115','2.8 VR6 174','1.9 D 65','1.9 SDI 64','1.9 TD 75','1.9 TDI 90','1.9 TDI 110']},
'BMW':{
'Série 1':['114d 95','116d 116','118d 150','120d 190','125d 224','116i 109','118i 136','120i 178','125i 218','128ti 265','M135i xDrive 306'],
'Série 2':['216d 116','218d 150','220d 190','225d 224','218i 136','220i 178','M235i 306','M240i 374'],
'Série 3':['316d 116','318d 150','320d 163','320d 190','325d 218','330d 258','335d 313','M340d 340','316i 136','318i 156','320i 184','325i 218','330i 258','335i 306','M340i 374','330e Hybrid 252','330e Hybrid 292','320 2.0 136 (E90)','325 2.5 218 (E90)','330 3.0 258 (E90)','318d 143 (E90)','320d 177 (E90)','325d 197 (E90)','330d 231 (E90)','335d 286 (E90)'],
'Série 4':['418d 150','420d 190','425d 224','430d 258','440d 326','420i 184','430i 258','440i 326','M440i 374','M4 480','M4 Competition 510'],
'Série 5':['518d 150','520d 163','520d 190','525d 218','530d 258','535d 313','540d 320','520i 184','530i 252','540i 340','M550i 530','530e Hybrid 252','545e Hybrid 394','520d 177 (E60)','525d 197 (E60)','530d 231 (E60)','535d 272 (E60)','523i 177 (E60)','525i 218 (E60)','530i 258 (E60)'],
'Série 7':['730d 265','740d 320','750d 400','730i 258','740i 340','750i 530','745e Hybrid 394'],
'X1':['16d 116','18d 150','20d 190','23d 231','25d 231','16i 109','18i 136','20i 192','25i 231','25e xDrive Hybrid 220'],
'X3':['18d 150','20d 190','25d 231','30d 265','35d 313','M40d 340','18i 156','20i 184','30i 252','M40i 360','30e xDrive Hybrid 292'],
'X5':['25d 231','30d 258','30d 265','35d 313','40d 313','M50d 400','30i 265','40i 340','M50i 530','45e Hybrid 394','xDrive30d 286 (E70)','xDrive35d 286 (E70)','xDrive48i 355 (E70)'],
'X6':['30d 258','35d 313','40d 313','M50d 400','35i 306','40i 340','M50i 530','M Competition 625'],
'M2':['M2 370','M2 Competition 410','M2 CS 450','M2 (G87) 460'],
'M3':['M3 431','M3 Competition 510','M3 CS 550','M3 E46 343','M3 E90 420','M3 E92 420'],
'M4':['M4 431','M4 Competition 510','M4 CS 460','M4 GTS 500','M4 CSL 550'],
'M5':['M5 600','M5 Competition 625','M5 CS 635','M5 E60 507','M5 E39 400'],
'i3':['i3 170','i3 125','i3s 184','i3 120Ah 170'],
'i4':['eDrive35 286','eDrive40 340','M50 544'],
'iX':['xDrive40 326','xDrive50 523','M60 619'],
'Z4':['18i 156','20i 197','30i 258','M40i 340','3.0i 231','3.0si 265','2.5si 218']
,
'Série 2 Active Tourer':['216d 116','218d 150','220d 190','225d 224','225xe Hybrid 224','216i 109','218i 136','220i 178'],
'Série 2 Gran Coupé':['216d 116','218d 150','220d 190','218i 136','220i 178','M235i 306'],
'Série 6':['620d 190','630d 265','640d 313','630i 258','640i 340','650i 449','M6 560'],
'Série 8':['840d 320','840i 340','M850i 530','M8 625'],
'X2':['16d 116','18d 150','20d 190','18i 136','20i 192','25e xDrive Hybrid 220','M35i 306'],
'X4':['20d 190','25d 231','30d 265','M40d 340','20i 184','30i 252','M40i 360','M Competition 510'],
'X7':['30d 265','40d 340','M60i 530','40i 340'],
'XM':['50e 653','Label 748'],
'i5':['eDrive40 340','M60 xDrive 601'],
'i7':['eDrive50 455','xDrive60 544','M70 660'],
'i8':['1.5 Turbo Hybrid 374'],
'Z3':['1.8i 116','1.9i 140','2.0i 150','2.2i 170','2.8i 192','3.0i 231','M 325'],
'Z8':['5.0 V8 400'],
'Z1':['2.5i 170'],
'iX1':['xDrive30 313'],
'iX3':['Electrique 286'],
'114':['1.6d 95'],
'116':['1.6i 122','2.0d 116'],
'118':['1.5i 136','2.0d 150'],
'120':['2.0i 177','2.0d 190'],
'125':['2.0i 218','2.0d 224'],
'130':['3.0i 265'],
'218':['1.5i 136','2.0d 150'],
'220':['2.0i 184','2.0d 190'],
'225':['2.0i 231','2.0d 224'],
'225xe':['1.5 Hybrid 224'],
'316':['1.6i 102','2.0d 116'],
'318':['1.5i 136','2.0i 156','2.0d 150'],
'320':['2.0i 156','2.0i 184','2.0d 163','2.0d 190'],
'323':['2.5i 170'],
'325':['2.5i 192','2.5i 218'],
'328':['2.8i 193'],
'330':['3.0i 231','2.0i 258','2.0d 258'],
'330e':['2.0 Hybrid 292'],
'335':['3.0i 306','3.0d 286'],
'340':['3.0i 326'],
'418':['2.0d 150'],
'420':['2.0i 184','2.0d 190'],
'425':['2.0d 224'],
'428':['2.0i 245'],
'430':['2.0i 258','3.0d 258'],
'435':['3.0i 306'],
'440':['3.0i 326'],
'518':['2.0d 150'],
'520':['2.0i 184','2.0d 190'],
'523':['2.5i 177'],
'525':['2.5i 218','2.0d 218'],
'528':['2.8i 193','3.0i 258'],
'530':['2.0i 252','3.0d 258'],
'530e':['2.0 Hybrid 292'],
'535':['3.0i 306','3.0d 313'],
'540':['3.0i 340'],
'545':['4.4i V8 333'],
'550':['4.4i V8 449'],
'620':['2.0d 190'],
'628':['2.8i 258'],
'630':['3.0i 258'],
'633':['3.2i 200'],
'635':['3.4i 218'],
'640':['3.0i 320'],
'645':['4.4i V8 333'],
'650':['4.4i V8 449'],
'725':['2.5d 197'],
'728':['2.8i 193'],
'730':['3.0d 265'],
'735':['3.5i V8 272'],
'740':['4.0d 320','3.0i 340'],
'745':['4.4i V8 333'],
'745e':['3.0 Hybrid 394'],
'750':['5.0i V8 407','4.4i V8 530'],
'760':['6.0 V12 544'],
'840':['3.0d 320','4.4i V8 530'],
'850':['5.0i V12 300','5.4i V12 381'],
'M6':['4.4 V8 560','5.0 V10 507'],
'M8':['4.4 V8 600','4.4 V8 Competition 625'],
'X5 xDrive45e':['3.0 Hybrid 394'],
'02 Série':['2.0 100'],
'1502':['1.5 75'],
'1600':['1.6 85'],
'1800':['1.8 90'],
'2000':['2.0 100'],
'2002':['2.0 100','2.0 Turbo 170']},
'AUDI':{
'A1':['1.0 TFSI 95','1.0 TFSI 116','1.2 TFSI 86','1.4 TFSI 125','1.4 TFSI 150','1.5 TFSI 150','1.6 TDI 90','1.6 TDI 105','1.6 TDI 116','2.0 TFSI S1 231'],
'A3':['1.0 TFSI 116','1.2 TFSI 105','1.2 TFSI 110','1.4 TFSI 122','1.4 TFSI 125','1.4 TFSI 140','1.4 TFSI 150','1.5 TFSI 150','1.6 TDI 90','1.6 TDI 105','1.6 TDI 110','1.6 TDI 115','1.8 TFSI 180','1.9 TDI 100','1.9 TDI 105','2.0 TDI 136','2.0 TDI 140','2.0 TDI 143','2.0 TDI 150','2.0 TDI 184','2.0 TFSI 190','2.0 TFSI S3 300','2.0 TFSI S3 310','2.5 TFSI RS3 367','2.5 TFSI RS3 400','40 TFSI e 204'],
'A4':['1.4 TFSI 150','1.8 TFSI 120','1.8 TFSI 160','1.8 TFSI 170','2.0 TDI 116','2.0 TDI 122','2.0 TDI 136','2.0 TDI 140','2.0 TDI 143','2.0 TDI 150','2.0 TDI 163','2.0 TDI 170','2.0 TDI 177','2.0 TDI 190','2.0 TDI 204','2.0 TFSI 150','2.0 TFSI 190','2.0 TFSI 252','2.7 TDI 163','2.7 TDI 190','3.0 TDI 204','3.0 TDI 218','3.0 TDI 233','3.0 TDI 240','3.0 TDI 245','3.0 TDI 272','2.0 TFSI RS4 450'],
'A5':['2.0 TDI 150','2.0 TDI 163','2.0 TDI 170','2.0 TDI 177','2.0 TDI 190','2.0 TDI 204','2.0 TFSI 190','2.0 TFSI 252','2.7 TDI 163','2.7 TDI 190','3.0 TDI 204','3.0 TDI 218','3.0 TDI 245','3.0 TDI 272','2.9 TFSI RS5 450'],
'A6':['2.0 TDI 136','2.0 TDI 150','2.0 TDI 163','2.0 TDI 177','2.0 TDI 190','2.0 TDI 204','2.0 TFSI 252','2.7 TDI 163','2.7 TDI 190','3.0 TDI 204','3.0 TDI 218','3.0 TDI 245','3.0 TDI 272','3.0 TDI 286','3.0 TDI 326','3.0 TFSI 340','4.0 TFSI RS6 560','4.0 TFSI RS6 600'],
'A7':['2.0 TDI 150','2.0 TDI 204','3.0 TDI 218','3.0 TDI 245','3.0 TDI 272','3.0 TDI 286','3.0 TDI 326','3.0 TFSI 340','2.9 TFSI RS7 600'],
'A8':['3.0 TDI 258','3.0 TDI 286','3.0 TFSI 340','4.0 TDI 435','4.0 TFSI 460','6.0 W12 500','S8 4.0 TFSI 571'],
'Q2':['1.0 TFSI 116','1.4 TFSI 150','1.5 TFSI 150','1.6 TDI 116','2.0 TDI 150','2.0 TFSI SQ2 300'],
'Q3':['1.4 TFSI 150','2.0 TDI 120','2.0 TDI 140','2.0 TDI 150','2.0 TDI 184','2.0 TFSI 220','35 TDI 150','35 TFSI 150','40 TDI 190','2.5 TFSI RS Q3 400','45 TFSI e Hybrid 245'],
'Q5':['2.0 TDI 150','2.0 TDI 163','2.0 TDI 170','2.0 TDI 190','2.0 TDI 204','2.0 TFSI 252','3.0 TDI 240','3.0 TDI 258','3.0 TDI 286','2.9 TFSI RS Q5 400','55 TFSI e Hybrid 367'],
'Q7':['3.0 TDI 218','3.0 TDI 231','3.0 TDI 245','3.0 TDI 272','3.0 TDI 286','3.0 TFSI 340','4.0 TDI 435','4.2 TDI 340','SQ7 4.0 TDI 435','55 TFSI e Hybrid 381'],
'Q8':['3.0 TDI 231','3.0 TDI 286','3.0 TFSI 340','SQ8 4.0 TDI 435','RS Q8 4.0 TFSI 600'],
'TT':['1.8 TFSI 180','2.0 TDI 184','2.0 TFSI 230','2.0 TFSI TTS 310','2.5 TFSI TT RS 400'],
'e-tron':['50 quattro 313','55 quattro 408','S e-tron 503'],
'e-tron GT':['350 476','RS e-tron GT 598']
,
'50':['1.1 50','1.3 60'],
'80':['1.3 60','1.6 75','1.6 100','1.8 90','1.8 112','2.0 115','2.0 16V 137','1.6D 54','1.6 TD 80','1.9 TDI 90'],
'90':['2.0 115','2.3 136','2.3 20V 170','2.0 16V 137'],
'100':['2.0 115','2.3 133','2.6 V6 150','2.8 V6 174','2.4D 82','2.5 TDI 115','2.5 TDI 140'],
'200':['2.1 Turbo 182','2.2 Turbo 200','2.2 Turbo 220'],
'A2':['1.4i 75','1.6i 110','1.2 TDI 61','1.4 TDI 75','1.4 TDI 90'],
'A4 Allroad':['2.0 TDI 150','2.0 TDI 163','2.0 TDI 190','2.0 TFSI 252','3.0 TDI 218','3.0 TDI 245','3.0 TDI 272'],
'A6 Allroad':['2.0 TDI 190','3.0 TDI 218','3.0 TDI 245','3.0 TDI 272','3.0 TDI 286','3.0 TFSI 340'],
'Cabriolet':['1.8 125','2.0 115','2.3 133','2.6 V6 150','2.8 V6 174'],
'Coupé':['2.0 115','2.0 16V 137','2.3 133','2.6 V6 150','2.8 V6 174'],
'Q4 e-tron':['35 170','40 204','45 265','50 299'],
'Q8 e-tron':['50 340','55 408','SQ8 503'],
'RS3':['2.5 TFSI 367','2.5 TFSI 400'],
'RS4':['2.9 TFSI 450'],
'RS5':['2.9 TFSI 450'],
'RS6':['4.0 TFSI 560','4.0 TFSI 600','4.0 TFSI 630'],
'RS7':['4.0 TFSI 600'],
'RS Q3':['2.5 TFSI 400'],
'RS Q8':['4.0 TFSI 600'],
'S1':['2.0 TFSI 231'],
'S3':['2.0 TFSI 300','2.0 TFSI 310','2.0 TFSI 333'],
'S4':['3.0 TFSI 354'],
'S5':['3.0 TFSI 354'],
'S6':['4.0 TFSI 450','3.0 TDI 349'],
'S7':['4.0 TFSI 450','3.0 TDI 349'],
'S8':['4.0 TFSI 571','4.0 TFSI 600'],
'SQ5':['3.0 TFSI 354','3.0 TDI 347'],
'SQ7':['4.0 TDI 435'],
'SQ8':['4.0 TDI 435'],
'TTS':['2.0 TFSI 310'],
'TT RS':['2.5 TFSI 400'],
'V8':['3.6 V8 250','4.2 V8 280']},
'MERCEDES':{
'Classe A':['160 102','180 136','200 163','220 190','250 224','35 AMG 306','45 AMG S 421','180d 116','200d 150','220d 190','250e Hybrid 218'],
'Classe B':['160 102','180 136','200 163','220 190','250 224','250e Hybrid 218','180d 116','200d 150','220d 190'],
'Classe C':['180 156','200 184','220 197','250 211','300 258','43 AMG 390','63 AMG 476','63 AMG S 510','200d 160','220d 194','300d 265','300de Hybrid 306','350e Hybrid 320'],
'Classe E':['200 184','220 194','300 258','350 272','400 333','43 AMG 401','53 AMG 435','63 AMG 571','200d 194','220d 194','300d 265','400d 330','300de Hybrid 306','300e Hybrid 320'],
'Classe S':['350d 286','400d 330','450 367','500 435','580 510','63 AMG S 612','Maybach 580 503','Maybach 680 612'],
'Classe G':['350d 286','400d 330','500 422','63 AMG 585'],
'Classe V':['200d 136','220d 163','250d 190','300d 239','EQV 204'],
'GLA':['180 136','200 163','220 190','250 224','35 AMG 306','45 AMG S 421','180d 116','200d 150','220d 190','250e Hybrid 218'],
'GLB':['180 136','200 163','220 190','250 224','35 AMG 306','180d 116','200d 150','220d 190'],
'GLC':['200 197','220 197','250 211','300 258','43 AMG 390','63 AMG 476','63 AMG S 510','200d 194','220d 194','300d 265','350d 258','300de Hybrid 306','300e Hybrid 320'],
'GLE':['300d 272','350d 272','400d 330','350 272','450 367','53 AMG 435','63 AMG S 612','350de Hybrid 320'],
'GLS':['350d 286','400d 330','450 367','580 510','63 AMG S 612','Maybach 600 558'],
'AMG GT':['43 367','53 435','63 585','63 S 639','Black Series 730','R 585'],
'CLA':['180 136','200 163','220 190','250 224','35 AMG 306','45 AMG S 421','180d 116','200d 150','220d 190'],
'CLS':['220d 194','300d 265','350d 286','400d 340','350 299','450 367','53 AMG 435','63 AMG S 612'],
'Sprinter':['211 CDI 109','213 CDI 129','214 CDI 143','216 CDI 163','219 CDI 190','311 CDI 109','313 CDI 129','314 CDI 143','316 CDI 163','319 CDI 190','511 CDI 109','514 CDI 143','516 CDI 163','519 CDI 190'],
'Vito':['110 CDI 95','111 CDI 109','113 CDI 136','114 CDI 136','116 CDI 163','119 CDI 190','eVito Electrique 116'],
'EQA':['250 190','250+ 190','300 4MATIC 228','350 4MATIC 292'],
'EQB':['250+ 190','300 4MATIC 228','350 4MATIC 292'],
'EQC':['400 4MATIC 408'],
'EQE':['300 245','350+ 292','43 AMG 476','53 AMG 625'],
'EQS':['350+ 292','450+ 360','53 AMG 658','580 4MATIC 523']
,
'190':['1.8 109','2.0 122','2.3 132','2.3-16V 185','2.5 16V 195','2.0D 75','2.5D 94','2.5 TD 122'],
'ML':['250 CDI 204','300 CDI 204','320 CDI 224','350 CDI 258','350 272','400 CDI 250','500 306','63 AMG 510','63 AMG 525'],
'CLK':['200 163','200 K 184','240 170','270 CDI 170','280 231','320 218','320 CDI 224','350 272','500 306','55 AMG 367','63 AMG 481'],
'SLK':['200 163','200 K 163','250 CDI 204','280 231','300 231','350 272','350 306','55 AMG 360','200 184'],
'SL':['300 231','350 306','400 333','500 435','55 AMG 517','63 AMG 585','65 AMG 630'],
'SLC':['180 156','200 184','300 245','43 AMG 390'],
'SLS':['6.2 V8 AMG 571','6.2 V8 AMG GT 591'],
'GLK':['200 CDI 143','220 CDI 170','250 CDI 204','280 231','350 CDI 265','350 272'],
'CLC':['160 129','180 K 143','200 K 184','220 CDI 150','200 CDI 122','350 272'],
'CL':['500 388','500 435','600 517','63 AMG 525','65 AMG 612'],
'Viano':['2.0 CDI 116','2.2 CDI 163','3.0 CDI 224','3.5 V6 258'],
'Vaneo':['1.6i 82','1.6i 102','1.7 CDI 67','1.7 CDI 91'],
'Classe R':['280 CDI 190','300 CDI 211','320 CDI 224','350 CDI 265','350 272','500 306','63 AMG 510'],
'Classe X':['220d 163','250d 190','350d 258'],
'SLR':['5.4 V8 626'],
'Classe M':['250 CDI 204','300 CDI 204','320 CDI 224','350 CDI 258','350 272','500 388','63 AMG 510'],
'170':['1.7 52'],
'200':['2.0 94','2.0 109','2.0D 55'],
'220':['2.2 105','2.2 115','2.2D 60'],
'230':['2.3 136','2.3 150'],
'240':['2.4 130','2.4 140'],
'250':['2.5 130','2.5 150','2.5D 65'],
'260':['2.6 166','2.6 170'],
'280':['2.8 160','2.8 185','2.8 197'],
'300':['3.0 136','3.0 185','3.0 188','3.0D 80','3.0 TD 143'],
'320':['3.2 197','3.2 220'],
'350':['3.5 245','3.5 272'],
'380':['3.8 204','3.8 218'],
'400':['4.0 250','4.0 V8 422'],
'420':['4.2 218','4.2 224'],
'450':['4.5 225','4.5 V8 367'],
'500':['5.0 240','5.0 V8 306','5.0 V8 388'],
'560':['5.5 300'],
'600':['6.0 V12 394','6.0 V12 517']},
'FORD':{
'Fiesta':['1.0 EcoBoost 65','1.0 EcoBoost 75','1.0 EcoBoost 85','1.0 EcoBoost 95','1.0 EcoBoost 100','1.0 EcoBoost 125','1.0 EcoBoost 140','1.0 EcoBoost ST 200','1.25i 60','1.25i 82','1.4i 96','1.4 TDCi 68','1.5 TDCi 75','1.5 TDCi 85','1.5 TDCi 120','1.6 TDCi 90','1.6 TDCi 95'],
'Focus':['1.0 EcoBoost 100','1.0 EcoBoost 125','1.0 EcoBoost 155','1.5 EcoBlue 95','1.5 EcoBlue 120','1.5 EcoBoost 150','1.5 EcoBoost 182','1.5 TDCi 95','1.5 TDCi 105','1.5 TDCi 120','1.6i 100','1.6 TDCi 90','1.6 TDCi 95','1.6 TDCi 105','1.6 TDCi 115','1.8 TDCi 100','1.8 TDCi 115','2.0 TDCi 136','2.0 TDCi 150','2.0 EcoBlue 150','2.3 EcoBoost ST 280','2.5 RS 305','2.5 RS 350'],
'Kuga':['1.5 EcoBlue 120','1.5 EcoBoost 120','1.5 EcoBoost 150','2.0 EcoBlue 150','2.0 EcoBlue 190','2.0 TDCi 120','2.0 TDCi 136','2.0 TDCi 150','2.0 TDCi 180','2.5 FHEV 190','2.5 PHEV 225'],
'Mondeo':['1.0 EcoBoost 125','1.5 EcoBoost 160','1.5 TDCi 120','1.8 TDCi 100','1.8 TDCi 125','2.0 EcoBlue 150','2.0 EcoBlue 190','2.0 Hybrid 187','2.0 TDCi 130','2.0 TDCi 140','2.0 TDCi 150','2.0 TDCi 180','2.2 TDCi 175','2.2 TDCi 200'],
'Puma':['1.0 EcoBoost 95','1.0 EcoBoost 125','1.0 EcoBoost 155','1.0 EcoBoost mHEV 125','1.0 EcoBoost mHEV 155','1.5 EcoBlue 120','1.5 EcoBoost ST 200'],
'Transit':['2.0 EcoBlue 105','2.0 EcoBlue 130','2.0 EcoBlue 150','2.0 EcoBlue 170','2.0 EcoBlue 185','2.2 TDCi 100','2.2 TDCi 125','2.2 TDCi 140','2.2 TDCi 155','2.4 TDCi 100','2.4 TDCi 115','2.4 TDCi 140'],
'Transit Custom':['2.0 EcoBlue 105','2.0 EcoBlue 130','2.0 EcoBlue 150','2.0 EcoBlue 170','2.0 EcoBlue 185','1.0 EcoBoost PHEV 126'],
'Transit Connect':['1.5 EcoBlue 75','1.5 EcoBlue 100','1.5 EcoBlue 120','1.6 TDCi 75','1.6 TDCi 95','1.6 TDCi 115'],
'Ranger':['2.0 EcoBlue 130','2.0 EcoBlue 170','2.0 EcoBlue Bi-Turbo 213','2.2 TDCi 125','2.2 TDCi 150','3.2 TDCi 200','3.0 EcoBoost V6 Raptor 288'],
'Mustang':['2.3 EcoBoost 290','2.3 EcoBoost 317','5.0 V8 GT 421','5.0 V8 GT 450','Mach-E 269','Mach-E 351'],
'Explorer':['2.3 EcoBoost 300','3.0 V6 EcoBoost 457','3.0 V6 PHEV 457'],
'C-Max':['1.0 EcoBoost 100','1.0 EcoBoost 125','1.5 EcoBoost 150','1.5 TDCi 95','1.5 TDCi 120','1.6 TDCi 95','1.6 TDCi 115','2.0 TDCi 136','2.0 TDCi 150','2.0 TDCi 163'],
'S-Max':['1.5 EcoBoost 160','2.0 EcoBlue 150','2.0 EcoBlue 190','2.0 EcoBlue 240','2.0 TDCi 120','2.0 TDCi 140','2.0 TDCi 150','2.0 TDCi 163','2.0 TDCi 180'],
'Galaxy':['1.5 EcoBoost 160','2.0 EcoBlue 150','2.0 EcoBlue 190','2.0 EcoBlue 240','2.0 TDCi 140','2.0 TDCi 150','2.0 TDCi 163','2.0 TDCi 180'],
'EcoSport':['1.0 EcoBoost 100','1.0 EcoBoost 125','1.0 EcoBoost 140','1.5 TDCi 90','1.5 TDCi 100','1.5 Ti-VCT 112'],
'Escort':['1.3i 60','1.4i 75','1.6i 90','1.6i 105','1.6i 16V 90','1.8i 105','1.8i 16V 115','1.8 TD 70','1.8 TD 90','1.6 RS Turbo 132','2.0 RS 150']
,
'Ka':['1.0i 50','1.2i 69','1.3i 60','1.3i 70','1.4 TDCi 75'],
'Ka+':['1.0i 70','1.2i 85','1.5 TDCi 95'],
'Capri':['1.3 72','1.6 88','2.0 90','2.3 V6 108','2.8 V6 160'],
'Sierra':['1.6i 75','1.8i 90','2.0i 100','2.0i 115','2.0 DOHC 150','2.0D 67','2.3D 67','2.5D 69','RS Cosworth 204','RS Cosworth 4x4 220'],
'Scorpio':['2.0i 115','2.0i 16V 136','2.3i 16V 147','2.9i V6 150','2.5 TD 125','2.5 TDi 130'],
'Granada':['2.0i 105','2.3i V6 114','2.8i V6 160','2.1D 63','2.5D 69'],
'Bronco':['2.3 EcoBoost 300','2.7 V6 EcoBoost 310','2.3 Badlands 300'],
'Edge':['2.0 TDCi 150','2.0 TDCi 180','2.0 TDCi 210','2.0 EcoBlue 190','2.0 EcoBlue 240'],
'Tourneo':['1.0 EcoBoost 100','1.0 EcoBoost 125','1.5 TDCi 75','1.5 TDCi 100','1.5 TDCi 120'],
'Mustang Mach-E':['Electrique 269','Electrique AWD 351','Electrique GT 487'],
'F-150':['2.7 V6 EcoBoost 325','3.0 V6 Diesel 250','3.5 V6 EcoBoost 400','5.0 V8 400','3.5 V6 HEV 430','F-150 Lightning 580'],
'Cortina':['1.3 57','1.6 65','1.6 72','2.0 98'],
'Cougar':['2.0i 16V 131','2.5 V6 170'],
'Escape':['1.5 EcoBoost 179','2.0 EcoBoost 245','2.5 Hybrid 200'],
'Excursion':['5.4 V8 258','6.0 V8 Diesel 325','6.8 V10 310'],
'Expedition':['3.5 V6 EcoBoost 400'],
'Fairlane':['4.7 V8 200','5.0 V8 215'],
'Falcon':['2.5 L6 144','4.7 V8 200'],
'Flex':['3.5 V6 262','3.5 V6 EcoBoost 365'],
'Fusion':['1.4 TDCi 68','1.6i 100','1.6 TDCi 90','1.6 TDCi 115','2.0 EcoBoost 240'],
'Maverick':['2.0i 124','2.7 TD 125','3.0i V6 197'],
'Orion':['1.3i 60','1.4i 75','1.6i 90','1.8 TD 70'],
'Probe':['2.0i 16V 116','2.5 V6 163'],
'Taunus':['1.3 54','1.6 68','2.0 98'],
'Thunderbird':['3.9 V8 252'],
'Windstar':['3.0 V6 150','3.8 V6 200']},
'TOYOTA':{
'Yaris':['1.0 VVT-i 69','1.0 VVT-i 72','1.3 VVT-i 87','1.3 VVT-i 99','1.4 D-4D 75','1.4 D-4D 90','1.5 VVT-i 111','1.5 Hybrid 100','1.5 Hybrid 116','1.5 Hybrid 130','GR Yaris 1.6 Turbo 261'],
'Yaris Cross':['1.5 Hybrid 116','1.5 Hybrid AWD 116'],
'Aygo':['1.0 VVT-i 68','1.0 VVT-i 72','1.4 D-4D 55'],
'Aygo X':['1.0 VVT-i 72'],
'Corolla':['1.2 Turbo 116','1.8 Hybrid 122','1.8 Hybrid 140','2.0 Hybrid 184','2.0 Hybrid 196'],
'Corolla Cross':['1.8 Hybrid 140','2.0 Hybrid 197'],
'C-HR':['1.2 Turbo 116','1.8 Hybrid 122','2.0 Hybrid 184'],
'RAV4':['2.0 VVT-i 175','2.0 D-4D 150','2.2 D-4D 150','2.2 D-4D 177','2.5 Hybrid 218','2.5 Hybrid 222','2.5 PHEV 306'],
'Prius':['1.5 Hybrid 78','1.8 Hybrid 122','1.8 Hybrid 136','2.0 Hybrid 196','2.0 PHEV 223'],
'Camry':['2.5 Hybrid 218'],
'Highlander':['2.5 Hybrid 248'],
'Land Cruiser':['2.8 D-4D 177','2.8 D-4D 204','3.0 D-4D 190','4.5 D-4D V8 272'],
'Hilux':['2.4 D-4D 150','2.8 D-4D 204','3.0 D-4D 171'],
'GR86':['2.4 Boxer 234'],
'Supra':['2.0 Turbo 258','3.0 Turbo 340','3.0 Turbo 387'],
'bZ4X':['Electrique 204','Electrique AWD 218'],
'Mirai':['Hydrogène 182'],
'ProAce':['1.5 D-4D 100','1.5 D-4D 120','2.0 D-4D 120','2.0 D-4D 150','2.0 D-4D 180']
,
'Celica':['1.8 VVT-i 143','1.8 VVTL-i 192'],
'Verso':['1.6 VVT-i 132','1.8 VVT-i 147','2.0 D-4D 116','2.0 D-4D 126','2.2 D-4D 150','2.2 D-4D 177'],
'Starlet':['1.0 54','1.3 75','1.3 82','1.5D 54'],
'GT86':['2.0 Boxer 200'],
'GR Yaris':['1.6 Turbo 261'],
'GR Supra':['2.0 Turbo 258','3.0 Turbo 340','3.0 Turbo 387'],
'Prius+':['1.8 Hybrid 136'],
'Prius Prime':['1.8 PHEV 122'],
'IQ':['1.0 VVT-i 68','1.3 VVT-i 98','1.4 D-4D 90'],
'MR2':['1.8 VVT-i 140'],
'Urban Cruiser':['1.3 VVT-i 101','1.4 D-4D 90'],
'4Runner':['2.7i 163','4.0 V6 270'],
'Carina':['1.6 107','1.8 116','2.0 133','2.0 TD 83'],
'Corona':['1.6 75','1.8 90','2.0 110','2.0D 73'],
'FJ Cruiser':['4.0 V6 259'],
'Paseo':['1.5 90','1.5 100'],
'Picnic':['2.0i 128','2.0 TD 90','2.2 TD 90'],
'Sequoia':['4.6 V8 310','5.7 V8 381'],
'Tercel':['1.3 82','1.5 93'],
'Tundra':['3.5 V6 Turbo 389','3.5 V6 Turbo Hybrid 437']},
'DACIA':{
'Sandero':['0.9 TCe 90','1.0 SCe 65','1.0 SCe 75','1.0 TCe 90','1.0 TCe 100','1.0 ECO-G 100','1.2i 75','1.4i 75','1.5 dCi 70','1.5 dCi 75','1.5 dCi 85','1.5 dCi 90','1.5 Blue dCi 75','1.5 Blue dCi 95'],
'Duster':['1.0 TCe 90','1.0 TCe 100','1.0 ECO-G 100','1.2 TCe 125','1.3 TCe 130','1.3 TCe 150','1.5 dCi 85','1.5 dCi 90','1.5 dCi 105','1.5 dCi 110','1.5 Blue dCi 95','1.5 Blue dCi 115','1.6 SCe 115','Hybrid 140'],
'Logan':['0.9 TCe 90','1.0 SCe 65','1.0 SCe 75','1.0 TCe 90','1.0 TCe 100','1.0 ECO-G 100','1.2i 75','1.4i 75','1.5 dCi 70','1.5 dCi 75','1.5 dCi 85','1.5 dCi 90','1.5 Blue dCi 75','1.5 Blue dCi 95','1.6i 85','1.6i 105'],
'Jogger':['1.0 TCe 110','1.0 ECO-G 100','Hybrid 140'],
'Spring':['Electrique 45','Electrique 65'],
'Dokker':['1.2 TCe 115','1.5 dCi 75','1.5 dCi 90','1.6 SCe 100'],
'Lodgy':['1.2 TCe 115','1.5 dCi 90','1.5 dCi 107','1.5 dCi 110','1.6 SCe 100']
,
'1300':['1.3 54']},
'FIAT':{
'500':['0.9 TwinAir 85','0.9 TwinAir 105','1.0 Hybrid 70','1.2i 69','1.3 Multijet 75','1.3 Multijet 95','1.4i 100','500e 118','500e 87'],
'500L':['0.9 TwinAir 105','1.3 Multijet 85','1.3 Multijet 95','1.4i 95','1.6 Multijet 105','1.6 Multijet 120'],
'500X':['1.0 120','1.3 150','1.3 Multijet 95','1.6 Multijet 120','1.6 Multijet 130','2.0 Multijet 140','2.0 Multijet 170'],
'Panda':['0.9 TwinAir 65','0.9 TwinAir 85','1.0 Hybrid 70','1.2i 69','1.3 Multijet 75','1.3 Multijet 80','0.9 TwinAir 4x4 85'],
'Punto':['1.2i 69','1.3 Multijet 75','1.3 Multijet 85','1.3 Multijet 90','1.3 Multijet 95','1.4i 77','1.4 MultiAir 105','1.6 Multijet 120'],
'Tipo':['1.0 100','1.3 Multijet 95','1.4i 95','1.6 Multijet 120','1.6 Multijet 130'],
'Ducato':['2.0 Multijet 115','2.3 Multijet 130','2.3 Multijet 140','2.3 Multijet 150','2.3 Multijet 160','2.3 Multijet 180','3.0 Multijet 160','3.0 Multijet 180','e-Ducato 122'],
'Doblo':['1.3 Multijet 75','1.3 Multijet 90','1.3 Multijet 95','1.4i 77','1.6 Multijet 90','1.6 Multijet 105','1.6 Multijet 120','2.0 Multijet 135'],
'Bravo':['1.4i 90','1.4 T-Jet 120','1.4 T-Jet 150','1.6 Multijet 105','1.6 Multijet 120','1.9 Multijet 120','1.9 Multijet 150','2.0 Multijet 165'],
'Scudo':['1.6 Multijet 90','2.0 Multijet 120','2.0 Multijet 128','2.0 Multijet 140','2.0 Multijet 165'],
'Fiorino':['1.3 Multijet 75','1.3 Multijet 80','1.3 Multijet 95','1.4i 73']
,
'Brava':['1.2i 82','1.4 12V 80','1.6 16V 103','1.8 16V 113','1.9 JTD 100','1.9 JTD 105'],
'Multipla':['1.6i 103','1.6 Bipower 103','1.9 JTD 105','1.9 JTD 110','1.9 JTD 115','1.9 JTD 120'],
'Stilo':['1.2 16V 80','1.4 16V 95','1.6 16V 103','1.8 16V 133','2.4 20V 170','1.9 JTD 80','1.9 JTD 100','1.9 JTD 115','1.9 JTD 120','1.9 JTD 140','1.9 JTD 150'],
'Croma':['1.8 16V 140','2.2 16V 147','1.9 Multijet 120','1.9 Multijet 150','2.4 Multijet 200'],
'Marea':['1.6 16V 103','1.8 16V 113','2.0 20V 154','2.4 TD 125','1.9 JTD 105','1.9 JTD 110','2.4 JTD 130'],
'Ulysse':['2.0i 136','2.0 Multijet 120','2.0 Multijet 136','2.2 Multijet 128','2.2 Multijet 170','3.0 V6 204'],
'Grande Punto':['1.2i 65','1.4i 77','1.4i 78','1.4 T-Jet 120','1.3 Multijet 75','1.3 Multijet 90','1.9 Multijet 120','1.9 Multijet 130'],
'Qubo':['1.3 Multijet 75','1.3 Multijet 80','1.3 Multijet 95','1.4i 73','1.4i 77'],
'Seicento':['0.9i 39','1.1i 54'],
'Uno':['0.9 45','1.0 45','1.1 55','1.3 Turbo ie 105','1.4 Turbo ie 114','1.4 Turbo ie 118','1.7D 58'],
'Sedici':['1.6i 107','1.6i 120','1.9 Multijet 120','2.0 Multijet 135'],
'Idea':['1.2i 80','1.3 Multijet 70','1.3 Multijet 90','1.4i 77','1.4i 95','1.9 Multijet 100'],
'500C':['0.9 TwinAir 85','1.0 Hybrid 70','1.2i 69'],
'500e':['Electrique 118','Electrique 87'],
'124':['1.2 65','1.4 80','1.6 110'],
'126':['0.6 23','0.7 26'],
'127':['0.9 45','1.0 50','1.3 75'],
'128':['1.1 55','1.3 75'],
'130':['3.2 V6 165'],
'131':['1.3 78','1.6 98','2.0 115'],
'132':['1.6 98','1.8 107','2.0 119'],
'600':['Electrique 156'],
'850':['0.8 34','0.8 47'],
'Barchetta':['1.8 16V 130'],
'Cinquecento':['0.7 31','0.9 40','1.1 54'],
'Coupé':['1.8 16V 131','2.0 16V 139','2.0 20V 154','2.0 20V Turbo 220'],
'Dino':['2.0 V6 160','2.4 V6 180'],
'Freemont':['2.0 Multijet 140','2.0 Multijet 170','2.4i 170','3.6 V6 280'],
'Linea':['1.3 Multijet 90','1.4i 77','1.4 T-Jet 120'],
'Regata':['1.3 75','1.5 82','1.6 100','1.9D 65'],
'Ritmo':['1.1 60','1.3 65','1.5 75','1.7D 56'],
'Strada':['1.3 Multijet 85','1.3 Multijet 95','1.4i 88'],
'Tempra':['1.4 70','1.6 78','1.8 110','2.0 113','1.9D 65'],
'X1/9':['1.3 73','1.5 85']},
'HYUNDAI':{
'i10':['1.0i 67','1.0i 69','1.0 T-GDi 100','1.2i 84','1.2i 87','1.1 CRDi 75'],
'i20':['1.0 T-GDi 100','1.0 T-GDi 120','1.2i 75','1.2i 84','1.4i 100','1.4 CRDi 75','1.4 CRDi 90','1.6 CRDi 116','1.6 T-GDi N 204'],
'i30':['1.0 T-GDi 120','1.4i 100','1.4 T-GDi 140','1.5 T-GDi 160','1.6 CRDi 110','1.6 CRDi 115','1.6 CRDi 136','1.6 GDi 135','2.0 T-GDi N 250','2.0 T-GDi N 280'],
'Tucson':['1.6 CRDi 115','1.6 CRDi 136','1.6 GDi 132','1.6 T-GDi 150','1.6 T-GDi 177','1.6 T-GDi 180','1.6 T-GDi 230','2.0 CRDi 136','2.0 CRDi 150','2.0 CRDi 185','1.6 T-GDi Hybrid 230','1.6 T-GDi PHEV 265'],
'Kona':['1.0 T-GDi 120','1.6 CRDi 115','1.6 CRDi 136','1.6 GDi Hybrid 141','1.6 T-GDi 198','Electrique 136','Electrique 204'],
'Santa Fe':['1.6 T-GDi Hybrid 230','2.0 CRDi 150','2.2 CRDi 200','2.4 GDi 185'],
'IONIQ 5':['Electrique 170','Electrique 228','Electrique 325'],
'IONIQ 6':['Electrique 228','Electrique 325'],
'Bayon':['1.0 T-GDi 100','1.2 MPI 79'],
'Getz':['1.1i 63','1.3i 82','1.4i 97','1.5 CRDi 82','1.5 CRDi 88'],
'ix35':['1.6 GDi 135','1.7 CRDi 115','1.7 CRDi 141','2.0 CRDi 136','2.0 CRDi 184','2.0 GDi 163']
,
'i40':['1.7 CRDi 115','1.7 CRDi 141','2.0 GDi 177'],
'ix20':['1.4i 90','1.4 CRDi 77','1.4 CRDi 90','1.6i 125','1.6 CRDi 115','1.6 CRDi 128'],
'Accent':['1.3i 84','1.4i 97','1.5 CRDi 82','1.5 CRDi 110','1.6i 105','1.6i 112'],
'Atos':['1.0i 56','1.0i 58','1.1i 63'],
'Veloster':['1.6 GDi 140','1.6 T-GDi 186','1.6 T-GDi N 275'],
'IONIQ':['1.6 GDi Hybrid 141','1.6 GDi PHEV 141','Electrique 136'],
'Nexo':['Hydrogène 163'],
'Sonata':['2.0 GDi 165','2.0 T-GDi 245','2.5 GDi 194'],
'Staria':['2.2 CRDi 177'],
'Coupé':['1.6i 114','2.0i 139','2.0i 143','2.7 V6 167'],
'Elantra':['1.6i 122','1.6 CRDi 128','2.0i 152'],
'Galloper':['2.5 TD 99','2.5 TDi 115','3.0 V6 141'],
'Genesis':['2.0 Turbo 245','3.3 V6 287','3.8 V6 315'],
'H-1':['2.5 CRDi 116','2.5 CRDi 136','2.5 CRDi 170'],
'i50':['1.6 CRDi 115','2.0i 165'],
'ix55':['2.2 CRDi 197','3.0 V6 240'],
'Lantra':['1.5i 88','1.6i 114','1.8i 128','2.0i 139'],
'Matrix':['1.5 CRDi 82','1.5 CRDi 102','1.6i 103','1.8i 122'],
'Pony':['1.2 55','1.4 70','1.5 82'],
'Terracan':['2.5 TD 103','2.9 CRDi 150','3.5 V6 195'],
'Trajet':['2.0i 140','2.0 CRDi 113','2.7 V6 167']},
'KIA':{
'Picanto':['1.0i 67','1.0 T-GDi 100','1.2i 84'],
'Rio':['1.0 T-GDi 100','1.0 T-GDi 120','1.2i 84','1.4i 100','1.4 CRDi 90','1.5 CRDi 110','1.6 CRDi 110','1.6 CRDi 128'],
'Ceed':['1.0 T-GDi 100','1.0 T-GDi 120','1.4i 100','1.4 T-GDi 140','1.5 T-GDi 160','1.6 CRDi 115','1.6 CRDi 136','1.6 GDi PHEV 141'],
'ProCeed':['1.0 T-GDi 120','1.5 T-GDi 160','1.6 CRDi 136','1.6 T-GDi GT 204'],
'Sportage':['1.6 CRDi 115','1.6 CRDi 136','1.6 GDi 132','1.6 T-GDi 150','1.6 T-GDi 177','1.6 T-GDi 230','1.6 T-GDi 265','1.7 CRDi 115','1.7 CRDi 141','2.0 CRDi 136','2.0 CRDi 185','1.6 T-GDi Hybrid 230','1.6 T-GDi PHEV 265'],
'Sorento':['2.0 CRDi 150','2.2 CRDi 200','2.5 T-GDi 281','1.6 T-GDi Hybrid 230','1.6 T-GDi PHEV 265'],
'Niro':['1.6 GDi Hybrid 141','1.6 GDi PHEV 141','Electrique 136','Electrique 204'],
'EV6':['Electrique 170','Electrique 229','Electrique 325','Electrique GT 585'],
'EV9':['Electrique 204','Electrique 283','Electrique GT-Line 384'],
'Stonic':['1.0 T-GDi 100','1.0 T-GDi 120','1.4 MPI 100','1.6 CRDi 110','1.6 CRDi 136'],
'XCeed':['1.0 T-GDi 120','1.4 T-GDi 140','1.5 T-GDi 160','1.6 CRDi 115','1.6 CRDi 136','1.6 GDi PHEV 141'],
'Stinger':['2.0 T-GDi 245','2.2 CRDi 200','3.3 T-GDi 366']
,
'Carens':['1.6 GDi 135','1.7 CRDi 115','1.7 CRDi 141'],
'Carnival':['2.2 CRDi 200','3.5 V6 272'],
'Optima':['1.7 CRDi 141','2.0 GDi 163','2.0 GDi PHEV 205','2.4 GDi 188'],
'Soul':['1.6i 132','1.6 CRDi 128','1.6 CRDi 136','1.6 T-GDi 204','Electrique 136','Electrique 204'],
'Venga':['1.4i 90','1.4 CRDi 75','1.4 CRDi 90','1.6i 125','1.6 CRDi 115','1.6 CRDi 128'],
'Cerato':['1.6i 105','1.6 CRDi 115','2.0i 143'],
'Clarus':['1.8i 116','2.0i 133'],
'Joice':['2.0i 139'],
'Magentis':['2.0i 136','2.0 CRDi 140','2.4i 162','2.7 V6 188'],
'Mentor':['1.5i 88','1.6i 100','1.8i 112'],
'Opirus':['2.7 V6 173','3.5 V6 203'],
'Pride':['1.1i 60','1.3i 63'],
'Sephia':['1.5i 80','1.8i 112'],
'Shuma':['1.5i 88','1.8i 110']},
'NISSAN':{
'Micra':['0.9 IG-T 90','1.0 IG-T 92','1.0 IG-T 100','1.2i 80','1.4i 88','1.5 dCi 86','1.5 dCi 90'],
'Juke':['1.0 DIG-T 114','1.2 DIG-T 115','1.5 dCi 90','1.5 dCi 110','1.6 DIG-T 190','1.6i 117'],
'Qashqai':['1.2 DIG-T 115','1.3 DIG-T 140','1.3 DIG-T 158','1.3 DIG-T mHEV 140','1.5 dCi 106','1.5 dCi 110','1.5 dCi 115','1.5 e-Power 190','1.6 dCi 130','2.0 dCi 150'],
'X-Trail':['1.3 DIG-T 160','1.5 e-Power 204','1.6 dCi 130','1.7 dCi 150','2.0 dCi 150','2.0 dCi 177','2.5i 163'],
'Note':['1.2i 80','1.2 DIG-S 98','1.4i 88','1.5 dCi 68','1.5 dCi 86','1.5 dCi 90','e-Power 136'],
'Leaf':['Electrique 150','Electrique 218'],
'Ariya':['Electrique 218','Electrique 242','Electrique AWD 306'],
'Navara':['2.3 dCi 160','2.3 dCi 190','2.5 dCi 190'],
'NV200':['1.5 dCi 90','1.5 dCi 110','e-NV200 109'],
'NV300':['1.6 dCi 95','1.6 dCi 120','1.6 dCi 125','1.6 dCi 145','2.0 dCi 150','2.0 dCi 170'],
'GT-R':['3.8 V6 Turbo 485','3.8 V6 Turbo 550','3.8 V6 Turbo NISMO 600'],
'350Z':['3.5 V6 280','3.5 V6 300','3.5 V6 313'],
'370Z':['3.7 V6 328','3.7 V6 344','3.7 V6 NISMO 350'],
'Almera':['1.5i 98','1.8i 114','1.5 dCi 82','2.2 dCi 110','2.2 dCi 136']
,
'Pulsar':['1.2 DIG-T 115','1.5 dCi 110','1.6 DIG-T 190'],
'Primera':['1.6i 109','1.8i 116','2.0i 140','1.9 dCi 120','2.2 dCi 126','2.2 dCi 139'],
'Murano':['2.5 dCi 190','3.5 V6 256'],
'Pathfinder':['2.5 dCi 174','2.5 dCi 190','3.0 dCi V6 231','3.5 V6 284','4.0 V6 269'],
'Patrol':['2.8 TDi 129','3.0 DTi 158','3.0 DTi 160','4.8i V8 245','5.6 V8 400'],
'Townstar':['1.3 TCe 130','Electrique 122'],
'100NX':['1.6 90','1.6 102','2.0 143'],
'200SX':['1.8 Turbo 169','2.0 Turbo 200'],
'300ZX':['3.0 V6 222','3.0 V6 Turbo 283'],
'Bluebird':['1.6 90','1.8 105','2.0 126','2.0D 67'],
'Cherry':['1.0 45','1.2 52','1.3 60'],
'Interstar':['2.5 dCi 100','2.5 dCi 120','2.5 dCi 150'],
'King Cab':['2.4i 133','2.5 Di 133','2.5 dCi 171'],
'Maxima':['2.0 140','2.5 170','3.0 V6 190'],
'NV400':['2.3 dCi 100','2.3 dCi 125','2.3 dCi 135','2.3 dCi 150','2.3 dCi 165'],
'Pixo':['1.0i 68'],
'Prairie':['2.0 135','2.4 150'],
'Primastar':['1.9 dCi 100','2.0 dCi 90','2.0 dCi 115','2.5 dCi 135','2.5 dCi 146'],
'Serena':['1.6 97','2.0 126','2.3D 75'],
'Silvia':['1.8 Turbo 175','2.0 Turbo 200'],
'Skyline':['2.0 Turbo 215','2.5 Turbo 280','2.6 Turbo GT-R 280'],
'Sunny':['1.3 75','1.4 87','1.6 90','1.6 GTi 110','2.0D 55','2.0 GTi 143'],
'Terrano':['2.4i 118','2.7 TD 100','2.7 TD 125','3.0 Di 150','3.0 Di 154'],
'Tiida':['1.5 dCi 106','1.6i 110','1.8i 126'],
'Z':['3.0 V6 Turbo 400']},
'SEAT':{
'Ibiza':['1.0 TSI 80','1.0 TSI 95','1.0 TSI 110','1.0 TSI 115','1.2 TSI 90','1.2 TSI 105','1.4 TSI 125','1.4 TSI 150','1.6 TDI 80','1.6 TDI 95','1.6 TDI 105','1.6 TDI 115','1.9 TDI 100','1.9 TDI 105','2.0 TDI 143'],
'Leon':['1.0 TSI 86','1.0 TSI 110','1.0 TSI 115','1.2 TSI 86','1.2 TSI 105','1.4 TSI 122','1.4 TSI 150','1.5 TSI 130','1.5 TSI 150','1.5 eTSI 150','1.6 TDI 90','1.6 TDI 105','1.6 TDI 115','1.8 TSI 180','1.9 TDI 105','2.0 TDI 143','2.0 TDI 150','2.0 TDI 184','2.0 TSI Cupra 290','2.0 TSI Cupra 300','1.4 TSI eHybrid 204'],
'Ateca':['1.0 TSI 110','1.0 TSI 115','1.5 TSI 150','2.0 TDI 115','2.0 TDI 150','2.0 TDI 190','2.0 TSI Cupra 300'],
'Arona':['1.0 TSI 95','1.0 TSI 110','1.0 TSI 115','1.5 TSI 150','1.6 TDI 95'],
'Tarraco':['1.5 TSI 150','2.0 TDI 150','2.0 TDI 190','2.0 TSI 245','1.4 eHybrid 245'],
'Alhambra':['1.4 TSI 150','2.0 TDI 115','2.0 TDI 140','2.0 TDI 150','2.0 TDI 170','2.0 TDI 184'],
'Toledo':['1.0 TSI 110','1.2 TSI 90','1.2 TSI 110','1.4 TSI 122','1.6 TDI 90','1.6 TDI 105']
,
'Altea':['1.2 TSI 105','1.4i 85','1.4 TSI 125','1.6i 102','1.8 TSI 160','2.0 TDI 140','2.0 TDI 170','1.6 TDI 90','1.6 TDI 105','1.9 TDI 90','1.9 TDI 105','2.0 FSI 150'],
'Arosa':['1.0i 50','1.4i 60','1.4i 100','1.4 TDI 75','1.7 SDI 60'],
'Cordoba':['1.2i 64','1.2i 70','1.4i 60','1.4i 75','1.4i 100','1.4 TDI 70','1.4 TDI 75','1.4 TDI 80','1.6i 100','1.9 SDI 64','1.9 TDI 90','1.9 TDI 100','1.9 TDI 130','2.0i 115'],
'Exeo':['1.6i 102','1.8 TSI 120','1.8 TSI 160','2.0 TDI 120','2.0 TDI 143','2.0 TDI 170','2.0 TSI 200'],
'Mii':['1.0i 60','1.0i 68','1.0i 75','e-Mii Electrique 83'],
'Inca':['1.4i 60','1.9D 64','1.9 SDI 64'],
'Malaga':['1.2 63','1.5 90','1.5i 100'],
'Marbella':['0.8 34','0.9 40'],
'Terra':['0.9 40','1.4D 48']},
'SKODA':{
'Fabia':['1.0 MPI 60','1.0 MPI 65','1.0 MPI 75','1.0 TSI 95','1.0 TSI 110','1.2i 60','1.2 TSI 86','1.2 TSI 90','1.2 TSI 105','1.4i 75','1.4 TDI 70','1.4 TDI 80','1.5 TSI 150','1.6 TDI 75','1.6 TDI 90','1.6 TDI 105','1.9 TDI 100','1.9 TDI 105'],
'Octavia':['1.0 TSI 110','1.0 TSI 115','1.2 TSI 86','1.2 TSI 105','1.4 TSI 122','1.4 TSI 150','1.5 TSI 150','1.6i 102','1.6 TDI 90','1.6 TDI 105','1.6 TDI 115','1.8 TSI 180','1.9 TDI 90','1.9 TDI 100','1.9 TDI 105','2.0 TDI 143','2.0 TDI 150','2.0 TDI 184','2.0 TDI 200','2.0 TSI RS 220','2.0 TSI RS 245','1.4 TSI iV 204'],
'Superb':['1.4 TSI 150','1.5 TSI 150','1.6 TDI 120','1.8 TSI 160','1.8 TSI 180','1.9 TDI 100','1.9 TDI 105','2.0 TDI 140','2.0 TDI 150','2.0 TDI 190','2.0 TSI 220','2.0 TSI 272','2.0 TSI 280','1.4 TSI iV 218'],
'Kodiaq':['1.4 TSI 150','1.5 TSI 150','2.0 TDI 115','2.0 TDI 150','2.0 TDI 190','2.0 TDI 200','2.0 TSI 190','2.0 TSI RS 245'],
'Karoq':['1.0 TSI 110','1.0 TSI 115','1.5 TSI 150','2.0 TDI 115','2.0 TDI 150'],
'Kamiq':['1.0 TSI 95','1.0 TSI 110','1.0 TSI 115','1.5 TSI 150','1.6 TDI 95','1.6 TDI 115'],
'Scala':['1.0 TSI 95','1.0 TSI 110','1.0 TSI 115','1.5 TSI 150','1.6 TDI 115'],
'Enyaq':['iV 60 179','iV 80 204','iV 80x 265','RS iV 299','Coupé RS iV 299'],
'Yeti':['1.2 TSI 105','1.4 TSI 122','1.4 TSI 150','1.6 TDI 105','2.0 TDI 110','2.0 TDI 140','2.0 TDI 150','2.0 TDI 170'],
'Rapid':['1.0 TSI 95','1.0 TSI 110','1.2 TSI 86','1.2 TSI 90','1.2 TSI 105','1.4 TDI 75','1.4 TDI 90','1.6 TDI 90','1.6 TDI 105','1.6 TDI 115']
,
'Citigo':['1.0i 60','1.0i 75','e-Citigo Electrique 83'],
'Felicia':['1.3i 54','1.3i 68','1.6i 75','1.9D 64'],
'Favorit':['1.3 54','1.3 58'],
'Roomster':['1.2i 64','1.2 TSI 86','1.2 TSI 105','1.4i 86','1.6i 105','1.2 TDI 75','1.4 TDI 70','1.4 TDI 80','1.6 TDI 90','1.6 TDI 105','1.9 TDI 105'],
'Elroq':['Electrique 170','Electrique 204','Electrique 286']},
'OPEL':{
'Corsa':['1.0 Turbo 90','1.0 Turbo 115','1.2i 75','1.2 75','1.2 100','1.2 130','1.3 CDTi 75','1.3 CDTi 90','1.3 CDTi 95','1.4i 75','1.4i 87','1.4i 90','1.4 Turbo 100','1.4 Turbo 150','1.5 Diesel 100','1.6 Turbo OPC 207','Corsa-e 136'],
'Astra':['1.0 Turbo 105','1.2 Turbo 110','1.2 Turbo 130','1.4i 87','1.4i 90','1.4 Turbo 125','1.4 Turbo 150','1.5 Diesel 105','1.5 Diesel 122','1.5 Diesel 130','1.6i 115','1.6 CDTi 95','1.6 CDTi 110','1.6 CDTi 136','1.6 CDTi 160','1.6 Turbo 200','1.6 Turbo OPC 280','1.7 CDTi 110','1.7 CDTi 125','1.9 CDTi 120','1.9 CDTi 150','2.0 CDTi 160','PHEV Hybrid 180','PHEV Hybrid 225'],
'Mokka':['1.2 Turbo 100','1.2 Turbo 130','1.4i 100','1.4 Turbo 140','1.5 Diesel 110','1.6 CDTi 110','1.6 CDTi 136','Mokka-e 136'],
'Crossland':['1.2i 83','1.2 Turbo 110','1.2 Turbo 130','1.5 Diesel 110','1.5 Diesel 120','1.6 CDTi 99','1.6 CDTi 120'],
'Grandland':['1.2 Turbo 130','1.5 Diesel 130','1.6 Turbo 180','1.6 PHEV 225','1.6 PHEV4 300'],
'Insignia':['1.4 Turbo 140','1.5 Turbo 140','1.5 Turbo 165','1.6i 115','1.6 CDTi 110','1.6 CDTi 136','1.6 Turbo 200','1.8i 140','2.0 CDTi 120','2.0 CDTi 130','2.0 CDTi 140','2.0 CDTi 160','2.0 CDTi 170','2.0 Turbo 260','2.8 V6 Turbo OPC 325'],
'Vivaro':['1.5 Diesel 100','1.5 Diesel 120','2.0 Diesel 120','2.0 Diesel 150','2.0 Diesel 180','Vivaro-e 136'],
'Combo':['1.2 Turbo 110','1.2 Turbo 130','1.5 Diesel 75','1.5 Diesel 100','1.5 Diesel 130','Combo-e 136'],
'Movano':['2.2 Diesel 120','2.2 Diesel 140','2.2 Diesel 165','2.3 CDTi 100','2.3 CDTi 125','2.3 CDTi 136','2.3 CDTi 150','2.3 CDTi 163','2.3 CDTi 170'],
'Zafira':['1.4i 90','1.4 Turbo 120','1.4 Turbo 140','1.6i 100','1.6i 115','1.6 CDTi 120','1.6 CDTi 136','1.7 CDTi 110','1.7 CDTi 125','1.8i 125','1.8i 140','1.9 CDTi 100','1.9 CDTi 120','1.9 CDTi 150','2.0 CDTi 130','2.0 CDTi 165','2.0 CDTi 170','2.0 Turbo OPC 240'],
'Meriva':['1.3 CDTi 75','1.3 CDTi 95','1.4i 75','1.4i 100','1.4 Turbo 120','1.4 Turbo 140','1.6i 100','1.6 CDTi 95','1.6 CDTi 110','1.7 CDTi 100','1.7 CDTi 110','1.7 CDTi 130'],
'Vectra':['1.6i 100','1.8i 122','1.8i 140','1.9 CDTi 100','1.9 CDTi 120','1.9 CDTi 150','2.0i Turbo 175','2.0 DTi 100','2.2i 147','2.2i 155','2.2 DTi 125','2.8 V6 Turbo 230','2.8 V6 Turbo OPC 280','3.0 CDTi 177','3.0 CDTi 184'],
'Adam':['1.0 Turbo 90','1.2i 70','1.4i 87','1.4i 100','1.4 Turbo 150']
,
'Kadett':['1.2 55','1.3 60','1.3 75','1.4 60','1.6 82','1.6i 100','1.6i GSi 115','1.8i 115','2.0i GSi 130','2.0i GSi 16V 156','1.6D 54','1.7D 57'],
'Ascona':['1.3 60','1.6 75','1.6 90','1.8 90','2.0 100','2.0i 115'],
'Omega':['2.0 116','2.0 136','2.2i 144','2.5 V6 170','2.6 V6 180','3.0 V6 211','3.2 V6 218','2.0 DTi 100','2.5 TD 131','2.5 DTi 150','3.0 CDTi 177'],
'Calibra':['2.0i 115','2.0i 16V 150','2.0i Turbo 204','2.5 V6 170'],
'Manta':['1.3 75','1.8 90','2.0 100','1.8i GT/E 115','2.0i GT/E 110','2.0i GSi 16V 150'],
'Agila':['1.0i 58','1.0i 65','1.0i 68','1.2i 75','1.2i 86','1.3 CDTi 75'],
'GT':['2.0 Turbo 264'],
'Antara':['2.0 CDTi 127','2.0 CDTi 150','2.0 CDTi 163','2.2 CDTi 163','2.2 CDTi 184','2.4i 140','2.4i 167','3.2 V6 227'],
'Karl':['1.0i 73','1.0i 75'],
'Signum':['1.8 122','1.8 140','1.9 CDTi 100','1.9 CDTi 120','1.9 CDTi 150','2.0 Turbo 175','2.2i 155','2.8 V6 Turbo 230','2.8 V6 Turbo 250','3.0 CDTi 177','3.0 CDTi 184'],
'Tigra':['1.3 CDTi 70','1.4i 90','1.8i 125'],
'Frontera':['2.0i 136','2.2i 136','2.2 DTi 115','2.2 DTi 120','3.2 V6 205'],
'Speedster':['2.0 Turbo 200','2.2i 147'],
'Cascada':['1.4 Turbo 120','1.4 Turbo 140','1.6 Turbo 170','1.6 Turbo 200','2.0 CDTi 165','2.0 CDTi 170'],
'Ampera':['1.4 Hybrid 150','Ampera-e Electrique 204'],
'Admiral':['2.6 L6 100','2.8 L6 125'],
'Campo':['2.2i 98','2.5D 72','2.5 TD 76'],
'Commodore':['2.5 L6 115','2.8 L6 132'],
'Diplomat':['2.8 L6 132','4.6 V8 190','5.4 V8 230'],
'Monterey':['3.0 TD 159','3.1 TD 114','3.2 V6 177','3.5 V6 215'],
'Rekord':['1.7 60','1.9 75','2.0 100'],
'Senator':['2.5 140','2.5i 136','3.0i 156','3.0i 177','3.0i 24V 204'],
'Sintra':['2.2i 141','2.2 DTi 120','3.0 V6 201']},
'VOLVO':{
'XC60':['B4 197','B5 250','D3 150','D4 190','D5 225','T4 190','T5 250','T6 310','T8 Recharge 390','T8 Recharge 455'],
'XC90':['B5 250','B6 300','D4 190','D5 225','D5 235','T5 250','T6 310','T8 Recharge 390','T8 Recharge 455'],
'XC40':['B3 163','B4 197','B5 250','D3 150','D4 190','T2 129','T3 163','T4 190','T5 247','Recharge T4 211','Recharge T5 262','Recharge Electrique 231','Recharge Electrique 408'],
'V60':['B3 163','B4 197','D3 150','D4 190','D5 225','T4 190','T5 250','T6 310','T6 Recharge 340','T8 Recharge 390'],
'S60':['B3 163','B4 197','D3 150','D4 190','T4 190','T5 250','T6 310','T8 Recharge 390'],
'V90':['B4 197','B5 250','B6 300','D3 150','D4 190','D5 235','T4 190','T5 250','T6 310','T8 Recharge 390'],
'S90':['B4 197','B5 250','D3 150','D4 190','D5 235','T5 250','T6 310','T8 Recharge 390'],
'V40':['D2 115','D2 120','D3 150','D4 190','T2 122','T3 150','T3 152','T4 180','T4 190','T5 213','T5 245'],
'C40':['Recharge Electrique 231','Recharge Electrique 408'],
'EX30':['Electrique 272','Electrique Twin 428'],
'EX90':['Electrique Twin 408','Electrique Twin 517'],
'V50':['1.6D 109','1.6D DRIVe 109','1.8i 125','2.0i 145','2.0D 136','2.0F 145','2.4i 140','2.4i 170','2.4D 126','2.4D 163','D5 180','T5 220','T5 230'],
'850':['2.0i 126','2.0i 10V 143','2.0 Turbo 210','2.3 Turbo T5 225','2.4i 170','2.5 TDI 140','2.5 T5 193','R 2.3 T5 250']
,
'V70':['2.0 145','2.0 Turbo 210','2.0 D3 136','2.0 D4 163','2.0 D4 181','2.4 D5 185','2.4 D5 215','2.4i 170','T5 245','T6 285'],
'XC70':['2.0 D3 136','2.0 D4 163','2.0 D4 181','2.4 D5 185','2.4 D5 215','3.2 238','T5 245','T6 300'],
'C30':['1.6 100','1.6D DRIVe 109','1.8 125','2.0 145','2.0D 136','D3 150','D4 177','D5 180','T5 230'],
'C70':['2.0 145','2.0D 136','2.4i 170','2.4 D5 180','T5 230'],
'S40':['1.6 100','1.6D DRIVe 109','1.8 125','2.0 145','2.0D 136','2.0F 145','2.4 140','2.4 170','D3 150','D4 177','D5 180','T5 230'],
'S80':['2.0 Turbo 180','2.0 D3 136','2.0 D4 163','2.0 D4 181','2.4 D5 185','2.4 D5 215','3.2 238','T5 245','T6 304','V8 315'],
'S70':['2.0 126','2.0 Turbo 180','2.4 170','2.5 TDI 140','T5 240'],
'V40 Cross Country':['D2 120','D3 150','D4 190','T3 152','T4 190','T5 245'],
'V60 Cross Country':['D3 150','D4 190','T5 245','T5 AWD 254'],
'V90 Cross Country':['D4 190','D5 235','T5 250','T6 310','T8 390'],
'140':['1.8 75','1.8 100','2.0 82','2.0 118'],
'164':['2.9 145','3.0 160'],
'240':['2.0 100','2.1 107','2.3 112','2.3 131','2.4D 82'],
'260':['2.7 V6 140','2.8 V6 155'],
'340':['1.4 65','1.7 80','2.0 95'],
'360':['1.7 80','2.0 110','2.0 GLE 120'],
'440':['1.6 82','1.7 87','1.7 102','1.8 90','1.8 115','2.0 110','1.9 TD 90'],
'460':['1.6 82','1.7 87','1.7 102','1.8 90','1.8 115','2.0 110','1.9 TD 90'],
'480':['1.7 106','1.7 Turbo 120','2.0 110'],
'740':['2.0 120','2.0 Turbo 155','2.0 Turbo 182','2.3 113','2.3 131','2.3 Turbo 165','2.4D 82','2.4 TD 109'],
'760':['2.3 Turbo 182','2.3 Turbo 200','2.8 V6 155','2.4 TD 109'],
'780':['2.0 Turbo 182','2.8 V6 155'],
'940':['2.0 111','2.0 Turbo 155','2.0 Turbo 190','2.3 113','2.3 131','2.3 Turbo 165','2.4D 82','2.4 TD 115'],
'960':['2.0 Turbo 190','2.5 170','2.9 L6 204','2.4 TD 115'],
'EX40':['Recharge Electrique 252','Recharge Electrique 408']},
'ALFA ROMEO':{
'Giulietta':['1.4 TB 105','1.4 TB 120','1.4 TB MultiAir 150','1.4 TB MultiAir 170','1.6 JTDM 105','1.6 JTDM 120','2.0 JTDM 140','2.0 JTDM 150','2.0 JTDM 170','1.75 TBi 235','1.75 TBi QV 240'],
'Giulia':['2.0 Turbo 200','2.0 Turbo 280','2.2 JTDM 136','2.2 JTDM 160','2.2 JTDM 180','2.2 JTDM 190','2.2 JTDM 210','2.9 V6 Bi-Turbo QV 510'],
'Stelvio':['2.0 Turbo 200','2.0 Turbo 280','2.2 JTDM 160','2.2 JTDM 190','2.2 JTDM 210','2.9 V6 Bi-Turbo QV 510'],
'Tonale':['1.5 Turbo 130','1.5 Turbo 160','1.6 JTDM 130','1.3 PHEV 280'],
'MiTo':['0.9 TwinAir 105','1.3 JTDM 85','1.3 JTDM 95','1.4i 78','1.4 TB 120','1.4 TB 135','1.4 TB 155','1.4 TB 170','1.4 TB QV 170','1.6 JTDM 120'],
'147':['1.6 TS 105','1.6 TS 120','2.0 TS 150','1.9 JTD 100','1.9 JTD 115','1.9 JTD 120','1.9 JTD 140','1.9 JTD 150','3.2 V6 GTA 250'],
'156':['1.6 TS 120','1.8 TS 140','2.0 TS 155','2.0 JTS 165','2.5 V6 192','1.9 JTD 105','1.9 JTD 110','1.9 JTD 115','1.9 JTD 140','1.9 JTD 150','2.4 JTD 136','2.4 JTD 140','2.4 JTD 150','2.4 JTD 175','3.2 V6 GTA 250'],
'159':['1.8 MPI 140','1.9 JTS 160','2.2 JTS 185','3.2 V6 JTS 260','1.9 JTDM 120','1.9 JTDM 150','2.0 JTDM 136','2.0 JTDM 170','2.4 JTDM 200','2.4 JTDM 210']
,
'33':['1.3 90','1.5 105','1.7 16V 137'],
'75':['1.6 110','1.8 120','2.0 TS 148','3.0 V6 188'],
'90':['1.8 120','2.0 130','2.5 V6 150'],
'145':['1.4 103','1.6 120','1.8 144','1.9 JTD 105'],
'146':['1.4 103','1.6 120','1.8 144','1.9 JTD 105'],
'155':['1.8 TS 129','2.0 TS 150','2.5 V6 166','1.9 TD 90'],
'164':['2.0 TS 144','3.0 V6 192','3.0 V6 24V 211','2.5 TD 117'],
'166':['2.0 TS 155','2.5 V6 190','3.0 V6 226','2.4 JTD 136','2.4 JTD 175'],
'4C':['1.75 TBi 240'],
'8C':['4.7 V8 450'],
'Brera':['2.2 JTS 185','3.2 V6 260','1.9 JTDM 159','2.4 JTDM 210'],
'GT':['1.8 TS 140','2.0 JTS 165','3.2 V6 240','1.9 JTD 150'],
'GTV':['2.0 TS 150','3.0 V6 220','3.2 V6 240'],
'Spider':['2.0 TS 150','3.0 V6 220','3.2 V6 260'],
'Junior':['1.0 Hybrid 136','1.2 136','Electrique 156'],
'Alfasud':['1.2 63','1.3 79','1.5 95'],
'Alfetta':['1.6 109','1.8 122','2.0 130','2.5 V6 160'],
'Montreal':['2.6 V8 200'],
'Sprint':['1.5 105','1.7 118'],
'Giulia (2016+)':['2.0 Turbo 200','2.0 Turbo 280','2.2 JTDM 160','2.2 JTDM 190','2.9 V6 QV 510']},
'HONDA':{
'Civic':['1.0 VTEC Turbo 126','1.0 VTEC Turbo 129','1.4i 100','1.5 VTEC Turbo 182','1.6 i-DTEC 120','1.8i 140','1.8i 142','2.0 VTEC Turbo Type R 320','2.0 e:HEV 184','2.2 i-DTEC 150'],
'CR-V':['1.5 VTEC Turbo 173','1.5 VTEC Turbo 193','1.6 i-DTEC 120','1.6 i-DTEC 160','2.0 i-VTEC 155','2.0 e:HEV 204','2.2 i-DTEC 150','2.2 i-CTDi 140'],
'Jazz':['1.2i 90','1.3i 83','1.3i 100','1.3 Hybrid 88','1.4i 100','1.5 e:HEV 109'],
'HR-V':['1.5i 130','1.5 VTEC Turbo 182','1.6 i-DTEC 120','1.5 e:HEV 131'],
'ZR-V':['2.0 e:HEV 184']
,
'Accord':['1.6i 116','2.0i 155','2.0 VTEC 200','2.2 i-DTEC 150','2.4i 190'],
'CR-Z':['1.5 Hybrid 124','1.5 Hybrid 137'],
'FR-V':['1.7i 125','1.8i 140','2.0i 150','2.2 i-CTDi 140'],
'Insight':['1.3 Hybrid 88','1.5 Hybrid 151'],
'NSX':['3.5 V6 Turbo Hybrid 581'],
'Prelude':['2.0 133','2.0 16V 160','2.2 VTEC 185','2.2 VTEC 200'],
'S2000':['2.0 VTEC 240','2.0 VTEC 250'],
'e':['Electrique 154'],
'e:Ny1':['Electrique 204'],
'Integra':['1.8 VTEC 170','2.0 VTEC Type R 220'],
'Legend':['3.5 V6 295','3.5 V6 SH-AWD 377'],
'S660':['0.7 Turbo 64']},
'DS':{
'DS3 Crossback':['1.2 PureTech 100','1.2 PureTech 130','1.2 PureTech 155','1.5 BlueHDi 100','1.5 BlueHDi 110','1.5 BlueHDi 130','E-Tense Electrique 136'],
'DS4':['1.2 PureTech 130','1.6 PureTech 180','1.6 PureTech 225','1.5 BlueHDi 130','E-Tense Hybrid 225','E-Tense 4x4 360'],
'DS7':['1.2 PureTech 130','1.5 BlueHDi 130','1.6 PureTech 180','1.6 PureTech 225','2.0 BlueHDi 180','E-Tense Hybrid 225','E-Tense 4x4 300','E-Tense 4x4 360'],
'DS9':['1.6 PureTech 225','E-Tense Hybrid 225','E-Tense 4x4 360']
,
'DS3':['1.2 PureTech 82','1.2 PureTech 110','1.2 PureTech 130','1.6 THP 155','1.6 THP 200','1.6 THP 208','1.6 BlueHDi 100','1.6 BlueHDi 120','1.6 HDi 90','1.6 HDi 110'],
'DS5':['1.6 THP 165','1.6 THP 200','2.0 BlueHDi 150','2.0 BlueHDi 180','2.0 HDi 163','Hybrid4 200'],
'DS4 Cross':['1.2 PureTech 130','1.6 THP 165','1.6 BlueHDi 120','2.0 BlueHDi 150'],
'DS7 Crossback':['1.2 PureTech 130','1.5 BlueHDi 130','1.6 PureTech 180','1.6 PureTech 225','2.0 BlueHDi 180','E-Tense 4x4 300']},
'MINI':{
'Hatch 3p':['One 75','One 102','Cooper 100','Cooper 136','Cooper 178','Cooper S 192','Cooper S 178','Cooper SD 143','Cooper SD 170','Cooper D 95','Cooper D 116','John Cooper Works 211','John Cooper Works 231'],
'Hatch 5p':['One 75','One 102','Cooper 136','Cooper S 192','Cooper SD 170','Cooper D 116','John Cooper Works 231'],
'Clubman':['One 102','One D 116','Cooper 136','Cooper S 192','Cooper SD 190','Cooper D 150','Cooper All4 S 192','John Cooper Works 306'],
'Countryman':['One 75','One 102','Cooper 136','Cooper S 178','Cooper S ALL4 192','Cooper SD 190','Cooper D 150','Cooper SE ALL4 224','John Cooper Works ALL4 306']
,
'Coupé':['Cooper 122','Cooper S 184','Cooper SD 143','John Cooper Works 211'],
'John Cooper Works':['2.0 Turbo 231','2.0 Turbo 306'],
'One':['1.2 75','1.2 102','1.5D 95'],
'Paceman':['Cooper 122','Cooper S 184','Cooper SD 143','Cooper D 112'],
'Roadster':['Cooper 122','Cooper S 184','Cooper SD 143']},
'JAGUAR':{
'F-Pace':['2.0d 163','2.0d 180','2.0d 204','2.0i 250','2.0i 300','3.0d V6 300','3.0 V6 380','5.0 V8 SVR 550','P400e Hybrid 404'],
'E-Pace':['2.0d 150','2.0d 163','2.0d 180','2.0d 204','2.0i 200','2.0i 249','2.0i 300','P300e Hybrid 309'],
'F-Type':['2.0i 300','3.0 V6 340','3.0 V6 380','3.0 V6 400','5.0 V8 450','5.0 V8 R 550','5.0 V8 SVR 575'],
'XE':['2.0d 163','2.0d 180','2.0d 204','2.0i 200','2.0i 250','2.0i 300','3.0 V6 340','3.0 V6 380'],
'XF':['2.0d 163','2.0d 180','2.0d 204','2.0i 200','2.0i 250','2.0i 300','3.0d V6 300','3.0 V6 340','3.0 V6 380'],
'I-Pace':['EV400 400']
,
'D-Type':['3.4 L6 250'],
'E-Type':['3.8 L6 265','4.2 L6 265','5.3 V12 272'],
'Mark II':['2.4 L6 120','3.4 L6 210','3.8 L6 220'],
'S-Type':['2.5 V6 201','2.7 Diesel 207','3.0 V6 240','4.0 V8 281','4.2 V8 300','R 4.2 V8 400'],
'X-Type':['2.0 V6 130','2.0D 130','2.2D 155','2.5 V6 194','3.0 V6 231'],
'XJ':['2.7 Diesel 207','3.0D 275','3.0 V6 340','5.0 V8 385','5.0 V8 R 550'],
'XJ6':['2.9 165','3.2 200','3.2 211','4.0 226','4.0 249'],
'XJ12':['5.3 V12 285','6.0 V12 318'],
'XJ40':['2.9 165','3.2 200','4.0 223','4.0 249'],
'XJ220':['3.5 V6 Turbo 542'],
'XJS':['3.6 221','4.0 233','5.3 V12 295','6.0 V12 318'],
'XJR':['4.0 V8 Supercharged 375','5.0 V8 Supercharged 510'],
'XK':['4.2 V8 300','4.2 V8 R 420','5.0 V8 385','5.0 V8 R 510'],
'XK8':['4.0 V8 294','4.0 V8 R 370','4.2 V8 300'],
'XKR':['4.0 V8 370','4.2 V8 416','5.0 V8 510']},
'LAND ROVER':{
'Range Rover Evoque':['2.0 D150 150','2.0 D165 163','2.0 D180 180','2.0 D200 204','2.0 P200 200','2.0 P250 249','2.0 P300 300','P300e Hybrid 309'],
'Range Rover Sport':['2.0 SD4 240','3.0 D250 249','3.0 D300 300','3.0 D350 350','3.0 P360 360','3.0 P400 400','4.4 P530 530','P440e Hybrid 440','5.0 V8 SVR 575'],
'Range Rover Velar':['2.0 D180 180','2.0 D200 204','2.0 D240 240','2.0 P250 250','2.0 P300 300','3.0 D300 300','3.0 P340 340','3.0 P400 400','P400e Hybrid 404'],
'Discovery Sport':['2.0 D150 150','2.0 D165 163','2.0 D180 180','2.0 D200 204','2.0 P200 200','2.0 P250 249','2.0 P300 300','P300e Hybrid 309'],
'Discovery':['2.0 SD4 240','3.0 D250 249','3.0 D300 300','3.0 D350 350','3.0 P360 360'],
'Defender':['2.0 D200 200','2.0 D240 240','2.0 P300 300','3.0 D200 200','3.0 D250 249','3.0 D300 300','3.0 P400 400','5.0 V8 525']
,
'Freelander':['2.0 TD4 112','2.0 TD4 150','2.2 TD4 150','2.2 TD4 160','2.2 TD4 190','2.0 Si4 240','3.2 V6 233'],
'Range Rover':['3.0 D250 249','3.0 D300 300','3.0 D350 350','3.0 P360 360','3.0 P400 400','4.4 D340 340','4.4 P530 530','P440e Hybrid 440','P510e Hybrid 510'],
'Series I':['1.6 50','2.0 52','2.0D 52'],
'Series II':['2.3 77','2.3D 52'],
'Series III':['2.3 77','2.3D 52','3.5 V8 91']},
'PORSCHE':{
'911':['Carrera 385','Carrera 4 385','Carrera S 450','Carrera 4S 450','Targa 4 385','Targa 4S 450','Turbo 580','Turbo S 650','GT3 510','GT3 RS 525','GT2 RS 700'],
'Cayenne':['3.0 V6 340','Cayenne S 440','Cayenne GTS 460','Cayenne Turbo 550','Cayenne Turbo GT 640','E-Hybrid 462','Turbo S E-Hybrid 680'],
'Macan':['2.0 Turbo 265','Macan S 380','Macan GTS 440','Macan Turbo 440','Macan Electrique 408','Macan Electrique Turbo 639'],
'Panamera':['4 330','4S 440','GTS 480','Turbo 550','Turbo S 630','4 E-Hybrid 462','4S E-Hybrid 560','Turbo S E-Hybrid 700'],
'Taycan':['Electrique 408','4S 530','GTS 598','Turbo 680','Turbo S 761','Turbo GT 1034'],
'718 Boxster':['2.0 Turbo 300','S 2.5 Turbo 350','GTS 4.0 400','Spyder 4.0 420'],
'718 Cayman':['2.0 Turbo 300','S 2.5 Turbo 350','GTS 4.0 400','GT4 4.0 420','GT4 RS 4.0 500']
,
'924':['2.0 125','2.0 Turbo 170'],
'944':['2.5 163','2.5 Turbo 250','2.5 S 190','3.0 S2 211'],
'928':['4.5 240','4.7 310','5.0 320','5.4 GTS 350'],
'964':['3.6 Carrera 250','3.6 Turbo 320'],
'993':['3.6 Carrera 272','3.6 Turbo 408'],
'996':['3.4 Carrera 300','3.6 Carrera 320','3.6 Turbo 420','3.6 GT3 360'],
'997':['3.6 Carrera 325','3.8 Carrera S 385','3.8 Turbo 500','3.8 GT3 435'],
'Boxster':['2.5 204','2.7 220','2.7 245','2.9 255','3.2 S 260','3.4 S 315'],
'Cayman':['2.7 245','2.9 265','3.4 S 320','3.4 S 325','3.4 GTS 340'],
'356':['1.1 40','1.3 44','1.5 55','1.6 60'],
'550':['1.5 110'],
'912':['1.6 90'],
'914':['1.7 80','1.8 85','2.0 100'],
'930':['3.0 Turbo 260','3.3 Turbo 300'],
'959':['2.8 Flat-6 Turbo 450'],
'968':['3.0 240','3.0 CS 305']},
'TESLA':{
'Model 3':['Standard 283','Long Range 351','Long Range AWD 498','Performance 513'],
'Model Y':['Propulsion 299','Long Range AWD 434','Performance 514'],
'Model S':['Dual Motor 670','Plaid 1020'],
'Model X':['Dual Motor 670','Plaid 1020']
,
'Cybertruck':['Electrique AWD 600','Electrique Tri-Motor 845'],
'Roadster':['Electrique 400'],
'Semi':['Electrique 1000']},
'MAZDA':{
'2':['1.3i 75','1.3i 84','1.5i 75','1.5i 90','1.5i 115','1.5 Skyactiv-D 105'],
'3':['1.5 Skyactiv-G 100','1.5 Skyactiv-G 120','2.0 Skyactiv-G 120','2.0 Skyactiv-G 122','2.0 Skyactiv-G 150','2.0 Skyactiv-G 165','2.0 Skyactiv-X 180','2.2 Skyactiv-D 150','2.2 Skyactiv-D 175','1.6 MZR-CD 109','2.0 MZR 150','2.3 MZR DISI Turbo MPS 260'],
'6':['2.0 Skyactiv-G 145','2.0 Skyactiv-G 165','2.2 Skyactiv-D 150','2.2 Skyactiv-D 175','2.2 Skyactiv-D 184','2.5 Skyactiv-G 192','2.0 MZR 147','2.0 MZR-CD 140','2.2 MZR-CD 163','2.2 MZR-CD 185','2.5 MZR 170'],
'CX-3':['1.5 Skyactiv-D 105','2.0 Skyactiv-G 120','2.0 Skyactiv-G 121','2.0 Skyactiv-G 150'],
'CX-30':['2.0 Skyactiv-G 122','2.0 Skyactiv-G 150','2.0 Skyactiv-X 186','1.8 Skyactiv-D 116','e-Skyactiv G 150','e-Skyactiv X 186'],
'CX-5':['2.0 Skyactiv-G 165','2.5 Skyactiv-G 194','2.2 Skyactiv-D 150','2.2 Skyactiv-D 175','2.2 Skyactiv-D 184'],
'CX-60':['2.5 Skyactiv-G 192','3.3 Skyactiv-D 200','3.3 Skyactiv-D 254','2.5 PHEV 327'],
'MX-5':['1.5 Skyactiv-G 132','2.0 Skyactiv-G 160','2.0 Skyactiv-G 184']
,
'323':['1.3 73','1.5 88','1.6 98','1.8 114','2.0 130','2.0 TD 90'],
'626':['1.8i 90','1.8i 105','2.0i 115','2.0i 136','2.0 TD 90','2.0 TDi 101'],
'5':['1.8 MZR 116','2.0 MZR 146','2.0 MZR-CD 143'],
'MX-30':['Electrique 145','2.0 e-Skyactiv G 145'],
'RX-7':['1.3 Turbo 255','1.3 Turbo 280'],
'RX-8':['1.3 Renesis 192','1.3 Renesis 231'],
'CX-7':['2.3 MZR DISI Turbo 260','2.2 MZR-CD 173'],
'BT-50':['2.2 TDCi 150','3.2 TDCi 200'],
'121':['1.1 54','1.3 60','1.3 72'],
'929':['2.0 120','2.2 140','3.0 V6 200'],
'CX-9':['3.3 Skyactiv-D 254','3.7 V6 277'],
'Demio':['1.3 63','1.3 75','1.5 75'],
'MX-3':['1.6 88','1.6 107','1.8 V6 133'],
'MX-6':['2.0 116','2.5 V6 165'],
'Premacy':['1.8 100','1.8 114','2.0 131','2.0 TD 90','2.0 TD 101'],
'Tribute':['2.0 124','2.3 150','3.0 V6 197'],
'Xedos':['1.6 114','2.0 140','2.5 V6 168']},
'SUZUKI':{
'Swift':['1.0 Boosterjet 112','1.2 DualJet 83','1.2 DualJet 90','1.2 Hybrid 83','1.3i 92','1.3 DDiS 75','1.4 Boosterjet Sport 140','1.6 VVT Sport 136'],
'Vitara':['1.0 Boosterjet 112','1.4 Boosterjet 129','1.4 Boosterjet 140','1.4 Boosterjet Hybrid 129','1.6i 120','1.6 DDiS 120','1.9 DDiS 129'],
'S-Cross':['1.0 Boosterjet 112','1.4 Boosterjet 129','1.4 Boosterjet Hybrid 129','1.5 Hybrid 115','1.6i 120','1.6 DDiS 120'],
'Jimny':['1.3i 85','1.5i 102','1.3 DDiS 86'],
'Ignis':['1.2 DualJet 83','1.2 DualJet 90','1.2 Hybrid 83']
,
'Alto':['0.8 54','1.0i 68','1.1i 63'],
'Baleno':['1.0 Boosterjet 112','1.2 DualJet 90'],
'Grand Vitara':['1.6i 107','1.9 DDiS 129','2.0i 128','2.0i 140','2.4i 166','2.4i 169','2.7 V6 184','3.2 V6 233'],
'SX4':['1.5i 99','1.6i 107','1.6i 120','1.6 DDiS 90','1.6 DDiS 120','1.9 DDiS 120','2.0 DDiS 135'],
'Celerio':['1.0i 68'],
'Splash':['1.0i 65','1.2i 86','1.3 DDiS 75'],
'Liana':['1.3i 90','1.6i 107'],
'Samurai':['1.3i 80','1.9 TD 64'],
'Wagon R':['1.0i 65','1.2i 94','1.3i 76','1.3 DDiS 70'],
'Cappuccino':['0.7 Turbo 64'],
'Carry':['0.7 50','1.0 55'],
'Kizashi':['2.4i 178'],
'SJ':['1.0 45','1.3 64'],
'X-90':['1.6i 97']},
'MITSUBISHI':{
'ASX':['1.0 Turbo 91','1.6i 117','1.8 DI-D 116','1.8 DI-D 150','2.0i 150','2.2 DI-D 150'],
'Eclipse Cross':['1.5 Turbo 163','2.2 DI-D 148','2.4 PHEV 188'],
'Outlander':['2.0i 150','2.2 DI-D 150','2.4 PHEV 230','2.4i MIVEC 170'],
'Space Star':['1.0i 71','1.2i 80','1.2i 71'],
'L200':['2.2 DI-D 150','2.4 DI-D 154','2.4 DI-D 181','2.5 DI-D 136','2.5 DI-D 178']
,
'Lancer':['1.5i 109','1.6i 117','1.8i 143','2.0i 150','2.0 DI-D 140','2.0 Turbo Evo 280','2.0 Turbo Evo 295'],
'Pajero':['2.5 TD 99','2.5 TD 115','2.8 TD 125','3.0 V6 170','3.2 DI-D 160','3.2 DI-D 170','3.2 DI-D 190','3.2 DI-D 200','3.5 V6 GDI 203','3.8 V6 250'],
'Colt':['1.1i 75','1.3i 95','1.5i 109','1.5 DI-D 95','1.5 Turbo Ralliart 150'],
'Galant':['2.0i 136','2.4 GDI 150','2.5 V6 160','2.0 TD 90','2.0 TDi 136'],
'i-MiEV':['Electrique 67'],
'3000 GT':['3.0 V6 Turbo 286','3.0 V6 Turbo 320'],
'Carisma':['1.6i 100','1.8 GDI 122','1.8 GDI 125','1.9 DI-D 102','1.9 DI-D 115'],
'Eclipse':['2.0 Turbo 213','2.4 165','3.0 V6 200','3.8 V6 265'],
'Grandis':['2.0 DI-D 136','2.4i 165'],
'Space Runner':['1.8 GDI 122','2.0 133','2.4 GDI 150'],
'Space Wagon':['2.0 133','2.0 GDI 150','2.4 GDI 150']},
'SUBARU':{
'Forester':['2.0i 150','2.0 e-Boxer 150','2.0D 147','2.5i 171','2.0 Turbo 240'],
'Impreza':['1.6i 114','2.0i 150','2.0 e-Boxer 150','2.0D 150','2.5 WRX STI 300','2.5 Turbo WRX 230'],
'XV':['1.6i 114','2.0i 150','2.0 e-Boxer 150','2.0D 147'],
'Outback':['2.0D 150','2.5i 175','2.5i 169','3.6R 256'],
'BRZ':['2.0i 200','2.4i 234'],
'WRX':['2.0 Turbo 268','2.5 Turbo STI 300']
,
'Legacy':['2.0i 150','2.0D 150','2.5i 175','2.5i 169','3.0R 245','3.6R 256'],
'Levorg':['1.6 Turbo 170','2.0 Turbo 150'],
'Solterra':['Electrique 218','Electrique AWD 218'],
'Justy':['1.0 69','1.3 68','1.3 83'],
'SVX':['3.3 Flat-6 230'],
'Trezia':['1.3i 99','1.4D 90']},
'LEXUS':{
'CT':['200h Hybrid 136'],
'IS':['300h Hybrid 223','250 208','300 241','350 318'],
'NX':['200t 238','300h Hybrid 197','350h Hybrid 244','450h+ PHEV 309'],
'RX':['200t 238','300 204','350 313','350h 245','450h Hybrid 313','450h+ PHEV 309','500h 371'],
'UX':['200 169','250h Hybrid 184','300e Electrique 204'],
'ES':['300h Hybrid 218','350 302'],
'LC':['500 464','500h Hybrid 354']
,
'GS':['300h Hybrid 223','350 318','450h Hybrid 345','F 477'],
'LS':['460 380','500h Hybrid 359','600h Hybrid 445'],
'RC':['300h Hybrid 223','350 318','F 477'],
'RZ':['Electrique 313'],
'GX':['4.6 V8 296','4.6 V8 301'],
'LX':['4.5 V8 Diesel 272','5.7 V8 383'],
'SC':['3.0 V6 225','4.3 V8 300']},
'CUPRA':{
'Ateca':['2.0 TSI 190','2.0 TSI 300'],
'Formentor':['1.5 TSI 150','1.5 eTSI 150','2.0 TDI 150','2.0 TSI 190','2.0 TSI 245','2.0 TSI 310','2.5 TFSI VZ5 390','1.4 eHybrid 204','1.4 eHybrid 245'],
'Born':['150 204','170 231','77 231','e-Boost 231'],
'Leon':['1.4 eHybrid 204','1.4 eHybrid 245','2.0 TSI 245','2.0 TSI 300','2.0 TSI VZ 310']
,
'Tavascan':['Electrique 286','Electrique AWD 340'],
'Terramar':['1.5 TSI 150','2.0 TSI 265','1.5 eHybrid 204','1.5 eHybrid 272']},
'ABARTH':{
'500':['1.4 Turbo 135','1.4 Turbo 140','1.4 Turbo 145','1.4 Turbo 160','1.4 Turbo 165','1.4 Turbo 180'],
'595':['1.4 Turbo 145','1.4 Turbo 160','1.4 Turbo 165','1.4 Turbo 180','1.4 Turbo Competizione 180'],
'695':['1.4 Turbo 180','1.4 Turbo 190','1.4 Turbo Biposto 190'],
'124 Spider':['1.4 MultiAir Turbo 170'],
'Punto':['1.4 Turbo 155','1.4 Turbo 165','1.4 Turbo 180'],
'Grande Punto':['1.4 Turbo 155']
},
'ALPINE':{
'A110':['1.8 Turbo 252','1.8 Turbo Pure 252','1.8 Turbo Légende 252','1.8 Turbo S 300','1.8 Turbo R 300']
,
'A106':['0.7 38'],
'A108':['1.1 55'],
'A310':['1.6 127','2.7 V6 150'],
'A610':['3.0 V6 Turbo 250'],
'A110 (2017+)':['1.8 Turbo 252','1.8 Turbo S 300']},
'ASTON MARTIN':{
'Vantage':['4.0 V8 Turbo 510','4.0 V8 Turbo 535','4.7 V8 426','4.7 V8 S 436','6.0 V12 517'],
'DB11':['4.0 V8 Turbo 510','5.2 V12 Turbo 608','5.2 V12 AMR 639'],
'DB12':['4.0 V8 Turbo 680'],
'DBS':['5.2 V12 Turbo 725','5.2 V12 Superleggera 725'],
'DBX':['4.0 V8 Turbo 550','4.0 V8 Turbo 707'],
'Rapide':['5.9 V12 477','6.0 V12 S 560']
,
'DB4':['4.0 L6 240'],
'DB5':['4.0 L6 282'],
'DB6':['4.0 L6 282'],
'DB7':['3.2 L6 335','5.9 V12 420'],
'DB9':['5.9 V12 450','5.9 V12 517'],
'V8':['4.3 V8 380','4.7 V8 420'],
'V12 Vantage':['5.9 V12 517','5.2 V12 700'],
'Valhalla':['4.0 V8 Hybrid 950'],
'Vanquish':['5.9 V12 460','5.9 V12 S 573'],
'Virage':['5.9 V12 490'],
'Zagato':['5.9 V12 517']},
'BENTLEY':{
'Continental GT':['4.0 V8 550','6.0 W12 635','6.0 W12 Speed 659'],
'Continental GTC':['4.0 V8 550','6.0 W12 635'],
'Flying Spur':['4.0 V8 550','6.0 W12 635','2.9 V6 Hybrid 544'],
'Bentayga':['3.0 V6 Hybrid 449','4.0 V8 550','6.0 W12 635','4.0 V8 Speed 635']
,
'Arnage':['4.4 V8 Turbo 354','6.75 V8 Turbo 450'],
'Azure':['6.75 V8 Turbo 385','6.75 V8 Turbo 456'],
'Brooklands':['6.75 V8 Turbo 537'],
'Continental':['6.75 V8 Turbo 400','6.0 W12 560'],
'Mulsanne':['6.75 V8 Turbo 512','6.75 V8 Turbo 530'],
'Turbo R':['6.75 V8 Turbo 389']},
'BUGATTI':{
'Chiron':['8.0 W16 1500','8.0 W16 Sport 1500','8.0 W16 Pur Sport 1500','8.0 W16 Super Sport 1600'],
'Veyron':['8.0 W16 1001','8.0 W16 Grand Sport 1001','8.0 W16 Super Sport 1200']
,
'Divo':['8.0 W16 1500'],
'EB110':['3.5 V12 Turbo 560']},
'BYD':{
'Atto 3':['Electrique 204'],
'Dolphin':['Electrique 95','Electrique 177'],
'Seal':['Electrique 313','Electrique AWD 530'],
'Seal U':['DM-i Hybrid 218','Electrique 204'],
'Han':['Electrique 517','DM-i Hybrid 245'],
'Tang':['Electrique AWD 517','DM-p Hybrid AWD 374']
},
'CADILLAC':{
'CTS':['2.0 Turbo 276','2.8 V6 210','3.0 V6 270','3.6 V6 311','6.2 V8 V 649'],
'Escalade':['6.2 V8 420','3.0 Diesel 277'],
'XT4':['2.0 Turbo 230'],
'XT5':['2.0 Turbo 200','3.6 V6 314'],
'Lyriq':['Electrique 340','Electrique AWD 500']
,
'ATS':['2.0 Turbo 276','2.5i 203'],
'BLS':['1.9 CDTi 150','2.0 Turbo 175'],
'CT4':['2.0 Turbo 237'],
'CT5':['2.0 Turbo 237','3.0 Turbo V 360'],
'De Ville':['4.6 V8 279'],
'Eldorado':['4.6 V8 300'],
'Fleetwood':['5.7 V8 260'],
'Seville':['4.6 V8 300'],
'SRX':['2.8 V6 258','3.0 V6 265','3.6 V6 308','4.6 V8 325'],
'STS':['3.6 V6 258','4.6 V8 325'],
'XT6':['2.0 Turbo 237'],
'XTS':['3.6 V6 305']},
'CHEVROLET':{
'Spark':['1.0i 68','1.2i 82'],
'Aveo':['1.2i 84','1.2i 86','1.3 CDTi 75','1.3 CDTi 95','1.4i 101','1.6i 115'],
'Cruze':['1.4 Turbo 140','1.6i 113','1.6i 124','1.7 CDTi 110','1.7 CDTi 130','1.8i 141','2.0 CDTi 150','2.0 CDTi 163'],
'Captiva':['2.0 CDTi 127','2.0 CDTi 150','2.2 CDTi 163','2.2 CDTi 184','2.4i 136','2.4i 167','3.0 V6 258','3.2 V6 230'],
'Orlando':['1.8i 141','2.0 CDTi 130','2.0 CDTi 163'],
'Trax':['1.4 Turbo 140','1.6i 115','1.7 CDTi 110','1.7 CDTi 130'],
'Camaro':['2.0 Turbo 275','3.6 V6 340','6.2 V8 455','6.2 V8 ZL1 650'],
'Corvette':['6.2 V8 Stingray 495','6.2 V8 Z06 670','5.5 V8 Z06 680']
,
'Astro':['4.3 V6 190'],
'Blazer':['2.0 Turbo 228','3.6 V6 308'],
'Bolt':['Electrique 200'],
'Colorado':['2.5i 200','2.8 Diesel 181','3.6 V6 308'],
'El Camino':['4.1 L6 155','5.0 V8 165','5.7 V8 175'],
'Equinox':['1.5 Turbo 170','2.0 Turbo 252'],
'Impala':['2.5i 197','3.6 V6 305'],
'Kalos':['1.2i 72','1.4i 83'],
'Lacetti':['1.4i 95','1.6i 109','1.8i 121'],
'Malibu':['1.5 Turbo 160','2.0 Turbo 252'],
'Matiz':['0.8i 52','1.0i 64'],
'Monte Carlo':['3.4 V6 180','3.8 V6 200'],
'Nova':['1.2 56','1.3 60','1.4 75','1.6 82'],
'Nubira':['1.6i 109','1.8i 121'],
'Silverado':['2.7 Turbo 310','3.0 Diesel 277','5.3 V8 355','6.2 V8 420'],
'Suburban':['5.3 V8 355','6.2 V8 420'],
'Tahoe':['5.3 V8 355','6.2 V8 420'],
'Trailblazer':['1.2 Turbo 137','1.3 Turbo 155']},
'CHRYSLER':{
'300C':['3.0 CRD 218','3.0 CRD 239','3.6 V6 296','5.7 V8 HEMI 363','6.1 V8 SRT8 431','6.4 V8 SRT 476'],
'Grand Voyager':['2.5 CRD 141','2.8 CRD 150','2.8 CRD 163','2.8 CRD 178','3.3 V6 174','3.8 V6 218'],
'PT Cruiser':['1.6i 116','2.0i 141','2.2 CRD 121','2.2 CRD 150','2.4i 143','2.4 Turbo 223'],
'Voyager':['2.0i 133','2.4i 147','2.5 CRD 141','2.8 CRD 150','2.8 CRD 163','3.3 V6 174']
,
'200':['2.4i 184','3.6 V6 296'],
'300':['3.6 V6 296','5.7 V8 HEMI 363'],
'300M':['2.7 V6 204','3.5 V6 252'],
'Crossfire':['3.2 V6 218','3.2 V6 SRT-6 330'],
'Neon':['1.6i 115','2.0i 133'],
'Pacifica':['3.6 V6 287','3.6 V6 Hybrid 260'],
'Sebring':['2.0i 141','2.4i 170','2.7 V6 189'],
'Stratus':['2.0i 133','2.4i 152','2.5 V6 163']},
'DAEWOO':{
'Matiz':['0.8i 52','1.0i 64'],
'Kalos':['1.2i 72','1.4i 83'],
'Lacetti':['1.4i 95','1.6i 109','1.8i 121','2.0 CDTi 121'],
'Nubira':['1.6i 109','1.8i 121','2.0i 133','2.0 CDTi 121']
,
'Espero':['1.5i 90','1.8i 95','2.0i 105'],
'Evanda':['2.0i 131'],
'Lanos':['1.4i 75','1.5i 86','1.6i 106'],
'Leganza':['2.0i 133'],
'Nexia':['1.5i 75','1.5i 90'],
'Rezzo':['1.6i 105','2.0i 121'],
'Tacuma':['1.6i 105','2.0i 121']},
'DAIHATSU':{
'Sirion':['1.0i 69','1.0i 71','1.3i 87','1.3i 91','1.5i 103'],
'Terios':['1.3i 83','1.3i 86','1.5i 105'],
'Copen':['0.7 Turbo 68','1.3i 87']
,
'Charade':['1.0i 68','1.3i 87','1.5i 103','1.0 TD 52'],
'Cuore':['0.8 42','1.0i 55','1.0i 58'],
'Feroza':['1.6i 87','1.6i 95'],
'Gran Move':['1.5i 90','1.6i 103'],
'Materia':['1.3i 91','1.5i 103'],
'Trevis':['1.0i 58'],
'YRV':['1.0i 65','1.0 Turbo 103','1.3i 87']},
'DODGE':{
'Challenger':['3.6 V6 305','5.7 V8 HEMI 375','6.2 V8 Hellcat 717','6.2 V8 Demon 840','6.4 V8 SRT 492'],
'Charger':['3.6 V6 305','5.7 V8 HEMI 375','6.2 V8 Hellcat 717','6.4 V8 SRT 492'],
'Durango':['3.6 V6 295','5.7 V8 HEMI 360','6.4 V8 SRT 475'],
'Ram':['3.0 V6 EcoDiesel 260','3.6 V6 305','5.7 V8 HEMI 395','6.2 V8 TRX 702','6.4 V8 410'],
'Nitro':['2.8 CRD 177','3.7 V6 210','4.0 V6 260'],
'Journey':['2.0 CRD 140','2.4i 170','3.6 V6 280']
,
'Avenger':['2.0i 156','2.4i 170','2.7 V6 189'],
'Caliber':['1.8i 150','2.0i 156','2.0 CRD 140','2.4i 172'],
'Dakota':['2.5i 120','3.9 V6 175','4.7 V8 235','5.9 V8 250'],
'Grand Caravan':['3.3 V6 174','3.6 V6 287','3.8 V6 215'],
'Magnum':['2.7 V6 190','3.5 V6 253','5.7 V8 HEMI 340','6.1 V8 SRT8 431'],
'Viper':['8.0 V10 400','8.3 V10 506','8.4 V10 640']},
'FERRARI':{
'Roma':['3.9 V8 Turbo 620'],
'Portofino':['3.9 V8 Turbo 600','3.9 V8 Turbo M 620'],
'F8':['3.9 V8 Turbo Tributo 720','3.9 V8 Turbo Spider 720'],
'SF90':['4.0 V8 Turbo Hybrid 1000'],
'296 GTB':['3.0 V6 Turbo Hybrid 830'],
'296 GTS':['3.0 V6 Turbo Hybrid 830'],
'812':['6.5 V12 800','6.5 V12 Competizione 830'],
'Purosangue':['6.5 V12 725'],
'488':['3.9 V8 Turbo GTB 670','3.9 V8 Turbo Spider 670','3.9 V8 Turbo Pista 720'],
'458':['4.5 V8 570','4.5 V8 Speciale 605','4.5 V8 Spider 570'],
'California':['4.3 V8 460','3.9 V8 Turbo T 560'],
'GTC4Lusso':['3.9 V8 Turbo T 610','6.3 V12 690'],
'LaFerrari':['6.3 V12 Hybrid 963']
,
'208':['2.0 V8 Turbo 220'],
'246 Dino':['2.4 V6 195'],
'250':['3.0 V12 240'],
'275':['3.3 V12 300'],
'288 GTO':['2.9 V8 Turbo 400'],
'308':['2.9 V8 255'],
'328':['3.2 V8 270'],
'330':['4.0 V12 300'],
'348':['3.4 V8 300'],
'355':['3.5 V8 380'],
'360':['3.6 V8 400'],
'365':['4.4 V12 352'],
'375':['4.5 V12 340'],
'400':['4.8 V12 340'],
'412':['4.9 V12 340'],
'456':['5.5 V12 442'],
'512':['4.9 V12 421'],
'550':['5.5 V12 485'],
'575':['5.7 V12 515'],
'599':['6.0 V12 612'],
'612':['5.7 V12 540'],
'Daytona SP3':['6.5 V12 840'],
'Enzo':['6.0 V12 660'],
'F12':['6.3 V12 740'],
'F355':['3.5 V8 380'],
'F40':['2.9 V8 Turbo 478'],
'F430':['4.3 V8 490'],
'F50':['4.7 V12 520'],
'FF':['6.3 V12 660'],
'Mondial':['3.0 V8 214','3.2 V8 270','3.4 V8 300'],
'Testarossa':['4.9 Flat-12 390']},
'GENESIS':{
'G70':['2.0 Turbo 252','3.3 V6 Turbo 370'],
'G80':['2.5 Turbo 304','3.5 Turbo 380','Electrified 360'],
'GV60':['Electrique 234','Electrique AWD 320','Electrique Performance 490'],
'GV70':['2.0 Turbo 252','2.5 Turbo 304','Electrified 360'],
'GV80':['2.5 Turbo 304','3.0 Diesel 278','3.5 Turbo 380']
,
'G90':['3.3 V6 Turbo 370','3.8 V6 315','5.0 V8 420']},
'HUMMER':{
'EV':['Electrique 3X 1000','Electrique 2X 830','Electrique SUV 830']
,
'H1':['6.5 V8 Diesel 195','6.6 V8 Duramax 300'],
'H2':['6.0 V8 316','6.2 V8 398'],
'H3':['3.5 L5 220','3.7 L5 242','5.3 V8 300']},
'INFINITI':{
'Q30':['1.5d 109','1.6 Turbo 156','2.0 Turbo 211','2.2d 170'],
'Q50':['2.0 Turbo 211','2.2d 170','3.0 V6 Turbo 405','3.5 V6 Hybrid 364'],
'QX70':['3.0d 238','3.7 V6 320','5.0 V8 390']
,
'EX':['3.0d 238','3.5 V6 297'],
'FX':['3.0d 238','3.5 V6 303','3.7 V6 320','5.0 V8 390'],
'G':['2.0d 170','3.5 V6 306','3.7 V6 320'],
'M':['2.5 Hybrid 354','3.0d 238','3.5 V6 303','3.7 V6 320'],
'Q60':['2.0 Turbo 211','3.0 V6 Turbo 405'],
'Q70':['2.2d 170','3.5 V6 Hybrid 364','3.7 V6 320'],
'QX30':['1.5d 109','1.6 Turbo 156','2.0 Turbo 211'],
'QX50':['2.0 Turbo 268'],
'QX80':['5.6 V8 400']},
'JEEP':{
'Renegade':['1.0 Turbo 120','1.3 Turbo 150','1.3 Turbo 180','1.6 Multijet 120','1.6 Multijet 130','2.0 Multijet 140','2.0 Multijet 170','4xe Hybrid 190','4xe Hybrid 240'],
'Compass':['1.3 Turbo 130','1.3 Turbo 150','1.6 Multijet 120','1.6 Multijet 130','2.0 Multijet 140','2.0 Multijet 170','4xe Hybrid 190','4xe Hybrid 240'],
'Cherokee':['2.0 Multijet 140','2.0 Multijet 170','2.0 Multijet 195','2.2 Multijet 185','2.2 Multijet 195','2.4i 177','3.2 V6 272'],
'Grand Cherokee':['2.0 Turbo 4xe 381','3.0 CRD 190','3.0 CRD 241','3.0 CRD 250','3.6 V6 286','5.7 V8 HEMI 352','6.2 V8 Trackhawk 710','6.4 V8 SRT 468'],
'Wrangler':['2.0 Turbo 272','2.0 Turbo 4xe 380','2.2 Multijet 200','3.6 V6 285','6.4 V8 Rubicon 392 470'],
'Avenger':['1.2 Turbo 100','1.2 Turbo 136','Electrique 156']
,
'Gladiator':['3.0 V6 Diesel 260','3.6 V6 285'],
'Patriot':['2.0 CRD 140','2.2 CRD 163','2.4i 170'],
'Liberty':['2.4i 150','2.8 CRD 150','2.8 CRD 177','3.7 V6 210'],
'Commander':['3.0 CRD 218','3.7 V6 210','4.7 V8 231','5.7 V8 HEMI 326'],
'CJ':['2.5 L4 87','4.2 L6 112'],
'Comanche':['2.5 L4 117','4.0 L6 177'],
'Grand Wagoneer':['5.7 V8 HEMI 471'],
'Wagoneer':['5.7 V8 HEMI 392'],
'Willys':['2.2 L4 63']},
'LAMBORGHINI':{
'Huracán':['5.2 V10 610','5.2 V10 Performante 640','5.2 V10 STO 640','5.2 V10 Tecnica 640','5.2 V10 Sterrato 610'],
'Urus':['4.0 V8 Turbo 650','4.0 V8 Turbo S 666','4.0 V8 Turbo Performante 666'],
'Aventador':['6.5 V12 700','6.5 V12 S 740','6.5 V12 SVJ 770','6.5 V12 Ultimae 780'],
'Revuelto':['6.5 V12 Hybrid 1015'],
'Gallardo':['5.0 V10 500','5.0 V10 Superleggera 530','5.2 V10 LP 560','5.2 V10 LP 570']
,
'350 GT':['3.5 V12 280'],
'400 GT':['4.0 V12 320'],
'Centenario':['6.5 V12 770'],
'Countach':['3.9 V12 375','4.8 V12 455','5.2 V12 455'],
'Diablo':['5.7 V12 485','5.7 V12 530','6.0 V12 550'],
'Espada':['3.9 V12 325'],
'Islero':['3.9 V12 325'],
'Jalpa':['3.5 V8 255'],
'Jarama':['3.9 V12 350'],
'LM002':['5.2 V12 455'],
'Miura':['3.9 V12 350','3.9 V12 S 370'],
'Murciélago':['6.2 V12 580','6.5 V12 640','6.5 V12 670'],
'Silhouette':['3.0 V8 260'],
'Urraco':['2.5 V8 220','3.0 V8 250']},
'LANCIA':{
'Ypsilon':['0.9 TwinAir 85','1.0 Hybrid 70','1.2i 69','1.3 Multijet 75','1.3 Multijet 95'],
'Delta':['1.4 Turbo 120','1.4 Turbo 140','1.4 Turbo 150','1.6 Multijet 120','1.8 DI Turbo 200','2.0 Multijet 165'],
'Musa':['1.3 Multijet 70','1.3 Multijet 90','1.4i 78','1.4 Turbo 150','1.6 Multijet 120']
,
'Thema':['3.0 V6 Multijet 190','3.6 V6 286'],
'Thesis':['2.0 Turbo 185','2.4 JTD 150','2.4 JTD 175','3.0 V6 215','3.2 V6 230'],
'Lybra':['1.6 16V 103','1.8 16V 131','2.0 20V 154','1.9 JTD 105','1.9 JTD 110','1.9 JTD 115','2.4 JTD 140','2.4 JTD 150'],
'Phedra':['2.0 Multijet 120','2.0 Multijet 136','2.2 Multijet 128','2.2 Multijet 170','3.0 V6 204'],
'Beta':['1.4 84','1.6 100','1.8 110','2.0 115'],
'Dedra':['1.6 90','1.8 110','2.0 115','2.0 Turbo 165','1.9 TDS 90'],
'Flavia':['2.0 125'],
'Fulvia':['1.2 80','1.3 87','1.6 HF 115'],
'Gamma':['2.0 120','2.5 140'],
'Kappa':['2.0 155','2.0 Turbo 205','2.4 175','3.0 V6 204','2.4 JTD 136'],
'Montecarlo':['2.0 120'],
'Prisma':['1.5 75','1.6 105','1.9D 65','2.0 115'],
'Stratos':['2.4 V6 Dino 190'],
'Y':['1.0 55','1.1 60','1.2 80','1.4 80','1.2 16V 86'],
'Zeta':['2.0 123','2.0 Turbo 147','2.1 TD 109']},
'LIGIER':{
'JS50':['Diesel 8ch','Electrique'],
'JS60':['Diesel 8ch','Electrique']
},
'LINCOLN':{
'Navigator':['3.5 V6 EcoBoost 450'],
'Aviator':['3.0 V6 Turbo 400','3.0 V6 Turbo PHEV 494'],
'Corsair':['2.0 Turbo 250','2.5 Hybrid 266']
,
'Continental':['2.7 V6 335','3.0 V6 400'],
'MKC':['2.0 Turbo 240','2.3 Turbo 285'],
'MKS':['3.5 V6 273','3.5 V6 EcoBoost 355'],
'MKT':['2.0 EcoBoost 240','3.5 V6 EcoBoost 355'],
'MKX':['2.7 V6 EcoBoost 335','3.7 V6 305'],
'MKZ':['2.0 Turbo 245','2.0 Hybrid 188','3.0 V6 400'],
'Nautilus':['2.0 Turbo 250','2.7 V6 335'],
'Town Car':['4.6 V8 239']},
'LOTUS':{
'Elise':['1.6 136','1.8 220','1.8 Cup 250'],
'Exige':['1.8 350','3.5 V6 410','3.5 V6 430'],
'Evora':['3.5 V6 300','3.5 V6 GT410 416'],
'Emira':['2.0 Turbo AMG 360','3.5 V6 Turbo 400']
,
'Elan':['1.6 Turbo 165'],
'Esprit':['2.0 Turbo 264','2.2 Turbo 300','3.5 V8 Turbo 500'],
'Europa':['2.0 Turbo 200'],
'Evija':['Electrique 2000'],
'Seven':['1.4 122','1.6 125','2.0 250']},
'LYNK & CO':{
'01':['1.5 Turbo PHEV 261']
,
'02':['1.5 Turbo PHEV 261']},
'MASERATI':{
'Ghibli':['3.0 V6 350','3.0 V6 S 430','3.0 V6 Trofeo 580','2.0 Turbo 330','3.0 Diesel 275'],
'Levante':['3.0 V6 350','3.0 V6 S 430','3.0 V6 Trofeo 580','3.0 Diesel 275','2.0 Turbo 330'],
'Quattroporte':['3.0 V6 350','3.0 V6 S 430','3.8 V8 Trofeo 580','3.0 Diesel 275'],
'MC20':['3.0 V6 Nettuno 630','3.0 V6 Cielo 630'],
'Grecale':['2.0 Turbo GT 300','2.0 Turbo Modena 330','3.0 V6 Trofeo 530','Folgore Electrique 557','2.0 Turbo Mild Hybrid 300'],
'GranTurismo':['3.0 V6 Nettuno Modena 490','3.0 V6 Nettuno Trofeo 550','Folgore Electrique 760']
,
'3200':['3.2 V8 Turbo 370'],
'Bora':['4.7 V8 310','4.9 V8 330'],
'GranCabrio':['4.7 V8 440','4.7 V8 MC 460'],
'GranSport':['4.2 V8 400'],
'Indy':['4.2 V8 260','4.7 V8 290'],
'Khamsin':['4.9 V8 320'],
'Merak':['3.0 V6 190'],
'Mexico':['4.2 V8 260','4.7 V8 290'],
'Shamal':['3.2 V8 Turbo 326'],
'Spyder':['4.2 V8 390','4.7 V8 440']},
'McLAREN':{
'570S':['3.8 V8 Turbo 570'],
'570GT':['3.8 V8 Turbo 570'],
'600LT':['3.8 V8 Turbo 600'],
'620R':['3.8 V8 Turbo 620'],
'650S':['3.8 V8 Turbo 650'],
'675LT':['3.8 V8 Turbo 675'],
'720S':['4.0 V8 Turbo 720'],
'750S':['4.0 V8 Turbo 750'],
'765LT':['4.0 V8 Turbo 765'],
'Artura':['3.0 V6 Turbo Hybrid 680'],
'GT':['4.0 V8 Turbo 620'],
'P1':['3.8 V8 Turbo Hybrid 916'],
'Senna':['4.0 V8 Turbo 800']
,
'540C':['3.8 V8 Turbo 540'],
'Elva':['4.0 V8 Turbo 815'],
'MP4-12C':['3.8 V8 Turbo 600'],
'Speedtail':['4.0 V8 Turbo Hybrid 1050']},
'MG':{
'MG3':['1.5i 106'],
'MG4':['Electrique Standard 170','Electrique Comfort 204','Electrique Luxury 204','Electrique XPOWER 435'],
'MG5':['Electrique Standard 177','Electrique Long Range 177'],
'ZS':['1.0 Turbo 111','1.5i 106'],
'ZS EV':['Electrique 177'],
'HS':['1.5 Turbo 162','1.5 Turbo PHEV 258'],
'EHS':['1.5 Turbo PHEV 258']
,
'MG7':['1.8i 120','2.0i 160','2.5 V6 177'],
'TF':['1.6 116','1.8 120','1.8 135','1.8 160'],
'ZR':['1.4 103','1.8 120','1.8 160','2.0 TD 101','2.0 TD 113'],
'ZT':['1.8 120','1.8 Turbo 160','2.0 CDTi 131','2.5 V6 177','4.6 V8 260'],
'F':['1.6 120','1.8 120','1.8 VVC 145'],
'B':['1.8 95'],
'A':['1.5 72','1.6 80'],
'C':['2.9 145'],
'Midget':['1.1 55','1.3 65','1.5 66']},
'MICROCAR':{
'Dué':['Diesel 8ch','Electrique'],
'M.Go':['Diesel 8ch','Electrique'],
'M8':['Diesel 8ch']
},
'MORGAN':{
'Plus 4':['2.0 Turbo Ford 255'],
'Plus 6':['3.0 Turbo BMW 340'],
'Super 3':['1.5 Ford 118']
,
'4/4':['1.6 Ford 100'],
'Aero 8':['4.8 V8 BMW 367'],
'Plus 8':['4.8 V8 BMW 367'],
'Roadster':['3.0 V6 Ford 220']},
'NIO':{
'ET5':['Electrique 490','Electrique Touring 490'],
'ET7':['Electrique 653'],
'EL6':['Electrique 490'],
'EL7':['Electrique 653'],
'EL8':['Electrique 653']
},
'POLESTAR':{
'2':['Electrique Standard 272','Electrique Long Range 313','Electrique Long Range Dual 408','Electrique BST 476'],
'3':['Electrique Long Range 489','Electrique Long Range Dual 517'],
'4':['Electrique Long Range 272','Electrique Long Range Dual 544']
,
'1':['2.0 Turbo Hybrid 609']},
'ROLLS-ROYCE':{
'Ghost':['6.75 V12 571','6.75 V12 Black Badge 600'],
'Phantom':['6.75 V12 571'],
'Wraith':['6.6 V12 632','6.6 V12 Black Badge 632'],
'Dawn':['6.6 V12 571','6.6 V12 Black Badge 601'],
'Cullinan':['6.75 V12 571','6.75 V12 Black Badge 600'],
'Spectre':['Electrique 585']
,
'Camargue':['6.75 V8 200'],
'Corniche':['6.75 V8 225'],
'Silver Cloud':['4.9 L6 180','6.2 V8 200'],
'Silver Shadow':['6.2 V8 189','6.75 V8 200'],
'Silver Spirit':['6.75 V8 200','6.75 V8 225'],
'Silver Spur':['6.75 V8 225']},
'ROVER':{
'25':['1.1i 75','1.4i 84','1.4i 103','1.6i 109','1.8i 117','2.0 TD 101','2.0 TD 113'],
'45':['1.4i 103','1.6i 109','1.8i 117','2.0i 150','2.0 TD 101','2.0 TD 113'],
'75':['1.8i 120','1.8 Turbo 150','2.0 CDT 116','2.0 CDTi 131','2.5 V6 177']
,
'100':['1.1i 60','1.4i 75','1.4i 103','1.5D 86'],
'200':['1.1i 60','1.4i 75','1.4i 103','1.6i 109','1.8i 120','2.0 TD 86','2.0 TD 101'],
'400':['1.4i 103','1.6i 109','1.8i 120','2.0 TD 101','2.0 TD 113'],
'600':['1.8i 120','2.0i 131','2.0 TD 105','2.3i 158'],
'800':['2.0i 136','2.0 Turbo 180','2.5 V6 177','2.7 CDT 131'],
'City':['1.4 103'],
'Metro':['1.0 44','1.1 60','1.4 75'],
'Mini':['1.0 40','1.3 50','1.3 63'],
'Streetwise':['1.4 84','1.4 103','1.8 117','2.0 TD 101']},
'SAAB':{
'9-3':['1.8i 122','1.8 Turbo 150','2.0 Turbo 150','2.0 Turbo 175','2.0 Turbo 210','2.0 Turbo Aero 220','2.8 V6 Turbo 255','2.8 V6 Turbo Aero 280','1.9 TiD 120','1.9 TiD 150','1.9 TTiD 180'],
'9-5':['2.0 Turbo 150','2.0 Turbo 180','2.0 Turbo 220','2.3 Turbo 170','2.3 Turbo 185','2.3 Turbo 220','2.3 Turbo Aero 250','2.3 Turbo Aero 260','2.8 V6 Turbo 300','1.9 TiD 150','2.2 TiD 120','3.0 TiD 176','3.0 V6 200']
,
'900':['2.0 128','2.0 Turbo 145','2.0 Turbo 170','2.0 Turbo 185','2.3 150','2.3 Turbo 170','2.3 Turbo 200','2.5 V6 170'],
'9000':['2.0 128','2.0 Turbo 150','2.0 Turbo 170','2.0 Turbo 185','2.3 Turbo 170','2.3 Turbo 200','2.3 Turbo 225','3.0 V6 210'],
'9-2X':['2.0 Turbo 230','2.5 Turbo 230'],
'9-7X':['4.2 L6 291','5.3 V8 300'],
'90':['2.0 100','2.0i 110'],
'93':['1.5 V4 55','1.5 V4 65'],
'95':['1.5 V4 55','1.5 V4 65','2.0 95'],
'96':['1.5 V4 55','1.5 V4 65'],
'99':['2.0 100','2.0 Turbo 145'],
'Sonett':['1.5 V4 60','1.7 V4 65']},
'SIMCA':{
'1100':['1.1 50','1.1 55','1.3 60','1.1 Ti 82'],
'Horizon':['1.1 55','1.3 68','1.5 85','1.9D 65']
,
'1000':['0.9 32','1.0 44','1.0 55','1.1 82'],
'1200':['1.1 55','1.3 60'],
'1301':['1.3 60'],
'1307':['1.3 68','1.4 85'],
'1308':['1.3 68','1.4 85'],
'1500':['1.5 81'],
'1501':['1.5 70'],
'Aronde':['1.1 48','1.3 57'],
'Rallye':['1.0 Rally 1 51','1.3 Rally 2 82','1.3 Rally 3 103'],
'Solara':['1.3 68','1.4 85','1.6 90'],
'Talbot Samba':['0.9 42','1.0 44','1.1 55','1.2 59','1.4 Cabriolet 72']},
'SMART':{
'ForTwo':['0.9 Turbo 90','1.0i 61','1.0i 71','1.0 Turbo 84','1.0 Turbo 90','0.8 CDi 45','0.8 CDi 54','EQ Electrique 82'],
'ForFour':['0.9 Turbo 90','1.0i 61','1.0i 71','EQ Electrique 82'],
'#1':['Electrique 272','Electrique Brabus 428'],
'#3':['Electrique 272','Electrique Brabus 428']
,
'Roadster':['0.7 Turbo 82']},
'SSANGYONG':{
'Tivoli':['1.2 Turbo 128','1.5 Turbo 163','1.6 Diesel 115','1.6 Diesel 136'],
'Korando':['1.5 Turbo 163','1.6 Diesel 136','Electrique 190'],
'Rexton':['2.0 Diesel 181','2.2 Diesel 181','2.2 Diesel 202'],
'Torres':['1.5 Turbo 163']
,
'Actyon':['2.0 Xdi 141','2.0 Xdi 155','2.3i 150'],
'Kyron':['2.0 Xdi 141','2.7 Xdi 163','2.7 Xdi 165','3.2 V6 220'],
'Musso':['2.2 Diesel 181'],
'Rodius':['2.0 Xdi 155','2.7 Xdi 165'],
'XLV':['1.6 Diesel 115','1.6 Diesel 136']},
'TATA':{
'Indica':['1.4i 85','1.4 Diesel 70'],
'Xenon':['2.2 Diesel 140','3.0 V6 Diesel 115']
,
'Indigo':['1.4i 85','1.4 Diesel 70'],
'Safari':['2.2 Diesel 140'],
'Sumo':['2.0 Diesel 90','3.0 Diesel 115']},
'WIESMANN':{
'MF4':['4.0 V8 BMW 367'],
'MF5':['5.0 V10 BMW 555'],
'GT':['3.0 Turbo BMW 340']
,
'MF3':['3.2 L6 BMW 343']},
'XPENG':{
'P5':['Electrique 211'],
'P7':['Electrique 270','Electrique AWD 473'],
'G6':['Electrique 272','Electrique AWD 487'],
'G9':['Electrique 313','Electrique AWD 551']
},
'SERES':{
'3':['Electrique 163'],
'5':['1.5 EREV 224','Electrique 255']
},
'GWM':{
'Ora':['Electrique 171']
},
'AIWAYS':{
'U5':['Electrique 204'],
'U6':['Electrique 204']
},
'ISUZU':{
'D-Max':['1.9 Diesel 164','1.9 Diesel 163','2.5 Diesel 136','2.5 Diesel 163','3.0 Diesel 177']
,
'Campo':['2.2i 98','2.5D 72','2.5 TD 76','2.8 TD 100'],
'Gemini':['1.5i 97','1.7D 57'],
'Piazza':['2.0 Turbo 150'],
'Trooper':['2.8 TD 106','3.0 TD 159','3.1 TD 114','3.2 V6 177','3.5 V6 215']},
'DE TOMASO':{
'Pantera':['5.8 V8 Ford 350']
,
'Deauville':['5.8 V8 Ford 330'],
'Longchamp':['5.8 V8 Ford 330'],
'Mangusta':['4.7 V8 Ford 305'],
'Vallelunga':['1.5 104']},
'GMC':{
'Sierra':['5.3 V8 360','6.2 V8 420','3.0 Diesel 277'],
'Yukon':['5.3 V8 360','6.2 V8 420'],
'Canyon':['2.7 Turbo 314','3.6 V6 310','2.8 Diesel 181']
,
'Acadia':['2.5i 193','3.6 V6 310'],
'Envoy':['4.2 L6 275','5.3 V8 300'],
'Jimmy':['4.3 V6 190'],
'Terrain':['1.5 Turbo 170','2.0 Turbo 252']},
'CHEVROLET-DAEWOO':{
'Matiz':['0.8i 52','1.0i 64'],
'Kalos':['1.2i 72','1.4i 83'],
'Lacetti':['1.4i 95','1.6i 109','1.8i 121','2.0 CDTi 121'],
'Nubira':['1.6i 109','1.8i 121','2.0 CDTi 121'],
'Spark':['1.0i 68','1.2i 82'],
'Tacuma':['1.6i 105','2.0i 121'],
'Evanda':['2.0i 131']
}
};


// ============================================================
// DEFAULT OPERATIONS (48 templates)
// ============================================================
const DEFAULT_OPERATIONS = [
    // ======= T1 - ENTRETIEN COURANT =======
    {id:'op1',type:'T1',name:'Vidange simple',price:30.00,parts:[
        {desc:'Huile moteur 5W30/5W40 (5L)',price:0},
        {desc:'Filtre à huile',price:0},
        {desc:'Joint bouchon de vidange',price:0}
    ]},
    {id:'op2',type:'T1',name:'Remplacement filtre à air',price:10.00,parts:[
        {desc:'Filtre à air',price:0}
    ]},
    {id:'op3',type:'T1',name:'Remplacement filtre habitacle / pollen',price:10.00,parts:[
        {desc:'Filtre habitacle / pollen',price:0}
    ]},
    {id:'op4',type:'T1',name:'Remplacement filtre à carburant (diesel)',price:15.00,parts:[
        {desc:'Filtre à carburant diesel',price:0}
    ]},
    {id:'op5',type:'T1',name:'Remplacement bougies d\'allumage (jeu de 4)',price:25.00,parts:[
        {desc:'Bougies d\'allumage (jeu de 4)',price:0}
    ]},
    {id:'op6',type:'T1',name:'Remplacement bougies de préchauffage (jeu de 4)',price:35.00,parts:[
        {desc:'Bougies de préchauffage (jeu de 4)',price:0}
    ]},
    {id:'op7',type:'T1',name:'Appoint + contrôle liquide de refroidissement',price:15.00,parts:[]},
    {id:'op8',type:'T1',name:'Appoint + contrôle liquide de frein',price:12.00,parts:[]},
    {id:'op9',type:'T1',name:'Remplacement essuie-glaces AV (paire)',price:8.00,parts:[
        {desc:'Balais essuie-glace AV (paire)',price:0}
    ]},
    {id:'op10',type:'T1',name:'Remplacement essuie-glace AR',price:5.00,parts:[
        {desc:'Balai essuie-glace AR',price:0}
    ]},
    {id:'op11',type:'T1',name:'Contrôle pression et état des pneus',price:10.00,parts:[]},
    {id:'op12',type:'T1',name:'Équilibrage 4 roues',price:35.00,parts:[]},
    {id:'op13',type:'T1',name:'Permutation des pneus AV/AR',price:20.00,parts:[]},
    {id:'op14',type:'T1',name:'Remplacement ampoule phare AV (halogène)',price:8.00,parts:[
        {desc:'Ampoule phare AV halogène',price:0}
    ]},
    {id:'op15',type:'T1',name:'Remplacement ampoule feu AR / stop',price:5.00,parts:[
        {desc:'Ampoule feu AR / stop',price:0}
    ]},
    {id:'op16',type:'T1',name:'Révision intermédiaire (MO + contrôle 30 pts + RAZ)',price:35.00,parts:[
        {desc:'Huile moteur 5W30/5W40 (5L)',price:0},
        {desc:'Filtre à huile',price:0},
        {desc:'Joint bouchon de vidange',price:0},
        {desc:'Filtre habitacle / pollen',price:0}
    ]},
    {id:'op17',type:'T1',name:'Révision complète (MO + contrôle 50 pts + RAZ)',price:50.00,parts:[
        {desc:'Huile moteur 5W30/5W40 (5L)',price:0},
        {desc:'Filtre à huile',price:0},
        {desc:'Joint bouchon de vidange',price:0},
        {desc:'Filtre à air',price:0},
        {desc:'Filtre habitacle / pollen',price:0}
    ]},
    {id:'op18a',type:'T1',name:'Révision constructeur (MO + contrôle 70 pts + essai + RAZ)',price:65.00,parts:[
        {desc:'Huile moteur 5W30/5W40 (5L)',price:0},
        {desc:'Filtre à huile',price:0},
        {desc:'Joint bouchon de vidange',price:0},
        {desc:'Filtre à air',price:0},
        {desc:'Filtre habitacle / pollen',price:0},
        {desc:'Filtre à carburant (diesel uniquement)',price:0}
    ]},
    {id:'op18b',type:'T1',name:'Grosse révision (MO + contrôle 70 pts + essai + RAZ)',price:85.00,parts:[
        {desc:'Huile moteur 5W30/5W40 (5L)',price:0},
        {desc:'Filtre à huile',price:0},
        {desc:'Joint bouchon de vidange',price:0},
        {desc:'Filtre à air',price:0},
        {desc:'Filtre habitacle / pollen',price:0},
        {desc:'Filtre à carburant',price:0},
        {desc:'Liquide de frein (purge complète, 1L)',price:0},
        {desc:'Liquide de refroidissement (5L)',price:0}
    ]},
    {id:'op18c',type:'T1',name:'Remplacement liquide de refroidissement (purge + remplissage)',price:30.00,parts:[
        {desc:'Liquide de refroidissement (5L)',price:0}
    ]},
    {id:'op19',type:'T1',name:'Montage 2 pneus (équilibrage inclus)',price:30.00,parts:[]},
    {id:'op20',type:'T1',name:'Montage 4 pneus (équilibrage inclus)',price:50.00,parts:[]},
    {id:'op21',type:'T1',name:'Réparation pneu (rustine)',price:19.00,parts:[]},
    {id:'op22',type:'T1',name:'Remplacement ampoule LED / xénon phare AV',price:15.00,parts:[
        {desc:'Ampoule LED / xénon phare AV',price:0}
    ]},
    // ======= T2 - MÉCANIQUE =======
    {id:'op23',type:'T2',name:'Remplacement plaquettes de frein AV (MO)',price:30.00,parts:[
        {desc:'Jeu plaquettes de frein AV',price:0}
    ]},
    {id:'op24',type:'T2',name:'Remplacement plaquettes de frein AR (MO)',price:30.00,parts:[
        {desc:'Jeu plaquettes de frein AR',price:0}
    ]},
    {id:'op25',type:'T2',name:'Remplacement disques + plaquettes AV (MO)',price:50.00,parts:[
        {desc:'Disques de frein AV (x2)',price:0},
        {desc:'Jeu plaquettes de frein AV',price:0}
    ]},
    {id:'op26',type:'T2',name:'Remplacement disques + plaquettes AR (MO)',price:45.00,parts:[
        {desc:'Disques de frein AR (x2)',price:0},
        {desc:'Jeu plaquettes de frein AR',price:0}
    ]},
    {id:'op27',type:'T2',name:'Remplacement freinage complet AV + AR (MO)',price:85.00,parts:[
        {desc:'Disques de frein AV (x2)',price:0},
        {desc:'Jeu plaquettes de frein AV',price:0},
        {desc:'Disques de frein AR (x2)',price:0},
        {desc:'Jeu plaquettes de frein AR',price:0}
    ]},
    {id:'op28',type:'T2',name:'Purge circuit de freinage',price:25.00,parts:[
        {desc:'Liquide de frein DOT4 (1L)',price:0}
    ]},
    {id:'op29',type:'T2',name:'Remplacement flexible de frein',price:30.00,parts:[
        {desc:'Flexible de frein',price:0}
    ]},
    {id:'op30',type:'T2',name:'Remplacement étrier de frein',price:45.00,parts:[
        {desc:'Étrier de frein (reconditionné ou neuf)',price:0}
    ]},
    {id:'op31',type:'T2',name:'Remplacement amortisseurs AV (MO paire)',price:65.00,parts:[
        {desc:'Amortisseurs AV (x2)',price:0},
        {desc:'Coupelles d\'amortisseur AV (x2)',price:0},
        {desc:'Butées d\'amortisseur AV (x2)',price:0}
    ]},
    {id:'op32',type:'T2',name:'Remplacement amortisseurs AR (MO paire)',price:50.00,parts:[
        {desc:'Amortisseurs AR (x2)',price:0}
    ]},
    {id:'op33',type:'T2',name:'Remplacement kit de distribution (MO)',price:195.00,parts:[
        {desc:'Kit courroie de distribution (courroie + galets tendeurs + enrouleurs)',price:0}
    ]},
    {id:'op34',type:'T2',name:'Remplacement distribution + pompe à eau (MO)',price:220.00,parts:[
        {desc:'Kit courroie de distribution (courroie + galets tendeurs + enrouleurs)',price:0},
        {desc:'Pompe à eau',price:0},
        {desc:'Liquide de refroidissement (5L)',price:0}
    ]},
    {id:'op35',type:'T2',name:'Remplacement courroie accessoire (MO)',price:30.00,parts:[
        {desc:'Courroie d\'accessoire (alternateur/clim)',price:0},
        {desc:'Galet tendeur courroie accessoire',price:0}
    ]},
    {id:'op36',type:'T2',name:'Remplacement kit embrayage complet (MO)',price:250.00,parts:[
        {desc:'Kit embrayage (disque + mécanisme + butée)',price:0}
    ]},
    {id:'op37',type:'T2',name:'Remplacement embrayage + volant moteur bimasse (MO)',price:280.00,parts:[
        {desc:'Kit embrayage (disque + mécanisme + butée)',price:0},
        {desc:'Volant moteur bimasse',price:0}
    ]},
    {id:'op38',type:'T2',name:'Remplacement batterie (MO + pose)',price:15.00,parts:[
        {desc:'Batterie (Ah selon véhicule)',price:0}
    ]},
    {id:'op39',type:'T2',name:'Remplacement alternateur (MO)',price:65.00,parts:[
        {desc:'Alternateur (échange standard ou neuf)',price:0}
    ]},
    {id:'op40',type:'T2',name:'Remplacement démarreur (MO)',price:55.00,parts:[
        {desc:'Démarreur (échange standard ou neuf)',price:0}
    ]},
    {id:'op41',type:'T2',name:'Remplacement radiateur de refroidissement (MO)',price:65.00,parts:[
        {desc:'Radiateur de refroidissement',price:0},
        {desc:'Liquide de refroidissement (5L)',price:0}
    ]},
    {id:'op42',type:'T2',name:'Remplacement pompe à eau (MO)',price:65.00,parts:[
        {desc:'Pompe à eau',price:0},
        {desc:'Liquide de refroidissement (5L)',price:0},
        {desc:'Joint / vis pompe à eau',price:0}
    ]},
    {id:'op43',type:'T2',name:'Remplacement thermostat (MO)',price:30.00,parts:[
        {desc:'Thermostat + joint',price:0},
        {desc:'Liquide de refroidissement (2L)',price:0}
    ]},
    {id:'op44',type:'T2',name:'Remplacement rotules de direction (MO paire)',price:50.00,parts:[
        {desc:'Rotules de direction (x2)',price:0}
    ]},
    {id:'op45',type:'T2',name:'Remplacement biellettes barre stabilisatrice (MO paire)',price:30.00,parts:[
        {desc:'Biellettes de barre stabilisatrice (x2)',price:0}
    ]},
    {id:'op46',type:'T2',name:'Remplacement roulement de roue (MO unitaire)',price:50.00,parts:[
        {desc:'Roulement de roue',price:0}
    ]},
    {id:'op47',type:'T2',name:'Remplacement silentblocs triangle AV (MO paire)',price:65.00,parts:[
        {desc:'Silentblocs de triangle AV (x2)',price:0}
    ]},
    {id:'op48',type:'T2',name:'Remplacement triangle de suspension complet (MO)',price:50.00,parts:[
        {desc:'Triangle de suspension complet',price:0}
    ]},
    {id:'op49',type:'T2',name:'Remplacement cardan / transmission (MO)',price:65.00,parts:[
        {desc:'Cardan / transmission (échange standard ou neuf)',price:0}
    ]},
    {id:'op50',type:'T2',name:'Remplacement soufflet de cardan (MO)',price:40.00,parts:[
        {desc:'Soufflet de cardan + colliers + graisse',price:0}
    ]},
    {id:'op51',type:'T2',name:'Remplacement pot d\'échappement (MO)',price:45.00,parts:[
        {desc:'Pot d\'échappement (intermédiaire ou AR)',price:0},
        {desc:'Joints d\'échappement',price:0}
    ]},
    {id:'op52',type:'T2',name:'Remplacement catalyseur (MO)',price:65.00,parts:[
        {desc:'Catalyseur',price:0},
        {desc:'Joints d\'échappement',price:0}
    ]},
    {id:'op53',type:'T2',name:'Nettoyage FAP (additif + régénération forcée)',price:79.00,parts:[
        {desc:'Additif nettoyant FAP',price:0}
    ]},
    {id:'op54',type:'T2',name:'Remplacement FAP (MO)',price:130.00,parts:[
        {desc:'Filtre à particules (FAP)',price:0},
        {desc:'Joints d\'échappement',price:0}
    ]},
    {id:'op55',type:'T2',name:'Remplacement vanne EGR (MO)',price:65.00,parts:[
        {desc:'Vanne EGR',price:0},
        {desc:'Joint vanne EGR',price:0}
    ]},
    {id:'op56',type:'T2',name:'Remplacement turbo (MO)',price:195.00,parts:[
        {desc:'Turbocompresseur (échange standard)',price:0},
        {desc:'Kit joints turbo (huile + échappement)',price:0},
        {desc:'Durites d\'huile turbo',price:0}
    ]},
    {id:'op57',type:'T2',name:'Remplacement injecteur (MO unitaire)',price:50.00,parts:[
        {desc:'Injecteur',price:0},
        {desc:'Joint cuivre injecteur',price:0}
    ]},
    {id:'op58',type:'T2',name:'Géométrie / parallélisme train AV',price:49.00,parts:[]},
    {id:'op59',type:'T2',name:'Géométrie complète AV + AR',price:79.00,parts:[]},
    {id:'op60',type:'T2',name:'Vidange boîte de vitesses manuelle',price:35.00,parts:[
        {desc:'Huile de boîte manuelle (2L)',price:0}
    ]},
    {id:'op61',type:'T2',name:'Vidange boîte de vitesses automatique',price:65.00,parts:[
        {desc:'Huile ATF boîte automatique (6-8L)',price:0},
        {desc:'Filtre boîte automatique (si applicable)',price:0},
        {desc:'Joint de carter de boîte',price:0}
    ]},
    {id:'op62',type:'T2',name:'Remplacement câble / réglage frein à main',price:30.00,parts:[
        {desc:'Câble de frein à main',price:0}
    ]},
    {id:'op63',type:'T2',name:'Remplacement capteur ABS (MO)',price:30.00,parts:[
        {desc:'Capteur ABS',price:0}
    ]},
    {id:'op64',type:'T2',name:'Remplacement sonde lambda (MO)',price:30.00,parts:[
        {desc:'Sonde lambda',price:0}
    ]},
    // ======= T3 - DIAGNOSTIC / SPÉCIFIQUE =======
    {id:'op65',type:'T3',name:'Diagnostic électronique multimarque (valise)',price:39.00,parts:[]},
    {id:'op66',type:'T3',name:'Recherche de panne complexe (1h)',price:69.00,parts:[]},
    {id:'op67',type:'T3',name:'Recherche de panne complexe (2h)',price:129.00,parts:[]},
    {id:'op68',type:'T3',name:'Remise à zéro indicateur de maintenance',price:15.00,parts:[]},
    {id:'op69',type:'T3',name:'Recharge climatisation R134a + test étanchéité',price:30.00,parts:[
        {desc:'Gaz réfrigérant R134a',price:0},
        {desc:'Huile compresseur clim',price:0}
    ]},
    {id:'op70',type:'T3',name:'Recharge climatisation R1234yf + test étanchéité',price:35.00,parts:[
        {desc:'Gaz réfrigérant R1234yf',price:0},
        {desc:'Huile compresseur clim',price:0}
    ]},
    {id:'op71',type:'T3',name:'Contrôle pré-CT (pré-contrôle technique)',price:29.00,parts:[]},
    {id:'op72',type:'T3',name:'Programmation clé / télécommande',price:50.00,parts:[
        {desc:'Clé / télécommande vierge',price:0}
    ]},
    {id:'op73',type:'T3',name:'Remplacement pare-brise (MO pose)',price:65.00,parts:[
        {desc:'Pare-brise',price:0},
        {desc:'Joint / colle de pare-brise',price:0}
    ]},
    {id:'op74',type:'T3',name:'Décalaminage moteur (hydrogène)',price:79.00,parts:[]},
    {id:'op75',type:'T3',name:'Test et charge batterie',price:19.00,parts:[]},
    {id:'op76',type:'T3',name:'Effacement défauts / codes erreur calculateur',price:25.00,parts:[]},
    {id:'op77',type:'T3',name:'Mise à jour logiciel calculateur',price:69.00,parts:[]},
    {id:'op78',type:'T3',name:'Contrôle et réglage phares (xénon/LED)',price:35.00,parts:[]},
    {id:'op79',type:'T3',name:'Réparation impact pare-brise',price:49.00,parts:[]},
    {id:'op80',type:'T3',name:'Forfait main d\'œuvre T1 (1 heure)',price:50.00,parts:[]},
    {id:'op81',type:'T3',name:'Forfait main d\'œuvre T2 (1 heure)',price:65.00,parts:[]},
    {id:'op82',type:'T3',name:'Forfait main d\'œuvre T3 (1 heure)',price:85.00,parts:[]},

    // ======= T4 - ÉLECTRONIQUE / CAPTEURS / MODULES =======
    {id:'op83',type:'T4',name:'Remplacement capteur PMH (position vilebrequin)',price:30.00,parts:[
        {desc:'Capteur PMH',price:0}
    ]},
    {id:'op84',type:'T4',name:'Remplacement capteur arbre à cames',price:30.00,parts:[
        {desc:'Capteur arbre à cames',price:0}
    ]},
    {id:'op85',type:'T4',name:'Remplacement capteur température eau',price:20.00,parts:[
        {desc:'Capteur température eau',price:0}
    ]},
    {id:'op86',type:'T4',name:'Remplacement capteur température air admission',price:20.00,parts:[
        {desc:'Capteur température air admission',price:0}
    ]},
    {id:'op87',type:'T4',name:'Remplacement capteur pression collecteur (MAP)',price:25.00,parts:[
        {desc:'Capteur MAP',price:0}
    ]},
    {id:'op88',type:'T4',name:'Remplacement débitmètre air (MAF)',price:35.00,parts:[
        {desc:'Débitmètre air MAF',price:0}
    ]},
    {id:'op89',type:'T4',name:'Remplacement sonde lambda (amont)',price:30.00,parts:[
        {desc:'Sonde lambda amont',price:0}
    ]},
    {id:'op90',type:'T4',name:'Remplacement sonde lambda (aval)',price:30.00,parts:[
        {desc:'Sonde lambda aval',price:0}
    ]},
    {id:'op91',type:'T4',name:'Remplacement capteur pression rail (common rail)',price:35.00,parts:[
        {desc:'Capteur pression rail',price:0}
    ]},
    {id:'op92',type:'T4',name:'Remplacement capteur de recul / stationnement (unitaire)',price:20.00,parts:[
        {desc:'Capteur de recul',price:0}
    ]},
    {id:'op93',type:'T4',name:'Remplacement capteur de vitesse roue ABS (unitaire)',price:25.00,parts:[
        {desc:'Capteur ABS',price:0}
    ]},
    {id:'op94',type:'T4',name:'Remplacement capteur de pression pneu TPMS (unitaire)',price:15.00,parts:[
        {desc:'Capteur TPMS',price:0}
    ]},
    {id:'op95',type:'T4',name:'Remplacement capteur angle volant',price:35.00,parts:[
        {desc:'Capteur angle volant',price:0}
    ]},
    {id:'op96',type:'T4',name:'Remplacement capteur pédale accélérateur',price:30.00,parts:[
        {desc:'Capteur pédale accélérateur',price:0}
    ]},
    {id:'op97',type:'T4',name:'Remplacement capteur pédale de frein',price:20.00,parts:[
        {desc:'Contacteur pédale de frein',price:0}
    ]},
    {id:'op98',type:'T4',name:'Remplacement capteur pression huile',price:20.00,parts:[
        {desc:'Capteur pression huile',price:0}
    ]},
    {id:'op99',type:'T4',name:'Remplacement capteur niveau huile',price:20.00,parts:[
        {desc:'Capteur niveau huile',price:0}
    ]},
    {id:'op100',type:'T4',name:'Remplacement bobine d\'allumage (unitaire)',price:15.00,parts:[
        {desc:'Bobine allumage',price:0}
    ]},
    {id:'op101',type:'T4',name:'Remplacement jeu de 4 bobines d\'allumage',price:35.00,parts:[
        {desc:'Jeu 4 bobines allumage',price:0}
    ]},
    {id:'op102',type:'T4',name:'Remplacement module ABS / bloc hydraulique',price:95.00,parts:[
        {desc:'Bloc ABS / module hydraulique',price:0}
    ]},
    {id:'op103',type:'T4',name:'Remplacement calculateur moteur (ECU)',price:85.00,parts:[
        {desc:'Calculateur moteur ECU',price:0}
    ]},
    {id:'op104',type:'T4',name:'Remplacement calculateur boîte automatique (TCU)',price:85.00,parts:[
        {desc:'Calculateur boîte TCU',price:0}
    ]},
    {id:'op105',type:'T4',name:'Remplacement boîtier BSI / BCM (boîtier servitude intelligent)',price:75.00,parts:[
        {desc:'Boîtier BSI / BCM',price:0}
    ]},
    {id:'op106',type:'T4',name:'Remplacement module lève-vitre (MO)',price:30.00,parts:[
        {desc:'Module lève-vitre',price:0}
    ]},
    {id:'op107',type:'T4',name:'Remplacement moteur lève-vitre (MO)',price:35.00,parts:[
        {desc:'Moteur lève-vitre électrique',price:0}
    ]},
    {id:'op108',type:'T4',name:'Remplacement compresseur climatisation (MO)',price:95.00,parts:[
        {desc:'Compresseur climatisation',price:0}
    ]},
    {id:'op109',type:'T4',name:'Remplacement résistance ventilateur chauffage',price:25.00,parts:[
        {desc:'Résistance ventilateur habitacle',price:0}
    ]},
    {id:'op110',type:'T4',name:'Remplacement pulseur / ventilateur habitacle',price:45.00,parts:[
        {desc:'Pulseur ventilateur habitacle',price:0}
    ]},
    {id:'op111',type:'T4',name:'Remplacement moteur de centralisation porte (MO)',price:25.00,parts:[
        {desc:'Moteur centralisation',price:0}
    ]},
    {id:'op112',type:'T4',name:'Remplacement faisceau électrique porte (MO)',price:45.00,parts:[
        {desc:'Faisceau électrique porte',price:0}
    ]},
    {id:'op113',type:'T4',name:'Remplacement platine feux AR / porte-ampoule',price:20.00,parts:[
        {desc:'Platine feux AR',price:0}
    ]},
    {id:'op114',type:'T4',name:'Remplacement bloc phare complet AV (MO)',price:35.00,parts:[
        {desc:'Bloc optique phare AV',price:0}
    ]},
    {id:'op115',type:'T4',name:'Remplacement feu AR complet (MO)',price:25.00,parts:[
        {desc:'Bloc feu AR',price:0}
    ]},
    {id:'op116',type:'T4',name:'Remplacement ballast xénon (MO)',price:35.00,parts:[
        {desc:'Ballast xénon',price:0}
    ]},
    {id:'op117',type:'T4',name:'Remplacement pompe de direction assistée électrique',price:65.00,parts:[
        {desc:'Pompe direction assistée électrique',price:0}
    ]},
    {id:'op118',type:'T4',name:'Remplacement colonne de direction assistée électrique',price:85.00,parts:[
        {desc:'Colonne direction assistée EPS',price:0}
    ]},
    {id:'op119',type:'T4',name:'Remplacement moteur essuie-glace AV',price:30.00,parts:[
        {desc:'Moteur essuie-glace AV',price:0}
    ]},
    {id:'op120',type:'T4',name:'Remplacement moteur essuie-glace AR',price:25.00,parts:[
        {desc:'Moteur essuie-glace AR',price:0}
    ]},
    {id:'op121',type:'T4',name:'Remplacement pompe lave-glace',price:15.00,parts:[
        {desc:'Pompe lave-glace',price:0}
    ]},
    {id:'op122',type:'T4',name:'Remplacement klaxon / avertisseur',price:15.00,parts:[
        {desc:'Klaxon',price:0}
    ]},
    {id:'op123',type:'T4',name:'Remplacement commodo phares / clignotants',price:35.00,parts:[
        {desc:'Commodo phares/clignotants',price:0}
    ]},
    {id:'op124',type:'T4',name:'Remplacement commodo essuie-glaces',price:30.00,parts:[
        {desc:'Commodo essuie-glaces',price:0}
    ]},
    {id:'op125',type:'T4',name:'Remplacement contacteur Neiman / démarrage',price:40.00,parts:[
        {desc:'Contacteur Neiman',price:0}
    ]},
    {id:'op126',type:'T4',name:'Remplacement caméra de recul (MO + câblage)',price:35.00,parts:[
        {desc:'Caméra de recul',price:0}
    ]},
    {id:'op127',type:'T4',name:'Remplacement antenne GPS / radio',price:20.00,parts:[
        {desc:'Antenne GPS/radio',price:0}
    ]},
    {id:'op128',type:'T4',name:'Installation autoradio / système multimédia (MO)',price:45.00,parts:[
        {desc:'Autoradio / système multimédia',price:0}
    ]},
    {id:'op129',type:'T4',name:'Installation dashcam (MO + câblage)',price:35.00,parts:[
        {desc:'Dashcam',price:0}
    ]},
    {id:'op130',type:'T4',name:'Remplacement ventilateur refroidissement moteur',price:45.00,parts:[
        {desc:'Moto-ventilateur refroidissement',price:0}
    ]},
    {id:'op131',type:'T4',name:'Remplacement électrovanne turbo / N75',price:25.00,parts:[
        {desc:'Électrovanne turbo N75',price:0}
    ]},
    {id:'op132',type:'T4',name:'Remplacement électrovanne EGR',price:25.00,parts:[
        {desc:'Électrovanne EGR',price:0}
    ]},
    {id:'op133',type:'T4',name:'Remplacement actuateur volet admission (MO)',price:35.00,parts:[
        {desc:'Actuateur volet admission',price:0}
    ]},
    {id:'op134',type:'T4',name:'Remplacement papillon motorisé / boîtier papillon',price:45.00,parts:[
        {desc:'Boîtier papillon motorisé',price:0}
    ]},
    {id:'op135',type:'T4',name:'Remplacement régulateur de pression carburant',price:30.00,parts:[
        {desc:'Régulateur pression carburant',price:0}
    ]},
    {id:'op136',type:'T4',name:'Remplacement pompe à carburant (immergée)',price:55.00,parts:[
        {desc:'Pompe à carburant immergée',price:0}
    ]},
    {id:'op137',type:'T4',name:'Remplacement jauge à carburant / sonde de niveau',price:30.00,parts:[
        {desc:'Jauge / sonde niveau carburant',price:0}
    ]},

    // ======= T5 - REPROGRAMMATION MOTEUR =======
    {id:'op138',type:'T5',name:'Reprogrammation Stage 1 (optimisation série)',price:350.00,parts:[]},
    {id:'op139',type:'T5',name:'Reprogrammation Stage 1 + (série optimisée + pops & bangs)',price:450.00,parts:[]},
    {id:'op140',type:'T5',name:'Reprogrammation Stage 2 (avec modification hardware)',price:550.00,parts:[]},
    {id:'op141',type:'T5',name:'Reprogrammation E85 (conversion bioéthanol)',price:400.00,parts:[]},
    {id:'op142',type:'T5',name:'Reprogrammation E85 + Stage 1 combiné',price:550.00,parts:[]},
    {id:'op143',type:'T5',name:'Reprogrammation boîte automatique / DSG',price:300.00,parts:[]},
    {id:'op144',type:'T5',name:'Suppression vanne EGR (reprog uniquement)',price:250.00,parts:[]},
    {id:'op145',type:'T5',name:'Suppression FAP / DPF (reprog uniquement)',price:250.00,parts:[]},
    {id:'op146',type:'T5',name:'Suppression AdBlue / SCR (reprog uniquement)',price:300.00,parts:[]},
    {id:'op147',type:'T5',name:'Suppression swirl flaps / volets admission (reprog)',price:150.00,parts:[]},
    {id:'op148',type:'T5',name:'Désactivation Start & Stop',price:100.00,parts:[]},
    {id:'op149',type:'T5',name:'Activation fonctions cachées / codage VCDS / VCP',price:50.00,parts:[]},
    {id:'op150',type:'T5',name:'Ajout Pops & Bangs / Crackles map',price:150.00,parts:[]},
    {id:'op151',type:'T5',name:'Ajout Launch Control',price:150.00,parts:[]},
    {id:'op152',type:'T5',name:'Limitation / délimitation vitesse maxi',price:100.00,parts:[]},
    {id:'op153',type:'T5',name:'Reprogrammation retour stock / origine',price:150.00,parts:[]},
    {id:'op154',type:'T5',name:'Lecture / sauvegarde cartographie ECU (backup)',price:50.00,parts:[]},
    {id:'op155',type:'T5',name:'Diagnostic complet + passage banc de puissance',price:120.00,parts:[]},
    {id:'op156',type:'T5',name:'Passage banc de puissance seul (mesure avant/après)',price:79.00,parts:[]},
    {id:'op157',type:'T5',name:'Installation boîtier additionnel (piggyback)',price:80.00,parts:[
        {desc:'Boîtier additionnel',price:0}
    ]},
    {id:'op158',type:'T5',name:'Installation kit boîtier E85 (flex fuel)',price:65.00,parts:[
        {desc:'Boîtier E85 flex fuel',price:0}
    ]},
    {id:'op159',type:'T5',name:'Reprogrammation calculateur avec clonage IMMO',price:200.00,parts:[]},
    {id:'op160',type:'T5',name:'Reprogrammation anti-démarrage (matching clé/ECU)',price:150.00,parts:[]},
    {id:'op161',type:'T5',name:'Correction kilométrage compteur (remise conformité)',price:100.00,parts:[]},
    {id:'op162',type:'T5',name:'Réparation calculateur (soudure / composants)',price:180.00,parts:[]},
    {id:'op163',type:'T5',name:'Reprogrammation Stage 3 (turbo upgrade + intercooler)',price:750.00,parts:[]},

    // ======= T6 - PRÉPARATION MOTEUR =======
    {id:'op164',type:'T6',name:'Remplacement turbo par turbo upgraded (MO)',price:250.00,parts:[
        {desc:'Turbo upgraded / hybride',price:0}
    ]},
    {id:'op165',type:'T6',name:'Installation intercooler racing / surdimensionné (MO)',price:120.00,parts:[
        {desc:'Intercooler racing',price:0}
    ]},
    {id:'op166',type:'T6',name:'Installation kit admission directe / BMC / K&N',price:35.00,parts:[
        {desc:'Kit admission directe',price:0}
    ]},
    {id:'op167',type:'T6',name:'Installation boîte à air racing / airbox carbone',price:45.00,parts:[
        {desc:'Boîte à air racing',price:0}
    ]},
    {id:'op168',type:'T6',name:'Installation dump valve / blow off (MO)',price:35.00,parts:[
        {desc:'Dump valve / blow off',price:0}
    ]},
    {id:'op169',type:'T6',name:'Installation kit catch can / récupérateur d\'huile',price:30.00,parts:[
        {desc:'Kit catch can',price:0}
    ]},
    {id:'op170',type:'T6',name:'Remplacement injecteurs performance (jeu)',price:85.00,parts:[
        {desc:'Jeu injecteurs performance',price:0}
    ]},
    {id:'op171',type:'T6',name:'Installation pompe à essence haute pression (HPFP)',price:65.00,parts:[
        {desc:'Pompe essence haute pression',price:0}
    ]},
    {id:'op172',type:'T6',name:'Installation kit gros frein AV (MO)',price:180.00,parts:[
        {desc:'Kit gros frein AV (étriers + disques + plaquettes)',price:0}
    ]},
    {id:'op173',type:'T6',name:'Installation kit gros frein AR (MO)',price:150.00,parts:[
        {desc:'Kit gros frein AR (étriers + disques + plaquettes)',price:0}
    ]},
    {id:'op174',type:'T6',name:'Installation kit combinés filetés / coilovers (MO)',price:120.00,parts:[
        {desc:'Kit combinés filetés',price:0}
    ]},
    {id:'op175',type:'T6',name:'Installation kit ressorts courts (MO)',price:65.00,parts:[
        {desc:'Kit ressorts courts (-30/-50mm)',price:0}
    ]},
    {id:'op176',type:'T6',name:'Installation barre anti-rapprochement (MO)',price:30.00,parts:[
        {desc:'Barre anti-rapprochement',price:0}
    ]},
    {id:'op177',type:'T6',name:'Installation renforts châssis / tirants (MO)',price:45.00,parts:[
        {desc:'Renforts châssis / tirants',price:0}
    ]},
    {id:'op178',type:'T6',name:'Installation embrayage renforcé (MO)',price:280.00,parts:[
        {desc:'Kit embrayage renforcé',price:0}
    ]},
    {id:'op179',type:'T6',name:'Installation volant moteur allégé (MO)',price:250.00,parts:[
        {desc:'Volant moteur allégé',price:0}
    ]},
    {id:'op180',type:'T6',name:'Installation différentiel à glissement limité LSD (MO)',price:350.00,parts:[
        {desc:'Différentiel LSD',price:0}
    ]},
    {id:'op181',type:'T6',name:'Installation radiateur huile moteur (MO)',price:65.00,parts:[
        {desc:'Kit radiateur huile moteur',price:0}
    ]},
    {id:'op182',type:'T6',name:'Installation radiateur eau surdimensionné (MO)',price:65.00,parts:[
        {desc:'Radiateur eau racing',price:0}
    ]},
    {id:'op183',type:'T6',name:'Portage culasse (travail atelier)',price:450.00,parts:[]},
    {id:'op184',type:'T6',name:'Installation arbres à cames performance',price:250.00,parts:[
        {desc:'Arbres à cames performance',price:0}
    ]},
    {id:'op185',type:'T6',name:'Installation pistons forgés + bielles (réfection bas moteur)',price:850.00,parts:[
        {desc:'Kit pistons forgés + bielles',price:0}
    ]},
    {id:'op186',type:'T6',name:'Installation kit poulie crank (MO)',price:35.00,parts:[
        {desc:'Poulie allégée / surdimensionnée',price:0}
    ]},
    {id:'op187',type:'T6',name:'Équilibrage vilebrequin + volant moteur',price:250.00,parts:[]},
    {id:'op188',type:'T6',name:'Installation durites silicone renforcées (MO)',price:45.00,parts:[
        {desc:'Kit durites silicone',price:0}
    ]},
    {id:'op189',type:'T6',name:'Vidange + remplissage huile compétition',price:45.00,parts:[
        {desc:'Huile moteur compétition (5L)',price:0},
        {desc:'Filtre à huile',price:0}
    ]},
    {id:'op190',type:'T6',name:'Installation plaquettes de frein compétition (AV)',price:25.00,parts:[
        {desc:'Plaquettes compétition AV',price:0}
    ]},
    {id:'op191',type:'T6',name:'Installation durites de frein aviation (jeu 4)',price:35.00,parts:[
        {desc:'Durites de frein aviation (jeu 4)',price:0}
    ]},
    {id:'op192',type:'T6',name:'Purge frein liquide compétition',price:30.00,parts:[
        {desc:'Liquide de frein compétition DOT 5.1',price:0}
    ]},

    // ======= T7 - ÉCHAPPEMENT SUR MESURE =======
    {id:'op193',type:'T7',name:'Fabrication downpipe inox sur mesure (turbo)',price:250.00,parts:[
        {desc:'Tube inox + bride turbo + soudure',price:0}
    ]},
    {id:'op194',type:'T7',name:'Fabrication downpipe catted (avec catalyseur sport)',price:350.00,parts:[
        {desc:'Tube inox + catalyseur sport 200 cellules',price:0}
    ]},
    {id:'op195',type:'T7',name:'Fabrication ligne complète inox sur mesure (cat-back)',price:450.00,parts:[
        {desc:'Tubes inox + silencieux + embouts',price:0}
    ]},
    {id:'op196',type:'T7',name:'Fabrication ligne complète inox (turbo-back)',price:650.00,parts:[
        {desc:'Downpipe + intermédiaire + silencieux + embouts inox',price:0}
    ]},
    {id:'op197',type:'T7',name:'Remplacement silencieux arrière par silencieux sport',price:120.00,parts:[
        {desc:'Silencieux sport inox',price:0}
    ]},
    {id:'op198',type:'T7',name:'Remplacement silencieux intermédiaire inox',price:95.00,parts:[
        {desc:'Silencieux intermédiaire inox',price:0}
    ]},
    {id:'op199',type:'T7',name:'Suppression silencieux intermédiaire (tube droit)',price:80.00,parts:[
        {desc:'Tube droit inox remplacement silencieux',price:0}
    ]},
    {id:'op200',type:'T7',name:'Fabrication embouts d\'échappement sur mesure (paire)',price:65.00,parts:[
        {desc:'Embouts inox (paire)',price:0}
    ]},
    {id:'op201',type:'T7',name:'Installation catalyseur sport 200 cellules (MO)',price:85.00,parts:[
        {desc:'Catalyseur sport 200 cellules',price:0}
    ]},
    {id:'op202',type:'T7',name:'Installation catalyseur sport 100 cellules (MO)',price:85.00,parts:[
        {desc:'Catalyseur sport 100 cellules',price:0}
    ]},
    {id:'op203',type:'T7',name:'Soudure / réparation ligne échappement inox',price:55.00,parts:[]},
    {id:'op204',type:'T7',name:'Soudure / réparation collecteur échappement',price:75.00,parts:[]},
    {id:'op205',type:'T7',name:'Fabrication collecteur échappement inox sur mesure',price:550.00,parts:[
        {desc:'Collecteur inox sur mesure',price:0}
    ]},
    {id:'op206',type:'T7',name:'Remplacement collecteur par collecteur tubulaire sport',price:120.00,parts:[
        {desc:'Collecteur tubulaire sport',price:0}
    ]},
    {id:'op207',type:'T7',name:'Remplacement flexible échappement',price:35.00,parts:[
        {desc:'Flexible échappement inox',price:0}
    ]},
    {id:'op208',type:'T7',name:'Remplacement collier / bride échappement',price:15.00,parts:[
        {desc:'Collier / bride échappement',price:0}
    ]},
    {id:'op209',type:'T7',name:'Remplacement silent bloc échappement (jeu)',price:15.00,parts:[
        {desc:'Silent blocs échappement (jeu)',price:0}
    ]},
    {id:'op210',type:'T7',name:'Installation valve électronique échappement (MO + câblage)',price:85.00,parts:[
        {desc:'Valve échappement électronique + télécommande',price:0}
    ]},
    {id:'op211',type:'T7',name:'Cintrage tube inox sur mesure (au mètre)',price:45.00,parts:[
        {desc:'Tube inox (au mètre)',price:0}
    ]},
    {id:'op212',type:'T7',name:'Adaptation échappement double sortie (MO)',price:150.00,parts:[
        {desc:'Kit double sortie inox',price:0}
    ]},
    {id:'op213',type:'T7',name:'Polissage / rénovation embouts échappement',price:25.00,parts:[]},

    // ======= T8 - DÉPANNAGE =======
    // --- Remorquage / Transport ---
    {id:'op214',type:'T8',name:'Déplacement / intervention sur site (forfait 0-15 km)',price:50.00,parts:[]},
    {id:'op215',type:'T8',name:'Déplacement / intervention sur site (forfait 15-30 km)',price:80.00,parts:[]},
    {id:'op216',type:'T8',name:'Déplacement / intervention sur site (forfait 30-50 km)',price:120.00,parts:[]},
    {id:'op217',type:'T8',name:'Remorquage véhicule (0-15 km)',price:90.00,parts:[]},
    {id:'op218',type:'T8',name:'Remorquage véhicule (15-30 km)',price:140.00,parts:[]},
    {id:'op219',type:'T8',name:'Remorquage véhicule (30-50 km)',price:190.00,parts:[]},
    {id:'op220',type:'T8',name:'Remorquage véhicule (50-100 km)',price:280.00,parts:[]},
    {id:'op221',type:'T8',name:'Mise sur plateau / chargement véhicule (supplément)',price:40.00,parts:[]},
    {id:'op222',type:'T8',name:'Garde / stockage véhicule (par jour)',price:15.00,parts:[]},

    // --- Démarrage / Batterie ---
    {id:'op223',type:'T8',name:'Dépannage démarrage sur place (câbles / booster)',price:45.00,parts:[]},
    {id:'op224',type:'T8',name:'Remplacement batterie sur place (MO dépannage)',price:35.00,parts:[
        {desc:'Batterie',price:0}
    ]},
    {id:'op225',type:'T8',name:'Recharge batterie lente (atelier)',price:25.00,parts:[]},
    {id:'op226',type:'T8',name:'Test batterie + alternateur (diagnostic)',price:15.00,parts:[]},
    {id:'op227',type:'T8',name:'Remplacement fusible (diagnostic + remplacement)',price:20.00,parts:[
        {desc:'Fusible(s)',price:0}
    ]},
    {id:'op228',type:'T8',name:'Réparation câble / cosse batterie',price:25.00,parts:[
        {desc:'Cosse(s) batterie',price:0}
    ]},

    // --- Pneus / Roues ---
    {id:'op229',type:'T8',name:'Changement roue sur place (roue de secours)',price:35.00,parts:[]},
    {id:'op230',type:'T8',name:'Réparation pneu sur place (mèche)',price:25.00,parts:[
        {desc:'Kit mèche réparation',price:0}
    ]},
    {id:'op231',type:'T8',name:'Réparation pneu atelier (champignon intérieur)',price:30.00,parts:[
        {desc:'Champignon réparation pneu',price:0}
    ]},
    {id:'op232',type:'T8',name:'Gonflage pneu(s) + vérification pression',price:5.00,parts:[]},
    {id:'op233',type:'T8',name:'Déblocage écrou de roue antivol',price:25.00,parts:[]},
    {id:'op234',type:'T8',name:'Déblocage roue grippée / oxydée',price:20.00,parts:[]},

    // --- Serrurerie / Ouverture ---
    {id:'op235',type:'T8',name:'Ouverture véhicule fermé (clé oubliée intérieur)',price:65.00,parts:[]},
    {id:'op236',type:'T8',name:'Ouverture coffre bloqué',price:45.00,parts:[]},
    {id:'op237',type:'T8',name:'Ouverture capot câble cassé',price:35.00,parts:[
        {desc:'Câble capot',price:0}
    ]},
    {id:'op238',type:'T8',name:'Remplacement barillet de porte (MO)',price:40.00,parts:[
        {desc:'Barillet de porte',price:0}
    ]},
    {id:'op239',type:'T8',name:'Remplacement barillet Neiman (MO)',price:45.00,parts:[
        {desc:'Barillet Neiman',price:0}
    ]},
    {id:'op240',type:'T8',name:'Programmation / duplication clé / télécommande',price:80.00,parts:[
        {desc:'Clé / télécommande vierge',price:0}
    ]},
    {id:'op241',type:'T8',name:'Programmation transpondeur clé (IMMO)',price:60.00,parts:[]},
    {id:'op242',type:'T8',name:'Remplacement pile clé / télécommande',price:10.00,parts:[
        {desc:'Pile clé',price:0}
    ]},

    // --- Carburant ---
    {id:'op243',type:'T8',name:'Erreur carburant : vidange réservoir + purge circuit',price:180.00,parts:[]},
    {id:'op244',type:'T8',name:'Apport carburant sur place (panne sèche)',price:45.00,parts:[
        {desc:'Carburant (5L)',price:0}
    ]},
    {id:'op245',type:'T8',name:'Purge circuit carburant diesel (prise d\'air)',price:45.00,parts:[]},
    {id:'op246',type:'T8',name:'Remplacement tuyau / durite carburant percé(e)',price:35.00,parts:[
        {desc:'Durite / tuyau carburant',price:0}
    ]},

    // --- Refroidissement ---
    {id:'op247',type:'T8',name:'Dépannage surchauffe moteur sur place (diagnostic)',price:45.00,parts:[]},
    {id:'op248',type:'T8',name:'Remplacement durite de refroidissement percée (dépannage)',price:35.00,parts:[
        {desc:'Durite refroidissement',price:0}
    ]},
    {id:'op249',type:'T8',name:'Appoint liquide de refroidissement sur place',price:20.00,parts:[
        {desc:'Liquide de refroidissement (1L)',price:0}
    ]},
    {id:'op250',type:'T8',name:'Remplacement thermostat (dépannage)',price:40.00,parts:[
        {desc:'Thermostat',price:0}
    ]},

    // --- Courroie / Chaîne ---
    {id:'op251',type:'T8',name:'Dépannage courroie accessoire cassée (sur place)',price:55.00,parts:[
        {desc:'Courroie accessoire',price:0}
    ]},
    {id:'op252',type:'T8',name:'Dépannage courroie accessoire + galet tendeur',price:70.00,parts:[
        {desc:'Courroie accessoire + galet',price:0}
    ]},

    // --- Embrayage / Transmission ---
    {id:'op253',type:'T8',name:'Dépannage câble embrayage cassé (sur place)',price:40.00,parts:[
        {desc:'Câble embrayage',price:0}
    ]},
    {id:'op254',type:'T8',name:'Purge circuit embrayage hydraulique (dépannage)',price:30.00,parts:[
        {desc:'Liquide de frein DOT4',price:0}
    ]},
    {id:'op255',type:'T8',name:'Remplacement cardan / soufflet déchiré (dépannage)',price:65.00,parts:[
        {desc:'Soufflet cardan',price:0}
    ]},

    // --- Éclairage ---
    {id:'op256',type:'T8',name:'Remplacement ampoule phare AV (sur place)',price:15.00,parts:[
        {desc:'Ampoule phare H1/H4/H7',price:0}
    ]},
    {id:'op257',type:'T8',name:'Remplacement ampoule feu AR / stop / clignotant',price:10.00,parts:[
        {desc:'Ampoule feu AR',price:0}
    ]},
    {id:'op258',type:'T8',name:'Réparation feux de détresse / warning',price:20.00,parts:[]},
    {id:'op259',type:'T8',name:'Réparation / remplacement fiche / prise remorque',price:25.00,parts:[
        {desc:'Prise remorque 7/13 broches',price:0}
    ]},

    // --- Freins ---
    {id:'op260',type:'T8',name:'Dépannage frein à main bloqué',price:35.00,parts:[]},
    {id:'op261',type:'T8',name:'Déblocage étrier de frein grippé (sur place)',price:40.00,parts:[]},
    {id:'op262',type:'T8',name:'Remplacement flexible de frein percé (dépannage)',price:35.00,parts:[
        {desc:'Flexible de frein',price:0}
    ]},
    {id:'op263',type:'T8',name:'Purge circuit de frein (dépannage)',price:30.00,parts:[
        {desc:'Liquide de frein DOT4',price:0}
    ]},

    // --- Démarrage / Moteur ---
    {id:'op264',type:'T8',name:'Dépannage démarreur HS (percussion / démarrage poussé)',price:30.00,parts:[]},
    {id:'op265',type:'T8',name:'Remplacement démarreur sur place (si accessible)',price:65.00,parts:[
        {desc:'Démarreur',price:0}
    ]},
    {id:'op266',type:'T8',name:'Remplacement alternateur sur place (si accessible)',price:65.00,parts:[
        {desc:'Alternateur',price:0}
    ]},
    {id:'op267',type:'T8',name:'Dépannage électrique rapide (diagnostic + réparation)',price:50.00,parts:[]},
    {id:'op268',type:'T8',name:'Réparation / remplacement relais (diagnostic inclus)',price:25.00,parts:[
        {desc:'Relais',price:0}
    ]},
    {id:'op269',type:'T8',name:'Recherche panne électrique complexe (au temps passé / h)',price:55.00,parts:[]},

    // --- Divers dépannage ---
    {id:'op270',type:'T8',name:'Remplacement essuie-glace(s) sur place',price:10.00,parts:[
        {desc:'Balai(s) essuie-glace',price:0}
    ]},
    {id:'op271',type:'T8',name:'Réparation pare-brise impact (résine)',price:45.00,parts:[
        {desc:'Kit résine réparation',price:0}
    ]},
    {id:'op272',type:'T8',name:'Désembourbement / sortie de fossé (treuillage)',price:80.00,parts:[]},
    {id:'op273',type:'T8',name:'Dépannage véhicule accidenté (mise en sécurité)',price:60.00,parts:[]},
    {id:'op274',type:'T8',name:'Forfait main d\'œuvre dépannage (heure)',price:55.00,parts:[]},
    {id:'op275',type:'T8',name:'Forfait main d\'œuvre dépannage nuit / week-end (heure)',price:80.00,parts:[]},
    {id:'op276',type:'T8',name:'Forfait main d\'œuvre dépannage jour férié (heure)',price:95.00,parts:[]},
    {id:'op277',type:'T8',name:'Supplément intervention urgente (< 1h)',price:30.00,parts:[]},
    {id:'op278',type:'T8',name:'Constat véhicule / état des lieux (contrôle visuel complet)',price:25.00,parts:[]},
    {id:'op279',type:'T8',name:'Prêt véhicule de courtoisie (par jour)',price:25.00,parts:[]}
];

