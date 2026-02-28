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
    title: "Rewitalizacja blokowisk",
    type: "content",
    points: [
      "W latach 60. i 70. XX w. w Europie masowo powstawały bloki z płyt",
      "Obecnie uważa się je za nieatrakcyjne dla mieszkańców",
      "Rewitalizacja obejmuje: odnowienie fasad, tereny rekreacyjne, miejsca parkingowe",
      "Przykład: rewitalizacja blokowisk w Niemczech",
    ],
  },
  {
    id: 6,
    title: "Rewitalizacja powojennej zabudowy miejskiej",
    type: "content",
    points: [
      "Dotyczy obszarów zniszczonych w wyniku II wojny światowej",
      "Przykład: Warszawa – zniszczone ok. 70% zabudowy",
      "Odbudowa Starego Miasta w Warszawie – ponad 90% budynków",
      "Odbudowa z wykorzystaniem starych stylów architektonicznych",
    ],
  },
  {
    id: 7,
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
    id: 8,
    title: "Rolnictwo ekologiczne",
    type: "content",
    points: [
      "Największy udział rolnictwa ekologicznego: Austria, Estonia, Włochy",
      "W rolnictwie ekologicznym nie stosuje się sztucznych środków chemicznych",
      "Produkty ekologiczne są coraz popularniejsze wśród konsumentów",
      "Polska i Francja rozwijają sektor rolnictwa ekologicznego",
    ],
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
    title: "Bibliografia",
    type: "bibliography",
    points: [
      "\u201EOblicza geografii 2\u201D \u2013 podr\u0119cznik do geografii",
    ],
  },
  {
    id: 14,
    title: "Dziękuję za uwagę!",
    type: "end",
    points: ["Rewitalizacja i działania proekologiczne"],
  },
];

export const slideNotes: Record<number, string> = {
  1: "",
  2: "Rewitalizacja to kompleksowe działania, które mają na celu przywrócenie właściwego funkcjonowania społeczeństwa i przyrody na obszarach zdegradowanych. Te obszary borykają się z wieloma problemami społecznymi, gospodarczymi, środowiskowymi, przestrzenno-funkcjonalnymi lub technicznymi. Rewitalizacja obejmuje całościową poprawę przestrzeni, gospodarki, środowiska przyrodniczego i relacji społecznych. Dotyczy zatem nie tylko zmian widocznych w krajobrazie, lecz także angażuje mieszkańców oraz władze lokalne.",
  3: "Na obszarach zdegradowanych zazwyczaj występuje wiele powiązanych ze sobą problemów dotyczących gospodarki, ludności i przestrzeni, w której ona żyje. Problemy społeczne to m.in. wysokie bezrobocie, ubóstwo, wysoka przestępczość, niski poziom edukacji. Problemy gospodarcze to niski poziom przedsiębiorczości. Problemy środowiskowe to przekroczenie norm środowiskowych i istnienie odpadów zagrażających ludziom. Problemy techniczne to zły stan techniczny budynków i energochłonne rozwiązania.",
  4: "Cztery najważniejsze rodzaje rewitalizacji dotyczą obszarów miast i przedmieść, terenów poprzemysłowych, pokolejowych i powojskowych, blokowisk oraz obszarów powojennej zabudowy miejskiej. Przykład: Centrum handlowo-usługowe Manufaktura w Łodzi zajmuje obszar dawnej fabryki włókienniczej. Rewitalizacja tego obszaru polegała na utworzeniu centrum handlowo-usługowego przy zachowaniu starych budynków.",
  5: "W latach 60. i 70. XX w. w Europie powstawały masowo bloki z wielkich płyt. W ten sposób budowano osiedla z mieszkaniami dla rosnącej liczby ludności. Obecnie uważa się, że ta część miast jest nieatrakcyjna dla mieszkańców. Z tego powodu występują problemy społeczne. Rewitalizacja blokowisk obejmuje odnowienie fasad budynków, organizację terenów rekreacyjnych i miejsc parkingowych.",
  6: "Działania rewitalizacyjne w Polsce dotyczą przede wszystkim obszarów zniszczonych w wyniku II wojny światowej i powstania warszawskiego. W Warszawie zniszczone zostało ok. 70% zabudowy. Odbudowa Starego Miasta – ponad 90% budynków – jest przykładem rewitalizacji powojennej zabudowy miejskiej, z wykorzystaniem starych stylów architektonicznych.",
  7: "Działania proekologiczne w rolnictwie zmniejszają negatywny wpływ na środowisko. Obejmują m.in. stosowanie nawozów naturalnych, ograniczenie pestycydów, chów zwierząt w naturalnych warunkach. Ważna jest troska o warunki życia zwierząt, ochrona gleb i wód. Rolnictwo ekologiczne staje się coraz bardziej popularne.",
  8: "Największy udział rolnictwa ekologicznego mają kraje takie jak Austria, Estonia i Włochy. Rolnictwo ekologiczne nie wykorzystuje sztucznych środków chemicznych. Produkty ekologiczne cieszą się rosnącą popularnością wśród konsumentów w wielu krajach europejskich, w tym w Polsce i Francji.",
  9: "Podstawowym działaniem proekologicznym w przemyśle jest wprowadzanie technologii zmniejszających negatywny wpływ na środowisko. Obejmuje to wykorzystywanie surowców wtórnych, recykling, zmniejszanie emisji CO₂ oraz zużycia wody i energii. Przykładem są zakłady przemysłowe wykorzystujące materiały z recyklingu w procesach produkcyjnych.",
  10: "W ostatnich latach wiele działań proekologicznych podejmuje się w usługach i transporcie. Przykładem są autobusy elektryczne w komunikacji miejskiej miast takich jak Paryż, Madryt i Ateny. Rozwija się także sieć ścieżek rowerowych. Ekoturystyka i agroturystyka stają się popularnymi alternatywnymi formami turystyki. Coraz bardziej popularne stają się też sklepy z produktami lokalnymi.",
  11: "Każdy człowiek może podejmować działania proekologiczne. Do pożądanych wyborów konsumenckich należą: kupowanie produktów lokalnych, wybieranie towarów z materiałów naturalnych i z recyklingu, używanie energooszczędnych żarówek, poruszanie się transportem miejskim lub rowerem, uczestniczenie w akcjach takich jak Dzień Ziemi, poszerzanie wiedzy ekologicznej.",
  12: "Działania proekologiczne w naszym najbliższym otoczeniu obejmują: segregację odpadów, redukcję plastiku poprzez korzystanie z toreb wielorazowych i picie wody z kranu, oszczędzanie wody przez zakręcanie kranu podczas mycia zębów i branie prysznica, zbieranie deszczówki do podlewania kwiatów, a także oszczędzanie energii poprzez wyłączanie światła i używanie energooszczędnych żarówek.",
  13: "",
  14: "",
};
