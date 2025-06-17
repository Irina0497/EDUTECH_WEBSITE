export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  image: string;
  price: number;
  isFree: boolean;
  category: string;
  level: "básico" | "intermedio" | "avanzado";
  rating: number;
  students: number;
  duration: string;
  status: "published" | "draft" | "pending";
}

export interface Filter {
  category: string;
  level: string;
  priceRange: string;
}

export interface SearchState {
  query: string;
  filters: Filter;
}
