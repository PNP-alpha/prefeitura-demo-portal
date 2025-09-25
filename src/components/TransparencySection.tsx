import { FileText, DollarSign, Gavel, Users, ExternalLink, Download, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TransparencySection = () => {
  const transparencyLinks = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Portal da Transparência",
      description: "Acesse todas as informações sobre gastos e receitas públicas",
      updates: "Atualizado diariamente",
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
      href: "#"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Relatórios Financeiros",
      description: "Balanços, demonstrativos e prestações de contas mensais",
      updates: "Último: Dezembro/2023",
      color: "bg-green-500/10 text-green-600 border-green-200",
      href: "#"
    },
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "Licitações e Contratos",
      description: "Processos licitatórios em andamento e contratos firmados",
      updates: "15 processos ativos",
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
      href: "#"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Folha de Pagamento",
      description: "Remuneração de servidores públicos e terceirizados",
      updates: "Mensal",
      color: "bg-orange-500/10 text-orange-600 border-orange-200",
      href: "#"
    }
  ];

  const quickStats = [
    {
      label: "Orçamento 2024",
      value: "R$ 850M",
      icon: <TrendingUp className="h-5 w-5" />,
      change: "+12% vs 2023"
    },
    {
      label: "Licitações Ativas",
      value: "15",
      icon: <Gavel className="h-5 w-5" />,
      change: "3 finalizadas este mês"
    },
    {
      label: "Transparência",
      value: "100%",
      icon: <FileText className="h-5 w-5" />,
      change: "Dados atualizados"
    }
  ];

  const recentReports = [
    {
      title: "Relatório de Gestão Fiscal - 4º Quadrimestre 2023",
      date: "2024-01-15",
      size: "2.4 MB",
      type: "PDF"
    },
    {
      title: "Balanço Orçamentário - Dezembro 2023", 
      date: "2024-01-10",
      size: "1.8 MB",
      type: "PDF"
    },
    {
      title: "Demonstrativo de Despesas - Dezembro 2023",
      date: "2024-01-08",
      size: "950 KB",
      type: "PDF"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portal da Transparência
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acesso total às informações públicas. Transparência é um direito seu e um compromisso nosso.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <Card key={index} className="institutional-card text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</div>
                <Badge variant="secondary" className="text-xs">
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transparency Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {transparencyLinks.map((link, index) => (
            <Card key={index} className="institutional-card group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${link.color} border group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {link.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {link.updates}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      Acessar
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="institutional-card">
              <CardHeader>
                <CardTitle className="text-2xl">Relatórios Recentes</CardTitle>
                <CardDescription>
                  Documentos oficiais mais recentes disponíveis para download
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{report.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{new Date(report.date).toLocaleDateString('pt-BR')}</span>
                          <span>{report.size}</span>
                          <Badge variant="outline" className="text-xs">
                            {report.type}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access */}
          <div>
            <Card className="institutional-card">
              <CardHeader>
                <CardTitle className="text-xl">Acesso Rápido</CardTitle>
                <CardDescription>
                  Links diretos para informações específicas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Lei de Acesso à Informação",
                  "e-SIC - Sistema de Informação",
                  "Consulta Pública",
                  "Agenda de Autoridades",
                  "Estrutura Organizacional",
                  "Diário Oficial",
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-primary/5 hover:text-primary"
                    asChild
                  >
                    <a href="#" className="flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {item}
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Portal Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="institutional-button">
            <ExternalLink className="mr-2 h-5 w-5" />
            Acessar Portal Completo da Transparência
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;