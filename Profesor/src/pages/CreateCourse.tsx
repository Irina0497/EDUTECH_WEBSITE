import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeft,
  Upload,
  X,
  Plus,
  Eye,
  Save,
  FileVideo,
  Image as ImageIcon,
  Clock,
  DollarSign,
  Users,
  BookOpen,
  Star,
  AlertCircle,
  Settings,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CourseModule {
  id: string;
  title: string;
  description: string;
  videoFile?: File;
  duration: string;
}

interface CourseRequirement {
  id: string;
  text: string;
}

interface CourseObjective {
  id: string;
  text: string;
}

export default function CreateCourse() {
  const [courseData, setCourseData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    level: "",
    language: "spanish",
    price: "",
    duration: "",
    maxStudents: "",
    thumbnail: null as File | null,
    promotionalVideo: null as File | null,
    tags: [] as string[],
    isPublished: false,
    certificateEnabled: true,
    forumEnabled: true,
    downloadableResources: true,
  });

  const [modules, setModules] = useState<CourseModule[]>([
    { id: "1", title: "", description: "", duration: "" },
  ]);

  const [requirements, setRequirements] = useState<CourseRequirement[]>([
    { id: "1", text: "" },
  ]);

  const [objectives, setObjectives] = useState<CourseObjective[]>([
    { id: "1", text: "" },
  ]);

  const [currentTag, setCurrentTag] = useState("");

  const categories = [
    "Programación",
    "Diseño",
    "Marketing Digital",
    "Data Science",
    "Inteligencia Artificial",
    "Fotografía",
    "Video y Animación",
    "Música",
    "Negocios",
    "Idiomas",
    "Ciberseguridad",
    "Desarrollo Personal",
  ];

  const levels = [
    "Principiante",
    "Intermedio",
    "Avanzado",
    "Todos los niveles",
  ];

  const addModule = () => {
    const newModule: CourseModule = {
      id: Date.now().toString(),
      title: "",
      description: "",
      duration: "",
    };
    setModules([...modules, newModule]);
  };

  const removeModule = (id: string) => {
    setModules(modules.filter((module) => module.id !== id));
  };

  const updateModule = (
    id: string,
    field: keyof CourseModule,
    value: string | File,
  ) => {
    setModules(
      modules.map((module) =>
        module.id === id ? { ...module, [field]: value } : module,
      ),
    );
  };

  const addRequirement = () => {
    const newRequirement: CourseRequirement = {
      id: Date.now().toString(),
      text: "",
    };
    setRequirements([...requirements, newRequirement]);
  };

  const removeRequirement = (id: string) => {
    setRequirements(requirements.filter((req) => req.id !== id));
  };

  const updateRequirement = (id: string, text: string) => {
    setRequirements(
      requirements.map((req) => (req.id === id ? { ...req, text } : req)),
    );
  };

  const addObjective = () => {
    const newObjective: CourseObjective = {
      id: Date.now().toString(),
      text: "",
    };
    setObjectives([...objectives, newObjective]);
  };

  const removeObjective = (id: string) => {
    setObjectives(objectives.filter((obj) => obj.id !== id));
  };

  const updateObjective = (id: string, text: string) => {
    setObjectives(
      objectives.map((obj) => (obj.id === id ? { ...obj, text } : obj)),
    );
  };

  const addTag = () => {
    if (currentTag.trim() && !courseData.tags.includes(currentTag.trim())) {
      setCourseData({
        ...courseData,
        tags: [...courseData.tags, currentTag.trim()],
      });
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setCourseData({
      ...courseData,
      tags: courseData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Course Data:", courseData);
    console.log("Modules:", modules);
    console.log("Requirements:", requirements);
    console.log("Objectives:", objectives);
    // Here you would implement the actual course creation logic
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Crear Nuevo Curso
              </h1>
              <p className="text-gray-600">
                Completa la información para crear tu curso
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Vista previa
            </Button>
            <Button variant="outline">
              <Save className="h-4 w-4 mr-2" />
              Guardar borrador
            </Button>
            <Button className="bg-edutech-accent hover:bg-edutech-primary">
              Publicar curso
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-edutech-accent" />
                Información Básica
              </CardTitle>
              <CardDescription>
                Proporciona la información principal de tu curso
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Título del curso *</Label>
                  <Input
                    id="title"
                    placeholder="Ej: Desarrollo Web con React desde cero"
                    value={courseData.title}
                    onChange={(e) =>
                      setCourseData({ ...courseData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subtitle">Subtítulo</Label>
                  <Input
                    id="subtitle"
                    placeholder="Descripción breve del curso"
                    value={courseData.subtitle}
                    onChange={(e) =>
                      setCourseData({ ...courseData, subtitle: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción detallada *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe tu curso en detalle: qué aprenderán los estudiantes, metodología, etc."
                  className="min-h-[120px]"
                  value={courseData.description}
                  onChange={(e) =>
                    setCourseData({
                      ...courseData,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Categoría *</Label>
                  <Select
                    value={courseData.category}
                    onValueChange={(value) =>
                      setCourseData({ ...courseData, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Nivel *</Label>
                  <Select
                    value={courseData.level}
                    onValueChange={(value) =>
                      setCourseData({ ...courseData, level: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <Select
                    value={courseData.language}
                    onValueChange={(value) =>
                      setCourseData({ ...courseData, language: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spanish">Español</SelectItem>
                      <SelectItem value="english">Inglés</SelectItem>
                      <SelectItem value="portuguese">Portugués</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label>Etiquetas</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="Agregar etiqueta (Ej: JavaScript, Frontend)"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTag())
                    }
                  />
                  <Button type="button" onClick={addTag} variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courseData.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {tag}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => removeTag(tag)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing and Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-edutech-accent" />
                Precio y Detalles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Precio (MXN) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="999"
                    value={courseData.price}
                    onChange={(e) =>
                      setCourseData({ ...courseData, price: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duración total</Label>
                  <Input
                    id="duration"
                    placeholder="12 horas"
                    value={courseData.duration}
                    onChange={(e) =>
                      setCourseData({ ...courseData, duration: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxStudents">Máx. estudiantes</Label>
                  <Input
                    id="maxStudents"
                    type="number"
                    placeholder="Sin límite"
                    value={courseData.maxStudents}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        maxStudents: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Estado</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Switch
                      checked={courseData.isPublished}
                      onCheckedChange={(checked) =>
                        setCourseData({ ...courseData, isPublished: checked })
                      }
                    />
                    <Label className="text-sm">
                      {courseData.isPublished ? "Publicado" : "Borrador"}
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-edutech-accent" />
                Multimedia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Thumbnail */}
                <div className="space-y-2">
                  <Label>Imagen miniatura del curso *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Arrastra una imagen aquí o haz clic para seleccionar
                    </p>
                    <p className="text-xs text-gray-500">
                      Recomendado: 1280x720px, JPG o PNG
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        setCourseData({
                          ...courseData,
                          thumbnail: e.target.files?.[0] || null,
                        })
                      }
                    />
                    <Button type="button" variant="outline" className="mt-2">
                      <Upload className="h-4 w-4 mr-2" />
                      Seleccionar imagen
                    </Button>
                  </div>
                </div>

                {/* Promotional Video */}
                <div className="space-y-2">
                  <Label>Video promocional</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <FileVideo className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Video de presentación del curso
                    </p>
                    <p className="text-xs text-gray-500">
                      Máximo 2 minutos, MP4
                    </p>
                    <input
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) =>
                        setCourseData({
                          ...courseData,
                          promotionalVideo: e.target.files?.[0] || null,
                        })
                      }
                    />
                    <Button type="button" variant="outline" className="mt-2">
                      <Upload className="h-4 w-4 mr-2" />
                      Seleccionar video
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Structure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-edutech-accent" />
                Estructura del Curso
              </CardTitle>
              <CardDescription>
                Organiza el contenido en módulos o lecciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  className="border rounded-lg p-4 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Módulo {index + 1}</h4>
                    {modules.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeModule(module.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Título del módulo</Label>
                      <Input
                        placeholder="Ej: Introducción a React"
                        value={module.title}
                        onChange={(e) =>
                          updateModule(module.id, "title", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Duración estimada</Label>
                      <Input
                        placeholder="Ej: 45 minutos"
                        value={module.duration}
                        onChange={(e) =>
                          updateModule(module.id, "duration", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Descripción del módulo</Label>
                    <Textarea
                      placeholder="Describe qué contenido incluye este módulo"
                      value={module.description}
                      onChange={(e) =>
                        updateModule(module.id, "description", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Video del módulo</Label>
                    <div className="border-2 border-dashed border-gray-200 rounded p-4 text-center">
                      <FileVideo className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={(e) =>
                          updateModule(
                            module.id,
                            "videoFile",
                            e.target.files?.[0] || "",
                          )
                        }
                      />
                      <Button type="button" variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Subir video
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={addModule}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Agregar módulo
              </Button>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-edutech-accent" />
                Requisitos
              </CardTitle>
              <CardDescription>
                ¿Qué necesitan saber los estudiantes antes de tomar este curso?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={requirement.id} className="flex gap-2">
                  <Input
                    placeholder={`Requisito ${index + 1}`}
                    value={requirement.text}
                    onChange={(e) =>
                      updateRequirement(requirement.id, e.target.value)
                    }
                  />
                  {requirements.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeRequirement(requirement.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addRequirement}>
                <Plus className="h-4 w-4 mr-2" />
                Agregar requisito
              </Button>
            </CardContent>
          </Card>

          {/* Learning Objectives */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-edutech-accent" />
                Objetivos de Aprendizaje
              </CardTitle>
              <CardDescription>
                ¿Qué aprenderán los estudiantes al completar este curso?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {objectives.map((objective, index) => (
                <div key={objective.id} className="flex gap-2">
                  <Input
                    placeholder={`Objetivo ${index + 1}`}
                    value={objective.text}
                    onChange={(e) =>
                      updateObjective(objective.id, e.target.value)
                    }
                  />
                  {objectives.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeObjective(objective.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addObjective}>
                <Plus className="h-4 w-4 mr-2" />
                Agregar objetivo
              </Button>
            </CardContent>
          </Card>

          {/* Course Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-edutech-accent" />
                Configuraciones Adicionales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Certificado</Label>
                    <p className="text-sm text-gray-500">
                      Emitir certificado al completar
                    </p>
                  </div>
                  <Switch
                    checked={courseData.certificateEnabled}
                    onCheckedChange={(checked) =>
                      setCourseData({
                        ...courseData,
                        certificateEnabled: checked,
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">
                      Foro de discusión
                    </Label>
                    <p className="text-sm text-gray-500">
                      Permitir Q&A entre estudiantes
                    </p>
                  </div>
                  <Switch
                    checked={courseData.forumEnabled}
                    onCheckedChange={(checked) =>
                      setCourseData({ ...courseData, forumEnabled: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">
                      Recursos descargables
                    </Label>
                    <p className="text-sm text-gray-500">
                      Incluir materiales extra
                    </p>
                  </div>
                  <Switch
                    checked={courseData.downloadableResources}
                    onCheckedChange={(checked) =>
                      setCourseData({
                        ...courseData,
                        downloadableResources: checked,
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alert */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Asegúrate de completar todos los campos obligatorios antes de
              publicar tu curso. Podrás editarlo después de la publicación.
            </AlertDescription>
          </Alert>

          {/* Submit Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <Button type="button" variant="outline">
              Cancelar
            </Button>
            <Button type="button" variant="outline">
              <Save className="h-4 w-4 mr-2" />
              Guardar borrador
            </Button>
            <Button
              type="submit"
              className="bg-edutech-accent hover:bg-edutech-primary"
            >
              Crear curso
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
