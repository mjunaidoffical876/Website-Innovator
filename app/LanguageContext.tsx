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
        const domain = window.location.hostname;

        // Helper to clear cookies aggressively
        const clearCookie = (name: string) => {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
        };

        if (lang === 'en') {
            clearCookie('googtrans');
        } else {
            const val = `/en/${lang}`;
            document.cookie = `googtrans=${val}; path=/;`;
            document.cookie = `googtrans=${val}; path=/; domain=${domain};`;
            document.cookie = `googtrans=${val}; path=/; domain=.${domain};`;
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
