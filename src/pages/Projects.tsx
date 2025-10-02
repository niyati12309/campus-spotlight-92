import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MessageCircle, Plus } from "lucide-react";

const mockProjects = [
  {
    id: 1,
    title: "AI Campus Navigator",
    description: "Building an AI-powered navigation system for our campus. Looking for developers with experience in React Native and machine learning.",
    author: {
      name: "Marcus Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    skills: ["React Native", "Python", "TensorFlow"],
    lookingFor: ["2 Developers", "1 ML Engineer"],
    interested: 12,
    timeAgo: "3h ago",
  },
  {
    id: 2,
    title: "Student Marketplace App",
    description: "Creating a marketplace for students to buy, sell, and trade items. Need a backend developer and UI/UX designer.",
    author: {
      name: "Priya Sharma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    skills: ["Node.js", "MongoDB", "Figma"],
    lookingFor: ["1 Backend Dev", "1 Designer"],
    interested: 18,
    timeAgo: "1d ago",
  },
  {
    id: 3,
    title: "Campus Events Platform",
    description: "Building a centralized platform for all campus events, clubs, and activities. Join us to make student life more connected!",
    author: {
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    skills: ["React", "Firebase", "Tailwind"],
    lookingFor: ["2 Full-stack Developers"],
    interested: 25,
    timeAgo: "2d ago",
  },
  {
    id: 4,
    title: "Study Group Finder",
    description: "App to help students find study partners and groups based on courses and learning styles. Perfect for remote learning!",
    author: {
      name: "David Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    skills: ["Vue.js", "PostgreSQL", "WebRTC"],
    lookingFor: ["1 Frontend Dev", "1 Backend Dev"],
    interested: 15,
    timeAgo: "3d ago",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-6xl py-8">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Project Collaboration</h1>
            <p className="text-muted-foreground">
              Find teammates and join exciting projects
            </p>
          </div>
          <Button className="gradient-primary shadow-glow gap-2">
            <Plus className="h-4 w-4" />
            Post Project Idea
          </Button>
        </div>

        <div className="grid gap-6">
          {mockProjects.map((project, index) => (
            <Card
              key={project.id}
              className="shadow-soft hover:shadow-medium transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Avatar className="h-10 w-10 ring-2 ring-primary/10">
                      <AvatarImage src={project.author.avatar} alt={project.author.name} />
                      <AvatarFallback>{project.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        by {project.author.name} • {project.timeAgo}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Express Interest
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm">{project.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Users className="h-4 w-4 text-primary" />
                    Looking for:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.lookingFor.map((role) => (
                      <Badge key={role} variant="secondary" className="gradient-secondary">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {project.interested} interested
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
