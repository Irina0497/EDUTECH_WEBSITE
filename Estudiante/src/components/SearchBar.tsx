import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar = ({
  placeholder = "Buscar cursos...",
  onSearch,
}: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Solo prototipo visual - no funcionalidad real
    onSearch?.("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          name="search"
          type="text"
          placeholder={placeholder}
          className="pl-10 pr-4 py-3 bg-edutech-surface border border-gray-200 rounded-lg focus:ring-2 focus:ring-edutech-primary focus:border-transparent"
        />
      </div>
    </form>
  );
};
