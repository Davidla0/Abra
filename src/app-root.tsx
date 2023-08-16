import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './cmps/header';
import { NavigationBar } from './cmps/navigation-bar';
import { Generator } from './pages/generator';
import { Favorites } from './pages/favorites';
import { Quote } from './types';

type QuoteContextType = {
    likeQuote: Quote[] | null;
    updateQuote: (newQuote: Quote) => void;
};

export const QuoteContext = createContext<QuoteContextType>({
    likeQuote: [],
    updateQuote: () => {}
});

export const RootCmp = () => {
    const [likeQuote, setLikeQuote] = useState<Quote[]>([])

    const updateQuote = (newQuote: Quote) => {
        setLikeQuote(pre => [...pre, newQuote]);
    }

    return (
        <div className='quotes-app'>
            <Router>
                <QuoteContext.Provider value={{ likeQuote, updateQuote }}>
                    <NavigationBar />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Generator />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Routes>
                </QuoteContext.Provider>
            </Router>
        </div>
    );
}

