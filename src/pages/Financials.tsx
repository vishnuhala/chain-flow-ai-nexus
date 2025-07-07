
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRealtime } from "@/hooks/use-realtime";
import { 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  CreditCard,
  PieChart,
  BarChart,
  Shield,
  Target
} from "lucide-react";

const Financials = () => {
  const lastUpdate = useRealtime(10000);

  const financialMetrics = [
    { 
      title: "Total Spend (YTD)", 
      value: "$47.2M", 
      change: "-8.4%", 
      trend: "down",
      description: "vs last year"
    },
    { 
      title: "Cost Savings", 
      value: "$6.8M", 
      change: "+24.2%", 
      trend: "up",
      description: "vs budget"
    },
    { 
      title: "Payment Efficiency", 
      value: "96.8%", 
      change: "+2.1%", 
      trend: "up",
      description: "on-time payments"
    },
    { 
      title: "Risk Score", 
      value: "2.4/10", 
      change: "-0.8", 
      trend: "down",
      description: "lower is better"
    }
  ];

  const recentTransactions = [
    {
      id: "TXN-2024-1247",
      supplier: "TechCorp Industries", 
      amount: "$245,000",
      type: "Payment",
      status: "completed",
      date: "2024-12-07",
      method: "Bank Transfer"
    },
    {
      id: "TXN-2024-1248",
      supplier: "Global Materials Ltd",
      amount: "$89,500", 
      type: "Payment",
      status: "pending",
      date: "2024-12-07",
      method: "ACH"
    },
    {
      id: "TXN-2024-1249",
      supplier: "Sustainable Solutions",
      amount: "$156,000",
      type: "Invoice",
      status: "approved",
      date: "2024-12-06",
      method: "Wire Transfer"
    }
  ];

  const riskAssessments = [
    {
      supplier: "TechCorp Industries",
      financialHealth: 8.5,
      creditRating: "A+",
      riskLevel: "Low",
      exposure: "$2.4M",
      trend: "stable"
    },
    {
      supplier: "Global Materials Ltd", 
      financialHealth: 7.2,
      creditRating: "A",
      riskLevel: "Medium",
      exposure: "$1.8M",
      trend: "improving"
    },
    {
      supplier: "Sustainable Solutions",
      financialHealth: 9.1,
      creditRating: "A+",
      riskLevel: "Low", 
      exposure: "$3.2M",
      trend: "stable"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "approved":
        return "bg-info text-info-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "low":
        return "bg-success text-success-foreground";
      case "medium":
        return "bg-warning text-warning-foreground";
      case "high":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financial & Risk Assessment</h1>
          <p className="text-muted-foreground mt-2">
            Real-time cost analysis and financial risk management
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Financial Agents Active</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center space-x-2">
                {index === 0 && <DollarSign className="h-4 w-4" />}
                {index === 1 && <TrendingUp className="h-4 w-4" />}
                {index === 2 && <CreditCard className="h-4 w-4" />}
                {index === 3 && <Shield className="h-4 w-4" />}
                <span>{metric.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <p className={`text-xs ${
                (metric.trend === 'up' && index !== 3) || (metric.trend === 'down' && index === 3) 
                  ? 'text-success' 
                  : 'text-warning'
              }`}>
                {metric.change} {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5" />
              <span>Spend Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Top Spending Categories</h4>
                <div className="space-y-3">
                  {[
                    { category: "Raw Materials", amount: "$18.2M", percentage: 38.5 },
                    { category: "Components", amount: "$14.7M", percentage: 31.1 },
                    { category: "Logistics", amount: "$8.9M", percentage: 18.9 },
                    { category: "Packaging", amount: "$5.4M", percentage: 11.4 }
                  ].map((item) => (
                    <div key={item.category} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-muted-foreground">{item.amount}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Target className="h-8 w-8 text-success mx-auto mb-1" />
                  <p className="text-sm font-semibold">Budget Adherence</p>
                  <p className="text-xs text-muted-foreground">92.4%</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BarChart className="h-8 w-8 text-primary mx-auto mb-1" />
                  <p className="text-sm font-semibold">Forecast Accuracy</p>
                  <p className="text-xs text-muted-foreground">96.1%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span>Supplier Risk Assessment</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskAssessments.map((assessment) => (
                <div key={assessment.supplier} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{assessment.supplier}</h4>
                      <p className="text-sm text-muted-foreground">
                        Exposure: {assessment.exposure}
                      </p>
                    </div>
                    <Badge className={getRiskColor(assessment.riskLevel)}>
                      {assessment.riskLevel} Risk
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Financial Health</p>
                      <p className="font-semibold text-foreground">{assessment.financialHealth}/10</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Credit Rating</p>
                      <p className="font-semibold text-foreground">{assessment.creditRating}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className={`text-xs ${
                      assessment.trend === 'improving' ? 'text-success' : 'text-muted-foreground'
                    }`}>
                      Trend: {assessment.trend}
                    </span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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
            <CreditCard className="h-5 w-5" />
            <span>Recent Transactions</span>
            <Badge variant="outline" className="ml-auto">
              Updated {new Date(lastUpdate).toLocaleTimeString()}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{transaction.supplier}</h4>
                    <p className="text-sm text-muted-foreground">ID: {transaction.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-foreground">{transaction.amount}</p>
                    <Badge className={getStatusColor(transaction.status)}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Type</p>
                    <p className="font-medium text-foreground">{transaction.type}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium text-foreground">{transaction.date}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Method</p>
                    <p className="font-medium text-foreground">{transaction.method}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      View Receipt
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

export default Financials;
