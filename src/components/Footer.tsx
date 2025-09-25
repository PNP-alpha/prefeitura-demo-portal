import { Building2, MapPin, Phone, Mail, Facebook, Twitter, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  const quickLinks = [
    { name: "Portal da Transparência", href: "#" },
    { name: "Licitações", href: "#" },
    { name: "Concursos Públicos", href: "#" },
    { name: "Diário Oficial", href: "#" },
    { name: "Ouvidoria", href: "#" },
    { name: "LGPD", href: "#" },
  ];

  const services = [
    { name: "Emissão de Documentos", href: "/services" },
    { name: "IPTU Online", href: "/services" },
    { name: "Alvarás", href: "/services" },
    { name: "Agenda da Saúde", href: "/services" },
    { name: "Educação", href: "/services" },
    { name: "Meio Ambiente", href: "/services" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Prefeitura Municipal</h3>
                <p className="text-sm opacity-90">Cidade São Paulo</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Rua da Prefeitura, 123</p>
                  <p>Centro - São Paulo - SP</p>
                  <p>CEP: 01000-000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <p>(11) 1234-5678</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <p>contato@prefeitura.gov.br</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/10 p-2"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Institucionais</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="opacity-90 hover:opacity-100 hover:underline flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="opacity-90 hover:opacity-100 hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div>
                <p className="font-medium">Presencial:</p>
                <p>Segunda a Sexta: 8h às 17h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
              
              <div className="mt-4">
                <p className="font-medium">Online:</p>
                <p>24 horas por dia</p>
                <p>7 dias por semana</p>
              </div>
              
              <div className="mt-4">
                <p className="font-medium">Emergências:</p>
                <p>Defesa Civil: 199</p>
                <p>Guarda Municipal: 153</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90 text-center md:text-left">
              <p>© {currentYear} Prefeitura Municipal de São Paulo. Todos os direitos reservados.</p>
              <p className="mt-1">
                Desenvolvido pela Secretaria de Inovação e Tecnologia
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <a href="#" className="opacity-90 hover:opacity-100 hover:underline">
                Política de Privacidade
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:underline">
                Termos de Uso
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:underline">
                Acessibilidade
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:underline">
                Mapa do Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;