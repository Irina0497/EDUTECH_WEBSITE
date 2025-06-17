import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import { categories, levels, priceRanges } from "@/data/courses";
import { Filter as FilterType } from "@/lib/types";

interface SearchAndFiltersProps {
  searchQuery: string;
  filters: FilterType;
  onSearchChange: (query: string) => void;
  onFiltersChange: (filters: FilterType) => void;
  resultsCount?: number;
}

export default function SearchAndFilters({
  searchQuery,
  filters,
  onSearchChange,
  onFiltersChange,
  resultsCount,
}: SearchAndFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters =
    filters.category !== "Todos" ||
    filters.level !== "Todos" ||
    filters.priceRange !== "Todos";

  const clearFilters = () => {
    onFiltersChange({
      category: "Todos",
      level: "Todos",
      priceRange: "Todos",
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Buscar cursos por nombre o palabra clave..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 h-12 text-base border-gray-200 focus:border-edutech-primary focus:ring-edutech-primary"
        />
      </div>

      {/* Filter Toggle and Clear Button */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-700 border-gray-200 hover:bg-gray-50"
        >
          <Filter className="w-4 h-4" />
          Filtros
          {hasActiveFilters && (
            <span className="ml-1 bg-edutech-primary text-white text-xs px-1.5 py-0.5 rounded-full">
              •
            </span>
          )}
        </Button>

        <div className="flex items-center gap-4">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
              Limpiar filtros
            </Button>
          )}
          {resultsCount !== undefined && (
            <span className="text-sm text-gray-600">
              {resultsCount} curso{resultsCount !== 1 ? "s" : ""} encontrado
              {resultsCount !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Categoría
            </label>
            <Select
              value={filters.category}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, category: value })
              }
            >
              <SelectTrigger className="border-gray-200 focus:border-edutech-primary focus:ring-edutech-primary">
                <SelectValue placeholder="Seleccionar categoría" />
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
            <label className="text-sm font-medium text-gray-700">Nivel</label>
            <Select
              value={filters.level}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, level: value })
              }
            >
              <SelectTrigger className="border-gray-200 focus:border-edutech-primary focus:ring-edutech-primary">
                <SelectValue placeholder="Seleccionar nivel" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level === "Todos"
                      ? level
                      : level.charAt(0).toUpperCase() + level.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Precio</label>
            <Select
              value={filters.priceRange}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, priceRange: value })
              }
            >
              <SelectTrigger className="border-gray-200 focus:border-edutech-primary focus:ring-edutech-primary">
                <SelectValue placeholder="Seleccionar rango" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
}
