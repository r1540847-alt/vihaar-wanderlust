import { Icon } from "@/components/ui/Icon";

interface NearbyItem {
  id: string;
  image: string;
  rating: number;
  category: string;
  title: string;
  location: string;
  distance: string;
  description: string;
}

const nearbyItems: NearbyItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1584559582128-b8be739912e4?w=800",
    rating: 4.8,
    category: "Temple",
    title: "Danteshwari Temple",
    location: "Dantewada, Chhattisgarh",
    distance: "2.5 km",
    description: "One of the 52 Shakti Peeths, dedicated to Goddess Danteshwari, the presiding deity of Bastar.",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    rating: 4.5,
    category: "Nature Park",
    title: "Kanger Valley National Park",
    location: "Jagdalpur, Chhattisgarh",
    distance: "12 km",
    description: "Biosphere reserve with limestone caves, waterfalls, and diverse flora fauna including hill mynas.",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    rating: 4.2,
    category: "Food Court",
    title: "Tribal Kitchen",
    location: "Jagdalpur Market, Chhattisgarh",
    distance: "0.8 km",
    description: "Authentic Bastar tribal cuisine featuring local delicacies like bamboo chicken and red ant chutney.",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800",
    rating: 4.6,
    category: "Museum",
    title: "Anthropological Museum",
    location: "Jagdalpur, Chhattisgarh",
    distance: "3.2 km",
    description: "Showcasing rich tribal heritage, artifacts, and cultural traditions of Bastar region.",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
    rating: 4.9,
    category: "Waterfall",
    title: "Tirathgarh Falls",
    location: "Jagdalpur, Chhattisgarh",
    distance: "8 km",
    description: "A 300ft cascading waterfall through lush green forests, perfect for nature photography.",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    rating: 4.4,
    category: "Cave",
    title: "Kutumsar Cave",
    location: "Kanger Valley, Chhattisgarh",
    distance: "15 km",
    description: "One of the longest natural caves in India with stunning stalactite and stalagmite formations.",
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    rating: 4.3,
    category: "Market",
    title: "Bastar Haat",
    location: "Jagdalpur, Chhattisgarh",
    distance: "1.5 km",
    description: "Weekly tribal market showcasing handmade crafts, Dhokra art, and traditional Bastar goods.",
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    rating: 4.7,
    category: "Palace",
    title: "Bastar Palace",
    location: "Jagdalpur, Chhattisgarh",
    distance: "2.8 km",
    description: "Historic royal palace of Bastar kings, now a heritage site with stunning architecture.",
  },
];

interface NearbyFeedProps {
  onItemClick: (id: string) => void;
  onViewAll: () => void;
}

export const NearbyFeed = ({ onItemClick, onViewAll }: NearbyFeedProps) => {
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

      <div className="flex flex-col gap-4">
        {nearbyItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className="glass rounded-3xl overflow-hidden press cursor-pointer group"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[15/16] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Top overlay with rating */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="glass px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Icon name="star" size="sm" className="text-yellow-400" filled />
                  <span className="text-sm font-bold">{item.rating}</span>
                </div>
                <div className="glass px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Icon name="near_me" size="sm" className="text-primary" />
                  <span className="text-sm font-medium">{item.distance}</span>
                </div>
              </div>

              {/* Bottom content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                {/* Category */}
                <span className="text-xs bg-primary/90 px-3 py-1 rounded-full font-bold uppercase tracking-wide text-primary-foreground inline-block mb-3">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-extrabold leading-tight mb-2 text-foreground">
                  {item.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <Icon name="location_on" size="sm" />
                  <span className="text-sm">{item.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>

                {/* Action button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onItemClick(item.id);
                  }}
                  className="mt-4 bg-primary text-primary-foreground px-5 py-2 rounded-full font-bold text-sm press transition-all hover:bg-primary/90 flex items-center gap-2"
                >
                  <Icon name="explore" size="sm" />
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
