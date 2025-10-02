import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, TrendingUp, Plus } from "lucide-react";

const mockDiscussions = [
  {
    id: 1,
    title: "Best resources to learn React in 2024?",
    author: {
      name: "Jamie Lee",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
    },
    category: "Learning",
    replies: 23,
    views: 145,
    timeAgo: "2h ago",
    trending: true,
  },
  {
    id: 2,
    title: "How to prepare for technical interviews?",
    author: {
      name: "Sam Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
    },
    category: "Career",
    replies: 45,
    views: 320,
    timeAgo: "5h ago",
    trending: true,
  },
  {
    id: 3,
    title: "Anyone going to the hackathon next week?",
    author: {
      name: "Taylor Brown",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor",
    },
    category: "Events",
    replies: 12,
    views: 89,
    timeAgo: "1d ago",
    trending: false,
  },
  {
    id: 4,
    title: "Tips for managing group projects effectively",
    author: {
      name: "Alex Martinez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex2",
    },
    category: "Advice",
    replies: 31,
    views: 201,
    timeAgo: "1d ago",
    trending: false,
  },
  {
    id: 5,
    title: "Best laptops for CS students under $1000?",
    author: {
      name: "Jordan Taylor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    },
    category: "Tech",
    replies: 56,
    views: 412,
    timeAgo: "2d ago",
    trending: true,
  },
  {
    id: 6,
    title: "Recommendations for online courses on ML?",
    author: {
      name: "Casey Green",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey",
    },
    category: "Learning",
    replies: 19,
    views: 167,
    timeAgo: "3d ago",
    trending: false,
  },
];

const categories = ["All", "Learning", "Career", "Events", "Advice", "Tech"];

export default function Discussions() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-6xl py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Discussion Space</h1>
            <p className="text-muted-foreground">
              Ask questions, share tips, and connect with peers
            </p>
          </div>
          <Button className="gradient-primary shadow-glow gap-2">
            <Plus className="h-4 w-4" />
            Start Discussion
          </Button>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          {mockDiscussions.map((discussion, index) => (
            <Card
              key={discussion.id}
              className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10 ring-2 ring-primary/10 mt-1">
                    <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                    <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-lg leading-tight hover:text-primary transition-smooth">
                        {discussion.title}
                      </h3>
                      {discussion.trending && (
                        <Badge variant="secondary" className="gap-1 whitespace-nowrap">
                          <TrendingUp className="h-3 w-3" />
                          Trending
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{discussion.author.name}</span>
                      <Badge variant="outline">{discussion.category}</Badge>
                      <span>{discussion.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>{discussion.replies} replies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{discussion.views} views</span>
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
