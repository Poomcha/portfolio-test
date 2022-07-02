const about = {
  aboutMe: {
    fr: {
      title: (
        <h1 className="page__title text">
          Salut <span className="letter-shadow">!</span>{' '}
          <span className="about__drum">🥁</span>
        </h1>
      ),
      text: (
        <p className="text">
          Je suis Ben<span className="letter-shadow">,</span> frontend et
          backend développeur junior<span className="letter-shadow">.</span>
          <br />
          Actuellement sur Montpellier<span className="letter-shadow">
            ,
          </span>{' '}
          et à la recherche d'une première expérience dans le web
          <span className="letter-shadow">.</span>
          <br />
          Bienvenue sur mon portfolio <span className="letter-shadow">!</span>
        </p>
      ),
      subtitle: (
        <h2 className="text about__subtitle">
          Je travaille avec <span className="letter-shadow">:</span>
        </h2>
      ),
    },
    en: {
      title: (
        <h1 className="text">
          Hi <span className="letter-shadow">!</span>{' '}
          <span className="aboutDrum">🥁</span>
        </h1>
      ),
      text: (
        <p className="text">
          I'm Ben<span className="letter-shadow">,</span> frontend and backend
          junior developer<span className="letter-shadow">.</span>
          <br />
          Currently living in Montpellier
          <span className="letter-shadow">,</span> France
          <span className="letter-shadow">,</span> looking for my first
          experience in web development<span className="letter-shadow">.</span>
          <br />
          Welcome on my portfolio <span className="letter-shadow">!</span>
        </p>
      ),
      subtitle: (
        <h2 className="text about__subtitle">
          I work with<span className="letter-shadow">:</span>
        </h2>
      ),
    },
  },
  hardSkills: [
    'html',
    'css',
    'js',
    'sass',
    'vue',
    'react',
    'node',
    'mongodb',
    'mysql',
    'sequelize',
  ],
  externalLinks: {
    linkedIn: 'https://www.linkedin.com/in/benjamin-degen%C3%A8ve-93b991186/',
    gmail: 'ben.degeneve@gmail.com',
    github: 'https://github.com/Poomcha',
  },
  goToProjects: {
    fr: {
      button: 'voir mon travail',
    },
    en: {
      button: 'take a look at my work',
    },
  },
};

export default about;
