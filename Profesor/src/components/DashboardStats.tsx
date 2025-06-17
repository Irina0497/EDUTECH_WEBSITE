import { Users, DollarSign, BookOpen, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
  change?: string;
}

function StatCard({
  title,
  value,
  icon: Icon,
  iconColor,
  iconBg,
  change,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center">
        <div className={`${iconBg} p-3 rounded-lg`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {change && (
              <span className="ml-2 text-sm text-green-600 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                {change}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardStats() {
  const stats = [
    {
      title: "Total de Alumnos",
      value: "1,247",
      icon: Users,
      iconColor: "text-edutech-accent",
      iconBg: "bg-blue-50",
      change: "+12%",
    },
    {
      title: "Ingresos del Mes",
      value: "$15,892",
      icon: DollarSign,
      iconColor: "text-green-600",
      iconBg: "bg-green-50",
      change: "+8%",
    },
    {
      title: "Cursos Activos",
      value: "8",
      icon: BookOpen,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
