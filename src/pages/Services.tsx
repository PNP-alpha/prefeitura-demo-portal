import { Building2, FileText, CreditCard, MessageSquare, Car, Users, Heart, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Emissão de Documentos",
      description: "Certidões, atestados e documentos oficiais",
      category: "Documentos"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Alvarás e Licenças", 
      description: "Solicitação de alvarás de funcionamento e construção",
      category: "Licenças"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "IPTU Online",
      description: "Consulta e pagamento do Imposto Predial",
      category: "Tributário"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Ouvidoria",
      description: "Canal de comunicação com o cidadão",
      category: "Atendimento"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Trânsito e Multas",
      description: "Consulta de multas e recursos",
      category: "Trânsito"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Assistência Social",
      description: "Programas sociais e benefícios",
      category: "Social"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Saúde",
      description: "Agendamento de consultas e exames",
      category: "Saúde"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educação",
      description: "Matrículas e informações escolares",
      category: "Educação"
    }
  ];

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-card shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Portal da Prefeitura</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-foreground hover:text-primary">Início</a>
              <a href="/services" className="text-primary font-semibold">Serviços</a>
              <a href="/news" className="text-foreground hover:text-primary">Notícias</a>
              <a href="/contact" className="text-foreground hover:text-primary">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Serviços Online</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Acesse todos os serviços da prefeitura de forma rápida e prática
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Buscar serviços..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <Card key={index} className="service-card group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 text-primary group-hover:text-primary-dark">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  {service.description}
                </CardDescription>
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                    {service.category}
                  </span>
                </div>
                <Button className="w-full institutional-button">
                  Acessar Serviço
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nenhum serviço encontrado para "{searchTerm}"</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Services;