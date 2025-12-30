import { Icon } from "@/components/ui/Icon";

interface TravelPageProps {
  onBack: () => void;
}

const services = [
  { icon: "two_wheeler", label: "Rent Bike", color: "bg-orange-500/20" },
  { icon: "directions_car", label: "Car Rental", color: "bg-blue-500/20" },
  { icon: "local_taxi", label: "Cab", color: "bg-green-500/20" },
  { icon: "directions_bus", label: "Intercity Bus", color: "bg-purple-500/20" },
];

const liveBuses = [
  {
    id: "1",
    route: "Raipur → Jagdalpur",
    status: "On Time",
    eta: "2h 45m",
    progress: 65,
  },
  {
    id: "2",
    route: "Jagdalpur → Chitrakote",
    status: "Delayed",
    eta: "45m",
    progress: 30,
  },
];

export const TravelPage = ({ onBack }: TravelPageProps) => {
  const handleOpenMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Chitrakote+Falls/@19.2062792,81.6967927",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl px-5 py-4 flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center press"
        >
          <Icon name="arrow_back" />
        </button>
        <h1 className="text-xl font-bold flex-1">Travel & Commute</h1>
        <button className="w-10 h-10 flex items-center justify-center relative press">
          <Icon name="notifications" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
        </button>
      </header>

      <div className="px-5 space-y-6">
        {/* Destination Card */}
        <div className="glass p-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Icon name="flag" className="text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-xs">Destination</p>
              <h3 className="font-bold">Chitrakote Falls</h3>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-xs">Distance</p>
              <p className="font-bold text-primary">280 km</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Transport Services</h3>
          <div className="grid grid-cols-4 gap-3">
            {services.map((service) => (
              <button
                key={service.label}
                className="glass p-3 rounded-xl flex flex-col items-center gap-2 press"
              >
                <div
                  className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center`}
                >
                  <Icon name={service.icon} className="text-foreground" />
                </div>
                <span className="text-[10px] font-medium text-center leading-tight">
                  {service.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Live Transport */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Live Transport</h3>
            <div className="flex items-center gap-1 text-green-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-live" />
              <span className="text-xs font-medium">Live</span>
            </div>
          </div>
          <div className="space-y-3">
            {liveBuses.map((bus) => (
              <div key={bus.id} className="glass p-4 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-sm">{bus.route}</p>
                    <p
                      className={`text-xs mt-0.5 ${
                        bus.status === "On Time"
                          ? "text-green-500"
                          : "text-orange-500"
                      }`}
                    >
                      {bus.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-xs">ETA</p>
                    <p className="font-bold">{bus.eta}</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all"
                    style={{ width: `${bus.progress}%` }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-glow-sm"
                    style={{ left: `calc(${bus.progress}% - 6px)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Preview */}
        <div>
          <h3 className="font-bold mb-4">Route Map</h3>
          <div
            onClick={handleOpenMaps}
            className="relative h-40 rounded-2xl overflow-hidden press cursor-pointer"
          >
            <div className="absolute inset-0 bg-card">
              {/* Abstract map pattern */}
              <svg className="w-full h-full opacity-20" viewBox="0 0 400 200">
                <path
                  d="M0,100 Q100,50 200,100 T400,100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
                <circle cx="50" cy="100" r="6" className="fill-primary" />
                <circle cx="350" cy="100" r="6" className="fill-primary" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                <Icon name="map" size="md" />
                Open in Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
