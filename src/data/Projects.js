const projects = [
  // Groupomania
  {
    name: {
      fr: { text: 'Groupomania' },
      en: { text: 'Groupomania' },
    },
    shortName: 'groupomania',
    ghPagesUrl: 'https://poomcha.github.io/groupomania-front/#/home',
    repoUrl: 'https://github.com/Poomcha/groupomania',
    imgMinSrc: '/images/projects_logo/groupomania_min.png',
    imgMinAlt: 'Groupomania Logo',
    imgSrc: '/images/projects/groupomania.webp',
    imgAlt: {
      fr: {
        text: "Capture d'écran de l'app Groupomania.",
      },
      en: {
        text: 'Groupomania App website screenshot.',
      },
    },
    description: {
      fr: {
        text: (
          <>
            Dernier projet du parcours Developpeur Web d'Openclassrooms
            <span className="letter-shadow">.</span> Groupomania est un réseau
            social d'entreprise<span className="letter-shadow">,</span>{' '}
            développé avec Vue<span className="letter-shadow">.</span>js et SCSS
            pour la partie front<span className="letter-shadow">,</span> la
            partie back utilise node<span className="letter-shadow">.</span>js
            <span className="letter-shadow">,</span> avec express
            <span className="letter-shadow">.</span>js en framework
            <span className="letter-shadow">,</span> la base de donnée est MySql
            et est utilisée avec l'ORM Sequelize
            <span className="letter-shadow">.</span>
          </>
        ),
      },
      en: {
        text: (
          <>
            Last Openclassrooms Web Developer's path project
            <span className="letter-shadow">.</span> Groupomania is a company
            social network<span className="letter-shadow">,</span> developped
            with Vue<span className="letter-shadow">.</span>Js and SCSS for
            frontend<span className="letter-shadow">,</span> backend uses node
            <span className="letter-shadow">.</span>js
            <span className="letter-shadow">,</span> with express
            <span className="letter-shadow">.</span>js framework
            <span className="letter-shadow">,</span> working with MySql database
            and Sequelize ORM<span className="letter-shadow">.</span>
          </>
        ),
      },
    },
    liveVersion: true,
    tech: ['html', 'css', 'vue', 'sass', 'js', 'mysql', 'sequelize', 'node'],
  },
  // Calculator App
  {
    name: {
      fr: { text: 'Calculette' },
      en: { text: 'Calculator App' },
    },
    shortName: 'frontendmentor-calculatorapp',
    ghPagesUrl: 'https://poomcha.github.io/frontendmentor-calculatorapp/',
    repoUrl: 'https://github.com/Poomcha/frontendmentor-calculatorapp',
    imgMinSrc: '/images/projects_logo/calculator_app_min.png',
    imgMinAlt: 'Calculator App Logo',
    imgSrc: '/images/projects/calculatorapp.webp',
    imgAlt: {
      fr: {
        text: "Capture d'écran de l'app Calculette.",
      },
      en: {
        text: 'Calculator App website screenshot.',
      },
    },
    description: {
      fr: {
        text: (
          <>
            Un projet de frontendmentor<span className="letter-shadow">.</span>
            io<span className="letter-shadow">.</span> Une application de
            calculette développée avec Vue
            <span className="letter-shadow">.</span>js
            <span className="letter-shadow">.</span>
          </>
        ),
      },
      en: {
        text: (
          <>
            frontendmentor<span className="letter-shadow">.</span>io project
            <span className="letter-shadow">.</span> A calculator app developed
            with Vue<span className="letter-shadow">.</span>js
            <span className="letter-shadow">.</span>
          </>
        ),
      },
    },
    liveVersion: true,
    tech: ['html', 'css', 'sass', 'vue', 'js'],
  },
  // Piiquante
  {
    name: {
      fr: { text: 'Piiquante' },
      en: { text: 'Piiquante' },
    },
    shortName: 'piiquante',
    ghPagesUrl: '',
    repoUrl: 'https://github.com/Poomcha/piiquante',
    imgMinSrc: '/images/projects_logo/piiquante_min.png',
    imgMinAlt: 'Piiquante Logo',
    imgSrc: '/images/projects/piiquante.webp',
    imgAlt: {
      fr: {
        text: "Capture d'écran site Piiquante.",
      },
      en: {
        text: 'Piiquante website screenshot.',
      },
    },
    description: {
      fr: {
        text: (
          <>
            Cinquième projet du parcours Développeur Web d'Openclassrooms
            <span className="letter-shadow">.</span> Création du back-end d'un
            site web d'ajout et de notation de sauces piquantes avec node
            <span className="letter-shadow">.</span>js
            <span className="letter-shadow">,</span> express et mongoDB
            <span className="letter-shadow">,</span> sécurisation de
            l'application selon les directives de l'OWASP
            <span className="letter-shadow">.</span>
          </>
        ),
      },
      en: {
        text: (
          <>
            Openclassrooms fifth Web Developer path project
            <span className="letter-shadow">.</span> Back-end of a spicy sauce
            notation website with node<span className="letter-shadow">.</span>js
            <span className="letter-shadow">,</span> express
            <span className="letter-shadow">,</span> mongoDB
            <span className="letter-shadow">,</span> and OWASP guidelines
            <span className="letter-shadow">.</span>
          </>
        ),
      },
    },
    liveVersion: false,
    tech: ['node', 'js', 'mongodb'],
  },
  // Kanap
  {
    name: {
      fr: { text: 'Kanap' },
      en: { text: 'Kanap' },
    },
    shortName: 'kanap',
    ghPagesUrl: 'https://poomcha.github.io/kanap/index.html',
    repoUrl: 'https://github.com/Poomcha/kanap',
    imgMinSrc: '/images/projects_logo/kanap_min.png',
    imgMinAlt: 'Kanap Logo',
    imgSrc: '/images/projects/kanap.webp',
    imgAlt: {
      fr: {
        text: "Capture d'écran site Kanap.",
      },
      en: {
        text: 'Kanap website screenshot.',
      },
    },
    description: {
      fr: {
        text: (
          <>
            Quatrième projet du parcours Développeur Web d'Openclassrooms
            <span className="letter-shadow">.</span> Création d'un site
            e-commerce avec appels API<span className="letter-shadow">,</span>{' '}
            modification du DOM avec javascript et utilisation du local storage
            <span className="letter-shadow">.</span>
          </>
        ),
      },
      en: {
        text: (
          <>
            Openclassrooms fourth Web Developer path project
            <span className="letter-shadow">.</span> Creation of an e-commerce
            website with API calls<span className="letter-shadow">,</span> DOM
            modification with javascript and data persistence with local storage
            <span className="letter-shadow">.</span>
          </>
        ),
      },
    },
    liveVersion: true,
    tech: ['html', 'css', 'js'],
  },
  // La chouette agence
  {
    name: {
      fr: { text: 'La Chouette Agence' },
      en: { text: 'La Chouette Agence' },
    },
    shortName: 'la-chouette-agence',
    ghPagesUrl: 'https://poomcha.github.io/la-chouette-agence/',
    repoUrl: 'https://github.com/Poomcha/la-chouette-agence',
    imgMinSrc: '/images/projects_logo/la_chouette_agence_min.png',
    imgMinAlt: 'La Chouette Agence Logo',
    imgSrc: '/images/projects/la-chouette-agence.webp',
    imgAlt: {
      fr: {
        text: "Capture d'écran site La Chouette Agence.",
      },
      en: {
        text: 'La Chouette Agence website screenshot.',
      },
    },
    description: {
      fr: {
        text: (
          <>
            Troisième projet du parcours Développeur Web d'Openclassrooms
            <span className="letter-shadow">.</span> Amélioration de
            l'accessibilité et du SEO d'un site web existant
            <span className="letter-shadow">.</span>
          </>
        ),
      },
      en: {
        text: (
          <>
            Openclassrooms third Web Developer path project
            <span className="letter-shadow">.</span> Improvment of accessibility
            and SEO of an already existant website
            <span className="letter-shadow">.</span>
          </>
        ),
      },
    },
    liveVersion: true,
    tech: ['html', 'css'],
  },
  // Ohmyfood
  {
    name: {
      fr: { text: 'Ohmyfood' },
      en: { text: 'Ohmyfood' },
    },
    shortName: 'ohmyfood',
    ghPagesUrl: 'https://poomcha.github.io/ohmyfood/',
    repoUrl: 'https://github.com/Poomcha/ohmyfood',
    imgMinSrc: '/images/projects_logo/ohmyfood_min.png',
    imgMinAlt: 'Ohmyfood Logo',
    imgSrc: '/images/projects/ohmyfood.webp',
    imgAlt: {
      fr: {
        text: "Capture d'écran site Ohmyfood.",
      },
      en: {
        text: 'Ohmyfood website screenshot.',
      },
    },
    description: {
      fr: {
        text: (
          <>
            Deuxième projet du parcours Développeur Web d'Openclassrooms
            <span className="letter-shadow">.</span> Intégration d'un site web
            statique multi-pages en HTML/SCSS
            <span className="letter-shadow">,</span> responsive et animé
            <span className="letter-shadow">.</span>
          </>
        ),
      },
      en: {
        text: (
          <>
            Openclassrooms second Web Developer path project
            <span className="letter-shadow">.</span> Implement a responsive
            foodtech website with CSS animations
            <span className="letter-shadow">.</span> Using HTML/SCSS
            <span className="letter-shadow">.</span>
          </>
        ),
      },
    },
    liveVersion: true,
    tech: ['html', 'css', 'sass'],
  },
  // Interactive Rating Component
  {
    name: {
      fr: { text: 'Composant de notation' },
      en: { text: 'Rating component' },
    },
    shortName: 'interactive-rating-component',
    ghPagesUrl:
      'https://poomcha.github.io/frontendmentor-interactiveratingcomponent/',
    repoUrl:
      'https://github.com/Poomcha/frontendmentor-interactiveratingcomponent',
    imgMinSrc: '/images/projects_logo/interactive_rating_component_min.png',
    imgMinAlt: 'Interactive Rating Component Logo',
    imgSrc: '/images/projects/interactive_rating_component.webp',
    imgAlt: {
      fr: {
        text: "Capture d'écran du composant intéractif de notation.",
      },
      en: {
        text: 'Interactive rating component screenshot.',
      },
    },
    description: {
      fr: {
        text: (
          <>
            Mon premier challenge sur frontendmentor
            <span className="letter-shadow">.</span>io
            <span className="letter-shadow">.</span> Intégration d'un composant
            intéractif simple de notation
            <span className="letter-shadow">,</span> réalisé en HTML/CSS
            <span className="letter-shadow">,</span> Flexbox
            <span className="letter-shadow">,</span> et Vue3
            <span className="letter-shadow">.</span>js
            <span className="letter-shadow">.</span>
          </>
        ),
      },
      en: {
        text: (
          <>
            My first frontendmentor<span className="letter-shadow">.</span>io
            practice challenge<span className="letter-shadow">.</span>{' '}
            Implementation of an interactive rating component built with
            HTML/CSS<span className="letter-shadow">,</span> Flexbox
            <span className="letter-shadow">,</span> and Vue3
            <span className="letter-shadow">.</span>js
            <span className="letter-shadow">.</span>
          </>
        ),
      },
    },
    liveVersion: true,
    tech: ['html', 'css', 'sass', 'vue', 'js'],
  },
  // Reservia
  {
    name: {
      fr: { text: 'Reservia' },
      en: { text: 'Reservia' },
    },
    shortName: 'reservia',
    ghPagesUrl: 'https://poomcha.github.io/reservia/',
    repoUrl: 'https://github.com/Poomcha/reservia',
    imgMinSrc: '/images/projects_logo/reservia_min.png',
    imgMinAlt: 'Reservia Logo',
    imgSrc: '/images/projects/reservia.webp',
    imgAlt: {
      fr: {
        text: "Capture d'écran site Reservia.",
      },
      en: {
        text: 'Reservia website screenshot.',
      },
    },
    description: {
      fr: {
        text: (
          <>
            Premier projet du parcours Développeur Web d'Openclassrooms
            <span className="letter-shadow">.</span> Intégration de maquettes en
            HTML/CSS d'un site web statique responsive avec une approche
            mobile-first<span className="letter-shadow">,</span> et dans le
            respect des normes de la W3C<span className="letter-shadow">.</span>
          </>
        ),
      },
      en: {
        text: (
          <>
            Openclassrooms first Web Developer path project
            <span className="letter-shadow">.</span> Getting started with HTML &
            CSS by implementing a travel booking platform's website from scratch
            <span className="letter-shadow">.</span> Using mobile-first approach
            and W3C guidelines<span className="letter-shadow">.</span>
          </>
        ),
      },
    },
    liveVersion: true,
    tech: ['html', 'css'],
  },
];

export default projects;
