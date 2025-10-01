import { FileText, Download, CheckCircle, Clock, AlertCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Documents = () => {
  const { toast } = useToast();
  const [selectedDoc, setSelectedDoc] = useState("");

  const documents = [
    {
      id: 1,
      name: "Certidão Negativa de Débitos",
      description: "Documento que comprova a inexistência de débitos municipais",
      price: "Gratuito",
      time: "Imediato",
      requirements: ["CPF ou CNPJ", "Endereço atualizado"],
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: 2,
      name: "Certidão de Nascimento (2ª via)",
      description: "Segunda via da certidão de nascimento",
      price: "R$ 45,00",
      time: "5 dias úteis",
      requirements: ["RG", "CPF", "Comprovante de residência"],
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: 3,
      name: "Certidão de Óbito (2ª via)",
      description: "Segunda via da certidão de óbito",
      price: "R$ 45,00",
      time: "5 dias úteis",
      requirements: ["RG do solicitante", "CPF", "Dados do falecido"],
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: 4,
      name: "Certidão de Casamento (2ª via)",
      description: "Segunda via da certidão de casamento",
      price: "R$ 45,00",
      time: "5 dias úteis",
      requirements: ["RG dos cônjuges", "CPF", "Data do casamento"],
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: 5,
      name: "Atestado de Residência",
      description: "Comprovante oficial de residência no município",
      price: "Gratuito",
      time: "3 dias úteis",
      requirements: ["RG", "CPF", "Conta de luz ou água"],
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: 6,
      name: "Certidão de Tempo de Serviço",
      description: "Para servidores municipais",
      price: "Gratuito",
      time: "10 dias úteis",
      requirements: ["Matrícula funcional", "RG", "CPF"],
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Você receberá um email com o protocolo e instruções.",
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
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Emissão de Documentos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solicite certidões, atestados e documentos oficiais de forma rápida e segura
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">24h</div>
              <div className="text-sm text-muted-foreground">Tempo Médio</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15k+</div>
              <div className="text-sm text-muted-foreground">Documentos/mês</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Download className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Digital</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="request" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="request">Solicitar Documento</TabsTrigger>
            <TabsTrigger value="documents">Documentos Disponíveis</TabsTrigger>
            <TabsTrigger value="track">Acompanhar Pedido</TabsTrigger>
          </TabsList>

          {/* Request Tab */}
          <TabsContent value="request">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="institutional-card">
                <CardHeader>
                  <CardTitle>Solicitar Documento</CardTitle>
                  <CardDescription>
                    Preencha o formulário para solicitar seu documento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRequest} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="docType">Tipo de Documento *</Label>
                      <Select value={selectedDoc} onValueChange={setSelectedDoc}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o documento" />
                        </SelectTrigger>
                        <SelectContent>
                          {documents.map((doc) => (
                            <SelectItem key={doc.id} value={doc.id.toString()}>
                              {doc.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input id="name" placeholder="Seu nome completo" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF *</Label>
                        <Input id="cpf" placeholder="000.000.000-00" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input id="phone" placeholder="(11) 99999-9999" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Endereço Completo</Label>
                      <Input id="address" placeholder="Rua, número, bairro" />
                    </div>

                    <Button type="submit" className="w-full institutional-button">
                      Solicitar Documento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Informações Importantes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Documentos Necessários</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>RG e CPF (originais e cópias)</li>
                        <li>Comprovante de residência atualizado</li>
                        <li>Documentos específicos conforme o tipo solicitado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Prazos de Entrega</h4>
                      <p className="text-sm text-muted-foreground">
                        Os documentos digitais são entregues imediatamente por email. 
                        Documentos físicos têm prazo de 5 a 10 dias úteis.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Formas de Pagamento</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>PIX</Badge>
                        <Badge>Boleto</Badge>
                        <Badge>Cartão de Crédito</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="institutional-card bg-primary/5 border-primary">
                  <CardHeader>
                    <CardTitle className="text-primary">Atendimento Presencial</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Endereço:</strong> Rua da Prefeitura, 123 - Centro</p>
                    <p><strong>Horário:</strong> Segunda a Sexta, 8h às 17h</p>
                    <p><strong>Telefone:</strong> (11) 1234-5678</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <Card key={doc.id} className="institutional-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {doc.icon}
                      </div>
                      <Badge variant="outline">{doc.price}</Badge>
                    </div>
                    <CardTitle className="text-lg">{doc.name}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Prazo:</span>
                      <span className="font-medium">{doc.time}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Requisitos:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {doc.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-600 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full" variant="outline">
                      Solicitar Agora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Track Tab */}
          <TabsContent value="track">
            <Card className="institutional-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Acompanhar Pedido</CardTitle>
                <CardDescription>
                  Digite o número do protocolo para acompanhar seu pedido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Input placeholder="Número do protocolo (ex: 2024000123)" className="flex-1" />
                    <Button className="institutional-button">Consultar</Button>
                  </div>

                  <div className="bg-secondary rounded-lg p-6 space-y-4">
                    <h4 className="font-semibold">Como encontrar meu protocolo?</h4>
                    <p className="text-sm text-muted-foreground">
                      O número do protocolo foi enviado para seu email no momento da solicitação. 
                      Verifique também sua caixa de spam.
                    </p>
                    <Button variant="outline" className="w-full">
                      Não recebi meu protocolo
                    </Button>
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

export default Documents;
