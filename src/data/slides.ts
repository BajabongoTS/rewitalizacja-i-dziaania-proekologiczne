export interface SlideData {
  id: number;
  title: string;
  points?: string[];
  type: 'title' | 'content' | 'bibliography' | 'end';
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Rewitalizacja i działania proekologiczne",
    type: "title",
    points: ["Wpływ człowieka na środowisko", "Rozdział 8 – Geografia"],
  },
  {
    id: 2,
    title: "Na czym polega rewitalizacja?",
    type: "content",
    points: [
      "Kompleksowe działania przywracające właściwe funkcjonowanie społeczeństwa i przyrody na obszarach zdegradowanych",
      "Obejmuje poprawę przestrzeni, gospodarki, środowiska przyrodniczego i relacji społecznych",
      "Dotyczy nie tylko zmian widocznych w krajobrazie, ale angażuje mieszkańców i władze lokalne",
    ],
  },
  {
    id: 3,
    title: "Negatywne zjawiska na obszarach zdegradowanych",
    type: "content",
    points: [
      "Społeczne: wysokie bezrobocie, ubóstwo, przestępczość, niski poziom edukacji",
      "Gospodarcze: niski poziom przedsiębiorczości",
      "Środowiskowe: przekroczenie norm, odpady zagrażające środowisku",
      "Przestrzenno-funkcjonalne: brak dostępu do usług i ich niska jakość",
      "Techniczne: zły stan budynków, energochłonne rozwiązania",
    ],
  },
  {
    id: 4,
    title: "Rodzaje rewitalizacji",
    type: "content",
    points: [
      "Rewitalizacja krajobrazów miast i przedmieść",
      "Rewitalizacja obszarów poprzemysłowych i pokolejowych",
      "Rewitalizacja terenów powojskowych",
      "Rewitalizacja powojennej zabudowy miejskiej",
      "Rewitalizacja blokowisk",
    ],
  },
  {
    id: 5,
    title: "Rewitalizacja obszarów poprzemysłowych i pokolejowych",
    type: "content",
    points: [
      "Dawne fabryki, huty i tereny kolejowe często leżą w centrum miast, zajmując duże powierzchnie",
      "Przykład: Manufaktura w Łodzi – dawna fabryka Izraela Poznańskiego zamieniona w centrum handlowo-kulturalne",
      "Przykład: Stara Rzeźnia w Poznaniu – poprzemysłowy kompleks przekształcony w przestrzeń kulturalną",
      "Zagospodarowanie tych terenów poprawia estetykę miasta i stymuluje gospodarkę lokalną",
      "Rewitalizacja wymaga oczyszczenia terenu z zanieczyszczeń przemysłowych i modernizacji infrastruktury",
    ],
  },
  {
    id: 6,
    title: "Rewitalizacja terenów powojskowych",
    type: "content",
    points: [
      "Tereny po byłych bazach wojskowych często zajmują rozległe, dobrze skomunikowane obszary",
      "Przykład: Fort IV w Toruniu – dawny pruski fort zamieniony w hotel i centrum turystyczne",
      "Przykład: Cytadela w Poznaniu – dawny fort pruski przekształcony w park miejski",
      "Rewitalizacja tworzy nowe miejsca pracy, tereny rekreacyjne i mieszkania",
      "Kluczowym elementem jest zachowanie elementów historycznych przy jednoczesnej adaptacji do nowych funkcji",
    ],
  },
  {
    id: 7,
    title: "Rewitalizacja blokowisk i zabudowy powojennej",
    type: "content",
    points: [
      "Blokowiska: w latach 60.–70. XX w. masowo budowano bloki z płyt; dziś uznawane za nieatrakcyjne",
      "Rewitalizacja blokowisk: odnowienie fasad, tereny rekreacyjne, parkingi – przykład Niemcy",
      "Zabudowa powojenna: Warszawa straciła ok. 70% zabudowy w II wojnie światowej i powstaniu warszawskim",
      "Odbudowa Starego Miasta w Warszawie objęła ponad 90% budynków, odtwarzając historyczne style architektoniczne",
    ],
  },
  {
    id: 8,
    title: "Działania proekologiczne w rolnictwie",
    type: "content",
    points: [
      "Stosowanie nawozów naturalnych zamiast sztucznych",
      "Ograniczenie wykorzystywania pestycydów",
      "Chów zwierząt w warunkach zbliżonych do naturalnych",
      "Troska o bioróżnorodność i ochronę gleby",
    ],
  },
  {
    id: 9,
    title: "Rolnictwo ekologiczne i przykłady produktów",
    type: "content",
    points: [
      "Największy udział rolnictwa ekologicznego: Austria, Estonia, Włochy",
      "W rolnictwie ekologicznym nie stosuje się sztucznych środków chemicznych",
      "Przykłady produktów ekologicznych: warzywa i owoce BIO, jaja z wolnego wybiegu, mleko organiczne, chleb na zakwasie z mąki ekologicznej, miód z certyfikowanych pasiek",
      "Produkty ekologiczne oznaczane są unijnym znakiem 'lisć z gwiazdek' (EU Organic Logo)",

      "Polska i Francja dynamicznie rozwijają sektor rolnictwa ekologicznego",
    ],
  },
  {
    id: 10,
    title: "Działania proekologiczne w przemyśle",
    type: "content",
    points: [
      "Wprowadzanie proekologicznych technologii produkcji",
      "Wykorzystywanie surowców wtórnych i recykling",
      "Zmniejszanie emisji CO₂ i zużycia wody",
      "Ograniczanie ilości odpadów przemysłowych",
      "Stosowanie materiałów pochodzących z recyklingu",
    ],
  },
  {
    id: 11,
    title: "Działania proekologiczne w usługach",
    type: "content",
    points: [
      "Autobusy elektryczne w komunikacji miejskiej (Paryż, Madryt, Ateny)",
      "Rozwój sieci rowerowych i ścieżek dla pieszych",
      "Ekoturystyka i agroturystyka jako alternatywne formy turystyki",
      "Sklepy z produktami lokalnymi i ekologicznymi",
    ],
  },
  {
    id: 12,
    title: "Współodpowiedzialność za środowisko",
    type: "content",
    points: [
      "Kupowanie produktów lokalnych i ekologicznych",
      "Wybieranie towarów z materiałów naturalnych i z recyklingu",
      "Używanie energooszczędnych żarówek i sprzętu",
      "Poruszanie się transportem miejskim, rowerem lub pieszo",
      "Uczestniczenie w akcjach proekologicznych (np. Dzień Ziemi)",
    ],
  },
  {
    id: 13,
    title: "Działania proekologiczne w naszym otoczeniu",
    type: "content",
    points: [
      "Segregacja odpadów",
      "Redukcja plastiku: torby wielorazowe, woda z kranu zamiast butelkowanej",
      "Oszczędzanie wody: zakręcanie kranu, prysznic zamiast kąpieli, zbieranie deszczówki",
      "Oszczędzanie energii: wyłączanie światła, energooszczędne żarówki",
    ],
  },
  {
    id: 14,
    title: "Bibliografia",
    type: "bibliography",
    points: [
      "\u201EOblicza geografii 2\u201D \u2013 podr\u0119cznik do geografii",
    ],
  },
  {
    id: 15,
    title: "Dziękuję za uwagę!",
    type: "end",
    points: ["Rewitalizacja i działania proekologiczne"],
  },
];

export const slideNotes: Record<number, string> = {
  1: "",
  2: "Rewitalizacja to kompleksowe działania, które mają na celu przywrócenie właściwego funkcjonowania społeczeństwa i przyrody na obszarach zdegradowanych. Te obszary borykają się z wieloma problemami społecznymi, gospodarczymi, środowiskowymi, przestrzenno-funkcjonalnymi lub technicznymi. Rewitalizacja obejmuje całościową poprawę przestrzeni, gospodarki, środowiska przyrodniczego i relacji społecznych. Dotyczy zatem nie tylko zmian widocznych w krajobrazie, lecz także angażuje mieszkańców oraz władze lokalne.",
  3: "Na obszarach zdegradowanych zazwyczaj występuje wiele powiązanych ze sobą problemów dotyczących gospodarki, ludności i przestrzeni, w której ona żyje. Problemy społeczne to m.in. wysokie bezrobocie, ubóstwo, wysoka przestępczość, niski poziom edukacji. Problemy gospodarcze to niski poziom przedsiębiorczości. Problemy środowiskowe to przekroczenie norm środowiskowych i istnienie odpadów zagrażających ludziom. Problemy techniczne to zły stan techniczny budynków i energochłonne rozwiązania.",
  4: "Cztery najważniejsze rodzaje rewitalizacji dotyczą obszarów miast i przedmieść, terenów poprzemysłowych, pokolejowych i powojskowych, blokowisk oraz obszarów powojennej zabudowy miejskiej.",
  5: "Obszary poprzemysłowe i pokolejowe to jedne z najważniejszych wyzwań rewitalizacyjnych w Polsce i Europie. Dawne fabryki, huty i stacje kolejowe zajmują rozległe tereny, często w centrum miast, które z czasem popadły w ruinę. Przykładem udanej rewitalizacji jest Manufaktura w Łodzi – dawna fabryka włókiennicza Izraela Poznańskiego przekształcona w nowoczesne centrum handlowo-rozrywkowo-kulturalne. Innym przykładem jest Stara Rzeźnia w Poznaniu, gdzie poprzemysłowy kompleks rzeźniany stał się przestrzenią kulturalną i gastronomiczną. Rewitalizacja takich terenów wymaga najpierw oczyszczenia gruntu z zanieczyszczeń, a następnie modernizacji infrastruktury pod nowe funkcje.",
  6: "Tereny powojskowe, podobnie jak poprzemysłowe, często zajmują duże, dobrze skomunikowane obszary w miastach lub ich pobliżu. Po zakończeniu zimnej wojny wiele baz wojskowych w Polsce i Europie stało się zbędnych i zostało przekazanych samorządom. Przykładem rewitalizacji jest Fort IV w Toruniu, dawny fort pruski zamieniony w obiekt hotelowo-turystyczny, oraz Cytadela w Poznaniu, przekształcona w jeden z największych parków miejskich w Polsce. Rewitalizacja terenów powojskowych musi uwzględniać zarówno kwestię ewentualnych skażeń chemicznych, jak i wartość historyczną, którą warto zachować.",
  7: "W latach 60. i 70. XX w. w Europie powstawały masowo bloki z wielkich płyt – tzw. blokowiska. Budowano je jako odpowiedź na szybki wzrost liczby ludności w miastach. Dziś uważa się je za nieatrakcyjne społecznie. Rewitalizacja blokowisk obejmuje m.in. odnowienie fasad, docieplenie budynków, urządzenie terenów rekreacyjnych i parkingów. Klasycznym przykładem są Niemcy Wschodnie. Powojenną zabudowę miejską ilustruje przykład Warszawy, gdzie w wyniku II wojny i Powstania Warszawskiego zniszczone zostało ok. 70% zabudowy. Odbudowa Starego Miasta – ponad 90% budynków – jest symbolicznym przykładem rewitalizacji z zachowaniem historycznych stylów architektonicznych.",
  8: "Działania proekologiczne w rolnictwie zmniejszają negatywny wpływ na środowisko. Obejmują m.in. stosowanie nawozów naturalnych, ograniczenie pestycydów, chów zwierząt w naturalnych warunkach. Ważna jest troska o warunki życia zwierząt, ochrona gleb i wód.",
  9: "Rolnictwo ekologiczne polega na rezygnacji ze sztucznych środków chemicznych. Największy udział powierzchni upraw ekologicznych mają Austria, Estonia i Włochy. Produkty ekologiczne oznaczane są unijnym znakiem 'listek z gwiazdek' (EU Organic Logo). Polska i Francja dynamicznie rozwijają ten sektor.",

  10: "Podstawowym działaniem proekologicznym w przemyśle jest wprowadzanie technologii zmniejszających negatywny wpływ na środowisko. Obejmuje to wykorzystywanie surowców wtórnych, recykling, zmniejszanie emisji CO₂ oraz zużycia wody i energii. Przykładem są zakłady przemysłowe wykorzystujące materiały z recyklingu w procesach produkcyjnych.",
  11: "W ostatnich latach wiele działań proekologicznych podejmuje się w usługach i transporcie. Przykładem są autobusy elektryczne w komunikacji miejskiej miast takich jak Paryż, Madryt i Ateny. Rozwija się także sieć ścieżek rowerowych. Ekoturystyka i agroturystyka stają się popularnymi alternatywnymi formami turystyki. Coraz bardziej popularne stają się też sklepy z produktami lokalnymi.",
  12: "Każdy człowiek może podejmować działania proekologiczne. Do pożądanych wyborów konsumenckich należą: kupowanie produktów lokalnych, wybieranie towarów z materiałów naturalnych i z recyklingu, używanie energooszczędnych żarówek, poruszanie się transportem miejskim lub rowerem, uczestniczenie w akcjach takich jak Dzień Ziemi, poszerzanie wiedzy ekologicznej.",
  13: "Działania proekologiczne w naszym najbliższym otoczeniu obejmują: segregację odpadów, redukcję plastiku poprzez korzystanie z toreb wielorazowych i picie wody z kranu, oszczędzanie wody przez zakręcanie kranu podczas mycia zębów i branie prysznica, zbieranie deszczówki do podlewania kwiatów, a także oszczędzanie energii poprzez wyłączanie światła i używanie energooszczędnych żarówek.",
  14: "",
  15: "",
};
