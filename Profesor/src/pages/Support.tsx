import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, HelpCircle } from "lucide-react";

export default function Support() {
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Centro de Soporte
          </h1>
          <p className="text-gray-600">Estamos aquí para ayudarte</p>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-edutech-accent mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Chat en Vivo
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Habla directamente con nuestro equipo de soporte
              </p>
              <Button className="w-full bg-edutech-accent hover:bg-edutech-primary">
                Iniciar Chat
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Envíanos un mensaje y te responderemos pronto
              </p>
              <Button variant="outline" className="w-full">
                soporte@edutech.com
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="text-center">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Página de Soporte
              </h2>
              <p className="text-gray-600 mb-6">
                Esta página contendrá FAQs, formulario de contacto,
                documentación y recursos de ayuda para profesores.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm text-gray-500">
                  Placeholder - Implementar sistema completo de soporte
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
