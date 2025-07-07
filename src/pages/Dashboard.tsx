
import { KPICard } from "@/components/dashboard/KPICard";
import { StatusWidget } from "@/components/dashboard/StatusWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  Truck, 
  DollarSign, 
  Users,
  MapPin,
  AlertTriangle
} from "lucide-react";

const Dashboard = () => {
  const kpiData = [
    {
      title: "Operational Health",
      value: "94.2%",
      change: 2.1,
      changeLabel: "from last month",
      icon: <Activity className="h-5 w-5" />
    },
    {
      title: "On-time Delivery",
      value: "96.8%",
      change: 1.5,
      changeLabel: "from last month",
      icon: <Truck className="h-5 w-5" />
    },
    {
      title: "Cost Variance",
      value: "-$2.4M",
      change: 8.2,
      changeLabel: "savings vs budget",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: "Supplier Performance",
      value: "4.7/5.0",
      change: 0.3,
      changeLabel: "average rating",
      icon: <Users className="h-5 w-5" />
    }
  ];

  const liveShipments = [
    { id: "1", label: "Active Shipments", status: "info" as const, count: 247 },
    { id: "2", label: "In Transit", status: "success" as const, count: 189 },
    { id: "3", label: "Pending Delivery", status: "warning" as const, count: 43 },
    { id: "4", label: "Delayed", status: "error" as const, count: 15 }
  ];

  const negotiations = [
    { id: "1", label: "Active Negotiations", status: "info" as const, count: 12 },
    { id: "2", label: "Pending Approval", status: "warning" as const, count: 8 },
    { id: "3", label: "Completed Today", status: "success" as const, count: 24 },
    { id: "4", label: "Value Extracted", status: "success" as const, count: 34 }
  ];

  const alerts = [
    { id: "1", label: "Critical Inventory", status: "error" as const, count: 3 },
    { id: "2", label: "Compliance Warnings", status: "warning" as const, count: 7 },
    { id: "3", label: "Quality Issues", status: "warning" as const, count: 2 },
    { id: "4", label: "Risk Assessments", status: "info" as const, count: 15 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Supply Chain Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Real-time insights powered by autonomous AI agents
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>A2A/MCP Agents Active</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Real-time Status Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StatusWidget title="Live Shipments" items={liveShipments} />
        <StatusWidget title="Autonomous Negotiations" items={negotiations} />
        <StatusWidget title="System Alerts" items={alerts} />
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Global Operations Map</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Interactive supply chain map</p>
                <p className="text-sm text-gray-400">Showing 247 active routes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span>Risk Assessment Heatmap</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">AI-powered risk analysis</p>
                <p className="text-sm text-gray-400">Updated every 15 minutes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
