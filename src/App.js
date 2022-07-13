import Header from "./components/Header";
import Main from "./components/Main";

import { useState } from "react";

function App() {

  const [lang, setLang] = useState('fr');

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'fr' ? 'en' : 'fr'));
  };

  const displayText = (lang, data, text) => (
    data[lang][text]
  )

  return (
    <div className="App">
      <Header
        lang={lang}
        toggleLang={toggleLang}
        displayText={displayText} 
      />
      <Main
        lang={lang}
        toggleLang={toggleLang}
        displayText={displayText} 
      />
    </div>
  );
}

export default App;
