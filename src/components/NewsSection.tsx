import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Nova Praça Inaugurada no Centro da Cidade",
      summary: "A prefeitura inaugurou uma nova praça com área de lazer completa para famílias.",
      date: "2024-01-15",
      author: "Assessoria de Imprensa",
      category: "Obras",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Campanha de Vacinação Contra a Gripe",
      summary: "Inicia na próxima segunda-feira a campanha anual de vacinação contra influenza.",
      date: "2024-01-10",
      author: "Secretaria de Saúde",
      category: "Saúde",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "2 min"
    },
    {
      id: 3,
      title: "Novo Sistema de Coleta Seletiva",
      summary: "A cidade implementa novo sistema de coleta seletiva para melhorar a sustentabilidade.",
      date: "2024-01-05",
      author: "Secretaria do Meio Ambiente",
      category: "Meio Ambiente",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Inscrições Abertas para Cursos Profissionalizantes",
      summary: "Prefeitura oferece cursos gratuitos de capacitação profissional para a comunidade.",
      date: "2023-12-28",
      author: "Secretaria de Educação",
      category: "Educação",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "5 min"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Obras': 'bg-blue-500/10 text-blue-700 border-blue-200',
      'Saúde': 'bg-green-500/10 text-green-700 border-green-200',
      'Meio Ambiente': 'bg-emerald-500/10 text-emerald-700 border-emerald-200',
      'Educação': 'bg-purple-500/10 text-purple-700 border-purple-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-700 border-gray-200';
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Notícias e Avisos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mantenha-se informado sobre as principais novidades e acontecimentos da nossa cidade.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <Card className="news-card overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={`${getCategoryColor(news[0].category)} border`}>
                    {news[0].category}
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Destaque
                  </Badge>
                </div>
                <CardHeader className="px-0">
                  <CardTitle className="text-2xl md:text-3xl mb-4 line-clamp-2">
                    {news[0].title}
                  </CardTitle>
                  <CardDescription className="text-lg leading-relaxed mb-6">
                    {news[0].summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(news[0].date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{news[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{news[0].readTime}</span>
                    </div>
                  </div>
                  <Button className="institutional-button">
                    Ler Notícia Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {news.slice(1).map((item) => (
            <Card key={item.id} className="news-card overflow-hidden h-full group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(item.category)} border backdrop-blur-sm`}>
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm">
                  {item.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Ler Mais
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="institutional-button-outline" asChild>
            <a href="/news">
              Ver Todas as Notícias
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;