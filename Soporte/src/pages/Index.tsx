import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  HelpCircle,
  Mail,
  MessageSquare,
  Shield,
  User,
  Clock,
  ChevronRight,
} from "lucide-react";

const SupportContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    problemType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: "", email: "", problemType: "", message: "" });
    }, 3000);
  };

  const problemTypes = [
    "Problemas técnicos con la plataforma",
    "Dificultades de acceso o login",
    "Problemas con cursos o contenido",
    "Dudas sobre facturación",
    "Problemas con certificados",
    "Otros",
  ];

  const mockTickets = [
    {
      id: "TK-2024-001",
      status: "En progreso",
      subject: "Error al cargar videos",
      date: "15 Ene 2024",
    },
    {
      id: "TK-2024-002",
      status: "Resuelto",
      subject: "Problema con certificado",
      date: "12 Ene 2024",
    },
    {
      id: "TK-2024-003",
      status: "Pendiente",
      subject: "Consulta sobre curso",
      date: "10 Ene 2024",
    },
  ];

  const faqItems = [
    {
      question: "¿Cómo puedo restablecer mi contraseña?",
      answer:
        "Haz clic en 'Olvidé mi contraseña' en la página de login y sigue las instrucciones enviadas a tu email.",
    },
    {
      question: "¿Dónde puedo encontrar mis certificados?",
      answer:
        "Los certificados están disponibles en tu perfil, sección 'Mis Certificados', una vez completado el curso.",
    },
    {
      question: "¿Cómo puedo contactar directamente a un instructor?",
      answer:
        "Utiliza el sistema de mensajería dentro de cada curso o envía un ticket de soporte específico.",
    },
    {
      question: "¿Qué hago si un video no se reproduce?",
      answer:
        "Verifica tu conexión a internet, actualiza tu navegador o prueba con otro navegador. Si persiste el problema, contacta soporte.",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-edutech-gradient flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-success-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                ¡Ticket Enviado!
              </h2>
              <p className="text-text-secondary mb-4">
                Tu solicitud de soporte ha sido recibida. Te contactaremos
                pronto.
              </p>
              <Badge
                variant="outline"
                className="bg-success-green-50 text-success-green border-success-green"
              >
                Ticket #TK-2024-
                {Math.floor(Math.random() * 1000)
                  .toString()
                  .padStart(3, "0")}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-edutech-gradient">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-text-primary">
                EDUTECH
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-success-green" />
              <span className="text-sm text-text-secondary">
                Soporte Seguro
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Centro de Soporte EDUTECH
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            ¿Necesitas ayuda? Estamos aquí para apoyarte en tu experiencia de
            aprendizaje. Envía tu consulta y nuestro equipo te responderá
            pronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Support Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-text-primary">
                  <MessageSquare className="w-5 h-5 text-primary-blue" />
                  Nuevo Ticket de Soporte
                </CardTitle>
                <CardDescription className="text-text-secondary">
                  Completa el formulario para enviarnos tu consulta
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="text-text-primary font-medium"
                      >
                        Nombre Completo *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Ingresa tu nombre completo"
                          className="pl-10 border-gray-300 focus:border-primary-blue focus:ring-primary-blue rounded-radius-sm"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-text-primary font-medium"
                      >
                        Correo Electrónico *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          className="pl-10 border-gray-300 focus:border-primary-blue focus:ring-primary-blue rounded-radius-sm"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="problemType"
                      className="text-text-primary font-medium"
                    >
                      Tipo de Problema *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("problemType", value)
                      }
                      required
                    >
                      <SelectTrigger className="border-gray-300 focus:border-primary-blue focus:ring-primary-blue rounded-radius-sm">
                        <SelectValue placeholder="Selecciona el tipo de problema" />
                      </SelectTrigger>
                      <SelectContent>
                        {problemTypes.map((type, index) => (
                          <SelectItem key={index} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-text-primary font-medium"
                    >
                      Describe tu problema *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe detalladamente el problema que estás experimentando..."
                      className="min-h-32 border-gray-300 focus:border-primary-blue focus:ring-primary-blue rounded-radius-sm resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary-blue hover:bg-primary-blue-dark text-white font-medium py-3 rounded-radius-sm transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando ticket...
                      </div>
                    ) : (
                      "Enviar Ticket"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Ticket History Section */}
            <Card className="mt-8 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-text-primary">
                  <Clock className="w-5 h-5 text-primary-blue" />
                  Historial de Tickets
                </CardTitle>
                <CardDescription className="text-text-secondary">
                  Revisa el estado de tus solicitudes anteriores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-radius-md hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-text-primary">
                            {ticket.id}
                          </span>
                          <Badge
                            variant={
                              ticket.status === "Resuelto"
                                ? "default"
                                : ticket.status === "En progreso"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              ticket.status === "Resuelto"
                                ? "bg-success-green text-white"
                                : ticket.status === "En progreso"
                                  ? "bg-warning-yellow text-black"
                                  : "bg-gray-200 text-gray-700"
                            }
                          >
                            {ticket.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-text-secondary mt-1">
                          {ticket.subject}
                        </p>
                        <p className="text-xs text-text-muted mt-1">
                          {ticket.date}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-text-muted" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Help Card */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-primary-blue-50 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-text-primary">
                  <HelpCircle className="w-5 h-5 text-primary-blue" />
                  Ayuda Rápida
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Alert className="border-primary-blue-100 bg-primary-blue-50">
                    <AlertDescription className="text-text-secondary">
                      <strong>Tiempo promedio de respuesta:</strong> 24-48 horas
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-3">
                    <h4 className="font-medium text-text-primary">
                      Enlaces Útiles:
                    </h4>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="flex items-center gap-2 text-primary-blue hover:text-primary-blue-dark transition-colors"
                      >
                        <ChevronRight className="w-3 h-3" />
                        Guía de usuario
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-primary-blue hover:text-primary-blue-dark transition-colors"
                      >
                        <ChevronRight className="w-3 h-3" />
                        Tutoriales en video
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-primary-blue hover:text-primary-blue-dark transition-colors"
                      >
                        <ChevronRight className="w-3 h-3" />
                        Centro de descargas
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-primary-blue hover:text-primary-blue-dark transition-colors"
                      >
                        <ChevronRight className="w-3 h-3" />
                        Contacto directo
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-text-primary">
                  Preguntas Frecuentes
                </CardTitle>
                <CardDescription className="text-text-secondary">
                  Encuentra respuestas a las consultas más comunes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border rounded-radius-sm px-4"
                    >
                      <AccordionTrigger className="text-left text-sm font-medium text-text-primary hover:text-primary-blue">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-text-secondary pt-2 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-success-green" />
              <span className="text-sm text-text-secondary">
                Soporte seguro y confidencial
              </span>
            </div>
            <p className="text-text-muted text-sm">
              © 2024 EDUTECH. Todos los derechos reservados. |
              <a
                href="#"
                className="text-primary-blue hover:text-primary-blue-dark ml-1"
              >
                Política de Privacidad
              </a>{" "}
              |
              <a
                href="#"
                className="text-primary-blue hover:text-primary-blue-dark ml-1"
              >
                Términos de Servicio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SupportContactPage;
