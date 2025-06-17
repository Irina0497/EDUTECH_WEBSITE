import { Play, Users, Clock, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CourseInfoCard = () => {
  return (
    <Card className="mb-8 bg-edutech-glass-white border-edutech-border-light backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="relative w-48 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30"
              >
                <Play className="w-6 h-6 text-white ml-1" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-edutech-text-primary mb-2">
              Desarrollo Full Stack con React y Node.js
            </h1>
            <p className="text-edutech-text-secondary mb-4 leading-relaxed">
              Aprende a crear aplicaciones web completas desde cero. Domina
              React, Node.js, Express y MongoDB para convertirte en un
              desarrollador full stack profesional.
            </p>

            <div className="flex items-center gap-6 text-sm text-edutech-text-muted">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>40 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2,847 estudiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certificado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-edutech-warning-yellow text-edutech-warning-yellow" />
                  <span className="font-medium text-edutech-text-primary">
                    4.8
                  </span>
                </div>
                <span>(1,234 reseñas)</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
