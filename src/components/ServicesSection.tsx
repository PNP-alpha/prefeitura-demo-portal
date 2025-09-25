import { FileText, Building2, CreditCard, MessageSquare, Car, Users, Heart, GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Emissão de Documentos",
      description: "Certidões, atestados e documentos oficiais online",
      color: "bg-blue-500/10 text-blue-600",
      href: "/services"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Alvarás e Licenças",
      description: "Solicite alvarás de funcionamento e construção",
      color: "bg-green-500/10 text-green-600",
      href: "/services"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "IPTU Online",
      description: "Consulte e pague o Imposto Predial pela internet",
      color: "bg-purple-500/10 text-purple-600",
      href: "/services"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Ouvidoria",
      description: "Canal direto de comunicação com o cidadão",
      color: "bg-orange-500/10 text-orange-600",
      href: "/services"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Trânsito e Multas",
      description: "Consulte multas e apresente recursos online",
      color: "bg-red-500/10 text-red-600",
      href: "/services"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Assistência Social",
      description: "Programas sociais e benefícios disponíveis",
      color: "bg-pink-500/10 text-pink-600",
      href: "/services"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Saúde",
      description: "Agendamento de consultas e exames médicos",
      color: "bg-emerald-500/10 text-emerald-600",
      href: "/services"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educação",
      description: "Matrículas e informações sobre escolas municipais",
      color: "bg-indigo-500/10 text-indigo-600",
      href: "/services"
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Serviços Online
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acesse os principais serviços da prefeitura de forma digital, rápida e segura. 
            Sua comodidade é nossa prioridade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="service-card group h-full">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="mb-6 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={service.href}>
                    Acessar
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button size="lg" className="institutional-button" asChild>
            <a href="/services">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;