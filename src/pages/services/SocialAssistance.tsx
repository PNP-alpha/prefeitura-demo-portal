import { Users, Heart, Home, Utensils, GraduationCap, Baby } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SocialAssistance = () => {
  const { toast } = useToast();

  const programs = [
    {
      id: 1,
      name: "Bolsa Família Municipal",
      description: "Complemento ao programa federal para famílias em situação de vulnerabilidade",
      icon: <Heart className="h-8 w-8" />,
      benefit: "R$ 100 - R$ 400/mês",
      requirements: ["Renda per capita até R$ 218", "CadÚnico atualizado", "Criança na escola"],
      color: "bg-red-500/10 text-red-700 border-red-200"
    },
    {
      id: 2,
      name: "Vale Gás Social",
      description: "Auxílio para compra de gás de cozinha",
      icon: <Home className="h-8 w-8" />,
      benefit: "R$ 110 bimestral",
      requirements: ["Renda per capita até R$ 218", "Família no CadÚnico", "Não ser beneficiário federal"],
      color: "bg-blue-500/10 text-blue-700 border-blue-200"
    },
    {
      id: 3,
      name: "Cesta Básica",
      description: "Distribuição mensal de cestas básicas para famílias carentes",
      icon: <Utensils className="h-8 w-8" />,
      benefit: "1 cesta/mês",
      requirements: ["Renda per capita até R$ 300", "Cadastro no CRAS", "Comprovante de residência"],
      color: "bg-green-500/10 text-green-700 border-green-200"
    },
    {
      id: 4,
      name: "Bolsa Estudantil",
      description: "Auxílio financeiro para estudantes de baixa renda",
      icon: <GraduationCap className="h-8 w-8" />,
      benefit: "R$ 200/mês",
      requirements: ["Estudante matriculado", "Renda familiar até 2 salários", "Frequência mínima 85%"],
      color: "bg-purple-500/10 text-purple-700 border-purple-200"
    },
    {
      id: 5,
      name: "Auxílio Maternidade",
      description: "Apoio financeiro e material para gestantes e mães",
      icon: <Baby className="h-8 w-8" />,
      benefit: "Kit + R$ 300",
      requirements: ["Gestante ou mãe com bebê até 6 meses", "Pré-natal no SUS", "Renda até 3 salários"],
      color: "bg-pink-500/10 text-pink-700 border-pink-200"
    },
    {
      id: 6,
      name: "Moradia Solidária",
      description: "Auxílio aluguel para famílias em situação de risco",
      icon: <Home className="h-8 w-8" />,
      benefit: "R$ 400/mês",
      requirements: ["Situação de risco habitacional", "Avaliação social", "Renda até 3 salários"],
      color: "bg-orange-500/10 text-orange-700 border-orange-200"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Você receberá o protocolo por email para acompanhamento.",
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
              <Users className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Assistência Social
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Programas sociais e benefícios para apoiar famílias em vulnerabilidade
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">3.2k</div>
              <div className="text-sm text-muted-foreground">Famílias Atendidas</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">6</div>
              <div className="text-sm text-muted-foreground">Programas Ativos</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Home className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground">CRAS na Cidade</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <GraduationCap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">980</div>
              <div className="text-sm text-muted-foreground">Usuários/mês</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="programs" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="programs">Programas</TabsTrigger>
            <TabsTrigger value="register">Inscrever-se</TabsTrigger>
            <TabsTrigger value="cras">CRAS</TabsTrigger>
          </TabsList>

          {/* Programs Tab */}
          <TabsContent value="programs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="institutional-card hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-lg ${program.color}`}>
                        {program.icon}
                      </div>
                      <Badge variant="outline" className="text-primary border-primary">
                        {program.benefit}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Requisitos:</h4>
                      <ul className="space-y-1">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full institutional-button">
                      Solicitar Benefício
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle>Inscrever-se em Programa Social</CardTitle>
                    <CardDescription>
                      Preencha os dados para solicitar inscrição
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="program">Programa Desejado *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o programa" />
                          </SelectTrigger>
                          <SelectContent>
                            {programs.map((program) => (
                              <SelectItem key={program.id} value={program.id.toString()}>
                                {program.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                          <Label htmlFor="nis">NIS (Número de Identificação Social)</Label>
                          <Input id="nis" placeholder="000.00000.00-0" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthdate">Data de Nascimento *</Label>
                          <Input id="birthdate" type="date" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone *</Label>
                          <Input id="phone" placeholder="(11) 99999-9999" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Endereço Completo *</Label>
                        <Input id="address" required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="familyMembers">Membros da Família *</Label>
                          <Input id="familyMembers" type="number" min="1" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="income">Renda Familiar *</Label>
                          <Input id="income" placeholder="R$ 0,00" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cras">CRAS Referência</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="centro">CRAS Centro</SelectItem>
                              <SelectItem value="norte">CRAS Zona Norte</SelectItem>
                              <SelectItem value="sul">CRAS Zona Sul</SelectItem>
                              <SelectItem value="leste">CRAS Zona Leste</SelectItem>
                              <SelectItem value="oeste">CRAS Zona Oeste</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">📋 Documentos Necessários</h4>
                        <ul className="text-sm space-y-1">
                          <li>• RG e CPF de todos os membros da família</li>
                          <li>• Comprovante de residência atualizado</li>
                          <li>• Comprovante de renda (se houver)</li>
                          <li>• Cartão do NIS/CadÚnico</li>
                          <li>• Certidões de nascimento dos filhos</li>
                        </ul>
                      </div>

                      <Button type="submit" className="w-full institutional-button">
                        Enviar Solicitação
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
                      <p>Preencha o formulário online</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <p>Aguarde contato do CRAS</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <p>Compareça com documentos</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <p>Avaliação socioeconômica</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        5
                      </div>
                      <p>Receba o benefício</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="institutional-card bg-green-50 dark:bg-green-950 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900 dark:text-green-100">
                      CadÚnico
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-green-900 dark:text-green-100 space-y-2">
                    <p>
                      O Cadastro Único é porta de entrada para diversos programas sociais.
                    </p>
                    <p className="font-semibold">
                      Se você ainda não tem, procure o CRAS mais próximo!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* CRAS Tab */}
          <TabsContent value="cras">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "CRAS Centro", address: "Rua Central, 100 - Centro", phone: "(11) 1234-5001", hours: "8h às 17h" },
                { name: "CRAS Zona Norte", address: "Av. Norte, 500 - Jardim América", phone: "(11) 1234-5002", hours: "8h às 17h" },
                { name: "CRAS Zona Sul", address: "Rua Sul, 200 - Vila Nova", phone: "(11) 1234-5003", hours: "8h às 17h" },
                { name: "CRAS Zona Leste", address: "Av. Leste, 300 - Parque Industrial", phone: "(11) 1234-5004", hours: "8h às 17h" },
                { name: "CRAS Zona Oeste", address: "Rua Oeste, 400 - Jardim Paulista", phone: "(11) 1234-5005", hours: "8h às 17h" }
              ].map((cras, idx) => (
                <Card key={idx} className="institutional-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Home className="h-5 w-5 text-primary" />
                      {cras.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Endereço:</p>
                      <p className="text-sm">{cras.address}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Telefone:</p>
                      <p className="text-sm">{cras.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Horário:</p>
                      <p className="text-sm">{cras.hours}</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Ver no Mapa
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="institutional-card mt-8">
              <CardHeader>
                <CardTitle>O que é o CRAS?</CardTitle>
                <CardDescription>
                  Centro de Referência de Assistência Social
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  O CRAS é a porta de entrada para os serviços de assistência social. 
                  É um espaço público onde são oferecidos serviços e programas de proteção social básica.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Serviços Oferecidos:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cadastro Único (CadÚnico)</li>
                      <li>• Orientação sobre programas sociais</li>
                      <li>• Acompanhamento familiar</li>
                      <li>• Grupos de convivência</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quem Pode Procurar:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Famílias em vulnerabilidade</li>
                      <li>• Pessoas em busca de benefícios</li>
                      <li>• Idosos e crianças</li>
                      <li>• Qualquer cidadão que precise de orientação</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default SocialAssistance;
