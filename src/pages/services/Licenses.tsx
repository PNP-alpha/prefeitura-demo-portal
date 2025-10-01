import { Building2, FileCheck, Clock, DollarSign, AlertCircle, CheckCircle } from "lucide-react";
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

const Licenses = () => {
  const { toast } = useToast();

  const licenses = [
    {
      id: 1,
      name: "Alvará de Funcionamento",
      description: "Para estabelecimentos comerciais, industriais e de serviços",
      price: "R$ 250,00",
      time: "15 dias úteis",
      steps: ["Preencher formulário", "Anexar documentos", "Vistoria técnica", "Emissão"],
      requirements: [
        "CNPJ da empresa",
        "Contrato social",
        "Comprovante de endereço",
        "Projeto de prevenção de incêndio",
        "Laudo técnico sanitário (se aplicável)"
      ]
    },
    {
      id: 2,
      name: "Alvará de Construção",
      description: "Para obras novas, reformas e ampliações",
      price: "Varia conforme área",
      time: "30 dias úteis",
      steps: ["Projeto aprovado", "Pagamento de taxas", "Análise técnica", "Emissão"],
      requirements: [
        "Projeto arquitetônico aprovado",
        "ART ou RRT do responsável técnico",
        "Matrícula do imóvel",
        "Certidão negativa de débitos",
        "Licença ambiental (se necessário)"
      ]
    },
    {
      id: 3,
      name: "Licença para Eventos",
      description: "Eventos públicos, shows e festas",
      price: "R$ 150,00 - R$ 1.500,00",
      time: "10 dias úteis",
      steps: ["Solicitação online", "Análise prévia", "Vistoria local", "Autorização"],
      requirements: [
        "Descrição detalhada do evento",
        "Planta do local",
        "Laudo de segurança",
        "Comprovante de pagamento",
        "Autorização do proprietário do local"
      ]
    },
    {
      id: 4,
      name: "Licença Ambiental",
      description: "Para atividades com impacto ambiental",
      price: "R$ 500,00 - R$ 5.000,00",
      time: "45 dias úteis",
      steps: ["Estudo de impacto", "Análise técnica", "Audiência pública", "Emissão"],
      requirements: [
        "EIA/RIMA ou RCA",
        "Plantas e memoriais",
        "Cadastro ambiental",
        "Outorga de uso da água (se aplicável)",
        "Licenças correlatas"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Você receberá um email com o protocolo e próximos passos.",
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
              <Building2 className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Alvarás e Licenças
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solicite alvarás de funcionamento, construção e licenças diversas de forma digital
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">890</div>
              <div className="text-sm text-muted-foreground">Alvarás Emitidos</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15-30</div>
              <div className="text-sm text-muted-foreground">Dias Úteis</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Building2 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">Tipos de Licenças</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Online</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="types" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="types">Tipos de Licenças</TabsTrigger>
            <TabsTrigger value="request">Solicitar</TabsTrigger>
            <TabsTrigger value="status">Consultar Status</TabsTrigger>
          </TabsList>

          {/* Types Tab */}
          <TabsContent value="types">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {licenses.map((license) => (
                <Card key={license.id} className="institutional-card hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{license.name}</CardTitle>
                      <Badge variant="outline">{license.price}</Badge>
                    </div>
                    <CardDescription className="text-base">{license.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium">Prazo: {license.time}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Etapas do Processo:</h4>
                      <div className="space-y-2">
                        {license.steps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                              {idx + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Documentos Necessários:</h4>
                      <ul className="space-y-2">
                        {license.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full institutional-button">
                      Solicitar {license.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Request Tab */}
          <TabsContent value="request">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle>Solicitar Alvará ou Licença</CardTitle>
                    <CardDescription>
                      Preencha todos os campos obrigatórios
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="licenseType">Tipo de Licença *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            {licenses.map((license) => (
                              <SelectItem key={license.id} value={license.id.toString()}>
                                {license.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Nome da Empresa/Responsável *</Label>
                          <Input id="company" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cnpj">CNPJ/CPF *</Label>
                          <Input id="cnpj" required />
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
                        <Label htmlFor="address">Endereço Completo do Estabelecimento *</Label>
                        <Input id="address" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Descrição da Atividade *</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Descreva detalhadamente a atividade..."
                          className="min-h-[100px]"
                          required 
                        />
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-blue-600" />
                          Próximos Passos
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                          <li>Você receberá um protocolo por email</li>
                          <li>Anexe os documentos solicitados através do protocolo</li>
                          <li>Acompanhe o andamento pelo sistema</li>
                          <li>Aguarde a vistoria técnica (se aplicável)</li>
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
                    <CardTitle className="text-lg">Taxas e Pagamento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <p>As taxas variam conforme o tipo e porte do estabelecimento ou obra.</p>
                    <div className="space-y-2">
                      <p className="font-medium">Formas de pagamento:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>PIX</Badge>
                        <Badge>Boleto</Badge>
                        <Badge>Cartão</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      O boleto será gerado após análise prévia da documentação.
                    </p>
                  </CardContent>
                </Card>

                <Card className="institutional-card bg-amber-50 dark:bg-amber-950 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-900 dark:text-amber-100">
                      Atenção
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-amber-900 dark:text-amber-100">
                    <p>• Documentos incompletos atrasam a análise</p>
                    <p>• Vistorias são agendadas após aprovação documental</p>
                    <p>• Mantenha seus dados atualizados</p>
                    <p>• Consulte regularmente o status</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Status Tab */}
          <TabsContent value="status">
            <Card className="institutional-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Consultar Status da Solicitação</CardTitle>
                <CardDescription>
                  Digite o número do protocolo ou CNPJ/CPF
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Input placeholder="Número do protocolo ou CNPJ/CPF" className="flex-1" />
                  <Button className="institutional-button">Consultar</Button>
                </div>

                <div className="bg-secondary rounded-lg p-6 space-y-4">
                  <h4 className="font-semibold">Dúvidas Frequentes</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Quanto tempo demora a análise?</p>
                      <p className="text-muted-foreground">Entre 15 e 45 dias úteis dependendo do tipo de licença.</p>
                    </div>
                    <div>
                      <p className="font-medium">Como sei se fui aprovado?</p>
                      <p className="text-muted-foreground">Você receberá notificação por email em todas as etapas.</p>
                    </div>
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

export default Licenses;
