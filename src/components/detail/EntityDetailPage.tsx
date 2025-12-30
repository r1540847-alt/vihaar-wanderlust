import { Icon } from "@/components/ui/Icon";
import { useState } from "react";

interface EntityDetailPageProps {
  onBack: () => void;
  onNavigate: () => void;
}

export const EntityDetailPage = ({ onBack, onNavigate }: EntityDetailPageProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen pb-24">
      {/* Hero */}
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1200"
          alt="Chitrakote Falls"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />

        {/* Top actions */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-5 pt-6">
          <button
            onClick={onBack}
            className="w-10 h-10 glass rounded-full flex items-center justify-center press"
          >
            <Icon name="arrow_back" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="w-10 h-10 glass rounded-full flex items-center justify-center press"
            >
              <Icon
                name="favorite"
                filled={liked}
                size="md"
                className={liked ? "text-destructive" : "text-foreground"}
              />
            </button>
            <button className="w-10 h-10 glass rounded-full flex items-center justify-center press">
              <Icon name="share" size="md" />
            </button>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-6 left-5 right-5">
          <span className="text-[11px] bg-primary px-3 py-1 rounded-full font-bold uppercase tracking-wide">
            Nature
          </span>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight">
            Chitrakote Falls
          </h1>
          <div className="flex items-center gap-1 mt-2 text-muted-foreground">
            <Icon name="location_on" size="sm" />
            <span className="text-sm">Bastar, Chhattisgarh</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 space-y-6">
        {/* Description */}
        <div>
          <h3 className="font-bold text-lg mb-2">About</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Known as the "Niagara of India", Chitrakote Falls is a stunning horseshoe-shaped waterfall
            located on the Indravati River. During monsoon season, the falls expand to nearly 300 meters
            in width, creating a breathtaking spectacle of nature's power.
          </p>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="font-bold text-lg mb-3">Highlights</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "water_drop", label: "90ft Height" },
              { icon: "straighten", label: "985ft Width" },
              { icon: "photo_camera", label: "Photography" },
              { icon: "hiking", label: "Boat Rides" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass p-4 rounded-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name={item.icon} className="text-primary" size="md" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Best time */}
        <div>
          <h3 className="font-bold text-lg mb-2">Best Time to Visit</h3>
          <div className="glass p-4 rounded-xl flex items-center gap-3">
            <Icon name="calendar_month" className="text-primary" />
            <div>
              <p className="font-medium">July - October</p>
              <p className="text-muted-foreground text-sm">Monsoon season for full waterfall flow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-5 max-w-[420px] mx-auto">
        <button
          onClick={onNavigate}
          className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold flex items-center justify-center gap-2 press shadow-glow"
        >
          <Icon name="near_me" filled />
          Navigate to Location
        </button>
      </div>
    </div>
  );
};
