import Image from "next/image"
import Heading2 from "./Heading2"
import Text from "./Text"
import pic from "./pic.webp"
import { LucideStar } from "lucide-react"

const data = [
  {
    pic: pic,
    id: "Erick Presply",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam labore hic error sed eligendi ipsum assumenda neque consequuntur ut!"
  },
  {
    pic: pic,
    id: "Eric Presply",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam labore hic error sed eligendi ipsum assumenda neque consequuntur ut!"
  }
]

function Reviews() {
  return (
    <div className="grid bg-fill border border-stroke rounded-md">
      <div className="border border-stroke px-8 md:px-10 py-4 rounded-t-md">
        <Heading2>
          Reviews
        </Heading2>
      </div>

      <div className="border border-stroke px-5 md:px-10 py-10 rounded-b-md">
        <div className="grid md:grid-cols-2 gap-5">
          {
            data.map((r) => (
              <div key={r.id} className="flex flex-col gap-3 bg-stroke px-5 md:px-8 py-5 rounded-md">
                <div className="flex gap-3 items-center">
                  <Image className='size-10 md:size-14 rounded-full shadow-lg ring-2 ring-btn1 ring-offset-4 ring-offset-stroke' src={pic} alt=""/>
                  <div className="flex flex-col gap-1">
                    <Text className="font-bold">
                      {r.id}
                    </Text>
                    <div className="flex gap-1">
                      {
                        [...Array(5).fill(0)].map((e, n) => 
                        <LucideStar key={n} size={18} color="#DFB300" fill="#DFB300"/>)
                      }
                    </div>
                  </div>
                </div>
                <Text className="">
                  {r.review}
                </Text>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Reviews