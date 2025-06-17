import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Star, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  instructor: string;
  progress?: number;
  duration: string;
  rating?: number;
  image?: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  isEnrolled?: boolean;
  onContinue?: () => void;
  onStart?: () => void;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  progress = 0,
  duration,
  rating,
  image,
  level,
  isEnrolled = false,
  onContinue,
  onStart,
  className,
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Principiante":
        return "bg-green-100 text-green-800";
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800";
      case "Avanzado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden",
        "hover:border-edutech-primary/50",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Course Image */}
        <div className="w-full sm:w-40 h-32 bg-gradient-to-br from-edutech-primary/20 to-edutech-secondary/20 flex items-center justify-center flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <BookOpen className="w-12 h-12 text-edutech-primary/60" />
          )}
        </div>

        {/* Course Content */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">por {instructor}</p>
            </div>
            <span
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium",
                getLevelColor(level),
              )}
            >
              {level}
            </span>
          </div>

          {/* Course Meta Information */}
          <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {duration}
            </div>
            {rating && (
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                {rating}
              </div>
            )}
          </div>

          {/* Progress Bar (for enrolled courses) */}
          {isEnrolled && (
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Progreso
                </span>
                <span className="text-sm text-gray-500">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-edutech-primary to-edutech-secondary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="flex justify-end">
            <Button
              onClick={isEnrolled ? onContinue : onStart}
              className={cn(
                "px-6 py-2 text-sm font-medium transition-all duration-200",
                isEnrolled
                  ? "bg-edutech-primary hover:bg-edutech-primary/90 text-white"
                  : "bg-edutech-secondary hover:bg-edutech-secondary/90 text-white",
              )}
            >
              {isEnrolled ? "Continuar" : "Comenzar"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
