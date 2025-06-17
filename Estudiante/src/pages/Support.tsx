import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { SearchBar } from "@/components/SearchBar";
import {
  MessageCircle,
  Phone,
  Mail,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Support = () => {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Chat en vivo",
      description: "Habla con nuestro equipo de soporte",
      action: "Iniciar chat",
      available: "Disponible 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envíanos un correo electrónico",
      action: "Enviar email",
      available: "Respuesta en 24h",
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "Llámanos directamente",
      action: "Llamar ahora",
      available: "Lun-Vie 9:00-18:00",
    },
  ];

  const faqItems = [
    {
      question: "¿Cómo puedo acceder a mis cursos?",
      category: "Cursos",
    },
    {
      question: "¿Cómo reseteo mi contraseña?",
      category: "Cuenta",
    },
    {
      question: "¿Puedo descargar los materiales del curso?",
      category: "Recursos",
    },
    {
      question: "¿Cómo obtengo mi certificado?",
      category: "Certificados",
    },
  ];

  return (
    <div className="min-h-screen bg-edutech-background">
      <Sidebar />

      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-edutech-surface border-b border-gray-200 px-6 py-4">
          <div className="ml-12 lg:ml-0">
            <h1 className="text-2xl font-bold text-edutech-text">
              Centro de Soporte
            </h1>
            <p className="text-gray-600 mt-1">
              Estamos aquí para ayudarte con cualquier pregunta o problema
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Search */}
          <div className="mb-8">
            <SearchBar placeholder="Buscar en el centro de ayuda..." />
          </div>

          {/* Contact Options */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-edutech-text mb-4">
              Contacta con nosotros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="text-center">
                      <div className="bg-edutech-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-edutech-primary" size={24} />
                      </div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-500 mb-4">
                        {option.available}
                      </p>
                      <Button className="w-full bg-edutech-primary hover:bg-edutech-primary/90">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-edutech-text mb-4">
              Preguntas Frecuentes
            </h2>
            <div className="bg-edutech-surface rounded-lg border border-gray-100">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <div>
                      <p className="font-medium text-edutech-text">
                        {item.question}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.category}
                      </p>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-xl font-semibold text-edutech-text mb-4">
              Recursos útiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="text-edutech-primary" size={24} />
                    <div>
                      <CardTitle className="text-lg">
                        Guías de usuario
                      </CardTitle>
                      <CardDescription>
                        Tutoriales paso a paso para usar la plataforma
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Ver guías
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="text-edutech-primary" size={24} />
                    <div>
                      <CardTitle className="text-lg">Comunidad</CardTitle>
                      <CardDescription>
                        Conecta con otros estudiantes y comparte experiencias
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Unirse a la comunidad
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Support;
