import {Card} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      
      <Card className="w-80 p-5 m-5 bg-gray-50 shadow-xl">
        <Image src={`/globe.svg`} alt="next-image" width="100" height="100" className="m-1" />
        <h1 className="text-3xl font-bold">Title Here</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, deleniti!</p>
        <Button variant={"default"} size="lg" className="cursor-pointer">Click Here</Button>
      </Card>
    </div>
  );
}
