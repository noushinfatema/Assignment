import type { Card } from "../../types/cardType";
import { FaTimes } from "react-icons/fa";

type StackSidebarProps = {
  saved: Card[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const StackSidebar = ({ saved, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <div className="bg-background rounded-2xl p-6 border border-slate-200 shadow-sm h-fit">
      <div className="mb-4">
        <h2 className="font-sans text-xl font-bold text-slate-900">Your Stack</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          {saved.length === 0 ? "No technologies selected yet." : `${saved.length} Technology Selected`}
        </p>
      </div>

      {saved.length === 0 ? (
        <div className="font-sans border-2 border-dashed border-slate-200 rounded-xl p-8 text-center text-xs text-slate-400 my-4">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3 my-4">
          {saved.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">{item.name}</h4>
                  <p className="text-[10px] text-slate-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-slate-400 hover:text-red-500 p-1 transition-colors hover:translate-1"
                aria-label={`Remove ${item.name}`}
              >
                <FaTimes className="text-xs" />
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="font-sans w-full mt-4 py-2 px-4 bg-slate-100 hover:bg-red-50 text-red-600 font-medium text-xs rounded-xl transition-colors border border-slate-200 hover:border-red-200"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;