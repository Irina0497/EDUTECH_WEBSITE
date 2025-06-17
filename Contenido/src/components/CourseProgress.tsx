import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Award } from "lucide-react";

interface CourseProgressProps {
  completedLessons: number;
  totalLessons: number;
  totalDuration: string;
  certificateAvailable: boolean;
}

export const CourseProgress = ({
  completedLessons,
  totalLessons,
  totalDuration,
  certificateAvailable,
}: CourseProgressProps) => {
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div
      className="rounded-lg p-4"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(209, 213, 219)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold" style={{ color: "rgb(15, 23, 42)" }}>
          Progreso del Curso
        </h3>
        <Badge
          style={{
            backgroundColor:
              progressPercentage === 100
                ? "rgb(34, 197, 94)"
                : "rgb(240, 249, 255)",
            color:
              progressPercentage === 100
                ? "rgb(255, 255, 255)"
                : "rgb(14, 165, 233)",
          }}
        >
          {Math.round(progressPercentage)}%
        </Badge>
      </div>

      <div className="space-y-3">
        <Progress value={progressPercentage} className="h-2" />

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1">
              <BookOpen
                className="w-4 h-4"
                style={{ color: "rgb(14, 165, 233)" }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "rgb(15, 23, 42)" }}
              >
                {completedLessons}/{totalLessons}
              </span>
            </div>
            <p className="text-xs" style={{ color: "rgb(100, 116, 139)" }}>
              Clases
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1">
              <Clock
                className="w-4 h-4"
                style={{ color: "rgb(14, 165, 233)" }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "rgb(15, 23, 42)" }}
              >
                {totalDuration}
              </span>
            </div>
            <p className="text-xs" style={{ color: "rgb(100, 116, 139)" }}>
              Duración
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1">
              <Award
                className="w-4 h-4"
                style={{
                  color: certificateAvailable
                    ? "rgb(250, 204, 21)"
                    : "rgb(100, 116, 139)",
                }}
              />
              <span
                className="text-sm font-medium"
                style={{
                  color: certificateAvailable
                    ? "rgb(250, 204, 21)"
                    : "rgb(100, 116, 139)",
                }}
              >
                {certificateAvailable ? "Disponible" : "Bloqueado"}
              </span>
            </div>
            <p className="text-xs" style={{ color: "rgb(100, 116, 139)" }}>
              Certificado
            </p>
          </div>
        </div>

        {progressPercentage === 100 && (
          <div
            className="rounded-lg p-3 mt-3"
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
            }}
          >
            <div className="flex items-center gap-2">
              <Award
                className="w-5 h-5"
                style={{ color: "rgb(34, 197, 94)" }}
              />
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "rgb(34, 197, 94)" }}
                >
                  ¡Felicitaciones!
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(34, 197, 94, 0.8)" }}
                >
                  Has completado el curso. Tu certificado está listo.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
