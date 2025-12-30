import { Icon } from "@/components/ui/Icon";

interface SavedPageProps {
  onBack?: () => void;
  onItemClick: (id: string) => void;
}

export const SavedPage = ({ onItemClick }: SavedPageProps) => {
  const savedItems = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400",
      title: "Chitrakote Falls",
      location: "Bastar, Chhattisgarh",
      category: "Waterfall",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      title: "Valley of Flowers",
      location: "Uttarakhand",
      category: "Mountains",
    },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-nav px-5 py-4">
        <h1 className="text-xl font-extrabold text-center">Saved Places</h1>
      </header>

      <div className="px-5 pt-4">
        {savedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Icon name="favorite_border" size="xl" className="mb-4 opacity-50" />
            <p className="text-lg font-semibold">No saved places yet</p>
            <p className="text-sm mt-1">Start exploring and save your favorites!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {savedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className="glass rounded-2xl p-3 flex gap-4 items-center press cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <span className="text-[10px] text-primary font-semibold uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h4 className="font-bold mt-0.5">{item.title}</h4>
                  <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                    <Icon name="location_on" size="xs" />
                    <span className="text-xs">{item.location}</span>
                  </div>
                </div>
                <Icon name="chevron_right" className="text-muted-foreground" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
