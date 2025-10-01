import { Building2, FileText, CreditCard, MessageSquare, Car, Users, Heart, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Emissão de Documentos",
      description: "Certidões, atestados e documentos oficiais",
      category: "Documentos",
      status: "Disponível",
      rating: 4.8,
      users: 1250
    },
    {
      icon: <Building2 className="h-8 w-8" />, 
      title: "Alvarás e Licenças",
      description: "Solicitação de alvarás de funcionamento e construção",
      category: "Licenças",
      status: "Disponível", 
      rating: 4.5,
      users: 890
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "IPTU Online",
      description: "Consulta e pagamento do Imposto Predial",
      category: "Tributário",
      status: "Disponível",
      rating: 4.9,
      users: 2100
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Ouvidoria",
      description: "Canal de comunicação com o cidadão",
      category: "Atendimento",
      status: "Disponível",
      rating: 4.3,
      users: 567
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Trânsito e Multas",
      description: "Consulta de multas e recursos",
      category: "Trânsito",
      status: "Manutenção",
      rating: 4.1,
      users: 1450
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Assistência Social", 
      description: "Programas sociais e benefícios",
      category: "Social",
      status: "Disponível",
      rating: 4.6,
      users: 980
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Saúde",
      description: "Agendamento de consultas e exames",
      category: "Saúde",
      status: "Disponível",
      rating: 4.7,
      users: 1680
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educação",
      description: "Matrículas e informações escolares", 
      category: "Educação",
      status: "Disponível",
      rating: 4.4,
      users: 1120
    }
  ];

  const categories = ["Todos", "Documentos", "Licenças", "Tributário", "Atendimento", "Trânsito", "Social", "Saúde", "Educação"];

  const handleSearch = (query: string, category?: string) => {
    setSearchTerm(query);
    if (category !== undefined) {
      setSelectedCategory(category);
    }
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "Todos" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    return status === "Disponível" 
      ? "bg-green-500/10 text-green-700 border-green-200"
      : "bg-yellow-500/10 text-yellow-700 border-yellow-200";
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-24 bg-secondary">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Serviços Online</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Acesse todos os serviços da prefeitura de forma rápida e prática
          </p>
          
          {/* Advanced Search */}
          <SearchBar 
            onSearch={handleSearch}
            placeholder="Buscar serviços..."
            categories={categories}
          />
        </div>

        {/* Services Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{services.length}</div>
              <div className="text-sm text-muted-foreground">Serviços Disponíveis</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{services.filter(s => s.status === "Disponível").length}</div>
              <div className="text-sm text-muted-foreground">Online Agora</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{services.reduce((acc, s) => acc + s.users, 0).toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Usuários Atendidos</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{(services.reduce((acc, s) => acc + s.rating, 0) / services.length).toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <Card key={index} className="service-card group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 text-primary group-hover:text-primary-dark transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription>
                  {service.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    {service.category}
                  </Badge>
                  <Badge className={`${getStatusColor(service.status)} border text-xs`}>
                    {service.status}
                  </Badge>
                </div>

                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>⭐ {service.rating}</span>
                  <span>{service.users} usuários</span>
                </div>

                <Button 
                  className="w-full institutional-button"
                  disabled={service.status === "Manutenção"}
                >
                  {service.status === "Manutenção" ? "Em Manutenção" : "Acessar Serviço"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nenhum serviço encontrado para "{searchTerm}"</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearchTerm(""); setSelectedCategory(""); }}
              className="mt-4"
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Services;
