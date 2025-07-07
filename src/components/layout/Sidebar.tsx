
import { NavLink } from "react-router-dom";
import { 
  BarChart3, 
  Package, 
  Truck, 
  Warehouse, 
  ShieldCheck, 
  DollarSign, 
  FlaskConical, 
  FileText 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", path: "/", icon: BarChart3 },
  { name: "Procurement", path: "/procurement", icon: Package },
  { name: "Logistics", path: "/logistics", icon: Truck },
  { name: "Inventory", path: "/inventory", icon: Warehouse },
  { name: "Quality Assurance", path: "/quality", icon: ShieldCheck },
  { name: "Financials", path: "/financials", icon: DollarSign },
  { name: "Simulations", path: "/simulations", icon: FlaskConical },
  { name: "Reports", path: "/reports", icon: FileText },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )
              }
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
