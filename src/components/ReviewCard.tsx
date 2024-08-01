import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ReviewTypes } from "@/lib/types";
export default function ReviewCard({ review }: { review: ReviewTypes }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{review.author}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 line-clamp-6 text-sm text-white/80">
        &quot;{review.content}&quot;
      </CardContent>
    </Card>
  );
}
