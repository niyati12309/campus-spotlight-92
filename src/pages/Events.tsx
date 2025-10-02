import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const mockEvents = [
  {
    id: 1,
    title: "Annual Hackathon 2024",
    date: "March 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Engineering Building, Hall A",
    type: "Hackathon",
    description: "48-hour coding marathon with amazing prizes and mentorship from industry leaders.",
    attendees: 156,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Design Thinking Workshop",
    date: "March 22, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Innovation Lab",
    type: "Workshop",
    description: "Learn the fundamentals of design thinking and apply them to real-world problems.",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    date: "April 5, 2024",
    time: "1:00 PM - 6:00 PM",
    location: "Business School Auditorium",
    type: "Competition",
    description: "Present your startup idea to venture capitalists and win seed funding up to $10,000.",
    attendees: 89,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "AI/ML Ideathon",
    date: "April 12, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Science Building",
    type: "Ideathon",
    description: "Brainstorm innovative AI solutions for campus and community challenges.",
    attendees: 67,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
  },
];

const getTypeBadgeVariant = (type: string) => {
  const variants: Record<string, "default" | "secondary" | "outline"> = {
    Hackathon: "default",
    Workshop: "secondary",
    Competition: "default",
    Ideathon: "secondary",
  };
  return variants[type] || "outline";
};

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-6xl py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Campus Events</h1>
          <p className="text-muted-foreground">
            Hackathons, workshops, and competitions happening around campus
          </p>
        </div>

        <div className="grid gap-6">
          {mockEvents.map((event, index) => (
            <Card
              key={event.id}
              className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={getTypeBadgeVariant(event.type)} className="shadow-soft">
                      {event.type}
                    </Badge>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <Button className="gradient-primary">RSVP</Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{event.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
