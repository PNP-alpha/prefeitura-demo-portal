import { Calendar, User, ArrowRight, Clock, Eye, Flame, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Nova Praça Inaugurada no Centro da Cidade",
      summary: "A prefeitura inaugurou uma nova praça com área de lazer completa para famílias e atividades esportivas.",
      date: "2024-01-15",
      author: "Assessoria de Imprensa",
      category: "Obras",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "3 min",
      views: 1250,
      isHot: true,
      isTrending: false
    },
    {
      id: 2,
      title: "Campanha de Vacinação Contra a Gripe 2024 - Agendamento Disponível",
      summary: "Inicia na próxima segunda-feira a campanha anual de vacinação contra influenza para toda a população.",
      date: "2024-01-10",
      author: "Secretaria de Saúde",
      category: "Saúde",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "2 min",
      views: 890,
      isHot: false,
      isTrending: true
    },
    {
      id: 3,
      title: "Novo Sistema de Coleta Seletiva em Toda a Cidade",
      summary: "A cidade implementa novo sistema de coleta seletiva para melhorar a sustentabilidade urbana e preservação do meio ambiente.",
      date: "2024-01-05",
      author: "Secretaria do Meio Ambiente",
      category: "Meio Ambiente",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "4 min",
      views: 567,
      isHot: false,
      isTrending: false
    },
    {
      id: 4,
      title: "Inscrições Abertas para Cursos Profissionalizantes Gratuitos",
      summary: "Prefeitura oferece cursos gratuitos de capacitação profissional para a comunidade local.",
      date: "2023-12-28",
      author: "Secretaria de Educação",
      category: "Educação",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "5 min",
      views: 423,
      isHot: false,
      isTrending: false
    },
    {
      id: 5,
      title: "Obras de Infraestrutura na Avenida Principal",
      summary: "Início das obras de revitalização da principal avenida da cidade com nova iluminação e paisagismo.",
      date: "2024-01-12",
      author: "Secretaria de Obras",
      category: "Obras",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "3 min",
      views: 678,
      isHot: false,
      isTrending: true
    },
    {
      id: 6,
      title: "Festival de Cultura Local 2024 - Programação Completa",
      summary: "Confira a programação completa do maior evento cultural da cidade com shows, oficinas e gastronomia local.",
      date: "2024-01-08",
      author: "Secretaria de Cultura",
      category: "Cultura",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      readTime: "6 min",
      views: 1100,
      isHot: true,
      isTrending: false
    }
  ];

  const categories = ["Todas", "Obras", "Saúde", "Educação", "Meio Ambiente", "Cultura"];
  
  const liveNews = [
    { title: "Trânsito interditado na Rua XV de Novembro", time: "há 15 min" },
    { title: "Campanha de vacinação atinge 80% da meta", time: "há 30 min" },
    { title: "Nova linha de ônibus entra em operação", time: "há 1h" }
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
      'Cultura': 'bg-pink-500/10 text-pink-700 border-pink-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-700 border-gray-200';
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Live News Bar */}
        <div className="bg-red-600 text-white py-2 px-4 rounded-lg mb-8 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm">AO VIVO</span>
            </div>
            <div className="flex gap-8 overflow-x-auto">
              {liveNews.map((item, index) => (
                <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-sm">{item.title}</span>
                  <span className="text-xs opacity-80">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header with Tabs */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Notícias da Cidade
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acompanhe as principais novidades e acontecimentos em tempo real
            </p>
          </div>

          <Tabs defaultValue="Todas" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs md:text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Featured News */}
                  <div className="lg:col-span-2">
                    <Card className="news-card overflow-hidden mb-6">
                      <div className="relative">
                        <img
                          src={news[0].image}
                          alt={news[0].title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                        {news[0].isHot && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-red-600 text-white border-0">
                              <Flame className="h-3 w-3 mr-1" />
                              Quente
                            </Badge>
                          </div>
                        )}
                        {news[0].isTrending && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-orange-600 text-white border-0">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Tendência
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className={`${getCategoryColor(news[0].category)} border`}>
                            {news[0].category}
                          </Badge>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            Principal
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl md:text-3xl mb-4 line-clamp-2">
                          {news[0].title}
                        </CardTitle>
                        <CardDescription className="text-lg leading-relaxed mb-6">
                          {news[0].summary}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(news[0].date)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{news[0].readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{news[0].views}</span>
                            </div>
                          </div>
                          <Button className="institutional-button">
                            Ler Mais
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>

                    {/* Secondary News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {news.slice(1, 5).map((item) => (
                        <Card key={item.id} className="news-card overflow-hidden group">
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 left-2 flex gap-1">
                              <Badge className={`${getCategoryColor(item.category)} text-xs`}>
                                {item.category}
                              </Badge>
                              {item.isHot && (
                                <Badge className="bg-red-600 text-white text-xs">
                                  <Flame className="h-2 w-2" />
                                </Badge>
                              )}
                              {item.isTrending && (
                                <Badge className="bg-orange-600 text-white text-xs">
                                  <TrendingUp className="h-2 w-2" />
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="p-4">
                            <CardTitle className="text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                              {item.title}
                            </CardTitle>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-3 w-3" />
                                <span>{formatDate(item.date)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                <span>{item.views}</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar with Latest News */}
                  <div className="space-y-6">
                    <Card className="institutional-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Mais Lidas
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {news
                          .sort((a, b) => b.views - a.views)
                          .slice(0, 5)
                          .map((item, index) => (
                            <div key={item.id} className="flex gap-3 group cursor-pointer">
                              <div className="text-2xl font-bold text-primary/30 shrink-0">
                                {index + 1}
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                  {item.title}
                                </h4>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                  <Eye className="h-3 w-3" />
                                  <span>{item.views} visualizações</span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </CardContent>
                    </Card>

                    <Card className="institutional-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Categorias</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {categories.slice(1).map((cat) => {
                          const count = news.filter(n => n.category === cat).length;
                          return (
                            <div key={cat} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                              <span className="text-sm">{cat}</span>
                              <Badge variant="secondary" className="text-xs">
                                {count}
                              </Badge>
                            </div>
                          );
                        })}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Button size="lg" className="institutional-button" asChild>
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