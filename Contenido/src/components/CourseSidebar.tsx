import { CheckCircle, Lock, Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  isActive: boolean;
}

interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
  completedLessons: number;
  totalLessons: number;
}

interface CourseSidebarProps {
  modules: CourseModule[];
  onLessonSelect: (lessonId: string) => void;
}

export const CourseSidebar = ({
  modules,
  onLessonSelect,
}: CourseSidebarProps) => {
  return (
    <div
      className="rounded-lg h-full"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(209, 213, 219)",
      }}
    >
      <div
        className="p-4"
        style={{ borderBottom: "1px solid rgb(209, 213, 219)" }}
      >
        <h3 className="font-semibold mb-2" style={{ color: "rgb(15, 23, 42)" }}>
          Contenido del Curso
        </h3>
        <div className="text-sm" style={{ color: "rgb(71, 85, 105)" }}>
          {modules.reduce(
            (total, module) => total + module.completedLessons,
            0,
          )}{" "}
          de {modules.reduce((total, module) => total + module.totalLessons, 0)}{" "}
          clases completadas
        </div>
      </div>

      <ScrollArea className="h-[calc(100%-80px)]">
        <div className="p-4 space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <h4
                  className="font-medium text-sm"
                  style={{ color: "rgb(15, 23, 42)" }}
                >
                  {module.title}
                </h4>
                <Badge
                  variant="secondary"
                  className="text-xs"
                  style={{
                    backgroundColor: "rgb(240, 249, 255)",
                    color: "rgb(14, 165, 233)",
                  }}
                >
                  {module.completedLessons}/{module.totalLessons}
                </Badge>
              </div>

              <div className="space-y-1">
                {module.lessons.map((lesson) => (
                  <Button
                    key={lesson.id}
                    onClick={() =>
                      !lesson.isLocked && onLessonSelect(lesson.id)
                    }
                    variant="ghost"
                    className={cn(
                      "w-full justify-start p-3 h-auto text-left",
                      lesson.isActive && "border",
                      lesson.isLocked && "opacity-50 cursor-not-allowed",
                    )}
                    style={{
                      backgroundColor: lesson.isActive
                        ? "rgba(14, 165, 233, 0.1)"
                        : "transparent",
                      borderColor: lesson.isActive
                        ? "rgba(14, 165, 233, 0.2)"
                        : "transparent",
                    }}
                    disabled={lesson.isLocked}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="flex-shrink-0 mt-0.5">
                        {lesson.isCompleted ? (
                          <CheckCircle
                            className="w-4 h-4"
                            style={{ color: "rgb(34, 197, 94)" }}
                          />
                        ) : lesson.isLocked ? (
                          <Lock
                            className="w-4 h-4"
                            style={{ color: "rgb(100, 116, 139)" }}
                          />
                        ) : lesson.isActive ? (
                          <Play
                            className="w-4 h-4"
                            style={{ color: "rgb(14, 165, 233)" }}
                          />
                        ) : (
                          <div
                            className="w-4 h-4 rounded-full border-2"
                            style={{
                              borderColor: "rgb(209, 213, 219)",
                            }}
                          />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div
                          className="text-sm font-medium"
                          style={{
                            color: lesson.isActive
                              ? "rgb(14, 165, 233)"
                              : lesson.isCompleted
                                ? "rgb(71, 85, 105)"
                                : lesson.isLocked
                                  ? "rgb(100, 116, 139)"
                                  : "rgb(15, 23, 42)",
                          }}
                        >
                          {lesson.title}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock
                            className="w-3 h-3"
                            style={{ color: "rgb(100, 116, 139)" }}
                          />
                          <span
                            className="text-xs"
                            style={{ color: "rgb(100, 116, 139)" }}
                          >
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
