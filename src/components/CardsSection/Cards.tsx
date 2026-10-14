import { use } from "react";
import type { Card } from "../../types/cardType";
import TechCard from './Card';

type CardsProps = {
  cardsPromise: Promise<Card[]>;
  saved: Card[];
  onSave: (card: Card) => void;
};

const Cards = ({ cardsPromise, saved, onSave }: CardsProps) => {
  const allCards = use(cardsPromise);

  return (
    <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {allCards.length === 0 && <p className="col-span-full text-center py-10">No technologies found</p>}
      {allCards.map((singleCard) => (
        <TechCard 
          key={singleCard.id} 
          card={singleCard} 
          saved={saved} 
          onSave={onSave} 
        />
      ))}
    </div>
  );
};

export default Cards;