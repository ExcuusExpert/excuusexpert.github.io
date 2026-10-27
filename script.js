/* -----------------------------
   HAMBURGER MENU LOGICA
----------------------------- */
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  if (navMenu) {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
      hamburgerIcon.className = "fa-solid fa-xmark";
    } else {
      hamburgerIcon.className = "fa-solid fa-bars";
    }
  }
}

/* -----------------------------
   SMOES DATABASE
----------------------------- */
const database = {
  "Te laat": {
    "1-2": [
      "Sorry, ik was een beetje laat.",
      "Mijn wekker ging net iets te laat af.",
      "Oeps, de tijd vloog voorbij vanochtend.",
      "Excuus, de brug stond net open.",
      "Sorry, ik moest heel hard tegen de wind in fietsen.",
      "Excuus, kon mijn sleutels nergens vinden.",
      "Sorry, de ketting van mijn fiets vloog eronderuit.",
      "Oeps, de bus reed net voor mijn neus weg.",
      "Sorry, ik was mijn kluissleutel even kwijt.",
      "Excuus, de lift liet erg lang op zich wachten.",
      "Sorry, ik moest onderweg even wachten op het stoplicht.",
      "Oeps, ik liep naar het verkeerde lokaal.",
      "Sorry, ik kon mijn tas zo snel niet vinden.",
      "Excuus, ik stond achter een hele trage fietser.",
      "Sorry, mijn fietsband was bijna leeg.",
      "Oeps, ik was even afgeleid in de gang.",
      "Sorry, ik moest nog snel mijn boeken pakken.",
      "Excuus, ik zag de tijd niet goed op de klok.",
      "Sorry, mijn schoenveters raakten in de knoop.",
      "Oeps, ik was vergeten hoe laat de les begon.",
      "Sorry, er stond een file voor de fietsenstalling.",
      "Excuus, ik moest mijn jas nog ophangen.",
      "Sorry, ik dacht echt dat ik nog tijd genoeg had.",
      "Oeps, ik raakte even in gesprek in de gang.",
      "Sorry, ik ben er nu!"
    ],
    "3-4": [
      "Sorry dat ik te laat ben. Mijn ochtend liep anders dan gepland.",
      "Excuus voor de vertraging, de bus had wat vertraging onderweg.",
      "Sorry dat ik te laat ben, ik had een lekke band die ik snel moest plakken.",
      "Mijn excuses, het verkeer zat vanochtend flink tegen.",
      "Sorry dat ik te laat ben, de brug ging open vlak toen ik eraankwam.",
      "Excuus, mijn wekker is helaas niet afgegaan vanochtend.",
      "Sorry, ik moest nog even wachten op de aansluitende bus.",
      "Mijn excuses, ik kon mijn fietssleutel niet vinden toen ik weg wilde.",
      "Sorry dat ik te laat ben, het was erg druk bij de trap en gangen.",
      "Excuus voor de vertraging, mijn fietsketting liep eraf onderweg.",
      "Sorry, ik liep eerst per ongeluk naar de verkeerde vleugel van de school.",
      "Mijn excuses dat ik te laat ben, de trein had een paar minuten vertraging.",
      "Sorry dat ik te laat binnenkom, het regende zo hard dat ik moest schuilen.",
      "Excuus, ik moest nog snel mijn pasje laten scannen bij de balie.",
      "Sorry dat ik te laat ben, mijn tas ging kapot onderweg naar school.",
      "Mijn excuses, de verkeerslichten stonden erg lang op rood.",
      "Sorry, mijn spullen lagen niet op de vaste plek waardoor ik vertraging opliep.",
      "Excuus dat ik te laat ben, ik was de tijd uit het oog verloren tijdens het pauzeren.",
      "Sorry, ik moest nog even langs de kluisjes voor de juiste boeken.",
      "Mijn excuses voor de vertraging, er was een omleiding op mijn fietsroute.",
      "Sorry dat ik te laat ben, het was ontzettend druk in de fietsenstalling.",
      "Excuus, ik moest vanmorgen helaas nog even terug naar huis voor mijn spullen.",
      "Sorry dat ik te laat ben, de buschauffeur sloeg mijn halte per ongeluk over.",
      "Mijn excuses, ik was in de veronderstelling dat de les vijf minuten later begon.",
      "Sorry voor de vertraging, ik ben meteen doorgelopen toen ik aankwam."
    ],
    "5-6": [
      "Sorry dat ik te laat ben. Mijn planning liep vanochtend uit en daardoor kwam ik later aan.",
      "Mijn excuses voor de vertraging. Ik had onderweg onverwachte vertraging door het verkeer.",
      "Excuus dat ik te laat ben. Ik had mijn vertrektijd iets te krap berekend vanochtend.",
      "Mijn excuses, mijn fiets vertoonde kuren onderweg waardoor ik vertraging opliep.",
      "Sorry dat ik te laat ben. Het openbaar vervoer reed helaas niet volgens de normale dienstregeling.",
      "Mijn excuses voor het laattijdige binnenkomen. Ik ben meteen doorgegaan naar de klas toen ik aankwam.",
      "Excuus dat ik te laat ben. Er ontstond onderweg op de route onverwachte drukte.",
      "Mijn excuses dat ik te laat ben. Ik ben vanmorgen helaas later van huis vertrokken dan de bedoeling was.",
      "Sorry dat ik de les verstoor. Mijn overstap op het station duurde langer dan verwacht.",
      "Mijn excuses voor mijn te late komst. Ik had wat opstartproblemen deze ochtend.",
      "Excuus voor de vertraging. Ik moest onderweg een alternatieve route nemen.",
      "Mijn excuses dat ik te laat ben. Ik zal me snel installeren zodat ik mee kan doen.",
      "Sorry dat ik te laat binnenstap. Mijn spullen stonden nog niet klaar vanochtend.",
      "Mijn excuses, het inhalen van de vertraging onderweg is helaas niet helemaal gelukt.",
      "Excuus voor de vertraging. De verkeersomstandigheden waren vanmorgen minder gunstig.",
      "Mijn excuses dat ik te laat ben. Ik had de tijdsduur van mijn reis onderschat.",
      "Sorry dat ik later ben. Ik heb mijn best gedaan om er zo snel mogelijk te zijn.",
      "Mijn excuses voor de verstoring. Ik had een klein technisch probleem met mijn fiets.",
      "Excuus dat ik te laat ben. Het aansluitende openbaar vervoer sloot helaas niet goed aan.",
      "Mijn excuses, ik was in het verkeerde lokaal gaan zitten en moest omlopen.",
      "Sorry dat ik te laat binnenkom. Mijn ochtendroutine liep helaas wat vertraging op.",
      "Mijn excuses voor mijn verlate binnenkomst. Ik zal direct aanschuiven bij de les.",
      "Excuus, ik had niet door dat de bel al gegaan was toen ik in de gang stond.",
      "Mijn excuses dat ik te laat ben. Ik neem meteen mijn spullen erbij.",
      "Sorry voor de vertraging. Ik zal zorgen dat ik dit snel inhaal."
    ],
    "7-8": [
      "Mijn excuses dat ik te laat ben. Mijn planning liep vanochtend uit, waardoor ik later ben aangekomen. Ik zal hier de volgende keer beter rekening mee houden.",
      "Excuus voor de vertraging. Ik had het openbaar vervoer beter moeten inplannen. Dit zal niet meer gebeuren.",
      "Mijn excuses dat ik te laat ben. Ik heb de reistijd verkeerd ingeschat en zal voortaan eerder van huis vertrekken.",
      "Het spijt me dat ik de les verstoor. Ik ondervond vertraging onderweg, maar ik had rekening moeten houden met de drukte.",
      "Mijn welgemanierde excuses voor het te laat komen. Ik zorg ervoor dat ik mijn planning voor morgen direct aanpas.",
      "Excuus dat ik te laat ben. Ik had mijn wekker zorgvuldiger moeten controleren gisteravond.",
      "Mijn excuses dat ik te laat ben. Ik had onderweg oponthoud, maar ik had een ruimere marge moeten nemen.",
      "Het spijt me dat ik later ben. Ik zorg dat ik voortaan betere voorbereidingen tref in de ochtend.",
      "Mijn excuses voor het verlaat binnenkomen. Ik zal er strenger op letten dat ik ruim op tijd van huis ga.",
      "Excuus voor de vertraging. Ik neem de verantwoordelijkheid voor het niet goed inschatten van de tijd.",
      "Mijn excuses dat ik de les onderbreek. Ik had rekening moeten houden met mogelijke vertragingen onderweg.",
      "Het spijt me dat ik te laat ben aangekomen. Ik zal er alles aan doen om dit in de toekomst te voorkomen.",
      "Mijn excuses voor de vertraging. Ik zal direct stil gaan zitten en het lokaal niet verder verstoren.",
      "Excuus dat ik niet op tijd was. Ik had mijn fiets vooraf beter moeten controleren op mankementen.",
      "Mijn excuses dat ik te laat ben. Ik begrijp dat dit vervelend is en zal voortaan een eerdere bus nemen.",
      "Het spijt me dat ik te laat ben. Ik neem de gemiste instructies na de les graag even door met een klasgenoot.",
      "Mijn excuses voor de vertraging vanochtend. Ik let voortaan beter op de klok om dit te vermijden.",
      "Excuus voor mijn verlate binnenkomst. Ik neem de volledige verantwoordelijkheid voor het mislopen van de planning.",
      "Mijn excuses dat ik niet stipt op tijd was. Ik zorg dat ik morgen ruim voor de bel aanwezig ben.",
      "Het spijt me dat ik te laat ben. Ik had mijn spullen gisteravond al klaar moeten leggen om tijd te besparen.",
      "Mijn excuses voor de vertraging. Ik zal mijn ochtendrooster aanpassen om dit in de toekomst te voorkomen.",
      "Excuus dat ik te laat ben binnen gekomen. Ik zal direct aansluiten en de opdrachten stilletjes oppakken.",
      "Mijn excuses dat ik te laat ben. Ik had sneller moeten handelen toen ik merkte dat ik krap in de tijd zat.",
      "Het spijt me dat ik niet stipt aanwezig was. Ik zal beter opletten om het lokaal niet opnieuw te verstoren.",
      "Mijn excuses voor de opgelopen vertraging. Ik zal zorgen dat ik mijn reisvoorbereiding vanaf nu aanscherp."
    ],
    "9-10": [
      "Mijn excuses dat ik te laat ben. Ik had mijn tijd vanochtend niet goed ingeschat en daardoor ben ik later aangekomen. Ik begrijp dat dit mijn verantwoordelijkheid is.",
      "Uiterste excuses voor mijn verlate binnenkomst. Ik begrijp dat stiptheid belangrijk is en ik neem de volledige verantwoording voor dit verzuim.",
      "Het spijt me oprecht dat ik te laat ben. Ik had de mogelijke obstakels onderweg moeten incalculeren en accepteer de consequenties hiervan.",
      "Mijn oprechte excuses voor het verstoren van de les. Ik ben tekortgeschoten in mijn planning en zal hier lering uit trekken.",
      "Excuus voor het laattijdig verschijnen. Het is mijn eigen verantwoordelijkheid om op tijd te zijn en ik heb hierin gefaald vanochtend.",
      "Mijn excuses dat ik de leswisseling niet tijdig heb gehaald. Ik begrijp dat dit onprofessioneel is en zal zorgen dat het niet weer gebeurt.",
      "Het spijt me ten zeerste dat ik te laat ben. Ik neem de volledige schuld op me voor de slechte tijdsindeling vanmorgen.",
      "Oprechte excuses voor mijn te late komst. Ik respecteer uw tijd en de les, en betreur het dat ik niet stipt aanwezig was.",
      "Mijn excuses voor de ontstane vertraging. Ik had een ruimere veiligheidsmarge in moeten bouwen voor mijn reis.",
      "Excuus dat ik later ben binnengekomen. Ik snap dat dit de continuïteit van de les verstoort en bied daar mijn verontschuldigingen voor aan.",
      "Mijn oprechte excuses voor mijn verzuim om op tijd te zijn. Ik zal aan het einde van de les eventuele gemiste instructies inhalen.",
      "Het spijt me dat ik te laat ben. Ik had mijn voorbereidingen gisteravond moeten afronden en neem hiervoor de verantwoording.",
      "Mijn excuses voor het niet nakomen van de afgesproken begintijd. Ik zal mijn persoonlijke planning hier direct op aanpassen.",
      "Excuus voor het laattijdige binnenkomen. Ik begrijp volkomen dat stiptheid een vereiste is en ik zal me hier strikter aan houden.",
      "Mijn oprechte excuses dat ik te laat ben aangekomen. Ik aanvaard dat de oorzaak van de vertraging volledig bij mij ligt.",
      "Het spijt me dat ik de les verstoor door te laat te komen. Ik zal stil mijn plaats innemen om verdere hinder te voorkomen.",
      "Mijn excuses voor de gebrekkige tijdsindeling vanochtend. Ik neem de volledige verantwoordelijkheid voor deze vertraging.",
      "Excuus voor het niet tijdig aanwezig zijn op de locatie. Ik had de verkeersomstandigheden vooraf moeten controleren.",
      "Mijn oprechte excuses voor het te laat verschijnen in de les. Ik begrijp de regels omtrent aanwezigheid en betreur mijn verzuim.",
      "Het spijt me dat ik niet op de afgesproken tijd aanwezig kon zijn. Ik neem dit voorval uiterst serieus.",
      "Mijn excuses dat ik te laat ben. Ik zal er persoonlijk zorg voor dragen dat mijn stiptheid vanaf heden onberispelijk is.",
      "Excuus dat ik uw les verstoor. Ik begrijp dat tijdigheid essentieel is en accepteer de eventuele maatregelen.",
      "Mijn oprechte excuses voor de vertraging. Ik heb de situatie verkeerd beoordeeld en zal mijn gedrag hierop aanpassen.",
      "Het spijt me ten zeerste dat ik te laat ben binnengekomen. Ik zal de gemiste stof zelfstandig en zo snel mogelijk inhalen.",
      "Mijn excuses voor mijn onstiptheid vanmorgen. Ik begrijp dat dit mijn eigen verantwoordelijkheid is en zal dit voortaan voorkomen."
    ]
  },
  "Huiswerk vergeten": {
    "1-2": [
      "Oeps, ik ben mijn huiswerk vergeten.",
      "Ik dacht echt dat we dit pas volgende week hoefden te maken.",
      "Helemaal vergeten dat dit voor vandaag was!",
      "Ik heb het op mijn bureau laten liggen.",
      "Mijn kat zat op mijn schrift en ik kon er niet bij.",
      "Oeps, ik had de verkeerde bladzijde opgeschreven.",
      "Ik dacht dat het een mondelinge opdracht was.",
      "Ik kan mijn schrift nergens meer vinden in mijn tas.",
      "Ik was in de veronderstelling dat het voor morgen was.",
      "Oeps, niet op Magister of Somtoday gekeken gisteravond.",
      "Ik dacht dat we dit in de les gingen afmaken.",
      "Mijn schrift ligt nog op de keukentafel.",
      "Oeps, ik ben vergeten het in te pakken vanochtend.",
      "Ik dacht dat het een groepsopdracht was die iemand anders had.",
      "Oeps, ik heb de verkeerde opdracht gemaakt.",
      "Ik had het werkblad niet meegekregen vorige les.",
      "Oeps, mijn laptop was leeg en ik kon niet bij het bestand.",
      "Ik dacht dat we vandaag geen les hadden van dit vak.",
      "Ik heb het per ongeluk in mijn kluisje laten liggen.",
      "Oeps, ik dacht dat dit pas voor het volgende blok was.",
      "Mijn broertje heeft per ongeluk mijn schrift gepakt.",
      "Ik ben vergeten het op te slaan op mijn computer.",
      "Oeps, ik dacht dat dit optioneel huiswerk was.",
      "Ik heb alleen het eerste deel af gekregen.",
      "Oeps, ik was er heilig van overtuigd dat ik het al had ingeleverd."
    ],
    "3-4": [
      "Sorry, ik ben mijn huiswerk vergeten mee te nemen.",
      "Excuses, ik heb het thuis gemaakt maar ben het schrift vergeten in te pakken.",
      "Sorry, ik dacht dat we vandaag een andere les hadden.",
      "Excuses, mijn document wilde gisteravond niet printen.",
      "Sorry, ik heb per ongeluk het verkeerde hoofdstuk gemaakt.",
      "Excuses, ik ben mijn tas gisteravond vergeten in te ruimen.",
      "Sorry, het werkblad ligt helaas nog op mijn bureau.",
      "Excuses, ik dacht dat de deadline pas morgen was.",
      "Sorry, ik was in de veronderstelling dat dit pas volgende week hoefde.",
      "Excuses, ik heb het bestand wel gemaakt maar kon het niet openen.",
      "Sorry, ik ben vergeten mijn schrift uit mijn kluisje te halen.",
      "Excuses, ik heb de uitwerking op een los blaadje gemaakt en kan het niet vinden.",
      "Sorry, ik dacht dat dit een online opdracht was.",
      "Excuses, ik heb gisteren het verkeerde boek mee naar huis genomen.",
      "Sorry, ik was vergeten op Magister te kijken voor de exacte opdrachten.",
      "Excuses, mijn laptop startte niet op toen ik het wilde uitprinten.",
      "Sorry, ik heb het gemaakt op de computer maar kon het niet mailen.",
      "Excuses, ik dacht dat we vandaag alleen de theorie zouden behandelen.",
      "Sorry, ik heb helaas de verkeerde opgaven gemaakt.",
      "Excuses, ik was in de veronderstelling dat het al ingeleverd was.",
      "Sorry, ik ben vergeten mijn werkmap mee te nemen.",
      "Excuses, ik heb de helft gemaakt en ben toen vergeten door te werken.",
      "Sorry, ik had gisteren een ander rooster in mijn hoofd.",
      "Excuses, mijn schrift ligt helaas nog op de keukentafel.",
      "Sorry, ik dacht dat we het samen in de klas zouden nakijken en maken."
    ],
    "5-6": [
      "Mijn excuses, ik heb mijn huiswerk thuis laten liggen. Ik was vergeten het vanochtend in mijn tas te doen.",
      "Sorry voor het ongemak, ik heb de opdracht wel afgemaakt maar het verkeerde schrift meegenomen.",
      "Mijn excuses, ik was in de veronderstelling dat de deadline op een latere datum viel.",
      "Excuus dat ik het huiswerk niet bij me heb, ik heb mijn spullen vanochtend haastig ingepakt.",
      "Mijn excuses, ik heb de opdracht thuis gemaakt op de computer, maar het lukte niet om het op te slaan.",
      "Sorry dat ik het niet kan laten zien, ik heb de uitwerkingen per ongeluk in mijn kluis laten liggen.",
      "Mijn excuses, ik had de verkeerde paragraaf genoteerd in mijn agenda en heb daardoor het verkeerde gemaakt.",
      "Excuus voor het ontbreken van mijn huiswerk, mijn tas is vanochtend thuis blijven staan.",
      "Mijn excuses, ik heb de stof wel geleerd maar de schriftelijke verwerking thuis laten liggen.",
      "Sorry dat ik mijn huiswerk niet bij me heb, ik dacht dat we het digitaal moesten inleveren.",
      "Mijn excuses, ik had gisteravond problemen met de printer en kon het bestand niet afdrukken.",
      "Excuus dat het huiswerk ontbreekt, ik ben gisteravond vergeten mijn tas te controleren.",
      "Mijn excuses, ik heb het huiswerk gemaakt op een los vel dat nu nog thuis ligt.",
      "Sorry voor de verwarring, ik dacht dat dit pas voor de les van overmorgen gepland stond.",
      "Mijn excuses, ik heb per ongeluk de opdrachten van de volgende paragraaf gemaakt.",
      "Excuus dat ik het niet bij me heb, ik heb gisteravond gewerkt aan het verkeerde vak.",
      "Mijn excuses, ik had technische problemen waardoor ik niet bij het online lesmateriaal kon.",
      "Sorry dat ik mijn werk niet kan tonen, ik heb het gemaakt maar vergeten mee te nemen.",
      "Mijn excuses, ik was in de veronderstelling dat we deze opdrachten in de les zouden bespreken.",
      "Excuus voor de vertraging, ik kan het bestand wel later vandaag alsnog naar u mailen.",
      "Mijn excuses, ik heb het huiswerk in de verkeerde map opgeborgen waardoor ik het niet bij me heb.",
      "Sorry voor het niet bij me hebben van het huiswerk, ik heb de planning van deze week verkeerd gelezen.",
      "Mijn excuses, het huiswerk is gemaakt maar ligt nog op mijn werkplek thuis.",
      "Excuus dat ik het niet bij me heb, ik heb per ongeluk mijn oude schrift meegenomen.",
      "Mijn excuses, ik ben vergeten de uitgewerkte opdrachten vanmorgen in mijn tas te steken."
    ],
    "7-8": [
      "Mijn excuses, ik heb mijn huiswerk wel gemaakt maar ben vergeten het mee te nemen. Ik had mijn tas beter moeten controleren.",
      "Het spijt me dat ik mijn huiswerk niet bij me heb. Ik had de planning beter moeten bijhouden en zal dit voortaan beter controleren.",
      "Excuus voor het ontbreken van de opdracht. Ik neem de verantwoordelijkheid en zorg dat ik het morgen alsnog laat zien.",
      "Mijn excuses dat ik het huiswerk niet kan tonen. Ik had gisteravond mijn spullen al klaar moeten leggen om dit te voorkomen.",
      "Het spijt me dat ik de verkeerde opgaven heb gemaakt. Ik had de studiewijzer beter moeten raadplegen.",
      "Mijn excuses, ik heb het bestand wel digitaal af maar kon het niet printen. Ik had hier eerder een oplossing voor moeten zoeken.",
      "Excuus dat mijn huiswerk thuis ligt. Ik had mijn tas vanmorgen zorgvuldiger moeten inruimen.",
      "Het spijt me dat ik de deadline verkeerd begrepen heb. Ik had bij twijfel even een klasgenoot of de docent moeten raadplegen.",
      "Mijn excuses dat ik het werk niet bij me heb. Ik zal het vanmiddag thuis direct inscannen en naar u opsturen.",
      "Excuus voor het ongemak. Ik heb het gemaakt, maar door een gebrek aan controle ligt het nog op mijn bureau.",
      "Het spijt me dat ik het niet af heb. Ik had eerder om hulp moeten vragen toen ik bij een opdracht vastliep.",
      "Mijn excuses, ik neem de volledige verantwoordelijkheid voor het vergeten van mijn huiswerkmap.",
      "Excuus dat ik het huiswerk niet bij me heb. Ik zorg dat dit voorval zich niet meer herhaalt.",
      "Het spijt me dat mijn werk ontbreekt. Ik had mijn agenda gisteravond beter moeten controleren.",
      "Mijn excuses voor het niet kunnen tonen van de uitwerkingen. Ik had de opdrachten op de juiste plek moeten bewaren.",
      "Excuus dat het huiswerk thuis ligt. Ik zal de gemiste onderdelen van de les zo goed mogelijk proberen mee te doen.",
      "Het spijt me dat ik de verkeerde paragraaf heb gemaakt. Ik let vanaf nu beter op bij de instructie.",
      "Mijn excuses, ik had mijn planning strakker moeten hanteren zodat het huiswerk tijdig ingepakt was.",
      "Excuus voor het vergeten van het schrift. Ik vraag na de les welk onderdeel ik extra moet inhalen.",
      "Het spijt me dat het werk niet compleet is. Ik had gisteravond door moeten werken tot het af was.",
      "Mijn excuses dat ik het bestand niet bij me heb. Ik had een back-up moeten maken of het naar mezelf moeten mailen.",
      "Excuus dat mijn huiswerk ontbreekt. Ik neem het mee naar de volgende les om alsnog te laten controleren.",
      "Het spijt me dat ik onzorgvuldig ben geweest met het inpakken van mijn schooltas vanochtend.",
      "Mijn excuses, ik had beter op de lesplanner moeten kijken zodat ik het juiste werk bij me had.",
      "Excuus dat het huiswerk thuis ligt. Ik zal er alert op zijn dat mijn spullen voortaan compleet zijn."
    ],
    "9-10": [
      "Mijn excuses. Ik heb mijn huiswerk gemaakt, maar ben vergeten het mee te nemen. Ik had mijn tas beter moeten controleren voordat ik naar school ging. Ik begrijp dat dit mijn verantwoordelijkheid is.",
      "Uiterste excuses voor het niet bij me hebben van het huiswerk. Ik begrijp dat dit mijn eigen verzuim is en accepteer de consequenties hiervan.",
      "Het spijt me oprecht dat ik de uitgewerkte opdrachten niet kan overleggen. Ik neem de volledige verantwoording voor deze onzorgvuldigheid.",
      "Mijn oprechte excuses voor het ontbreken van het huiswerk. Ik had mijn spullen gisteravond tijdig moeten ordenen en begrijp dat dit niet professioneel is.",
      "Excuus dat ik mijn huiswerk niet bij me heb. Ik respecteer uw lessen en de vereiste voorbereiding, en betreur het dat ik hierin ben tekortgeschoten.",
      "Het spijt me ten zeerste dat mijn werk ontbreekt. Ik snap dat dit de voortgang van de les verstoort en zal het snelst mogelijk inhalen.",
      "Mijn oprechte excuses. Ik had de opdrachtvoorwaarden beter moeten naleven en neem de schuld voor het niet bij me hebben van het materiaal.",
      "Excuus voor deze nalatigheid. Het is mijn verantwoordelijkheid om de juiste spullen bij me te hebben en ik zal zorgen dat dit een eenmalig voorval is.",
      "Het spijt me oprecht dat ik het huiswerk niet kan tonen. Ik zal de stof uit de les alsnog extra grondig doornemen om mijn achterstand te beperken.",
      "Mijn excuses voor het niet nakomen van de afspraak rond het huiswerk. Ik begrijp dat stiptheid en voorbereiding essentieel zijn.",
      "Excuus voor het vergeten van mijn werkmap. Ik accepteer de eventuele maatregel die hierop staat en zorg dat het morgen op orde is.",
      "Het spijt me ten zeerste dat ik het verkeerde werk heb voorbereid. Ik had de studiewijzer kritischer moeten raadplegen.",
      "Mijn oprechte excuses dat ik het huiswerk niet op school heb. Ik neem de volledige verantwoordelijkheid voor het gebrek aan controle vanochtend.",
      "Excuus voor het verzuimen van deze verplichting. Ik begrijp volkomen dat dit mijn eigen schuld is en betreur dit voorval.",
      "Het spijt me oprecht dat ik onzorgvuldig ben geweest met het inpakken van mijn schoolspullen. Ik draag de gevolgen van deze onoplettendheid.",
      "Mijn excuses voor het ontbreken van de benodigde stukken. Ik zal er persoonlijk zorg voor dragen dat dit niet meer zal voorkomen.",
      "Excuus voor het niet kunnen overleggen van mijn huiswerk. Ik snap dat u hier waarde aan hecht en bied mijn verontschuldigingen aan.",
      "Het spijt me ten zeerste. Ik had mijn voorbereiding en het inpakken van de tas serieuzer moeten aanpakken.",
      "Mijn oprechte excuses voor deze tekortkoming. Ik begrijp dat afspraak afspraak is en neem de verantwoordelijkheid voor het vergeten.",
      "Excuus dat het huiswerk niet in mijn bezit is. Ik zal het gemaakte werk aan het einde van de dag digitaal aan u doen toekomen.",
      "Het spijt me dat ik onzorgvuldig ben omgegaan met mijn voorbereiding op deze les. Ik accepteer de gevolgen.",
      "Mijn oprechte excuses voor de nalatigheid vanmorgen. Ik zorg dat mijn administratie en schoolspullen vanaf heden strak zijn georganiseerd.",
      "Excuus dat ik het gevraagde werk niet kan laten zien. Ik neem dit voorval uiterst serieus en zorg voor een passende herstelactie.",
      "Het spijt me ten zeerste dat ik mijn verplichting niet ben nagekomen. Ik begrijp dat dit mijn eigen schuld is.",
      "Mijn excuses voor het ontbreken van mijn uitwerkingen. Ik zal de les aandachtig volgen en de opdracht alsnog vandaag bij u inleveren."
    ]
  },
  "Proefwerk niet geleerd": {
    "1-2": [
      "Oeps, ik heb eigenlijk niet genoeg geleerd.",
      "Ik dacht eerlijk gezegd dat de toets pas volgende week was.",
      "Ik was in de veronderstelling dat we vandaag een herhalingsles kregen.",
      "Oeps, ik heb per ongeluk het verkeerde hoofdstuk geleerd!",
      "Ik snapte er gisteravond echt helemaal niks van.",
      "Oeps, mijn boeken lagen nog in mijn kluisje.",
      "Ik dacht heel eerlijk dat het een openboektoets zou worden!",
      "Oeps, ik dacht dat het een SO was in plaats van een groot proefwerk.",
      "Ik heb geprobeerd te leren, maar viel helaas steeds in slaap.",
      "Oeps, ik had per ongeluk de samenvatting van vorig jaar gepakt.",
      "Ik dacht dat we alleen de eerste twee bladzijden hoefden te lezen.",
      "Oeps, ik raakte de kluts helemaal kwijt tijdens het leren.",
      "Ik dacht echt dat dit uur uit zou vallen!",
      "Oeps, ik heb alleen snel de plaatjes en begrippen bekeken.",
      "Ik ben gisteravond helemaal vergeten de planner te checken.",
      "Oeps, ik dacht dat het een mondelinge overhoring ging worden.",
      "Mijn brein zat gisteravond na de sport al helemaal vol.",
      "Oeps, ik heb me flink verkeken op het aantal paragrafen.",
      "Ik dacht dat dit proefwerk geschrapt was uit het rooster.",
      "Oeps, ik heb per ongeluk de verkeerde uitwerkingen geleerd.",
      "Ik dacht dat we vandaag een uitlegfilm gingen kijken.",
      "Oeps, ik ben gisteravond per ongeluk veel te vroeg in slaap gevallen.",
      "Ik dacht dat we eerst nog een proeftoets zouden maken.",
      "Oeps, ik kreeg de stof gisteravond gewoon niet in mijn hoofd.",
      "Ik wist eerlijk gezegd echt niet dat dit vandaag op de planning stond!"
    ],
    "3-4": [
      "Sorry, ik heb niet genoeg tijd besteed aan het leren.",
      "Excuses, ik heb me helaas op het verkeerde vak gefocust gisteren.",
      "Sorry, ik dacht dat de toets pas over twee dagen op de planning stond.",
      "Excuses, de stof bleek gisteravond toch veel lastiger dan ik dacht.",
      "Sorry, ik ben gisteren niet meer aan de laatste paragrafen toegekomen.",
      "Excuses, ik was in de veronderstelling dat we nog een vragenuurtje kregen.",
      "Sorry, ik heb per ongeluk de verkeerde aantekeningen geleerd.",
      "Excuses, ik heb gisteren te lang bezig gesleuteld aan een andere opdracht.",
      "Sorry, ik kon het digitale lesmateriaal gisteravond niet openen.",
      "Excuses, ik dacht dat dit proefwerk verplaatst was naar volgende week.",
      "Sorry, ik heb wel geleerd, maar de stof is niet goed blijven hangen.",
      "Excuses, mijn samenvatting was helaas niet helemaal compleet.",
      "Sorry, ik heb gisteravond niet alle stof kunnen afronden.",
      "Excuses, ik dacht dat het accent op een ander hoofdstuk zou liggen.",
      "Sorry, ik heb de tijdsduur voor het leren helaas verkeerd ingeschat.",
      "Excuses, ik heb me gisteravond niet goed kunnen concentreren op het leerwerk.",
      "Sorry, ik was in de veronderstelling dat dit een schriftelijke overhoring was.",
      "Excuses, ik ben gisteren helaas te laat begonnen met de voorbereiding.",
      "Sorry, ik miste nog een paar belangrijke aantekeningen om goed te leren.",
      "Excuses, ik heb gisteravond per ongeluk het verkeerde boek geleerd.",
      "Sorry, ik heb niet al het vereiste leeswerk af kunnen krijgen.",
      "Excuses, ik dacht dat we deze toets pas in de toetsweek zouden maken.",
      "Sorry, ik heb helaas niet alle begrippen goed kunnen stampen.",
      "Excuses, ik dacht dat de stof van deze week niet mee zou tellen.",
      "Sorry, ik heb me helaas onvoldoende kunnen voorbereiden op deze toets."
    ],
    "5-6": [
      "Mijn excuses, ik heb me onvoldoende voorbereid op het proefwerk. Ik had eerder moeten beginnen.",
      "Excuus dat ik niet goed voorbereid ben. Mijn planning voor de voorbereiding liep gisteren mis.",
      "Mijn excuses, ik heb de hoeveelheid stof onderschat en ben daardoor niet klaar met leren.",
      "Excuus voor de matige voorbereiding, ik had gisteravond moeite om de stof goed op te nemen.",
      "Mijn excuses, ik heb me helaas te veel gefocust op andere opdrachten in plaats van het proefwerk.",
      "Excuus, ik had de toetsplanning verkeerd in mijn agenda staan waardoor ik in tijdnood kwam.",
      "Mijn excuses, ik merkte tijdens het leren dat ik een aantal belangrijke concepten niet begreep.",
      "Excuus dat ik de stof niet helemaal beheers. Ik had tijdig om extra uitleg moeten vragen.",
      "Mijn excuses, ik ben gisteravond niet tot de laatste paragrafen gekomen door tijdgebrek.",
      "Excuus voor mijn gebrekkige voorbereiding. Ik had een beter leerschema moeten aanhouden.",
      "Mijn excuses, ik heb wel geleerd maar de stof is helaas niet goed blijven hangen.",
      "Excuus, ik heb me vergist in de stofafbakening en daardoor het verkeerde geleerd.",
      "Mijn excuses dat ik niet goed voorbereid ben. Ik had gisteravond technische problemen met de planner.",
      "Excuus, ik heb gisteren te weinig tijd ingeruimd voor het herhalen van de opgaven.",
      "Mijn excuses, ik heb mijn tijd gisteravond niet efficiënt genoeg ingedeeld voor dit vak.",
      "Excuus dat ik de stof onvoldoende ken. Ik had eerder moeten beginnen met de samenvatting.",
      "Mijn excuses, ik dacht dat ik de stof beter beheerste dan in werkelijkheid het geval bleek.",
      "Excuus voor de gebrekkige kennis van de stof, ik heb niet alle opgaven kunnen herhalen.",
      "Mijn excuses, ik heb de voorbereiding naar gisteravond verschoven en dat was te laat.",
      "Excuus dat ik me niet optimaal heb kunnen voorbereiden. Ik neem dit mee als leermoment.",
      "Mijn excuses, ik ben gisteravond te lang bezig geweest met het maken van de aantekeningen.",
      "Excuus, ik had gisteravond moeite om de hoofd- en bijzaken in de stof van elkaar te scheiden.",
      "Mijn excuses dat mijn voorbereiding niet op orde is. Ik had hier gisteren meer tijd voor moeten nemen.",
      "Excuus voor de situatie, ik heb niet voldoende tijd kunnen besteden aan de lastige onderdelen.",
      "Mijn excuses, ik heb me helaas niet voldoende verdiept in de stof voor het proefwerk van vandaag."
    ],
    "7-8": [
      "Mijn excuses. Ik heb me onvoldoende voorbereid op het proefwerk. Ik had eerder moeten beginnen en mijn tijd beter moeten verdelen.",
      "Excuus voor mijn gebrekkige voorbereiding. Ik had de stofafbakening beter moeten controleren en een strakker leerschema moeten hanteren.",
      "Mijn excuses dat ik de stof niet voldoende beheers. Ik neem de verantwoordelijkheid voor mijn matige tijdsplanning van de afgelopen dagen.",
      "Het spijt me dat ik me niet goed heb voorbereid op dit proefwerk. Ik had bij twijfel tijdig de docent om verduidelijking moeten vragen.",
      "Mijn excuses voor de onvoldoende voorbereiding. Ik had gisteravond niet alle prioriteiten op de juiste plek liggen.",
      "Excuus dat ik het proefwerk niet optimaal kan maken. Ik had mijn leerwerk beter moeten spreiden over de afgelopen week.",
      "Mijn excuses voor deze situatie. Ik begrijp dat een goede voorbereiding mijn eigen taak is en ik ben daarin tekortgeschoten.",
      "Het spijt me dat ik de stof niet beheers. Ik had gisteravond doortastender moeten doorleren in plaats van te vroeg te stoppen.",
      "Mijn excuses dat ik mijn voorbereiding heb laten versloffen. Ik zorg ervoor dat ik mijn planning voor het volgende proefwerk aanpas.",
      "Excuus dat ik niet op niveau voorbereid ben. Ik had de omvang van de leerstof vooraf beter moeten inschatten.",
      "Mijn excuses voor het gebrek aan voorbereiding. Ik zal de gemiste stof na het proefwerk alsnog grondig gaan bestuderen.",
      "Het spijt me dat ik niet voldoende tijd in deze toets heb gestoken. Ik had me beter moeten afsluiten van afleidingen.",
      "Mijn excuses dat ik me niet volledig heb ingezet voor de voorbereiding. Ik had de studiewijzer strikter moeten volgen.",
      "Excuus voor de matige staat van mijn kennis op dit moment. Ik neem het mezelf kwalijk dat ik niet eerder ben gestart met herhalen.",
      "Mijn excuses dat ik de stof niet onder de knie heb. Ik had de moeilijke paragrafen als eerste moeten aanpakken.",
      "Het spijt me dat mijn kennis van de stof onvoldoende is. Ik had gisteravond meer focus moeten houden op het leermateriaal.",
      "Mijn excuses voor de opgelopen achterstand. Ik had de toetsdatum beter in de gaten moeten houden in mijn persoonlijke planning.",
      "Excuus dat ik niet de gewenste voorbereiding kan tonen. Ik zal hier de volgende keer aanzienlijk meer tijd voor inruimen.",
      "Mijn excuses, ik heb mijn leercapaciteit voor gisteravond overschat. Ik had een ruimere marge moeten nemen voor het leren.",
      "Het spijt me dat ik niet goed voorbereid aan de start verschijn. Ik accepteer de gevolgen en werk aan een betere aanpak.",
      "Mijn excuses dat ik me niet aan mijn eigen leerplanning heb gehouden. Ik had gedisciplineerder moeten zijn.",
      "Excuus voor mijn onvoldoende voorbereiding. Ik had de oefenopgaven gisteravond nogmaals zelfstandig moeten maken.",
      "Mijn excuses voor het niet tijdig afronden van het leerwerk. Ik had mijn nevenactiviteiten gisteren moeten afzeggen.",
      "Het spijt me dat ik de leereisen verkeerd heb ingeschat. Ik zorg dat mijn voorbereiding voor de volgende toets beter is.",
      "Mijn excuses dat ik het proefwerk onvoorbereid moet maken. Ik had actiever met de stof aan de slag moeten gaan."
    ],
    "9-10": [
      "Mijn excuses. Ik heb me onvoldoende voorbereid op het proefwerk. Ik had eerder moeten beginnen en begrijp dat dit mijn eigen verantwoordelijkheid is.",
      "Oprechte excuses voor mijn gebrekkige voorbereiding op dit proefwerk. Ik neem de volledige verantwoording voor het niet nakomen van mijn leerplicht.",
      "Het spijt me ten zeerste dat ik me niet naar behoren heb voorbereid. Ik begrijp het belang van deze toets en accepteer de consequenties van mijn verzuim.",
      "Mijn oprechte excuses voor het feit dat ik de stof niet beheers. Ik ben tekortgeschoten in mijn eigen planning en organisatie.",
      "Excuus voor mijn onvoldoende inzet bij het voorbereiden van deze toets. Ik respecteer het vak en de docent, en betreur deze situatie ten zeerste.",
      "Het spijt me oprecht dat ik onvoorbereid aan dit proefwerk begin. Ik neem de schuld voor het gebrek aan voorbereiding volledig op me.",
      "Mijn excuses voor het niet tijdig aanleren van de vereiste stof. Ik begrijp volkomen dat stiptheid en inzet mijn eigen verantwoording zijn.",
      "Excuus voor deze tekortkoming. Ik had de leerstof tijdig moeten structureren en begrijp dat ik hierin onzorgvuldig ben geweest.",
      "Mijn oprechte excuses voor mijn gebrek aan discipline in het leerproces. Ik aanvaard de resultaten en consequenties die hieruit voortvloeien.",
      "Het spijt me ten zeerste dat ik het proefwerk niet met de juiste voorbereiding maak. Ik zal mijn studiemethodiek direct herzien.",
      "Mijn excuses voor het verzuimen van een gedegen voorbereiding. Ik begrijp dat dit niet het niveau is dat van mij verwacht mag worden.",
      "Excuus voor het feit dat ik de voorbereiding voor dit proefwerk verwaarloosd heb. Ik draag zelf de volledige verantwoordelijkheid hiervoor.",
      "Mijn oprechte excuses. Ik had de omvang van de stof en de benodigde tijd zorgvuldiger moeten inschatten en plannen.",
      "Het spijt me dat ik de toetsstof onvoldoende beheers. Ik erken dat dit het directe gevolg is van mijn eigen keuzes gisteravond.",
      "Mijn excuses voor de ontstane situatie. Ik snap dat u inzet en voorbereiding verwacht en ik betreur het dat ik hierin faal.",
      "Excuus voor mijn nalatigheid betreffende het leerschema van deze toets. Ik neem dit voorval uiterst serieus en herstel dit voor de toekomst.",
      "Mijn oprechte excuses voor mijn gebrekkige kennis van de stof. Ik aanvaard dat de oorzaak hiervan volledig bij mijzelf ligt.",
      "Het spijt me dat ik niet aan de voorbereidingseisen van dit proefwerk heb voldaan. Ik zal de gemiste stof zelfstandig inhalen.",
      "Mijn excuses voor het niet nakomen van mijn studievoorziening. Ik begrijp dat verantwoordelijkheid bij mij begint en zal hier lering uit trekken.",
      "Excuus dat ik de stof niet onder de knie heb gekregen. Ik neem de volledige verantwoordelijkheid voor het mislukken van mijn leerplanning.",
      "Mijn oprechte excuses dat ik onvoorbereid in de banken zit. Ik accepteer de eventuele maatregelen die aan deze situatie verbonden zijn.",
      "Het spijt me ten zeerste dat ik mijn leertijd niet effectief heb benut. Ik zal er zorg voor dragen dat dit een eenmalig verzuim blijft.",
      "Mijn excuses voor het gebrek aan inzet rondom dit proefwerk. Ik begrijp de ernst van deze beoordeling en betreur mijn laksheid.",
      "Excuus dat ik niet aan de gestelde verwachtingen voldoe voor deze toets. Ik neem de schuld voor de gebrekkige voorbereiding op mij.",
      "Mijn oprechte excuses voor deze onvoldoende voorbereiding. Ik begrijp dat dit mijn eigen schuld is en ga de stof alsnog grondig bestuderen."
    ]
  },
  "Boek vergeten": {
    "1-2": [
      "Oeps, ik ben mijn boek vergeten.",
      "Ik dacht dat we vandaag uit de stencillijst gingen werken.",
      "Oeps, ik heb per ongeluk het boek van vorig jaar gepakt.",
      "Mijn boek ligt helaas nog thuis op mijn bureau.",
      "Oeps, ik dacht dat we vandaag alleen online spullen nodig hadden.",
      "Ik kon mijn boek zo snel niet vinden in mijn tas.",
      "Oeps, ik heb het verkeerde deel meegenomen.",
      "Mijn boek ligt nog onder in mijn kluisje.",
      "Oeps, ik dacht dat we dit vak vandaag niet hadden.",
      "Mijn klasgenoot en ik wilden al samen in één boek kijken.",
      "Oeps, ik ben vergeten mijn boek uit mijn kluis te halen.",
      "Ik dacht dat het boek op school in het lokaal lag.",
      "Oeps, ik heb de verkeerde vakkenmap gepakt vanmorgen.",
      "Mijn boek ligt nog op de keukentafel.",
      "Oeps, ik dacht dat we de digitale versie gingen gebruiken.",
      "Ik heb per ongeluk het werkboek in plaats van het tekstboek mee.",
      "Oeps, mijn tas was al zo zwaar dat ik me verkeken heb.",
      "Mijn boek ligt helaas nog naast mijn bed.",
      "Oeps, ik dacht dat we een film of uitleguitzending gingen kijken.",
      "Ik kon het boek vanmorgen nergens in huis vinden.",
      "Oeps, ik heb het boek van een ander vak ingepakt.",
      "Mijn broertje heeft mijn boek per ongeluk gepakt.",
      "Oeps, ik dacht dat het een leesuur was vandaag.",
      "Mijn boek ligt helaas nog in de kantine.",
      "Oeps, mag ik voor deze keer met mijn buurman meekijken?"
    ],
    "3-4": [
      "Sorry, ik ben vergeten mijn boek mee te nemen.",
      "Excuses, ik heb per ongeluk het verkeerde boek ingepakt vanochtend.",
      "Sorry, mijn boek ligt helaas nog thuis op mijn werkplek.",
      "Excuses, ik dacht dat we vandaag het digitale boek zouden gebruiken.",
      "Sorry, ik ben vergeten mijn boek uit mijn kluisje te halen voor de les.",
      "Excuses, ik heb het werkboek bij me, maar het tekstboek ligt nog thuis.",
      "Sorry, ik was in de veronderstelling dat we vandaag geen boeken nodig hadden.",
      "Excuses, ik heb gisteravond het verkeerde deel in mijn tas gestopt.",
      "Sorry, ik kon mijn boek vanochtend nergens vinden in huis.",
      "Excuses, mijn boek ligt helaas nog op de keukentafel.",
      "Sorry, ik dacht dat we vandaag alleen op de laptop zouden werken.",
      "Excuses, ik ben mijn spullen haastig gaan inpakken en ben het boek vergeten.",
      "Sorry, ik dacht dat we het hoofdstuk op een stencil zouden maken.",
      "Excuses, ik heb per ongeluk het boek van de vorige periode meegenomen.",
      "Sorry, mijn tas was te vol en ik ben vergeten het boek erbij te steken.",
      "Excuses, ik dacht dat het boek nog in mijn kluisje lag, maar het blijkt thuis te liggen.",
      "Sorry, ik heb mijn boeken gisteravond omgewisseld en de verkeerde gepakt.",
      "Excuses, ik was er heilig van overtuigd dat ik het boek in mijn tas had gestopt.",
      "Sorry, ik heb per ongeluk het boek van een ander vak meegenomen.",
      "Excuses, ik dacht dat we vandaag alleen een bespreking hadden zonder boeken.",
      "Sorry, ik ben mijn boek vergeten, maar ik kan wel met iemand meekijken.",
      "Excuses, ik heb het boek op mijn bureau laten liggen na het leren gisteren.",
      "Sorry, ik dacht dat we de opdrachten vandaag online moesten maken.",
      "Excuses, mijn boek ligt helaas nog in de mediatheek.",
      "Sorry, ik heb mij vergist in het rooster en daardoor het verkeerde boek bij me."
    ],
    "5-6": [
      "Mijn excuses, ik heb mijn boek thuis laten liggen. Ik ben vergeten het vanochtend in mijn tas te doen.",
      "Excuus dat ik het boek niet bij me heb. Ik heb gisteravond het verkeerde deel in mijn tas gestopt.",
      "Mijn excuses, ik was in de veronderstelling dat we vandaag de online methode zouden gebruiken.",
      "Excuus voor de onzorgvuldigheid, mijn boek ligt nog thuis op mijn studeerplek.",
      "Mijn excuses, ik ben vergeten mijn boek uit mijn kluisje te halen voor de les begon.",
      "Excuus dat mijn boek ontbreekt. Ik heb per ongeluk het lesmateriaal van vorig blok ingepakt.",
      "Mijn excuses, ik dacht dat we vandaag alleen praktische opdrachten zouden doen zonder boek.",
      "Excuus voor de verwarring, ik heb wel het werkboek meegenomen maar het handboek laten liggen.",
      "Mijn excuses dat ik mijn boek niet bij me heb. Mijn tas is vanmorgen gehaast ingeruimd.",
      "Excuus, ik had de verkeerde vakkenmap voor me gisteravond en heb daardoor het verkeerde boek gepakt.",
      "Mijn excuses, ik dacht dat we het hoofdstuk op een uitgedeeld werkblad zouden maken.",
      "Excuus dat ik het boek niet kan tonen. Ik heb het gisteravond gebruikt voor het leren en op mijn bureau laten liggen.",
      "Mijn excuses, ik was in de veronderstelling dat we vandaag een presentatie of filmstudiemoment hadden.",
      "Excuus voor het ontbreken van mijn lesboek. Ik zal met mijn buurman meelezen om de les te kunnen volgen.",
      "Mijn excuses, ik heb de boeken gisteravond uit mijn tas gehaald en ben vergeten ze terug te stoppen.",
      "Excuus dat ik het boek niet bij me heb. Ik had mijn rooster vanochtend niet goed gecontroleerd.",
      "Mijn excuses, ik dacht dat we de digitale licentie van het boek zouden gebruiken in het lokaal.",
      "Excuus voor deze situatie, ik heb mijn boek per ongeluk in het kluisje van een klasgenoot laten liggen.",
      "Mijn excuses dat mijn boek ontbreekt. Ik heb het verkeerde leerboek gepakt tijdens het inpakken.",
      "Excuus dat ik de spullen niet compleet heb. Ik zal er alles aan doen om de les stilletjes mee te volgen.",
      "Mijn excuses, ik heb per ongeluk het fysieke boek thuis gelaten omdat ik dacht dat ik het online kon openen.",
      "Excuus, ik heb gisteravond aan mijn bureau gewerkt en het boek daar laten liggen.",
      "Mijn excuses dat ik het boek niet bij me heb. Ik heb de vakken van de middag per ongeluk omgewisseld.",
      "Excuus voor de nalatigheid. Ik zal de opdrachten op een los vel uitwerken en thuis overnemen.",
      "Mijn excuses dat mijn boek thuis ligt. Ik zorg dat mijn lesmateriaal de volgende les weer compleet is."
    ],
    "7-8": [
      "Mijn excuses, ik ben mijn boek vergeten mee te nemen. Ik had mijn tas beter moeten controleren voordat ik naar school ging.",
      "Excuus dat ik mijn lesboek niet bij me heb. Ik had gisteravond mijn spullen al nauwkeuriger klaar moeten leggen.",
      "Mijn excuses voor het ontbreken van mijn boek. Ik neem de verantwoordelijkheid en zorg dat ik meekijk met een klasgenoot.",
      "Het spijt me dat ik het verkeerde boek bij me heb. Ik had de studiewijzer en mijn rooster zorgvuldiger moeten raadplegen.",
      "Mijn excuses dat mijn materiaal niet compleet is. Ik had gisteravond beter moeten controleren of al mijn boeken in mijn tas zaten.",
      "Excuus voor het ongemak. Ik had niet zomaar moeten aannemen dat we alleen digitaal zouden werken vandaag.",
      "Mijn excuses dat ik het boek thuis heb laten liggen. Ik zal er alert op zijn dat dit zich niet meer herhaalt.",
      "Het spijt me dat ik zonder boek in de les zit. Ik neem de volledige verantwoording voor dit gebrek aan controle vanochtend.",
      "Mijn excuses voor de slordigheid. Ik had mijn schooltas gisteravond na het maken van mijn huiswerk direct moeten inruimen.",
      "Excuus dat mijn boek ontbreekt. Ik vraag na de les aan een klasgenoot de paginanummers zodat ik thuis kan bijwerken.",
      "Mijn excuses dat ik niet de juiste spullen bij me heb. Ik had vooraf moeten dubbelchecken welk deel we vandaag nodig hadden.",
      "Het spijt me dat ik mijn boek in mijn kluisje heb laten liggen. Ik had voor de bel mijn spullen compleet moeten hebben.",
      "Mijn excuses voor het ontbreken van het lesmateriaal. Ik zorg ervoor dat mijn voorbereiding voor de volgende les op orde is.",
      "Excuus dat ik het fysieke boek niet bij me heb. Ik had moeten verifiëren of de digitale versie voor vandaag voldoende was.",
      "Mijn excuses dat ik mijn spullen niet voor elkaar heb. Ik zal de les stilletjes volgen en de aantekeningen overnemen.",
      "Het spijt me dat ik mijn boek vergeten ben. Ik had vanochtend meer tijd moeten nemen om mijn tas te controleren.",
      "Mijn excuses voor deze situatie. Ik begrijp dat het hebben van het juiste lesboek mijn eigen verantwoordelijkheid is.",
      "Excuus voor het vergeten van het handboek. Ik zal de gemiste opdrachten thuis opzoeken en uitwerken.",
      "Mijn excuses dat mijn lesmateriaal incompleet is. Ik had gisteravond niet zo haastig mijn tas moeten inpakken.",
      "Het spijt me dat ik het verkeerde deel bij me heb. Ik let voortaan beter op bij het inpakken van de specifieke modules.",
      "Mijn excuses voor deze onzorgvuldigheid. Ik neem de verantwoordelijkheid om te zorgen dat ik alsnog de stof meekrijg.",
      "Excuus dat mijn boek thuis ligt. Ik had gisteravond een duidelijker overzicht van mijn benodigdheden moeten maken.",
      "Mijn excuses dat ik het boek niet bij me heb. Ik zal direct aanschuiven bij een medeleerling om overlast te beperken.",
      "Het spijt me dat ik mijn spullen niet compleet heb. Ik zal mijn inpakroutine voor schoolstappen aanscherpen.",
      "Mijn excuses voor het ontbreken van het lesboek. Ik zal mijn uiterste best doen om de les zonder hinder mee te doen."
    ],
    "9-10": [
      "Mijn excuses. Ik ben mijn boek vergeten mee te nemen. Ik had mijn tas beter moeten controleren en begrijp dat dit mijn verantwoordelijkheid is.",
      "Uiterste excuses voor het niet bij me hebben van het vereiste lesboek. Ik begrijp dat dit mijn eigen verzuim is en accepteer de consequenties.",
      "Het spijt me oprecht dat ik mijn lesmateriaal niet compleet heb. Ik neem de volledige verantwoording voor deze onzorgvuldigheid.",
      "Mijn oprechte excuses voor het ontbreken van mijn boek. Ik had mijn spullen gisteravond tijdig moeten controleren en begrijp dat dit onprofessioneel is.",
      "Excuus dat ik het boek niet in mijn bezit heb. Ik respecteer de lesregels omtrent benodigdheden en betreur het dat ik hierin faal.",
      "Het spijt me ten zeerste dat mijn boek ontbreekt. Ik snap dat dit de lesgang belemmert en neem de schuld hiervoor volledig op mij.",
      "Mijn oprechte excuses. Ik had de inhoud van mijn tas zorgvuldiger moeten controleren voordat ik van huis vertrok.",
      "Excuus voor deze nalatigheid. Het is mijn eigen verantwoordelijkheid om met het juiste materiaal te verschijnen en ik zal zorgen dat dit eenmalig is.",
      "Het spijt me oprecht dat ik het lesboek niet kan overleggen. Ik aanvaard de maatregelen die verbonden zijn aan het niet bij me hebben van spullen.",
      "Mijn excuses voor het niet nakomen van de afspraak om altijd je lesmateriaal bij je te hebben. Ik begrijp dat voorbereiding essentieel is.",
      "Excuus dat ik het boek niet bij me heb. Ik accepteer de consequenties en zorg er persoonlijk voor dat het de volgende les op orde is.",
      "Het spijt me ten zeerste dat ik zonder boek aanwezig ben. Ik had mijn voorbereidingen gisteravond veel serieuzer moeten aanpakken.",
      "Mijn oprechte excuses dat ik het boek thuis heb laten liggen. Ik neem de volledige verantwoordelijkheid voor het gebrek aan controle vanochtend.",
      "Excuus voor het verzuimen van deze basisverplichting. Ik begrijp volkomen dat dit mijn eigen schuld is en betreur dit voorval.",
      "Het spijt me oprecht dat ik onzorgvuldig ben geweest met het inpakken van mijn schoolspullen. Ik draag de gevolgen van deze onoplettendheid.",
      "Mijn excuses voor het ontbreken van de vereiste leermiddelen. Ik zal er persoonlijk zorg voor dragen dat dit niet meer zal voorkomen.",
      "Excuus voor het niet kunnen tonen van het lesboek. Ik snap dat dit niet het niveau van inzet is dat van mij verwacht mag worden.",
      "Het spijt me ten zeerste. Ik had mijn lesrooster en benodigdheden gisteravond strikter moeten afstemmen.",
      "Mijn oprechte excuses voor deze tekortkoming. Ik begrijp dat stiptheid en compleetheid mijn taak zijn en neem de schuld op me.",
      "Excuus dat het boek niet in mijn bezit is tijdens de les. Ik zal de stof uit het boek thuis zelfstandig en extra grondig doornemen.",
      "Het spijt me dat ik onzorgvuldig ben omgegaan met mijn spullen voor deze les. Ik accepteer de eventuele sancties hiervoor.",
      "Mijn oprechte excuses voor de nalatigheid vanmorgen. Ik zorg dat mijn schooltas vanaf heden elke dag strak gecontroleerd wordt.",
      "Excuus dat ik het benodigde boek niet kan overleggen. Ik neem dit voorval uiterst serieus en herstel dit vóór de volgende les.",
      "Het spijt me ten zeerste dat ik mijn verplichting niet ben nagekomen. Ik begrijp dat dit mijn eigen schuld is en betreur de situatie.",
      "Mijn excuses voor het ontbreken van mijn lesboek. Ik zal het lokaal niet verder verstoren en de les stilletjes voltooien."
    ]
  },
  "Te weinig tijd gehad": {
    "1-2": [
      "Sorry, ik had niet genoeg tijd.",
      "Oeps, de tijd vloog echt voorbij gisteren.",
      "Sorry, ik kwam er aan het einde van de dag niet meer aan toe.",
      "Oeps, het duurde allemaal veel langer dan ik dacht.",
      "Sorry, ik had een superdruk schema gisteravond.",
      "Oeps, tijd tekort gisteren!",
      "Sorry, ik moest nog heel veel voor een ander vak doen.",
      "Oeps, ik ben gisteravond te laat begonnen.",
      "Sorry, ik had echt te weinig uren in de dag gisteren.",
      "Oeps, mijn planning liep gisteren helemaal in het honderd.",
      "Sorry, ik moest gisteravond ook nog sporten en werken.",
      "Oeps, ik had niet door dat het al zo laat was geworden.",
      "Sorry, ik heb alleen het eerste stukje kunnen afmaken.",
      "Oeps, ik redde het gisteravond net niet helemaal.",
      "Sorry, de avond was zó voorbij.",
      "Oeps, ik had teveel andere dingen aan mijn hoofd gisteren.",
      "Sorry, ik ben halverwege gestrand door tijdgebrek.",
      "Oeps, ik dacht dat ik meer tijd zou hebben gisteravond.",
      "Sorry, ik kwam tijd tekort om het netjes af te maken.",
      "Oeps, mijn hele avond liep uit.",
      "Sorry, ik heb er gisteren wel aan gesleuteld maar kwam tijd tekort.",
      "Oeps, de klok tikte iets te snel door gisteravond.",
      "Sorry, ik moest onverwachts ergens anders mee helpen gisteren.",
      "Oeps, ik heb de tijd helemaal verkeerd ingeschat.",
      "Sorry, ik ben niet helemaal tot het einde gekomen!"
    ],
    "3-4": [
      "Sorry, ik had te weinig tijd om alles af te maken.",
      "Excuses, mijn planning liep gisteravond erg uit waardoor ik niet klaar ben.",
      "Sorry, ik heb gisteren heel lang aan een ander vak moeten werken.",
      "Excuses, het maken kostte helaas veel meer tijd dan verwacht.",
      "Sorry, ik ben gisteravond te laat kunnen starten met deze opdracht.",
      "Excuses, ik kwam gisteravond tijd tekort om het laatste deel af te ronden.",
      "Sorry, ik had gisteravond een vol programma en kon het niet afmaken.",
      "Excuses, ik heb het niet helemaal af gekregen door tijdgebrek.",
      "Sorry, ik liep vast bij een onderdeel en dat kostte teveel tijd.",
      "Excuses, ik dacht dat ik er sneller doorheen zou werken gisteravond.",
      "Sorry, door onverwachte verplichtingen gisteravond kwam ik in tijdnood.",
      "Excuses, ik heb er wel tijd aan besteed maar het niet af kunnen maken.",
      "Sorry, mijn andere huiswerk nam helaas bijna mijn hele avond in beslag.",
      "Excuses, ik heb het helaas halverwege moeten onderbreken.",
      "Sorry, ik heb de omvang van de opdracht gisteravond onderschat.",
      "Excuses, ik ben door tijdgebrek helaas niet tot de laatste vragen gekomen.",
      "Sorry, mijn avondplanning liep anders waardoor ik niet alles af kreeg.",
      "Excuses, ik heb te lang stilgestaan bij de eerste opgaven.",
      "Sorry, ik had gisteravond helaas te weinig tijd voor een volledige uitwerking.",
      "Excuses, ik redde het qua tijd gisteravond simpelweg niet helemaal.",
      "Sorry, ik heb geprobeerd het af te maken maar de tijd was op.",
      "Excuses, ik ben wegens tijdgebrek niet helemaal klaar gekomen.",
      "Sorry, ik had gisteravond een erg drukke avond en kon niet alles afronden.",
      "Excuses, het kostte meer tijd dan ik van tevoren had ingeruimd.",
      "Sorry, ik ben helaas op de helft moeten stoppen vanwege de tijd."
    ],
    "5-6": [
      "Mijn excuses, ik had te weinig tijd om alles af te maken. Ik had mijn planning beter moeten maken.",
      "Excuus dat het niet af is. Ik heb de benodigde tijd gisteravond verkeerd ingeschat.",
      "Mijn excuses, ik liep gisteravond vast in de planning en kwam daardoor in tijdnood.",
      "Excuus voor het niet afronden. Ik had gisteren eerder moeten beginnen met de opdracht.",
      "Mijn excuses, ik heb teveel tijd besteed aan de eerste opdrachten waardoor het laatste deel bleef liggen.",
      "Excuus dat ik de opdracht niet compleet heb. Mijn avondplanning was helaas te strak ingesteld.",
      "Mijn excuses, ik had gisteravond last van tijdgebrek door verplichtingen buitenshuis.",
      "Excuus voor de vertraging. Ik had de opdrachten beter over de week moeten verdelen.",
      "Mijn excuses, het afronden is helaas mislukt doordat ik de omvang van de stof had onderschat.",
      "Excuus dat het niet helemaal af is. Ik had gisteravond meer tijd moeten inruimen voor dit vak.",
      "Mijn excuses, ik heb mijn leertijd en maaktijd gisteravond niet efficiënt ingedeeld.",
      "Excuus voor het onvolledige werk. Ik kwam door onvoorziene omstandigheden in tijdnood.",
      "Mijn excuses, ik had gisteravond moeite met de opgaven waardoor het veel extra tijd kostte.",
      "Excuus dat de opdracht incompleet is. Ik had mijn prioriteiten gisteren beter moeten stellen.",
      "Mijn excuses, ik ben gisteravond wel begonnen maar kon het wegens tijdgebrek niet voltooien.",
      "Excuus dat het werk niet af is. Ik had van tevoren een betere inschatting moeten maken.",
      "Mijn excuses, door een drukke avond is een deel van de opdrachten helaas blijven liggen.",
      "Excuus dat ik niet klaar ben. Ik had de voorbereiding niet naar de late avond moeten verschuiven.",
      "Mijn excuses, ik heb mijn beschikbare tijd gisteravond niet optimaal benut voor deze taak.",
      "Excuus voor het ontbreken van het laatste deel. Ik had meer tijd moeten reserveren.",
      "Mijn excuses, ik kwam in de knel met de planning van mijn overige schoolwerk gisteravond.",
      "Excuus dat het werk niet compleet is. Ik had een ruimere tijdsmarge moeten aanhouden.",
      "Mijn excuses, ik heb me verkeken op de tijd die deze opgaven in beslag namen.",
      "Excuus voor de gebrekkige afronding. Ik zal mijn tijdsindeling voor de volgende keer aanpassen.",
      "Mijn excuses, ik heb gisteravond niet alles af kunnen maken door een te volle agenda."
    ],
    "7-8": [
      "Mijn excuses. Ik had te weinig tijd om alles af te maken en ik had mijn planning beter moeten organiseren.",
      "Excuus dat de opdracht niet volledig is. Ik neem de verantwoordelijkheid voor het niet goed nakomen van mijn tijdsplanning.",
      "Mijn excuses voor het niet afronden. Ik had de opdrachten eerder in de week moeten inplannen om tijdnood te voorkomen.",
      "Het spijt me dat het werk incompleet is. Ik had mijn tijd gisteravond gedisciplineerder moeten indelen.",
      "Mijn excuses dat ik niet klaar ben. Ik had de moeilijkheidsgraad en de benodigde tijd beter moeten inschatten.",
      "Excuus voor de onvolledige uitwerking. Ik had mijn overige verplichtingen gisteren beter moeten afstemmen op mijn schoolwerk.",
      "Mijn excuses voor het ontstaan van dit tijdgebrek. Ik had bij het vastlopen sneller door moeten werken of hulp moeten vragen.",
      "Het spijt me dat ik de opdracht niet af heb. Ik had een realistischer schema moeten hanteren voor deze week.",
      "Mijn excuses voor het niet tijdig voltooien van het werk. Ik had gisteravond minder tijd aan randzaken moeten besteden.",
      "Excuus dat de opdrachten niet af zijn. Ik neem de verantwoording voor het opgelopen tijdtekort gisteravond.",
      "Mijn excuses dat ik het werk niet gehaald heb. Ik zal mijn huiswerkplanning voor de komende periode strakker aantrekken.",
      "Het spijt me dat mijn werk incompleet is. Ik had een ruimere veiligheidsmarge in mijn avondrooster moeten opnemen.",
      "Mijn excuses voor de gebrekkige tijdsindeling. Ik had de belangrijkste onderdelen van de opdracht voorrang moeten geven.",
      "Excuus dat ik niet tot een volledige uitwerking ben gekomen. Ik had de taken beter over de beschikbare dagen moeten spreiden.",
      "Mijn excuses dat de opdracht niet af is. Ik had gisteravond niet zo lang moeten wachten met de start van dit vak.",
      "Het spijt me dat ik de deadline niet volledig heb gehaald. Ik had vooraf een betere tijdsanalyse van de taak moeten maken.",
      "Mijn excuses voor het ontbreken van de laatste opgaven. Ik had mijn leertijd en maaktijd beter moeten balanceren.",
      "Excuus dat ik de werkzaamheden niet heb afgerond. Ik begrijp dat een goede tijdsplanning mijn eigen verantwoordelijkheid is.",
      "Mijn excuses dat de uitwerking onvolledig is. Ik had gisteravond de tucht moeten hebben om door te werken tot het af was.",
      "Het spijt me dat het werk niet af is gekomen. Ik zorg dat ik mijn studieactiviteiten voortaan effectiever inruim.",
      "Mijn excuses voor het tijdgebrek gisteravond. Ik had mijn nevenactiviteiten moeten beperken om dit schoolwerk af te maken.",
      "Excuus voor deze onvolledige inlevering. Ik had mijn eigen tempo en de omvang van het werk beter op elkaar moeten afstemmen.",
      "Mijn excuses dat de opdracht niet compleet is. Ik zal mijn dagplanning herzien om herhaling in de toekomst te vermijden.",
      "Het spijt me dat het werk blijft liggen. Ik had mijn prioriteiten gisteravond duidelijker op mijn schoolwerk moeten stellen.",
      "Mijn excuses voor het niet tijdig afronden. Ik zal de gemiste onderdelen na de les alsnog op korte termijn afmaken."
    ],
    "9-10": [
      "Mijn excuses. Ik heb de benodigde tijd verkeerd ingeschat en daardoor niet alles op tijd kunnen afronden. Ik begrijp dat dit mijn verantwoordelijkheid is.",
      "Uiterste excuses voor het niet volledig opleveren van deze opdracht. Ik accepteer de volledige verantwoording voor het mislukken van mijn tijdsplanning.",
      "Het spijt me oprecht dat het werk incompleet is. Ik had een gedegen tijdsanalyse moeten maken en begrijp dat dit mijn eigen tekortkoming is.",
      "Mijn oprechte excuses voor het niet tijdig voltooien van de taken. Ik begrijp dat plannen en opleveren mijn eigen plicht is en aanvaard de gevolgen.",
      "Excuus voor het onvolledige resultaat. Ik heb de werkdruk gisteravond verkeerd ingeschat en neem daar de volledige schuld voor op mij.",
      "Het spijt me ten zeerste dat ik niet aan de vereiste omvang van de opdracht voldoe. Ik had mijn tijdstip van aanvang aanzienlijk moeten vervroegen.",
      "Mijn oprechte excuses voor deze nalatigheid in de planning. Ik respecteer de eisen van dit vak en betreur het dat ik hierin ben tekortgeschoten.",
      "Excuus voor het niet nakomen van de tijdsafspraak voor deze opdracht. Ik begrijp dat dit niet het niveau van inzet is dat van mij verwacht mag worden.",
      "Het spijt me oprecht dat de uitwerking incompleet is. Ik had de discipline moeten opbrengen om mijn planning vooraf strak af te bakenen.",
      "Mijn excuses voor het verzuimen van een volledige oplevering. Ik neem de verantwoording voor de opgelopen vertraging volledig op mij.",
      "Excuus voor het niet tijdig afronden van het leswerk. Ik begrijp volkomen dat dit mijn eigen schuld is en zal voor herstelzorg dragen.",
      "Het spijt me ten zeerste dat ik de opdracht niet compleet kan overleggen. Ik draag zelf de consequenties van mijn gebrekkige tijdsindeling.",
      "Mijn oprechte excuses voor het ontstaan van deze situatie. Ik had mijn beschikbare uren gisteravond professioneler moeten beheren.",
      "Excuus voor het onvolledig voorbereiden van de opdrachten. Ik snap dat u stiptheid en compleetheid eist en ik betreur deze tekortkoming.",
      "Het spijt me dat ik de gestelde deadline niet gehaald heb. Ik zal de resterende onderdelen vandaag alsnog zelfstandig opleveren.",
      "Mijn excuses voor het niet nakomen van mijn verplichting tot een volledige uitwerking. Ik accepteer de eventuele sancties die hieraan verbonden zijn.",
      "Excuus voor de slordige planning van mijn werkzaamheden. Ik neem dit voorval uiterst serieus en zorg voor een passend vervolg.",
      "Het spijt me oprecht dat ik door tijdgebrek niet klaar ben. Ik erken dat het mijn taak was om tijdig aan te trekken bij knelpunten.",
      "Mijn oprechte excuses voor deze onvoldoende tijdsbeheersing. Ik zal mijn werkwijze en planningsmethodiek per direct herzien.",
      "Excuus dat het gevraagde werk incompleet is. Ik aanvaard dat de oorzaak van het tijdgebrek volledig bij mijn eigen keuzes ligt.",
      "Het spijt me ten zeerste dat mijn oplevering niet aan de norm voldoet. Ik zal er persoonlijk zorg voor dragen dat dit niet meer voorkomt.",
      "Mijn excuses dat ik het werk niet binnen de gestelde tijd heb afgerond. Ik begrijp de ernst van het niet nakomen van afspraken.",
      "Excuus voor de opgelopen vertraging bij dit werk. Ik neem de schuld op mij en zal de gemiste opgaven zo snel mogelijk inhalen.",
      "Het spijt me dat ik mijn voorbereiding niet naar behoren heb afgerond. Ik snap dat verantwoordelijkheid bij mij ligt en betreur deze fout.",
      "Mijn oprechte excuses voor het niet tijdig voltooien van deze taak. Ik zal het resterende werk vandaag alsnog ter controle aanbieden."
    ]
  }
};

/* -----------------------------
   STRENGHEID BEPALEN
----------------------------- */
function bepaalGroep(strengheid) {
  if (strengheid <= 2) return "1-2";
  if (strengheid <= 4) return "3-4";
  if (strengheid <= 6) return "5-6";
  if (strengheid <= 8) return "7-8";
  return "9-10";
}

/* -----------------------------
   ELEMENTEN UIT HTML
----------------------------- */
const slider = document.getElementById("strengheid");
const waarde = document.getElementById("strengheidWaarde");
const knop = document.getElementById("generateButton");
const resultaat = document.getElementById("result");
const resultaatTekst = document.getElementById("resultText");
const shareBtn = document.getElementById("shareBtn");
const copyBtn = document.getElementById("copyBtn");
const probleemSelect = document.getElementById("probleem");
const customTopicField = document.getElementById("customTopicField");
const customTopicInput = document.getElementById("customTopic");
const generatorStatus = document.getElementById("generatorStatus");
const profileModal = document.getElementById("profileModal");
const profileAvatarBtn = document.getElementById("profileAvatarBtn");
const profileAvatarInitials = document.getElementById("profileAvatarInitials");
const profileForm = document.getElementById("profileForm");
const profileNameInput = document.getElementById("profileName");
const profilePremiumCodeInput = document.getElementById("profilePremiumCode");
const profileStatus = document.getElementById("profileStatus");
const historyList = document.getElementById("historyList");
const historyEmpty = document.getElementById("historyEmpty");
const profileStorageKey = "excuusExpertLocalProfile";
const historyStorageKey = "excuusExpertExcuseHistory";

function readLocalData(key, fallback) {
  try {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocalData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

let localProfile = readLocalData(profileStorageKey, { name: "", premiumCode: "" });
if (!localProfile || typeof localProfile !== "object") {
  localProfile = { name: "", premiumCode: "" };
}
localProfile.name = typeof localProfile.name === "string" ? localProfile.name : "";
localProfile = {
  name: localProfile.name,
  premiumCode: typeof localProfile.premiumCode === "string" ? localProfile.premiumCode : ""
};
writeLocalData(profileStorageKey, localProfile); // wist oude eigen API-sleutels uit de browser


let excuseHistory = readLocalData(historyStorageKey, []);
if (!Array.isArray(excuseHistory)) excuseHistory = [];

function updateProfileView() {
  const initials = Array.from(localProfile.name.trim()).slice(0, 2).join("").toUpperCase() || "?";
  profileAvatarInitials.textContent = initials;
  profileAvatarBtn.setAttribute(
    "aria-label",
    localProfile.name ? `Profiel van ${localProfile.name} openen` : "Lokaal profiel aanmaken"
  );
  profileNameInput.value = localProfile.name;
  profilePremiumCodeInput.value = localProfile.premiumCode;
}

function openProfileModal() {
  updateProfileView();
  profileStatus.textContent = "";
  profileModal.style.display = "flex";
  profileNameInput.focus();
}

function closeProfileModalDirect() {
  profileModal.style.display = "none";
}

function closeProfileModal(event) {
  if (event.target === profileModal) closeProfileModalDirect();
}

profileAvatarBtn.addEventListener("click", openProfileModal);

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localProfile = {
    name: profileNameInput.value.trim(),
    premiumCode: profilePremiumCodeInput.value.trim().toUpperCase()
  };

  if (writeLocalData(profileStorageKey, localProfile)) {
    sessionStorage.removeItem("excuusExpertGroqApiKey");
    updateProfileView();
    profileStatus.textContent = "Profiel opgeslagen op dit apparaat.";
  } else {
    profileStatus.textContent = "Opslaan is niet gelukt. Controleer de opslaginstellingen van je browser.";
  }
});

document.getElementById("clearProfileBtn").addEventListener("click", () => {
  if (!window.confirm("Profiel en premiumcode van dit apparaat verwijderen? Je geschiedenis blijft bewaard.")) return;
  localProfile = { name: "", premiumCode: "" };
  localStorage.removeItem(profileStorageKey);
  sessionStorage.removeItem("excuusExpertGroqApiKey");
  updateProfileView();
  profileStatus.textContent = "Profiel verwijderd. Je geschiedenis is bewaard.";
});

function renderExcuseHistory() {
  historyList.replaceChildren();
  historyEmpty.hidden = excuseHistory.length > 0;

  excuseHistory.forEach((item) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    const topic = document.createElement("span");
    const text = document.createElement("span");
    const date = document.createElement("time");

    button.className = "history-entry";
    button.type = "button";
    topic.className = "history-topic";
    topic.textContent = item.topic;
    text.className = "history-excuse";
    text.textContent = item.excuse;
    date.className = "history-date";
    date.dateTime = item.createdAt;
    date.textContent = new Date(item.createdAt).toLocaleString("nl-NL", {
      dateStyle: "short",
      timeStyle: "short"
    });

    button.append(topic, text, date);
    button.addEventListener("click", () => {
      resultaatTekst.textContent = item.excuse;
      resultaat.style.display = "block";
      resultaat.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    listItem.append(button);
    historyList.append(listItem);
  });
}

function addExcuseToHistory(topic, excuse) {
  excuseHistory.unshift({ topic, excuse, createdAt: new Date().toISOString() });
  excuseHistory = excuseHistory.slice(0, 30);
  writeLocalData(historyStorageKey, excuseHistory);
  renderExcuseHistory();
}

document.getElementById("clearHistoryBtn").addEventListener("click", () => {
  if (!excuseHistory.length || !window.confirm("Je hele smoesgeschiedenis wissen?")) return;
  excuseHistory = [];
  localStorage.removeItem(historyStorageKey);
  renderExcuseHistory();
});

updateProfileView();
renderExcuseHistory();

if (probleemSelect && customTopicField && customTopicInput) {
  probleemSelect.addEventListener("change", () => {
    const isCustom = probleemSelect.value === "custom";
    customTopicField.hidden = !isCustom;
    customTopicInput.required = isCustom;
    if (isCustom) customTopicInput.focus();
  });
}

/* -----------------------------
   SLIDER EVENTS
----------------------------- */
if (slider && waarde) {
  slider.addEventListener("input", function () {
    waarde.textContent = slider.value;
  });
}

/* -----------------------------
   EIGEN SMOES VIA ONZE API (Cloudflare Worker)
----------------------------- */
// Vul hier de URL van jouw Worker in nadat je hem hebt aangemaakt:
const EXCUSE_API_URL = "https://excuusexpert-api.hagedoornhessel.workers.dev";

function apiError(message) {
  const error = new Error(message);
  error.isApiError = true;
  return error;
}

async function generateExcuse(topic, strictness) {
  if (EXCUSE_API_URL.includes("JOUW-NAAM")) {
    throw apiError("De smoes-server is nog niet ingesteld. Vul EXCUSE_API_URL in script.js in.");
  }

  const response = await fetch(EXCUSE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic, strictness, premiumCode: localProfile.premiumCode })
  });
  const data = await response.json().catch(() => ({}));

  if (response.status === 429 && data.error === "limit") {
    throw apiError(data.premium
      ? "Je dagelijkse premium-limiet is bereikt. Probeer het morgen opnieuw."
      : `Je hebt vandaag je ${data.limit} gratis eigen smoezen gebruikt. Wil je er meer? Voeg een premiumcode toe in je profiel (vraag er een via Snapchat).`);
  }
  if (response.status === 503) throw apiError("Het is nu erg druk. Probeer het later opnieuw.");
  if (!response.ok || typeof data.excuse !== "string") {
    throw apiError("Er ging iets mis bij het maken van je smoes. Probeer het opnieuw.");
  }
  return data;
}

/* -----------------------------
   SMOES GENEREREN & COOLDOWN
----------------------------- */
let vorigeIndex = -1;

if (knop) {
  knop.addEventListener("click", async function () {
    const selectedTopic = probleemSelect.value;
    const topic = selectedTopic === "custom" ? customTopicInput.value.trim() : selectedTopic;
    const strictness = Number(slider.value);

    if (!topic) {
      generatorStatus.textContent = "Vul eerst een onderwerp in.";
      customTopicInput.focus();
      return;
    }

    if (selectedTopic !== "custom") {
      const groep = bepaalGroep(strictness);
      const opties = database[selectedTopic][groep];
      let willekeurigeIndex;
      do {
        willekeurigeIndex = Math.floor(Math.random() * opties.length);
      } while (willekeurigeIndex === vorigeIndex && opties.length > 1);

      vorigeIndex = willekeurigeIndex;
      resultaatTekst.textContent = opties[willekeurigeIndex];
      resultaat.style.display = "block";
      addExcuseToHistory(selectedTopic, opties[willekeurigeIndex]);
      generatorStatus.textContent = "";
      return;
    }

    knop.disabled = true;
    knop.textContent = "Even bedenken...";
    generatorStatus.textContent = "Een smoes op maat wordt gemaakt...";

    try {
      const data = await generateExcuse(topic, strictness);
      resultaatTekst.textContent = data.excuse;
      resultaat.style.display = "block";
      addExcuseToHistory(topic, data.excuse);
      generatorStatus.textContent = data.codeInvalid
        ? "Deze premiumcode is niet geldig, dus de gratis limiet is gebruikt."
        : `Nog ${data.remaining} van ${data.limit} eigen smoezen vandaag${data.premium ? " (premium)" : ""}.`;
    } catch (error) {
      console.error("Smoes-aanvraag mislukt:", error);
      generatorStatus.textContent = error.isApiError
        ? error.message
        : "Verbinding mislukt. Controleer je internet en probeer het opnieuw.";
    } finally {
      knop.disabled = false;
      knop.textContent = "✨ Genereer mijn smoes";
    }
  });
}

/* -----------------------------
   SMOES KOPIËREN
----------------------------- */
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const smoesTekst = resultaatTekst ? resultaatTekst.textContent : "";
    
    if (!smoesTekst) {
      const origineleTekst = copyBtn.textContent;
      copyBtn.textContent = "⚠️ Niks om te kopiëren!";
      setTimeout(() => {
        copyBtn.textContent = origineleTekst;
      }, 2000);
      return;
    }

    navigator.clipboard.writeText(smoesTekst);
    const origineleTekst = copyBtn.textContent;
    copyBtn.textContent = "✅ Gekopieerd!";
    setTimeout(() => {
      copyBtn.textContent = origineleTekst;
    }, 2000);
  });
}

/* -----------------------------
   SMOES DELEN
----------------------------- */
if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    const smoesTekst = resultaatTekst ? resultaatTekst.textContent : "";

    if (!smoesTekst) {
      const origineleShareTekst = shareBtn.textContent;
      shareBtn.textContent = "⚠️ Genereer eerst een smoes!";
      setTimeout(() => {
        shareBtn.textContent = origineleShareTekst;
      }, 2000);
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ExcuusExpert Smoes',
          text: smoesTekst,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Delen geannuleerd");
      }
    } else {
      navigator.clipboard.writeText(smoesTekst);
      const origineleShareTekst = shareBtn.textContent;
      shareBtn.textContent = "✅ Gekopieerd!";
      setTimeout(() => {
        shareBtn.textContent = origineleShareTekst;
      }, 2000);
    }
  });
}

/* ================================
   PANIEKKNOP LOGICA
================================= */
const panicExcuses = [
  "Mijn fietssleutel is vanochtend afgebroken in het slot, ik moest rennend naar school.",
  "Magister lag er gisteravond compleet uit, ik kon mijn huiswerk nergens inzien.",
  "Mijn wekker is niet afgegaan door een automatische software-update van mijn telefoon.",
  "De ketting van mijn fiets vloog eronderweg af en kwam helemaal vast te zitten tussen de kettingkast.",
  "Ik had de verkeerde stapel boeken meegenomen omdat het rooster in de app niet goed vernieuwd was."
];

function generatePanicExcuse() {
  const randomExcuse = panicExcuses[Math.floor(Math.random() * panicExcuses.length)];
  document.getElementById('panicText').innerText = randomExcuse;
  document.getElementById('panicModal').style.display = 'flex';
  addExcuseToHistory("Spoedexcuus", randomExcuse);
}

function closePanicModal(event) {
  if (event.target.id === 'panicModal') {
    document.getElementById('panicModal').style.display = 'none';
  }
}

function closePanicModalDirect() {
  document.getElementById('panicModal').style.display = 'none';
}

function copyPanicExcuse() {
  const text = document.getElementById('panicText').innerText;
  navigator.clipboard.writeText(text);
  alert('Spoedexcuus gekopieerd!');
}

/* ================================
   INZEND MODAL LOGICA
================================= */
function openSubmitModal() {
  document.getElementById('submitModal').style.display = 'flex';
}

function closeSubmitModalDirect() {
  document.getElementById('submitModal').style.display = 'none';
}

function closeSubmitModal(event) {
  if (event.target.id === 'submitModal') {
    closeSubmitModalDirect();
  }
}

function handleFormSubmit(event) {
  setTimeout(() => {
    alert("Bedankt! Je smoes is succesvol ingestuurd.");
    closeSubmitModalDirect();
    document.getElementById('excuseForm').reset();
  }, 500);
}
/* -----------------------------
   LICHT / DONKER MODUS LOGICA
----------------------------- */
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  
  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }
  
  localStorage.setItem("themePreference", isLight ? "light" : "dark");
}

// Opgeslagen voorkeur laden zodra de pagina laadt
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("themePreference") === "light") {
    document.body.classList.add("light-mode");
    const themeIcon = document.getElementById("themeIcon");
    if (themeIcon) {
      themeIcon.className = "fa-solid fa-moon";
    }
  }
});
