import { Button } from "@/components/ui/button"
import Heading1 from "./Heading1"
import Text from "./Text"
import Image from "next/image";
import hero from "./hero.png"

function Hero() {
  return (
    <div className="min-h-[75svh] w-full flex flex-col justify-center gap-6">
      <Image src={hero} alt="" className="absolute right-0 top-[-20%]"/>
      <Heading1 className="max-w-[22ch] z-10">
        Instantly Hiring Anybody With any Kind of Skill
      </Heading1>
      <Text className="max-w-prose z-10">
        Voiled Organization: A community of freelancers and skilled individuals turning ideas into real-world victories. No heavy responsibilities or scary interviews. Gain experience with your skills comfortably and start working instantly!
      </Text>
      <div className="mt-5 flex gap-3 z-10">
        <Button  className="bg-btn1 text-heading font-bold hover:bg-blue-950">
          JOIN US
        </Button>
        <Button variant={'outline'} className="text-btn2 font-bold hover:bg-btn2">
          LEARN MORE
        </Button>
      </div>
    </div>
  )
}

export default Hero