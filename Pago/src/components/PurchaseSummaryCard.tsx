import { Shield, Lock, CheckCircle, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const PurchaseSummaryCard = () => {
  return (
    <Card className="bg-edutech-glass-white border-edutech-border-light backdrop-blur-sm">
      <CardContent className="p-6">
        <h3 className="font-semibold text-edutech-text-primary mb-6">
          Resumen de compra
        </h3>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-edutech-text-secondary">
              Precio del curso
            </span>
            <span className="font-medium text-edutech-text-primary">
              $89.990
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-edutech-text-muted">Descuento</span>
            <span className="text-edutech-success-green">-$0</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-edutech-text-muted">IVA (19%)</span>
            <span className="text-edutech-text-primary">$17.098</span>
          </div>

          <Separator />

          <div className="flex justify-between items-center text-lg font-bold">
            <span className="text-edutech-text-primary">Total</span>
            <span className="text-edutech-text-primary">$89.990</span>
          </div>
        </div>

        <Button className="w-full h-12 bg-edutech-blue-gradient hover:opacity-90 text-white font-semibold text-lg mb-6">
          Confirmar Compra
        </Button>

        {/* Security Badges */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-edutech-success-green/5 border border-edutech-success-green/20 rounded-lg">
            <Shield className="w-5 h-5 text-edutech-success-green flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-edutech-text-primary">
                Transacción Segura
              </p>
              <p className="text-xs text-edutech-text-muted">
                Cifrado SSL de 256 bits
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-edutech-blue/5 border border-edutech-blue/20 rounded-lg">
            <Lock className="w-5 h-5 text-edutech-blue flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-edutech-text-primary">
                Datos Protegidos
              </p>
              <p className="text-xs text-edutech-text-muted">
                No almacenamos información de pago
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-edutech-warning-yellow/5 border border-edutech-warning-yellow/20 rounded-lg">
            <CheckCircle className="w-5 h-5 text-edutech-warning-yellow flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-edutech-text-primary">
                Garantía 30 días
              </p>
              <p className="text-xs text-edutech-text-muted">
                Devolución completa sin preguntas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <RefreshCw className="w-5 h-5 text-slate-600 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-edutech-text-primary">
                Acceso inmediato
              </p>
              <p className="text-xs text-edutech-text-muted">
                Comienza a estudiar al instante
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-edutech-border-light">
          <p className="text-xs text-edutech-text-muted text-center leading-relaxed">
            Al confirmar tu compra, aceptas nuestros{" "}
            <a href="#" className="text-edutech-blue hover:underline">
              términos y condiciones
            </a>{" "}
            y{" "}
            <a href="#" className="text-edutech-blue hover:underline">
              política de privacidad
            </a>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
