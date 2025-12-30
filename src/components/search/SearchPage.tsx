import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  image: string;
  category: string;
  title: string;
  location: string;
}

const filters = ["All", "Trending", "Near You", "Top Rated", "Events"];

const searchResults: SearchResult[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400",
    category: "Nature",
    title: "Chitrakote Falls",
    location: "Bastar, CG",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    category: "Mountains",
    title: "Valley of Flowers",
    location: "Uttarakhand",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1584559582128-b8be739912e4?w=400",
    category: "Heritage",
    title: "Bhoramdeo Temple",
    location: "Kawardha, CG",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
    category: "Wildlife",
    title: "Kanger Valley",
    location: "Jagdalpur, CG",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400",
    category: "Nature",
    title: "Tirathgarh Falls",
    location: "Bastar, CG",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
    category: "Adventure",
    title: "Coorg Trails",
    location: "Karnataka",
  },
];

interface SearchPageProps {
  onBack: () => void;
  onResultClick: (id: string) => void;
}

export const SearchPage = ({ onBack, onResultClick }: SearchPageProps) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl px-5 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center press"
          >
            <Icon name="arrow_back" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search destinations, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full h-12 bg-card rounded-xl px-4 pr-10 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <Icon
              name="search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size="md"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mt-4 -mx-5 px-5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all press",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="px-5 pt-4">
        <div className="grid grid-cols-2 gap-4">
          {searchResults.map((result, index) => (
            <div
              key={result.id}
              onClick={() => onResultClick(result.id)}
              className="aspect-[3/4] rounded-2xl overflow-hidden relative press cursor-pointer animate-fade-in group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={result.image}
                alt={result.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 gradient-overlay" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[9px] bg-primary/80 px-2 py-0.5 rounded-full font-bold uppercase">
                  {result.category}
                </span>
                <h4 className="mt-1 font-bold text-sm leading-tight line-clamp-2">
                  {result.title}
                </h4>
                <div className="flex items-center gap-1 mt-0.5 text-muted-foreground">
                  <Icon name="location_on" size="sm" className="text-[12px]" />
                  <span className="text-[11px]">{result.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
