
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StatusWidgetProps {
  title: string;
  items: Array<{
    id: string;
    label: string;
    status: "success" | "warning" | "error" | "info";
    count?: number;
  }>;
}

export const StatusWidget = ({ title, items }: StatusWidgetProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "error":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{item.label}</span>
            <Badge className={getStatusColor(item.status)}>
              {item.count ? `${item.count}` : item.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
