import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string, category?: string) => void;
  placeholder?: string;
  categories?: string[];
}

const SearchBar = ({ 
  onSearch, 
  placeholder = "Buscar...", 
  categories = [] 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, selectedCategory);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onSearch(query, category);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4"
          />
        </div>
        
        {categories.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                onClick={() => handleCategorySelect("")}
                className={!selectedCategory ? "bg-primary/10" : ""}
              >
                Todas as categorias
              </DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={selectedCategory === category ? "bg-primary/10" : ""}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        
        <Button type="submit" className="institutional-button">
          <Search className="h-4 w-4" />
        </Button>
      </form>
      
      {selectedCategory && (
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Filtrando por:</span>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
            {selectedCategory}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleCategorySelect("")}
            className="h-6 px-2 text-xs"
          >
            Limpar
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;