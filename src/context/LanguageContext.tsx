import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Notre promesse : un accompagnement sur mesure qui fait la différence',
    'hero.subtitle': 'Des solutions simples et efficaces pour votre entreprise',

    // Services
    'services.title': 'Nos Services',
    'services.diagnostic': 'Diagnostic organisationnel',
    'services.coaching': 'Coaching en leadership',
    'services.timeManagement': 'Gestion du temps',
    'services.strategy': 'Stratégie d\'entreprise',

    // Contact
    'contact.title': 'Contactez-nous',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',

    // Footer
    'footer.copyright': 'Tous droits réservés'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Our promise: tailored support that makes a difference',
    'hero.subtitle': 'Simple and effective solutions for your business',

    // Services
    'services.title': 'Our Services',
    'services.diagnostic': 'Organizational Diagnostic',
    'services.coaching': 'Leadership Coaching',
    'services.timeManagement': 'Time Management',
    'services.strategy': 'Business Strategy',

    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',

    // Footer
    'footer.copyright': 'All rights reserved'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
