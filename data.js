export const navs = [
  {
    label: "Projekty",
    link: "/projekty",
  },
  {
    label: "O mnie",
    link: "/o-mnie",
  },
  {
    label: "Kontakt",
    link: "/kontakt",
  },
];

export const projects = [
  {
    id: 1,
    name: "Narzędzie filtrujące/sortujące komentarze na Instagramie",
    description: [
      {
        type: "p",
        id: 1,
        content:
          "Prowadzę konto repostujące w branży Handmade na Instagramie, w ramach którego przeprowadzam cykliczne akcje promowania twórców. Każdy rekodzielnik może zostawić komentarz pod wskazanym postem. Następnie ja wybieram 10 komentarzy, który następnie udostępniam w relacji. Każdy twórca rękodzieła może być udostepniony tylko jeden raz.",
      },
      {
        type: "p",
        id: 2,
        content: "Założenia projektu:",
      },
      {
        type: "list",
        id: 3,
        content: [
          "Pobieranie wszystkich dostępnych komentarz pod wybranym postem",
          "Sortowanie komenatrzy od najstarszego",
          "Filtrowanie komentarzy według klucza (twórca może pojawić się tylko raz)",
          "Losowanie 5 komentarzy z obrobionej puli",
          'Wyświetlanie komentarzy na dodatkowej warstwie "nad" postem na IG',
        ],
      },
      {
        type: "p",
        id: 4,
        content:
          "Projekt zrealizowałem poprzez stworzenie prostego skryptu, który wklejam w konsoli na odpowiedniej stronie Instagrama. Informacja o rekodzielnikach, którzy byli już udostepnieni znajduje się w obiekcie JSON. Na dzień dzisiejszy jest on aktualizowany ręcznie.",
      },
      {
        type: "p",
        id: 5,
        content: "TODO:",
      },
      {
        type: "list",
        id: 6,
        content: [
          "Umieścić kod jako dodatek do przeglądarki chrome",
          "Podpiąć Firebase, zautomatyzować dodawanie i pobieranie infromacji o twórcach, którzy były już udostępnieni",
        ],
      },
      {
        type: "p",
        id: 7,
        content:
          "Ponieważ skrypt jest plikiem lokalnym, umieszczam wideo prezentujące działanie kodu:",
      },
      {
        type: "video",
        id: 8,
        content: "",
      },
      {
        type: "links",
        id: 9,
        content: [
          {
            label: "Github",
            source: "https://github.com/emRhino/GalRek-tool",
          },
        ],
      },
    ],
    short_description:
      "Projekt ma za zadanie wspomóc mnie w przeglądaniu i wybierania odpowiednich komentarzy pod postami na Instagramie.",
    slug: "projekt-1",
    image: {
      source: "projekt-1.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 2,
    name: "Przeglądarka produktów na smyk.com",
    description: [
      {
        type: "image",
        content: {
          source: "walidator-dostepnosci-produktow.png",
          width: 730,
          height: 300,
        },
      },
      {
        type: "p",
        content:
          "Część pracowników użytkuje smyk.com w codziennej pracy, przeglądają dostępności i ceny produktów w różnych kategoriach, dla różnych producentów i marek lub w różnych warianatach.",
      },
      {
        type: "p",
        content: "Założenia projektu:",
      },
      {
        type: "list",
        content: [
          "Możliwość sprawdzenia dostepności dla wielu produktów",
          "Możliwośc sprawdzania dostępności poprzez wgrwywanie plików CSV",
          "Możliwość zbudowania zapytania, które zwróci określone produkty",
          "Możliwość skopiowania wszystkich indeksów rozdzielonych przecinkiem.",
        ],
      },
      {
        type: "p",
        content:
          "Projekt zrealizowałem poprzez stworzenie prostego lokalnego pliku HTML, który każdy zainteresowany może uruchomić w swojej przeglądarce. Do poprawnego działania do wszystkich requestów wysyłanych do serwera dodaję specjalne nagłówki. Niezbędny jest także dodatek do przeglądarki Moesif CORS który rozwiązuje problem z CORS Policy.",
      },
      {
        type: "p",
        content:
          "Wyzwania przed którymi stałem to m.in. odpytywania serwera w takim sposób by nie zapchać serwera.",
      },
      {
        type: "p",
        content:
          "Ponieważ projekt nie jest dostępny publicznie, załączam poniżej video demonstracyjne.",
      },
      {
        type: "links",
        content: [
          {
            label: "Github",
            source: "https://github.com/emRhino/Product-availability-tool",
          },
        ],
      },
    ],
    short_description:
      "Wyszukiwarka pozwala przeglądać produkty dostępne w sklepie internetowym smyk.com według różnych kryteriów.",
    slug: "projekt-2",
    image: {
      source: "projekt-2.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 3,
    name: "Wyszukiwarka ofert pracy w SMYK",
    description: [
      {
        type: "image",
        content: "wyszukiwarka-ofert-pracy.png",
        width: 730,
        height: 300,
      },
      {
        type: "p",
        content:
          "Serwis eRecruiter informacje o dostępnych ofertach pracy zwraca przez API w formacie JSON. Strona korporacyjna smykgroup działa aktualnie na silniku WordPress.",
      },
      {
        type: "p",
        content:
          "Integrację wykonałem poprzez przygotowanie bardzo prostej wtyczki, która pobiera całego JSONa, wyciąga z niego jedynie te infromacje, które są niezbędne, a następnie zwraca na front.",
      },
      {
        type: "p",
        content:
          "Filtrowanie i sortowanie listy ogłoszeń odbywa sie wyłącznie na froncie sklepu.",
      },
      {
        type: "links",
        content: [
          {
            label: "Live",
            source: "https://smykgroup.com/pl/kariera/oferty-pracy/",
          },
        ],
      },
    ],
    short_description:
      "Moje zadanie polagało na zintegrowaniu obecnej podstrony kariery smykgroup.com z zewnętrznym serwisem eRecruiter.",
    slug: "projekt-3",
    image: {
      source: "projekt-3.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 4,
    name: "Serwis internetowy Galerii Rękodzieła",
    description: [
      {
        type: "image",
        content: "galeria-rekodziela.png",
        width: 730,
        height: 400,
      },
      {
        type: "p",
        content:
          "Galeria Rękodzieła jest moim osobistym projektem. Pod tą marką prowadzę na Instagramie konto repostujące, którego głownym celem jest promocja polskich rękodzielników oraz pozyskiwanie klientów, który tworze sklepy internetowe.",
      },
      {
        type: "links",
        content: [
          {
            label: "Live",
            source: "https://galeriarekodziela.pl",
          },
          {
            label: "Konto na IG",
            source: "https://www.instagram.com/galeria_rekodziela/",
          },
        ],
      },
    ],
    short_description:
      "Zaprojektowanie i wdrożenie serwisu, w którym rękodzielnicy mogą zakładać konta i wystawiać swoje wizytówki",
    slug: "projekt-4",
    image: {
      source: "projekt-4.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 5,
    name: "Sklep internetowy Mukka Senso",
    description: [
      {
        type: "p",
        content:
          "Projekt zakładał zaprojektowanie i wdrożenie, według wymagań klientki, sklepu internetowego na WordPress + Woocommerce. Motyw sklepu został przeze mnie zakodowany od zera.",
      },
      {
        type: "links",
        content: [
          {
            label: "Live",
            source: "https://mukkasenso.pl/",
          },
        ],
      },
    ],
    short_description:
      "Zaprojektowanie i wdrożenie sklepu internetowego na Wordpress + Woocommerce",
    slug: "projekt-5",
    image: {
      source: "projekt-5.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 6,
    name: "Sklep internetowy Między Drzewami",
    description: [
      {
        type: "p",
        content:
          "Projekt zakładał zaprojektowanie i wdrożenie, według wymagań klientki, sklepu internetowego na WordPress + Woocommerce. Motyw sklepu został przeze mnie zakodowany od zera.",
      },
      {
        type: "image",
        content: "miedzy-drzewami-pracownia.png",
        width: 730,
        height: 300,
      },
      {
        type: "links",
        content: [
          {
            label: "Live",
            source: "https://miedzydrzewamipracownia.pl/",
          },
        ],
      },
    ],
    short_description:
      "Projekt zakładał zaprojektowanie i wdrożenie, według wymagań klientki, sklepu internetowego na WordPress + Woocommerce. Motyw sklepu został przeze mnie zakodowany od zera.",
    slug: "projekt-6",
    image: {
      source: "projekt-6.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 7,
    name: "Sklep internetowy Jaklis",
    description: [
      {
        type: "p",
        content:
          "Projekt zakładał zaprojektowanie i wdrożenie, według wymagań klientki, sklepu internetowego. Motyw sklepu został przeze mnie zakodowany od zera.",
      },
      {
        type: "image",
        content: "jaklis.png",
        width: 730,
        height: 300,
      },
      {
        type: "links",
        content: [
          {
            label: "Live",
            source: "https://jaklis.eu/",
          },
        ],
      },
    ],
    short_description:
      "Zaprojektowanie i wdrożenie sklepu internetowego na Wordpress + Woocommerce",
    slug: "projekt-7",
    image: {
      source: "projekt-7.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 8,
    name: "Strona portfolio emrhino.pl",
    description: [
      {
        type: "p",
        content:
          "Projekt zakładał zaprojektowanie i wdrożenie, według wymagań klientki, sklepu internetowego na WordPress + Woocommerce. Motyw sklepu został przeze mnie zakodowany od zera.",
      },
      {
        type: "image",
        content: "jaklis.png",
        width: 730,
        height: 300,
      },
      {
        type: "links",
        content: [
          {
            label: "Live",
            source: "https://jaklis.eu/",
          },
        ],
      },
    ],
    short_description:
      "Projekt zakładał zaprojektowanie i wdrożenie, według wymagań klientki, sklepu internetowego na WordPress + Woocommerce. Motyw sklepu został przeze mnie zakodowany od zera.",
    slug: "projekt-7",
    image: {
      source: "projekt-7.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 9,
    name: "Gra kółko i krzyżyk",
    description: [
      {
        type: "p",
        content:
          "Projekt zakładał zaprojektowanie i wdrożenie, według wymagań klientki, sklepu internetowego na WordPress + Woocommerce. Motyw sklepu został przeze mnie zakodowany od zera.",
      },
      {
        type: "image",
        content: "jaklis.png",
        width: 730,
        height: 300,
      },
      {
        type: "links",
        content: [
          {
            label: "Live",
            source: "https://jaklis.eu/",
          },
        ],
      },
    ],
    short_description:
      "Zaprojektowanie i wdrożenie sklepu internetowego na Wordpress + Woocommerce",
    slug: "projekt-7",
    image: {
      source: "projekt-7.png",
      width: 800,
      height: 400,
    },
  },
];

export const home_page = {
  page_title: "Strona główna",
  page_meta_title: "Portfolio projektowe - Marcin Rynkowski - emRhino.pl",
  page_meta_description: "Portfolio projektowe - Marcin Rynkowski - emRhino.pl",
  content: [],
};

export const about_page = {
  page_title: "Cześć, nazywam się Marcin Rynkowski.",
  page_meta_title: "O mnie - Marcin Rynkowski - emRhino.pl",
  page_meta_description: "O mnie - Marcin Rynkowski - emRhino.pl",
  content: [
    {
      type: "image",
      content: {
        source: "me.jpg",
        width: 300,
        height: 300,
      },
    },
    {
      type: "p",
      content:
        "Od przeszło 12 lat tworzę strony i sklepy internetowe jako freelancer, ale nigdy nie pracowałem dłużej jako etatowy programista. Dziś chcę to zmienić. Szukam pracy na stanowisku junior front-end developera.",
    },
    {
      type: "h2",
      content: "Freelance czy etat?",
    },
    {
      type: "p",
      content:
        "Do tej pory łączyłem jedno i drugie. Nie chcę rezygnować z dorywczego tworzeniu sklepów stron i sklepów, ale także nie planuję by freelance był moim jedynym źródłem dochodu. Lubię tworzyć poboczne projekty bo to daje mi fajne pole do eskperymentowania i nauki nowych rzeczy. Lubie także kontakt z ludźmi i zarządzanie projektami.",
    },
    {
      type: "h2",
      content: "Co do tej pory robiłem?",
    },
    {
      type: "p",
      content:
        "Oprócz dorywczego tworzenia stron, moim podstawowym zajęciem jest praca na etacie w biurze smyka. Ulokowany jest obecnie w dziale handlowym chociaż moje kompetencje mocno zazębiają się z IT. Na początku mojej pracy miałem też swój duży wkład w proces developmentu ówczesnej wersji smyk.com - wraz z zewnętrznym zespołem programistów kodowałem front i byłem odpowiedzialny za wersję mobilną sklepu.",
    },
    {
      type: "p",
      content:
        "Dziś jestem Product Ownerem aplikacji mobilnej smyk.com. Jestem odpowiedzialny za cały proces tworzenia aplikacji od analizy biznesowej, przez projektowanie, aż po wdrożenie. Współpracuję z project managerami, grafikami, testerami i innymi zespołami biznesowymi. Jestem również bezpośrednio zaangażowany w zarzadzanie kontentem aplikacji, pozyskiwanie klientów oraz osiąganie zakłądanych celów sprzedażowych. W smyku zawiaduję również wszytskimi stronami korporacyjnymi. Aktualizuje je i rozbudowuje w zależności od potrzeb biznesu.",
    },
    {
      type: "h2",
      content: "Dlaczego chcę zmienić dział handlowy na IT?",
    },
    {
      type: "p",
      content:
        "Do biznesu trafiłem trochę przez przypadek, siłą inercji projektu sklepu smyk.com przeszedłem od kodowania w stronę zarządzania treści, testowania a później pracy nad backlogiem. Mimo, że wciąż lubie to robić to czuję, że w obecnym miejscu wiekszość moich doświadczeń wciąż się powtarza, nie wiele uczę się nowych rzeczy. Nie widzę siębie na podobnych stanowisku w innej firmie. Ponadto nieopisaną frajdę wciąż sprawiają mi zadania bardzo techniczne, wymagający pracy koncepcyjnej czy kodowania. Chcę do tego wrócić i tylko tym się zająć.",
    },
  ],
};

export const projects_page = {
  page_title: "Zrealizowane projekty",
  content: [],
  page_meta_title: "Zrealizowane projekty - emRhino.pl",
  page_meta_description: "Zrealizowane projekty - emRhino.pl",
};

export const contact_page = {
  page_title: "Kontakt",
  page_meta_title: "Kontakt - emRhino.pl",
  page_meta_description: "Kontakt - emRhino.pl",
  content: [
    {
      type: "list",
      content: [
        {
          id: "github",
          label: "Github",
          link: "https://github.com/emRhino/",
        },
        {
          id: "mail",
          label: "toRynkowski@gmail.com",
          link: "mailto:toRynkowski@gmail.com",
        },
        {
          id: "linkedin",
          label: "Linkedin",
          link: "https://pl.linkedin.com/in/marcin-rynkowski-1b359246/pl",
        },
      ],
    },
  ],
};
