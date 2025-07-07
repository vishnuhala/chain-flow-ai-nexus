
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Bot,
  Handshake,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const Procurement = () => {
  const activeNegotiations = [
    {
      id: "NEG-2024-001",
      supplier: "TechCorp Industries",
      product: "Component X - 5,000 units",
      status: "negotiating",
      currentOffer: "$245,000",
      targetSaving: "15%",
      agentActivity: "Counter-offer sent",
      timeRemaining: "2h 34m"
    },
    {
      id: "NEG-2024-002", 
      supplier: "Global Materials Ltd",
      product: "Raw Materials Package",
      status: "finalizing",
      currentOffer: "$89,500",
      targetSaving: "12%",
      agentActivity: "Contract generation",
      timeRemaining: "45m"
    },
    {
      id: "NEG-2024-003",
      supplier: "Sustainable Solutions",
      product: "Eco-friendly Packaging",
      status: "value-extraction",
      currentOffer: "$156,000",
      targetSaving: "22%",
      agentActivity: "Pushing for better terms",
      timeRemaining: "1h 15m"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "negotiating":
        return "bg-blue-100 text-blue-800";
      case "finalizing":
        return "bg-green-100 text-green-800";
      case "value-extraction":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "negotiating":
        return <Handshake className="h-4 w-4" />;
      case "finalizing":
        return <CheckCircle className="h-4 w-4" />;
      case "value-extraction":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Autonomous Procurement</h1>
          <p className="text-gray-600 mt-2">
            AI agents negotiating optimal deals via A2A/MCP Protocol
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>12 Procurement Agents Active</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            New Sourcing Request
          </Button>
        </div>
      </div>

      {/* Sourcing Request Interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span>Natural Language Sourcing</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Input 
                placeholder="e.g., 'Source 5,000 units of Component X by Q3, prioritizing sustainable suppliers and minimizing costs'"
                className="pr-12"
              />
              <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Budget: $500K</Badge>
              <Badge variant="outline">Sustainability Priority</Badge>
              <Badge variant="outline">Q3 Delivery</Badge>
              <Badge variant="outline">Quality Tier: Premium</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Autonomous Negotiation Workbench */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Handshake className="h-5 w-5" />
              <span>Autonomous Negotiation Workbench</span>
            </div>
            <Badge className="bg-purple-100 text-purple-800">
              A2A/MCP Protocol Active
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeNegotiations.map((negotiation) => (
              <div key={negotiation.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{negotiation.supplier}</h3>
                    <p className="text-gray-600">{negotiation.product}</p>
                    <p className="text-sm text-gray-500">ID: {negotiation.id}</p>
                  </div>
                  <Badge className={getStatusColor(negotiation.status)}>
                    {getStatusIcon(negotiation.status)}
                    <span className="ml-1 capitalize">
                      {negotiation.status.replace('-', ' ')}
                    </span>
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-sm text-gray-500">Current Offer</p>
                    <p className="font-semibold text-green-600">{negotiation.currentOffer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Target Saving</p>
                    <p className="font-semibold text-blue-600">{negotiation.targetSaving}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Agent Activity</p>
                    <p className="font-medium">{negotiation.agentActivity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time Remaining</p>
                    <p className="font-medium text-orange-600">{negotiation.timeRemaining}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <AlertCircle className="h-4 w-4" />
                    <span>Value extraction in progress - AI pushing for better terms</span>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Supplier Discovery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Supplier Discovery Network</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Connected Supplier Agents</span>
                <Badge>1,247 Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Global Coverage</span>
                <Badge>47 Countries</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Certified Sustainable</span>
                <Badge className="bg-green-100 text-green-800">312 Suppliers</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>A2A Protocol Enabled</span>
                <Badge className="bg-blue-100 text-blue-800">892 Agents</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Value Extraction Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Savings This Month</span>
                <span className="font-bold text-green-600">$3.2M</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Average Discount Achieved</span>
                <span className="font-bold text-blue-600">18.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Successful Negotiations</span>
                <span className="font-bold">94.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>AI Negotiation Speed</span>
                <span className="font-bold text-purple-600">2.3x Faster</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Procurement;
