"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es' | 'de' | 'ar' | 'fr';

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
    language: 'en',
    setLanguage: () => { }
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
        if (match && match[1]) {
            setLanguage(match[1] as Language);
        } else {
            const stored = localStorage.getItem('language') as Language | null;
            if (stored && stored !== 'en') {
                setGoogleTranslateCookie(stored);
                setLanguage(stored);
                window.location.reload();
            }
        }
    }, []);

    const setGoogleTranslateCookie = (lang: Language) => {
        if (lang === 'en') {
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
            document.cookie = `googtrans=/en/en; path=/;`;
            document.cookie = `googtrans=/en/en; path=/; domain=${window.location.hostname};`;
            document.cookie = `googtrans=/en/en; path=/; domain=.${window.location.hostname};`;
        } else {
            const val = `/en/${lang}`;
            document.cookie = `googtrans=${val}; path=/;`;
            document.cookie = `googtrans=${val}; path=/; domain=${window.location.hostname};`;
            document.cookie = `googtrans=${val}; path=/; domain=.${window.location.hostname};`;
        }
    }

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
        setGoogleTranslateCookie(lang);
        window.location.reload();
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
