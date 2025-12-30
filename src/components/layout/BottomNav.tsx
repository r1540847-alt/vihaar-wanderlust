import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: boolean;
}

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "explore", label: "Explore", icon: "explore" },
  { id: "saved", label: "Saved", icon: "favorite" },
  { id: "profile", label: "Profile", icon: "person", badge: true },
];

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 safe-bottom">
      <div className="max-w-[420px] mx-auto bg-background/95 backdrop-blur-xl border-t border-white/10">
        <div className="flex justify-around py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-0.5 px-6 py-1 transition-colors press relative",
                activeTab === item.id ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div className="relative">
                <Icon
                  name={item.icon}
                  filled={activeTab === item.id}
                  size="lg"
                />
                {item.badge && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-destructive rounded-full" />
                )}
              </div>
              <span className={cn(
                "text-[10px]",
                activeTab === item.id ? "font-bold" : "font-medium"
              )}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
