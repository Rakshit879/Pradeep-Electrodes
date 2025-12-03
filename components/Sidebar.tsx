interface SidebarProps {
  categories: string[];
  onSelect: (cat: string) => void;
  selected: string;
}
 
export default function Sidebar({ categories, onSelect, selected }: SidebarProps) {
  return (
    <div className="w-full md:w-max bg-gray-200 rounded-3xl p-6 pl-4 h-max">
      <h2 className="font-bold mb-4">All Categories</h2>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`block w-full text-left p-2 my-1 rounded ${
            selected === cat ? "bg-yellow-400 text-white" : "hover:bg-yellow-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

