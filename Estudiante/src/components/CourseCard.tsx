import React from "react";
import { Clock, Users, Star, Play, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  image: string;
  progress?: string;
  duration: string;
  students: string;
  rating: string;
  category: string;
  isEnrolled?: boolean;
  lastAccessed?: string;
}

export const CourseCard = ({
  id,
  title,
  instructor,
  image,
  progress,
  duration,
  students,
  rating,
  category,
  isEnrolled = false,
  lastAccessed,
}: CourseCardProps) => {
  return (
    <div className="bg-edutech-surface rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="flex">
        {/* Course Image */}
        <div className="relative w-48 h-32 flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {isEnrolled && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <CheckCircle size={12} className="mr-1" />
                Inscrito
              </Badge>
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <button className="bg-edutech-primary text-white rounded-full p-3 hover:bg-edutech-primary/90 transition-colors">
              <Play size={20} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Course Content */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <Badge variant="secondary" className="text-xs mb-2">
                {category}
              </Badge>
              <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">por {instructor}</p>
            </div>
          </div>

          {/* Progress bar for enrolled courses - Solo visual */}
          {isEnrolled && progress !== undefined && (
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Progreso</span>
                <span className="text-sm font-medium text-edutech-primary">
                  {progress}%
                </span>
              </div>
              <Progress value={parseInt(progress)} className="h-2" />
              {lastAccessed && (
                <p className="text-xs text-gray-500 mt-1">
                  Último acceso: {lastAccessed}
                </p>
              )}
            </div>
          )}

          {/* Course metadata - Solo visual */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{students} estudiantes</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          </div>

          {/* Action button */}
          <button
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
              isEnrolled
                ? "bg-edutech-primary text-white hover:bg-edutech-primary/90"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {isEnrolled ? "Continuar curso" : "Ver detalles"}
          </button>
        </div>
      </div>
    </div>
  );
};
