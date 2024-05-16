import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ReviewTypes } from "@/lib/types";
export default function ReviewCard({ review }: { review: ReviewTypes }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{review.author}</CardTitle>
      </CardHeader>
      <CardContent className="leading-7 pb-2 line-clamp-[13] text-sm text-white/80">
        &quot;{review.content}&quot;
      </CardContent>
    </Card>
  );
}
