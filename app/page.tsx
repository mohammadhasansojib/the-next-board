import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      
      <Card className="max-w-sm m-5 p-5">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Project Overview</CardTitle>
          <CardDescription>
            Track progress and recent activity for your Next.js app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente provident, aspernatur totam in necessitatibus modi architecto nam. Id, vel?
        </CardContent>
        <Button className={`cursor-pointer`}>Click Here</Button>
      </Card>

    </div>
  );
}
