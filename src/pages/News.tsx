import { Calendar, User, ArrowRight, Eye, MessageCircle, Share2, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const news = [
    {
      id: 1,
      title: "Nova Praça Inaugurada no Centro da Cidade",
      summary: "A prefeitura inaugurou uma nova praça com área de lazer completa para famílias e atividades esportivas.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-01-15",
      author: "Assessoria de Imprensa",
      category: "Obras",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true,
      views: 2450,
      comments: 23,
      shares: 45,
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Campanha de Vacinação Contra a Gripe 2024 - Agendamento Online",
      summary: "Inicia na próxima segunda-feira a campanha anual de vacinação contra influenza para toda a população.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-01-10",
      author: "Secretaria de Saúde",
      category: "Saúde",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      views: 1890,
      comments: 18,
      shares: 32,
      readTime: "2 min"
    },
    {
      id: 3,
      title: "Novo Sistema de Coleta Seletiva em Toda a Cidade",
      summary: "A cidade implementa novo sistema de coleta seletiva para melhorar a sustentabilidade urbana.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-01-05",
      author: "Secretaria do Meio Ambiente",
      category: "Meio Ambiente",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      views: 1234,
      comments: 12,
      shares: 28,
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Inscrições Abertas para Cursos Profissionalizantes Gratuitos",
      summary: "Prefeitura oferece cursos gratuitos de capacitação profissional para a comunidade.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2023-12-28",
      author: "Secretaria de Educação",
      category: "Educação",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      views: 876,
      comments: 8,
      shares: 15,
      readTime: "5 min"
    },
    {
      id: 5,
      title: "Obras de Revitalização da Avenida Principal Iniciam Segunda",
      summary: "Início das obras de modernização da principal avenida da cidade com nova iluminação.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-01-12",
      author: "Secretaria de Obras",
      category: "Obras",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      views: 1567,
      comments: 15,
      shares: 22,
      readTime: "3 min"
    },
    {
      id: 6,
      title: "Festival de Cultura Local 2024 - Programação Completa Divulgada",
      summary: "Confira a programação do maior evento cultural da cidade com shows e oficinas.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-01-08",
      author: "Secretaria de Cultura",
      category: "Cultura",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: false,
      views: 2100,
      comments: 31,
      shares: 67,
      readTime: "6 min"
    }
  ];

  const categories = ["Todas", "Obras", "Saúde", "Educação", "Meio Ambiente", "Cultura"];

  const handleSearch = (query: string, category?: string) => {
    setSearchTerm(query);
    if (category !== undefined) {
      setSelectedCategory(category);
    }
  };

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "Todas" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-card shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Portal da Prefeitura</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-foreground hover:text-primary">Início</a>
              <a href="/services" className="text-foreground hover:text-primary">Serviços</a>
              <a href="/news" className="text-primary font-semibold">Notícias</a>
              <a href="/contact" className="text-foreground hover:text-primary">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Notícias e Avisos</h1>
          <p className="text-xl text-muted-foreground">
            Fique por dentro das principais novidades da nossa cidade
          </p>
        </div>

        {/* Featured News */}
        {news.filter(item => item.featured).map((item) => (
          <Card key={item.id} className="news-card mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{item.category}</Badge>
                  <Badge variant="outline">Destaque</Badge>
                </div>
                <CardHeader className="px-0">
                  <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-lg">{item.summary}</CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(item.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {item.author}
                    </div>
                  </div>
                  <Button className="institutional-button">
                    Ler Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.filter(item => !item.featured).map((item) => (
            <Card key={item.id} className="news-card overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="line-clamp-3">{item.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(item.date)}
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Ler Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default News;