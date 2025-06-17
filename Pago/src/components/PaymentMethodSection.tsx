import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { CreditCard, DollarSign } from "lucide-react";

export const PaymentMethodSection = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <Card className="mb-8 bg-edutech-glass-white border-edutech-border-light backdrop-blur-sm">
      <CardContent className="p-6">
        <h3 className="font-semibold text-edutech-text-primary mb-6">
          Método de pago
        </h3>

        <RadioGroup
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="space-y-4"
        >
          {/* WebPay */}
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-edutech-border-light hover:border-edutech-blue/50 transition-colors">
            <RadioGroupItem value="webpay" id="webpay" />
            <Label
              htmlFor="webpay"
              className="flex items-center gap-3 cursor-pointer flex-1"
            >
              <div className="w-8 h-8 bg-edutech-error-red rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-edutech-text-primary">
                    WebPay
                  </span>
                  <span className="text-xs bg-edutech-success-green/10 text-edutech-success-green px-2 py-1 rounded-full">
                    Recomendado
                  </span>
                </div>
                <p className="text-sm text-edutech-text-muted">
                  Pago seguro con tarjetas chilenas
                </p>
              </div>
            </Label>
          </div>

          {/* PayPal */}
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-edutech-border-light hover:border-edutech-blue/50 transition-colors">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label
              htmlFor="paypal"
              className="flex items-center gap-3 cursor-pointer flex-1"
            >
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-medium text-edutech-text-primary">
                  PayPal
                </span>
                <p className="text-sm text-edutech-text-muted">
                  Pago internacional seguro
                </p>
              </div>
            </Label>
          </div>

          {/* Credit Card */}
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-edutech-blue/50 bg-edutech-blue/5 transition-colors">
            <RadioGroupItem value="credit-card" id="credit-card" />
            <Label
              htmlFor="credit-card"
              className="flex items-center gap-3 cursor-pointer flex-1"
            >
              <div className="w-8 h-8 bg-edutech-blue-gradient rounded flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-medium text-edutech-text-primary">
                  Tarjeta de Crédito/Débito
                </span>
                <p className="text-sm text-edutech-text-muted">
                  Visa, Mastercard, American Express
                </p>
              </div>
            </Label>
          </div>
        </RadioGroup>

        {/* Credit Card Form */}
        {paymentMethod === "credit-card" && (
          <div className="mt-6 space-y-4 p-4 bg-edutech-blue/5 rounded-lg border border-edutech-blue/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="card-number"
                  className="text-sm font-medium text-edutech-text-primary"
                >
                  Número de tarjeta
                </Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 border-edutech-border-light focus:border-edutech-blue focus:ring-edutech-blue/20"
                />
              </div>
              <div>
                <Label
                  htmlFor="cardholder-name"
                  className="text-sm font-medium text-edutech-text-primary"
                >
                  Nombre del titular
                </Label>
                <Input
                  id="cardholder-name"
                  placeholder="Juan Pérez"
                  className="mt-1 border-edutech-border-light focus:border-edutech-blue focus:ring-edutech-blue/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="expiry-date"
                  className="text-sm font-medium text-edutech-text-primary"
                >
                  Fecha de vencimiento
                </Label>
                <Input
                  id="expiry-date"
                  placeholder="MM/YY"
                  className="mt-1 border-edutech-border-light focus:border-edutech-blue focus:ring-edutech-blue/20"
                />
              </div>
              <div>
                <Label
                  htmlFor="cvv"
                  className="text-sm font-medium text-edutech-text-primary"
                >
                  CVV
                </Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  className="mt-1 border-edutech-border-light focus:border-edutech-blue focus:ring-edutech-blue/20"
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
