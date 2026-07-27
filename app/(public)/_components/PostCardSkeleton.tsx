import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";


function PostCardSkeleton() {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-sm">
      <div className="relative h-48 w-full animate-pulse bg-muted" />

      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="h-5 w-20 animate-pulse rounded-full bg-muted" />
          <div className="h-3 w-12 animate-pulse rounded bg-muted" />
        </div>

        <div className="space-y-2">
          <div className="h-5 w-full animate-pulse rounded bg-muted" />
          <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
        </div>

        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="h-4 w-40 animate-pulse rounded bg-muted" />
      </CardContent>

      <CardFooter>
        <div className="h-9 w-full animate-pulse rounded-md bg-muted" />
      </CardFooter>
    </Card>
  );
}

export default PostCardSkeleton;