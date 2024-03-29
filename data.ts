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
    name: "Smykomat",
    labels: [
      {
        label: "JavaScript",
        id: "js",
      },
      {
        label: "HTML",
        id: "html",
      },
      {
        label: "CSS",
        id: "css",
      },
      {
        label: "Node.js",
        id: "Node",
      },
    ],
    description: [
      {
        type: "p",
        id: 1,
        content:
          "Celem tego narzędzia jest szybkie pozyskanie cen wybranych produktów z wytypowanych sklepów branżowych.",
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
          "Zautomatyzowanie ręcznego pozyskiwania cen ze sklepów konkurencyjnych",
          "Sklejenie danych w plik excel, który będzie umożliwiał dalszą obróbkę",
        ],
      },
      {
        type: "p",
        id: 4,
        content:
          "Największym wyzwaniem było ominiecie mechanizmów zabezpieczajacych przez scrapowaniem treści. W tym celu użyłem zewnętrznej usługi - ScrapingBee.",
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
          "Umieścić kod w chmurze",
          "Dodać interface użytkownika",
          "Dodać crona, który będzie cyklicznie uruchamiał kod.",
        ],
      },
      {
        type: "links",
        id: 9,
        content: [
          {
            label: "Github",
            source: "https://github.com/emRhino/smykomat",
          },
        ],
      },
    ],
    short_description:
      "Skrypt, którego zadaniem jest scrapowanie danych (cen) z innych sklepów internetowych.",
    slug: "projekt-0",
    image: {
      source: "projekt-0.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 2,
    name: "Przeglądarka produktów na smyk.com",
    labels: [
      {
        label: "JavaScript",
        id: "js",
      },
      {
        label: "REST API",
        id: "restapi",
      },
      {
        label: "HTML",
        id: "html",
      },
      {
        label: "CSS",
        id: "css",
      },
    ],
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
          "Możliwość sprawdzenia dostepności dla wielu produktów.",
          "Możliwośc sprawdzania dostępności poprzez wgrwywanie plików CSV.",
          "Możliwość zbudowania zapytania, które zwróci określone produkty.",
          "Możliwość skopiowania wszystkich indeksów rozdzielonych przecinkiem.",
        ],
      },
      {
        type: "p",
        content:
          "Projekt zrealizowałem poprzez stworzenie prostego lokalnego pliku HTML, który każdy zainteresowany może uruchomić w swojej przeglądarce. Do poprawnego działania niezbędne są modyfikacje w przeglądarce rozwiązujące problem z CORS Policy.",
      },
      {
        type: "p",
        content:
          "Wyzwaniem przed którym stałem to m.in. odpytywania serwera w takim sposób by nie wpływać na wydajność serwera. Wszystkie zapytania są kolejkowane i uruchamiane paczkami w określonych interwałach.",
      },
      {
        type: "links",
        content: [
          {
            label: "Github",
            source: "https://github.com/emRhino/Product-availability-tool-np",
          },
        ],
      },
    ],
    short_description: "Przeglądarka produktów na smyk.com",
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
    labels: [
      {
        label: "Wordpress",
        id: "wordpress",
      },
      {
        label: "REST API",
        id: "restapi",
      },
      {
        label: "PHP",
        id: "php",
      },
      {
        label: "JavaScript",
        id: "js",
      },
      {
        label: "HTML",
        id: "html",
      },
      {
        label: "SASS",
        id: "sass",
      },
    ],
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
          "Serwis eRecruiter informacje o dostępnych ofertach pracy zwraca przez API w formacie JSON. Strona korporacyjna smykgroup.com działa obecnie na silniku WordPress.",
      },
      {
        type: "p",
        content:
          "Integrację wykonałem poprzez przygotowanie bardzo prostej wtyczki, która pobiera całego JSONa, wyciąga z niego jedynie te infromacje, które są niezbędne, a następnie zwraca je na front strony.",
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
      "Projekt polegał na zintegrowaniu obecnej podstrony kariery smykgroup.com z zewnętrznym serwisem eRecruiter.",
    slug: "projekt-3",
    image: {
      source: "projekt-3.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 4,
    name: "Strona portfolio emrhino.pl",
    labels: [
      {
        label: "Next.js",
        id: "nextjs",
      },
      {
        label: "React",
        id: "react",
      },
      {
        label: "TypeScript",
        id: "typescript",
      },
      {
        label: "CSS Modules",
        id: "cssmodule",
      },
    ],
    description: [
      {
        type: "p",
        content:
          "Jak widzisz, jest to bardzo prosta strona. Mimo to w trakcie jej budowy miałem dużo radości. Bardzo podoba mi się budowanie stron z ten sposób.",
      },
    ],
    short_description:
      "Projekt edukacyjny, którego celem było zbudowanie mojego portfolio w technologii, której nie znałem - Next.js",
    slug: "projekt-8",
    image: {
      source: "projekt-8.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 5,
    name: "Narzędzie filtrujące/sortujące komentarze na Instagramie",
    labels: [
      {
        label: "JavaScript",
        id: "js",
      },
      {
        label: "HTML",
        id: "html",
      },
      {
        label: "CSS",
        id: "css",
      },
    ],
    description: [
      {
        type: "p",
        id: 1,
        content:
          "Prowadzę konto repostujące w branży Handmade na Instagramie, w ramach którego przeprowadzam cykliczne akcje promowania twórców. Każdy rękodzielnik może zostawić komentarz pod wskazanym postem. Następnie ja wybieram 5 komentarzy, który następnie udostępniam w relacji. Każdy twórca rękodzieła może być udostepniony tylko jeden raz.",
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
          "Projekt zrealizowałem poprzez stworzenie prostego skryptu, który wklejam w konsoli na odpowiedniej stronie Instagrama. Informacja o rękodzielnikach, którzy byli już udostepnieni znajduje się w obiekcie JSON. Na dzień dzisiejszy jest on aktualizowany ręcznie.",
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
      "SKrypt ma za zadanie wspomóc mnie w zarządzaniu kontem na Instagramie.",
    slug: "projekt-1",
    image: {
      source: "projekt-1.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 6,
    name: "Serwis internetowy Galerii Rękodzieła",
    labels: [
      {
        label: "Wordpress",
        id: "wordpress",
      },
      {
        label: "PHP",
        id: "php",
      },
      {
        label: "JavaScript",
        id: "js",
      },
      {
        label: "HTML",
        id: "html",
      },
      {
        label: "SASS",
        id: "sass",
      },
    ],
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
          "Galeria Rękodzieła jest moim osobistym projektem. Pod tą marką prowadzę na Instagramie konto repostujące, którego głownym celem jest promocja polskich rękodzielników oraz pozyskiwanie klientów, którym tworzę sklepy internetowe.",
      },
      {
        type: "p",
        content:
          "Strona powstała z wykorzystaniem WordPressa. Dowolny rękodzielnik może się zarejestrować, a następnie założyć własną wizytówkę.",
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
      "Zaprojektowanie i wdrożenie serwisu, w którym rękodzielnicy mogą zakładać konta i wystawiać wizytówki swoich marek.",
    slug: "projekt-4",
    image: {
      source: "projekt-4.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 7,
    name: "Sklep internetowy Mukka Senso",
    labels: [
      {
        label: "Wordpress",
        id: "wordpress",
      },
      {
        label: "PHP",
        id: "php",
      },
      {
        label: "JavaScript",
        id: "js",
      },
      {
        label: "HTML",
        id: "html",
      },
      {
        label: "SASS",
        id: "sass",
      },
    ],
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
    short_description: "Zaprojektowanie i wdrożenie sklepu internetowego.",
    slug: "projekt-5",
    image: {
      source: "projekt-5.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 8,
    name: "Sklep internetowy Między Drzewami",
    labels: [
      {
        label: "Wordpress",
        id: "wordpress",
      },
      {
        label: "PHP",
        id: "php",
      },
      {
        label: "JavaScript",
        id: "js",
      },
      {
        label: "HTML",
        id: "html",
      },
      {
        label: "SASS",
        id: "sass",
      },
    ],
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
    short_description: "Zaprojektowanie i wdrożenie sklepu internetowego.",
    slug: "projekt-6",
    image: {
      source: "projekt-6.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 9,
    name: "Sklep internetowy Jaklis",
    labels: [
      {
        label: "Wordpress",
        id: "wordpress",
      },
      {
        label: "PHP",
        id: "php",
      },
      {
        label: "JavaScript",
        id: "js",
      },
      {
        label: "HTML",
        id: "html",
      },
      {
        label: "SASS",
        id: "sass",
      },
    ],
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
    short_description: "Zaprojektowanie i wdrożenie sklepu internetowego.",
    slug: "projekt-7",
    image: {
      source: "projekt-7.png",
      width: 800,
      height: 400,
    },
  },
  {
    id: 10,
    name: "Gra kółko i krzyżyk",
    labels: [
      {
        label: "React",
        id: "react",
      },
      {
        label: "TypeScript",
        id: "typescript",
      },
      {
        label: "CSS Modules",
        id: "cssmodule",
      },
    ],
    description: [
      {
        type: "p",
        content:
          "To moja pierwsza gra w JS, która powstała z wykorzystaniem Reacta.",
      },
      {
        type: "links",
        content: [
          {
            label: "Live",
            source: "https://tic-tac-toe-eta-red.vercel.app/",
          },
        ],
      },
    ],
    short_description: "Prosta gra stworzona w react.",
    slug: "projekt-9",
    image: {
      source: "projekt-9.png",
      width: 800,
      height: 400,
    },
  },
];

export const home_page = {
  page_title: "Strona główna",
  page_meta_title: "Portfolio projektowe - Marcin Rynkowski - emRhino.pl",
  page_meta_description: "Portfolio projektowe - Marcin Rynkowski - emRhino.pl",
  content: [
    {
      type: "group",
      content: [
        {
          column: "left",
          content: [
            {
              type: "h1",
              content: "Cześć,<br>tutaj Marcin Rynkowski",
            },
            {
              type: "p",
              content:
                "Dobrze Cię tu widzieć! Jeżeli potrzebujesz, poniżej możesz pobrać moje aktualnie CV lub w skrócie dowiedzieć się więcej o mnie.",
            },
            {
              type: "links",
              content: [],
            },
          ],
        },
        {
          column: "right",
          content: [
            {
              type: "image",
              content: {
                source: "",
                width: 100,
                height: 100,
                alt: "",
              },
            },
          ],
        },
      ],
    },
    {
      type: "group",
      content: [
        {
          column: "left",
          content: [
            {
              type: "image",
              content: {
                source: "",
                width: 100,
                height: 100,
                alt: "",
              },
            },
          ],
        },
        {
          column: "right",
          content: [
            {
              type: "h2",
              content: "Portfolio",
            },
            {
              type: "p",
              content:
                "W tym miejscu znajdziesz kilka moich projektów. Tam gdzie to było możlwe umieściłem linki do Githuba lub wersji live projektu.",
            },
            {
              type: "links",
              content: [],
            },
          ],
        },
      ],
    },
    {
      type: "h2",
      content: "Technologie",
    },
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
    {
      type: "links",
      content: [],
    },
  ],
};

export const about_page = {
  page_title: "Cześć, nazywam się Marcin Rynkowski.",
  page_meta_title: "O mnie - Marcin Rynkowski - emRhino.pl",
  page_meta_description: "O mnie - Marcin Rynkowski - emRhino.pl",
  content: [
    // {
    //   type: "image",
    //   content: {
    //     source: "me.jpg",
    //     width: 300,
    //     height: 300,
    //     alt: "",
    //   },
    // },
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
        "Do tej pory łączyłem jedno i drugie. Nie chcę rezygnować z dorywczego tworzenia małych e-sklepów, ale także nie planuję by freelance był moim jedynym źródłem dochodu. Lubię projekty po godzinach bo to daje mi przestrzeń do eskperymentowania i nauki nowych rzeczy. Lubie także kontakt z ludźmi i zarządzanie projektami.",
    },
    {
      type: "h2",
      content: "Co do tej pory robiłem?",
    },
    {
      type: "p",
      content:
        "Moim podstawowym zajęciem jest praca na etacie w biurze smyka. Jestem zatrudniony jako Digital VM (specjalista od zarządzania frontem sklepu). Współpracuje ściśle z działem IT planując, rozpisująć i testując poszczeólne funkcjonalności sklepu i aplikacji mobilnej. Na początku mojej pracy miałem też swój duży wkład w proces developmentu ówczesnej wersji smyk.com - wraz z zewnętrznym zespołem programistów kodowałem front i byłem odpowiedzialny za wersję mobilną sklepu.",
    },
    {
      type: "p",
      content:
        "Dziś jestem Product Ownerem aplikacji mobilnej smyk.com. Jestem odpowiedzialny za cały proces tworzenia aplikacji od analizy biznesowej, przez projektowanie, aż po wdrożenia. Współpracuję z project managerami, grafikami, testerami i innymi zespołami biznesowymi. Jestem również bezpośrednio zaangażowany w zarzadzanie kontentem aplikacji, pozyskiwanie klientów oraz osiąganie zakładanych celów sprzedażowych. W smyku zawiaduję również (rozwijam technicznie oraz zarządzam treścią) wszytskimi stronami korporacyjnymi.",
    },
    {
      type: "h2",
      content: "Dlaczego chcę zmienić dział handlowy na IT?",
    },
    {
      type: "p",
      content:
        "Do biznesu trafiłem trochę przez przypadek, siłą inercji projektu sklepu smyk.com przeszedłem od kodowania w stronę zarządzania treści, testowania a później pracy nad backlogiem. Mimo, że wciąż lubie to robić to czuję, że w obecnym miejscu wiekszość moich doświadczeń wciąż się powtarza, nie wiele uczę się nowych rzeczy. Nie widzę siębie na podobnym stanowisku w innej firmie. Ponadto nieopisaną frajdę wciąż sprawiają mi zadania bardzo techniczne, wymagający pracy koncepcyjnej czy kodowania. Chcę do tego wrócić i tylko tym się zająć.",
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
