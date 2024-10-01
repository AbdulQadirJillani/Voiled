import Image from "next/image"
import Heading2 from "./Heading2"
import img from "./how.png"

function How() {
  return (
    <div className="grid bg-fill border border-stroke rounded-md">
      <div className="border border-stroke px-8 md:px-10 py-4 rounded-t-md">
        <Heading2>
          How We Work
        </Heading2>
      </div>
      <div className="border border-stroke px-8 md:px-10 py-4 rounded-b-md">
        <Image className="w-full" src={img} alt=""/>
      </div>
    </div>
  )
}

export default How