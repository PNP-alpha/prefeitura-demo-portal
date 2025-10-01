import { Car, AlertTriangle, FileSearch, CreditCard, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Traffic = () => {
  const { toast } = useToast();

  const infractions = [
    {
      id: "123456",
      date: "10/01/2024",
      type: "Estacionamento Irregular",
      location: "Av. Principal, 500",
      value: "R$ 130,00",
      points: "3 pontos",
      status: "Pendente"
    },
    {
      id: "123455",
      date: "05/01/2024",
      type: "Velocidade Acima do Permitido",
      location: "Rua das Flores, 200",
      value: "R$ 195,00",
      points: "5 pontos",
      status: "Pago"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Recurso enviado!",
      description: "Protocolo #2024-TR-001. Você receberá a resposta em até 30 dias.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Car className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trânsito e Multas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Consulte multas, apresente recursos e obtenha informações sobre trânsito
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <FileSearch className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">1.450</div>
              <div className="text-sm text-muted-foreground">Consultas/mês</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">320</div>
              <div className="text-sm text-muted-foreground">Multas/mês</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">85%</div>
              <div className="text-sm text-muted-foreground">Taxa de Pagamento</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">30</div>
              <div className="text-sm text-muted-foreground">Dias p/ Recurso</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="consult" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="consult">Consultar Multas</TabsTrigger>
            <TabsTrigger value="appeal">Apresentar Recurso</TabsTrigger>
            <TabsTrigger value="info">Informações</TabsTrigger>
          </TabsList>

          {/* Consult Tab */}
          <TabsContent value="consult">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle>Consultar Multas</CardTitle>
                    <CardDescription>
                      Digite a placa do veículo ou número do Renavam
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="flex gap-4">
                        <Input placeholder="ABC-1234 ou Renavam" className="flex-1" />
                        <Button type="submit" className="institutional-button">
                          Consultar
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Multas Encontradas</h4>
                        {infractions.map((infraction) => (
                          <div 
                            key={infraction.id}
                            className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h5 className="font-semibold">{infraction.type}</h5>
                                <p className="text-sm text-muted-foreground">
                                  Auto de Infração: {infraction.id}
                                </p>
                              </div>
                              <Badge 
                                className={infraction.status === "Pago" ? "bg-green-500" : "bg-yellow-500"}
                              >
                                {infraction.status}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                              <div>
                                <p className="text-muted-foreground">Data:</p>
                                <p className="font-medium">{infraction.date}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Local:</p>
                                <p className="font-medium">{infraction.location}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Valor:</p>
                                <p className="font-medium text-lg">{infraction.value}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Pontos:</p>
                                <p className="font-medium">{infraction.points}</p>
                              </div>
                            </div>

                            {infraction.status === "Pendente" && (
                              <div className="flex gap-2">
                                <Button size="sm" className="flex-1">Pagar Multa</Button>
                                <Button size="sm" variant="outline" className="flex-1">
                                  Apresentar Recurso
                                </Button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Prazos Importantes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Recurso em 1ª Instância</p>
                      <p className="text-muted-foreground">Até 30 dias da notificação</p>
                    </div>
                    <div>
                      <p className="font-medium">Recurso em 2ª Instância</p>
                      <p className="text-muted-foreground">Até 30 dias após indeferimento</p>
                    </div>
                    <div>
                      <p className="font-medium">Pagamento com Desconto</p>
                      <p className="text-muted-foreground">20% até a data do vencimento</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="institutional-card bg-red-50 dark:bg-red-950 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 dark:text-red-100 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Atenção
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-red-900 dark:text-red-100 space-y-2">
                    <p>• Multas não pagas geram inscrição em dívida ativa</p>
                    <p>• Acúmulo de pontos pode suspender a CNH</p>
                    <p>• Licenciamento bloqueado com multas pendentes</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Appeal Tab */}
          <TabsContent value="appeal">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle>Apresentar Recurso de Multa</CardTitle>
                    <CardDescription>
                      Preencha todos os campos para apresentar seu recurso
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ait">Auto de Infração (AIT) *</Label>
                          <Input id="ait" placeholder="Número do AIT" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="plate">Placa do Veículo *</Label>
                          <Input id="plate" placeholder="ABC-1234" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo *</Label>
                          <Input id="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cpf">CPF *</Label>
                          <Input id="cpf" placeholder="000.000.000-00" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone *</Label>
                          <Input id="phone" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="justification">Justificativa do Recurso *</Label>
                        <Textarea 
                          id="justification" 
                          placeholder="Descreva detalhadamente os motivos do seu recurso..."
                          className="min-h-[150px]"
                          required 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="documents">Documentos Comprobatórios</Label>
                        <Input id="documents" type="file" multiple />
                        <p className="text-sm text-muted-foreground">
                          Anexe fotos, documentos ou outras evidências que fundamentem seu recurso
                        </p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Motivos Válidos para Recurso</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Erro de identificação do veículo</li>
                          <li>• Sinalização inadequada ou inexistente</li>
                          <li>• Veículo vendido ou transferido</li>
                          <li>• Situação de emergência comprovada</li>
                          <li>• Falha técnica do equipamento</li>
                        </ul>
                      </div>

                      <Button type="submit" className="w-full institutional-button">
                        Enviar Recurso
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Como Funciona</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <p>Preencha o formulário com seus dados e justificativa</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <p>Anexe documentos comprobatórios</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <p>Aguarde análise (até 30 dias)</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <p>Receba a decisão por email</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Taxa de Sucesso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary">42%</div>
                      <p className="text-sm text-muted-foreground">dos recursos são aceitos</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Recursos bem fundamentados e com documentação adequada têm maior chance de deferimento.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Info Tab */}
          <TabsContent value="info">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="institutional-card">
                <CardHeader>
                  <CardTitle>Tabela de Multas</CardTitle>
                  <CardDescription>Principais infrações e valores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Estacionar em local proibido</p>
                        <p className="text-xs text-muted-foreground">3 pontos</p>
                      </div>
                      <Badge variant="outline">R$ 130,16</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Excesso de velocidade (até 20%)</p>
                        <p className="text-xs text-muted-foreground">4 pontos</p>
                      </div>
                      <Badge variant="outline">R$ 130,16</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Excesso de velocidade (20-50%)</p>
                        <p className="text-xs text-muted-foreground">5 pontos</p>
                      </div>
                      <Badge variant="outline">R$ 195,23</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Avanço de sinal vermelho</p>
                        <p className="text-xs text-muted-foreground">7 pontos</p>
                      </div>
                      <Badge variant="outline">R$ 293,47</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Dirigir sem CNH</p>
                        <p className="text-xs text-muted-foreground">7 pontos</p>
                      </div>
                      <Badge variant="outline">R$ 880,41</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="institutional-card">
                <CardHeader>
                  <CardTitle>Pontuação na CNH</CardTitle>
                  <CardDescription>Entenda o sistema de pontos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Limite de Pontos</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex justify-between">
                        <span>Sem infrações graves:</span>
                        <Badge>40 pontos</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>1 infração grave:</span>
                        <Badge>30 pontos</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>2+ infrações graves:</span>
                        <Badge>20 pontos</Badge>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-100">
                      Consequências
                    </h4>
                    <ul className="text-sm text-yellow-900 dark:text-yellow-100 space-y-1">
                      <li>• Atingir o limite = Suspensão da CNH</li>
                      <li>• Período de suspensão: 6 meses a 1 ano</li>
                      <li>• Pontos zerados após 12 meses sem infrações</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Classificação das Infrações</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-500">Leve</Badge>
                        <span>3 pontos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-orange-500">Média</Badge>
                        <span>4 pontos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-500">Grave</Badge>
                        <span>5 pontos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-purple-500">Gravíssima</Badge>
                        <span>7 pontos</span>
                      </div>
                    </div>
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

export default Traffic;
