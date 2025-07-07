
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Truck, 
  AlertTriangle, 
  Route,
  Clock,
  Thermometer,
  Zap
} from "lucide-react";

const Logistics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Logistics & Fulfillment</h1>
          <p className="text-gray-600 mt-2">
            Real-time shipment tracking and autonomous route optimization
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Carrier Agents Connected</span>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Real-time Global Shipment Map</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-500 mb-2">Interactive Shipment Tracking</p>
              <p className="text-sm text-gray-400 mb-4">247 active shipments across 34 countries</p>
              <div className="flex justify-center space-x-4">
                <Badge className="bg-green-100 text-green-800">189 On Schedule</Badge>
                <Badge className="bg-yellow-100 text-yellow-800">43 In Transit</Badge>
                <Badge className="bg-red-100 text-red-800">15 Delayed</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span>Disruption Prediction & Resolution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-red-700">Weather Alert - Hurricane</h4>
                  <Badge className="bg-red-100 text-red-800">High Risk</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Potential impact on 23 shipments via Port of Miami
                </p>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">Auto Re-route</Button>
                  <span className="text-xs text-gray-500">Logistics Agent recommending alternative ports</span>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-yellow-700">Port Congestion</h4>
                  <Badge className="bg-yellow-100 text-yellow-800">Medium Risk</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Long Beach Port - 3-day delay expected
                </p>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">View Alternatives</Button>
                  <span className="text-xs text-gray-500">12 alternative routes identified</span>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-blue-700">Geopolitical Update</h4>
                  <Badge className="bg-blue-100 text-blue-800">Info</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  New trade regulations affecting 8 shipments
                </p>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">Update Customs</Button>
                  <span className="text-xs text-gray-500">Customs Agent notified</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Route className="h-5 w-5" />
              <span>Route Optimization Engine</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recommended Route Optimization</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cost Reduction</span>
                    <span className="font-semibold text-green-600">-$45,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Time Saved</span>
                    <span className="font-semibold text-blue-600">2.5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Carbon Footprint</span>
                    <span className="font-semibold text-green-600">-18% CO₂</span>
                  </div>
                </div>
                <Button className="w-full mt-3" size="sm">
                  Apply Optimization
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-1" />
                  <p className="text-sm font-semibold">Speed</p>
                  <p className="text-xs text-gray-600">Optimized</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <Zap className="h-8 w-8 text-green-600 mx-auto mb-1" />
                  <p className="text-sm font-semibold">Cost</p>
                  <p className="text-xs text-gray-600">Minimized</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <Thermometer className="h-8 w-8 text-purple-600 mx-auto mb-1" />
                  <p className="text-sm font-semibold">Carbon</p>
                  <p className="text-xs text-gray-600">Reduced</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Truck className="h-5 w-5" />
            <span>Active Shipments</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: "SH-2024-001", origin: "Shanghai, CN", destination: "Los Angeles, US", status: "In Transit", eta: "Dec 15, 2024", carrier: "Global Shipping Co" },
              { id: "SH-2024-002", origin: "Hamburg, DE", destination: "New York, US", status: "Customs", eta: "Dec 12, 2024", carrier: "Atlantic Express" },
              { id: "SH-2024-003", origin: "Mumbai, IN", destination: "London, UK", status: "Loading", eta: "Dec 18, 2024", carrier: "Maritime Logistics" },
            ].map((shipment) => (
              <div key={shipment.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{shipment.id}</h4>
                  <Badge className={
                    shipment.status === "In Transit" ? "bg-blue-100 text-blue-800" :
                    shipment.status === "Customs" ? "bg-yellow-100 text-yellow-800" :
                    "bg-green-100 text-green-800"
                  }>
                    {shipment.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Origin</p>
                    <p className="font-medium">{shipment.origin}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Destination</p>
                    <p className="font-medium">{shipment.destination}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">ETA</p>
                    <p className="font-medium">{shipment.eta}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Carrier</p>
                    <p className="font-medium">{shipment.carrier}</p>
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

export default Logistics;
