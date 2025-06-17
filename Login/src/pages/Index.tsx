import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye, EyeOff, GraduationCap, User } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userType: "student",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserTypeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      userType: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", formData);

    // Simulate successful authentication and navigate to dashboard
    if (isLogin) {
      // Redirect to dashboard for students, could add teacher dashboard later
      navigate("/dashboard");
    } else {
      alert("Cuenta creada exitosamente. Redirigiendo...");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-edutech-primary/10 via-edutech-background to-edutech-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-edutech-primary rounded-full flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-edutech-secondary mb-2">
            EDUTECH
          </h1>
          <p className="text-gray-600">
            {isLogin ? "Inicia sesión en tu cuenta" : "Crea tu cuenta EDUTECH"}
          </p>
        </div>

        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl text-center text-edutech-secondary">
              {isLogin ? "Iniciar Sesión" : "Registrarse"}
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              {isLogin
                ? "Ingresa tus credenciales para continuar"
                : "Completa tus datos para crear una cuenta"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 transition-all duration-300"
            >
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-edutech-secondary">
                  Tipo de Usuario
                </Label>
                <RadioGroup
                  value={formData.userType}
                  onValueChange={handleUserTypeChange}
                  className="flex space-x-6"
                  aria-label="Selecciona tu tipo de usuario"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="student"
                      id="student"
                      className="border-edutech-primary text-edutech-primary"
                    />
                    <Label
                      htmlFor="student"
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <User className="w-4 h-4" />
                      <span>Alumno</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="teacher"
                      id="teacher"
                      className="border-edutech-dark-blue text-edutech-dark-blue"
                    />
                    <Label
                      htmlFor="teacher"
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Profesor</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-edutech-secondary"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu.email@ejemplo.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-edutech-primary focus:ring-edutech-primary"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-edutech-dark-blue"
                >
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-edutech-light-blue focus:ring-edutech-light-blue pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-edutech-primary transition-colors duration-200 focus:outline-none focus:text-edutech-primary"
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field (only for registration) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-edutech-dark-blue"
                  >
                    Confirmar Contraseña
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-edutech-light-blue focus:ring-edutech-light-blue"
                  />
                </div>
              )}

              {/* Forgot Password Link (only for login) */}
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-edutech-primary hover:text-edutech-secondary transition-colors hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-edutech-primary hover:bg-edutech-primary/90 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
              </Button>
            </form>

            {/* Toggle between Login/Register */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-edutech-primary hover:text-edutech-secondary font-medium transition-colors hover:underline"
                >
                  {isLogin ? "Regístrate" : "Inicia Sesión"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            © 2024 EDUTECH. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
