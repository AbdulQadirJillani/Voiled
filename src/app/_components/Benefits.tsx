import { LucideCircleCheckBig } from "lucide-react"
import Heading2 from "./Heading2"
import Text from "./Text"

const data = {
  text: "At Voiled, we stand out as a community dedicated to nurturing everybody’s skill, creativity, and collaboration. By joining us, you’ll be receiving:",
  list: [
    "Opportunities & Career boosts: As you master your skills in Voiled while gaining revenue, you’ll be getting better job and business opportunities with our vast array of connections.",
    "Portfolio Enhancements & Certificates: You’ll be able to show off your works for Voiled in the special parts of your portfolio, signifying how good your performance is at a working organization. You’ll be able to nurture your skills and have something to show for it.",
    "You’ll be experiencing how it feels exactly to be inside the job / business you want to have."
  ]
}

function Benefits() {
  return (
    <div className="grid bg-fill border border-stroke rounded-md">
      <div className="border border-stroke px-8 md:px-10 py-4 rounded-t-md">
        <Heading2>
          Benefits
        </Heading2>
      </div>

      <div className="border border-stroke px-8 md:px-10 py-10 rounded-b-md">
        <Text className="mb-2">
          {data.text}
        </Text>
        <ul>
          {
            data.list.map((l) => (
              <li key={l} className="mb-1 flex gap-2">
                <LucideCircleCheckBig className="shrink-0" color="#94A3B8" size={20}/>
                <Text className="">
                  {l}
                </Text>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Benefits