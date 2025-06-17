import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const DiscountCodeSection = () => {
  const [discountCode, setDiscountCode] = useState("");

  return (
    <Card className="mb-8 bg-edutech-glass-white border-edutech-border-light backdrop-blur-sm">
      <CardContent className="p-6">
        <h3 className="font-semibold text-edutech-text-primary mb-4">
          Código de descuento
        </h3>
        <div className="flex gap-3">
          <div className="flex-1">
            <Label htmlFor="discount-code" className="sr-only">
              Código de descuento
            </Label>
            <Input
              id="discount-code"
              placeholder="Ingresa tu código de descuento"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="border-edutech-border-light focus:border-edutech-blue focus:ring-edutech-blue/20"
            />
          </div>
          <Button
            variant="outline"
            disabled={!discountCode.trim()}
            className="border-edutech-border-light text-edutech-text-secondary hover:text-edutech-text-primary hover:border-edutech-blue disabled:opacity-50"
          >
            Aplicar
          </Button>
        </div>
        <p className="text-xs text-edutech-text-muted mt-2">
          ¿Tienes un código promocional? Ingrésalo aquí para obtener descuentos
          especiales.
        </p>
      </CardContent>
    </Card>
  );
};
