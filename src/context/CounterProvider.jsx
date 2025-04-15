import React, { useState } from 'react';
import CounterContext from './CounterContext';

const CounterProvider = ({ children }) => {
  const [lang,updateLang] = useState(
    () => {var langs;
      if (navigator.userLanguage)
          langs = navigator.userLanguage;
      else if (navigator.language)
          langs = navigator.language;
      else
          langs = "en";
  
      langs = langs.substr(0, 2);
  
      if (langs == 'ru')
      {
         return('ru');
      }
      else{return('en');}
      });
  return (
    <CounterContext.Provider value={{ lang,updateLang }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;