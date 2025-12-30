import { Icon } from "@/components/ui/Icon";
import { useState } from "react";

interface ExploreCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  onNavigate: () => void;
}

export const ExploreCard = ({
  image,
  category,
  title,
  description,
  onNavigate,
}: ExploreCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="h-screen snap-start relative">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-heavy" />

      {/* Actions */}
      <div className="absolute right-5 bottom-36 flex flex-col gap-4">
        <button
          onClick={() => setLiked(!liked)}
          className="w-12 h-12 glass rounded-full flex items-center justify-center press"
        >
          <Icon
            name="favorite"
            filled={liked}
            className={liked ? "text-destructive" : "text-foreground"}
          />
        </button>
        <button className="w-12 h-12 glass rounded-full flex items-center justify-center press">
          <Icon name="share" />
        </button>
      </div>

      {/* Content */}
      <div className="absolute bottom-28 left-5 right-20">
        <span className="text-[11px] bg-primary px-3 py-1 rounded-full font-bold uppercase tracking-wide">
          {category}
        </span>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight">
          {title}
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          {description}
        </p>
      </div>

      {/* Navigate CTA */}
      <button
        onClick={onNavigate}
        className="absolute bottom-28 right-5 bg-primary w-14 h-14 rounded-full flex items-center justify-center press shadow-glow"
      >
        <Icon name="near_me" filled />
      </button>

      {/* Swipe hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground/50">
        <Icon name="expand_less" size="sm" />
        <span className="text-[10px]">Swipe up</span>
      </div>
    </div>
  );
};
