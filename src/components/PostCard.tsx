import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface PostCardProps {
  author: {
    name: string;
    avatar: string;
    year: string;
    department: string;
  };
  content: {
    type: "image" | "text";
    data: string;
    caption: string;
  };
  likes: number;
  comments: number;
  timeAgo: string;
}

export const PostCard = ({ author, content, likes, comments, timeAgo }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-primary/10">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">{author.name}</p>
              <p className="text-xs text-muted-foreground">
                {author.year} • {author.department}
              </p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">{timeAgo}</span>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        {content.type === "image" && (
          <div className="rounded-lg overflow-hidden mb-3">
            <img
              src={content.data}
              alt="Post content"
              className="w-full object-cover aspect-video hover:scale-105 transition-smooth"
            />
          </div>
        )}
        <p className="text-sm">{content.caption}</p>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 pt-3 border-t">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={handleLike}
            >
              <Heart
                className={`h-5 w-5 transition-smooth ${
                  isLiked ? "fill-secondary text-secondary" : ""
                }`}
              />
              <span className="text-sm">{likesCount}</span>
            </Button>

            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm">{comments}</span>
            </Button>

            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSaved(!isSaved)}
          >
            <Bookmark
              className={`h-5 w-5 transition-smooth ${
                isSaved ? "fill-primary text-primary" : ""
              }`}
            />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
