
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRealtime } from "@/hooks/use-realtime";
import { 
  FileText, 
  Download, 
  Calendar, 
  BarChart,
  PieChart,
  TrendingUp,
  Filter,
  Search
} from "lucide-react";

const Reports = () => {
  const lastUpdate = useRealtime(30000);
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const reportTemplates = [
    {
      id: "procurement-performance",
      title: "Procurement Performance",
      description: "Supplier performance, cost savings, and negotiation outcomes",
      category: "Procurement",
      lastGenerated: "2024-12-07",
      frequency: "Weekly"
    },
    {
      id: "logistics-efficiency",
      title: "Logistics Efficiency",
      description: "Delivery times, carrier performance, and route optimization",
      category: "Logistics", 
      lastGenerated: "2024-12-06",
      frequency: "Daily"
    },
    {
      id: "inventory-analysis",
      title: "Inventory Analysis",
      description: "Stock levels, turnover rates, and demand forecasting accuracy",
      category: "Inventory",
      lastGenerated: "2024-12-07",
      frequency: "Weekly"
    },
    {
      id: "quality-compliance",
      title: "Quality & Compliance",
      description: "Audit results, compliance rates, and quality metrics",
      category: "Quality",
      lastGenerated: "2024-12-05",
      frequency: "Monthly"
    },
    {
      id: "financial-summary",
      title: "Financial Summary",
      description: "Spend analysis, cost trends, and budget performance",
      category: "Financial",
      lastGenerated: "2024-12-07",
      frequency: "Daily"
    },
    {
      id: "risk-assessment",
      title: "Risk Assessment",
      description: "Supplier risks, operational risks, and mitigation strategies",
      category: "Risk",
      lastGenerated: "2024-12-06",
      frequency: "Weekly"
    }
  ];

  const recentReports = [
    {
      id: "RPT-2024-156",
      title: "Q4 Procurement Performance Summary",
      type: "Executive Summary",
      generatedBy: "Procurement Agent",
      generatedAt: "2024-12-07 09:15",
      size: "2.4 MB",
      format: "PDF"
    },
    {
      id: "RPT-2024-157",
      title: "Weekly Logistics Dashboard",
      type: "Operational Report",
      generatedBy: "Logistics Agent", 
      generatedAt: "2024-12-07 06:30",
      size: "1.8 MB",
      format: "Excel"
    },
    {
      id: "RPT-2024-158",
      title: "Supplier Risk Analysis - December",
      type: "Risk Report",
      generatedBy: "Risk Assessment Agent",
      generatedAt: "2024-12-06 16:45",
      size: "3.1 MB",
      format: "PDF"
    }
  ];

  const analyticsMetrics = [
    { 
      label: "Reports Generated", 
      value: "1,247", 
      change: "+18%",
      period: "This Month"
    },
    { 
      label: "Data Points Analyzed", 
      value: "2.4M", 
      change: "+24%",
      period: "Last 30 Days"
    },
    { 
      label: "Automated Insights", 
      value: "89", 
      change: "+12%",
      period: "This Week"
    },
    { 
      label: "Download Frequency", 
      value: "94.2%", 
      change: "+2.1%",
      period: "Engagement Rate"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "procurement":
        return "bg-primary/10 text-primary";
      case "logistics":
        return "bg-info/10 text-info";
      case "inventory":
        return "bg-success/10 text-success";
      case "quality":
        return "bg-warning/10 text-warning";
      case "financial":
        return "bg-destructive/10 text-destructive";
      case "risk":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive reporting and business intelligence
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Analytics Agents Active</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <FileText className="h-4 w-4 mr-2" />
            Custom Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <p className="text-xs text-success">{metric.change} {metric.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart className="h-5 w-5" />
              <span>Report Templates</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportTemplates.map((template) => (
                <div key={template.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-foreground">{template.title}</h4>
                        <Badge className={getCategoryColor(template.category)}>
                          {template.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{template.frequency}</span>
                      </div>
                      <span>Last: {template.lastGenerated}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Search className="h-3 w-3 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <FileText className="h-3 w-3 mr-1" />
                        Generate
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Analytics Dashboard</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Button 
                  variant={selectedPeriod === "weekly" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSelectedPeriod("weekly")}
                >
                  Weekly
                </Button>
                <Button 
                  variant={selectedPeriod === "monthly" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSelectedPeriod("monthly")}
                >
                  Monthly
                </Button>
                <Button 
                  variant={selectedPeriod === "quarterly" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSelectedPeriod("quarterly")}
                >
                  Quarterly
                </Button>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Key Performance Indicators</h4>
                <div className="space-y-3">
                  {[
                    { metric: "Cost Savings", value: "$3.2M", trend: "+18%" },
                    { metric: "Delivery Performance", value: "96.8%", trend: "+1.5%" },
                    { metric: "Supplier Rating", value: "4.7/5", trend: "+0.3" },
                    { metric: "Risk Mitigation", value: "89%", trend: "+5%" }
                  ].map((kpi) => (
                    <div key={kpi.metric} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{kpi.metric}</span>
                      <div className="text-right">
                        <span className="font-bold text-foreground">{kpi.value}</span>
                        <span className="text-xs text-success ml-2">{kpi.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <PieChart className="h-8 w-8 text-primary mx-auto mb-1" />
                  <p className="text-sm font-semibold">Data Accuracy</p>
                  <p className="text-xs text-muted-foreground">99.2%</p>
                </div>
                <div className="p-3 bg-success/10 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-success mx-auto mb-1" />
                  <p className="text-sm font-semibold">Insight Quality</p>
                  <p className="text-xs text-muted-foreground">Excellent</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Recent Reports</span>
            <Badge variant="outline" className="ml-auto">
              Updated {new Date(lastUpdate).toLocaleTimeString()}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{report.title}</h4>
                    <p className="text-sm text-muted-foreground">ID: {report.id}</p>
                  </div>
                  <Badge variant="outline">{report.type}</Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Generated By</p>
                    <p className="font-medium text-foreground">{report.generatedBy}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Generated At</p>
                    <p className="font-medium text-foreground">{report.generatedAt}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Size</p>
                    <p className="font-medium text-foreground">{report.size}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Format</p>
                    <p className="font-medium text-foreground">{report.format}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Search className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Download className="h-3 w-3 mr-1" />
                      Download
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

export default Reports;
