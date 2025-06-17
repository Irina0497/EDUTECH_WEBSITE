import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoPlayer } from "@/components/VideoPlayer";
import { CourseSidebar } from "@/components/CourseSidebar";
import { NotesSection } from "@/components/NotesSection";
import { CourseProgress } from "@/components/CourseProgress";
import {
  ArrowLeft,
  CheckCircle,
  MessageSquare,
  HelpCircle,
  BookOpen,
  Star,
  Clock,
  Users,
} from "lucide-react";

// Sample data - in a real app this would come from an API
const courseData = {
  id: "react-advanced",
  title: "React Avanzado: Hooks y Patrones Modernos",
  instructor: "María González",
  rating: 4.8,
  students: 1250,
  currentLesson: {
    id: "lesson-3",
    title: "useState y useEffect: Gestión de Estado y Efectos",
    description:
      "Aprende a manejar el estado local y los efectos secundarios en React usando los hooks más fundamentales.",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    videoPoster: "/placeholder.svg",
  },
  modules: [
    {
      id: "module-1",
      title: "Fundamentos de Hooks",
      completedLessons: 2,
      totalLessons: 3,
      lessons: [
        {
          id: "lesson-1",
          title: "Introducción a los Hooks",
          duration: "12:30",
          isCompleted: true,
          isLocked: false,
          isActive: false,
        },
        {
          id: "lesson-2",
          title: "Reglas de los Hooks",
          duration: "8:45",
          isCompleted: true,
          isLocked: false,
          isActive: false,
        },
        {
          id: "lesson-3",
          title: "useState y useEffect",
          duration: "15:20",
          isCompleted: false,
          isLocked: false,
          isActive: true,
        },
      ],
    },
    {
      id: "module-2",
      title: "Hooks Avanzados",
      completedLessons: 0,
      totalLessons: 4,
      lessons: [
        {
          id: "lesson-4",
          title: "useContext y useReducer",
          duration: "18:30",
          isCompleted: false,
          isLocked: false,
          isActive: false,
        },
        {
          id: "lesson-5",
          title: "useMemo y useCallback",
          duration: "14:15",
          isCompleted: false,
          isLocked: true,
          isActive: false,
        },
        {
          id: "lesson-6",
          title: "useRef y useImperativeHandle",
          duration: "11:45",
          isCompleted: false,
          isLocked: true,
          isActive: false,
        },
        {
          id: "lesson-7",
          title: "Custom Hooks",
          duration: "20:10",
          isCompleted: false,
          isLocked: true,
          isActive: false,
        },
      ],
    },
  ],
};

const Index = () => {
  const [notes, setNotes] = useState([
    {
      id: "1",
      content:
        "useState permite manejar estado local en componentes funcionales",
      timestamp: "Hace 5 minutos",
      videoTime: "3:45",
    },
    {
      id: "2",
      content:
        "useEffect se ejecuta después del render y puede tener dependencias",
      timestamp: "Hace 10 minutos",
      videoTime: "7:22",
    },
  ]);

  const [isCompleted, setIsCompleted] = useState(false);

  const handleAddNote = (content: string, videoTime?: string) => {
    const newNote = {
      id: Date.now().toString(),
      content,
      timestamp: "Ahora",
      videoTime,
    };
    setNotes([newNote, ...notes]);
  };

  const handleEditNote = (id: string, content: string) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, content } : note)),
    );
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleLessonSelect = (lessonId: string) => {
    console.log("Selected lesson:", lessonId);
    // In a real app, this would navigate to the selected lesson
  };

  const totalCompletedLessons = courseData.modules.reduce(
    (total, module) => total + module.completedLessons,
    0,
  );
  const totalLessons = courseData.modules.reduce(
    (total, module) => total + module.totalLessons,
    0,
  );

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(to right bottom, rgb(248, 250, 252), rgb(239, 246, 255), rgb(238, 242, 255))",
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          borderBottom: "1px solid rgb(209, 213, 219)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                style={{ color: "rgb(71, 85, 105)" }}
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al curso
              </Button>

              <div
                className="h-6 w-px"
                style={{ backgroundColor: "rgb(209, 213, 219)" }}
              />

              <div>
                <h1
                  className="font-semibold text-lg"
                  style={{ color: "rgb(15, 23, 42)" }}
                >
                  {courseData.title}
                </h1>
                <div
                  className="flex items-center gap-4 text-sm"
                  style={{ color: "rgb(71, 85, 105)" }}
                >
                  <span>Por {courseData.instructor}</span>
                  <div className="flex items-center gap-1">
                    <Star
                      className="w-4 h-4"
                      style={{
                        color: "rgb(250, 204, 21)",
                        fill: "rgb(250, 204, 21)",
                      }}
                    />
                    <span>{courseData.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>
                      {courseData.students.toLocaleString()} estudiantes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="gap-2"
              style={{
                borderColor: "rgb(209, 213, 219)",
                color: "rgb(71, 85, 105)",
                backgroundColor: "rgb(255, 255, 255)",
              }}
            >
              <HelpCircle className="w-4 h-4" />
              Contactar Soporte
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Video and Details */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Player */}
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    style={{
                      backgroundColor: "rgb(240, 249, 255)",
                      color: "rgb(14, 165, 233)",
                    }}
                  >
                    Módulo 1
                  </Badge>
                  <Badge
                    variant="outline"
                    style={{
                      borderColor: "rgb(209, 213, 219)",
                      color: "rgb(71, 85, 105)",
                    }}
                  >
                    Clase 3
                  </Badge>
                </div>
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: "rgb(15, 23, 42)" }}
                >
                  {courseData.currentLesson.title}
                </h2>
                <p style={{ color: "rgb(71, 85, 105)" }}>
                  {courseData.currentLesson.description}
                </p>
              </div>

              <VideoPlayer
                src={courseData.currentLesson.videoSrc}
                poster={courseData.currentLesson.videoPoster}
                title={courseData.currentLesson.title}
              />

              {/* Lesson Actions */}
              <div
                className="flex items-center justify-between mt-6 pt-6"
                style={{
                  borderTop: "1px solid rgb(209, 213, 219)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => setIsCompleted(!isCompleted)}
                    style={{
                      backgroundColor: isCompleted
                        ? "rgb(34, 197, 94)"
                        : "rgb(255, 255, 255)",
                      borderColor: isCompleted
                        ? "rgb(34, 197, 94)"
                        : "rgb(209, 213, 219)",
                      color: isCompleted
                        ? "rgb(255, 255, 255)"
                        : "rgb(71, 85, 105)",
                    }}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {isCompleted ? "Completada" : "Marcar como completada"}
                  </Button>

                  <Button
                    variant="outline"
                    className="gap-2"
                    style={{
                      borderColor: "rgb(209, 213, 219)",
                      color: "rgb(71, 85, 105)",
                      backgroundColor: "rgb(255, 255, 255)",
                    }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Comentarios (12)
                  </Button>
                </div>

                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgb(100, 116, 139)" }}
                >
                  <Clock className="w-4 h-4" />
                  <span>15:20 min</span>
                </div>
              </div>
            </div>

            {/* Course Progress */}
            <CourseProgress
              completedLessons={totalCompletedLessons}
              totalLessons={totalLessons}
              totalDuration="2h 30min"
              certificateAvailable={totalCompletedLessons === totalLessons}
            />

            {/* Notes Section */}
            <NotesSection
              notes={notes}
              onAddNote={handleAddNote}
              onEditNote={handleEditNote}
              onDeleteNote={handleDeleteNote}
            />
          </div>

          {/* Right Sidebar - Course Content */}
          <div className="lg:col-span-1">
            <CourseSidebar
              modules={courseData.modules}
              onLessonSelect={handleLessonSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
