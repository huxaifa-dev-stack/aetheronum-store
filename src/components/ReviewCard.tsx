import { Star, ThumbsUp, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
}

interface ReviewCardProps {
  review: Review;
  onHelpful: (reviewId: string) => void;
}

export function ReviewCard({ review, onHelpful }: ReviewCardProps) {
  const userInitials = review.userName
    .split(" ")
    .map(name => name.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div className="p-4 border border-border rounded-lg bg-card">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
            {userInitials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-medium text-sm">{review.userName}</h4>
            {review.verified && (
              <Badge variant="secondary" className="text-xs">
                Verified Purchase
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= review.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {review.comment}
          </p>
          
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onHelpful(review.id)}
              className="text-xs h-8 px-2"
            >
              <ThumbsUp className="w-3 h-3 mr-1" />
              Helpful ({review.helpful})
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}