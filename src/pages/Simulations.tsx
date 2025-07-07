
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRealtime } from "@/hooks/use-realtime";
import { 
  Play, 
  BarChart3, 
  AlertTriangle, 
  TrendingUp,
  Clock,
  Target,
  Zap,
  Brain
} from "lucide-react";

const Simulations = () => {
  const lastUpdate = useRealtime(25000);
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);

  const scenarioTemplates = [
    {
      id: "weather-disruption",
      title: "Weather Disruption",
      description: "Hurricane impact on East Coast shipping routes",
      estimatedRuntime: "2-3 minutes",
      complexity: "Medium"
    },
    {
      id: "demand-spike",
      title: "Demand Surge",
      description: "25% increase in Component X demand over 3 months",
      estimatedRuntime: "1-2 minutes", 
      complexity: "Low"
    },
    {
      id: "supplier-failure",
      title: "Supplier Disruption",
      description: "Primary supplier unavailable for 2 weeks",
      estimatedRuntime: "3-4 minutes",
      complexity: "High"
    },
    {
      id: "geopolitical",
      title: "Trade Route Closure",
      description: "Major shipping channel blocked for 1 month",
      estimatedRuntime: "4-5 minutes",
      complexity: "High"
    }
  ];

  const recentSimulations = [
    {
      id: "SIM-2024-089",
      scenario: "10% supplier delay on Raw Material Y",
      status: "completed",
      runtime: "2m 34s",
      impact: {
        cost: "+$234K",
        time: "+5.2 days",
        risk: "Medium"
      },
      recommendation: "Activate backup supplier for 40% of orders"
    },
    {
      id: "SIM-2024-090",
      scenario: "Port congestion at Long Beach - 7 day delay",
      status: "completed", 
      runtime: "3m 12s",
      impact: {
        cost: "+$156K",
        time: "+8.1 days",
        risk: "High"
      },
      recommendation: "Redirect 60% of shipments through Seattle"
    },
    {
      id: "SIM-2024-091",
      scenario: "Currency fluctuation EUR/USD +15%",
      status: "running",
      runtime: "1m 45s",
      impact: {
        cost: "Calculating...",
        time: "Calculating...",
        risk: "TBD"
      },
      recommendation: "Analysis in progress..."
    }
  ];

  const runSimulation = (scenarioId: string) => {
    setActiveSimulation(scenarioId);
    // Simulate processing time
    setTimeout(() => {
      setActiveSimulation(null);
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "running":
        return "bg-info text-info-foreground";
      case "failed":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity.toLowerCase()) {
      case "low":
        return "bg-success/10 text-success";
      case "medium":
        return "bg-warning/10 text-warning";
      case "high":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Supply Chain Simulations</h1>
          <p className="text-muted-foreground mt-2">
            What-if scenario modeling and predictive analytics
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Simulation Engine Active</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Brain className="h-4 w-4 mr-2" />
            Custom Scenario
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Simulations Run
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">847</div>
            <p className="text-xs text-success">+23 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Processing Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2m 45s</div>
            <p className="text-xs text-success">-18s improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Prediction Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">94.8%</div>
            <p className="text-xs text-warning">+1.2% vs baseline</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Cost Scenarios Tested
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">156</div>
            <p className="text-xs text-info">Risk mitigation plans</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Quick Scenario Templates</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scenarioTemplates.map((template) => (
                <div key={template.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{template.title}</h4>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                    <Badge className={getComplexityColor(template.complexity)}>
                      {template.complexity}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{template.estimatedRuntime}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => runSimulation(template.id)}
                      disabled={activeSimulation === template.id}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {activeSimulation === template.id ? (
                        <>
                          <Zap className="h-3 w-3 mr-1 animate-spin" />
                          Running...
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3 mr-1" />
                          Run Simulation
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Custom Scenario Builder</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Scenario Description
                </label>
                <Input 
                  placeholder="e.g., What if Component X demand increases by 30% over 6 months?"
                  className="mb-2"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Duration (Days)
                  </label>
                  <Input type="number" placeholder="30" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Impact Magnitude (%)
                  </label>
                  <Input type="number" placeholder="15" />
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Simulation Parameters</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Cost Impact Analysis</span>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Delay Calculation</span>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Alternative Route Analysis</span>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Assessment</span>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                <Brain className="h-4 w-4 mr-2" />
                Run Custom Simulation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Recent Simulation Results</span>
            <Badge variant="outline" className="ml-auto">
              Updated {new Date(lastUpdate).toLocaleTimeString()}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSimulations.map((simulation) => (
              <div key={simulation.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{simulation.scenario}</h4>
                    <p className="text-sm text-muted-foreground">ID: {simulation.id}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(simulation.status)}>
                      {simulation.status === "running" && <Zap className="h-3 w-3 mr-1 animate-spin" />}
                      {simulation.status.charAt(0).toUpperCase() + simulation.status.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Runtime: {simulation.runtime}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Cost Impact</p>
                    <p className="font-semibold text-foreground">{simulation.impact.cost}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time Impact</p>
                    <p className="font-semibold text-foreground">{simulation.impact.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <Badge className={simulation.impact.risk === "High" ? "bg-destructive" : simulation.impact.risk === "Medium" ? "bg-warning" : "bg-success"}>
                      {simulation.impact.risk}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      View Report
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">AI Recommendation</p>
                      <p className="text-sm text-muted-foreground">{simulation.recommendation}</p>
                    </div>
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

export default Simulations;
