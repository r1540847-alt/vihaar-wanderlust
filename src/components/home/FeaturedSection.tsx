import { FeaturedCard } from "./FeaturedCard";
import { useRef, useEffect } from "react";

interface FeaturedItem {
  id: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    category: "Nature",
    title: "Chitrakote Falls",
    subtitle: "Niagara of India",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: "Mountains",
    title: "Valley of Flowers",
    subtitle: "Uttarakhand",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    category: "Adventure",
    title: "Coorg Trails",
    subtitle: "Karnataka",
  },
];

interface FeaturedSectionProps {
  onCardClick: (id: string) => void;
}

export const FeaturedSection = ({ onCardClick }: FeaturedSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          if (container.scrollLeft >= maxScroll - 10) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: 280, behavior: "smooth" });
          }
        }
      }, 4000);
    };

    const handleTouchStart = () => {
      isPaused = true;
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        isPaused = false;
      }, 3000);
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="pt-6">
      <h2 className="text-lg font-bold mb-4 px-5">Featured of the Week</h2>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar px-5 snap-x-mandatory"
      >
        {featuredItems.map((item) => (
          <div key={item.id} className="snap-start">
            <FeaturedCard
              image={item.image}
              category={item.category}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() => onCardClick(item.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
