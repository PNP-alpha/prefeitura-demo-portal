import { AlertTriangle, Megaphone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BreakingNews = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const breakingNews = {
    title: "ATENÇÃO: Campanha de Vacinação COVID-19 - 3ª Dose",
    description: "Agendamento disponível para maiores de 60 anos. Clique aqui para mais informações.",
    type: "urgent", // urgent, info, warning
    link: "/news"
  };

  if (!isVisible) return null;

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "urgent":
        return "bg-red-600 text-white border-red-700";
      case "warning":
        return "bg-yellow-500 text-yellow-900 border-yellow-600";
      default:
        return "bg-primary text-primary-foreground border-primary";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "urgent":
        return <AlertTriangle className="h-4 w-4" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Megaphone className="h-4 w-4" />;
    }
  };

  return (
    <div className={`${getTypeStyles(breakingNews.type)} border-b animate-fade-in`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center gap-2 shrink-0">
              {getIcon(breakingNews.type)}
              <span className="font-semibold text-sm">URGENTE</span>
            </div>
            <div className="min-w-0 flex-1">
              <a 
                href={breakingNews.link}
                className="hover:underline block"
              >
                <h3 className="font-semibold text-sm line-clamp-1">
                  {breakingNews.title}
                </h3>
                <p className="text-sm opacity-90 line-clamp-1">
                  {breakingNews.description}
                </p>
              </a>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="shrink-0 h-8 w-8 p-0 hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;