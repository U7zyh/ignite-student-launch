import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCard } from "@/components/StatsCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Clock,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Dashboard = () => {
  // Mock data - in a real app this would come from an API
  const recentAssignments = [
    { id: 1, title: "React Components Essay", course: "Computer Science 101", dueDate: "2024-01-15", status: "pending" },
    { id: 2, title: "History Research Paper", course: "World History", dueDate: "2024-01-18", status: "submitted" },
    { id: 3, title: "Math Problem Set 5", course: "Calculus I", dueDate: "2024-01-20", status: "pending" },
  ];

  const upcomingClasses = [
    { id: 1, course: "Computer Science 101", time: "9:00 AM", location: "Room 204" },
    { id: 2, course: "Calculus I", time: "11:00 AM", location: "Room 105" },
    { id: 3, course: "World History", time: "2:00 PM", location: "Room 301" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-academic-primary to-academic-secondary p-8 text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-white/90 text-lg">Ready to continue your academic journey?</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Courses"
          value={6}
          description="Currently enrolled"
          icon={BookOpen}
          trend="neutral"
        />
        <StatsCard
          title="Pending Assignments"
          value={3}
          description="Due this week"
          icon={FileText}
          trend="up"
          trendValue="+2 from last week"
        />
        <StatsCard
          title="Overall GPA"
          value="3.85"
          description="This semester"
          icon={GraduationCap}
          trend="up"
          trendValue="+0.15 from last term"
        />
        <StatsCard
          title="Study Hours"
          value="24"
          description="This week"
          icon={Clock}
          trend="down"
          trendValue="-3 from last week"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-academic-primary" />
              Recent Assignments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAssignments.map((assignment) => (
              <div key={assignment.id} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-academic-primary/20 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{assignment.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{assignment.course}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Due {assignment.dueDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {assignment.status === "submitted" ? (
                    <Badge variant="secondary" className="bg-academic-success/10 text-academic-success border-academic-success/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Submitted
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-academic-warning/10 text-academic-warning border-academic-warning/20">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Pending
                    </Badge>
                  )}
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-academic-primary hover:bg-academic-primary/5">
              View All Assignments
            </Button>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-academic-secondary" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingClasses.map((class_) => (
              <div key={class_.id} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-academic-secondary/20 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{class_.course}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{class_.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-academic-secondary">{class_.time}</div>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-academic-secondary hover:bg-academic-secondary/5">
              View Full Schedule
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-academic-primary" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center gap-2 h-12 border-academic-primary/20 hover:bg-academic-primary/5">
              <BookOpen className="w-4 h-4" />
              Browse Courses
            </Button>
            <Button variant="outline" className="flex items-center gap-2 h-12 border-academic-secondary/20 hover:bg-academic-secondary/5">
              <FileText className="w-4 h-4" />
              Submit Assignment
            </Button>
            <Button variant="outline" className="flex items-center gap-2 h-12 border-academic-success/20 hover:bg-academic-success/5">
              <GraduationCap className="w-4 h-4" />
              Check Grades
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;