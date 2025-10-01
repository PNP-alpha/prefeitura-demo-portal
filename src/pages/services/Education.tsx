import { GraduationCap, School, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Education = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Educação</h1>
          <p className="text-xl text-muted-foreground">Matrículas e informações escolares</p>
        </div>

        <Tabs defaultValue="enrollment" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="enrollment">Matrículas</TabsTrigger>
            <TabsTrigger value="schools">Escolas</TabsTrigger>
            <TabsTrigger value="programs">Programas</TabsTrigger>
          </TabsList>

          <TabsContent value="enrollment">
            <Card>
              <CardHeader>
                <CardTitle>Período de Matrículas 2024</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Matrículas abertas de 15/01 a 28/02</p>
                <Button className="institutional-button">Iniciar Matrícula</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schools">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["EMEF Centro", "EMEF Norte", "EMEF Sul"].map((school) => (
                <Card key={school}>
                  <CardHeader>
                    <CardTitle className="text-lg">{school}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Ver Informações</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="programs">
            <Card>
              <CardHeader>
                <CardTitle>Programas Educacionais</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Merenda Escolar</li>
                  <li>• Transporte Escolar</li>
                  <li>• Material Didático</li>
                  <li>• Reforço Escolar</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
