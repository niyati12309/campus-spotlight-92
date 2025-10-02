import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Link as LinkIcon, Calendar, Github, Linkedin } from "lucide-react";

const mockProfile = {
  name: "Alex Chen",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  year: "3rd Year",
  department: "Computer Science",
  bio: "Full-stack developer passionate about building cool stuff. Always looking for new projects to work on!",
  location: "San Francisco, CA",
  joinedDate: "January 2023",
  skills: ["React", "Node.js", "Python", "UI/UX", "Machine Learning"],
  projects: [
    {
      title: "Task Manager Pro",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      likes: 42,
    },
    {
      title: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
      likes: 38,
    },
    {
      title: "E-commerce Site",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      likes: 56,
    },
    {
      title: "Social Media Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      likes: 67,
    },
    {
      title: "Chat Application",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      likes: 45,
    },
    {
      title: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      likes: 72,
    },
  ],
  stats: {
    posts: 24,
    followers: 342,
    following: 189,
  },
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-5xl py-8">
        <Card className="shadow-medium animate-fade-in">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-32 w-32 ring-4 ring-primary/20 shadow-glow">
                  <AvatarImage src={mockProfile.avatar} alt={mockProfile.name} />
                  <AvatarFallback className="text-2xl">{mockProfile.name[0]}</AvatarFallback>
                </Avatar>
                <Button className="w-full gradient-primary">Edit Profile</Button>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-3xl font-bold mb-1">{mockProfile.name}</h1>
                  <p className="text-muted-foreground">
                    {mockProfile.year} • {mockProfile.department}
                  </p>
                </div>

                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{mockProfile.stats.posts}</div>
                    <div className="text-sm text-muted-foreground">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{mockProfile.stats.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{mockProfile.stats.following}</div>
                    <div className="text-sm text-muted-foreground">Following</div>
                  </div>
                </div>

                <p className="text-sm">{mockProfile.bio}</p>

                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {mockProfile.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {mockProfile.joinedDate}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {mockProfile.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Projects & Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockProfile.projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden shadow-soft hover:shadow-medium transition-smooth cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    ❤️ {project.likes}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
