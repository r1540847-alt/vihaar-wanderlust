import { Icon } from "@/components/ui/Icon";

interface FeaturedHeroProps {
  image: string;
  categories: string[];
  title: string;
  location: string;
  description: string;
  onExplore: () => void;
}

export const FeaturedHero = ({
  image,
  categories,
  title,
  location,
  description,
  onExplore,
}: FeaturedHeroProps) => {
  return (
    <section className="px-5 pt-4">
      <h2 className="text-lg font-bold mb-4">Featured of the Week</h2>
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[4/3] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Category badges */}
          <div className="flex gap-2 mb-3">
            {categories.map((category) => (
              <span
                key={category}
                className="text-[10px] bg-primary/90 px-3 py-1 rounded-full font-bold uppercase tracking-wide"
              >
                {category}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-extrabold leading-tight mb-2">
            {title}
          </h3>
          
          {/* Location */}
          <div className="flex items-center gap-1 text-muted-foreground mb-3">
            <Icon name="location_on" size="sm" />
            <span className="text-sm">{location}</span>
          </div>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          
          {/* Explore button */}
          <button
            onClick={onExplore}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm press transition-all hover:bg-primary/90"
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};
