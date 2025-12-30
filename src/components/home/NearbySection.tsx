import { NearbyTourCard } from "./NearbyTourCard";

interface NearbyTour {
  id: string;
  image: string;
  title: string;
  description: string;
}

const nearbyTours: NearbyTour[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1584559582128-b8be739912e4?w=400",
    title: "Bhoramdeo Temple",
    description: "Ancient Shiva temple · Heritage site",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
    title: "Kanger Valley",
    description: "National Park · Nature reserve",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400",
    title: "Tirathgarh Falls",
    description: "Scenic waterfall · Photography spot",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
    title: "Barnawapara Sanctuary",
    description: "Wildlife sanctuary · Safari tours",
  },
];

interface NearbySectionProps {
  onTourClick: (id: string) => void;
}

export const NearbySection = ({ onTourClick }: NearbySectionProps) => {
  return (
    <section className="px-5 pt-8 pb-4">
      <h2 className="text-lg font-bold mb-4">Nearby Tours</h2>
      <div className="flex flex-col gap-3">
        {nearbyTours.map((tour, index) => (
          <div
            key={tour.id}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <NearbyTourCard
              image={tour.image}
              title={tour.title}
              description={tour.description}
              onGoClick={() => onTourClick(tour.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
