import { CreditCard, Download, Calendar, DollarSign, FileText, Search, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IPTU = () => {
  const { toast } = useToast();

  const paymentOptions = [
    {
      title: "Pagamento à Vista",
      discount: "15% de desconto",
      description: "Pague até 31/01 e ganhe 15% de desconto",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-green-500/10 text-green-700 border-green-200"
    },
    {
      title: "Parcelamento em 10x",
      discount: "Sem juros",
      description: "Parcele em até 10 vezes sem juros",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-blue-500/10 text-blue-700 border-blue-200"
    },
    {
      title: "Débito Automático",
      discount: "5% de desconto",
      description: "Cadastre débito automático e ganhe desconto adicional",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-purple-500/10 text-purple-700 border-purple-200"
    }
  ];

  const parcels = [
    { number: 1, dueDate: "10/02/2024", value: "R$ 450,00", status: "Pago" },
    { number: 2, dueDate: "10/03/2024", value: "R$ 450,00", status: "Pendente" },
    { number: 3, dueDate: "10/04/2024", value: "R$ 450,00", status: "Pendente" },
    { number: 4, dueDate: "10/05/2024", value: "R$ 450,00", status: "Pendente" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultando IPTU...",
      description: "Aguarde enquanto buscamos suas informações.",
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
              <CreditCard className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            IPTU Online
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Consulte, emita e pague seu Imposto Predial de forma rápida e segura
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15%</div>
              <div className="text-sm text-muted-foreground">Desconto à Vista</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">10x</div>
              <div className="text-sm text-muted-foreground">Sem Juros</div>
            </CardContent>
          </Card>
          <Card className="institutional-card text-center">
            <CardContent className="pt-6">
              <CreditCard className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">2.1k</div>
              <div className="text-sm text-muted-foreground">Pagamentos/mês</div>
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

        <Tabs defaultValue="consult" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="consult">Consultar</TabsTrigger>
            <TabsTrigger value="payment">Pagamento</TabsTrigger>
            <TabsTrigger value="invoice">2ª Via</TabsTrigger>
            <TabsTrigger value="debit">Débito Automático</TabsTrigger>
          </TabsList>

          {/* Consult Tab */}
          <TabsContent value="consult">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="institutional-card">
                  <CardHeader>
                    <CardTitle>Consultar IPTU</CardTitle>
                    <CardDescription>
                      Digite sua inscrição municipal ou CPF do proprietário
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSearch} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="inscription">Inscrição Municipal ou CPF</Label>
                        <div className="flex gap-4">
                          <Input 
                            id="inscription" 
                            placeholder="000.000.000-0 ou 000.000.000-00"
                            className="flex-1"
                            required 
                          />
                          <Button type="submit" className="institutional-button">
                            <Search className="mr-2 h-4 w-4" />
                            Buscar
                          </Button>
                        </div>
                      </div>

                      <div className="bg-secondary rounded-lg p-6">
                        <h4 className="font-semibold mb-4">Informações do Imóvel</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Inscrição:</p>
                            <p className="font-medium">123.456.789-0</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Proprietário:</p>
                            <p className="font-medium">João da Silva</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Endereço:</p>
                            <p className="font-medium">Rua das Flores, 123</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Bairro:</p>
                            <p className="font-medium">Centro</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Área Total:</p>
                            <p className="font-medium">250 m²</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Valor Venal:</p>
                            <p className="font-medium">R$ 450.000,00</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Parcelas do IPTU 2024</h4>
                        <div className="space-y-3">
                          {parcels.map((parcel) => (
                            <div 
                              key={parcel.number}
                              className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                                  {parcel.number}
                                </div>
                                <div>
                                  <p className="font-medium">{parcel.value}</p>
                                  <p className="text-sm text-muted-foreground">
                                    Vencimento: {parcel.dueDate}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Badge 
                                  className={parcel.status === "Pago" ? "bg-green-500" : "bg-yellow-500"}
                                >
                                  {parcel.status}
                                </Badge>
                                {parcel.status === "Pendente" && (
                                  <Button size="sm" variant="outline">
                                    Pagar
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {paymentOptions.map((option, idx) => (
                  <Card key={idx} className={`institutional-card border ${option.color.split(' ')[2]}`}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${option.color}`}>
                          {option.icon}
                        </div>
                        <Badge variant="outline">{option.discount}</Badge>
                      </div>
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment">
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="institutional-card">
                <CardHeader>
                  <CardTitle>Formas de Pagamento</CardTitle>
                  <CardDescription>
                    Escolha a melhor opção para você
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="service-card cursor-pointer">
                      <CardContent className="pt-6 text-center space-y-3">
                        <CreditCard className="h-10 w-10 text-primary mx-auto" />
                        <h4 className="font-semibold">PIX</h4>
                        <p className="text-sm text-muted-foreground">
                          Pagamento instantâneo
                        </p>
                        <Button className="w-full">Gerar QR Code</Button>
                      </CardContent>
                    </Card>

                    <Card className="service-card cursor-pointer">
                      <CardContent className="pt-6 text-center space-y-3">
                        <FileText className="h-10 w-10 text-primary mx-auto" />
                        <h4 className="font-semibold">Boleto</h4>
                        <p className="text-sm text-muted-foreground">
                          Código de barras
                        </p>
                        <Button className="w-full">Gerar Boleto</Button>
                      </CardContent>
                    </Card>

                    <Card className="service-card cursor-pointer">
                      <CardContent className="pt-6 text-center space-y-3">
                        <CreditCard className="h-10 w-10 text-primary mx-auto" />
                        <h4 className="font-semibold">Cartão</h4>
                        <p className="text-sm text-muted-foreground">
                          Crédito ou débito
                        </p>
                        <Button className="w-full">Pagar Online</Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">💡 Dica</h4>
                    <p className="text-sm">
                      Pagamentos via PIX são confirmados instantaneamente. 
                      Para boleto, aguarde até 3 dias úteis para compensação.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Invoice Tab */}
          <TabsContent value="invoice">
            <Card className="institutional-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Emitir 2ª Via do Boleto</CardTitle>
                <CardDescription>
                  Gere a segunda via do seu boleto de IPTU
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="inscriptionInvoice">Inscrição Municipal</Label>
                    <Input id="inscriptionInvoice" placeholder="000.000.000-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parcelInvoice">Número da Parcela</Label>
                    <Input id="parcelInvoice" type="number" placeholder="1 a 10" min="1" max="10" />
                  </div>
                  <Button className="w-full institutional-button">
                    <Download className="mr-2 h-4 w-4" />
                    Gerar 2ª Via
                  </Button>
                </div>

                <div className="bg-secondary rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Atenção</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Boletos vencidos terão acréscimo de juros e multa</li>
                    <li>• A 2ª via é atualizada com os valores corretos</li>
                    <li>• Guarde o comprovante de pagamento</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Debit Tab */}
          <TabsContent value="debit">
            <Card className="institutional-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Cadastrar Débito Automático</CardTitle>
                <CardDescription>
                  Ganhe 5% de desconto adicional e nunca mais se preocupe com vencimentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="inscriptionDebit">Inscrição Municipal</Label>
                      <Input id="inscriptionDebit" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cpfDebit">CPF do Proprietário</Label>
                      <Input id="cpfDebit" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bank">Banco</Label>
                    <Input id="bank" placeholder="Nome do banco" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="agency">Agência</Label>
                      <Input id="agency" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account">Conta</Label>
                      <Input id="account" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="digit">Dígito</Label>
                      <Input id="digit" maxLength={1} required />
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">
                      ✓ Vantagens do Débito Automático
                    </h4>
                    <ul className="text-sm text-green-900 dark:text-green-100 space-y-1">
                      <li>• 5% de desconto em todas as parcelas</li>
                      <li>• Sem preocupação com vencimentos</li>
                      <li>• Débito feito automaticamente todo dia 10</li>
                      <li>• Pode cancelar a qualquer momento</li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full institutional-button">
                    Cadastrar Débito Automático
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default IPTU;
