import { Icon } from "@/components/ui/Icon";

interface NearbyTourCardProps {
  image: string;
  title: string;
  description: string;
  onGoClick: () => void;
}

export const NearbyTourCard = ({
  image,
  title,
  description,
  onGoClick,
}: NearbyTourCardProps) => {
  return (
    <div className="glass rounded-2xl p-4 flex gap-4 items-center press cursor-pointer animate-fade-in">
      <img
        src={image}
        alt={title}
        className="w-20 h-24 rounded-xl object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-foreground truncate">{title}</h4>
        <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
          {description}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onGoClick();
          }}
          className="mt-2 text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
        >
          Go Visit
          <Icon name="near_me" size="sm" />
        </button>
      </div>
    </div>
  );
};
