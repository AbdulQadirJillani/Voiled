import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Heading1 from "./Heading1"

function Newsletter() {
  return (
    <div className="mt-9 space-y-9">
      <Heading1 className="">
        Sign up to the newsletter!
      </Heading1>
      <div className="flex w-full max-w-sm items-center gap-5">
        <Input type="email" placeholder="Email Address" className="bg-heading placeholder:text-[#ACACAC]"/>
        <Button  className="bg-btn1 text-heading font-bold hover:bg-blue-950">
          JOIN US
        </Button>
      </div>
    </div>
  )
}

export default Newsletter