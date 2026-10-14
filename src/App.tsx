import { Suspense, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/CardsSection/Cards';
import StackSidebar from './components/CardsSection/StackSidebar';
import type { Card } from './types/cardType';
import Footer from './components/Footer';

const fetchCards = async () => {
  const res = await fetch('/cards.json');
  const data = await res.json();
  return data;
};
const cardsPromise = fetchCards();

const App = () => {
  const [savedCards, setSavedCards] = useState<Card[]>([]);

  const handleAddCard = (card: Card) => {
    if (!savedCards.some((item) => item.id === card.id)) {
      setSavedCards((prev) => [...prev, card]);
      toast.success(`${card.name} added to stack!`);
    }
  };

  const handleRemoveCard = (id: string) => {
  const removedCard = savedCards.find((item) => item.id === id);

  setSavedCards((prev) => prev.filter((item) => item.id !== id));

  if (removedCard) {
    toast.info(`${removedCard.name} removed from stack!`);
  }
};
  const handleRemoveAll = () => {
    setSavedCards([]);
    toast.info("All technologies removed from stack");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <HeroSection />
      <main className="container mx-auto px-4 my-10">
        <div className="mb-8">
          <h1 className="font-inter text-4xl font-extrabold">
            Explore the <span className="bg-gradient-theme bg-clip-text text-transparent">Technologies</span>
          </h1>
          <p className="font-sans text-[16px] text-subheaading mt-2">Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Suspense fallback={<div className="col-span-3 text-center py-10">loading technologies...</div>}>
            <Cards 
              cardsPromise={cardsPromise} 
              saved={savedCards} 
              onSave={handleAddCard} 
            />
          </Suspense>

          <StackSidebar 
            saved={savedCards} 
            onRemove={handleRemoveCard} 
            onRemoveAll={handleRemoveAll} 
          />
        </div>
      </main>
      <ToastContainer position="top-right" autoClose={2000} />
      <Footer/>
    </div>
  );
};

export default App;