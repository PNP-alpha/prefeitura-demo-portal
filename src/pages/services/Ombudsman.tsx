import { MessageSquare, Send, FileText, Clock, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Ombudsman = () => {
  const { toast } = useToast();

  const complaintTypes = [
    "Reclamação",
    "Sugestão",
    "Elogio",
    "Denúncia",
    "Solicitação de Informação",
    "Pedido de Providência"
  ];

  const departments = [
    "Administração",
    "Educação",
    "Saúde",
    "Obras",
    "Meio Ambiente",
    "Transporte",
    "Assistência Social",
    "Cultura e Esportes"
  ];

  const recentManifestations = [
    {
      id: "#2024-001234",
      type: "Reclamação",
      subject: "Iluminação Pública",
      status: "Em Andamento",
      date: "15/01/2024"
    },
    {
      id: "#2024-001235",
      type: "Sugestão",
      subject: "Horário de Ônibus",
      status: "Respondido",
      date: "14/01/2024"
    },
    {
      id: "#2024-001236",
      type: "Elogio",
      subject: "Atendimento na UBS",
      status: "Concluído",
      date: "13/01/2024"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Manifestação enviada!",
      description: "Protocolo: #2024-001237. Você receberá atualizações por email.",
    });
  };

  const getStatusColor = (status: string) => {
    const colors = {
      "Em Andamento": "bg-blue-500/10 text-blue-700 border-blue-200",
      "Respondido": "bg-green-500/10 text-green-700 border-green-200",
      "Concluído": "bg-gray-500/10 text-gray-700 border-gray-200",
      "Pendente": "bg-yellow-500/10 text-yellow-700 border-yellow-200"
    };
    return colors[status as keyof typeof colors] || colors["Pendente"];
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <MessageSquare className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ouvidoria Municipal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seu canal direto de comunicação com a prefeitura. Manifestações anônimas são aceitas.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">567</div>
              <div className="text-sm text-muted-foreground">Manifestações/mês</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">48h</div>
              <div className="text-sm text-muted-foreground">Tempo Médio</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">92%</div>
              <div className="text-sm text-muted-foreground">Resolvidas</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <CheckCircle2 className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">4.5/5</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="new" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="new">Nova Manifestação</TabsTrigger>
            <TabsTrigger value="track">Acompanhar</TabsTrigger>
            <TabsTrigger value="recent">Recentes</TabsTrigger>
          </TabsList>

          {/* New Manifestation Tab */}
          <TabsContent value="new">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle>Enviar Manifestação</CardTitle>
                    <CardDescription>
                      Preencha os campos abaixo. Campos com * são obrigatórios
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="type">Tipo de Manifestação *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            {complaintTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase()}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="department">Órgão/Secretaria *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o órgão" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept.toLowerCase()}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto *</Label>
                        <Input 
                          id="subject" 
                          placeholder="Resuma sua manifestação em poucas palavras"
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Descrição Detalhada *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Descreva sua manifestação com o máximo de detalhes possível..."
                          className="min-h-[150px]"
                          required 
                        />
                      </div>

                      <div className="bg-secondary rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <input type="checkbox" id="anonymous" className="mt-1" />
                          <div>
                            <Label htmlFor="anonymous" className="cursor-pointer">
                              Manifestação Anônima
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Marque esta opção se deseja manter sua identidade em sigilo
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input id="name" placeholder="Opcional para manifestação anônima" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Para receber respostas" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input id="phone" placeholder="(11) 99999-9999" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cpf">CPF</Label>
                          <Input id="cpf" placeholder="000.000.000-00" />
                        </div>
                      </div>

                      <Button type="submit" className="w-full institutional-button">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Manifestação
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle className="text-lg">O que você pode fazer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                        Reclamação
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Expresse insatisfação sobre serviços públicos
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-green-600" />
                        Sugestão
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Proponha melhorias para a cidade
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-purple-600" />
                        Elogio
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Reconheça bons serviços prestados
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="institutional-card bg-blue-50 dark:bg-blue-950 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                      Lei de Acesso à Informação
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900 dark:text-blue-100">
                    <p>
                      Você tem o direito de solicitar informações públicas. 
                      Todas as manifestações são protegidas por lei.
                    </p>
                  </CardContent>
                </Card>

                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Contato Direto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Telefone:</strong> 0800 123 4567</p>
                    <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
                    <p><strong>Email:</strong> ouvidoria@prefeitura.gov.br</p>
                    <p className="text-muted-foreground pt-2">
                      Horário: Segunda a Sexta, 8h às 18h
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Track Tab */}
          <TabsContent value="track">
            <Card className="institutional-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Acompanhar Manifestação</CardTitle>
                <CardDescription>
                  Digite o número do protocolo para ver o andamento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Input placeholder="Protocolo (ex: #2024-001234)" className="flex-1" />
                  <Button className="institutional-button">Consultar</Button>
                </div>

                <div className="bg-secondary rounded-lg p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold mb-1">Status da Manifestação</h4>
                      <p className="text-sm text-muted-foreground">Protocolo: #2024-001234</p>
                    </div>
                    <Badge className="bg-blue-500">Em Andamento</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <div className="w-0.5 h-12 bg-green-500"></div>
                      </div>
                      <div>
                        <p className="font-medium">Manifestação Recebida</p>
                        <p className="text-sm text-muted-foreground">15/01/2024 às 10:30</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <div className="w-0.5 h-12 bg-gray-300"></div>
                      </div>
                      <div>
                        <p className="font-medium">Em Análise</p>
                        <p className="text-sm text-muted-foreground">16/01/2024 às 09:15</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-gray-600" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">Aguardando Resposta</p>
                        <p className="text-sm text-muted-foreground">Previsão: 18/01/2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recent Tab */}
          <TabsContent value="recent">
            <div className="max-w-4xl mx-auto">
              <Card className="institutional-card">
                <CardHeader>
                  <CardTitle>Manifestações Recentes</CardTitle>
                  <CardDescription>
                    Acompanhe as manifestações mais recentes da comunidade
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentManifestations.map((item) => (
                      <div 
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{item.type}</Badge>
                            <span className="font-mono text-sm text-muted-foreground">{item.id}</span>
                          </div>
                          <h4 className="font-semibold mb-1">{item.subject}</h4>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                        <Badge className={`${getStatusColor(item.status)} border`}>
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button variant="outline">Ver Todas as Manifestações</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Ombudsman;
