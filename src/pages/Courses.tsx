import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Users, 
  Clock,
  Calendar,
  Star,
  ChevronRight
} from "lucide-react";

const Courses = () => {
  // Mock course data
  const courses = [
    {
      id: 1,
      title: "Computer Science 101",
      instructor: "Dr. Sarah Johnson",
      code: "CS101",
      credits: 3,
      schedule: "MWF 9:00-10:00 AM",
      progress: 75,
      grade: "A-",
      color: "from-blue-500 to-cyan-500",
      students: 45,
      nextClass: "Introduction to Algorithms"
    },
    {
      id: 2,
      title: "Calculus I",
      instructor: "Prof. Michael Chen",
      code: "MATH150",
      credits: 4,
      schedule: "TTh 11:00-12:30 PM",
      progress: 60,
      grade: "B+",
      color: "from-green-500 to-emerald-500",
      students: 32,
      nextClass: "Derivatives and Applications"
    },
    {
      id: 3,
      title: "World History",
      instructor: "Dr. Emily Rodriguez",
      code: "HIST200",
      credits: 3,
      schedule: "MWF 2:00-3:00 PM",
      progress: 80,
      grade: "A",
      color: "from-purple-500 to-violet-500",
      students: 28,
      nextClass: "The Renaissance Period"
    },
    {
      id: 4,
      title: "English Literature",
      instructor: "Prof. David Wilson",
      code: "ENG210",
      credits: 3,
      schedule: "TTh 3:30-5:00 PM",
      progress: 45,
      grade: "B",
      color: "from-orange-500 to-red-500",
      students: 24,
      nextClass: "Shakespeare's Tragedies"
    },
    {
      id: 5,
      title: "Physics I",
      instructor: "Dr. Lisa Park",
      code: "PHYS101",
      credits: 4,
      schedule: "MWF 10:00-11:00 AM",
      progress: 55,
      grade: "B-",
      color: "from-indigo-500 to-blue-500",
      students: 38,
      nextClass: "Motion and Forces"
    },
    {
      id: 6,
      title: "Psychology 101",
      instructor: "Dr. James Thompson",
      code: "PSY101",
      credits: 3,
      schedule: "TTh 1:00-2:30 PM",
      progress: 90,
      grade: "A",
      color: "from-pink-500 to-rose-500",
      students: 55,
      nextClass: "Cognitive Psychology"
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-academic-success';
    if (grade.startsWith('B')) return 'text-academic-primary';
    if (grade.startsWith('C')) return 'text-academic-warning';
    return 'text-muted-foreground';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Courses</h1>
          <p className="text-muted-foreground mt-1">Spring 2024 • 6 courses enrolled</p>
        </div>
        <Button className="bg-gradient-to-r from-academic-primary to-academic-secondary text-white">
          <BookOpen className="w-4 h-4 mr-2" />
          Browse Catalog
        </Button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="relative overflow-hidden hover:shadow-lg transition-all duration-200 group">
            {/* Course Header with Gradient */}
            <div className={`h-20 bg-gradient-to-r ${course.color} relative`}>
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-medium">{course.code}</span>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {course.credits} credits
                  </Badge>
                </div>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{course.instructor}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Schedule & Students */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{course.students} students</span>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              {/* Grade */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-academic-warning" />
                  <span className="text-sm text-muted-foreground">Current Grade</span>
                </div>
                <span className={`font-bold text-lg ${getGradeColor(course.grade)}`}>
                  {course.grade}
                </span>
              </div>

              {/* Next Class */}
              <div className="pt-2 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Next class:</p>
                <p className="text-sm font-medium text-foreground">{course.nextClass}</p>
              </div>

              {/* Action Button */}
              <Button 
                variant="ghost" 
                className="w-full justify-between group-hover:bg-academic-primary/5 group-hover:text-academic-primary transition-colors mt-4"
              >
                View Course Details
                <ChevronRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-academic-success mb-2">3.72</div>
          <p className="text-sm text-muted-foreground">Semester GPA</p>
        </Card>
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-academic-primary mb-2">18</div>
          <p className="text-sm text-muted-foreground">Total Credits</p>
        </Card>
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-academic-secondary mb-2">68%</div>
          <p className="text-sm text-muted-foreground">Average Progress</p>
        </Card>
      </div>
    </div>
  );
};

export default Courses;