import React from "react";
import { Clock, Users, Star, CheckCircle } from "lucide-react";

interface CourseCardStaticProps {
  title: string;
  instructor: string;
  progress?: string;
  duration: string;
  students: string;
  rating: string;
  category: string;
  isEnrolled?: boolean;
  lastAccessed?: string;
}

export const CourseCardStatic = ({
  title,
  instructor,
  progress,
  duration,
  students,
  rating,
  category,
  isEnrolled = false,
  lastAccessed,
}: CourseCardStaticProps) => {
  return (
    <div className="bg-edutech-surface rounded-lg border border-gray-100 overflow-hidden">
      <div className="flex">
        {/* Course Image */}
        <div className="w-48 h-32 bg-gray-200 flex-shrink-0 relative">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="text-gray-400 text-sm">Imagen del curso</div>
          </div>
          {isEnrolled && (
            <div className="absolute top-2 left-2">
              <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded flex items-center gap-1">
                <CheckCircle size={12} />
                Inscrito
              </div>
            </div>
          )}
        </div>

        {/* Course Content */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-2 inline-block">
                {category}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">por {instructor}</p>
            </div>
          </div>

          {/* Progress bar for enrolled courses */}
          {isEnrolled && progress && (
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Progreso</span>
                <span className="text-sm font-medium text-edutech-primary">
                  {progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-edutech-primary h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {lastAccessed && (
                <p className="text-xs text-gray-500 mt-1">
                  Último acceso: {lastAccessed}
                </p>
              )}
            </div>
          )}

          {/* Course metadata */}
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
          <div
            className={`w-full py-2 px-4 rounded-lg font-medium text-center ${
              isEnrolled
                ? "bg-edutech-primary text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {isEnrolled ? "Continuar curso" : "Ver detalles"}
          </div>
        </div>
      </div>
    </div>
  );
};
