import { PostCard } from "@/components/PostCard";

const mockPosts = [
  {
    author: {
      name: "Alex Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      year: "3rd Year",
      department: "Computer Science",
    },
    content: {
      type: "image" as const,
      data: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      caption: "Just finished my first React project! Built a task manager with drag-and-drop functionality. Really proud of how it turned out 🚀",
    },
    likes: 42,
    comments: 8,
    timeAgo: "2h ago",
  },
  {
    author: {
      name: "Priya Sharma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      year: "2nd Year",
      department: "Design",
    },
    content: {
      type: "image" as const,
      data: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      caption: "New UI design for a student marketplace app. Looking for feedback and maybe a developer to collaborate with!",
    },
    likes: 67,
    comments: 15,
    timeAgo: "4h ago",
  },
  {
    author: {
      name: "Marcus Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      year: "4th Year",
      department: "Mechanical Engineering",
    },
    content: {
      type: "text" as const,
      data: "",
      caption: "Looking for team members for the upcoming hackathon! Need 2 developers and 1 designer. Project idea: AI-powered campus navigation system. DM if interested! 🤖",
    },
    likes: 23,
    comments: 12,
    timeAgo: "6h ago",
  },
  {
    author: {
      name: "Sara Williams",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      year: "3rd Year",
      department: "Business",
    },
    content: {
      type: "image" as const,
      data: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      caption: "Our startup pitch won 2nd place at the entrepreneurship competition! Thanks to everyone who supported us 🎉",
    },
    likes: 89,
    comments: 21,
    timeAgo: "1d ago",
  },
];

export default function Feed() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container max-w-2xl py-8">
        <div className="space-y-6">
          {mockPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
