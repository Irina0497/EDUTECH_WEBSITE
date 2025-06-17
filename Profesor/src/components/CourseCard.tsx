import { Play, Users, Star, Clock, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CourseCardProps {
  title: string;
  category: string;
  students: number;
  rating: number;
  price?: number;
  image?: string;
  duration: string;
  status: "published" | "draft" | "pending";
}

export default function CourseCard({
  title,
  category,
  students,
  rating,
  price,
  image,
  duration,
  status,
}: CourseCardProps) {
  const statusColors = {
    published: "bg-green-100 text-green-800",
    draft: "bg-gray-100 text-gray-800",
    pending: "bg-yellow-100 text-yellow-800",
  };

  const statusText = {
    published: "Publicado",
    draft: "Borrador",
    pending: "Pendiente",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Course Image */}
      <div className="relative h-48 bg-gradient-to-br from-edutech-accent to-edutech-primary">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <Play className="h-12 w-12 text-white/70" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Editar curso</DropdownMenuItem>
              <DropdownMenuItem>Ver estadísticas</DropdownMenuItem>
              <DropdownMenuItem>Duplicar</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}
          >
            {statusText[status]}
          </span>
        </div>
      </div>

      {/* Course Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-medium text-edutech-accent bg-blue-50 px-2 py-1 rounded">
            {category}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{students.toLocaleString()} estudiantes</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          {price && (
            <div className="font-semibold text-gray-900">
              ${price.toLocaleString()}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Ver curso
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-edutech-accent hover:bg-edutech-primary"
          >
            Editar
          </Button>
        </div>
      </div>
    </div>
  );
}
