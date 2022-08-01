import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
