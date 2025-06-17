import { Course } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  const formatStudents = (students: number) => {
    if (students >= 1000) {
      return `${(students / 1000).toFixed(1)}k`;
    }
    return students.toString();
  };

  return (
    <div className="group bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            className="bg-white/90 text-gray-700 text-xs font-medium"
          >
            {course.category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge
            variant={
              course.level === "básico"
                ? "default"
                : course.level === "intermedio"
                  ? "secondary"
                  : "destructive"
            }
            className={cn(
              "text-xs font-medium",
              course.level === "básico" && "bg-edutech-secondary text-white",
              course.level === "intermedio" &&
                "bg-edutech-warning text-gray-900",
              course.level === "avanzado" && "bg-edutech-danger text-white",
            )}
          >
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </Badge>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-2 group-hover:text-edutech-primary transition-colors">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-gray-600 font-medium">{course.instructor}</p>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-edutech-warning text-edutech-warning" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{formatStudents(course.students)} estudiantes</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex flex-col">
            {course.isFree ? (
              <span className="text-lg font-bold text-edutech-secondary">
                Gratis
              </span>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(course.price)}
                </span>
              </div>
            )}
          </div>
          <Button
            size="sm"
            className="bg-edutech-primary hover:bg-edutech-primary-dark text-white font-medium px-4"
          >
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
}
