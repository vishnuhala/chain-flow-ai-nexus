
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRealtime, generateRealTimeData } from "@/hooks/use-realtime";
import { 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  Warehouse,
  BarChart3,
  Zap,
  Clock
} from "lucide-react";

const Inventory = () => {
  const lastUpdate = useRealtime(15000);
  const realtimeData = generateRealTimeData();

  const inventoryItems = [
    { 
      sku: "COMP-X-5000", 
      name: "Component X", 
      current: 4750, 
      minimum: 1000, 
      maximum: 10000,
      status: "optimal",
      lastOrder: "2024-12-01",
      supplier: "TechCorp Industries"
    },
    { 
      sku: "MAT-Y-2500", 
      name: "Raw Material Y", 
      current: 850, 
      minimum: 800, 
      maximum: 5000,
      status: "low",
      lastOrder: "2024-11-28",
      supplier: "Global Materials Ltd"
    },
    { 
      sku: "PKG-Z-1000", 
      name: "Eco Packaging Z", 
      current: 250, 
      minimum: 500, 
      maximum: 2000,
      status: "critical",
      lastOrder: "2024-11-25",
      supplier: "Sustainable Solutions"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
        return "bg-success text-success-foreground";
      case "low":
        return "bg-warning text-warning-foreground";
      case "critical":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
          <p className="text-muted-foreground mt-2">
            AI-powered demand forecasting and automated replenishment
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Inventory Agents Active</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Generate Reorder
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total SKUs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <p className="text-xs text-success">+23 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Stock Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$8.2M</div>
            <p className="text-xs text-warning">-5.2% vs last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Turnover Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">6.8x</div>
            <p className="text-xs text-success">+0.4x improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Critical Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">12</div>
            <p className="text-xs text-muted-foreground">Require immediate action</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Demand Forecasting</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">AI Predictions for Next 30 Days</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Component X Demand</span>
                    <span className="font-semibold text-success">+24% ↗</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Raw Material Y</span>
                    <span className="font-semibold text-warning">+8% ↗</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Eco Packaging Z</span>
                    <span className="font-semibold text-destructive">+45% ↗</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-1" />
                  <p className="text-sm font-semibold">Accuracy</p>
                  <p className="text-xs text-muted-foreground">94.2%</p>
                </div>
                <div className="p-3 bg-success/10 rounded-lg">
                  <Zap className="h-8 w-8 text-success mx-auto mb-1" />
                  <p className="text-sm font-semibold">Speed</p>
                  <p className="text-xs text-muted-foreground">Real-time</p>
                </div>
                <div className="p-3 bg-info/10 rounded-lg">
                  <Clock className="h-8 w-8 text-info mx-auto mb-1" />
                  <p className="text-sm font-semibold">Lead Time</p>
                  <p className="text-xs text-muted-foreground">2.3 days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Warehouse className="h-5 w-5" />
              <span>Warehouse Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { location: "North America", utilization: 78, capacity: "85%" },
                { location: "Europe", utilization: 65, capacity: "72%" },
                { location: "Asia Pacific", utilization: 92, capacity: "96%" },
                { location: "Latin America", utilization: 45, capacity: "52%" }
              ].map((warehouse) => (
                <div key={warehouse.location} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{warehouse.location}</span>
                    <span className="text-sm text-muted-foreground">{warehouse.capacity}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all" 
                      style={{ width: `${warehouse.utilization}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5" />
            <span>Current Inventory Status</span>
            <Badge variant="outline" className="ml-auto">
              Updated {new Date(lastUpdate).toLocaleTimeString()}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inventoryItems.map((item) => (
              <div key={item.sku} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                  </div>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status === "critical" && <AlertTriangle className="h-3 w-3 mr-1" />}
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Current Stock</p>
                    <p className="font-semibold text-foreground">{item.current.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Min/Max</p>
                    <p className="font-semibold text-foreground">{item.minimum.toLocaleString()}/{item.maximum.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Order</p>
                    <p className="font-semibold text-foreground">{item.lastOrder}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Supplier</p>
                    <p className="font-semibold text-foreground">{item.supplier}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {item.status === "critical" && (
                      <Button size="sm" className="bg-destructive hover:bg-destructive/90">
                        Reorder Now
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
