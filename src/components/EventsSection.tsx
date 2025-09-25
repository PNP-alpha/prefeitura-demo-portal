import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const EventsSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = [
    {
      id: 1,
      title: "Feira de Empreendedorismo Local",
      description: "Evento para fomentar o empreendedorismo e negócios locais da região.",
      date: "2024-01-20",
      time: "09:00",
      location: "Praça Central",
      category: "Economia",
      attendees: 150,
      status: "confirmed"
    },
    {
      id: 2,
      title: "Audiência Pública - Orçamento 2024",
      description: "Discussão do orçamento municipal para o próximo ano com participação popular.",
      date: "2024-01-22",
      time: "19:00",
      location: "Câmara Municipal",
      category: "Política",
      attendees: 80,
      status: "confirmed"
    },
    {
      id: 3,
      title: "Festival de Cultura Popular",
      description: "Celebração da cultura local com apresentações artísticas e gastronômicas.",
      date: "2024-01-25",
      time: "15:00",
      location: "Centro Cultural",
      category: "Cultura",
      attendees: 300,
      status: "confirmed"
    },
    {
      id: 4,
      title: "Mutirão de Limpeza do Rio",
      description: "Ação voluntária para limpeza e preservação do meio ambiente urbano.",
      date: "2024-01-27",
      time: "08:00",
      location: "Margem do Rio",
      category: "Meio Ambiente",
      attendees: 120,
      status: "confirmed"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short'
    });
  };

  const formatFullDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Economia': 'bg-green-500/10 text-green-700 border-green-200',
      'Política': 'bg-blue-500/10 text-blue-700 border-blue-200',
      'Cultura': 'bg-purple-500/10 text-purple-700 border-purple-200',
      'Meio Ambiente': 'bg-emerald-500/10 text-emerald-700 border-emerald-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-700 border-gray-200';
  };

  // Simple calendar days for the current month
  const currentMonth = new Date();
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Agenda e Eventos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acompanhe a agenda oficial e participe dos eventos que transformam nossa cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Widget */}
          <div className="lg:col-span-1">
            <Card className="institutional-card">
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  Janeiro 2024
                </CardTitle>
                <CardDescription className="text-center">
                  Clique em uma data para ver os eventos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                    <div key={day} className="p-2 font-semibold text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for the first week */}
                  {Array.from({ length: 1 }, (_, i) => (
                    <div key={`empty-${i}`} className="p-2"></div>
                  ))}
                  
                  {calendarDays.map(day => {
                    const hasEvent = events.some(event => 
                      new Date(event.date).getDate() === day
                    );
                    const isToday = day === new Date().getDate();
                    
                    return (
                      <button
                        key={day}
                        className={`p-2 text-sm rounded-lg transition-colors ${
                          hasEvent 
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90 font-semibold' 
                            : isToday
                            ? 'bg-primary/20 text-primary font-semibold'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-3 h-3 bg-primary rounded"></div>
                    <span>Dias com eventos</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Próximos Eventos</h3>
              
              {events.map((event) => (
                <Card key={event.id} className="institutional-card group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Date Badge */}
                      <div className="flex-shrink-0">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[70px]">
                          <div className="text-sm font-medium opacity-90">
                            {formatDate(event.date).split(' ')[1].toUpperCase()}
                          </div>
                          <div className="text-2xl font-bold">
                            {formatDate(event.date).split(' ')[0]}
                          </div>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                              {event.title}
                            </h4>
                            <Badge className={`${getCategoryColor(event.category)} border`}>
                              {event.category}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{event.time}h</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{event.attendees} participantes</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              {formatFullDate(event.date)}
                            </span>
                            <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              Mais Detalhes
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Events Button */}
            <div className="mt-8 text-center">
              <Button size="lg" className="institutional-button">
                Ver Agenda Completa
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;