import { 
  FileText, 
  CreditCard, 
  MessageSquare, 
  Calendar,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuickAccess = () => {
  const quickLinks = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "2ª Via de Documentos",
      description: "Certidões e comprovantes",
      href: "/services",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "IPTU Online",
      description: "Consulte e pague",
      href: "/services",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Ouvidoria",
      description: "Fale conosco",
      href: "/contact",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Agendamentos",
      description: "Marque sua consulta",
      href: "/services",
      color: "text-orange-600 bg-orange-50"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefones Úteis",
      description: "Contatos importantes",
      href: "/contact",
      color: "text-red-600 bg-red-50"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Localizações",
      description: "Encontre os órgãos",
      href: "/contact",
      color: "text-teal-600 bg-teal-50"
    }
  ];

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Acesso Rápido</h2>
          <p className="text-muted-foreground">Os serviços mais procurados pelos cidadãos</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <Card key={index} className="institutional-card group cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className={`inline-flex p-3 rounded-full mb-3 ${link.color} group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1 line-clamp-2">{link.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                  {link.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-xs p-1 h-auto"
                  asChild
                >
                  <a href={link.href}>
                    Acessar
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;