'use strict'

/*
|--------------------------------------------------------------------------
| ProvinciaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Ciudad = use("App/Models/Ciudad")
const data = [
    {
      "cp": 33317,
      "nombre": "Abadia, La",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Aballe",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Abamia",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "AbanceÑa",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Abandames",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Abango",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Abaniella",
      "provinciaid": 33
    },
    {
      "cp": 33994,
      "nombre": "Abantro",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Abarrio",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Abayu",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "Abedul (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Abedul (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Abedul (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Abedul (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33347,
      "nombre": "Abeo",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Abeu (fuentes-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Abeu De Arriba (carda-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Abiegos",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Ablaneda (corbera)",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Ablaneda (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Ablaneda (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Ablanedo (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Ablanedo (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Ablanedo (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Ablanedo (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Ablanedo (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Ablanedo (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Ablano (lena)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Ablanosa",
      "provinciaid": 33
    },
    {
      "cp": 33650,
      "nombre": "AblaÑa",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Ables",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Abonion",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "AboÑo",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Abraido",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Abranedo",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Abres",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "AbruÑeiros",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Abuli",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "Acebal (pola De Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Acebal, La (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Acebal, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Acebal, La (espina)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Acebal, La (lieres)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Acebedo (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Acebedo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Acebedo (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Acebo (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Acebo (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Acebo (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Acebreiral",
      "provinciaid": 33
    },
    {
      "cp": 33710,
      "nombre": "AceÑas",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Aces De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Acevedin",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Acevedo (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Acevedo (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Acevedo (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Aciana",
      "provinciaid": 33
    },
    {
      "cp": 33118,
      "nombre": "Aciera",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Acio",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Admiracion De Iglesia",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Adrado",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Adrales",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Agelan",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Agones",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Agoveda",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Agradiellos",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Aguadina",
      "provinciaid": 33
    },
    {
      "cp": 33600,
      "nombre": "Aguain",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Agualestro",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Aguamaroza",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Aguanes",
      "provinciaid": 33
    },
    {
      "cp": 33842,
      "nombre": "Aguasmestas",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Aguda",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Aguelle",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Aguera",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "Aguera (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Aguera (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Aguera (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Aguera (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33425,
      "nombre": "Aguera (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Aguera De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Aguera De Carriles",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Aguera De CastaÑedo",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Aguera De Coto",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Aguera De La Barca",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Aguera De Salcedo",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Aguera, Las (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33118,
      "nombre": "Agueras De Quiros",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Agueria (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "Aguerina",
      "provinciaid": 33
    },
    {
      "cp": 33993,
      "nombre": "Agues",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Aguilar",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Aguilero",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Aguillon (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Aguillon (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Aguino",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Airela",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Ajuyan",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Alameda, La",
      "provinciaid": 33
    },
    {
      "cp": 33846,
      "nombre": "Alava",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Alba, El",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Albandi",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Albar",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Albarde",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Albares (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33157,
      "nombre": "Albuerne",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Alcedo (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Alcedo (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Alcedo (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Alcedo De Caballeros",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Alcubiella",
      "provinciaid": 33
    },
    {
      "cp": 33992,
      "nombre": "Aldea (pola De Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Aldea, La (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Aldeanova",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Aldin",
      "provinciaid": 33
    },
    {
      "cp": 33345,
      "nombre": "Alea",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Alegria, La",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Alesga",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Alevia",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Alfaraz",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Alfilorio De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Alfilorio De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Alfilorio Del Medio",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Alfonsares",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Algara",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Alguerdo",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Alienes",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Allence (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Allence (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33508,
      "nombre": "Allende (vibaÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33578,
      "nombre": "Alles",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Almallos",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "AlmoÑo",
      "provinciaid": 33
    },
    {
      "cp": 33700,
      "nombre": "AlmuÑa",
      "provinciaid": 33
    },
    {
      "cp": 33843,
      "nombre": "Almurfe",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Alperi",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Altamira (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Alto De La Iglesia",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Alto Santo Arbas",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Alvare (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Alvare (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Alvare (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Alvares (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Amago",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Amandi",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Ambas (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Ambas (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Ambas (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Ambiedes, Pueblo",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Ambingue",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Ambres",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Amieiros",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Amieva",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Anayo",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Andallon",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Andarujo",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Andeo",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Anderve",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Andes",
      "provinciaid": 33
    },
    {
      "cp": 33756,
      "nombre": "Andina, La",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Andines",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Andorcio",
      "provinciaid": 33
    },
    {
      "cp": 33596,
      "nombre": "Andrin",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Anduerga",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Anes (san Martin)",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Anguilero",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Ania",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Anieves",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Anleo",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Ansaras",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Ansilan",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Antigua (san Tirso De Abres)",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "AntoÑana",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Antrago",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Antrialgo",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Antromero",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "AntuÑa",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Anzas",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Anzo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33993,
      "nombre": "Anzo (sobrescobio)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "AÑides",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Aparadas",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Aprocedorio",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Ara, La",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Arabuya (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Aragustin",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Aramanti",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Aramar",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Aramil",
      "provinciaid": 33
    },
    {
      "cp": 33756,
      "nombre": "Arancedo",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Arances",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Arandojo",
      "provinciaid": 33
    },
    {
      "cp": 33554,
      "nombre": "Arangas",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Arango",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Araniego",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Arayon",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Arbas (san Julian)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Arbas (san Pedro)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Arbazal",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Arbejil",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Arbellales (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Arbellia",
      "provinciaid": 33
    },
    {
      "cp": 33980,
      "nombre": "Arbeya, La",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Arbeyales (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Arbin",
      "provinciaid": 33
    },
    {
      "cp": 33757,
      "nombre": "Arboces",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Arbodas",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Arbolente",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Arboleya",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Arbon",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Arborio",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Arcallana",
      "provinciaid": 33
    },
    {
      "cp": 33300,
      "nombre": "Arcenoyo",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Arcillero",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Arco (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Ardaliz",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Ardesaldo",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "Ardines",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Ardisana",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Areces",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Arellanes",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Arena, La",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "Arena, La (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Arena, La (carredo)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Arenales",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Arenas (carbayin-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Arenas (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Arenas (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Arenas De Beloncio",
      "provinciaid": 33
    },
    {
      "cp": 33554,
      "nombre": "Arenas De Cabrales",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Arenas De Parres",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Arenas, Las (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Areneira",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "AreÑes (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "AreÑes (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "AreÑes, Les (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Argallada",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Argalladas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33163,
      "nombre": "Argame",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Argamoso",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Argancinas (pola Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Argancinas (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Argandenes",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Arganza",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Arganzua",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "ArgaÑosa",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "ArgaÑoso",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Argaton",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Argaxo",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Argayadas",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Argolellas",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Argolibio",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Argollanes",
      "provinciaid": 33
    },
    {
      "cp": 33188,
      "nombre": "Arguelles",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Arguero",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Arguiol",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Argul",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Argumal",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Argumosin",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Argumoso",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Aristebano",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Arlos",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Armada",
      "provinciaid": 33
    },
    {
      "cp": 33725,
      "nombre": "Armal",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "ArmaÑo",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Armayan",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Armayor",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Armeirin",
      "provinciaid": 33
    },
    {
      "cp": 33886,
      "nombre": "Armenande",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Armental",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Armilda",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Arnao",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "Arne, El",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Arniella",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Arniello",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "Arnin",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Arnizo (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Arnizo (otur)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Arnizo (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33627,
      "nombre": "Arnon",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "Arobes",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Aroles",
      "provinciaid": 33
    },
    {
      "cp": 33154,
      "nombre": "Aronces",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Arpandi",
      "provinciaid": 33
    },
    {
      "cp": 33140,
      "nombre": "Arquera, La (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Arquera, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Arquiella",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Arquillina",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Arrabal",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Arredondas",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Arregaida",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33540,
      "nombre": "Arriondas",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Arriondo",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Arriondo (figaredo)",
      "provinciaid": 33
    },
    {
      "cp": 33600,
      "nombre": "Arriondo (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Arriondo (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Arroes (sta Marina)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Arrojas",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Arrojina",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Arrojo (naveces-castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Arrojo (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Arrojo (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Arrojo (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Arroyo (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33428,
      "nombre": "Arroyo (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Arroyo (serin)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Arroyo (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "ArruÑada (san Martin De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "ArruÑada (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Artedo",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Artedosa",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Arteos",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Artos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Artosa (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Artosa (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Artosa (otur)",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Artosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Artoso, El",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Artoxu, El",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Arzolar, El",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Ascuita",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Asiego",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Asniella",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Aspra, El",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Astas",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Atalaya (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33154,
      "nombre": "Atalaya, La",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Atalaya, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Atilan",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Atras (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Atrollo, El",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Augueira",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Avelleras, Las",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Aveno",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Aviles (ver Callejero De Aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Avin",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "AviÑo",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "AviÑola, La",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Ayones (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Ayones (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Ayones (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Azoreiras",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Azorera",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Baboreira",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Bada",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Baeres",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "BahiÑas",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "BaiÑa",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Bajada, La",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Balbin",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Balbona (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Balbona (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Baldedo (pola Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Baldedo (san Martin De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Baldornon",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Balduera",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Ballongo",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Ballota (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33158,
      "nombre": "Ballota (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Balmeon",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Balmonte",
      "provinciaid": 33
    },
    {
      "cp": 33595,
      "nombre": "Balmori",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Balsera",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Baltasara",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Bances",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Banda, La",
      "provinciaid": 33
    },
    {
      "cp": 33344,
      "nombre": "Bandalisque",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Bandin",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Bandujo",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Bango",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "BaÑugues",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Bao (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Bao (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33793,
      "nombre": "Bao Y Barayo",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Baones",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Baos",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Baradal",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "BaragaÑa (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "BaragaÑa (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "BaragaÑas",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Barandon",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Baraosa",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Barbales",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Barbecho",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Barca (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Barca, La (logrezana-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Barca, La (piedeloro-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33700,
      "nombre": "Barcellina",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Barcena (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Barcena (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Barcena (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Barcena (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Barcena (villamayor)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Barcena (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33846,
      "nombre": "Barcena De Alava",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Barcena Del Monasterio",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Barcia (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Barcia (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Bardasquera",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Bardiel",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Bargaedo",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Bargana",
      "provinciaid": 33
    },
    {
      "cp": 33757,
      "nombre": "Barganaz (la Caridad)",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "Barganiza",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Barnedo",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Barquera, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Barquera, La (las Segadas)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Barqueros",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Barraca (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Barraca (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Barraca (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Barraca, La (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Barraca, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Barraca, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Barraca, La (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Barraca, La (pola Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Barracas",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Barranca De Paramios",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Barras",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Barrea",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Barredo (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Barredo (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Barredo (gozon), Pueblo",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Barredo (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33345,
      "nombre": "Barredo (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Barredo (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Barredo (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Barredo (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "Barredo (vega De Anzo)",
      "provinciaid": 33
    },
    {
      "cp": 33970,
      "nombre": "Barredos (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Barredos (ujo)",
      "provinciaid": 33
    },
    {
      "cp": 33196,
      "nombre": "Barredos, Los (manjoya-oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Barreira (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Barreiras (balmonte-castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Barreiras (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Barreiras (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Barreiro (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Barreiros, Los (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "Barrera, La (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Barrera, La (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Barrera, La (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Barreres (albandi_carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Barreres (pervera-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Barreros (limanes)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Barreros, Los (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Barres",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Barrial (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Barrial (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Barrial (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Barriero, El",
      "provinciaid": 33
    },
    {
      "cp": 33990,
      "nombre": "Barrio (caso)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Barrio De Pachon",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Barrio Gonzalin",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Barrio Nuevo De La Estacion (ujo)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Barrio Solano",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Barrio, El (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Barrio, El (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Barrioazul",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Barrionuevo",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Barripies",
      "provinciaid": 33
    },
    {
      "cp": 33595,
      "nombre": "Barro (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33930,
      "nombre": "Barros",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Barrosa, La (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Barrosa, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Barrosa, La (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Barrosa, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Barrosas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "Barrudo",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Barzana (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Barzana (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Barzana (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Barzana De Quiros",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Barzanallana",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Barzanas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Barzanicas",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Barzaniellas",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Bascones",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Baselgas",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Basoredo",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Bastian (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Batan",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "Batiao",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Baton",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Batriban",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Baua",
      "provinciaid": 33
    },
    {
      "cp": 33425,
      "nombre": "Bauro",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Bayas",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Bayo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Bayo, El (pola Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Bayones",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Bebares",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "BeceÑa",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Becerrales",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Becharro",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Bedavo",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "BedriÑana",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Bedures",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Begega",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Beiciella",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Beifar",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Belandres (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Belandres(grado)",
      "provinciaid": 33
    },
    {
      "cp": 33327,
      "nombre": "Beldredo",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Belen",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "BeleÑo",
      "provinciaid": 33
    },
    {
      "cp": 33996,
      "nombre": "Belerda",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Belga (celles-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33188,
      "nombre": "Belga Baja, La",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Belga, La (bobes-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Belga, La (viella-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33845,
      "nombre": "Bello (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Bello (cabaÑaquinta-aller)",
      "provinciaid": 33
    },
    {
      "cp": 33830,
      "nombre": "Belmonte",
      "provinciaid": 33
    },
    {
      "cp": 33591,
      "nombre": "Belmonte De Pria",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Beloncio",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Belonga",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Belonga (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "BeloÑo",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Belovio",
      "provinciaid": 33
    },
    {
      "cp": 33937,
      "nombre": "Bendicion",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Bendon",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Bendones",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "BendueÑos",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Benia",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Berbeguera",
      "provinciaid": 33
    },
    {
      "cp": 33346,
      "nombre": "Berbes",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Berbesa",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Bercio",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Berducedo",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Berdules",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Bergame",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "BerguÑo",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Bermeya, La",
      "provinciaid": 33
    },
    {
      "cp": 33118,
      "nombre": "Bermiego",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Bernadal",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Bernueces",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Berodia",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Beronda",
      "provinciaid": 33
    },
    {
      "cp": 33186,
      "nombre": "Berron, El",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Berros",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "BerrueÑo",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Berruga (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Berruga (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Berruga, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Berrugas",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Berrugoso",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "Bervola",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Berzana",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Besapie",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Besedo",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Besullo",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Beveraso",
      "provinciaid": 33
    },
    {
      "cp": 33996,
      "nombre": "Bezanes",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Biedes (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Biedes (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Bierces",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Biescas (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Biescas (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Bimeda",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Bimera, La",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Biomba",
      "provinciaid": 33
    },
    {
      "cp": 33960,
      "nombre": "Blimea",
      "provinciaid": 33
    },
    {
      "cp": 33720,
      "nombre": "Boal",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Bobes",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Bobia De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Bobia De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Bobia, La (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Bobia, La (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Bobia, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Bobia, La (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Bocadecangas",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Bocines",
      "provinciaid": 33
    },
    {
      "cp": 33549,
      "nombre": "Bode",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Bodenaya",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Bodes",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Bohiles",
      "provinciaid": 33
    },
    {
      "cp": 33756,
      "nombre": "Boimouro",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Boinas",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Boiro",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Bojes",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Bojo",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Bolgues",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Bolias",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Bollina, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Bombeao",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Bondeyo",
      "provinciaid": 33
    },
    {
      "cp": 33347,
      "nombre": "Bones",
      "provinciaid": 33
    },
    {
      "cp": 33426,
      "nombre": "Bonielles",
      "provinciaid": 33
    },
    {
      "cp": 33675,
      "nombre": "Boo",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Boquerizo",
      "provinciaid": 33
    },
    {
      "cp": 33820,
      "nombre": "Borbolla, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Borbolla, La (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Bordinga, La",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Borducedo",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Bores",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Borias, Las (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Borias, Las (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Borines",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Bornadina",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Bornazal",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Boronas",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Borondes",
      "provinciaid": 33
    },
    {
      "cp": 33992,
      "nombre": "BoroÑes",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Borra, La",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Borracan",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Borreras",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Borres",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Bospolin",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Bosque, El",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Boudois",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Bouga, La",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Bourio",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "BousoÑo",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Bouza (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Boyalvendi",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "Boza (pola Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Boza, La (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Bozanes",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Braniella",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "BraÑa (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "BraÑa (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "BraÑa (tudela Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "BraÑa De Arriba (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "BraÑa De Ordial, La (jarceley-narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "BraÑa De San Cristobal, La (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "BraÑa Del Rio (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "BraÑa Del Rio (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "BraÑa, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "BraÑa, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33757,
      "nombre": "BraÑa, La (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "BraÑa, La (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "BraÑa, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "BraÑa, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "BraÑa, La (noreÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33870,
      "nombre": "BraÑa, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "BraÑadesella",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "BraÑaivente",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "BraÑalamosa",
      "provinciaid": 33
    },
    {
      "cp": 33729,
      "nombre": "BraÑalibel",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "BraÑalonga",
      "provinciaid": 33
    },
    {
      "cp": 33756,
      "nombre": "BraÑamayor (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "BraÑameana (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "BraÑamena (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "BraÑanobeles",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "BraÑanocedo",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "BraÑarronda",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "BraÑas De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "BraÑas De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "BraÑas, Las (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "BraÑaseca",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "BraÑasivil",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "BraÑatuille",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "BraÑavara",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "BraÑavella",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "BraÑaverniza",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "BraÑavieja (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "BraÑavieja (pesoz)",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "BraÑela (grandas Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "BraÑes (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "BraÑillin (pajares)",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "BraÑota",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "BraÑuas",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "BraÑuca, La",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "BraÑuca, La (traspando-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "BraÑuela, La (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "BraÑueta (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "BraÑueta (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "BraÑueto, El",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Bravo, El",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Bravuco, El",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "BreceÑa",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Bres",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Breton, El (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Brez",
      "provinciaid": 33
    },
    {
      "cp": 33594,
      "nombre": "Bricia",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Brieves",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Brizosa",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Brualla",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Bruelles",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Bruiteira",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Brul",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Bubia, La",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Buciello",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Buda",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Bueira",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Buelles",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Buelles (p. Baja)",
      "provinciaid": 33
    },
    {
      "cp": 33598,
      "nombre": "Buelna",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Buenavista (el Berron)",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Buenavista (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33870,
      "nombre": "Buenavista (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "BueÑo (ribera De Arriba)",
      "provinciaid": 33
    },
    {
      "cp": 33990,
      "nombre": "Bueres (caso)",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Bujandi",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Bullacente",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Bullaso",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Bullimeiro",
      "provinciaid": 33
    },
    {
      "cp": 33554,
      "nombre": "Bulnes",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "Bulse",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Burganeo",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Burgazal",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Buria",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Buruyosa",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Busante",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Busantianes",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Buscabrero",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Busdemouros",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Buseco (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Buseco (santo Adriano)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Buseiro",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Busfrio",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Busindre",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "BusiÑan",
      "provinciaid": 33
    },
    {
      "cp": 33885,
      "nombre": "Buslabin",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Buslad",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Buslleria",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Busllon",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "BusloÑe",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Busmargali",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Busmartin",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Busmarzo",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Busmayor (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Busmayor (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Busmente",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Busmeon",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Busmourisco",
      "provinciaid": 33
    },
    {
      "cp": 33796,
      "nombre": "Busnovo",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Buso",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Buspaulin",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Buspol (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Buspol (la Espina)",
      "provinciaid": 33
    },
    {
      "cp": 33995,
      "nombre": "Buspriz",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Busqueimado",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Busta, La",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Bustabernego",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Bustantigo",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Bustapena",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Bustarel",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Bustariega",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Bustel",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Bustelfollado",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Bustelin",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Bustellan",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Bustellin",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Bustellon",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Bustelo (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Bustelo (illano)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Bustelo (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Bustelo Del Camino",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Bustiello (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Bustiello (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Bustiello (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Bustiello (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Bustiello (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33112,
      "nombre": "Bustiello (proaza)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Bustiello (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Bustiello De Cabuerna",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Bustiello De Paredes",
      "provinciaid": 33
    },
    {
      "cp": 33675,
      "nombre": "Bustille",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Bustio",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Bustio (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Bustios",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Busto (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33789,
      "nombre": "Busto (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Busto (san Antolin De Ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Busto, El (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Bustoburniego",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Bustoto",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Bustovela",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Busvidal",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Buyeres",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Caba, La",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Cabada, La (logrezana-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Cabaleiros (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Caballeros (bendicion-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33937,
      "nombre": "Caballeros (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Cabana (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Cabana, La (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Cabanada",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Cabanal, El",
      "provinciaid": 33
    },
    {
      "cp": 33726,
      "nombre": "Cabanas Trabazas",
      "provinciaid": 33
    },
    {
      "cp": 33725,
      "nombre": "Cabanas, Las (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Cabanela (pesoz)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Cabanella",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Cabaniellas",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Cabanielles",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Cabanin, El",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Cabanin, El (la PeÑa-mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Cabanin, El (santa Rosa-mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "CabaniÑas (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Cabanon",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "CabaÑa (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "CabaÑa Derecha",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "CabaÑa Isidora",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "CabaÑa, La, Zona",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "CabaÑa, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "CabaÑa, La (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "CabaÑa, La (cocaÑin) (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "CabaÑa, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "CabaÑa, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "CabaÑa, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "CabaÑa, La (lieres-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "CabaÑa, La (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "CabaÑa, La (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "CabaÑa, La (riaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "CabaÑa, La (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "CabaÑa, La (traspando-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "CabaÑa, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "CabaÑa, La (vega De Poja-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "CabaÑaquinta",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "CabaÑas (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "CabaÑas (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "CabaÑas (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "CabaÑas (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "CabaÑas (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "CabaÑas Loredo",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "CabaÑas Nuevas",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "CabaÑas, Las (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "CabaÑas, Las (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "CabaÑin (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "CabaÑin, El (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "CabaÑina (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "CabaÑina, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "CabaÑon",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "CabaÑona, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "CabaÑona, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "CabaÑona, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "CabaÑos",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Cabaza",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Cabezada, La",
      "provinciaid": 33
    },
    {
      "cp": 33692,
      "nombre": "Cabezon",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Cabian, La",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Cabianca, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Cabiella, La",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Cabielles",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Cabo",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Cabo (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Cabo De Villa (candas)",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Cabo PeÑas",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Cabo, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Cabo, El (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Cabojal",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Caborana",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Caborcos",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "Caborna, La",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Cabornia, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Cabornia, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Cabornin",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Cabornio (la Venta-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33196,
      "nombre": "Cabornio (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Cabornio (t.veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Caborno",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Caborno (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Caborno (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Caborno, El (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Cabos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Cabovilla",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Cabrafrio",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Cabral",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Cabrera",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Cabritera",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "CabruÑana",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "CabueÑes",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Cabuerna",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Cabuernia",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Cabuernos",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Cabuezo",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Cacabellos",
      "provinciaid": 33
    },
    {
      "cp": 33174,
      "nombre": "Caces",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "Cachafol",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Cachorrero",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Cadabal (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Cadagayoso",
      "provinciaid": 33
    },
    {
      "cp": 33428,
      "nombre": "Cadage",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Cadaleito",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Cadamancio",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Cadanes",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Cadapereda",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Cadarienzo",
      "provinciaid": 33
    },
    {
      "cp": 33788,
      "nombre": "Cadavedo",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Cadavio",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Cadenaba",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Cadenado",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Cadollo",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Cadorna, La",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Cadrijuela",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Caes",
      "provinciaid": 33
    },
    {
      "cp": 33196,
      "nombre": "Cagigal",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Caicorrida",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Cajide",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Cal",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Calabaza (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Calabaza (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Calabazos",
      "provinciaid": 33
    },
    {
      "cp": 33566,
      "nombre": "Calabrez",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Calabrina",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Calambre",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Calamon",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Calamua",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Calavero",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Calbuetos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "C'alcabo",
      "provinciaid": 33
    },
    {
      "cp": 33174,
      "nombre": "Caldas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Caldero, El",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Calderon, El",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Caldevilla",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Caldevilla De Acio",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Caldevilla De Arbas",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Caldevilla De Ibias",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Caldevilla De Rengos",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Caldones",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "CaldueÑin",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "CaldueÑo",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Calea, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33995,
      "nombre": "Caleao",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Calella, La (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Calera",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Caleros, Los (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Caleya (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Caleya, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Caleyina, La",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Caleyo",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Caleyo (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Caleyo (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33725,
      "nombre": "Caleyo, El (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Caleyo, El (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33170,
      "nombre": "Caleyo, El (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33170,
      "nombre": "Caleyo, El (ribera De Arriba)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Caleyo, El (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Caleyo, El (santa Coloma)",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "Caleyo, El (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Caleyos, Los (castrillon), Viviendas",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Caleyos, Los (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Caleyos, Los (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Caleyu, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Caliellu (busto-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Caliente, El",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Caliero, El (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Caliero, El (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Calle De La Vega",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Calleja, La",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Callejas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Callejos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Calleras",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "Callezuela",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Calvin (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Calvin (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Calvos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Calzada, La",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Calzado, El",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Camales",
      "provinciaid": 33
    },
    {
      "cp": 33568,
      "nombre": "Camango",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Camara, La",
      "provinciaid": 33
    },
    {
      "cp": 33554,
      "nombre": "CamarmeÑa",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Camas",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Camatierra",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Cambrosio",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Camina",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Camino (muÑo-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Camino De La Mariana",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Camino De La Quinta",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Camino Real",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Camino, El (feleches-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Caminos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Camoca De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Camoca De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Camocha, La",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Camonal",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Campa La Estrecha",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Campa, La (barros-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Campa, La (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Campamojada",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Campanal (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Campanal (la Felguera-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Campanal (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Campanal (tuilla-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "CampaÑones",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Campas (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Campas, Las (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Campas, Las (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Campas, Las (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Campas, Las (p. Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Campas, Las (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Campas, Las (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Campazon",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Camperona, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Camperona, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Camperones, Los (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33600,
      "nombre": "Campeta, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Campeta, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Campiello (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Campiello (la Manjoya)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Campiello (lieres-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33428,
      "nombre": "Campiello (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Campiello (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Campiello (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33993,
      "nombre": "Campiellos",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Campillin",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Campo Caldera",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Campo Conde (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33990,
      "nombre": "Campo De Caso",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Campo De La Iglesia (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Campo De La Iglesia (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Campo De La Vega",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Campo De Sobrado (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Campo Del Cura",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Campo Del Valle",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Campo La Tabla",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Campo La Vega",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Campo San Juan",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Campo Santa Ana",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Campo, El (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Campo, El (berron-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33628,
      "nombre": "Campo, El (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Campo, El (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Campo, El (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Campo, El (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Campo, El (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Campo, El (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Campo, El (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33620,
      "nombre": "Campomanes",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Campomojado",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Campon (barres)",
      "provinciaid": 33
    },
    {
      "cp": 33581,
      "nombre": "Campones (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33186,
      "nombre": "Campones, Los (el Berron)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Campones, Los (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Camporriondi",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Camporriondo",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Camporro, El (barredos)",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Camporro, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "Campos (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Campos (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Campos, Los (amandi-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Campos, Los (miravalles-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Campos, Los (p. Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Campos, Los (ver Callejero De Aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Campu La  Carrera",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Campueta",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "CamuÑo",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Canabatan",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Canal (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Canal, La (sevares)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Canales (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Canales (cabrales)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Canales, Las (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Canales, Los",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Cancelos",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Cancienes",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Candal",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Candama, La",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Candamin",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Candamo De Corvera",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Candanal (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Candanal, El (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Candanedo (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Candanedo (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Candanedo (naraval)",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Candanin",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Candano, El (la Espina)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Candano, El (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33850,
      "nombre": "Candanonegro",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Candanosa De Bustefollado",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Candanosa De Parlero",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Candanosa De Solares",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Candanosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Candanosa, La (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Candaosa",
      "provinciaid": 33
    },
    {
      "cp": 33430,
      "nombre": "Candas",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Candin",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Candones",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Canedo (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Canedo (otur)",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Canello (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Canero",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Canga, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Cangas De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Cangas De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33800,
      "nombre": "Cangas De Narcea",
      "provinciaid": 33
    },
    {
      "cp": 33550,
      "nombre": "Cangas De Onis",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Cangueta, La",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Cansinos",
      "provinciaid": 33
    },
    {
      "cp": 33140,
      "nombre": "Cantayu",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Canteli",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Cantera (la Venta-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Cantera, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Cantera, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Cantera, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Cantera, La (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Cantera, La (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Cantera, La (san Emiliano)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Canterona, La",
      "provinciaid": 33
    },
    {
      "cp": 33344,
      "nombre": "Cantiella, La",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Cantiquin",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Canto",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Canto (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Canto Coyanca",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Canto De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Canto De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33675,
      "nombre": "Canto De La Silla",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Canto De La Vara",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Canto Las Matas",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Canto, El (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Canto, El (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Canto, El (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Canto, El (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Canto, El (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Canto, El (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Cantoserron",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Cantu Trechuru",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "Canzana",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "CaÑal",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "CaÑales, Los",
      "provinciaid": 33
    },
    {
      "cp": 33425,
      "nombre": "CaÑe",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "CaÑedo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "CaÑedo (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "CaÑo (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "CaÑo De La Salud",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Capareda",
      "provinciaid": 33
    },
    {
      "cp": 33725,
      "nombre": "Capareiro",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Capellan",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Capellania (villavicios)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Caperal",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Capiello (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Capiello, El (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Capilla, La (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Capilla, La (felguera-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Capilla, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Carabanzo",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "CarabaÑo",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Carabin",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Caraduje",
      "provinciaid": 33
    },
    {
      "cp": 33582,
      "nombre": "Carancos",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Caranga",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Carangas (ponga)",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Carangas, Las (santo Adriano)",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "Caravedo",
      "provinciaid": 33
    },
    {
      "cp": 33960,
      "nombre": "Caraveo",
      "provinciaid": 33
    },
    {
      "cp": 33576,
      "nombre": "Caraves",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Caravia (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33346,
      "nombre": "Caravia Alta",
      "provinciaid": 33
    },
    {
      "cp": 33343,
      "nombre": "Caravia Baja",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "Caravies",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Carba De Arrojo",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Carba, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Carba, La (pola De Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Carbainos",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Carbajal (barredos)",
      "provinciaid": 33
    },
    {
      "cp": 33426,
      "nombre": "Carbajal (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Carbajal (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Carbajal (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Carbajal (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Carbajal (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Carballedo (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Carballedo (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Carballinos",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Carballo",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Carballo Del Cuito",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Carbayal",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "Carbayal (illano)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Carbayal (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Carbayal (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Carbayal (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Carbayal, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Carbayeda, La",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Carbayera (castiello-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Carbayera (magdalena-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Carbayin (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Carbayin Alto (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33430,
      "nombre": "Carbayo (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33420,
      "nombre": "Carbayo, El (lugones)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Carbayon",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Carbayos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Carbayosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Carbayu (tuilla-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Carbeje",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Carbes",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Carbo, El",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Carbon",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Carbonero",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Carbonero, El (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Carboniella",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Carbueiro",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Carcaba, La (soto De Ribera)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Carcabada (cazanes-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Carcabada (celada-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Carcabada (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Carcabina",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Carcarosa",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Carceda (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Carceda (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Carcediel",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Carcedo (brieves)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Carcedo (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Carcedo (soto Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33886,
      "nombre": "Carcedo De Lago",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Carcedo De Lomes",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Carcobas",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Carda",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Carda De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "CardaÑo",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "Cardegoda",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Cardeli",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Cardeo (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Cardes (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Cardes (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "CardiÑuezo",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Cardo",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Cardos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Cardoso (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33593,
      "nombre": "Cardoso (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Cardus",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "CareÑes",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Careses",
      "provinciaid": 33
    },
    {
      "cp": 33600,
      "nombre": "Cargadero Viejo",
      "provinciaid": 33
    },
    {
      "cp": 33750,
      "nombre": "Caridad, La",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Caridad, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Carizal, La",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Carlangas",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Carles",
      "provinciaid": 33
    },
    {
      "cp": 33567,
      "nombre": "Carmen",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Carmen, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Carnicera",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Caroyas",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Carpio, El",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Carquivas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33343,
      "nombre": "Carrales",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Carraluz",
      "provinciaid": 33
    },
    {
      "cp": 33325,
      "nombre": "Carrandena",
      "provinciaid": 33
    },
    {
      "cp": 33329,
      "nombre": "Carrandi",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Carraspientes",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Carrazal",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Carrea",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "CarreÑa De Cabrales",
      "provinciaid": 33
    },
    {
      "cp": 33172,
      "nombre": "Carrera, La",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Carrera, La (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33675,
      "nombre": "Carrerallana",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Carretera (barres)",
      "provinciaid": 33
    },
    {
      "cp": 33118,
      "nombre": "Carrexa",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Carricacho",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Carricedo",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Carril, El",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Carril, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Carril, La (noreÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Carriles (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33592,
      "nombre": "Carriles, Los (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Carriles, Los (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Carrilon (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "Carrio (arriondas)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Carrio (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "Carrio (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Carrio (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Carriona, La",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Carrionina, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Carrizal (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Carrizal, La (noreÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33757,
      "nombre": "Carroceiro",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Carrocera (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Carrocera (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Carrocero",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Carruebano",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Carrugueiro",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Cartavio",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Carvajal (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Casa Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Casa Cima",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Casa De Anes",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Casa De Arriba (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Casa De La Granda",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Casa Del Medio (ciaÑ0-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Casa Del Monte",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Casa Del Rio",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Casa El Canto",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Casa El Medio, La (la Venta-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Casa El Monte, La",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Casa Hevia",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Casa Nueva, La (lada-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Casa Nueva, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Casa Vide, La",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Casacabada",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Casacima",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Casamayor (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Casamayor (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Casandresin",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Casanueva (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Casanueva (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Casanueva (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Casanueva, La (tuilla-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Casapapio",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Casar De Moreda, El",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Casares (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Casares (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Casares (nievares-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Casares (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Casares (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Casares (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Casares (ujo)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Casares, Los (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Casares, Los (priesca-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Casarriba",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Casas De Abajo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Casas De Abajo (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Casas De Abajo (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Casas De La Carretera",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Casas Del Monte (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "Casas Del Puente",
      "provinciaid": 33
    },
    {
      "cp": 33430,
      "nombre": "Casas Molino",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Casazorrina",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Cascayera, La",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Cascayo (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Cascayo (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Caseria, La",
      "provinciaid": 33
    },
    {
      "cp": 33196,
      "nombre": "Caseron",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Caseta, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Caseta, La (la PeÑa-mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Caseta, La (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Caseta, La (p. Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Caseta, La (valdecuna-mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Casetas, Las (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Casia, La",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Casiellas",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Casielles",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Casielles (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33174,
      "nombre": "Casielles (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Casielles De Ponga",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Casilla, La (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Casilla, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Casillina (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Casillina, La (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "Casina, La",
      "provinciaid": 33
    },
    {
      "cp": 33681,
      "nombre": "Casomera",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Casona, La (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Casona, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Casona, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Casona, La (tuilla-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33300,
      "nombre": "Casona, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Casorra, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Casorra, La (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Casorvida",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Caspio",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Casquita (amandi-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Casquita (grases-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Castandiello (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Castandiello (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Castandiello (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Castanedo",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Castanedo (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "CastaÑal (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "CastaÑal (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "CastaÑal (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "CastaÑal, La (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "CastaÑalona, La",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "CastaÑar, La",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "CastaÑeda",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "CastaÑeda (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "CastaÑedo (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "CastaÑedo (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "CastaÑedo (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "CastaÑedo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "CastaÑedo (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "CastaÑedo (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33846,
      "nombre": "CastaÑedo De Miranda",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "CastaÑedo Del Monte",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "CastaÑeirua",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "CastaÑera",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "CastaÑera (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "CastaÑera (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "CastaÑera (lugo Llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "CastaÑera (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "CastaÑera (p. Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33540,
      "nombre": "CastaÑera (parres)",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "CastaÑera (rales-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "CastaÑera (rozadas-bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "CastaÑera (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33188,
      "nombre": "CastaÑera (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "CastaÑera (suares-bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "CastaÑera (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "CastaÑera (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33157,
      "nombre": "CastaÑeras",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "CastaÑero, El (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "CastaÑeu",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "CastaÑir",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "CastaÑos",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Castaosa",
      "provinciaid": 33
    },
    {
      "cp": 33758,
      "nombre": "Castello (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Castello (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Castiadelo",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Castiello",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Castiello (bendicion)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Castiello (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Castiello (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Castiello (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Castiello (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33340,
      "nombre": "Castiello (colunga)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Castiello (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Castiello (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Castiello (lugo Llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Castiello (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Castiello (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Castiello (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "Castiello (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Castiello (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Castiello (villabona-llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Castiello (villallana)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Castiello (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Castiello De La Barca",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Castiello De La Marina",
      "provinciaid": 33
    },
    {
      "cp": 33585,
      "nombre": "Castiello De Parres",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Castillo (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Castilmoure",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Castrillon De Boal",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Castro (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Castro (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Castro (castaÑedo-luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Castro (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Castro (castropol-vegadeo)",
      "provinciaid": 33
    },
    {
      "cp": 33737,
      "nombre": "Castro (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Castro (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Castro (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Castro (villallana)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Castro De La Sierra",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Castro De Limes",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Castro, El (allande)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Castro, El (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Castro, El (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Castro, El (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Castro, El (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Castromouran",
      "provinciaid": 33
    },
    {
      "cp": 33760,
      "nombre": "Castropol",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Castrosin",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Casuca (ribera De Arriba)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Casuca, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Casuca, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Casuca, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Casucas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Casucas, Las (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Cataldonce",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Caucia",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Caufel",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Caunedo (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Caunedo (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Cavandi",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "Cavite",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Caxidi",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Caxos",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Cay, La",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Cayado",
      "provinciaid": 33
    },
    {
      "cp": 33586,
      "nombre": "Cayarga",
      "provinciaid": 33
    },
    {
      "cp": 33428,
      "nombre": "Cayes",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "Cayo, El",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Cazanes",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Cazo",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Ceacal",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Ceba, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Cebedal, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Cebia, La",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Cebosa, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33582,
      "nombre": "Ceceda",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "CeceÑes",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Cecos",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Cefontes",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Cegontin",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Cela",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Celada",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Celango",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Cellero",
      "provinciaid": 33
    },
    {
      "cp": 33991,
      "nombre": "Celleruelo",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Celles",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Celon",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Celorio (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33595,
      "nombre": "Celorio (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Cenera",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "Cenero",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Ceneya",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Cenizal (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Cenizal (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Censo",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Centenal (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Centenales",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Centiniegas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Central, La",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "CeÑal",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Cepas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Cepedal",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "Cepedo, El",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Cepones, Los",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Ceposa, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Ceposa, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Cerame",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Cerca De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Cerca De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Cercenadas",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Cerebanes",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Cereceda (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Cereceda (villamayor)",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Cerecedo (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Cerecedo (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Cerecedo (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Cerecedo De Cabuerna",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Cerecedo Del Monte",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Cereijeira",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Cereizal",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Cerejedo",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Cerezal (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Cerezal (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Cerezal (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Cerezal De Rellanos",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Cerezal De Tablado",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Cerezaleru",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Cerezales",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Cerezaliz",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Cerin",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "CermoÑo",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "CermuÑo",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Cernias",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Cerolleiro",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Cerra (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33320,
      "nombre": "Cerracin",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Cerredo (degaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Cerredo (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Ceruyeda (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Cervera",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Cerveriz",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Cerviago",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Cesa",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Cespedera",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Cetrales",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Cetreda, La",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Ceyanes",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Cezoso",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Cezures",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Chabola De Vallado, La",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Chano De Canero",
      "provinciaid": 33
    },
    {
      "cp": 33757,
      "nombre": "Chao Das Trabas",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Chao De Leiras",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Chao De Porzun",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Charcon, El (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Chavolas, Las (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Chirente, El",
      "provinciaid": 33
    },
    {
      "cp": 33900,
      "nombre": "CiaÑo",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Cibea",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Cibuyo",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Cida",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Ciella",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Cien",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Cienfuegos",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Cierades",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "CigoÑa, La",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "Ciguedres",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Cigueta, La",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "Cima De Grado",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Cimadevilla (cabueÑes)",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "Cimadevilla (illano)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Cimadevilla (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Cimadevilla (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Cimadevilla (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Cimadevilla (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Cimiano",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Cimiellos",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "CiÑera",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Cipiello",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Ciriego Alto",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Ciriego Bajo",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Ciriego Medio",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "CirieÑo",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "CirigÜeyo",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Ciudad Residencial De Perlora",
      "provinciaid": 33
    },
    {
      "cp": 33585,
      "nombre": "Cividiello",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Clavillas",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Coalla",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Coallaju",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "CoaÑa",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "CoaÑana (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "CoaÑana (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33756,
      "nombre": "Coba (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Coba (p. Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33738,
      "nombre": "Coba, La (grandas Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Coba, La (vegadeo)",
      "provinciaid": 33
    },
    {
      "cp": 33995,
      "nombre": "Coballes",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Cobaya, La",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Cobayas",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Cobertoria (p. Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33300,
      "nombre": "Cobertoria, La (villav)",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Cobos",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Coca, La",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "CocaÑin",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "CocaÑo",
      "provinciaid": 33
    },
    {
      "cp": 33342,
      "nombre": "CoceÑa",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Coche, El",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Codejal, El",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "CofiÑo",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Cogolla, La (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Cogollo, El (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Cogollu, El (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Cogulla, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Coldobredo",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Coliema (san Pedro)",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Colinas",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Colinas De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Colinas De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Collada (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Collada (p. Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Collada (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Collada, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Collada, La (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Collada, La (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Collada, La (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Colladas (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Colladas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Colladiella",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Collado (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Collado (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Collado De Andrin",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Collado De Santo Tomas",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Collado Escobal",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Collado, El (barros, Langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Collado, El (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33620,
      "nombre": "Collado, El (campomane)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Collado, El (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Collado, El (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Collado, El (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Collados, Los (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Collados, Los (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33680,
      "nombre": "Collanzo (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Collanzo (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Collau, El (san Andres)",
      "provinciaid": 33
    },
    {
      "cp": 33568,
      "nombre": "Collera",
      "provinciaid": 33
    },
    {
      "cp": 33549,
      "nombre": "Collia",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Colloto (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Colloto (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Colniella, La",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Colobredo",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Colombres",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Colorada, La",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Colosia",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Columbiello",
      "provinciaid": 33
    },
    {
      "cp": 33320,
      "nombre": "Colunga",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Comba (allande)",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Comba, La (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Comba, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Combarcio",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Combarro",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Combo",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Con",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Concellin",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Concernoso",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Conceyero",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Conceyin (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Conciella",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Condado, El (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33992,
      "nombre": "Condado, El (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33300,
      "nombre": "Condarco",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Condesa, La",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Condres",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "CondueÑo",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Conforcada",
      "provinciaid": 33
    },
    {
      "cp": 33681,
      "nombre": "Conforcos (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Conforcos (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Congares",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Congostinas",
      "provinciaid": 33
    },
    {
      "cp": 33327,
      "nombre": "Conlledo",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Consorios",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Constancios",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Constante (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Constante (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Contina",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Conto",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Contriz (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Contriz, La",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Conveniencia",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Convento, El (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Copian",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Corain (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Corao",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Corao Castillo",
      "provinciaid": 33
    },
    {
      "cp": 33581,
      "nombre": "Corba, La",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Corbero (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "Corcia",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Corcolina",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Cordon",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Cordovero",
      "provinciaid": 33
    },
    {
      "cp": 33842,
      "nombre": "Cores",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Corian",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Corias (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Corias (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Corigos (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Corigos (amieva)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Corion",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Cornallo",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Cornas",
      "provinciaid": 33
    },
    {
      "cp": 33620,
      "nombre": "Cornellana (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33850,
      "nombre": "Cornellana (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Corniella",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Cornollo",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Coro",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Corolla (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Corollos",
      "provinciaid": 33
    },
    {
      "cp": 33549,
      "nombre": "Coronas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "CorondeÑo",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "CoroÑa",
      "provinciaid": 33
    },
    {
      "cp": 33620,
      "nombre": "Corrada Vieja (lena)",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Corrada, La (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Corradas, Las (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Corradas, Las (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Corraelcanto",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Corraina",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Corral",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Corral De Ujo",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Corralada",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Corralinos",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Corralon (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Corralon (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Corraon",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Corraona, La",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Corredor (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Corredor, El (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Corredoria (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Corredoria (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Corredoria (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Corredoria (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Corredoria (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Corredoria, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Corripia",
      "provinciaid": 33
    },
    {
      "cp": 33937,
      "nombre": "Corripos",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Corro, El",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "CorroÑa, La",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Corros (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Corros (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "Corros (vega De Anzo)",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Corros, Los (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Corros, Los (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "Cortaficio",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Corte (lieres-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Cortes (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Cortes (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Cortes (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Cortes, Las (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Cortin, El",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Cortina",
      "provinciaid": 33
    },
    {
      "cp": 33996,
      "nombre": "Cortina (p.laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33118,
      "nombre": "Cortina (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Cortina (t.veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Cortina (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Cortina De Figaredo",
      "provinciaid": 33
    },
    {
      "cp": 33627,
      "nombre": "Cortina De Telledo",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Cortina, La (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Cortina, La (ujo)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Cortina, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Cortinas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Cortines",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Corujas (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Corujas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Corujedo (lieres)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Corujedo (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Corujedo (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Corujona (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33428,
      "nombre": "CoruÑo",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Coruxeu",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Corvero",
      "provinciaid": 33
    },
    {
      "cp": 33196,
      "nombre": "Corzos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Costaya",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Coston, El",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Cotapos",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Cotarelo",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Cotarente",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Cotariella (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Cotariella (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Cotariella-cocaÑin",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Cotariella-escobio",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "Cotariello (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Cotariello (las Rubias)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Cotariello (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Cotaya",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Cotayo, El",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Cotina, La",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Coto Peral",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Coto, El (anes-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Coto, El (arenas-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Coto, El (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33126,
      "nombre": "Cotollano",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "Cotomonteros",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Cotones",
      "provinciaid": 33
    },
    {
      "cp": 33620,
      "nombre": "Cotorraso (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Couces",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Couso (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Couso (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Couto",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Couz, El (la Espina)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Couz, El (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Covadonga (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Covadonga (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Coviella (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33995,
      "nombre": "Coviella (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Coya",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Coyanca",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Coz",
      "provinciaid": 33
    },
    {
      "cp": 33188,
      "nombre": "Cristo, El",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Cruce, El",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Crucero, El",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Cruces (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Cruces, Las",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Cruces, Las (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Cruces, Las (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Cruces, Las (regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Cruces, Las (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Cruciada",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Crucina, La",
      "provinciaid": 33
    },
    {
      "cp": 33430,
      "nombre": "Cruz De Arrabal, La",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Cruz De Illas",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Cruz De La Hoguera",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Cruz De Los Caminos",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Cruz De Vilar",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Cruz, La (arenas-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Cruz, La (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33628,
      "nombre": "Cruz, La (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Cruz, La (lieres-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Cruz, La (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Cruz, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Cruz, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Cruzada, La",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Cruzada, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Cruzadas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Cua",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Cuadrazal",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Cuadriella De Ambres",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Cuadriellas De Villalaez",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Cuadriellas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Cuadro, El",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Cuadros, Los (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Cuadros, Los (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "CuadroveÑa",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Cuantas",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Cuartas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Cuarteles De Doriga",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Cuarteles De La GÜeria, Los",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Cuarteles De Mariana",
      "provinciaid": 33
    },
    {
      "cp": 33675,
      "nombre": "Cuarteles De Marianas",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "Cuarteles De Merujal",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Cuarteles De PeÑa Rubia, Los",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Cuarteles, Los (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Cuarteles, Los (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Cuatro Caminos",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Cuba, La",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Cubes, Les (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Cubia",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Cubiella, La",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Cubo, El",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Cubopuerto",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Cubrenes",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Cuclillos (santa Marina)",
      "provinciaid": 33
    },
    {
      "cp": 33150,
      "nombre": "Cudillero",
      "provinciaid": 33
    },
    {
      "cp": 33509,
      "nombre": "Cue",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Cueli",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Cuello",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Cuenco",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Cuenya (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Cuenya, La (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Cuenza",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "CueÑa, La",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Cueplo",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Cueras",
      "provinciaid": 33
    },
    {
      "cp": 33680,
      "nombre": "Cuerigo",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Cuero",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Cuerres (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33568,
      "nombre": "Cuerres (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Cuerrias De Espinaredo",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Cuerrias De Maza",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Cuerva, La",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Cuesta Carrio",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Cuesta De Villabazal",
      "provinciaid": 33
    },
    {
      "cp": 33158,
      "nombre": "Cuesta Del Cesto",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Cuesta Del Lago",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Cuesta El Viso",
      "provinciaid": 33
    },
    {
      "cp": 33154,
      "nombre": "Cuesta La Bana",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Cuesta La ViÑa",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Cuesta Los Valles",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Cuesta Naval, La",
      "provinciaid": 33
    },
    {
      "cp": 33188,
      "nombre": "Cuesta, La (arguelles-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Cuesta, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Cuesta, La (bobes-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Cuesta, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Cuesta, La (el Berron - Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Cuesta, La (feleches-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Cuesta, La (figaredo)",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Cuesta, La (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Cuesta, La (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Cuesta, La (lieres-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Cuesta, La (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33582,
      "nombre": "Cuesta, La (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Cuesta, La (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Cuesta, La (vega De Poja-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Cuestadarcu",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Cuestalonga",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Cuestas, Las (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Cuestas, Las (trubia)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Cuestavil",
      "provinciaid": 33
    },
    {
      "cp": 33174,
      "nombre": "Cuestayones",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Cuestespines",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Cueta, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Cueto (el Valle-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Cueto (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "Cueto (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Cueto (perlora-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Cueto El (bayas - Castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Cueto, El",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Cueto, El (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Cueto, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Cueto, El (laspra - Castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Cueto, El (trasona-corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Cuetoaleos",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Cuetos (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Cuetos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Cueva (la Espina)",
      "provinciaid": 33
    },
    {
      "cp": 33786,
      "nombre": "Cueva (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Cueva, La (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Cueva, La (t.veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Cueva, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33843,
      "nombre": "Cuevas (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33688,
      "nombre": "Cuevas (felechosa - Aller)",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Cuevas (pelugano - Aller)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Cuevas (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33588,
      "nombre": "Cuevas De Agua",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Cuevas, Las (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Cuinya",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Cuitada, La",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Cuitu, El (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Culmieiros",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Cunqueiros",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "CuÑa",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "CuÑaba",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Curbiello",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Curiscado",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Curriellos (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Curriellos (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Curriquera, La",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Curriquera, La, Pueblo",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Curtia, La, Viviendas",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Cutiellos",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Cutiellos (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Cutiellos (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Cuto (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Cuturrasu (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Cuyences",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "DagueÑo",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Daja",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Daner",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Debodes",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Defradas De Ambres",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Defradas De Las MontaÑas",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "DegaÑa",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Dego",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Deilan",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Demues",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Depata, La",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Deva",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Disco",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Dochal",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Doiras",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Donlebun",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "DoÑajuandi",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "Doriga (san Antonio-salas)",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "Doriga (san Esteban-salas)",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "Doriga (santa Eulalia - Salas)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Dormon",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Doro",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "Dosango",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Dou",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Duernos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33343,
      "nombre": "Duesos",
      "provinciaid": 33
    },
    {
      "cp": 33343,
      "nombre": "Duyos",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Edrado (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Edrado, El (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Eilale",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "Eiros (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Eiros, Los (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Eiros, Los (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33885,
      "nombre": "Ema",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Embaralado",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Empalme, El (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Emplalme, El (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Encarnada, La",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Encrucijada, La (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Endasa (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Endriga",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Enfistiella",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Engertal, El",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Eno",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Enseca De Arriba Y Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Entorcisa",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Entrago (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "Entralgo",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Entre Los Rios",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Entre, La Iglesia",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Entrebu",
      "provinciaid": 33
    },
    {
      "cp": 33940,
      "nombre": "Entrego, El",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Entrelafuente",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "EntrepeÑas (cabaÑaquinta)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "EntrepeÑas (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33173,
      "nombre": "Entrepuentes",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "Entrerrios (illano)",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Entrerrios (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Entrerrios (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Entrevias (corvera) (ver Callejero De Aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Entrialgo",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Envernaes",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Enverniega",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Enverniego (trevias)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Enverniego (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Envidia, La",
      "provinciaid": 33
    },
    {
      "cp": 33138,
      "nombre": "Era",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Eria (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Ermita, La",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Escalabada",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Escalada (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Escalada, La (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Escalones",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Escamplero (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Escamplero (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Escanlares",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Escarden",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Escas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Escobadielles",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Escobal (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Escobal (carbayin)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Escobal (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Escobal, El (cabrales)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Escobal, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Escobal, El (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Escobio (cabaÑaquinta)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Escobio (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Escobio (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Escobio (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Escolinas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Escontiella",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Escoredo",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Escosura",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Escrita, La (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Escucha, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Escuela, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Escuelas, Las (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Ese De Calleras",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Ese De San Vicente",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Esfreita",
      "provinciaid": 33
    },
    {
      "cp": 33325,
      "nombre": "Eslabayo",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Espasa (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33343,
      "nombre": "Espasa, La (caravia B.)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Espasande",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "EspeÑada",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Espesura, La",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Espin De Sangonedo",
      "provinciaid": 33
    },
    {
      "cp": 33710,
      "nombre": "Espin, El (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Espin, El (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Espin, El (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Espina (vegadeo)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Espina (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Espina, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Espina, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Espina, La (quintana)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Espina, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Espinaredo (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Espinaredo (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Espinedo (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Espinedo (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Espinedo (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Espinedo (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Espinera (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "Espinera (pruvia-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Espinera, La (lieres-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Espiniella (brieves)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Espiniella (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Espinos, Los (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Espinosa",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Espriella",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Esquilera",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Esquilo, El",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Esquios",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Estaca, La (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Estaca, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Estacas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Estacion (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Estacion (carbayin-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Estacion (perlora-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Estacion (piedeloro-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Estacion (ujo-mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Estacion (viella-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Estacion, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Estaquera",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Estebanina",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Estela",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Esteler",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Esteli",
      "provinciaid": 33
    },
    {
      "cp": 33796,
      "nombre": "Estelleiro",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Estelo",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Estilleiro",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Estrada, La (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Estrada, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Estrada, La (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Estrada, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Estrellin, El",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Estrullones",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Fabal (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Fabal (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Fabal (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Fabar (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33112,
      "nombre": "Fabar (proaza)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Fabares",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Fabariega (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Fabariego (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Fabariego (tiraÑa-laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Fabariego (villoria-laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Fabarin",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Fabrica, La",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Fabrica, La (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Faces (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Faces, Las (lieres)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Facuriella",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Fadiello",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Faeda, La (parres)",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Faedal (brieves)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Faedal (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Faedo (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Faedo (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Faedo (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Faedo (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Faedo (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Faedo (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Faedo (latores)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Faedo (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Faedo (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Faedo (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Faedo (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Faeo (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Faes",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Fafilan",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Faidiel",
      "provinciaid": 33
    },
    {
      "cp": 33650,
      "nombre": "Faidosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33850,
      "nombre": "Fajas",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Fajera, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Falcuedra, La",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Falguera",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Falmuria (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Fanar, La",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Fancornio",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Fanes",
      "provinciaid": 33
    },
    {
      "cp": 33325,
      "nombre": "Fano (colunga)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Fano (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Fanosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Fariseo",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Faro De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Faro De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Faroles, Los",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Farrapa, La",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Farruquita, La",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Fastias",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Fatorgada",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Favila",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Favorita, La",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Faya La Verde, La",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Faya Verde, La",
      "provinciaid": 33
    },
    {
      "cp": 33582,
      "nombre": "Faya, La (ceceda)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Faya, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Faya, La (lieres)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Faya, La (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Fayacaba",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Fayas, Las (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Fayona, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Fayona, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Febrero",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Fechaladrona",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Feleches (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Feleches (trubia)",
      "provinciaid": 33
    },
    {
      "cp": 33688,
      "nombre": "Felechosa",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Felechosas",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Felguera (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Felguera (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Felguera (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33930,
      "nombre": "Felguera, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Felguera, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Felgueras (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Felgueras, Las",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Felgueres (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33995,
      "nombre": "Felguerina",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Felgueron (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Felgueron, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Felguerosa (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Felguerosa, La (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Felgueroso",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Felguerua",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Fenigonte",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Fenolleda",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Fenolledo",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Fenosa (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Fenosa, La (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Fernandiz",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Ferradal (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Ferradal (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Ferralgo",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Ferredal, El (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Ferreira (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Ferreira (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Ferreirela",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "Ferreiria (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Ferrera (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Ferrera (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Ferrera (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Ferrera De Los Gavitos",
      "provinciaid": 33
    },
    {
      "cp": 33992,
      "nombre": "Ferrera, La (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Ferreras (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Ferreras (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Ferreras (la Mata)",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Ferreria (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Ferreria (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Ferrero, Viviendas",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Ferrero (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Ferreros (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Ferreros (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Ferreros (ribera De Arriba)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Ferrian, La",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Ferrol, El",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "FerroÑes",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Ferroy",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Festiella",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Fiame",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Figal, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Figal, La (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Figar (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Figar, La (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Figar, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Figar, La (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Figaredo",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Figaredo De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Figares (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Figares (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Figares (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Figares (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Figares (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Figarona, La",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Figueras (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Figueras (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Figuerina, La",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Fijuecas",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Fios",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Fitoria",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Flecha, La",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Flor De Acebos",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Florida, La (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Florida, La (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Florida, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Florida, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Florida, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Focara, La (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Focella",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Fojaca",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Fojas",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Fojo",
      "provinciaid": 33
    },
    {
      "cp": 33716,
      "nombre": "Fojos",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Folgosa",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Folgoso",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Folgueira Mayor",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Folgueirarrubia",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "Folgueiras (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Folgueiras (vegadeo)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Folgueiras De Avioga",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Folgueiras De Boiro",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Folgueiras De Cotos",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Folgueiro (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Folgueirosa (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Folgueraju",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Folgueras (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Folgueras (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Folgueras (lugones)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Folgueras (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Folgueras (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Folgueras (proaza)",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Folgueras (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Folgueras De Cornas",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Folgueras De MuÑalen",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Folgueras Del Rio",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Folgueras, Las (colloto-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33850,
      "nombre": "Folguerinas",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Folgueriza, La",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Folgueron",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Folguerosa (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Folguerosa (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Folguerua (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Folguerua (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Folguerua (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Folleca, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Folleron",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "Fombermeja",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Fombona",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Fonceca",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "Fonciello (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Fonciello (meres-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33126,
      "nombre": "Foncubierta",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Fonda, La (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Fonda, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Fondal (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Fondo",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Fondodevilla",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Fondon (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Fondon (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Fondos De Vega",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Fondos De Villa (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Fondos De Villa (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Fondujo",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Fongabin",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Fontaciera",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Fontalba",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Fontanal",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Fontaniella (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Fontanielles",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Fontanina (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Fontanina (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Fontanos",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "Fonte",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Fontebona",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Fonteta",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Fontines",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Fontona",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Fontoria",
      "provinciaid": 33
    },
    {
      "cp": 33846,
      "nombre": "Fontoria (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Fontoria (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33430,
      "nombre": "Forca, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Forcada",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Forcinas",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Forcon (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Forcon, El (castrillon), Viviendas",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Forfontia",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Formiga",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Formiguera (figaredo)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Formiguera (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Formiguera (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Fornaza",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Forniellas (allande)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Forniellas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Forniellos (gallegos-mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Forniellos (santa Cruz De Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Forno, El",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Fornos (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Fornos (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Fornos (pola De Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Fornos, Los (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Fornos, Los (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Fortuna",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Foxacos",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Foyaca, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Foyedo",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Foyedo (navelgas-tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Foyeu (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Foz (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33681,
      "nombre": "Foz (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Foz (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33996,
      "nombre": "Foz De Caso",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Foz De Morcin",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Fozalguera (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Fozana",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "Fozante",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Fragua (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Fraguas",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Franca, La",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "Franco, El",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Francos (pesoz)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Francos (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Frayoso, Lo",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Freal",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Frecha, La (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Frecha, La (sevares)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Freije",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Frejulfe",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Freno, El (arenas-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Fresnadiello (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33582,
      "nombre": "Fresnadiello (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Fresnaza",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Fresneal, El  (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Fresneda (lieres)",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Fresneda (lugones)",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Fresneda, La (amieva)",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Fresnedal (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Fresnedal (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Fresnedo (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Fresnedo (casares-quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33850,
      "nombre": "Fresnedo (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Fresnedo (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Fresnedo (lena) (villallana)",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Fresnedo (lena)(fuentes, Las)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Fresnedo (lindes-quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Fresnedo (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Fresnedo (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33885,
      "nombre": "Fresnedo (san Emiliano)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Fresnedo (santa Coloma)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Fresnedo (santa Cruz De Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33696,
      "nombre": "Fresnedo (soto Rey)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Fresnedo (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Fresnedo (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33585,
      "nombre": "Fresnidiello",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Fresno (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Fresno (collada-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "Fresno (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Fresno (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33567,
      "nombre": "Fresno (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Fresno (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Fresno De Genestaza",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Fresno, El (careÑes - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Fresno, El (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Fresno, El (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33426,
      "nombre": "Fresno, El (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Fresno, El (tornon-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Fresnosa (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Fresnosa (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Friera (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "Friera (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Friera (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Frieres",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "Fries",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Froseira",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Fueja, La",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Fuejo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Fuejo (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Fuejo (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33172,
      "nombre": "Fuejos",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Fuencaliente",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Fuente (barres)",
      "provinciaid": 33
    },
    {
      "cp": 33196,
      "nombre": "Fuente Del Forno",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Fuente Del Sapu, La",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Fuente Felguera",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Fuente Las Roces",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Fuente Louteiro",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Fuente, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33680,
      "nombre": "Fuente, La (collanzo)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Fuente, La (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Fuente, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Fuentefria",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Fuentemelga",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Fuentemil",
      "provinciaid": 33
    },
    {
      "cp": 33586,
      "nombre": "Fuentes (arriondas)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Fuentes (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Fuentes (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Fuentes (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Fuentes Cavadas",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Fuentes Corbero",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Fuentes De Besullo",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Fuentes De Las MontaÑas",
      "provinciaid": 33
    },
    {
      "cp": 33581,
      "nombre": "Fuentesanta",
      "provinciaid": 33
    },
    {
      "cp": 33188,
      "nombre": "Fuentespino",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Fuentiquina, La",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Fuentona",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Fuentona, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Fuexo",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Fueyo (meres - Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Fueyos, Los (p.lena)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Fumerin",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Fundial",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Fungal, La",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Furada, La",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Fureras, Las",
      "provinciaid": 33
    },
    {
      "cp": 33596,
      "nombre": "Galguera, La",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "GaliÑeiros",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Gallega, La",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Gallegos (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Gallegos (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Gallina, La",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Gallinal",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Gallinas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Gallinero (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Gallinero (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Gallinero De Arcallana",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Gallinero De Barcia",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Gamatosa",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Gamonal",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Gamonedo (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Gamonedo (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Gamonedo De Cangas",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Gamonedo De Onis",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Gamones",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Gancedo",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Gantal, La",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Garaba, La",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Garabiza",
      "provinciaid": 33
    },
    {
      "cp": 33591,
      "nombre": "GaraÑa De Pria",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Garbas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Garcia",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Garda",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Garganta",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Garganta, La",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Garita, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Garvelles",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Gateras, Las",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Gavito, El",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Gavitos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Gaxin (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Gayuelos",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Gedrez",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Gelan",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Gelaz",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Gemenediz",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Genestaza",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Genestosa",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Genestoso",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Genra",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Gera",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Gestoselo",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Gestoso (grandas Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Gestoso (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Gijon (ver Callejero)",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Gijun (berron, El-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Gillon",
      "provinciaid": 33
    },
    {
      "cp": 33733,
      "nombre": "Gio",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Giranes",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Gobernador",
      "provinciaid": 33
    },
    {
      "cp": 33342,
      "nombre": "Gobiendes",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Godan",
      "provinciaid": 33
    },
    {
      "cp": 33758,
      "nombre": "Godella",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Godina",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Godon",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Godos",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Goje",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Goleta, La (villamayor)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Gonzalez, Los",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Gordinallo",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Gorgoyones",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Gorrion",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Gotera",
      "provinciaid": 33
    },
    {
      "cp": 33990,
      "nombre": "Govezanes",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Gradatila",
      "provinciaid": 33
    },
    {
      "cp": 33820,
      "nombre": "Grado",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Gradura",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Gramedo (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Gramedo (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Granas-riestra, La",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Granda (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Granda (figueras)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Granda (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Granda (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "Granda (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Granda (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "Granda De Abajo, La",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "Granda De Arriba, La",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Granda- Siero (poligono Industrial)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Granda, La (albandi-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Granda, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Granda, La (c.onis)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Granda, La (candas)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Granda, La (castrillon), Viviendas",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Granda, La (coro-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Granda, La (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Granda, La (la Felguera - Langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Granda, La (la Manjoya-oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Granda, La (lada-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33426,
      "nombre": "Granda, La (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Granda, La (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Granda, La (puebles-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Granda, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Grandallana",
      "provinciaid": 33
    },
    {
      "cp": 33758,
      "nombre": "Grandamarina",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Grandamuelle",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Grandarrasa",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Grandas De Salime",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Grandavil",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Grandela (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Grandela (san Tirso De Abres)",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Grandela (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Grandellana",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Grandera, La (pola De Allende)",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Grandiella (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Grandiella (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Grandiella (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Grandiella (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Grandon",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Grandota, La",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Granja (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Granja, La (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Granja, La (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Granja, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Granja, La (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Granja, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Granja, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Granxu",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "GraÑa, La",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Grases",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Grazanes",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Grillero",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Grilo",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Grullos",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Gua",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Guardados, Los",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Guardia",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Guaricio",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Gudin",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "GÜerdies",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "GÜeria  Del Viso, La (la Venta - Langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "GÜeria, La  (la Felguera - Langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "GÜeria, La  (sama-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "GÜeria, La  (tuilla -langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Guiar",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Guimaran",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Gurulles",
      "provinciaid": 33
    },
    {
      "cp": 33586,
      "nombre": "Gustarnales",
      "provinciaid": 33
    },
    {
      "cp": 33425,
      "nombre": "Guyame",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Hedrada",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Helgueras",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Hera, La",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Heras, Las",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Heres",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Heria",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Herias (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Herias (illano)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Herias (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Heros (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Heros (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Heros, Los",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Heros, Los (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Herreria De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Herreria De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Hervedeiras",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Hervederas",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Hervedosas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Hevia",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Himera, La",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Hispanes",
      "provinciaid": 33
    },
    {
      "cp": 33593,
      "nombre": "Hontoria",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Horrea, La",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Horron",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Hospital, El (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Hueges",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Huelga, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Huelga, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Huelga, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Huergo",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Huergo (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Huergola",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Hueria Alta",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Hueria De Carrocera",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Hueria, La (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Huerno",
      "provinciaid": 33
    },
    {
      "cp": 33328,
      "nombre": "Huerres",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Huerta (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Huerta, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Huertas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Huertomuro",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Huesped, El",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Iboya, Pueblo",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Iboyo",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Idarga",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Ifrera",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Igena",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Iglesia, La (candas)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Iglesia, La (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "Iguanzo",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "Illano",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Illaso",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Inclan",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Infestal, La",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Infiesta (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Infiesta (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Infiesta (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Infiesta, La (villamayor)",
      "provinciaid": 33
    },
    {
      "cp": 33530,
      "nombre": "Infiesto",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Inguanzo",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Insierto",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Insiesta, La",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Intriago",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Invernal (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "Invernal, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "Invernite, La",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Inverniza, La",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Iramola",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Irrondo De Besullo",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Irrondo De La Folguera",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Is",
      "provinciaid": 33
    },
    {
      "cp": 33341,
      "nombre": "Isla, La",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Isongo",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Jalon",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Jamonda",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Jarceley",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Jareras",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Jarias",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Jarrio",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Javier",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Javita",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Jomezana De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Jomezana De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Jonte (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Jonte (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33299,
      "nombre": "Jove",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "Joyana",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Juliana",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Juncar, La",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Juncedo",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "Junco",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Justa, La",
      "provinciaid": 33
    },
    {
      "cp": 33140,
      "nombre": "Labarejos",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Labayos (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33675,
      "nombre": "Labayos (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "Labayos (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Labiaron",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Labra",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "L'acebal  (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Lacin",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Lada",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Laderos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Ladesancho",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Ladines (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33993,
      "nombre": "Ladines (sobrescobio)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Ladredo (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Lagar (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Lagar, El (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Lago",
      "provinciaid": 33
    },
    {
      "cp": 33886,
      "nombre": "Lago (allande)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Lago (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Lago (parres)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Lago (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Lago (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Lago De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Lagos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Lagua, La",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Lagueiro",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Laguna, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Lamelas",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Lamisqueira",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Lampajua",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Lampaya",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "LamuÑo (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "LamuÑo (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Landia",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Landrio",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Laneo",
      "provinciaid": 33
    },
    {
      "cp": 33725,
      "nombre": "Langrave",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Laniello",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Lanteiro",
      "provinciaid": 33
    },
    {
      "cp": 33726,
      "nombre": "Lantero (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Lantero (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Lantero (illano)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Lantero (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Lantero (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Lantigo",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Lantoira",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "LantrapiÑan",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "L'arma",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Larna",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Laron",
      "provinciaid": 33
    },
    {
      "cp": 33330,
      "nombre": "Lastres",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "L'atalaya  (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Latores",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Lavadoira",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Lavandal",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Lavandera (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Lavandera (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Lavandera (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Lavandera (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Lavandera (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Lavandera, La (figaredo)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Lavandero",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Lavares",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Lavares (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "Lavares (santo Adriano)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Lavares (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Laviada",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Laviades",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Laviana De Gozon",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Lavio",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Lay",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Lazana",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Lebredo (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33756,
      "nombre": "Lebredo (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "LeceÑes",
      "provinciaid": 33
    },
    {
      "cp": 33347,
      "nombre": "Leces",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Legua",
      "provinciaid": 33
    },
    {
      "cp": 33845,
      "nombre": "Leiguarda",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Leiras",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Leiriella",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Leirio",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Leiron",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Leirosa",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Leitariegos",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Lendelforno",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "LendepeÑa",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Lendequintana",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Lendiglesia",
      "provinciaid": 33
    },
    {
      "cp": 33390,
      "nombre": "Leorio",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Les",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Levinco",
      "provinciaid": 33
    },
    {
      "cp": 33325,
      "nombre": "Libardon",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Liceira",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Lieira",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Lieres",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Liervado",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Ligueria",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Lijou",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Limanes",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Limes",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Limosnera",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Linar, La",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Linares (camocha)",
      "provinciaid": 33
    },
    {
      "cp": 33995,
      "nombre": "Linares (caso)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Linares (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Linares (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Linares (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Linares (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Linares (p.allande)",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Linares (proaza)",
      "provinciaid": 33
    },
    {
      "cp": 33345,
      "nombre": "Linares (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Linares (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Linares (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Linares De Acebo",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Linares Del Puerto",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "Linariegas",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Linde, La",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Lindemurias",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Lindes",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Lindota",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Linera, La (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Linera, La (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Lineras (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Lineres (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "LiÑana",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "LiÑero",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Liso",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Llada, La",
      "provinciaid": 33
    },
    {
      "cp": 33126,
      "nombre": "Llago",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Llagos",
      "provinciaid": 33
    },
    {
      "cp": 33170,
      "nombre": "Llagu, El",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Llama, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Llama, La (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Llama, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Llama, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33170,
      "nombre": "Llamaoscura",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Llamardal",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Llamargon",
      "provinciaid": 33
    },
    {
      "cp": 33650,
      "nombre": "Llamas (ablaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33681,
      "nombre": "Llamas (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Llamas (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Llamas (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Llamas (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Llamas De Ambasaguas",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Llamas De Mouro",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Llamedo (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Llamedo (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Llamera (aboÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Llamera (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Llamera, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Llamera, La (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Llamera, La (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Llameras",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Llamero",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Llames (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Llames (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33585,
      "nombre": "Llames De Parres",
      "provinciaid": 33
    },
    {
      "cp": 33591,
      "nombre": "Llames De Pria",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Llamiella, La",
      "provinciaid": 33
    },
    {
      "cp": 33592,
      "nombre": "Llamigo",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Llamo",
      "provinciaid": 33
    },
    {
      "cp": 33839,
      "nombre": "Llamoso",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Llan",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Llana De Coya (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "Llana El Pando",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Llana La Mata",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Llana Palacio",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Llana, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Llana, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Llana, La (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Llana, La (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Llana, La (san Roman-piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Llana, La (t.veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Llanacedo",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Llanas, Las (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Llanas, Las (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Llanas, Las (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Llanas, Las (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Llanas, Las (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Llanas, Las (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Llanavao (aviles-la Reigada)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Llandebustio",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Llandecarballo",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Llandellana",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Llandemieres",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Llandepereira",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Llandones (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Llandosu",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Llaneces",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Llaneces (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Llaneces (el Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Llaneces (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Llaneces (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Llaneces (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Llaneces (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Llaneces De Calleras",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Llaneces De La Barca",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Llaneces De Pedriego",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Llaneces De Rellanos",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Llaneces Del Rey Moro",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Llanelo",
      "provinciaid": 33
    },
    {
      "cp": 33500,
      "nombre": "Llanes",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Llanes, Les (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Llaneza (t.veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Llaneza La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Llaneza, La (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Llaniella, La (entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Llano (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Llano (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Llano De Amieva",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Llano De Con",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Llano Del Rio",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Llano La Tabla",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Llano Pando",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Llano Peral",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Llano, El (cangas Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Llano, El (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Llano, El (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Llano, El (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33118,
      "nombre": "Llano, El (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Llano, El (san Tirso De Abres)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Llano, El (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Llano, El (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33650,
      "nombre": "Llanolacuba",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Llanon, El, Caserio",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Llanon, El (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Llanoriego",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "Llanorrozo",
      "provinciaid": 33
    },
    {
      "cp": 33687,
      "nombre": "Llanos",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Llanos De Someron",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Llanos De Tainas",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Llanos Los Artos",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Llanos, Los (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Llanos, Los (el Fresno-grado)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Llanos, Los (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Llantada, La",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Llantamartin",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Llantao",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Llantero (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Llantero (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Llantero (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33390,
      "nombre": "Llantones",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Llantrales",
      "provinciaid": 33
    },
    {
      "cp": 33900,
      "nombre": "Llanu, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Llanuces",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Llaos, Los (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Llaranes",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Llaranes (ver Callejero De Aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Llares",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "Llascara, La (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Llascara, La (urbies)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Llascaras",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Llata",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Llavayos",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Llave, La",
      "provinciaid": 33
    },
    {
      "cp": 33720,
      "nombre": "Llaviada",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Lleda, La",
      "provinciaid": 33
    },
    {
      "cp": 33594,
      "nombre": "Lledias",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Llendecastiello",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Llendepin",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Llenin",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "LleÑada, La",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "Llera (vega De Anzo)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Llera, La (amandi)",
      "provinciaid": 33
    },
    {
      "cp": 33991,
      "nombre": "Llera, La (p.laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Llera, La (quintana)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Llera, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "Llerandi (san Cosme)",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Llerices",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Lleron, El (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Lleros De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Lleros De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "Llestro, El",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Llinar, La",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Llindion",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "Llineres",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Lloba, La",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Llodares",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Llodero (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Llodero (san Martin De Podes)",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "Llomba (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Llomba La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33578,
      "nombre": "Llonin",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Lloral",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Lloral, La (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Lloraza",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Llordal",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Llordon",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Lloreda (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Lloreda (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Lloreda (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Lloreo",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Llorera, La",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Llorian",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Llorianes",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Lloro",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Llosa, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Llosa, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Llosanueva",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Lloses",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Lloseta",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Llosoiro",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Llovera (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Llovera, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "Llovio",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Llueves",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Llugarin De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Llugarin De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Lobio",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "LodeÑa",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Lodos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Logrezana",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Lois",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Lombal",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Lombatin",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Lomes",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Lomparte",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Longa, La",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Longa, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Longa, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33750,
      "nombre": "Longara",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Longas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Longoria",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Longrey",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Lorante",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "Loreda",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Loredo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Loredo (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Loredo (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Lorero",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Loriana",
      "provinciaid": 33
    },
    {
      "cp": 33991,
      "nombre": "Lorio",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Loris",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Loro",
      "provinciaid": 33
    },
    {
      "cp": 33342,
      "nombre": "LoroÑe",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "Lotero",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Loujedo",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Louredal (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Louredal (san Tirso Abres)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Lourido (san Tirso Abres)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Lourido (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Louterio",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Loutima",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Loza",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Lozana",
      "provinciaid": 33
    },
    {
      "cp": 33440,
      "nombre": "Luanco",
      "provinciaid": 33
    },
    {
      "cp": 33700,
      "nombre": "Luarca",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Luaria",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Luarnes",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Luberio",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Lubrio",
      "provinciaid": 33
    },
    {
      "cp": 33328,
      "nombre": "Luces",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Luciernas",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Ludeiros",
      "provinciaid": 33
    },
    {
      "cp": 33340,
      "nombre": "Lue",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Luerces",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Lugar De Abajo (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Lugar De Arriba (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Lugarin (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Lugarin (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Lugarin (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Lugarin De Arriba, El",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Lugarnuevo",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Lugaron",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Lugas",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Lugido",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "Lugo De Llanera",
      "provinciaid": 33
    },
    {
      "cp": 33420,
      "nombre": "Lugones",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "LuiÑa (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Lunas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33696,
      "nombre": "Lusiella",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Mabona, La",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Macetes, Les",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Machina, La",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Machuquera",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Madera, La",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Madera, La (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Madera, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Maderada, La",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Maderal, El",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Madiedo",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "MadreÑero, El",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Madrera, La",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Mafalla",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Mafalla (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33126,
      "nombre": "Magadalena, La (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Magadan",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Magarin",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Magdalena, La (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Magdalena, La (entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Magdalena, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Magdalena, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Magosteiras",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Mahoxu",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Maja, La",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Malata",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Malateria, La",
      "provinciaid": 33
    },
    {
      "cp": 33508,
      "nombre": "Malateria, La (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Mallado",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Mallayo",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Mallecin",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Mallecina",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Malleza",
      "provinciaid": 33
    },
    {
      "cp": 33737,
      "nombre": "Malneira",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Malpica (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33660,
      "nombre": "Malpica (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Malpica (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Malveda, La",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Malvedo",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Mamorana",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Maniel",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Manigua, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Mantaras",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Manto, El",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Manzaneda (aboÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Manzaneda (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Manzaneda (guimaran - CarreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Manzaneda (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Manzanedo",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "MaÑores",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Maquila",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "MaramuÑiz",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Maravilla, La",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Marcellana",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "Marcelo",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Marcenado",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "Mardana",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Marea, La",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Marentes",
      "provinciaid": 33
    },
    {
      "cp": 33390,
      "nombre": "Mareo De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33390,
      "nombre": "Mareo De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Margolles",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Mariana",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Maricasina",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Marina, La (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Marina, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Marinas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Maripollin",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Marrona, La",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Martimporra",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Martinete, El (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Martinez, La",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Martintorin",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Martul",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Marzaniella, La  (trasona-corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Marzaniella, La (trasona-corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Masanti, La",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Masenga",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Maseras",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Mases",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Masfera",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Mata, La (amieva)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Mata, La (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Mata, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Mata, La (feleches-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Mata, La (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Mata, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Matafoyada",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Matela",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Matiega",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Matiella",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Matiellas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Matinada, La",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Matosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Matuca",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Mayao",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Mayorazo",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Maza",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Mazas, Las, Lugar",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Mazas, Las (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Mazo De Bres",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Mazo De Mon",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Mazo, El",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Mazo, El (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Mazo, El (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Mazo, El (p. Baja)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Mazonovo (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Mazorra",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Mazuco, El",
      "provinciaid": 33
    },
    {
      "cp": 33716,
      "nombre": "Medal",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Medeo",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Medio, El (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33170,
      "nombre": "Medio, El (manjoya-oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Medion",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Meiro",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Melandrera, La",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Melarde",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Melchores, Los",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Melendrera (serin)",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Melendreras (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Melendreras (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Melendreros",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Mellampo",
      "provinciaid": 33
    },
    {
      "cp": 33568,
      "nombre": "Meluerda",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Mendiello",
      "provinciaid": 33
    },
    {
      "cp": 33758,
      "nombre": "Mendones",
      "provinciaid": 33
    },
    {
      "cp": 33845,
      "nombre": "Menes",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Menores, Los",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Menudeiro",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Menudera",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Menudina, La",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Meobra",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Meras",
      "provinciaid": 33
    },
    {
      "cp": 33758,
      "nombre": "Mercadeiros",
      "provinciaid": 33
    },
    {
      "cp": 33508,
      "nombre": "Mere",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Meredo",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Meres (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Meres (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Mergulleira",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Merilles",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Merin De Abajo, El",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Merin De Arriba, El",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "Mernies",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Mero, El",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Merodio",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Merou",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Meruca, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "Merujal",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Merujal De Villoria",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Meruxeo, El",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Mesa, La",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Mesada, La",
      "provinciaid": 33
    },
    {
      "cp": 33586,
      "nombre": "Mesariegos",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Mesnada",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Meson De La Tabla, El",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Mestas (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Mestas De Ardisana",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Mestas De Con",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Mestas, Las (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Mestas, Las (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Mestas, Las (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Mestas, Las (p.laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Mestas, Las (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33726,
      "nombre": "Mezana",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Mian",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Mieldes",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Mienagos",
      "provinciaid": 33
    },
    {
      "cp": 33577,
      "nombre": "Mier",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Miera De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Miera Del Medio",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Miera, La",
      "provinciaid": 33
    },
    {
      "cp": 33600,
      "nombre": "Mieres",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Mieres (limanes-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Mieres (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Migoya",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Miguelperi",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Milana, La",
      "provinciaid": 33
    },
    {
      "cp": 33576,
      "nombre": "Mildon",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Millara",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Millarado",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Millariega",
      "provinciaid": 33
    },
    {
      "cp": 33798,
      "nombre": "MiÑagon",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "MiÑo",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Miou",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Miracales",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Mirallo De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Mirallo De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Miranda (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Miranda, La (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Miravalles (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Miravalles (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Misiego (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Misiegos",
      "provinciaid": 33
    },
    {
      "cp": 33758,
      "nombre": "Miudeira",
      "provinciaid": 33
    },
    {
      "cp": 33758,
      "nombre": "Miudes",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "MiyangÜes (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Miyar (cangas Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Miyar, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Miyares (amieva)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Miyares (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Miyares (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Miyares (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Miyeres (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Moal",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Moanes",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Mocin",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Moclin, El",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Modreiros",
      "provinciaid": 33
    },
    {
      "cp": 33845,
      "nombre": "Modreros (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Modreros (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Mogobio",
      "provinciaid": 33
    },
    {
      "cp": 33716,
      "nombre": "Mohias",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Moire",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Molatera, La",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Moldano",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Moldes",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Molejon",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Molin De La Fuente",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Molin De La Llastra, El",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Molina (trubia)",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Molina, La (cabrales)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Molino De Coz",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Molino De Figares, Caserio",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Molino De La MaÑa",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Molino Rozado",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Molino, El (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Molino, El (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Molinon, El",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Molinos (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Molinos De Agosto",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Molinos, Los (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Molleda",
      "provinciaid": 33
    },
    {
      "cp": 33937,
      "nombre": "Molledo",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Mollera",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Momalo",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Momean",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Mon",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Monas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Monasterio",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Monasterio De Hermo",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Monasterio Del Coto",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Monco (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Monco (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Mondivisa",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Monegro",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Mones",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Mones (villamayor)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Monga",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Moniello",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Monon",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Montan, El  (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "MontaÑa, La",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Monte",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Monte (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Monte Llamero, El",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Monte Moris",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Monte Pando",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Monte, El (cancienes)",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Monte, El (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Monte, El (la Camocha)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Monte, El (lieres)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Monte, El (logrezana-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Monte, El (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Monte, El (perlora-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Monte, El (pervera-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Monte, El (piedeloro-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Monte, El (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Monte, El (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Monteagudo (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Monteagudo (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33549,
      "nombre": "Montealea",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Montealegre",
      "provinciaid": 33
    },
    {
      "cp": 33691,
      "nombre": "Monteana",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Monteavaro",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Montecalera",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Monteciello",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Montecoya",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Montefurado",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Montegrande",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Montelloso",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Montenuevo",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Monteoscuro",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Monteril",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Monterizo",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Monterrey",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Monteserin Grande",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Monteserin PequeÑo",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Monticelo",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Montico",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Montillo",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Montiquin",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Montoto",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Montouto",
      "provinciaid": 33
    },
    {
      "cp": 33839,
      "nombre": "Montovo",
      "provinciaid": 33
    },
    {
      "cp": 33937,
      "nombre": "MoÑeca",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "MoÑio",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Moquina",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Mora",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Mora, La (cancienes)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Morados",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Moral (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Moral De Sariego",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Moral, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Moral, La (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Morana",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "Moratin (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Moratin (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Moreda (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33670,
      "nombre": "Moreda De Aller",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Morentan",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Morente",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Moreo",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Moriana",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Morillon",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Morlongo",
      "provinciaid": 33
    },
    {
      "cp": 33567,
      "nombre": "Moro (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Moro, El",
      "provinciaid": 33
    },
    {
      "cp": 33140,
      "nombre": "Mortera De Palomar",
      "provinciaid": 33
    },
    {
      "cp": 33173,
      "nombre": "Mortera De Tellego",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Mortera, La",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Mortera, La (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Mortera, La (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Mortera, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Morteras, Las",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Moruxones",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Morvis",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Morzo",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Mosquita",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Mosquitera (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Mosquitera, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Mota",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Moure",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Mourela",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Mouruso",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Mouruso (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Mousende (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Moutas",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Moznera",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Mudarri",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Mudrera, La",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Mudrerina, La",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Muela, La",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Muela, La (p.lena)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Mumayor",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Munco",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Muniello (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33691,
      "nombre": "Muniello (veriÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "MuÑalen",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "MuÑas De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "MuÑas De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33991,
      "nombre": "MuÑera",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "MuÑo",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "MuÑon",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "MuÑon Cimero",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "MuÑon Fondero",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "MuÑones",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Mures",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Muria, La (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33676,
      "nombre": "Murias (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Murias (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Murias (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Murias (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33885,
      "nombre": "Murias (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Murias (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Murias (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Murias (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Murias (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Murias (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Murias De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Murias De Puntaras",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Murias, Las",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Murias, Las (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Muriella, La",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Muriellos (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Muriellos (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Muriellos (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Murio, El",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Muro, El",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Murolas",
      "provinciaid": 33
    },
    {
      "cp": 33138,
      "nombre": "Muros Del Nalon",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Muslera",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Nadal",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Nadales",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Nadou",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Nafarea",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Nalio",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Nando",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Naon",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Naraido",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Naraval",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Narciandi",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Narganes",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Narzana De Sariego",
      "provinciaid": 33
    },
    {
      "cp": 33520,
      "nombre": "Nava",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Nava (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Nava, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Nava, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Navaliega (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Navaliego (p.laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Navaliegu, El  (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Navalin (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Navalin, El (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Navallo",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Navalon",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Naveces",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Naveda",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Navedo",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Navedo (illano)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Navelgas",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Naves (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33594,
      "nombre": "Naves (posada Llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Naves (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33710,
      "nombre": "Navia",
      "provinciaid": 33
    },
    {
      "cp": 33692,
      "nombre": "Navidiello",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Naviego",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Naviella",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Negales",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Nembra",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Nembro",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Nenin",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Nera",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Nespral, La (entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Nespral, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Nevares",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Niao",
      "provinciaid": 33
    },
    {
      "cp": 33650,
      "nombre": "Nicolasa",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Nieda",
      "provinciaid": 33
    },
    {
      "cp": 33595,
      "nombre": "Niembro",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Nieres",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Nieto, El",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Nieva",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Nievares (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Nievares (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33990,
      "nombre": "Nieves",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Nijeres",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Nimbra",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Nio",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Nisal (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Nisal, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33850,
      "nombre": "Nisales, Las",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Niseiros",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Noal",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Noceda (allande)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Noceda (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Noceda De Rengos",
      "provinciaid": 33
    },
    {
      "cp": 33588,
      "nombre": "Nocedo (cuevas Del Agua)",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Nocedo, El (lena)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Nogueira",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Nogueiron",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Nonide",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Nonin",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Nora (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33937,
      "nombre": "Nora (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Nora (trubia)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Nora (villaperez)",
      "provinciaid": 33
    },
    {
      "cp": 33180,
      "nombre": "NoreÑa",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Nores",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Noriega",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Noron",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Noval (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Noval (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Novales (breceÑa-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Novales (oles-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Novales (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Novales, Los (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Novalin",
      "provinciaid": 33
    },
    {
      "cp": 33157,
      "nombre": "Novellana",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Nozal, La",
      "provinciaid": 33
    },
    {
      "cp": 33620,
      "nombre": "Nozala, La",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Nozaleda (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Nozalin (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Nubledo",
      "provinciaid": 33
    },
    {
      "cp": 33592,
      "nombre": "Nueva (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Nueva, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "NuÑez",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Nuste",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "Ñabla",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Oballo",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Obana",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Obanca",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Obanza",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Obaya",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Obona",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Obra, La (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Obra, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Ocea",
      "provinciaid": 33
    },
    {
      "cp": 33576,
      "nombre": "OceÑo",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Ocinera",
      "provinciaid": 33
    },
    {
      "cp": 33870,
      "nombre": "Ocio",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Oles",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Olgo",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Olicio",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Olla, La (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Olleros",
      "provinciaid": 33
    },
    {
      "cp": 33660,
      "nombre": "Olloniego",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Omedal (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Omedal (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Omedas",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "Omedina",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Omedines (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Omedines (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Omedo (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Omedo (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Omente",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Omeo (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Onao",
      "provinciaid": 33
    },
    {
      "cp": 33839,
      "nombre": "Ondes",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Ondinas",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Oneta",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Onon (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Onon (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "OÑardi",
      "provinciaid": 33
    },
    {
      "cp": 33726,
      "nombre": "Orbaelle",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Orbon",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Ordaliego (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Ordaliego (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Orderias (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Orderias (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Orderias (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Ordial",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Ordial De La Barca",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Ordial De MiÑo",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Ordiales (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Ordiales (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Ordiales (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "OrdoÑo",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Ore",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Orgales",
      "provinciaid": 33
    },
    {
      "cp": 33186,
      "nombre": "Orial",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Oriella",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Orilla Del Rio",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Orilles De Serrapio",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Oriyes",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Orizon",
      "provinciaid": 33
    },
    {
      "cp": 33990,
      "nombre": "Orle",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Orrea",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Orrin, El",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Ortigosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33716,
      "nombre": "Ortiguera (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Ortiguero De Cabrales",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Orviz",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Oscuredal",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Otardeju",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Otariello",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Otariz",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Otas",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Oteda, La",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Otero",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Otero (aboÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Otero (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Otero (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Otero (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Otero (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Otero (p.lena)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Otero (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Otero (pola De Siero-celles)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Otero (pola De Siero-muÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Otero (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Otero, El (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Otero, El (p.allende)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Otero, El (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Otero-roiles",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Oteruelo",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Otones",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Otriello",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Otur",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Otura (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Oubias",
      "provinciaid": 33
    },
    {
      "cp": 33729,
      "nombre": "Ouria (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Ouria (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Outeiro (barres)",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Ovanes",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Ovellariza",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Overo",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Oves",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Oviedo (ver Callejero)",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Ovienes",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Ovies",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Ovilley",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Ovin",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "OviÑana (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33846,
      "nombre": "OviÑaÑa (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33592,
      "nombre": "Ovio",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Oyanco",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "Ozanes",
      "provinciaid": 33
    },
    {
      "cp": 33154,
      "nombre": "Paca, La",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Pachalina, La",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Paciones",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Pacios (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Paderne (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Paderne (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33737,
      "nombre": "Padraira",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Padrun, El (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Padrun, El (villallana)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Paerna",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Pajares",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Pajio",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Pajomal",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Palacio (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Palacio (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Palacio (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Palacio De Ardisana",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Palacio De Hevia",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Palacio De Naviego",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Palacio, El (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Palacio, El (amandi - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Palacio, El (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Palacio, El (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Palacio, El (urbies)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Palacion",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Palacios (p.lena)",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Paladeperre",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Paladin",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Palmiano",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Paloma, La",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Palomar (cabaÑaquinta)",
      "provinciaid": 33
    },
    {
      "cp": 33140,
      "nombre": "Palomar (ribera De Arriba)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Palomas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Palombierga",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Palomera",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Pambley",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Pampiedra",
      "provinciaid": 33
    },
    {
      "cp": 33509,
      "nombre": "Pancar",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Pandavenes",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Pandel De Berruga",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Pandellevandes",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Pandenes",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Panderraices",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Pandiella (linares-lena)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Pandiella (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Pandiella (t.veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Pandiella, La (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Pandiellas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Pandiello (arriondas)",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Pandiello (cabrales)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Pandiello (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "Pandiello (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Pandiello (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Pandiello (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33845,
      "nombre": "Pando (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Pando (breceÑa-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33174,
      "nombre": "Pando (caces)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Pando (celles-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Pando (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Pando (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "Pando (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "Pando (lugo De Llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Pando (nava-candones)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Pando (piloÑeta-nava)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Pando (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33566,
      "nombre": "Pando (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Pando (tornon - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Pando (valdesoto-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Pando, El (miyares-piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Pando, El (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Pando, El (trubia)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Pandoto",
      "provinciaid": 33
    },
    {
      "cp": 33570,
      "nombre": "Panes",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Panicera",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Paniceres (la Magdalena - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Paniceres (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Paniceres (pando - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Paniceres (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Paniceres De San Andres",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Paniceros",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Paniciri",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Panizal",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Panizales (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33426,
      "nombre": "Panizales (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Panizales (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Panizales (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "PaÑeda Nueva",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "PaÑeda Vieja",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Para",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Parada (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Parada (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Parada La Nueva",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Parada La Vieja",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Parada, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Paradas",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Paradela (villamayor)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Parades",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Paradiella",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Paradina",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Paraes",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Parajas (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Parajas (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Paramios",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Paramo",
      "provinciaid": 33
    },
    {
      "cp": 33694,
      "nombre": "Parana",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Paraxa",
      "provinciaid": 33
    },
    {
      "cp": 33681,
      "nombre": "Paraya, La",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Parayes",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Parcia (amieva)",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Parda",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "PardiÑas",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Pared, La",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Paredes",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Paredes (lugones)",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Pares",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Pareu, El",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Parlero",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Paroro",
      "provinciaid": 33
    },
    {
      "cp": 33428,
      "nombre": "Parque Tecnologico De Llanera",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Parra, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Parra, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33509,
      "nombre": "Parres (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Parrondo",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Parrucas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Parte, La (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Parte, La (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Parte, La (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Parteayer",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Pasaron",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Pascual (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Pascual, El (traspando-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Paseres, Les",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Pasquin",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "Pastur",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Patarin",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Pato, El",
      "provinciaid": 33
    },
    {
      "cp": 33691,
      "nombre": "Pavierna",
      "provinciaid": 33
    },
    {
      "cp": 33991,
      "nombre": "Payandi",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Payariega, La",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Payega (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Payega (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Payoza",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Pedraces (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Pedralba",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Pedras",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Pedrazas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Pedrazos (barros - Langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Pedrazos (lada - Langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33737,
      "nombre": "Pedre",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Pedrea",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Pedregal (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Pedregal (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Pedregal (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Pedrera (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Pedrera (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Pedrera, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Pedrera, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33390,
      "nombre": "Pedrera, La (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Pedrera, La (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Pedrera, La (lieres)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Pedrera, La (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Pedreras, Las, Viviendas",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Pedrero",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Pedrero (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Pedrero (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Pedrero, El (trasona-corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Pedriego",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Pedrosa (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Pedrosas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Pedroso (espinaredo-piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Pedroso (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Pedroso (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Pedroso (santa Cruz - Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Pedroso, El (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Pedroso, El (valdecuna - Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Pedroso, El (villavicios)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Pedrova",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "Pedroveya",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Pedrueco",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "PedrueÑo",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "PedruÑo",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Peirones",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Peizais",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Pejan",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Pelabraga",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Pelamantas",
      "provinciaid": 33
    },
    {
      "cp": 33720,
      "nombre": "Pelame (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Peleon",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Peligro, El",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Pelliceira",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Pelogra",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Pelonegro",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Pelontre",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Pelorde",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Pelou",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Peluca, La",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Pelugano",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Pen",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Pena (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Pena (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Pena, La (figaredo)",
      "provinciaid": 33
    },
    {
      "cp": 33675,
      "nombre": "Pena, La (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Penablanca",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Penacoba",
      "provinciaid": 33
    },
    {
      "cp": 33757,
      "nombre": "Penadecabras (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Penadecabras (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Penarronda",
      "provinciaid": 33
    },
    {
      "cp": 33549,
      "nombre": "Pendas",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Pende",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Pendiz, La",
      "provinciaid": 33
    },
    {
      "cp": 33997,
      "nombre": "Pendones",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Pendosen",
      "provinciaid": 33
    },
    {
      "cp": 33598,
      "nombre": "Pendueles",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Peneda",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Penedela",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Penela",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Penellada",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Penles",
      "provinciaid": 33
    },
    {
      "cp": 33720,
      "nombre": "Penouta (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Penouta (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Pentanes",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Penzol",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "PeÑa (villabona-llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "PeÑa Corvera",
      "provinciaid": 33
    },
    {
      "cp": 33650,
      "nombre": "PeÑa Del Cuervo",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "PeÑa Rubia",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "PeÑa, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "PeÑa, La (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33426,
      "nombre": "PeÑa, La (bonielles - Llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "PeÑa, La (la Espina)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "PeÑa, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "PeÑa, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "PeÑa, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "PeÑacabranes",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "PeÑaferruz",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "PeÑaflor",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "PeÑafolgueros",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "PeÑafuente",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "PeÑafurada",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "PeÑallonga",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "PeÑanes",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "PeÑanora",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "PeÑaotiello",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "PeÑarey",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "PeÑas (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "PeÑas (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "PeÑas (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "PeÑaseita",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "PeÑatejera",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "PeÑaullan",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "PeÑedo, El",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "PeÑella",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "PeÑeo",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "PeÑerudes",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "PeÑon, El",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "PeÑona, La",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "PeÑueco",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "PeÑule",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Peon",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Pepin",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Perabeles",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Peral, El (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Peral, La (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Peral, La (noreÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Peral, La (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Peral, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Peral, La (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Peral, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Peraleda",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Perallonga",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Peran",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Perandones",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Perasente",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Perdigueiros",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Perdones, Pueblo",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Perecil",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Pereda",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Pereda (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Pereda (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Pereda (las Segadas)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Pereda De SangoÑedo",
      "provinciaid": 33
    },
    {
      "cp": 33509,
      "nombre": "Pereda, La (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Pereda, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Pereda, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Pereda, Las (regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Peredal",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Peredi",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Pereira",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Pereiral",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Pereiro (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Pereo, El",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Pereras",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Perezal",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Peridiella, La",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Peridiello",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Perio",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Perlada",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Perlavia",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Perlin",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Perlleces",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Perlora",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Perluces",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Perlunes",
      "provinciaid": 33
    },
    {
      "cp": 33327,
      "nombre": "Pernus",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "PeroÑo",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Pertiga, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33118,
      "nombre": "PerueÑo",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "Perujal",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Perulleira",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Peruyal (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Peruyal (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "Peruyal (entralgo-laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Peruyal (tiraÑa-laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Peruyal (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Peruyeda",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Peruyera (albandi-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Peruyera (carrio - CarreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Peruyera (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Peruyera (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Peruyeres",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Peruyero (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Peruyero (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Peruyes (c. Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Pervaca",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Pervera",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Pervis",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Perzanas",
      "provinciaid": 33
    },
    {
      "cp": 33591,
      "nombre": "Pesa De Pria",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Pescal, La (cangas Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Pescaredo",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Pesgana",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Pesoz",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Pesquerin",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Pevidal (barros-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Pevidal (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Pevidal, El (castrillon), Pueblo",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Pevidal, El (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Pevidal, El (salas",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Pianton",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Picalgallo",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Picaloredo",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Picaroso",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Pico, El (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Pico, El (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Picola ViÑa",
      "provinciaid": 33
    },
    {
      "cp": 33696,
      "nombre": "Picolanza",
      "provinciaid": 33
    },
    {
      "cp": 33592,
      "nombre": "Picones",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Picosa",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Picu Castiellu (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "Picun",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Pie De La Sierra",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Piedeloro",
      "provinciaid": 33
    },
    {
      "cp": 33594,
      "nombre": "Piedra (posada Llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33430,
      "nombre": "Piedra, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Piedra, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Piedraceda",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Piedrafita (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Piedrafita (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Piedrafita (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Piedrafita (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Piedrafita (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Piedrafita (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Piedrafita (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Piedralonga",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Piedramenuda",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Piedras Blancas",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Piedras Negras",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Piedratecha",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Pielagos",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Piezas, Las (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33842,
      "nombre": "Pigueces",
      "provinciaid": 33
    },
    {
      "cp": 33842,
      "nombre": "PigueÑa",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Pila, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Piles (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Pillarno",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "PiloÑeta",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Pilotuerto",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Pimiango",
      "provinciaid": 33
    },
    {
      "cp": 33800,
      "nombre": "Pinar",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Pindal, El",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Pineda",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Pinedo",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Pinga, La",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Piniella (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Piniella (p.laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Piniella (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Piniella (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Piniella (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Pino, El (cardo-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Pino, El (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Pino, El (coro-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Pino, El (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Pino, El (lieres)",
      "provinciaid": 33
    },
    {
      "cp": 33687,
      "nombre": "Pino, El (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Pintoria",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Pintos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Pintueles",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "PiÑares",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "PiÑedo",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "PiÑeira (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "PiÑeira (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "PiÑeiro",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "PiÑera (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "PiÑera (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "PiÑera (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "PiÑera (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33425,
      "nombre": "PiÑera (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "PiÑera (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33174,
      "nombre": "PiÑera (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "PiÑera De Barredo",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "PiÑera De Morcin",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "PiÑera De San Felix",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "PiÑera, La (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "PiÑera, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "PiÑera, La (gozon), Pueblo",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "PiÑera, La (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "PiÑera, La (sevares)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "PiÑera, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "PiÑeras, Las",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "PiÑeres De Aller",
      "provinciaid": 33
    },
    {
      "cp": 33591,
      "nombre": "PiÑeres De Pria",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "PiÑeros, Los",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "PiÑole",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Piorno",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Pipe (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Pipe (p. Blancas)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Piperona, La",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Piqera (nievares-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Piqera, La (camoca-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Piqera, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Piqera, La (rozadas-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Piquera (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Piquera, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Piquera, La (villavicio)",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Piqueros (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Piqule",
      "provinciaid": 33
    },
    {
      "cp": 33327,
      "nombre": "Pis",
      "provinciaid": 33
    },
    {
      "cp": 33154,
      "nombre": "Pito, El",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "Pivierda",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Pladano",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Planadal, El",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Planadera, La",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Plano, El (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Planta, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Plantao, El (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Plata, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Plaza, La (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Plazuela",
      "provinciaid": 33
    },
    {
      "cp": 33691,
      "nombre": "Poago (veriÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Poceira",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Poceiro, El",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Podes",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Pojos",
      "provinciaid": 33
    },
    {
      "cp": 33880,
      "nombre": "Pola De Allande",
      "provinciaid": 33
    },
    {
      "cp": 33980,
      "nombre": "Pola De Laviana",
      "provinciaid": 33
    },
    {
      "cp": 33630,
      "nombre": "Pola De Lena",
      "provinciaid": 33
    },
    {
      "cp": 33510,
      "nombre": "Pola De Siero",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Pola De Somiedo",
      "provinciaid": 33
    },
    {
      "cp": 33687,
      "nombre": "Pola Del Pino",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Pola, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Poladura (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Poladura (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Poladura (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33581,
      "nombre": "Polanava",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Polavieja",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Polea",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Poles",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "Poli",
      "provinciaid": 33
    },
    {
      "cp": 33428,
      "nombre": "Poligono Industrial De Asipo",
      "provinciaid": 33
    },
    {
      "cp": 33993,
      "nombre": "Polina, La",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Polio",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Polledo (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Polledo (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Polledo (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Polledo,el  (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Pomar (santa Cruz De Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Pomarada (pola De Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Pomarada (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "Pondal",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Pontarron",
      "provinciaid": 33
    },
    {
      "cp": 33428,
      "nombre": "Ponte (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Ponte (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Ponte (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Ponteo (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Ponteo (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Pontica",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Ponticiella",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Pontiga (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Pontigas",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Pontigas, Las (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Pontigo (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Pontigo, El (amieva)",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Pontigon, El (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Ponton (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Ponton (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Ponton (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Ponton (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Ponton De Villa (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Ponton, El (lada - Langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Ponton, El (solis - Corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Pontona (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Pontones, Los",
      "provinciaid": 33
    },
    {
      "cp": 33627,
      "nombre": "Pontones, Los (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Pontones, Los (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Pontones, Los (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Pontraviza",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Poo De Cabrales",
      "provinciaid": 33
    },
    {
      "cp": 33509,
      "nombre": "Poo De Llanes",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Porceyo",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "Porcia",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Porciles (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Porciles (la Espina)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Porciles (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Porciles (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Porcio",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "PoreÑo",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Porley",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Porqueira",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Porquera, La",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Porqueras, Las",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Porqueriza",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Porreo",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Porriman",
      "provinciaid": 33
    },
    {
      "cp": 33509,
      "nombre": "Porrua",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Portazgo, El (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Portazgo, El (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Portiella (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Portiella (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Portiella, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33509,
      "nombre": "Portiella, La (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Portillas, Las (p.laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Portillo, El",
      "provinciaid": 33
    },
    {
      "cp": 33796,
      "nombre": "Porto",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Porzun",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Posada (candas)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Posada (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Posada (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Posada De Besullo",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Posada De Llanera",
      "provinciaid": 33
    },
    {
      "cp": 33594,
      "nombre": "Posada De Llanes",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Posada De Rengos",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Posadoiro (la Espina)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Posadoiro (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Posadoiro (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Posadorio",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Potaxa, La",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Pousadoiro (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Poya",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Pozanco",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Pozo Cordero",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Pozo De La Granda",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Pozo, El",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Pozobal",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Pozon (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Pozos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Pozoval",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Prada (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Prada (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Prada (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Pradias",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Pradiella",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Pradiquin",
      "provinciaid": 33
    },
    {
      "cp": 33344,
      "nombre": "Prado (caravia)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Prado (san Tirso De Abres)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Prado (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Prado (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Prado Reguero",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Prado Velorto",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Prado, El (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Pradon (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Pradon (seana - Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Pradon, El (la PeÑa - Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Pradon, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "Pradon, El (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Pradon, El (valdecuna - Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Pradorredondo",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Prados De Copian",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Prahua (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Prahua (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "Pramaro",
      "provinciaid": 33
    },
    {
      "cp": 33120,
      "nombre": "Pravia",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Pravia (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Precendi",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Prelo",
      "provinciaid": 33
    },
    {
      "cp": 33174,
      "nombre": "PremaÑa",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Premio",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "PremoÑo",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Prendes",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Prendones",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Presa (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Presa, La (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Presamo",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Presnas (p.allande)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Presno",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Prestin",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Preximir",
      "provinciaid": 33
    },
    {
      "cp": 33591,
      "nombre": "Pria",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Pria, La",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Priandi",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "PriaÑes",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Prida, La",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Priede",
      "provinciaid": 33
    },
    {
      "cp": 33994,
      "nombre": "Prieres",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Priero",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Priesca",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Priesca (san Salvador)",
      "provinciaid": 33
    },
    {
      "cp": 33196,
      "nombre": "Prietos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Primayor",
      "provinciaid": 33
    },
    {
      "cp": 33174,
      "nombre": "Priorio (san Juan De)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Prioto",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Proacina",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Proaza",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Prohida (degaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Prohida, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Pronga",
      "provinciaid": 33
    },
    {
      "cp": 33675,
      "nombre": "Provia, La (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Provia, La (piÑeres)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Provo, El",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Prubiz",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Pruida",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Prunadiella",
      "provinciaid": 33
    },
    {
      "cp": 33585,
      "nombre": "Prunales",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Pruneda",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "Pruvia (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Pruvia, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Pueblo (nievares-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Pueblo De Rengos",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Pueblo, El",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Pueblo, El (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Pueblo, El (piÑeres-aller)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Pueblo, El (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Puelles",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Puente (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Puente Alta",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Puente Arroes",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Puente De La Pereda",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Puente De Linares",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Puente De Los Fierros",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Puente De PeÑaflor",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Puente De Seaza",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "Puente Del Arco",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Puente Del Infierno",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Puente Humero",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Puente La Luisa",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Puente Miera",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Puente Nuevo",
      "provinciaid": 33
    },
    {
      "cp": 33995,
      "nombre": "Puente Piedra",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Puente TuÑa",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Puente Vieja",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Puente Villandio",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Puente, El (parres)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Puente, El (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Puente, La (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Puente, La (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Puente, La (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Puentecastro",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Puentenueva",
      "provinciaid": 33
    },
    {
      "cp": 33692,
      "nombre": "Puentes, Las",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Puentevega",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Puenticiella",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Puerca, La",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Puerma",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Puerta",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Puerta, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Puertas De Cabrales",
      "provinciaid": 33
    },
    {
      "cp": 33597,
      "nombre": "Puertas De Vidiago",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Puerto (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33790,
      "nombre": "Puerto De Vega",
      "provinciaid": 33
    },
    {
      "cp": 33688,
      "nombre": "Puerto San Isidro (asturias)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Puerto, El",
      "provinciaid": 33
    },
    {
      "cp": 33140,
      "nombre": "Puerto-fuso",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Pulide (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Pumar (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Pumar (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Pumar De Abad",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Pumar De Las MontaÑas",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Pumar, El (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Pumar, El (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Pumarabin, El",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Pumarabule",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Pumarada",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Pumarada (pola De Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Pumardongo (la Pereda)",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Pumardongo (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Pumarega, La",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Pumares (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33188,
      "nombre": "Pumares (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33138,
      "nombre": "Pumariega, La (muros)",
      "provinciaid": 33
    },
    {
      "cp": 33344,
      "nombre": "Pumarin (caravia Alta)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Pumarin (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Pumarin (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Pumarin (figaredo)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Pumarin (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Pumarin (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Pumarin, El (el Berron)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Pumaron",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Pumeda (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Puntaras",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "PuÑide",
      "provinciaid": 33
    },
    {
      "cp": 33596,
      "nombre": "Puron",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Pusallana",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Quejo",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Quemadero",
      "provinciaid": 33
    },
    {
      "cp": 33789,
      "nombre": "Queruas",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Ques",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "QuiloÑo",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Quinta (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Quinta, De La, Camino",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Quinta, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Quinta, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Quintalonga",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Quintana (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Quintana (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Quintana (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Quintana (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Quintana (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Quintana (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Quintana (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Quintana (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Quintana (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33594,
      "nombre": "Quintana (posada Llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Quintana (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Quintana (priesca - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Quintana (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Quintana (trubia)",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Quintana Dionisio  (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Quintana Pedro",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Quintana, La (arguero - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Quintana, La (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33885,
      "nombre": "Quintana, La (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Quintana, La (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "Quintanal (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33660,
      "nombre": "Quintanal (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Quintanal (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Quintanales, Los (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Quintanas (p.laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Quintanas, Las (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Quintanas, Las (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33650,
      "nombre": "Quintanas, Las (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Quintanas, Las (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Quintaniella (t.veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Quintaniella (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Quintaniellas (ribera De Arriba)",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Quintela",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Quintes",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "QuintoÑos",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Quintueles",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Quinzanas",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Rabadiello",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Rabaldana, La",
      "provinciaid": 33
    },
    {
      "cp": 33716,
      "nombre": "Rabeiron",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Rabias, Las",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "Rabote",
      "provinciaid": 33
    },
    {
      "cp": 33325,
      "nombre": "Raicedo (colunga)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Raicedo (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Raices Nuevo (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Raitan",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Raiz, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33594,
      "nombre": "Rales (posada Llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "Rales (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Rali",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Ralla",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Rambla, La",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Ramera De Abajo, La",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Ramera, La",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Rano",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Ranon",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Ranon (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33729,
      "nombre": "Ransal",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "RaÑadoiro",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "RaÑeces (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "RaÑeces (las Regueras)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "RaÑeces De San Cristobal",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "RaÑeces De Sierra",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Raposa La (sama-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Raposa, La (la Venta-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Raposera (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Raposo (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Rasa, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Rasa, La (p.laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Rasa, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Rasa, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Rasa, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Rason, El",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Rato",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Rayo, El",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Reanes",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Reboledo",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Rebolla, La",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Rebollada (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Rebollada (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Rebollada (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Rebollada (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Rebollada (limanes)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Rebollada (navelgas-tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Rebollada (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33842,
      "nombre": "Rebollada (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Rebollada, La (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Rebollada, La (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Rebollada, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Rebollada, La (entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Rebollada, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Rebollada, La (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "Rebollada, La (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Rebollada, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "Rebollada, La (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Rebollal (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Rebollal (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Rebollal (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Rebollal, El (entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Rebollal, El (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Rebollar (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Rebollar (degaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Rebollar (loriana-oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33140,
      "nombre": "Rebollar (ribera De Arriba)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Rebollar (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Rebollar, El (lieres-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Rebollar, El (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Rebollares",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Rebollas",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Rebollin",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Rebollo (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Rebollo (santa Rosa-mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Rebollo, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Rebollo, El (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Rebollo, El (ujo)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Rebollos, Los (entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Rebollosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Rebolloso",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Reboria (serin)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Reboria, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33138,
      "nombre": "Reborio (muros De Nalon)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Recimuro",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Reconco (aboÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "Reconco (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Reconco (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Reconco (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Reconco (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Reconco, El (lieres-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33628,
      "nombre": "Reconcos (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Reconcos (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Recorba",
      "provinciaid": 33
    },
    {
      "cp": 33970,
      "nombre": "Recortina",
      "provinciaid": 33
    },
    {
      "cp": 33163,
      "nombre": "Rectoria, La (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Recuevo",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Recula, La",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Redal, El",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Redespines",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Redondina",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Redondo (pola De Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Redondo, El",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Redral",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Refojos",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Refozones",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Refurao",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Regidorio",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Regla De Cibea",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Regla De Naviego",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Regla De Perandones",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Regodeseves",
      "provinciaid": 33
    },
    {
      "cp": 33716,
      "nombre": "Reguera (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Reguera (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Reguera De Cabo",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Reguera, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Reguera, La (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Regueral (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Regueral, El (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Reguerin",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Reguerinas",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Reguero (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Reguero Llerin",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Reguero, El (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Regueron (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Reguerona, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Reigada, La (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Reigada, La (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Reigada, La (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Reigosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Reigoto (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Reimeses",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Reiriz",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Rellan (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Rellan (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Rellanos",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Rellayo",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Rellon (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Relloso (navelgas-tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Remedio, El",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "Remoria",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Ren, La",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Rendaliego",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Renueva",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Repedroso",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Repipe",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Repitaneo",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Repolles",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Requejado",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Requejo (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Requejo (lena)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Requejo (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Requejo (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Requejo (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Requejo (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Requejo (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Requejo (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33600,
      "nombre": "Requintin, El",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Resenche",
      "provinciaid": 33
    },
    {
      "cp": 33157,
      "nombre": "Resiellas",
      "provinciaid": 33
    },
    {
      "cp": 33158,
      "nombre": "Resillinas",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Respigo, El",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Respinedo",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "RespiÑo",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Restiello",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Restinga",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Restrepo",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Retiro (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Retiro, El (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Retorno",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Retrulles",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Retrunal",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Retuertas",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Retumes",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Revallinas",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Revenga, La",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Revoqueira",
      "provinciaid": 33
    },
    {
      "cp": 33188,
      "nombre": "Revuelta Del Coche",
      "provinciaid": 33
    },
    {
      "cp": 33930,
      "nombre": "Rexiella",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Rey, El (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Reyan",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Reznera",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "RiaÑo (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "RiaÑo (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Riba, La",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Ribadebajo",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Ribadecima",
      "provinciaid": 33
    },
    {
      "cp": 33560,
      "nombre": "Ribadesella",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Ribalagua",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Ribanceo",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Ribao",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Ribayon",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Riberas (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Ribon",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Ribono",
      "provinciaid": 33
    },
    {
      "cp": 33987,
      "nombre": "Ribota",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Rica",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Ricabada",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Ricabo (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Ricabo (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Ricabo (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Ricarion, El",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Ridera",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Riega",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Riega Miguel",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Riega, La (bedriÑana - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Riega, La (camoca - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Riegalatabla",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Riego (aboÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33597,
      "nombre": "Riego (vidiago)",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "Riego De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "Riego De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Riello",
      "provinciaid": 33
    },
    {
      "cp": 33592,
      "nombre": "Riensena",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Riera (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Riera (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Riera De Covadonga, La",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Riera De Somiedo, La",
      "provinciaid": 33
    },
    {
      "cp": 33324,
      "nombre": "Riera, La (colunga)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Riera, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Riestro",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Rimada",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Rina, La",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Rincon",
      "provinciaid": 33
    },
    {
      "cp": 33681,
      "nombre": "Rio Aller",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Rio Cabo",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Rio De Seares",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Rio De Villar",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Rio Villar",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Rio, El (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Rio, El (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33756,
      "nombre": "Riocabo",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Riocaliente (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Riocaliente (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Riocastiello",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Rioceral",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Riocerezaledo",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Riocuevas",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Riodecoba",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Riodeporcos",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Riofabar",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Riofelle",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Riolapiedra",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Riolosbueyes",
      "provinciaid": 33
    },
    {
      "cp": 33681,
      "nombre": "RiomaÑon",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Riomayor (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Riomolin",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Rionda (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Rionda (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Rionda, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Riopinoso",
      "provinciaid": 33
    },
    {
      "cp": 33687,
      "nombre": "Rioseco (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Rioseco (baldornon-gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Rioseco (caldones-gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33508,
      "nombre": "Rioseco (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Rioseco (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Rioseco (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Rioseco (vega - Gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33993,
      "nombre": "Rioseco De Sobrescobio",
      "provinciaid": 33
    },
    {
      "cp": 33628,
      "nombre": "Riospasos",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Riosuaria",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Riotorno (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Rioturbio",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Riovena",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Riparape",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Riquela",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Rivero (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Rivero (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Rivero (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Riviella (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Riviellas (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Robellada, La",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Robes",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Robledal (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Robledo (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Robledo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Robledo (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "Robledo (lugo Llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Robledo (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Robledo (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33842,
      "nombre": "Robledo (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Robledo De Anayo",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Robledo De Biforco",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Robledo De Cereceda",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Robledo De Obona",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Robledo De San Cristobal",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Robledo De Tainas",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Robriguero",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Rocabo",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Roces (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Roces (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Roces (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Roces, Las (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Rociella",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Roda (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Roda, La (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Roda, La (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Rodaco",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Rodada, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33196,
      "nombre": "Rodada, La (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Rodavigo",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Rodical, El",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Rodiella",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Rodil",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Rodiles (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Rodiles (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Rodiles (perlora)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Rodiles (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "Rodriga, La",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Roiles (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Roiles (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Roiles (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Rollo, El",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Romadoiro",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Romadonga",
      "provinciaid": 33
    },
    {
      "cp": 33757,
      "nombre": "Romaelle De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Romia De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Romia De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "Romillin",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "Romillo",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Ron",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Ronda, La",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Ronda, La (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33796,
      "nombre": "Ronda, La (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Ronda, La (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Rondeira",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Rondera",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Ronderina",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Rondero",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Ronderos",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Rondiella (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Rondiella (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Ronzon (p. Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Ronzon (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Ronzon, El (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "RoÑada, La",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Rosamiana",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Rosellon (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Rosellon, El (entrego, El)",
      "provinciaid": 33
    },
    {
      "cp": 33344,
      "nombre": "Rotella (caravia Alta)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Rotella (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Rotella De Bedavo",
      "provinciaid": 33
    },
    {
      "cp": 33945,
      "nombre": "Rotella, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Rotella, La (latores)",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Rotella, La (valdesoto-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Rotellin (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Rotura, La",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Roxil",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Roza, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Roza, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Roza, La (lieres)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Roza, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Roza, La (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Roza, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Rozacagil (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Rozada",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Rozadas (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33729,
      "nombre": "Rozadas (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Rozadas (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Rozadas (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Rozadas (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Rozadas De Bazuelo",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Rozadas De La PeÑa",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Rozadela",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Rozadiella (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Rozadiella (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Rozado",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Rozaflor",
      "provinciaid": 33
    },
    {
      "cp": 33576,
      "nombre": "Rozagas",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Rozallana",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Rozapanera",
      "provinciaid": 33
    },
    {
      "cp": 33725,
      "nombre": "Rozas (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Rozas (cangas Del Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Rozas De Villanueva, Las",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Rozas, Las (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Rozavillar",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Rozona, La",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "Rozos",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Rozos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Rubial (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "Rubial (doriga - Salas)",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Rubial (santiago De La Barca-salas)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Rubiano",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Rubias, Las",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Rubieira",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Rubieiro",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Rubiera (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Rubiera, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Rubieros",
      "provinciaid": 33
    },
    {
      "cp": 33126,
      "nombre": "Rubines",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Rucio, El (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Ruciu El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Rueda",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Ruedes",
      "provinciaid": 33
    },
    {
      "cp": 33576,
      "nombre": "Ruenes",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Rumiada, La",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Sabadell De Navelgas",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Sabadell De Troncedo",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "Sabadille",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Sabariz",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Sabarriona",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Sabledal",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Sablera, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Sabrera, La (ver Callejero De Aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Sabudiello",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Sabugo (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Sabugo (otur)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Saburcio",
      "provinciaid": 33
    },
    {
      "cp": 33946,
      "nombre": "Sagosa",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Sala, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Salamir",
      "provinciaid": 33
    },
    {
      "cp": 33860,
      "nombre": "Salas",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Salas (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33555,
      "nombre": "Salce",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Salcedo (barres)",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Salcedo (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Salcedo (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Salcedo (p. Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Salcedo (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Salcedo (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Salcido",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "SaldaÑa",
      "provinciaid": 33
    },
    {
      "cp": 33327,
      "nombre": "Sales",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Salgueiras",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Salguera, La",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Salguero",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Salias",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Saliencia",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Salientes",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Salinas (castrllon)(ver Callejero De Aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Salines (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "Sallosas",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Salvador",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Sama De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Sama De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Sama De Grado",
      "provinciaid": 33
    },
    {
      "cp": 33900,
      "nombre": "Sama De Langreo",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Samagan",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Samalea",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Samblismo",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Sames",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Sampol",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "San Adriano (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "San Adriano (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "San Adriano (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "San Andres (arriondas)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "San Andres (noreÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33692,
      "nombre": "San Andres (puente Fierros)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "San Andres (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "San Andres (san Tirso De Abres)",
      "provinciaid": 33
    },
    {
      "cp": 33993,
      "nombre": "San Andres (sobrescobio)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "San Andres (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "San Andres (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "San Andres (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "San Andres De Tacones",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "San Andres De Trubia",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "San Antolin (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "San Antolin De Ibias",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "San Antonio (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "San Antonio (piÑeres - Aller)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "San Antonio (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "San Antonio De Relamiego",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "San Bartolome",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "San Bartolome De Miranda",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "San Benigno",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "San Bernardo",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "San Blas",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "San Cipriano De Pando",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "San Claudio",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "San Clemente (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "San Cosme (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "San Cosme De Llerandi",
      "provinciaid": 33
    },
    {
      "cp": 33846,
      "nombre": "San Cristobal (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "San Cristobal (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "San Cristobal (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "San Cristobal (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "San Cristobal (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33789,
      "nombre": "San Cristobal (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "San Cristobal (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "San Cristobal (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "San Cristobal (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "San Cristobal (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33425,
      "nombre": "San Cucao",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "San Damias (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33885,
      "nombre": "San Emiliano",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "San Esteban (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "San Esteban (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "San Esteban (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "San Esteban (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "San Esteban (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "San Esteban (illano)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "San Esteban (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33599,
      "nombre": "San Esteban (p. Baja)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "San Esteban (villavaler)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "San Esteban De Las Cruces",
      "provinciaid": 33
    },
    {
      "cp": 33347,
      "nombre": "San Esteban De Leces",
      "provinciaid": 33
    },
    {
      "cp": 33130,
      "nombre": "San Esteban De Pravia",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "San Esteban De Relamiego",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "San Facundo",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "San Felix (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "San Felix De MontaÑas",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "San Feliz",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "San Feliz (arguero-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "San Feliz (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "San Feliz (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33326,
      "nombre": "San Feliz (rales-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "San Francisco",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "San Frechoso (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "San Frechoso (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "San Fructuoso",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "San Ignacio",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "San Jorge De Heres",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "San Juan (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "San Juan De Amieva",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "San Juan De BeleÑo",
      "provinciaid": 33
    },
    {
      "cp": 33328,
      "nombre": "San Juan De Duz",
      "provinciaid": 33
    },
    {
      "cp": 33125,
      "nombre": "San Juan De La Arena",
      "provinciaid": 33
    },
    {
      "cp": 33417,
      "nombre": "San Juan De Nieva",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "San Juan De Parres",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "San Juan De PiÑera",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "San Juan De Prendones",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "San Juan De VillapaÑada",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "San Juan Del Monte",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "San Juan Del Obispo",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "San Julian (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33737,
      "nombre": "San Julian (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "San Julian (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "San Julian (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "San Julian De Arbas",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "San Julian De Bimenes",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "San Justo (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "San Justo (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "San Justo (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "San Justo (villuir - Luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "San Justo De Doriga",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "San Lazaro De Paniceres",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "San Luis",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "San Mamed",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "San Mames",
      "provinciaid": 33
    },
    {
      "cp": 33858,
      "nombre": "San Marcelo",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "San Martin",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "San Martin (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "San Martin (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "San Martin (proaza)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "San Martin (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "San Martin (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "San Martin De Bada",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "San Martin De Beduledo",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "San Martin De Bimeda",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "San Martin De Eiros",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "San Martin De Forcayado",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "San Martin De Grazanes",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "San Martin De Gurulles",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "San Martin De Huerces",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "San Martin De Laspra",
      "provinciaid": 33
    },
    {
      "cp": 33846,
      "nombre": "San Martin De Lodon",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "San Martin De LuiÑa",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "San Martin De Miravalles",
      "provinciaid": 33
    },
    {
      "cp": 33839,
      "nombre": "San Martin De Ondes",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "San Martin De Oscos",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "San Martin De Semproniana",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "San Martin De Sierra",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "San Martin De Teverga",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "San Martin De Valledor",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "San Martin De Valles",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "San Martin Del Mar",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "San Martino",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "San Mayor",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "San Miguel (arroes-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "San Miguel (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "San Miguel (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "San Miguel (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "San Miguel (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "San Miguel (tazones - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "San Miguel De Bernueces",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "San Miguel De Eiros",
      "provinciaid": 33
    },
    {
      "cp": 33188,
      "nombre": "San Miguel De La Barreda",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "San Miguel De La Pereda",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "San Miguel De Tejedo",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "San Miguel De Ucio",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "San Miguel Del Rio",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "San Pablo (guimaran - CarreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "San Pablo (prendes - CarreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "San Pedrin",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "San Pedro (anes - Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "San Pedro (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "San Pedro (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33347,
      "nombre": "San Pedro (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "San Pedro (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "San Pedro (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "San Pedro De Agueira",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "San Pedro De Ahio",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "San Pedro De Arbas",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "San Pedro De Barcena",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "San Pedro De Coliema",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "San Pedro De Corias",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "San Pedro De La Ribera",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "San Pedro De Los Burros",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "San Pedro De MontaÑas",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "San Pedro De Navarro",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "San Pedro De Naves",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "San Pedro De Nora",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "San Pedro De Paredes",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "San Pedro De TiraÑa",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "San Pedro De Villoria",
      "provinciaid": 33
    },
    {
      "cp": 33186,
      "nombre": "San Pelayo (el Berron - Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "San Pelayo (el Franco)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "San Pelayo (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "San Pelayo (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "San Pelayo (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "San Pelayo (san Martin De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "San Pelayo (trasona - Corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "San Pelayo (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "San Pelayo De Sexmo",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "San Pelayo De Sienra",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "San Pelayo De Tahona",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "San Rafael",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "San Roman (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "San Roman De Amieva",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "San Roman De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "San Roman De Sariego",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "San Roman PiloÑa",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "San Romano",
      "provinciaid": 33
    },
    {
      "cp": 33900,
      "nombre": "San Roque (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "San Roque (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "San Roque (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "San Roque (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "San Roque (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "San Roque (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33596,
      "nombre": "San Roque Del Acebal",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "San Salvador (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "San Salvador (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "San Salvador (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "San Salvador De Valledor",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "San Saturnino",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "San Sebastian",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "San Sebastian De Morcin",
      "provinciaid": 33
    },
    {
      "cp": 33328,
      "nombre": "San Telmo",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "San Tirso (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "San Tirso (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "San Tirso (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "San Tirso (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "San Tirso De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33196,
      "nombre": "San Torcuato",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "San Vicente (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "San Vicente (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "San Vicente (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "San Vicente (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "San Vicente (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "San Vicente (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Sanabuega",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Sandamias",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Sandiche",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "SangoÑedo",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "SangreÑa",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Sanriella",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Santa Agadea",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Santa Agueda",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Santa Ana (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Santa Ana (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Santa Ana (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "Santa Ana (luanco)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Santa Ana (miranda - Aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Santa Barbara",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Santa Cecilia (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Santa Cecilia (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Santa Coloma (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Santa Colomba",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Santa Comba (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Santa Cristina (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Santa Cristina (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Santa Cruz (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Santa Cruz De Llanera",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Santa Cruz De Mieres",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Santa Eufemia (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Santa Eufemia (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Santa Eugenia (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Santa Eulalia (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Santa Eulalia (candas)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Santa Eulalia (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Santa Eulalia (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "Santa Eulalia (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Santa Eulalia (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Santa Eulalia (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Santa Eulalia (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Santa Eulalia De Cabranes",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Santa Eulalia De Carranzo",
      "provinciaid": 33
    },
    {
      "cp": 33669,
      "nombre": "Santa Eulalia De Manzaneda",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Santa Eulalia De MiÑo",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Santa Eulalia De Morcin",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Santa Eulalia De Oscos",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Santa Eulalia De Tineo",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Santa Eulalia De Vigil",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Santa Gadea",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Santa Leocadia",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Santa Lucia (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33736,
      "nombre": "Santa Maria (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33886,
      "nombre": "Santa Maria De Lago",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Santa Maria De Obanca",
      "provinciaid": 33
    },
    {
      "cp": 33112,
      "nombre": "Santa Maria De TraspeÑa",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Santa Maria De Villandas",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Santa Maria Del Mar",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Santa Marina (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Santa Marina (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33158,
      "nombre": "Santa Marina (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Santa Marina (pajares)",
      "provinciaid": 33
    },
    {
      "cp": 33790,
      "nombre": "Santa Marina (puerto Vega)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Santa Marina (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Santa Marina (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Santa Marina (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Santa Marina De Quiros",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Santa Marina Piedramuelle",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Santa Marta",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Santa Mera",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Santa Olaya",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "Santa Rosa (lugo Llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Santa Rosa (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Santalla",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Sante (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Santelos (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Santi",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Santiago",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Santiago (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Santiago (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Santiago De Ambiedes",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Santiago De Arenas",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Santiago De Cerredo",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Santiago De Hermo",
      "provinciaid": 33
    },
    {
      "cp": 33865,
      "nombre": "Santiago De La Barca",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Santiago De PeÑas",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Santiago De Sierra",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Santiago Del Monte",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Santianes (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Santianes (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33660,
      "nombre": "Santianes (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Santianes (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Santianes (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Santianes (sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Santianes (serin)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Santianes (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Santianes (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Santianes (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Santianes De Molenes",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Santianes De Ola",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Santianes De Tornin",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "Santianes Del Agua",
      "provinciaid": 33
    },
    {
      "cp": 33540,
      "nombre": "Santianes Del Terron",
      "provinciaid": 33
    },
    {
      "cp": 33680,
      "nombre": "SantibaÑez De La Fuente",
      "provinciaid": 33
    },
    {
      "cp": 33676,
      "nombre": "SantibaÑez De Murias",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Santillan",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Santiso",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Santo Adriano Del Monte",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Santo Dolfo",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Santo Domingo",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Santo Emiliano",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Santo Medero",
      "provinciaid": 33
    },
    {
      "cp": 33678,
      "nombre": "Santo Tomas (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Santo Tomas (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Santo Tomas De Collia",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Santo Tomas De Priandi",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Santoseso",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "SantoveÑa (amieva)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "SantueÑa (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33850,
      "nombre": "SantueÑina (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Santullano (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Santullano (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33842,
      "nombre": "Santullano (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Santullano (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Santullano De Las Regueras",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Santullano De Mieres",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Santurio",
      "provinciaid": 33
    },
    {
      "cp": 33736,
      "nombre": "Sanzo",
      "provinciaid": 33
    },
    {
      "cp": 33787,
      "nombre": "Sapinas",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Sarabia",
      "provinciaid": 33
    },
    {
      "cp": 33988,
      "nombre": "Sarambiello",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Sarceda (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Sarceda (san Martin De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Sarceda (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "Sardalla",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Sardeda",
      "provinciaid": 33
    },
    {
      "cp": 33567,
      "nombre": "Sardedo",
      "provinciaid": 33
    },
    {
      "cp": 33173,
      "nombre": "Sardin",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Sariego (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Sarriou",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Sarzol",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Saus",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Sayedo",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Seana",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Seana, Carretera",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Seares",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Seaza",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Sebades",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Sebran",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Sebrayo",
      "provinciaid": 33
    },
    {
      "cp": 33567,
      "nombre": "SebreÑo",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Seca Del Agua, La",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Secada, La",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Secadiella",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Segada",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Segadas, Las (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Segadas, Las (ribera De Arriba)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Segredal",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Seguenco",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Seijas",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Seijo, El",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Seladaloura",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Selce",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Selgas",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Seli",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "SellaÑo",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Sello",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Sellon (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33888,
      "nombre": "Sellon, El (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Selorio",
      "provinciaid": 33
    },
    {
      "cp": 33845,
      "nombre": "Selviella",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Semellon De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Semellon De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Sena",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Seoane",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Sequeiro",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Sequeiros",
      "provinciaid": 33
    },
    {
      "cp": 33736,
      "nombre": "Seran",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Serandi",
      "provinciaid": 33
    },
    {
      "cp": 33726,
      "nombre": "Serandinas",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Serantes (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Serantes (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Serin",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Seroiro",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Serpiedo",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Serrapio",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Sertera, La",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Sesnendi",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Sestiello",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Sestorraso",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Setienes",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Sevares",
      "provinciaid": 33
    },
    {
      "cp": 33424,
      "nombre": "Severies",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Sevil",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Sexto Piso De Carbones",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Siejo",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Sienra (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Sienra (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33582,
      "nombre": "Sienra (ceceda)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Sienra (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33660,
      "nombre": "Sienra (olloniego)",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Sienra, La (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Sienra, La (la Magdalena - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Sienra, La (tornon - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Sieres",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Siero (cangas Del Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33992,
      "nombre": "Sierra (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Sierra De CastaÑedo",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Sierra, La",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Sierra, La (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Sierra, La (candas - CarreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Sierra, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Sierra, La (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Sierra, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Sierra, La (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Sierra, La (perlora - CarreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Sierrallana",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Sietes",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Sillaso",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Silva (careÑes-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Silva (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Silva (villaverde - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Silvallana (grandas Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Silvallana (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Silvallana (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Silvamayor",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Silvarelle",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Silvarronda",
      "provinciaid": 33
    },
    {
      "cp": 33591,
      "nombre": "Silviella De Pria",
      "provinciaid": 33
    },
    {
      "cp": 33727,
      "nombre": "Silvon",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "Silvota (llanera-pol. Industrial)",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Silvota (trasona)",
      "provinciaid": 33
    },
    {
      "cp": 33586,
      "nombre": "Sinariega",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Sinariego",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Singla",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Sinjania, La",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "SiÑeriz",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Siones",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Sirviella",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Sisiello",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Sisterna",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "So La Iglesia (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33596,
      "nombre": "Soberron",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Sobrado",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Sobre Las Vegas",
      "provinciaid": 33
    },
    {
      "cp": 33996,
      "nombre": "Sobrecastillo",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Sobrefoz",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Sobrelavega",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Sobrepiedra",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Sobrerriba",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "Sobrevega",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Sobrevilla",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Sobrobio",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Socarral",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Socarrera",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Socavon",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Socolinas",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Sograndio (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Sograndio (proaza)",
      "provinciaid": 33
    },
    {
      "cp": 33790,
      "nombre": "Soirana",
      "provinciaid": 33
    },
    {
      "cp": 33187,
      "nombre": "Solad",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Soladaloura",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Solalonga",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Solano (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Solano (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Solanos",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Solares (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Solares (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Solascampas",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Solis",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Solmayor",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Solvay",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Soma (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Soma La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33139,
      "nombre": "Somado",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Sombredo",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Someron, El",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Somines",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Somorto",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Sonande",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "SopeÑa",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "SopeÑas",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Soqueto",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Sordan, El",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Sorriba",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Sorribas (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Sorribas (pola De Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Sorribas (sevares)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Sorribas (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Sorribero",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Sorriego",
      "provinciaid": 33
    },
    {
      "cp": 33580,
      "nombre": "Sorrobin",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Sorrodiles",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Sospelaya",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Sota (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Sota, La",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "SoterraÑa",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Sotiello (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Sotiello (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "Sotiello (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Sotiello (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33537,
      "nombre": "Soto (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33567,
      "nombre": "Soto (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Soto (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33993,
      "nombre": "Soto De Agues",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Soto De Aller",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Soto De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Soto De Cangas",
      "provinciaid": 33
    },
    {
      "cp": 33996,
      "nombre": "Soto De Caso",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Soto De Cibuyo",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Soto De Dego",
      "provinciaid": 33
    },
    {
      "cp": 33585,
      "nombre": "Soto De DueÑas",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Soto De La Barca",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Soto De La Ensartal",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Soto De Las Regueras",
      "provinciaid": 33
    },
    {
      "cp": 33423,
      "nombre": "Soto De Llanera, Urbanizacion",
      "provinciaid": 33
    },
    {
      "cp": 33992,
      "nombre": "Soto De Lorio",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Soto De Los Infantes",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Soto De Los Molinos",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "Soto De LuiÑa",
      "provinciaid": 33
    },
    {
      "cp": 33696,
      "nombre": "Soto De Rey",
      "provinciaid": 33
    },
    {
      "cp": 33172,
      "nombre": "Soto De Ribera",
      "provinciaid": 33
    },
    {
      "cp": 33126,
      "nombre": "Soto Del Barco",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Soto, El (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33940,
      "nombre": "Soton",
      "provinciaid": 33
    },
    {
      "cp": 33554,
      "nombre": "Sotres",
      "provinciaid": 33
    },
    {
      "cp": 33950,
      "nombre": "Sotrondio",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Soucedo",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Soutelo",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Souto",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Sualleiro",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Suares",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Suarias",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Suco, El (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Sueiro",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Sueros",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Sur, El",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Susacasa",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Tabaza",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Taberna, La",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Tabes",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Tabiella",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Tabiernas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Tabla, La (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Tabla, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Tabla, La (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Tabladiello (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Tabladiello (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Tabladiello (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33937,
      "nombre": "Tablado (bendicion-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Tablado (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Tablado (degaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Tablado (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Tablado (loredo - Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Tablado (p. Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Tablado (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Tablado De Mieres",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Tablado De Riviella",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Tablado De Villacibran",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Tablado Del Rio",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Tablados, Los",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Tablas, Las (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Tablazo",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Tablizo",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Tablones Los",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Taborcias",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "Taborneda",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Tahoces",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Tainas",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Taja",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Taladrid",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Talaren",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Talavero",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Talladas",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Tamagordas",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Tamallanes",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Tamargo",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Tameza",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Tamon",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "TamuÑo",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Tanda",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Tandes",
      "provinciaid": 33
    },
    {
      "cp": 33994,
      "nombre": "Tanes",
      "provinciaid": 33
    },
    {
      "cp": 33740,
      "nombre": "Tapia De Casariego",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Tapios Los",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Taralle",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Taramundi",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Tarancon, El",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Tarandiellos",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Taranes",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Tarano (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Tarano (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Tarano (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Tarantiellos",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "TaraÑa",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "TaraÑo",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Tarin (trasona-corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33997,
      "nombre": "Tarna (caso)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Tarna (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33796,
      "nombre": "Tarrebarre",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Taruelo",
      "provinciaid": 33
    },
    {
      "cp": 33470,
      "nombre": "Taujo",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Tavalles",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Tazada",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Tazones",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Tebongo",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Teboyas",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Teifaros",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Teijedo (coaÑa), Caserio",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Teijedo (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Teijeira (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Teijeira (san Martin De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Teijeira (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Teijo",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Teijois",
      "provinciaid": 33
    },
    {
      "cp": 33155,
      "nombre": "Teixidiello",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Tejedal (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Tejedal, El (sevares)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Tejedo",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Tejera (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Tejera De Bazuelo",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Tejera De Pando",
      "provinciaid": 33
    },
    {
      "cp": 33684,
      "nombre": "Tejera, La (aller)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Tejera, La (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Tejera, La (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Tejera, La (el Crucero - Tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Tejera, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Tejera, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Tejera, La (navelgas-tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33458,
      "nombre": "Tejera, La (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Tejera, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Tejeras, Las (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Tejero",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Telares",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Teleno",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "TeleÑa",
      "provinciaid": 33
    },
    {
      "cp": 33628,
      "nombre": "Telledo",
      "provinciaid": 33
    },
    {
      "cp": 33173,
      "nombre": "Tellego",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Temia",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Tendejon",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Tendejones",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Tendeyon",
      "provinciaid": 33
    },
    {
      "cp": 33118,
      "nombre": "Tene",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "Tenebredo",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Tercias, Las (blimea)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Tercias, Las (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Tercias, Las (piÑeres-aller)",
      "provinciaid": 33
    },
    {
      "cp": 33347,
      "nombre": "TereÑes",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Ternin",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Terrero",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Terrero, El",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Terronal, El",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Terronero",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Tetuan (san Pedro Navarro)",
      "provinciaid": 33
    },
    {
      "cp": 33959,
      "nombre": "Tetuan (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Texo De Lois",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Texuca (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Texuca (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33588,
      "nombre": "Tezangos",
      "provinciaid": 33
    },
    {
      "cp": 33554,
      "nombre": "Tielve",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Tiendas, Las (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Tiendas, Las (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33870,
      "nombre": "Tineo",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Tingas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "TiÑana",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Tios",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Tiroco De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Tiroco De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Tisorio",
      "provinciaid": 33
    },
    {
      "cp": 33579,
      "nombre": "Tobes (p. Baja)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Tol",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Toleiras",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Tolinas (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Tolivia (p. Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Tombin, El (barres-castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Tombin, El (tol-castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Tomentosa",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Toral (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33112,
      "nombre": "Toral, El (proaza)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Toral, El (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Torales, Los",
      "provinciaid": 33
    },
    {
      "cp": 33587,
      "nombre": "ToraÑo",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Torayo",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Torazo",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Torce (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Torce (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Torga",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Torgados",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Toriello (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33568,
      "nombre": "Toriello (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Toriezo",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Torin",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Torio",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Tormaleo",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Tornera, La",
      "provinciaid": 33
    },
    {
      "cp": 33616,
      "nombre": "Torneros (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Torneros, Los (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Tornin",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Torno (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Torno, El",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Tornon",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Tornos (pola De Laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33677,
      "nombre": "Tornos, Los (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Tornos, Los (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Toroyes",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Torre (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Torre, La (carda-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33456,
      "nombre": "Torre, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Torre, La (nievares-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33345,
      "nombre": "Torre, La (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Torre, La (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Torre, La (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Torretejera",
      "provinciaid": 33
    },
    {
      "cp": 33508,
      "nombre": "Torrevega",
      "provinciaid": 33
    },
    {
      "cp": 33546,
      "nombre": "Tospe",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Toucedos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33793,
      "nombre": "Tox",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Toya",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Tozo, El",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Traba, La (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Trabaces",
      "provinciaid": 33
    },
    {
      "cp": 33738,
      "nombre": "Trabada (g. Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Trabada (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Trabanquin",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Trabazo",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Trancas, Las",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Trapa (p. Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Trapa, La (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Trapa, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Trapa, La (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Trapa, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33628,
      "nombre": "Tras La Cruz",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Tras La Iglesia",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "TrascaÑedo",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Trascastro",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Trasdacorda",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Trasmonte (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Trasmonte (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Trasmonte (las Reguera)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Trasmonte (san Martin De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Trasmonte De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Trasmonte De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33468,
      "nombre": "Trasona",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Traspalacio",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Traspando",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Travadelo",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Travesedo (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Travesedo (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Traveseo",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Travesera",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Traviesa, La (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Travieso",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Trechorio (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Trechorio (lena)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Trechorio (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33411,
      "nombre": "Trejo",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Trelles",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Trellopico",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Tremado (p. Allende)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Tremado (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Tremado De Carballo",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Tremado De Coto",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Tresali",
      "provinciaid": 33
    },
    {
      "cp": 33589,
      "nombre": "Tresano",
      "provinciaid": 33
    },
    {
      "cp": 33576,
      "nombre": "Trescares",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Tresgrandas",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Tresllamas, Lugar",
      "provinciaid": 33
    },
    {
      "cp": 33586,
      "nombre": "Tresmonte",
      "provinciaid": 33
    },
    {
      "cp": 33586,
      "nombre": "Tresmonte De Parres",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Trespando",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Tresvilla",
      "provinciaid": 33
    },
    {
      "cp": 33729,
      "nombre": "Treve",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Trevias",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Trias",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Tribierto",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "TrillapeÑa",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Trio",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Triongo",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Trocha, La",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Tronca, La",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Troncada, La",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "Troncedo (cudillero)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Troncedo (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Troncos",
      "provinciaid": 33
    },
    {
      "cp": 33815,
      "nombre": "Trones",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Tronquedal",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Trsmuria",
      "provinciaid": 33
    },
    {
      "cp": 33100,
      "nombre": "Trubia",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "Trubia (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Trubia, De (corvera)(ver Callejero De Aviles), Carretera",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Truebano (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33690,
      "nombre": "Truebano (lugo Llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33126,
      "nombre": "Truebano (soto Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Truebano (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Truyes (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33919,
      "nombre": "Tudela De Agueria",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Tudela Veguin",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Tuenes",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Tueres",
      "provinciaid": 33
    },
    {
      "cp": 33425,
      "nombre": "Tuernes El Grande",
      "provinciaid": 33
    },
    {
      "cp": 33425,
      "nombre": "Tuernes El PequeÑo",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Tuero",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Tueya",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Tuilla",
      "provinciaid": 33
    },
    {
      "cp": 33628,
      "nombre": "Tuiza",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Tunel, El",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Tunelon, El",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "TuÑa",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "TuÑes",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "TuÑon",
      "provinciaid": 33
    },
    {
      "cp": 33594,
      "nombre": "Turanzas",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "TurbeÑo",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Turia",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Turon",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Turuelles",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Ubriendes",
      "provinciaid": 33
    },
    {
      "cp": 33126,
      "nombre": "Ucedo",
      "provinciaid": 33
    },
    {
      "cp": 33569,
      "nombre": "Ucio",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Udrion",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Ujo",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Ules",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Urbies",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Urdiera, La",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Uria (seroiro)",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Urria (p. Somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Urria (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Uz, La (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Uz, La (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33739,
      "nombre": "Valabelleiro",
      "provinciaid": 33
    },
    {
      "cp": 33859,
      "nombre": "Valbona (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Valbona (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Valbona (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Valboniel",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Valbucar",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Valbunena",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Valcabo",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Valcarcel",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Valdaces",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Valdarieme",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Valdebarcena",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Valdebueyes",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Valdeciegos",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Valdecuna",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Valdediello",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Valdedios (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Valdedios (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Valdedo (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Valdedo (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Valdeferreiros",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Valdelafaya",
      "provinciaid": 33
    },
    {
      "cp": 33989,
      "nombre": "Valdelasabejas",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Valdemaria",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Valdemora (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Valdemora (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Valdeoreyo",
      "provinciaid": 33
    },
    {
      "cp": 33746,
      "nombre": "Valdepares",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Valderrodero",
      "provinciaid": 33
    },
    {
      "cp": 33994,
      "nombre": "Valderrosa",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Valdesenche",
      "provinciaid": 33
    },
    {
      "cp": 33938,
      "nombre": "Valdesoto",
      "provinciaid": 33
    },
    {
      "cp": 33680,
      "nombre": "Valdevero",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Valdre, La",
      "provinciaid": 33
    },
    {
      "cp": 33157,
      "nombre": "Valdredo",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Valdredo (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Valduno",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Vale",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Valentin (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Valentin (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Valeri",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Valeriana",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Valgranda (aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Valia La",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Valia Mayor",
      "provinciaid": 33
    },
    {
      "cp": 33768,
      "nombre": "Valin (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Valin (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "ValiÑaseca",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Vallado",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Vallamonte",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Valle",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Valle (campomanes)",
      "provinciaid": 33
    },
    {
      "cp": 33343,
      "nombre": "Valle (caravia)",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Valle (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33885,
      "nombre": "Valle (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Valle (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Valle De Begega",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Valle De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Valle De CarreÑo",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Valle De Lago",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Valle De Los Humeros",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Valle De Moro",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Valle De San Agustin",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Valle De Tablado",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Valle, El (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Valle, El (camoca - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Valle, El (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Valle, El (cazanes - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Valle, El (el Crucero - Tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Valle, El (gozon), Zona",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Valle, El (lada - Langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Valle, El (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "Valle, El (p. Lena)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Valle, El (peon-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Valle, El (sama-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Valle, El (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Valle, El (t. Veguin)",
      "provinciaid": 33
    },
    {
      "cp": 33707,
      "nombre": "Valleancho",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Valleciello",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Vallecueva",
      "provinciaid": 33
    },
    {
      "cp": 33539,
      "nombre": "Valles (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Valles De Teso",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Valles, Los (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Valles, Los (entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Valles, Los (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Valles, Los (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Valles, Los (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33729,
      "nombre": "Valleseco",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Valleto, El",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Valleya",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Vallicalagua",
      "provinciaid": 33
    },
    {
      "cp": 33613,
      "nombre": "Vallicuerra",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Vallin (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33538,
      "nombre": "Vallin (infiesto)",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Vallin (limanes-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Vallin (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Vallin (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Vallin, El",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Vallin, El (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Vallin, El (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Vallina (breceÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Vallina (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Vallina (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Vallina (valle Lantero)",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Vallina De La Longa",
      "provinciaid": 33
    },
    {
      "cp": 33174,
      "nombre": "Vallina, La (caces - Oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Vallina, La (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Vallina, La (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33186,
      "nombre": "Vallina, La (el Berron-siero)",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Vallina, La (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Vallina, La (tuilla - Langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Vallina, La (villavic.)",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Vallinadosa",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Vallinaferrera",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Vallinaoscura",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Vallinas (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33885,
      "nombre": "Vallinas (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Vallinas (villallana)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Vallinas, Las (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Vallinas, Las (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Vallinas, Las (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Valliquin",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Vallobal",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Vallobil",
      "provinciaid": 33
    },
    {
      "cp": 33935,
      "nombre": "Valluco El",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Valmayor",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Valmorisco",
      "provinciaid": 33
    },
    {
      "cp": 33619,
      "nombre": "Valmurian",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Valsera",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Valserondo",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Valsoredo",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Valtravieso",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Valvaler",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Valvidares",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "Vara, La (bimenes)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Vara, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Vara, La (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Vara, La (riosa)",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Vare",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Vecil",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Vega (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Vega (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Vega (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Vega (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Vega (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Vega (pinzales)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Vega (quintana)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Vega (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Vega (selorio-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33892,
      "nombre": "Vega De Anzo",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Vega De Castro",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Vega De Cien",
      "provinciaid": 33
    },
    {
      "cp": 33790,
      "nombre": "Vega De Cima",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Vega De Horreo",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Vega De La Zarza",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Vega De Llan",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Vega De Los Caseros",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Vega De Los Molinos",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Vega De Los Peredos",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Vega De Los Piqueros",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Vega De MuÑalen",
      "provinciaid": 33
    },
    {
      "cp": 33729,
      "nombre": "Vega De Ouria",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Vega De Peridiello",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Vega De Pervis",
      "provinciaid": 33
    },
    {
      "cp": 33716,
      "nombre": "Vega De Pindolas",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Vega De Poja",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Vega De Pope",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Vega De Quintana",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Vega De Rengos",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Vega De Restiello",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Vega De Rey (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Vega De Rey (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Vega De Riosa",
      "provinciaid": 33
    },
    {
      "cp": 33682,
      "nombre": "Vega De San Pedro",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Vega De Sariego",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Vega De Sebarga",
      "provinciaid": 33
    },
    {
      "cp": 33119,
      "nombre": "Vega De Trubia",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Vega De Truelles",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Vega De Villaldin, La",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Vega De Villar",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Vega Del Carro",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Vega Del Ciego",
      "provinciaid": 33
    },
    {
      "cp": 33637,
      "nombre": "Vega Del Rey",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Vega Del Tallo",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Vega Del Torno",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Vega MuÑiz",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Vega Muro",
      "provinciaid": 33
    },
    {
      "cp": 33686,
      "nombre": "Vega, La (cabaÑaquinta)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Vega, La (castiello-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Vega, La (cazanes-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33582,
      "nombre": "Vega, La (ceceda)",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Vega, La (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Vega, La (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Vega, La (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Vega, La (priesca-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33345,
      "nombre": "Vega, La (ribadesella)",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Vega, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Vega, La (serin)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Vega, La (venta-langreo, La)",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Vega, La (villallana)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Vegacebron",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Vegadali",
      "provinciaid": 33
    },
    {
      "cp": 33770,
      "nombre": "Vegadeo",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Vegadotos",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Vegafriosa",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Vegalafonte",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Vegalagar",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Vegalatorre",
      "provinciaid": 33
    },
    {
      "cp": 33173,
      "nombre": "Vegalencia",
      "provinciaid": 33
    },
    {
      "cp": 33581,
      "nombre": "Vegalloba",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Vegameoro",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "VegaÑan",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Vegaperpera",
      "provinciaid": 33
    },
    {
      "cp": 33536,
      "nombre": "Vegarrionda",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Vegarrozadas",
      "provinciaid": 33
    },
    {
      "cp": 33161,
      "nombre": "Vegas De Cardeo, Las",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Vegas De San Esteban",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Vegas, Las (proaza)",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Vegas, Las (san Tirso De Abres)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Vegas, Las (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33000,
      "nombre": "Vegas, Las (ver Callejero De Aviles)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Vegas, Las (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Vegona, La",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Veguellina",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Veguilla, La",
      "provinciaid": 33
    },
    {
      "cp": 33910,
      "nombre": "Veguin",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "VeguiÑa, La",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Veiga",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Veigas",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Veigas De Turia",
      "provinciaid": 33
    },
    {
      "cp": 33758,
      "nombre": "Veiral",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Velilla, La (tabaza)",
      "provinciaid": 33
    },
    {
      "cp": 33639,
      "nombre": "Venceyal",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Vendilles",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Vendon",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Veneiro",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Veneros (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33127,
      "nombre": "Veneros (soto Del Barco)",
      "provinciaid": 33
    },
    {
      "cp": 33990,
      "nombre": "Veneros De Caso",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Veneros, Los (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Venta Arcadio",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Venta De Aquilino",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Venta De La Esperanza",
      "provinciaid": 33
    },
    {
      "cp": 33192,
      "nombre": "Venta De La Puga",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Venta De La Salve",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Venta De Las Ranas",
      "provinciaid": 33
    },
    {
      "cp": 33937,
      "nombre": "Venta De Soto",
      "provinciaid": 33
    },
    {
      "cp": 33392,
      "nombre": "Venta De Veranes",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Venta Del Aire (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33939,
      "nombre": "Venta Del Aire (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Venta Del Aire (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Venta Del Aire (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33428,
      "nombre": "Venta Del Gallo (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Venta El Pagano",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Venta Quildan",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Venta Villacin",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Venta, La (braÑes)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Venta, La (grases - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33934,
      "nombre": "Venta, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33708,
      "nombre": "Venta, La (luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33617,
      "nombre": "Venta, La (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Venta, La (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Venta, La (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "Venta, La (pando-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Venta, La (piÑeres-aller)",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Venta, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33950,
      "nombre": "Venta, La (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Venta, La (tabaza-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33459,
      "nombre": "Ventaniella",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Ventanova, La",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Ventanueva (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33414,
      "nombre": "Ventanueva (illas)",
      "provinciaid": 33
    },
    {
      "cp": 33112,
      "nombre": "Ventas, Las (proaza)",
      "provinciaid": 33
    },
    {
      "cp": 33450,
      "nombre": "Ventorrillo (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Ventosa (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Ventosa (san Martin De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Ventosa, La (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Ventoso",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Vera Del Camino",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "Veranes",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Verdera (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Verdera (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Verdicio",
      "provinciaid": 33
    },
    {
      "cp": 33850,
      "nombre": "Verdugos",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Vericioso, El",
      "provinciaid": 33
    },
    {
      "cp": 33691,
      "nombre": "VeriÑa",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Vero",
      "provinciaid": 33
    },
    {
      "cp": 33618,
      "nombre": "Vescon El (seana - Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Vescon, El (santa Rosa-mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Veyo",
      "provinciaid": 33
    },
    {
      "cp": 33585,
      "nombre": "ViabaÑo",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Viade",
      "provinciaid": 33
    },
    {
      "cp": 33190,
      "nombre": "Viado",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Viastalegre",
      "provinciaid": 33
    },
    {
      "cp": 33750,
      "nombre": "Viavelez",
      "provinciaid": 33
    },
    {
      "cp": 33508,
      "nombre": "VibaÑo",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Viboli",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Vidal",
      "provinciaid": 33
    },
    {
      "cp": 33195,
      "nombre": "Vidayan",
      "provinciaid": 33
    },
    {
      "cp": 33597,
      "nombre": "Vidiago",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Vidoledo",
      "provinciaid": 33
    },
    {
      "cp": 33426,
      "nombre": "Vidriera",
      "provinciaid": 33
    },
    {
      "cp": 33792,
      "nombre": "Vidural (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Vidural (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33558,
      "nombre": "Viego",
      "provinciaid": 33
    },
    {
      "cp": 33429,
      "nombre": "Viella",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Viesca (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33930,
      "nombre": "Viesca, La (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Viesca, La (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Viesca, La (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Viesca, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Viescabozadas",
      "provinciaid": 33
    },
    {
      "cp": 33869,
      "nombre": "Viescas (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Viescas, Las (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Viesques (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Viesques (riaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "VigaÑa",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Vigidel",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Vigil",
      "provinciaid": 33
    },
    {
      "cp": 33790,
      "nombre": "Vigo",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Vijande",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Vilanova (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Vilanova (taramundi)",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Vilar",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Vilar (san Tirso De Abres)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Vilarello (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Vilarello (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33697,
      "nombre": "Vilarteo",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Vilavedelle",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Vilde",
      "provinciaid": 33
    },
    {
      "cp": 33774,
      "nombre": "Vilelas",
      "provinciaid": 33
    },
    {
      "cp": 33813,
      "nombre": "Viliella",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "Villa (c. Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Villa (candamo)",
      "provinciaid": 33
    },
    {
      "cp": 33412,
      "nombre": "Villa (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Villa (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Villa (llanes)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Villa (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Villa De Sub",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Villabajo",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Villabazal",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Villabolle",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Villabona (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Villabona (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Villabona (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Villabona (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Villabona (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Villabonel",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Villabre",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Villabrille",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Villacabrera",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Villacanes",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Villacarisme",
      "provinciaid": 33
    },
    {
      "cp": 33949,
      "nombre": "Villacedre",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Villacibran",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Villacin",
      "provinciaid": 33
    },
    {
      "cp": 33796,
      "nombre": "Villacondide",
      "provinciaid": 33
    },
    {
      "cp": 33885,
      "nombre": "Villadecabo",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Villadefondo",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Villademar",
      "provinciaid": 33
    },
    {
      "cp": 33788,
      "nombre": "Villademoros",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Villadestre",
      "provinciaid": 33
    },
    {
      "cp": 33683,
      "nombre": "Villadominica",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Villadun",
      "provinciaid": 33
    },
    {
      "cp": 33327,
      "nombre": "Villaescusa (colunga)",
      "provinciaid": 33
    },
    {
      "cp": 33936,
      "nombre": "Villaescusa (siero)",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Villaestremeri",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Villafria (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Villafria (turon)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Villafronte",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Villafrontu",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Villagarcia",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Villager",
      "provinciaid": 33
    },
    {
      "cp": 33783,
      "nombre": "Villagermonde",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Villagime",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Villagondu",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Villagonzay",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Villagrufe",
      "provinciaid": 33
    },
    {
      "cp": 33593,
      "nombre": "Villahormes",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Villaizoy",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Villajane",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Villajimada",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Villajulian",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Villajur",
      "provinciaid": 33
    },
    {
      "cp": 33969,
      "nombre": "Villalad",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Villalaez",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Villalain",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Villalar",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Villaldin",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Villallana",
      "provinciaid": 33
    },
    {
      "cp": 33759,
      "nombre": "Villalmarzo",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Villalocay",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Villalonga, La",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Villaluz",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "VillamaÑe",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Villamar",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Villamar De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Villamar De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Villamarcel",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Villamarin De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Villamarin De Salcedo",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Villamartin (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Villamartin (nava)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Villamartin (santa Eulalia De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Villamayor (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33583,
      "nombre": "Villamayor (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Villamayor (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Villamea",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Villameana (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Villameitide",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Villamejan",
      "provinciaid": 33
    },
    {
      "cp": 33114,
      "nombre": "Villamejin",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Villameri",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Villamiana",
      "provinciaid": 33
    },
    {
      "cp": 33749,
      "nombre": "Villamil",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Villamondriz",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Villamor",
      "provinciaid": 33
    },
    {
      "cp": 33993,
      "nombre": "Villamorey",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Villamorsen",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Villampero",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "VillamuÑin",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Villandas",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Villandio",
      "provinciaid": 33
    },
    {
      "cp": 33846,
      "nombre": "Villanueva (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33725,
      "nombre": "Villanueva (boal)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Villanueva (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Villanueva (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33416,
      "nombre": "Villanueva (corvera)",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Villanueva (gozon)",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Villanueva (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33410,
      "nombre": "Villanueva (la Carriona)",
      "provinciaid": 33
    },
    {
      "cp": 33425,
      "nombre": "Villanueva (llanera)",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Villanueva (moreda)",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Villanueva (oviedo)",
      "provinciaid": 33
    },
    {
      "cp": 33530,
      "nombre": "Villanueva (piloÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Villanueva (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Villanueva (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Villanueva (pravia)",
      "provinciaid": 33
    },
    {
      "cp": 33313,
      "nombre": "Villanueva (rozadas-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33490,
      "nombre": "Villanueva (san Pedro Navarro)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Villanueva (sariego-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Villanueva (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Villanueva (trevias)",
      "provinciaid": 33
    },
    {
      "cp": 33507,
      "nombre": "Villanueva De Ardisana",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Villanueva De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33590,
      "nombre": "Villanueva De Colombres",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Villanueva De Fios",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Villanueva De Oscos",
      "provinciaid": 33
    },
    {
      "cp": 33591,
      "nombre": "Villanueva De Pria",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Villanueva De RaÑadoiro",
      "provinciaid": 33
    },
    {
      "cp": 33115,
      "nombre": "Villanueva De Santo Adriano",
      "provinciaid": 33
    },
    {
      "cp": 33876,
      "nombre": "Villanueva De Sorriba",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Villaoril (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33719,
      "nombre": "Villaoril (navia)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Villaoril De Bimeda",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Villaoril De La Sierra",
      "provinciaid": 33
    },
    {
      "cp": 33118,
      "nombre": "Villaorille",
      "provinciaid": 33
    },
    {
      "cp": 33793,
      "nombre": "Villapedre",
      "provinciaid": 33
    },
    {
      "cp": 33610,
      "nombre": "Villapendi",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Villaperez",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Villapro",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Villar (carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33457,
      "nombre": "Villar (castrillon)",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Villar (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33795,
      "nombre": "Villar (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33857,
      "nombre": "Villar (cornellana)",
      "provinciaid": 33
    },
    {
      "cp": 33140,
      "nombre": "Villar (fuso-puerto)",
      "provinciaid": 33
    },
    {
      "cp": 33393,
      "nombre": "Villar (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Villar (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33162,
      "nombre": "Villar (morcin)",
      "provinciaid": 33
    },
    {
      "cp": 33138,
      "nombre": "Villar (muros Nalon)",
      "provinciaid": 33
    },
    {
      "cp": 33693,
      "nombre": "Villar (pajares)",
      "provinciaid": 33
    },
    {
      "cp": 33685,
      "nombre": "Villar (piÑeres-aller)",
      "provinciaid": 33
    },
    {
      "cp": 33519,
      "nombre": "Villar (pola De Siero)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Villar (selorio-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Villar (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33469,
      "nombre": "Villar (tabaza-carreÑo)",
      "provinciaid": 33
    },
    {
      "cp": 33315,
      "nombre": "Villar (tazones)",
      "provinciaid": 33
    },
    {
      "cp": 33111,
      "nombre": "Villar (teverga)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Villar (tornon-villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "Villar (ujo)",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Villar (valdebarcena - Villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33518,
      "nombre": "Villar (vega Sariego)",
      "provinciaid": 33
    },
    {
      "cp": 33776,
      "nombre": "Villar (villanueva De Oscos)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Villar (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33819,
      "nombre": "Villar De Adrales",
      "provinciaid": 33
    },
    {
      "cp": 33782,
      "nombre": "Villar De Ayones",
      "provinciaid": 33
    },
    {
      "cp": 33780,
      "nombre": "Villar De BahiÑas",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Villar De Bergame",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Villar De Bimeda",
      "provinciaid": 33
    },
    {
      "cp": 33731,
      "nombre": "Villar De Bullaso",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Villar De Buspol",
      "provinciaid": 33
    },
    {
      "cp": 33829,
      "nombre": "Villar De Candamo",
      "provinciaid": 33
    },
    {
      "cp": 33784,
      "nombre": "Villar De Carcedo",
      "provinciaid": 33
    },
    {
      "cp": 33681,
      "nombre": "Villar De Casomera",
      "provinciaid": 33
    },
    {
      "cp": 33886,
      "nombre": "Villar De Castanedo",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Villar De Cienfuegos",
      "provinciaid": 33
    },
    {
      "cp": 33615,
      "nombre": "Villar De Gallegos",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Villar De Huergo",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Villar De La Cuesta",
      "provinciaid": 33
    },
    {
      "cp": 33548,
      "nombre": "Villar De La PeÑa",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Villar De Los Indianos",
      "provinciaid": 33
    },
    {
      "cp": 33758,
      "nombre": "Villar De Miudes",
      "provinciaid": 33
    },
    {
      "cp": 33676,
      "nombre": "Villar De Murias",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Villar De Navelgas",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "Villar De Naviego",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Villar De Onis",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "Villar De Pastur",
      "provinciaid": 33
    },
    {
      "cp": 33171,
      "nombre": "Villar De Pereda",
      "provinciaid": 33
    },
    {
      "cp": 33811,
      "nombre": "Villar De Posada",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Villar De Salcedo",
      "provinciaid": 33
    },
    {
      "cp": 33728,
      "nombre": "Villar De San Pedro",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Villar De Sapos (p. Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Villar De Sapos (tineo)",
      "provinciaid": 33
    },
    {
      "cp": 33726,
      "nombre": "Villar De Serandinas",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Villar De Tejon",
      "provinciaid": 33
    },
    {
      "cp": 33842,
      "nombre": "Villar De Vildas",
      "provinciaid": 33
    },
    {
      "cp": 33844,
      "nombre": "Villar De Zuepos",
      "provinciaid": 33
    },
    {
      "cp": 33584,
      "nombre": "Villarcazo",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Villarcebollin",
      "provinciaid": 33
    },
    {
      "cp": 33796,
      "nombre": "Villarda",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Villardecendias",
      "provinciaid": 33
    },
    {
      "cp": 33886,
      "nombre": "Villardejusto",
      "provinciaid": 33
    },
    {
      "cp": 33816,
      "nombre": "Villardelantero",
      "provinciaid": 33
    },
    {
      "cp": 33422,
      "nombre": "Villardeveyo",
      "provinciaid": 33
    },
    {
      "cp": 33775,
      "nombre": "Villarede",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Villarejo (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33117,
      "nombre": "Villarejo (quiros)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Villarello (grandas De Salime)",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Villares (cabranes)",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Villares (gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Villares De Abajo",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Villares De Arriba",
      "provinciaid": 33
    },
    {
      "cp": 33716,
      "nombre": "Villares Los (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33716,
      "nombre": "Villares, Los (coaÑa)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Villargomil",
      "provinciaid": 33
    },
    {
      "cp": 33129,
      "nombre": "Villarigan",
      "provinciaid": 33
    },
    {
      "cp": 33785,
      "nombre": "Villarin",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Villarin (castropol)",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Villarin (ibias)",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Villarin (laviana)",
      "provinciaid": 33
    },
    {
      "cp": 33866,
      "nombre": "Villarin (malleza)",
      "provinciaid": 33
    },
    {
      "cp": 33867,
      "nombre": "Villarin (salas)",
      "provinciaid": 33
    },
    {
      "cp": 33840,
      "nombre": "Villarin (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33747,
      "nombre": "Villarin (tapia)",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Villarin De Cibea",
      "provinciaid": 33
    },
    {
      "cp": 33757,
      "nombre": "Villarin De La BraÑa",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Villarin De Piorno",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Villarin De Trasmonte",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Villarino De Limes",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Villarino Del Rio",
      "provinciaid": 33
    },
    {
      "cp": 33735,
      "nombre": "Villarmarzo",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Villarmayor",
      "provinciaid": 33
    },
    {
      "cp": 33812,
      "nombre": "Villarmeirin",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Villarmental",
      "provinciaid": 33
    },
    {
      "cp": 33193,
      "nombre": "Villarmil",
      "provinciaid": 33
    },
    {
      "cp": 33891,
      "nombre": "Villarmor",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Villarmou",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Villarpadrid",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Villarpedre",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Villarpille",
      "provinciaid": 33
    },
    {
      "cp": 33777,
      "nombre": "Villarquille",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Villarraba",
      "provinciaid": 33
    },
    {
      "cp": 33769,
      "nombre": "Villarrasa",
      "provinciaid": 33
    },
    {
      "cp": 33535,
      "nombre": "Villarriba",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Villarrica",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Villartorey",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Villaruiz (tameza)",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Villarviejo (barres)",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Villas, Las (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33116,
      "nombre": "Villasante",
      "provinciaid": 33
    },
    {
      "cp": 33734,
      "nombre": "Villaseca",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "Villaselande",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "Villasibil",
      "provinciaid": 33
    },
    {
      "cp": 33611,
      "nombre": "Villasola (mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33887,
      "nombre": "Villasonte",
      "provinciaid": 33
    },
    {
      "cp": 33817,
      "nombre": "Villategil",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Villatresmil",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Villatriz",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "Villaux",
      "provinciaid": 33
    },
    {
      "cp": 33128,
      "nombre": "Villavaler",
      "provinciaid": 33
    },
    {
      "cp": 33889,
      "nombre": "Villavaser",
      "provinciaid": 33
    },
    {
      "cp": 33557,
      "nombre": "Villaverde (amieva)",
      "provinciaid": 33
    },
    {
      "cp": 33836,
      "nombre": "Villaverde (belmonte)",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Villaverde (cangas De Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Villaverde (la Camocha)",
      "provinciaid": 33
    },
    {
      "cp": 33890,
      "nombre": "Villaverde (pola De Allande)",
      "provinciaid": 33
    },
    {
      "cp": 33316,
      "nombre": "Villaverde (quintana)",
      "provinciaid": 33
    },
    {
      "cp": 33191,
      "nombre": "Villaverde (san Claudio)",
      "provinciaid": 33
    },
    {
      "cp": 33314,
      "nombre": "Villaverde (villavicio)",
      "provinciaid": 33
    },
    {
      "cp": 33300,
      "nombre": "Villaviciosa",
      "provinciaid": 33
    },
    {
      "cp": 33427,
      "nombre": "Villayo",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Villayon",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Villazain",
      "provinciaid": 33
    },
    {
      "cp": 33868,
      "nombre": "Villazon",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Villazones",
      "provinciaid": 33
    },
    {
      "cp": 33159,
      "nombre": "Villeirin",
      "provinciaid": 33
    },
    {
      "cp": 33878,
      "nombre": "Villerino Del Monte",
      "provinciaid": 33
    },
    {
      "cp": 33986,
      "nombre": "Villoria",
      "provinciaid": 33
    },
    {
      "cp": 33721,
      "nombre": "Villur",
      "provinciaid": 33
    },
    {
      "cp": 33581,
      "nombre": "Vilortera, La",
      "provinciaid": 33
    },
    {
      "cp": 33958,
      "nombre": "Vilorteras (sotrondio)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "Vilorteras, Las (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33874,
      "nombre": "Vinada, La",
      "provinciaid": 33
    },
    {
      "cp": 33937,
      "nombre": "Vinadas, Las (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33779,
      "nombre": "Vinjoy",
      "provinciaid": 33
    },
    {
      "cp": 33638,
      "nombre": "ViÑa",
      "provinciaid": 33
    },
    {
      "cp": 33794,
      "nombre": "ViÑa (barres)",
      "provinciaid": 33
    },
    {
      "cp": 33547,
      "nombre": "ViÑa (c. Onis)",
      "provinciaid": 33
    },
    {
      "cp": 33947,
      "nombre": "ViÑa (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33818,
      "nombre": "ViÑa, La (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "ViÑa, La (villaviciosa)",
      "provinciaid": 33
    },
    {
      "cp": 33810,
      "nombre": "ViÑal",
      "provinciaid": 33
    },
    {
      "cp": 33841,
      "nombre": "ViÑas, Las (somiedo)",
      "provinciaid": 33
    },
    {
      "cp": 33640,
      "nombre": "ViÑas, Las (ujo)",
      "provinciaid": 33
    },
    {
      "cp": 33528,
      "nombre": "ViÑay",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "ViÑon",
      "provinciaid": 33
    },
    {
      "cp": 33310,
      "nombre": "ViÑones",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Vio",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Vio De Pedrouco",
      "provinciaid": 33
    },
    {
      "cp": 33827,
      "nombre": "Vio Del Pico",
      "provinciaid": 33
    },
    {
      "cp": 33529,
      "nombre": "Viobes",
      "provinciaid": 33
    },
    {
      "cp": 33448,
      "nombre": "Viodo",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Violeo",
      "provinciaid": 33
    },
    {
      "cp": 33449,
      "nombre": "VioÑo",
      "provinciaid": 33
    },
    {
      "cp": 33778,
      "nombre": "Vior",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Virgen De La Luz",
      "provinciaid": 33
    },
    {
      "cp": 33559,
      "nombre": "Vis",
      "provinciaid": 33
    },
    {
      "cp": 33695,
      "nombre": "Viscarriona",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Viso, El (cangas De Narcea)",
      "provinciaid": 33
    },
    {
      "cp": 33929,
      "nombre": "Viso, El (langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Vista Alegre",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Vistalegre",
      "provinciaid": 33
    },
    {
      "cp": 33948,
      "nombre": "Vistalegre (el Entrego)",
      "provinciaid": 33
    },
    {
      "cp": 33828,
      "nombre": "Vistalegre (grado)",
      "provinciaid": 33
    },
    {
      "cp": 33612,
      "nombre": "Vistalegre (san Cruz De Mieres)",
      "provinciaid": 33
    },
    {
      "cp": 33791,
      "nombre": "Vistalegre (villuir-luarca)",
      "provinciaid": 33
    },
    {
      "cp": 33549,
      "nombre": "Vita, La",
      "provinciaid": 33
    },
    {
      "cp": 33318,
      "nombre": "Vitienes",
      "provinciaid": 33
    },
    {
      "cp": 33730,
      "nombre": "Vitos, Los",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Vivedro",
      "provinciaid": 33
    },
    {
      "cp": 33875,
      "nombre": "Vivente",
      "provinciaid": 33
    },
    {
      "cp": 33156,
      "nombre": "Vivigo",
      "provinciaid": 33
    },
    {
      "cp": 33172,
      "nombre": "Vixiel",
      "provinciaid": 33
    },
    {
      "cp": 33534,
      "nombre": "Viyao",
      "provinciaid": 33
    },
    {
      "cp": 33614,
      "nombre": "Xagosa, La",
      "provinciaid": 33
    },
    {
      "cp": 33679,
      "nombre": "Xagual",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Xana La",
      "provinciaid": 33
    },
    {
      "cp": 33312,
      "nombre": "Xiana",
      "provinciaid": 33
    },
    {
      "cp": 33438,
      "nombre": "Xianes",
      "provinciaid": 33
    },
    {
      "cp": 33311,
      "nombre": "Ximangues",
      "provinciaid": 33
    },
    {
      "cp": 33317,
      "nombre": "Xin",
      "provinciaid": 33
    },
    {
      "cp": 33492,
      "nombre": "Xivares",
      "provinciaid": 33
    },
    {
      "cp": 33825,
      "nombre": "Xorro",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Xuga, La",
      "provinciaid": 33
    },
    {
      "cp": 33527,
      "nombre": "Xugueros",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Xunca",
      "provinciaid": 33
    },
    {
      "cp": 33491,
      "nombre": "Yavio",
      "provinciaid": 33
    },
    {
      "cp": 33814,
      "nombre": "Yema",
      "provinciaid": 33
    },
    {
      "cp": 33189,
      "nombre": "Yerbano",
      "provinciaid": 33
    },
    {
      "cp": 33879,
      "nombre": "Yerbo",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Yernes",
      "provinciaid": 33
    },
    {
      "cp": 33391,
      "nombre": "Zalca",
      "provinciaid": 33
    },
    {
      "cp": 33439,
      "nombre": "Zanzabornin",
      "provinciaid": 33
    },
    {
      "cp": 33873,
      "nombre": "Zardain",
      "provinciaid": 33
    },
    {
      "cp": 33556,
      "nombre": "Zardon",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Zarracina (deva-gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33691,
      "nombre": "Zarracina (veriÑa-gijon)",
      "provinciaid": 33
    },
    {
      "cp": 33877,
      "nombre": "Zarrazin",
      "provinciaid": 33
    },
    {
      "cp": 33418,
      "nombre": "Zeluan",
      "provinciaid": 33
    },
    {
      "cp": 33957,
      "nombre": "Zorea, La",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Zoreda Alta",
      "provinciaid": 33
    },
    {
      "cp": 33979,
      "nombre": "Zoreda Baja",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Zorera De Las Llamas",
      "provinciaid": 33
    },
    {
      "cp": 33160,
      "nombre": "Zorera De Porcio",
      "provinciaid": 33
    },
    {
      "cp": 33909,
      "nombre": "Zorera, La (ciaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33920,
      "nombre": "Zorera, La (riaÑo-langreo)",
      "provinciaid": 33
    },
    {
      "cp": 33718,
      "nombre": "Zorera, La (villayon)",
      "provinciaid": 33
    },
    {
      "cp": 33717,
      "nombre": "Zorerina",
      "provinciaid": 33
    },
    {
      "cp": 33629,
      "nombre": "Zureda",
      "provinciaid": 33
    },
    {
      "cp": 33826,
      "nombre": "Zurraquera, La",
      "provinciaid": 33
    },
    {
      "cp": 33554,
      "nombre": "Tresviso",
      "provinciaid": 33
    },
    {
      "cp": 33070,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33071,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33080,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33194,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33199,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33002,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33003,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33004,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33005,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33009,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33001,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33006,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33013,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33008,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33010,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33011,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33007,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33012,
      "nombre": "Oviedo",
      "provinciaid": 33
    },
    {
      "cp": 33200,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33200,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33394,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33299,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33299,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33299,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33299,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33299,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33350,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33205,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33202,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33208,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33210,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33290,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33213,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33207,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33201,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33203,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33206,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33211,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33209,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33204,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33212,
      "nombre": "Gijón",
      "provinciaid": 33
    },
    {
      "cp": 33400,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33400,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33417,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33405,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33460,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33402,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33401,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33403,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    {
      "cp": 33404,
      "nombre": "Avilés",
      "provinciaid": 33
    },
    
    {
      "cp": 28190,
      "nombre": "Bocigano",
      "provinciaid": 28
    },
    {
      "cp": 28190,
      "nombre": "Cabida",
      "provinciaid": 28
    },
    {
      "cp": 28190,
      "nombre": "Cardoso De La Sierra, El",
      "provinciaid": 28
    },
    {
      "cp": 28190,
      "nombre": "Colmenar De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28190,
      "nombre": "Corralejo",
      "provinciaid": 28
    },
    {
      "cp": 28190,
      "nombre": "PeÑalba De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28189,
      "nombre": "Santuy",
      "provinciaid": 28
    },
    {
      "cp": 28755,
      "nombre": "Acebeda, La",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Agustina, La",
      "provinciaid": 28
    },
    {
      "cp": 28864,
      "nombre": "Ajalvir",
      "provinciaid": 28
    },
    {
      "cp": 28130,
      "nombre": "Alalpardo",
      "provinciaid": 28
    },
    {
      "cp": 28880,
      "nombre": "Alameda",
      "provinciaid": 28
    },
    {
      "cp": 28749,
      "nombre": "Alameda Del Valle",
      "provinciaid": 28
    },
    {
      "cp": 28630,
      "nombre": "Alamin, El (finca)",
      "provinciaid": 28
    },
    {
      "cp": 28607,
      "nombre": "Alamo, El (navalcarnero)",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Alcala De Henares (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Alcobendas (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28219,
      "nombre": "Alcor I, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28219,
      "nombre": "Alcor Ii, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Alcorcon (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28620,
      "nombre": "Aldea Del Fresno",
      "provinciaid": 28
    },
    {
      "cp": 28110,
      "nombre": "Algete",
      "provinciaid": 28
    },
    {
      "cp": 28310,
      "nombre": "Algodor",
      "provinciaid": 28
    },
    {
      "cp": 28430,
      "nombre": "Alpedrete",
      "provinciaid": 28
    },
    {
      "cp": 28580,
      "nombre": "Ambite",
      "provinciaid": 28
    },
    {
      "cp": 28818,
      "nombre": "Anchuelo",
      "provinciaid": 28
    },
    {
      "cp": 28755,
      "nombre": "Aoslos",
      "provinciaid": 28
    },
    {
      "cp": 28680,
      "nombre": "Apartamentos Pronto, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28300,
      "nombre": "Aranjuez",
      "provinciaid": 28
    },
    {
      "cp": 28500,
      "nombre": "Arganda Del Rey",
      "provinciaid": 28
    },
    {
      "cp": 28810,
      "nombre": "Arlita",
      "provinciaid": 28
    },
    {
      "cp": 28110,
      "nombre": "Arrabal, El",
      "provinciaid": 28
    },
    {
      "cp": 28939,
      "nombre": "Arroyomolinos",
      "provinciaid": 28
    },
    {
      "cp": 28189,
      "nombre": "Atazar, El",
      "provinciaid": 28
    },
    {
      "cp": 28380,
      "nombre": "Balcon Del Tajo, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28850,
      "nombre": "Barrio De El Castillo",
      "provinciaid": 28
    },
    {
      "cp": 28880,
      "nombre": "Barrio Nuevo (venta Del Meco)",
      "provinciaid": 28
    },
    {
      "cp": 28480,
      "nombre": "Barrio Tablada",
      "provinciaid": 28
    },
    {
      "cp": 28850,
      "nombre": "Base Aerea Conjunta Torrejon",
      "provinciaid": 28
    },
    {
      "cp": 28976,
      "nombre": "Batres",
      "provinciaid": 28
    },
    {
      "cp": 28490,
      "nombre": "Becerril De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28390,
      "nombre": "Belmonte De Tajo",
      "provinciaid": 28
    },
    {
      "cp": 28862,
      "nombre": "Belvis De Jarama",
      "provinciaid": 28
    },
    {
      "cp": 28862,
      "nombre": "Belvis Nuevo",
      "provinciaid": 28
    },
    {
      "cp": 28861,
      "nombre": "Berrocales De Jarama, Los",
      "provinciaid": 28
    },
    {
      "cp": 28439,
      "nombre": "Berrocales, Los (alpedrete)",
      "provinciaid": 28
    },
    {
      "cp": 28192,
      "nombre": "Berrueco, El",
      "provinciaid": 28
    },
    {
      "cp": 28194,
      "nombre": "Berzosa De Lozoya",
      "provinciaid": 28
    },
    {
      "cp": 28660,
      "nombre": "Boadilla Del Monte",
      "provinciaid": 28
    },
    {
      "cp": 28413,
      "nombre": "Boalo, El",
      "provinciaid": 28
    },
    {
      "cp": 28669,
      "nombre": "Bonanza",
      "provinciaid": 28
    },
    {
      "cp": 28670,
      "nombre": "Bosque, El, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28737,
      "nombre": "Braojos",
      "provinciaid": 28
    },
    {
      "cp": 28596,
      "nombre": "Brea De Tajo",
      "provinciaid": 28
    },
    {
      "cp": 28690,
      "nombre": "Brunete",
      "provinciaid": 28
    },
    {
      "cp": 28730,
      "nombre": "Buitrago De Lozoya",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Burdiales, Los",
      "provinciaid": 28
    },
    {
      "cp": 28720,
      "nombre": "Bustarviejo",
      "provinciaid": 28
    },
    {
      "cp": 28721,
      "nombre": "Cabanillas De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28751,
      "nombre": "Cabrera, La",
      "provinciaid": 28
    },
    {
      "cp": 28640,
      "nombre": "Cadalso De Los Vidrios",
      "provinciaid": 28
    },
    {
      "cp": 28600,
      "nombre": "Calipo, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28816,
      "nombre": "Camarma De Esteruelas",
      "provinciaid": 28
    },
    {
      "cp": 28510,
      "nombre": "Campo Real",
      "provinciaid": 28
    },
    {
      "cp": 28743,
      "nombre": "Canencia De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28294,
      "nombre": "Canopus",
      "provinciaid": 28
    },
    {
      "cp": 28560,
      "nombre": "CarabaÑa",
      "provinciaid": 28
    },
    {
      "cp": 28860,
      "nombre": "Carretera Barajas, Viviendas",
      "provinciaid": 28
    },
    {
      "cp": 28440,
      "nombre": "Casa Forestal Tablada, Edificio",
      "provinciaid": 28
    },
    {
      "cp": 28440,
      "nombre": "Casa Tere Tablada, Edificio",
      "provinciaid": 28
    },
    {
      "cp": 28977,
      "nombre": "Casarrubuelos",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Casas Protegidas (soto Del Real)",
      "provinciaid": 28
    },
    {
      "cp": 28311,
      "nombre": "Castillejo",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Castillo De ViÑuelas",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Cazadero Real I, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Cedex",
      "provinciaid": 28
    },
    {
      "cp": 28650,
      "nombre": "Cenicientos",
      "provinciaid": 28
    },
    {
      "cp": 28780,
      "nombre": "Centro Militar San Pedro",
      "provinciaid": 28
    },
    {
      "cp": 28412,
      "nombre": "Cerceda",
      "provinciaid": 28
    },
    {
      "cp": 28470,
      "nombre": "Cercedilla",
      "provinciaid": 28
    },
    {
      "cp": 28297,
      "nombre": "Cereda, La",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Cerrillo (las Zorreras)",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Cerro Alarcon I, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Cerro Alarcon Ii, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Cerro Chico",
      "provinciaid": 28
    },
    {
      "cp": 28691,
      "nombre": "Cerro Del Venero",
      "provinciaid": 28
    },
    {
      "cp": 28193,
      "nombre": "Cervera De Buitrago",
      "provinciaid": 28
    },
    {
      "cp": 28694,
      "nombre": "Chapineria",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Charquillas, Las",
      "provinciaid": 28
    },
    {
      "cp": 28370,
      "nombre": "Chinchon",
      "provinciaid": 28
    },
    {
      "cp": 28350,
      "nombre": "Ciempozuelos",
      "provinciaid": 28
    },
    {
      "cp": 28119,
      "nombre": "Cigarral, El",
      "provinciaid": 28
    },
    {
      "cp": 28754,
      "nombre": "Cinco Villas",
      "provinciaid": 28
    },
    {
      "cp": 28280,
      "nombre": "Ciudad Bosque De Los Arroyos, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28709,
      "nombre": "Ciudad Deportiva Del Jarama",
      "provinciaid": 28
    },
    {
      "cp": 28119,
      "nombre": "Ciudad Jardin Valderrey",
      "provinciaid": 28
    },
    {
      "cp": 28248,
      "nombre": "Ciudad Residencial La Berzosa, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28680,
      "nombre": "Ciudad San Ramon",
      "provinciaid": 28
    },
    {
      "cp": 28120,
      "nombre": "Ciudad Santo Domingo",
      "provinciaid": 28
    },
    {
      "cp": 28707,
      "nombre": "Ciudalcampo",
      "provinciaid": 28
    },
    {
      "cp": 28669,
      "nombre": "Club Encinas (boadilla)",
      "provinciaid": 28
    },
    {
      "cp": 28863,
      "nombre": "CobeÑa",
      "provinciaid": 28
    },
    {
      "cp": 28864,
      "nombre": "CobeÑa, De (ajalvir), Carretera",
      "provinciaid": 28
    },
    {
      "cp": 28450,
      "nombre": "Collado Mediano",
      "provinciaid": 28
    },
    {
      "cp": 28400,
      "nombre": "Collado Villalba",
      "provinciaid": 28
    },
    {
      "cp": 28380,
      "nombre": "Colmenar De Oreja",
      "provinciaid": 28
    },
    {
      "cp": 28213,
      "nombre": "Colmenar Del Arroyo",
      "provinciaid": 28
    },
    {
      "cp": 28770,
      "nombre": "Colmenar Viejo",
      "provinciaid": 28
    },
    {
      "cp": 28500,
      "nombre": "Colmenar, El",
      "provinciaid": 28
    },
    {
      "cp": 28270,
      "nombre": "Colmenarejo",
      "provinciaid": 28
    },
    {
      "cp": 28420,
      "nombre": "Colonia Alto De La Navata",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Colonia Covibar (ver Callejero De Rivas-vaciamadrid)",
      "provinciaid": 28
    },
    {
      "cp": 28420,
      "nombre": "Colonia De Carranza",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Colonia De El HerreÑo",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Colonia De La Asuncion",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Colonia De Los Ciervos",
      "provinciaid": 28
    },
    {
      "cp": 28439,
      "nombre": "Colonia Del Carmen",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Colonia EspaÑa",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Colonia Las Suertes",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Colonia Militar El Goloso",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Colonia Pablo Iglesias (ver Callejero De Rivas-vaciamadrid)",
      "provinciaid": 28
    },
    {
      "cp": 28293,
      "nombre": "Colonia PeÑa Rosal",
      "provinciaid": 28
    },
    {
      "cp": 28600,
      "nombre": "Colonia Rio Guadarrama, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Colonia Valdecastellanos",
      "provinciaid": 28
    },
    {
      "cp": 28938,
      "nombre": "Combos, Los (arroyomolinos)",
      "provinciaid": 28
    },
    {
      "cp": 28439,
      "nombre": "Contreras, Las",
      "provinciaid": 28
    },
    {
      "cp": 28811,
      "nombre": "Corpa",
      "provinciaid": 28
    },
    {
      "cp": 28300,
      "nombre": "Cortijo De San Isidro, El",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Coslada (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28680,
      "nombre": "Costa Madrid, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28729,
      "nombre": "Cotos De Monterrey",
      "provinciaid": 28
    },
    {
      "cp": 28119,
      "nombre": "Cottolengo Del Padre Alegre",
      "provinciaid": 28
    },
    {
      "cp": 28749,
      "nombre": "Cuadron, El",
      "provinciaid": 28
    },
    {
      "cp": 28978,
      "nombre": "Cubas De La Sagra",
      "provinciaid": 28
    },
    {
      "cp": 28814,
      "nombre": "Daganzo De Arriba",
      "provinciaid": 28
    },
    {
      "cp": 28192,
      "nombre": "Dehesa De Santillana",
      "provinciaid": 28
    },
    {
      "cp": 28479,
      "nombre": "Dehesas, Las",
      "provinciaid": 28
    },
    {
      "cp": 28500,
      "nombre": "Emisora Radio Elect Campillo (arganda)",
      "provinciaid": 28
    },
    {
      "cp": 28805,
      "nombre": "Encin, El",
      "provinciaid": 28
    },
    {
      "cp": 28109,
      "nombre": "Encinar De Los Reyes",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Encinar I Y Ii (las Zorreras)",
      "provinciaid": 28
    },
    {
      "cp": 28793,
      "nombre": "Endrinales, Los",
      "provinciaid": 28
    },
    {
      "cp": 28420,
      "nombre": "Enebros, Los",
      "provinciaid": 28
    },
    {
      "cp": 28648,
      "nombre": "Entrepinos, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Ermita, La (soto Del Real)",
      "provinciaid": 28
    },
    {
      "cp": 28280,
      "nombre": "Escorial, El",
      "provinciaid": 28
    },
    {
      "cp": 28722,
      "nombre": "Espartal, El",
      "provinciaid": 28
    },
    {
      "cp": 28595,
      "nombre": "Estremera",
      "provinciaid": 28
    },
    {
      "cp": 28917,
      "nombre": "Fortuna, La",
      "provinciaid": 28
    },
    {
      "cp": 28214,
      "nombre": "Fresnedilla De La Oliva",
      "provinciaid": 28
    },
    {
      "cp": 28815,
      "nombre": "Fresno De Torote",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Fresnos, Los (soto Del Real)",
      "provinciaid": 28
    },
    {
      "cp": 28479,
      "nombre": "Fuenfria, La, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Fuenlabrada (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28708,
      "nombre": "Fuente Del Fresno",
      "provinciaid": 28
    },
    {
      "cp": 28140,
      "nombre": "Fuente El Saz De Jarama",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Fuentebella (ver Callejero De Parla)",
      "provinciaid": 28
    },
    {
      "cp": 28691,
      "nombre": "Fuentes, De Las, Camino",
      "provinciaid": 28
    },
    {
      "cp": 28597,
      "nombre": "FuentidueÑa De Tajo",
      "provinciaid": 28
    },
    {
      "cp": 28260,
      "nombre": "Galapagar",
      "provinciaid": 28
    },
    {
      "cp": 28737,
      "nombre": "Gandullas",
      "provinciaid": 28
    },
    {
      "cp": 28743,
      "nombre": "Garganta De Los Montes",
      "provinciaid": 28
    },
    {
      "cp": 28739,
      "nombre": "Gargantilla Del Lozoya Y Pinil",
      "provinciaid": 28
    },
    {
      "cp": 28737,
      "nombre": "Gascones",
      "provinciaid": 28
    },
    {
      "cp": 28860,
      "nombre": "Gasolinera, De La, Viviendas",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Getafe (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Goloso, De El, Estacion",
      "provinciaid": 28
    },
    {
      "cp": 28440,
      "nombre": "Gonzalo, Edificio",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Granjilla, La (ver Callejero De San Sebastian De Los Reyes), Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28971,
      "nombre": "GriÑon",
      "provinciaid": 28
    },
    {
      "cp": 28794,
      "nombre": "Guadalix De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28691,
      "nombre": "Guadamonte, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28440,
      "nombre": "Guadarrama",
      "provinciaid": 28
    },
    {
      "cp": 28810,
      "nombre": "Gurugu",
      "provinciaid": 28
    },
    {
      "cp": 28296,
      "nombre": "Herreras, Las",
      "provinciaid": 28
    },
    {
      "cp": 28770,
      "nombre": "Hidraulica Santillana",
      "provinciaid": 28
    },
    {
      "cp": 28191,
      "nombre": "Hiruela, La",
      "provinciaid": 28
    },
    {
      "cp": 28755,
      "nombre": "Horcajo De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28191,
      "nombre": "Horcajuelo De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28439,
      "nombre": "Horreo I Y Ii",
      "provinciaid": 28
    },
    {
      "cp": 28755,
      "nombre": "Hospital, El",
      "provinciaid": 28
    },
    {
      "cp": 28297,
      "nombre": "Hoya, La (robledondo)",
      "provinciaid": 28
    },
    {
      "cp": 28240,
      "nombre": "Hoyo De Manzanares",
      "provinciaid": 28
    },
    {
      "cp": 28810,
      "nombre": "Hueros, Los",
      "provinciaid": 28
    },
    {
      "cp": 28970,
      "nombre": "Humanes De Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28312,
      "nombre": "Infantas, Las (aranjuez)",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Infantas, Las (valdemorillo)",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Islas Blancas, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Jara Beltran",
      "provinciaid": 28
    },
    {
      "cp": 28250,
      "nombre": "Jarales, Los (galapagar), Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28860,
      "nombre": "Jarama, El, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Jarillas, De Las, Finca",
      "provinciaid": 28
    },
    {
      "cp": 28119,
      "nombre": "Jose Antonio",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Laboratorio Mopu, Km. 18,6",
      "provinciaid": 28
    },
    {
      "cp": 28439,
      "nombre": "Lanchuela, La",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Leganes (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28890,
      "nombre": "Loeches",
      "provinciaid": 28
    },
    {
      "cp": 28669,
      "nombre": "Lomas, Las (boadilla)",
      "provinciaid": 28
    },
    {
      "cp": 28742,
      "nombre": "Lozoya Del Valle",
      "provinciaid": 28
    },
    {
      "cp": 28752,
      "nombre": "Lozoyuela",
      "provinciaid": 28
    },
    {
      "cp": 28755,
      "nombre": "Madarcos",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Madrid-colmenar Viejo, Del Km. 17,500 Al 22,600, Carretera",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Majadahonda (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28754,
      "nombre": "Mangiron",
      "provinciaid": 28
    },
    {
      "cp": 28755,
      "nombre": "Mantilla, La",
      "provinciaid": 28
    },
    {
      "cp": 28410,
      "nombre": "Manzanares El Real",
      "provinciaid": 28
    },
    {
      "cp": 28600,
      "nombre": "Manzanos, Los, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28439,
      "nombre": "Mataespesa De Alpedrete",
      "provinciaid": 28
    },
    {
      "cp": 28492,
      "nombre": "Matalpino",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Matas, Las (ver Callejero Las Rozas De Madrid)",
      "provinciaid": 28
    },
    {
      "cp": 28880,
      "nombre": "Meco",
      "provinciaid": 28
    },
    {
      "cp": 28840,
      "nombre": "Mejorada Del Campo",
      "provinciaid": 28
    },
    {
      "cp": 28250,
      "nombre": "Minas, Las (galapagar), Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28649,
      "nombre": "Mirador De Cadalso, El",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Mirador Del Romero",
      "provinciaid": 28
    },
    {
      "cp": 28792,
      "nombre": "Miraflores De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28792,
      "nombre": "Miraflores De La Sierra, Anejos De",
      "provinciaid": 28
    },
    {
      "cp": 28792,
      "nombre": "Miraflores De La Sierra, Extrarradio De",
      "provinciaid": 28
    },
    {
      "cp": 28794,
      "nombre": "Miralpantano",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Mojadilla, La",
      "provinciaid": 28
    },
    {
      "cp": 28710,
      "nombre": "Molar, El",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Molino De La Hoz (ver Callejero De Las Rozas De Madrid)",
      "provinciaid": 28
    },
    {
      "cp": 28753,
      "nombre": "Molino De Mazacortas",
      "provinciaid": 28
    },
    {
      "cp": 28460,
      "nombre": "Molinos, Los",
      "provinciaid": 28
    },
    {
      "cp": 28420,
      "nombre": "Monjas, Las",
      "provinciaid": 28
    },
    {
      "cp": 28669,
      "nombre": "Monte Las Encinas",
      "provinciaid": 28
    },
    {
      "cp": 28119,
      "nombre": "Monte Tesoro",
      "provinciaid": 28
    },
    {
      "cp": 28190,
      "nombre": "Montejo De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Montemorillo, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28668,
      "nombre": "Monteprincipe",
      "provinciaid": 28
    },
    {
      "cp": 28412,
      "nombre": "Montesclaros",
      "provinciaid": 28
    },
    {
      "cp": 28950,
      "nombre": "Moraleja De Enmedio",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Moraleja, La (ver Callejero Alcobendas)",
      "provinciaid": 28
    },
    {
      "cp": 28411,
      "nombre": "Moralzarzal",
      "provinciaid": 28
    },
    {
      "cp": 28530,
      "nombre": "Morata De TajuÑa",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Mostoles (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28491,
      "nombre": "Navacerrada, Pueblo",
      "provinciaid": 28
    },
    {
      "cp": 28470,
      "nombre": "Navacerrada, De, Puerto",
      "provinciaid": 28
    },
    {
      "cp": 28729,
      "nombre": "Navalafuente",
      "provinciaid": 28
    },
    {
      "cp": 28212,
      "nombre": "Navalagamella",
      "provinciaid": 28
    },
    {
      "cp": 28600,
      "nombre": "Navalcarnero",
      "provinciaid": 28
    },
    {
      "cp": 28296,
      "nombre": "Navalespino",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Navalquejigo",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Navalquejigo, De, Granja",
      "provinciaid": 28
    },
    {
      "cp": 28739,
      "nombre": "Navarredonda (buitrago)",
      "provinciaid": 28
    },
    {
      "cp": 28754,
      "nombre": "Navas De Buitrago",
      "provinciaid": 28
    },
    {
      "cp": 28695,
      "nombre": "Navas Del Rey",
      "provinciaid": 28
    },
    {
      "cp": 28420,
      "nombre": "Navata, La",
      "provinciaid": 28
    },
    {
      "cp": 28430,
      "nombre": "Negrales, Los",
      "provinciaid": 28
    },
    {
      "cp": 28419,
      "nombre": "Nieves Y Sol",
      "provinciaid": 28
    },
    {
      "cp": 28514,
      "nombre": "Nuevo Baztan",
      "provinciaid": 28
    },
    {
      "cp": 28669,
      "nombre": "Olivar Del Miraval, El",
      "provinciaid": 28
    },
    {
      "cp": 28119,
      "nombre": "Olivos, Los (algete)",
      "provinciaid": 28
    },
    {
      "cp": 28515,
      "nombre": "Olmeda De Las Fuentes",
      "provinciaid": 28
    },
    {
      "cp": 28570,
      "nombre": "Orusco",
      "provinciaid": 28
    },
    {
      "cp": 28749,
      "nombre": "Oteruelo Del Valle",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Palacio Valdes, Colegio",
      "provinciaid": 28
    },
    {
      "cp": 28860,
      "nombre": "Paracuellos De Jarama",
      "provinciaid": 28
    },
    {
      "cp": 28297,
      "nombre": "Paradilla (robledondo)",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Paraiso, El, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Pardo, El",
      "provinciaid": 28
    },
    {
      "cp": 28196,
      "nombre": "Paredes De Buitrago",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Parla (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28669,
      "nombre": "Parque Boadilla",
      "provinciaid": 28
    },
    {
      "cp": 28851,
      "nombre": "Parque Corredor Del Henares, Mercado",
      "provinciaid": 28
    },
    {
      "cp": 28108,
      "nombre": "Parque Empresarial La Moraleja",
      "provinciaid": 28
    },
    {
      "cp": 28830,
      "nombre": "Parque Empresarial San Fernando De Henares",
      "provinciaid": 28
    },
    {
      "cp": 28420,
      "nombre": "Parquelagos",
      "provinciaid": 28
    },
    {
      "cp": 28189,
      "nombre": "Patones",
      "provinciaid": 28
    },
    {
      "cp": 28741,
      "nombre": "Paular, Real El, Monasterio",
      "provinciaid": 28
    },
    {
      "cp": 28723,
      "nombre": "Pedrezuela",
      "provinciaid": 28
    },
    {
      "cp": 28696,
      "nombre": "Pelayos De La Presa",
      "provinciaid": 28
    },
    {
      "cp": 28860,
      "nombre": "PeÑa Del Cuervo",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "PeÑa Real",
      "provinciaid": 28
    },
    {
      "cp": 28479,
      "nombre": "PeÑalara",
      "provinciaid": 28
    },
    {
      "cp": 28211,
      "nombre": "Peralejo",
      "provinciaid": 28
    },
    {
      "cp": 28540,
      "nombre": "Perales De TajuÑa",
      "provinciaid": 28
    },
    {
      "cp": 28812,
      "nombre": "Pezuela De Las Torres",
      "provinciaid": 28
    },
    {
      "cp": 28669,
      "nombre": "Pico Centinela (boadilla)",
      "provinciaid": 28
    },
    {
      "cp": 28860,
      "nombre": "Picon, El, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28250,
      "nombre": "Pinar De Puente Nuevo (galapagar), Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28739,
      "nombre": "Pinilla De Buitrago",
      "provinciaid": 28
    },
    {
      "cp": 28749,
      "nombre": "Pinilla Del Valle",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Pino Alto, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28219,
      "nombre": "Pinosol, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28320,
      "nombre": "Pinto",
      "provinciaid": 28
    },
    {
      "cp": 28737,
      "nombre": "PiÑuecar-gandullas",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Pizarrera, La, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28816,
      "nombre": "Poligono Alcanar",
      "provinciaid": 28
    },
    {
      "cp": 28860,
      "nombre": "Poligono De Tiro Valtierra",
      "provinciaid": 28
    },
    {
      "cp": 28864,
      "nombre": "Poligono Del Calvario",
      "provinciaid": 28
    },
    {
      "cp": 28330,
      "nombre": "Poligono Industrial Aimayr",
      "provinciaid": 28
    },
    {
      "cp": 28864,
      "nombre": "Poligono Industrial Ajalvir",
      "provinciaid": 28
    },
    {
      "cp": 28108,
      "nombre": "Poligono Industrial Alcobendas",
      "provinciaid": 28
    },
    {
      "cp": 28320,
      "nombre": "Poligono Industrial Aproin",
      "provinciaid": 28
    },
    {
      "cp": 28860,
      "nombre": "Poligono Industrial Carretera Belvis",
      "provinciaid": 28
    },
    {
      "cp": 28320,
      "nombre": "Poligono Industrial Carretera De San Martin De La Vega",
      "provinciaid": 28
    },
    {
      "cp": 28864,
      "nombre": "Poligono Industrial Coumar",
      "provinciaid": 28
    },
    {
      "cp": 28320,
      "nombre": "Poligono Industrial De Pinto",
      "provinciaid": 28
    },
    {
      "cp": 28119,
      "nombre": "Poligono Industrial El Nogal",
      "provinciaid": 28
    },
    {
      "cp": 28320,
      "nombre": "Poligono Industrial Las Arenas",
      "provinciaid": 28
    },
    {
      "cp": 28830,
      "nombre": "Poligono Industrial San Fernando",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Polonia, La",
      "provinciaid": 28
    },
    {
      "cp": 28492,
      "nombre": "Ponderosa De La Sierra, La",
      "provinciaid": 28
    },
    {
      "cp": 28500,
      "nombre": "Poveda, La",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Pozuelo De Alarcon (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28813,
      "nombre": "Pozuelo Del Rey",
      "provinciaid": 28
    },
    {
      "cp": 28191,
      "nombre": "Pradena Del Rincon",
      "provinciaid": 28
    },
    {
      "cp": 28439,
      "nombre": "Prado De La Iglesia",
      "provinciaid": 28
    },
    {
      "cp": 28411,
      "nombre": "Prado De Los Enebros",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Prado Palomar",
      "provinciaid": 28
    },
    {
      "cp": 28770,
      "nombre": "Presa De Hidraulica (santillana)",
      "provinciaid": 28
    },
    {
      "cp": 28754,
      "nombre": "Presa De Puentes Viejas",
      "provinciaid": 28
    },
    {
      "cp": 28189,
      "nombre": "Presa Del Atazar, Poblado",
      "provinciaid": 28
    },
    {
      "cp": 28190,
      "nombre": "Puebla De La Sierra",
      "provinciaid": 28
    },
    {
      "cp": 28860,
      "nombre": "Puente Del Rio Jarama, Viviendas",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Puente Real",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Puentelasierra, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28740,
      "nombre": "Puerto De Cotos",
      "provinciaid": 28
    },
    {
      "cp": 28693,
      "nombre": "Quijorna",
      "provinciaid": 28
    },
    {
      "cp": 28707,
      "nombre": "R.a.c.e. (real Automovil Club De EspaÑa)",
      "provinciaid": 28
    },
    {
      "cp": 28740,
      "nombre": "Rascafria",
      "provinciaid": 28
    },
    {
      "cp": 28691,
      "nombre": "Raya Del Palancar, La, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28450,
      "nombre": "Reajo Del Roble, El",
      "provinciaid": 28
    },
    {
      "cp": 28721,
      "nombre": "RedueÑa",
      "provinciaid": 28
    },
    {
      "cp": 28679,
      "nombre": "Residencia Ancianos (villaviciosa Odon)",
      "provinciaid": 28
    },
    {
      "cp": 28479,
      "nombre": "Residencia Banco EspaÑol Credito (cercedilla)",
      "provinciaid": 28
    },
    {
      "cp": 28479,
      "nombre": "Residencia Del Banco Rural (cercedilla)",
      "provinciaid": 28
    },
    {
      "cp": 28660,
      "nombre": "Residencia Nuestra SeÑora Del Pilar (boadilla)",
      "provinciaid": 28
    },
    {
      "cp": 28440,
      "nombre": "Residencia San Francisco, Edificio",
      "provinciaid": 28
    },
    {
      "cp": 28815,
      "nombre": "Ribatejada",
      "provinciaid": 28
    },
    {
      "cp": 28294,
      "nombre": "Rio Cofio, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28295,
      "nombre": "Rio, El, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Rivas-vaciamadrid (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Robellar, El",
      "provinciaid": 28
    },
    {
      "cp": 28194,
      "nombre": "Robledillo De La Jara",
      "provinciaid": 28
    },
    {
      "cp": 28294,
      "nombre": "Robledo De Chavela",
      "provinciaid": 28
    },
    {
      "cp": 28294,
      "nombre": "Robledo, De, Estacion",
      "provinciaid": 28
    },
    {
      "cp": 28297,
      "nombre": "Robledondo",
      "provinciaid": 28
    },
    {
      "cp": 28755,
      "nombre": "Robregordo",
      "provinciaid": 28
    },
    {
      "cp": 28439,
      "nombre": "Roca, La",
      "provinciaid": 28
    },
    {
      "cp": 28420,
      "nombre": "Rosales, Los (navata, La)",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Rosario, El",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Rozas De Madrid, Las (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28649,
      "nombre": "Rozas De Puerto Real",
      "provinciaid": 28
    },
    {
      "cp": 28750,
      "nombre": "San Agustin Del Guadalix",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "San Antonio (soto Del Real)",
      "provinciaid": 28
    },
    {
      "cp": 28830,
      "nombre": "San Fernando De Henares",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "San Ignacio De El Escorial",
      "provinciaid": 28
    },
    {
      "cp": 28439,
      "nombre": "San Jose, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28200,
      "nombre": "San Lorenzo De El Escorial",
      "provinciaid": 28
    },
    {
      "cp": 28739,
      "nombre": "San Mames",
      "provinciaid": 28
    },
    {
      "cp": 28939,
      "nombre": "San Martin (arroyomolinos)",
      "provinciaid": 28
    },
    {
      "cp": 28330,
      "nombre": "San Martin De La Vega",
      "provinciaid": 28
    },
    {
      "cp": 28320,
      "nombre": "San Martin De La Vega, De, Carretera",
      "provinciaid": 28
    },
    {
      "cp": 28680,
      "nombre": "San Martin De Valdeiglesias",
      "provinciaid": 28
    },
    {
      "cp": 28770,
      "nombre": "San Pedro",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "San Sebastian De Los Reyes (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28479,
      "nombre": "Sanatorio De Fuenfria",
      "provinciaid": 28
    },
    {
      "cp": 28440,
      "nombre": "Sanatorio De Guadarrama",
      "provinciaid": 28
    },
    {
      "cp": 28440,
      "nombre": "Sanatorio Hispanoamericano (guadarrama)",
      "provinciaid": 28
    },
    {
      "cp": 28440,
      "nombre": "Sanatorio Militar Antituberculoso (guadarrama)",
      "provinciaid": 28
    },
    {
      "cp": 28480,
      "nombre": "Sanatorio Tablada",
      "provinciaid": 28
    },
    {
      "cp": 28229,
      "nombre": "Santa Maria (via Del Pardo), Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28296,
      "nombre": "Santa Maria Alameda, De, Estacion",
      "provinciaid": 28
    },
    {
      "cp": 28296,
      "nombre": "Santa Maria De La Alameda",
      "provinciaid": 28
    },
    {
      "cp": 28818,
      "nombre": "Santorcaz",
      "provinciaid": 28
    },
    {
      "cp": 28817,
      "nombre": "Santos De La Humosa, Los",
      "provinciaid": 28
    },
    {
      "cp": 28737,
      "nombre": "Serna Del Monte, La",
      "provinciaid": 28
    },
    {
      "cp": 28500,
      "nombre": "Serna, La",
      "provinciaid": 28
    },
    {
      "cp": 28815,
      "nombre": "Serracines",
      "provinciaid": 28
    },
    {
      "cp": 28195,
      "nombre": "Serrada De La Fuente",
      "provinciaid": 28
    },
    {
      "cp": 28440,
      "nombre": "Serranilla, La (guadarrama), Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28979,
      "nombre": "Serranillos Del Valle",
      "provinciaid": 28
    },
    {
      "cp": 28609,
      "nombre": "Sevilla La Nueva",
      "provinciaid": 28
    },
    {
      "cp": 28753,
      "nombre": "Sieteiglesias",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Solana, La",
      "provinciaid": 28
    },
    {
      "cp": 28756,
      "nombre": "Somosierra",
      "provinciaid": 28
    },
    {
      "cp": 28109,
      "nombre": "Soto De La Moraleja",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Soto De ViÑuelas",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Soto Del Real",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "Sotosierra",
      "provinciaid": 28
    },
    {
      "cp": 28294,
      "nombre": "Suiza EspaÑola, La, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28480,
      "nombre": "Tablada, Apeadero",
      "provinciaid": 28
    },
    {
      "cp": 28160,
      "nombre": "Talamanca Del Jarama",
      "provinciaid": 28
    },
    {
      "cp": 28550,
      "nombre": "Tielmes De TajuÑa",
      "provinciaid": 28
    },
    {
      "cp": 28359,
      "nombre": "Titulcia",
      "provinciaid": 28
    },
    {
      "cp": 28850,
      "nombre": "Torrejon De Ardoz",
      "provinciaid": 28
    },
    {
      "cp": 28991,
      "nombre": "Torrejon De La Calzada",
      "provinciaid": 28
    },
    {
      "cp": 28990,
      "nombre": "Torrejon De Velasco",
      "provinciaid": 28
    },
    {
      "cp": 28180,
      "nombre": "Torrelaguna",
      "provinciaid": 28
    },
    {
      "cp": 28250,
      "nombre": "Torrelodones",
      "provinciaid": 28
    },
    {
      "cp": 28189,
      "nombre": "Torremocha Del Jarama",
      "provinciaid": 28
    },
    {
      "cp": 28813,
      "nombre": "Torres De La Alameda",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Tratamiento De Aguas (goloso, El)",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Tres Cantos",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Tres Dehesas, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28706,
      "nombre": "Urbanizacion Club De Campo",
      "provinciaid": 28
    },
    {
      "cp": 28380,
      "nombre": "Urtajo, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28594,
      "nombre": "Valdaracete",
      "provinciaid": 28
    },
    {
      "cp": 28750,
      "nombre": "Valdeagua",
      "provinciaid": 28
    },
    {
      "cp": 28816,
      "nombre": "Valdeavero",
      "provinciaid": 28
    },
    {
      "cp": 28669,
      "nombre": "ValdecabaÑas",
      "provinciaid": 28
    },
    {
      "cp": 28939,
      "nombre": "Valdefuentes",
      "provinciaid": 28
    },
    {
      "cp": 28750,
      "nombre": "Valdelagua, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28391,
      "nombre": "Valdelaguna",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Valdelamasa, De, Finca",
      "provinciaid": 28
    },
    {
      "cp": 28760,
      "nombre": "Valdeloshielos, De Los, Finca",
      "provinciaid": 28
    },
    {
      "cp": 28729,
      "nombre": "Valdemanco",
      "provinciaid": 28
    },
    {
      "cp": 28295,
      "nombre": "Valdemaqueda",
      "provinciaid": 28
    },
    {
      "cp": 28210,
      "nombre": "Valdemorillo",
      "provinciaid": 28
    },
    {
      "cp": 28000,
      "nombre": "Valdemoro (ver Callejero)",
      "provinciaid": 28
    },
    {
      "cp": 28430,
      "nombre": "Valdencina",
      "provinciaid": 28
    },
    {
      "cp": 28130,
      "nombre": "Valdeolmos",
      "provinciaid": 28
    },
    {
      "cp": 28170,
      "nombre": "Valdepielagos",
      "provinciaid": 28
    },
    {
      "cp": 28150,
      "nombre": "Valdetorres De Jarama",
      "provinciaid": 28
    },
    {
      "cp": 28511,
      "nombre": "Valdilecha",
      "provinciaid": 28
    },
    {
      "cp": 28209,
      "nombre": "Valle De Los Caidos, Sta Cruz",
      "provinciaid": 28
    },
    {
      "cp": 28213,
      "nombre": "Valle Del Sol, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28380,
      "nombre": "Vallejos, Los, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28380,
      "nombre": "Valles San Juan, Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28812,
      "nombre": "Valverde De Alcala",
      "provinciaid": 28
    },
    {
      "cp": 28891,
      "nombre": "Velilla De San Antonio",
      "provinciaid": 28
    },
    {
      "cp": 28722,
      "nombre": "Vellon, El",
      "provinciaid": 28
    },
    {
      "cp": 28500,
      "nombre": "Ventorro De La Julia",
      "provinciaid": 28
    },
    {
      "cp": 28219,
      "nombre": "Ventorro, El (valdemorillo), Urbanizacion",
      "provinciaid": 28
    },
    {
      "cp": 28729,
      "nombre": "Venturada",
      "provinciaid": 28
    },
    {
      "cp": 28630,
      "nombre": "Villa Del Prado",
      "provinciaid": 28
    },
    {
      "cp": 28360,
      "nombre": "Villaconejos",
      "provinciaid": 28
    },
    {
      "cp": 28692,
      "nombre": "Villafranca Del Castillo",
      "provinciaid": 28
    },
    {
      "cp": 28400,
      "nombre": "Villalba De Guadarrama",
      "provinciaid": 28
    },
    {
      "cp": 28810,
      "nombre": "Villalbilla",
      "provinciaid": 28
    },
    {
      "cp": 28598,
      "nombre": "Villamanrique De Tajo",
      "provinciaid": 28
    },
    {
      "cp": 28610,
      "nombre": "Villamanta",
      "provinciaid": 28
    },
    {
      "cp": 28609,
      "nombre": "Villamantilla",
      "provinciaid": 28
    },
    {
      "cp": 28691,
      "nombre": "Villanueva De La CaÑada",
      "provinciaid": 28
    },
    {
      "cp": 28609,
      "nombre": "Villanueva De Perales",
      "provinciaid": 28
    },
    {
      "cp": 28229,
      "nombre": "Villanueva Del Pardillo",
      "provinciaid": 28
    },
    {
      "cp": 28512,
      "nombre": "Villar Del Olmo",
      "provinciaid": 28
    },
    {
      "cp": 28590,
      "nombre": "Villarejo De Salvanes",
      "provinciaid": 28
    },
    {
      "cp": 28670,
      "nombre": "Villaviciosa De Odon",
      "provinciaid": 28
    },
    {
      "cp": 28739,
      "nombre": "Villavieja De Lozoya",
      "provinciaid": 28
    },
    {
      "cp": 28791,
      "nombre": "ViÑas, Las",
      "provinciaid": 28
    },
    {
      "cp": 28293,
      "nombre": "Zarzalejo",
      "provinciaid": 28
    },
    {
      "cp": 28293,
      "nombre": "Zarzalejo, De, Estacion",
      "provinciaid": 28
    },
    {
      "cp": 28292,
      "nombre": "Zorreras, Las",
      "provinciaid": 28
    },
    {
      "cp": 28810,
      "nombre": "Zulema",
      "provinciaid": 28
    },
    {
      "cp": 28310,
      "nombre": "Espinar, El",
      "provinciaid": 28
    },
    {
      "cp": 28310,
      "nombre": "Majazala",
      "provinciaid": 28
    },
    {
      "cp": 28310,
      "nombre": "Quintillo, El",
      "provinciaid": 28
    },
    {
      "cp": 28070,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28071,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28083,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28080,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28087,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28085,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28086,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28082,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28082,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28009,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28006,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28046,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28009,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28009,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28006,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28046,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28006,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28006,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28046,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28009,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28009,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28009,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28009,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28001,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28009,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28006,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28040,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28006,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28006,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28036,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28003,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28030,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28012,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28015,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28047,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28016,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28053,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28034,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28013,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28017,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28007,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28027,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28026,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28008,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28018,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28031,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28002,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28028,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28043,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28022,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28014,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28038,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28052,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28051,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28037,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28035,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28049,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28039,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28050,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28029,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28019,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28020,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28005,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28032,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28011,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28004,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28048,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28054,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28044,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28025,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28021,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28045,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28042,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28041,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28024,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28023,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28010,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
      "provinciaid": 28
    },
    {
      "cp": 28033,
      "nombre": "Madrid",
