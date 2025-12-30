import { Icon } from "@/components/ui/Icon";

interface NearbyItem {
  id: string;
  image: string;
  rating: number;
  category: string;
  title: string;
  distance: string;
}

const nearbyItems: NearbyItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1584559582128-b8be739912e4?w=400",
    rating: 4.8,
    category: "Temple",
    title: "Danteshwari Temple",
    distance: "2.5 km",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
    rating: 4.5,
    category: "Nature Park",
    title: "Kanger Valley",
    distance: "12 km",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
    rating: 4.2,
    category: "Food Court",
    title: "Tribal Kitchen",
    distance: "0.8 km",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400",
    rating: 4.6,
    category: "Museum",
    title: "Anthropology",
    distance: "3.2 km",
  },
];

interface NearbyGridProps {
  onItemClick: (id: string) => void;
  onViewAll: () => void;
}

export const NearbyGrid = ({ onItemClick, onViewAll }: NearbyGridProps) => {
  return (
    <section className="px-5 pt-6 pb-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Nearby Tours</h2>
        <button
          onClick={onViewAll}
          className="text-primary text-sm font-semibold"
        >
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {nearbyItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className="glass rounded-2xl overflow-hidden press cursor-pointer group"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Rating badge */}
              <div className="absolute top-2 left-2 glass px-2 py-1 rounded-full flex items-center gap-1">
                <Icon name="star" size="xs" className="text-yellow-400" filled />
                <span className="text-xs font-bold">{item.rating}</span>
              </div>
            </div>
            
            <div className="p-3">
              {/* Category */}
              <span className="text-[10px] text-primary font-semibold uppercase tracking-wide">
                {item.category}
              </span>
              
              {/* Title */}
              <h4 className="font-bold text-sm mt-1 line-clamp-1">
                {item.title}
              </h4>
              
              {/* Distance */}
              <div className="flex items-center gap-1 mt-1.5 text-muted-foreground">
                <Icon name="near_me" size="xs" />
                <span className="text-xs">{item.distance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
