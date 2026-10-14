import type { Card } from "../../types/cardType";
import { FaStar } from "react-icons/fa";

type TechCardProps = {
  card: Card;
  saved: Card[];
  onSave: (card: Card) => void;
};

const TechCard = ({ card, saved, onSave }: TechCardProps) => {
  const isAdded = saved.some((item) => item.id === card.id);

  return (
    <article
      className={`relative bg-white rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md ${
        isAdded
          ? "border-magenta ring-1 ring-magenta"
          : "border-slate-200"
      }`}
    >
      <div>
       
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={card.icon} alt={card.name} className="max-w-full max-h-full object-contain" />
          </div>
          {card.badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
              {card.badge}
            </span>
          )}
        </div>

        
        <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">{card.name}</h3>
        <p className="font-sans text-xs text-slate-500 leading-relaxed mb-6 line-clamp-3">
          {card.description}
        </p>
      </div>

      <div>
        
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">{card.category}</span>
            <span className="font-sans">{card.difficulty}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <FaStar className="text-amber-400 text-xs" />
            <span>{card.rating}</span>
          </div>
        </div>

        <button
          onClick={() => onSave(card)}
          disabled={isAdded}
          className={`hover:-translate-y-1 w-full py-2.5 px-4 rounded-xl font-medium font-sans text-sm transition-all duration-200 ${
            isAdded
              ? "bg-slate-100 text-magenta cursor-not-allowed font-semibold border border-card-border/5"
              : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechCard;