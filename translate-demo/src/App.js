import React from 'react';
import TranslateProvider from './translate/TranslateProvider';
/**/
import generic from './dictionaries/*';
import ptBR from './dictionaries/pt-BR';
import enUS from './dictionaries/en-US';
import PanelHooks from './components/PanelHooks/PanelHooks';

const dictionary = {
  '*': generic,
  'pt-BR': ptBR,
  'en-US': enUS,
};

function App() {
  return (
      <TranslateProvider
        dictionary={dictionary}
        language="pt-BR"
        errorLanguage="pt-BR"
      >
          <div className="App">
              <PanelHooks></PanelHooks>
          </div>
      </TranslateProvider>
      );
}

export default App;
