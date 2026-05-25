export type NavRoute = "home" | "my-animals" | "search" | "chat" | "profile";

export interface NavBarProps {
  active?: NavRoute;
  onNavigate?: (route: NavRoute) => void;
}