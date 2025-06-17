import { Check, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CourseDetailsGrid = () => {
  const courseFeatures = [
    "Proyectos prácticos reales",
    "Acceso de por vida",
    "Comunidad exclusiva",
    "Mentorías grupales",
    "Recursos descargables",
    "Certificado profesional",
  ];

  const technologies = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Course Features */}
      <Card className="bg-edutech-glass-white border-edutech-border-light backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="font-semibold text-edutech-text-primary mb-4">
            Lo que incluye
          </h3>
          <ul className="space-y-3">
            {courseFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-sm text-edutech-text-secondary"
              >
                <Check className="w-4 h-4 text-edutech-success-green flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Technologies */}
      <Card className="bg-edutech-glass-white border-edutech-border-light backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="font-semibold text-edutech-text-primary mb-4">
            Tecnologías
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-edutech-blue/10 text-edutech-blue border-edutech-blue/20 hover:bg-edutech-blue/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Instructor */}
      <Card className="bg-edutech-glass-white border-edutech-border-light backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="font-semibold text-edutech-text-primary mb-4">
            Instructor
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-edutech-blue-gradient flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-medium text-edutech-text-primary">
                Carlos Martínez
              </p>
              <p className="text-sm text-edutech-text-muted">
                Senior Full Stack Developer
              </p>
              <p className="text-xs text-edutech-text-muted">
                5 años de experiencia
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
