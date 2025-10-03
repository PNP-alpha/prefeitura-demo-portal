# Prompt para Recriar Portal da Prefeitura Completo

## Visão Geral
Crie um portal de prefeitura municipal completo usando React, TypeScript, Tailwind CSS e componentes shadcn/ui. O design deve ser inspirado no portal G1, com layout moderno, responsivo e profissional.

## Estrutura de Rotas
```
/ - Página inicial
/news - Página de notícias
/services - Página de serviços
/services/documents - Emissão de documentos
/services/licenses - Licenças e alvarás
/services/iptu - IPTU e taxas
/services/ombudsman - Ouvidoria
/services/traffic - Trânsito e multas
/services/social - Assistência social
/services/health - Saúde
/services/education - Educação
/contact - Contato
```

## Design System

### Cores (HSL - configurar em index.css)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221 83% 53%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 221 83% 53%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 224.3 76.3% 48%;
}
```

## Componentes Principais

### 1. Header
- Logo "Portal da Prefeitura" (clicável, redireciona para "/")
- Menu de navegação: Início, Serviços, Notícias, Contato
- Busca integrada
- Ícones de acessibilidade e contraste
- Responsivo com menu hamburger em mobile
- Background: bg-primary, texto branco

### 2. Footer
- 4 colunas: Sobre, Serviços Rápidos, Contato, Redes Sociais
- Links para serviços principais
- Informações de contato (endereço, telefone, email, horário)
- Ícones de redes sociais (Facebook, Instagram, Twitter, YouTube)
- Copyright com ano atual
- Background escuro com texto claro

### 3. Página Inicial (/)

#### Breaking News (topo)
- Barra horizontal vermelha/urgente
- Texto "🔴 AO VIVO" ou "ÚLTIMAS NOTÍCIAS"
- Notícias rolando horizontalmente com animação
- 5-6 manchetes curtas

#### Busca Avançada
- Campo de busca grande e destacado
- Filtros: Categoria (Notícias, Serviços, Documentos)
- Botão de busca com ícone
- Sugestões de busca populares abaixo

#### Acesso Rápido
- Grid 3x3 de cards com ícones
- Serviços principais: IPTU, 2ª Via, Agendamento, Licenças, etc.
- Hover com elevação e transição suave
- Links diretos para páginas específicas

#### Seção de Notícias (estilo G1)
**1 Banner Principal:**
- Card grande com imagem em destaque
- Título grande e chamativo
- Categoria e data
- Link para notícia completa

**4 Sub-banners:**
- Grid 2x2 abaixo do banner principal
- Cada um com imagem menor
- Título médio
- Categoria e data

**Listagem de Notícias:**
- Layout de 2 colunas
- Cards menores com imagem à esquerda
- Título, categoria, data e resumo
- 10-15 notícias
- Paginação no final
- Botão "Ver todas as notícias"

#### Serviços em Destaque
- Grid de 4 colunas com cards
- Ícone, título, descrição breve
- Botão "Acessar serviço"
- Serviços: Saúde, Educação, Documentos, Assistência Social

#### Transparência
- Cards com estatísticas
- Dados em tempo real (população, orçamento, projetos)
- Gráficos simples (usar recharts se possível)
- Link para portal da transparência

#### Eventos
- Slider/Carousel de eventos
- Imagem, título, data, local
- Botão para ver detalhes
- Navegação com setas

#### Newsletter
- Seção de inscrição
- Campo de email
- Botão "Inscrever-se"
- Texto motivacional
- Toast de confirmação ao enviar

### 4. Página de Notícias (/news)
- Header e Footer padrão
- Filtros por categoria (Todas, Política, Saúde, Educação, Cultura, Esporte)
- Busca específica de notícias
- Mesma estrutura da home: 1 banner + 4 sub + listagem
- Paginação funcional
- 20-30 notícias de exemplo

### 5. Página de Serviços (/services)
- Grid de todos os serviços disponíveis
- Cards com ícone, título, descrição
- Estatísticas de uso
- Links para páginas específicas
- Busca de serviços
- Categorização (Documentos, Taxas, Atendimento, etc.)

### 6. Páginas de Serviços Específicos

#### /services/documents (Emissão de Documentos)
- Formulário de solicitação
- Campos: Tipo de documento, CPF, Nome completo, Email, Telefone
- Upload de documentos necessários
- Validação de campos
- Botão de envio com loading
- Toast de confirmação
- Lista de documentos disponíveis
- Prazos de emissão
- Taxas e valores
- Documentos necessários
- Horários de atendimento

#### /services/licenses (Licenças e Alvarás)
- Tabs: Solicitar, Acompanhar, Renovar
- Formulário específico para cada tipo
- Campos: CNPJ, Razão Social, Endereço, Tipo de atividade
- Upload de documentos
- Consulta de protocolo
- Status de andamento
- Prazos e requisitos
- Taxas

#### /services/iptu (IPTU e Taxas)
- Consulta de imóvel (por inscrição ou endereço)
- Visualização de débitos
- Emissão de 2ª via
- Parcelamento de débitos
- Calendário de vencimento
- Formas de pagamento
- Isenções e descontos
- Calculadora de IPTU

#### /services/ombudsman (Ouvidoria)
- Formulário de denúncia/reclamação/sugestão
- Tipo: Denúncia, Reclamação, Sugestão, Elogio
- Campos: Nome (opcional), Email, Telefone, Assunto, Descrição
- Upload de evidências
- Número de protocolo gerado
- Consulta de protocolo
- Prazo de resposta
- Canal de acompanhamento

#### /services/traffic (Trânsito e Multas)
- Consulta de multas (placa)
- Emissão de boletos
- Recursos de multas
- Formulário de defesa
- Calendário de vencimentos
- Pontos na CNH
- Serviços de trânsito

#### /services/social (Assistência Social)
- Programas disponíveis
- Requisitos para cadastro
- Formulário de inscrição
- Documentos necessários
- Benefícios oferecidos
- Locais de atendimento
- Contatos

#### /services/health (Saúde)
- Agendamento de consultas
- Unidades de saúde (mapa)
- Calendário de vacinação
- Programas de saúde
- Campanhas ativas
- Telefones úteis
- Farmácia popular

#### /services/education (Educação)
- Matrícula escolar
- Calendário letivo
- Escolas municipais (lista e mapa)
- Programas educacionais
- Vagas disponíveis
- Transporte escolar
- Merenda escolar

### 7. Página de Contato (/contact)
- Formulário de contato
- Campos: Nome, Email, Telefone, Assunto, Mensagem
- Validação com react-hook-form e zod
- Mapa do Google Maps com localização da prefeitura
- Informações de contato:
  - Endereço completo
  - Telefones (fixo, WhatsApp)
  - Email
  - Horário de funcionamento
- Redes sociais
- FAQ com perguntas frequentes

## Funcionalidades Técnicas

### Validação de Formulários
- Usar react-hook-form + zod
- Mensagens de erro em português
- Validações: email, CPF, telefone, campos obrigatórios
- Feedback visual (bordas vermelhas, mensagens)

### Componentes Reutilizáveis
- ServiceCard
- NewsCard
- StatCard
- FormField
- PageHeader
- Section

### Responsividade
- Mobile-first
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menu hamburger em mobile
- Grid adaptativo (1 col mobile, 2-3 desktop)
- Imagens responsivas

### Animações (Tailwind)
- Fade-in em scroll
- Hover elevação em cards
- Transições suaves (transition-all duration-300)
- Skeleton loading

### Dados Mockados
- 30+ notícias de exemplo com imagens, títulos, categorias, datas, conteúdo
- 10+ eventos com datas, locais, descrições
- Estatísticas de transparência
- Lista de serviços completa
- Dados de formulário (não persistem, apenas console.log)

### Toast/Notificações
- Usar sonner ou toast do shadcn
- Sucesso, erro, info
- Mensagens em português
- Posição: top-right ou bottom-right

## Componentes shadcn/ui Necessários
- button
- card
- input
- textarea
- form
- label
- toast
- dialog
- select
- tabs
- accordion
- badge
- separator
- carousel (opcional, para eventos)

## Ícones (lucide-react)
- Home, FileText, Newspaper, Phone, Search
- Building2, Users, Heart, GraduationCap
- Car, FileCheck, DollarSign, MessageSquare
- Facebook, Instagram, Twitter, Youtube
- Mail, MapPin, Clock, Calendar
- ChevronRight, ChevronDown, Menu, X

## Estrutura de Arquivos
```
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── NewsSection.tsx
│   ├── ServicesSection.tsx
│   ├── TransparencySection.tsx
│   ├── EventsSection.tsx
│   ├── NewsletterSection.tsx
│   ├── BreakingNews.tsx
│   ├── SearchBar.tsx
│   ├── QuickAccess.tsx
│   └── ui/ (shadcn components)
├── pages/
│   ├── Index.tsx
│   ├── News.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── NotFound.tsx
│   └── services/
│       ├── Documents.tsx
│       ├── Licenses.tsx
│       ├── IPTU.tsx
│       ├── Ombudsman.tsx
│       ├── Traffic.tsx
│       ├── SocialAssistance.tsx
│       ├── Health.tsx
│       └── Education.tsx
├── App.tsx (rotas)
├── index.css (design system)
└── main.tsx
```

## SEO Básico
- Títulos descritivos em cada página
- Meta descriptions
- Headings estruturados (H1, H2, H3)
- Alt text em imagens
- Semantic HTML

## Observações Importantes
1. Todo o código deve ser em português (comentários, variáveis, funções)
2. Use sempre semantic tokens do design system, nunca cores diretas
3. Todos os formulários devem ter validação
4. Todas as páginas devem ter Header e Footer
5. Use placeholder.svg para imagens
6. Console.log para simular envios de formulário
7. Dados mockados devem ser realistas
8. Priorize acessibilidade (aria-labels, keyboard navigation)
9. Loading states em botões de submit
10. Erro handling em formulários

## Prompt Final
"Crie um portal de prefeitura municipal completo seguindo exatamente as especificações acima. Implemente todas as páginas, componentes, rotas e funcionalidades descritas. Use React, TypeScript, Tailwind CSS, shadcn/ui e lucide-react. O design deve ser inspirado no portal G1, com layout moderno, profissional e totalmente responsivo. Todos os formulários devem ter validação com react-hook-form e zod. Use dados mockados realistas. Implemente o design system com as cores HSL especificadas. Certifique-se de que todos os links, navegação e funcionalidades estejam funcionando perfeitamente."
