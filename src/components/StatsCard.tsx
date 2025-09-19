import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  trendValue 
}: StatsCardProps) {
  const trendColors = {
    up: "text-academic-success",
    down: "text-destructive", 
    neutral: "text-muted-foreground"
  };

  return (
    <Card className="relative overflow-hidden transition-all duration-200 hover:shadow-lg border-0 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="w-10 h-10 bg-gradient-to-br from-academic-primary to-academic-secondary rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mb-2">
            {description}
          </p>
        )}
        {trend && trendValue && (
          <div className={`text-xs ${trendColors[trend]}`}>
            {trendValue}
          </div>
        )}
      </CardContent>
    </Card>
  );
}