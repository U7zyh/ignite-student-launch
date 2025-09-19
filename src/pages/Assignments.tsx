import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Upload,
  Eye,
  Download
} from "lucide-react";

const Assignments = () => {
  const assignments = {
    pending: [
      {
        id: 1,
        title: "React Components Deep Dive",
        course: "Computer Science 101",
        courseCode: "CS101",
        type: "Essay",
        dueDate: "2024-01-15",
        dueTime: "11:59 PM",
        points: 100,
        description: "Write a comprehensive essay about React components, their lifecycle, and best practices.",
        timeLeft: "2 days",
        priority: "high"
      },
      {
        id: 2,
        title: "Calculus Problem Set 5",
        course: "Calculus I",
        courseCode: "MATH150",
        type: "Problem Set",
        dueDate: "2024-01-18",
        dueTime: "11:59 PM",
        points: 50,
        description: "Complete problems 1-20 focusing on derivatives and applications.",
        timeLeft: "5 days",
        priority: "medium"
      },
      {
        id: 3,
        title: "Renaissance Art Analysis",
        course: "World History",
        courseCode: "HIST200",
        type: "Research Paper",
        dueDate: "2024-01-22",
        dueTime: "11:59 PM",
        points: 150,
        description: "Analyze three major Renaissance artworks and their historical context.",
        timeLeft: "9 days",
        priority: "low"
      }
    ],
    submitted: [
      {
        id: 4,
        title: "Psychology Research Methods",
        course: "Psychology 101",
        courseCode: "PSY101",
        type: "Lab Report",
        submittedDate: "2024-01-08",
        grade: "A-",
        points: 85,
        totalPoints: 100,
        feedback: "Excellent methodology and analysis. Minor formatting issues."
      },
      {
        id: 5,
        title: "Physics Lab: Motion Analysis",
        course: "Physics I",
        courseCode: "PHYS101",
        type: "Lab Report",
        submittedDate: "2024-01-05",
        grade: "B+",
        points: 82,
        totalPoints: 100,
        feedback: "Good understanding of concepts. Could improve data presentation."
      }
    ],
    graded: [
      {
        id: 6,
        title: "Shakespeare's Hamlet Essay",
        course: "English Literature",
        courseCode: "ENG210",
        type: "Essay",
        submittedDate: "2023-12-15",
        grade: "A",
        points: 95,
        totalPoints: 100,
        feedback: "Outstanding analysis and writing. Excellent use of textual evidence."
      },
      {
        id: 7,
        title: "World War II Timeline",
        course: "World History",
        courseCode: "HIST200",
        type: "Project",
        submittedDate: "2023-12-10",
        grade: "B",
        points: 78,
        totalPoints: 100,
        feedback: "Good research but could be more detailed in some areas."
      }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-academic-warning/10 text-academic-warning border-academic-warning/20';
      case 'low': return 'bg-academic-success/10 text-academic-success border-academic-success/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

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
          <h1 className="text-3xl font-bold">Assignments</h1>
          <p className="text-muted-foreground mt-1">Track your academic progress</p>
        </div>
        <Button className="bg-gradient-to-r from-academic-primary to-academic-secondary text-white">
          <Upload className="w-4 h-4 mr-2" />
          Submit Assignment
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Pending ({assignments.pending.length})
          </TabsTrigger>
          <TabsTrigger value="submitted" className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Submitted ({assignments.submitted.length})
          </TabsTrigger>
          <TabsTrigger value="graded" className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Graded ({assignments.graded.length})
          </TabsTrigger>
        </TabsList>

        {/* Pending Assignments */}
        <TabsContent value="pending" className="space-y-4">
          {assignments.pending.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{assignment.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{assignment.course} ({assignment.courseCode})</span>
                      <Badge variant="outline">{assignment.type}</Badge>
                      <Badge variant="outline" className={getPriorityColor(assignment.priority)}>
                        {assignment.priority} priority
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-academic-primary">{assignment.points} pts</div>
                    <div className="text-sm text-muted-foreground">Due in {assignment.timeLeft}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{assignment.description}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Due: {assignment.dueDate} at {assignment.dueTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" className="bg-academic-primary hover:bg-academic-primary/90">
                    <Upload className="w-4 h-4 mr-2" />
                    Submit
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Submitted Assignments */}
        <TabsContent value="submitted" className="space-y-4">
          {assignments.submitted.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{assignment.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{assignment.course} ({assignment.courseCode})</span>
                      <Badge variant="outline">{assignment.type}</Badge>
                      <Badge variant="secondary" className="bg-academic-primary/10 text-academic-primary">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Submitted
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-academic-success">{assignment.grade}</div>
                    <div className="text-sm text-muted-foreground">{assignment.points}/{assignment.totalPoints} pts</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Submitted: {assignment.submittedDate}</span>
                  </div>
                </div>

                {assignment.feedback && (
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium mb-1">Instructor Feedback:</p>
                    <p className="text-sm text-muted-foreground">{assignment.feedback}</p>
                  </div>
                )}

                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View Submission
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Graded Assignments */}
        <TabsContent value="graded" className="space-y-4">
          {assignments.graded.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{assignment.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>{assignment.course} ({assignment.courseCode})</span>
                      <Badge variant="outline">{assignment.type}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getGradeColor(assignment.grade)}`}>
                      {assignment.grade}
                    </div>
                    <div className="text-sm text-muted-foreground">{assignment.points}/{assignment.totalPoints} pts</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Score</span>
                    <span className="font-medium">{assignment.points}/{assignment.totalPoints}</span>
                  </div>
                  <Progress value={(assignment.points / assignment.totalPoints) * 100} className="h-2" />
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Submitted: {assignment.submittedDate}</span>
                  </div>
                </div>

                {assignment.feedback && (
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium mb-1">Instructor Feedback:</p>
                    <p className="text-sm text-muted-foreground">{assignment.feedback}</p>
                  </div>
                )}

                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Assignments;