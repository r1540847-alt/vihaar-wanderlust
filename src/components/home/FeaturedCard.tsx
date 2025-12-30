import { Icon } from "@/components/ui/Icon";
import { useState } from "react";

interface FeaturedCardProps {
  image: string;
  category: string;
  title: string;
  subtitle: string;
  onClick: () => void;
}

export const FeaturedCard = ({
  image,
  category,
  title,
  subtitle,
  onClick,
}: FeaturedCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      onClick={onClick}
      className="min-w-[260px] aspect-[4/5] rounded-3xl overflow-hidden relative press cursor-pointer group"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Like button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
        }}
        className="absolute top-4 right-4 w-9 h-9 glass rounded-full flex items-center justify-center press"
      >
        <Icon
          name="favorite"
          filled={liked}
          size="sm"
          className={liked ? "text-destructive" : "text-foreground"}
        />
      </button>

      <div className="absolute bottom-4 left-4 right-4">
        <span className="text-[11px] bg-primary px-3 py-1 rounded-full font-bold uppercase tracking-wide">
          {category}
        </span>
        <h3 className="mt-2 text-xl font-extrabold leading-tight line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-1 mt-1 text-muted-foreground">
          <Icon name="location_on" size="sm" />
          <span className="text-sm">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};
