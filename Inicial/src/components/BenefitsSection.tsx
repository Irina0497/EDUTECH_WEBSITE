import {
  Clock,
  HeadphonesIcon,
  Shield,
  BookOpen,
  Users,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Aprende a tu ritmo",
      description:
        "Accede a tus cursos las 24 horas del día, los 7 días de la semana. Estudia cuando quieras y desde donde quieras.",
      color: "text-edutech-light-blue",
      bgColor: "bg-edutech-light-blue/10",
    },
    {
      icon: HeadphonesIcon,
      title: "Soporte dedicado",
      description:
        "Nuestro equipo de expertos está disponible para ayudarte en cada paso de tu proceso de aprendizaje.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Shield,
      title: "Pagos seguros",
      description:
        "Plataforma de pagos 100% segura con certificación SSL. Múltiples métodos de pago disponibles.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: BookOpen,
      title: "Contenido actualizado",
      description:
        "Cursos constantemente actualizados con las últimas tendencias y tecnologías del mercado.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Users,
      title: "Comunidad activa",
      description:
        "Únete a miles de estudiantes y profesionales en nuestra comunidad de aprendizaje colaborativo.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Trophy,
      title: "Certificaciones oficiales",
      description:
        "Obtén certificados reconocidos por la industria al completar tus cursos exitosamente.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-edutech-dark-blue mb-4">
            ¿Por qué elegir EDUTECH?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una experiencia de aprendizaje única con beneficios
            diseñados para tu éxito educativo y profesional.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center`}
                    >
                      <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-edutech-dark-blue">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-edutech-dark-blue mb-4">
              ¿Listo para comenzar tu viaje de aprendizaje?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a miles de estudiantes que ya están transformando sus
              carreras con EDUTECH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-edutech-light-blue hover:bg-edutech-dark-blue text-edutech-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explorar Cursos Gratis
              </button>
              <button className="border-2 border-edutech-light-blue text-edutech-light-blue hover:bg-edutech-light-blue hover:text-edutech-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Hablar con un Asesor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
