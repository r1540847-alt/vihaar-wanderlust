import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { TopBar } from "@/components/layout/TopBar";
import { FeaturedCarousel } from "@/components/home/FeaturedCarousel";
import { NearbyFeed } from "@/components/home/NearbyFeed";
import { ExploreCard } from "@/components/explore/ExploreCard";
import { SearchPage } from "@/components/search/SearchPage";
import { EntityDetailPage } from "@/components/detail/EntityDetailPage";
import { TravelPage } from "@/components/travel/TravelPage";
import { ProfilePage } from "@/components/profile/ProfilePage";
import { SavedPage } from "@/components/saved/SavedPage";

type ViewState = "home" | "explore" | "profile" | "saved" | "search" | "detail" | "travel";

const exploreItems = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
    category: "Nature",
    title: "Chitrakote Falls",
    description: "Best visited during monsoon for full waterfall flow 🌧️",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    category: "Mountains",
    title: "Valley of Flowers",
    description: "UNESCO World Heritage site in the Himalayas 🏔️",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200",
    category: "Adventure",
    title: "Coorg Coffee Trails",
    description: "Misty hills and aromatic coffee plantations ☕",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [view, setView] = useState<ViewState>("home");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setView(tab as ViewState);
  };

  const handleSearchClick = () => {
    setView("search");
  };

  const handleCardClick = () => {
    setView("detail");
  };

  const handleNavigate = () => {
    setView("travel");
  };

  const handleBack = () => {
    setView(activeTab as ViewState);
  };

  // Render based on current view
  const renderContent = () => {
    switch (view) {
      case "search":
        return (
          <SearchPage
            onBack={handleBack}
            onResultClick={handleCardClick}
          />
        );
      case "detail":
        return (
          <EntityDetailPage
            onBack={handleBack}
            onNavigate={handleNavigate}
          />
        );
      case "travel":
        return <TravelPage onBack={handleBack} />;
      case "explore":
        return (
          <div className="h-screen overflow-y-scroll snap-y-mandatory no-scrollbar">
            {exploreItems.map((item) => (
              <ExploreCard
                key={item.id}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        );
      case "saved":
        return <SavedPage onItemClick={handleCardClick} />;
      case "profile":
        return <ProfilePage />;
      case "home":
      default:
        return (
          <div className="pb-24 overflow-y-auto no-scrollbar">
            <TopBar onSearchClick={handleSearchClick} />
            <FeaturedCarousel onExplore={handleCardClick} />
            <NearbyFeed onItemClick={handleCardClick} onViewAll={handleSearchClick} />
          </div>
        );
    }
  };

  return (
    <div className="flex justify-center bg-background min-h-screen">
      <div className="max-w-[420px] w-full min-h-screen relative">
        {renderContent()}
        {(view === "home" || view === "explore" || view === "profile" || view === "saved") && (
          <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        )}
      </div>
    </div>
  );
};

export default Index;
