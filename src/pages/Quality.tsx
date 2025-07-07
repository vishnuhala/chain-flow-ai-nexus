
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRealtime } from "@/hooks/use-realtime";
import { 
  Shield, 
  FileCheck, 
  AlertTriangle, 
  Clock,
  CheckCircle,
  XCircle,
  Target,
  Award
} from "lucide-react";

const Quality = () => {
  const lastUpdate = useRealtime(20000);

  const qualityMetrics = [
    { label: "Overall Quality Score", value: "96.8%", change: "+1.2%", trend: "up" },
    { label: "Compliance Rate", value: "99.1%", change: "+0.3%", trend: "up" },
    { label: "Defect Rate", value: "0.08%", change: "-0.02%", trend: "down" },
    { label: "Audit Success", value: "94.5%", change: "+2.1%", trend: "up" }
  ];

  const activeInspections = [
    {
      id: "INS-2024-045",
      supplier: "TechCorp Industries",
      product: "Component X Batch #5847",
      status: "in-progress",
      inspector: "AI Quality Agent",
      started: "2024-12-07 09:30",
      estimated: "2024-12-07 15:00"
    },
    {
      id: "INS-2024-046", 
      supplier: "Global Materials Ltd",
      product: "Raw Material Package #2341",
      status: "pending",
      inspector: "Third-Party Inspector",
      started: "2024-12-07 14:00",
      estimated: "2024-12-08 10:00"
    },
    {
      id: "INS-2024-047",
      supplier: "Sustainable Solutions",
      product: "Eco Packaging Lot #7892",
      status: "completed",
      inspector: "AI Quality Agent",
      started: "2024-12-06 11:00",
      estimated: "2024-12-06 16:30"
    }
  ];

  const complianceAlerts = [
    {
      id: "COMP-001",
      type: "certification-expiry",
      supplier: "TechCorp Industries",
      message: "ISO 9001 certification expires in 30 days",
      severity: "warning",
      dueDate: "2025-01-07"
    },
    {
      id: "COMP-002",
      type: "audit-required",
      supplier: "New Supplier Co",
      message: "Initial compliance audit required",
      severity: "high",
      dueDate: "2024-12-15"
    },
    {
      id: "COMP-003",
      type: "document-missing",
      supplier: "Global Materials Ltd",
      message: "Missing safety data sheet for Material Y",
      severity: "medium",
      dueDate: "2024-12-10"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "in-progress":
        return "bg-info text-info-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-warning text-warning-foreground";
      case "warning":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quality Assurance</h1>
          <p className="text-muted-foreground mt-2">
            Automated compliance monitoring and quality control
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Quality Agents Active</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Schedule Audit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {qualityMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <p className={`text-xs ${metric.trend === 'up' ? 'text-success' : 'text-warning'}`}>
                {metric.change} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Compliance Dashboard</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceAlerts.map((alert) => (
                <div key={alert.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-foreground">{alert.supplier}</h4>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Due: {alert.dueDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Take Action
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
              <Award className="h-5 w-5" />
              <span>Supplier Quality Rankings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sustainable Solutions", score: 98.5, trend: "up", certifications: 8 },
                { name: "TechCorp Industries", score: 96.2, trend: "stable", certifications: 6 },
                { name: "Global Materials Ltd", score: 94.8, trend: "up", certifications: 7 },
                { name: "Premium Components", score: 92.1, trend: "down", certifications: 5 }
              ].map((supplier, index) => (
                <div key={supplier.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                      <span className="text-sm font-bold text-primary">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{supplier.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {supplier.certifications} certifications
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{supplier.score}%</p>
                    <div className="flex items-center space-x-1">
                      {supplier.trend === "up" && <CheckCircle className="h-3 w-3 text-success" />}
                      {supplier.trend === "down" && <XCircle className="h-3 w-3 text-destructive" />}
                      {supplier.trend === "stable" && <Target className="h-3 w-3 text-warning" />}
                      <span className="text-xs text-muted-foreground">
                        {supplier.trend}
                      </span>
                    </div>
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
            <FileCheck className="h-5 w-5" />
            <span>Active Quality Inspections</span>
            <Badge variant="outline" className="ml-auto">
              Updated {new Date(lastUpdate).toLocaleTimeString()}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeInspections.map((inspection) => (
              <div key={inspection.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{inspection.supplier}</h4>
                    <p className="text-sm text-muted-foreground">{inspection.product}</p>
                    <p className="text-xs text-muted-foreground">ID: {inspection.id}</p>
                  </div>
                  <Badge className={getStatusColor(inspection.status)}>
                    {inspection.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                    {inspection.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                    {inspection.status === "pending" && <AlertTriangle className="h-3 w-3 mr-1" />}
                    {inspection.status.charAt(0).toUpperCase() + inspection.status.slice(1).replace('-', ' ')}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Inspector</p>
                    <p className="font-medium text-foreground">{inspection.inspector}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Started</p>
                    <p className="font-medium text-foreground">{inspection.started}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Estimated Completion</p>
                    <p className="font-medium text-foreground">{inspection.estimated}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      View Progress
                    </Button>
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

export default Quality;
