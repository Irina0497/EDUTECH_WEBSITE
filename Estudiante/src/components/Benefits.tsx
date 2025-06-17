import React from "react";
import {
  Clock,
  HeadphonesIcon,
  Shield,
  BookOpen,
  Users,
  Trophy,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Aprende a tu ritmo",
    description:
      "Accede a los cursos 24/7 y estudia cuando mejor te convenga. Sin horarios fijos ni presión.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte dedicado",
    description:
      "Nuestro equipo de expertos está disponible para ayudarte con cualquier duda o problema.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Shield,
    title: "Pagos seguros",
    description:
      "Transacciones 100% seguras con encriptación SSL y múltiples métodos de pago disponibles.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BookOpen,
    title: "Contenido actualizado",
    description:
      "Cursos constantemente actualizados con las últimas tendencias y tecnologías del mercado.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Users,
    title: "Comunidad activa",
    description:
      "Conecta con miles de estudiantes, comparte experiencias y crece en una comunidad vibrante.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Trophy,
    title: "Certificaciones",
    description:
      "Obtén certificados reconocidos por la industria al completar exitosamente tus cursos.",
    color: "bg-yellow-100 text-yellow-600",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-edutech-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edutech-text mb-4">
            ¿Por qué elegir EDUTECH?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una experiencia de aprendizaje excepcional con beneficios
            únicos que te ayudarán a alcanzar tus metas educativas y
            profesionales.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-edutech-background rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-edutech-primary/20"
              >
                <div
                  className={`${benefit.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-edutech-text mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-edutech-primary to-edutech-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para comenzar tu viaje de aprendizaje?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a más de 50,000 estudiantes que ya están transformando sus
              carreras con EDUTECH.
            </p>
            <button className="bg-white text-edutech-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Comenzar ahora gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
