import { Heart, Calendar, Stethoscope, Pill } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Health = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Heart className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Saúde</h1>
          <p className="text-xl text-muted-foreground">Agendamento de consultas e exames</p>
        </div>

        <Tabs defaultValue="schedule" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="schedule">Agendar</TabsTrigger>
            <TabsTrigger value="appointments">Minhas Consultas</TabsTrigger>
            <TabsTrigger value="units">Unidades</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Agendar Consulta</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cartaoSus">Cartão SUS</Label>
                      <Input id="cartaoSus" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Especialidade</Label>
                      <Input id="specialty" required />
                    </div>
                  </div>
                  <Button className="w-full institutional-button">Buscar Horários</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Próximas Consultas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Nenhuma consulta agendada.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="units">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["UBS Centro", "UBS Norte", "UBS Sul"].map((unit) => (
                <Card key={unit}>
                  <CardHeader>
                    <CardTitle className="text-lg">{unit}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Horário: 7h às 19h</p>
                    <Button variant="outline" className="w-full">Ver Detalhes</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Health;
