// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: {
          title: "About Me",
          description: "I am a web developer passionate about creating interactive and responsive websites."
        }
      }
    },
    fr: {
      translation: {
        about: {
          title: "À propos de moi",
          description: "Je suis un développeur web passionné par la création de sites web interactifs et réactifs."
        }
      }
    }
  },
  lng: 'fr',
  fallbackLng: 'fr',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
