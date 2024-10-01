import Heading2 from "./Heading2"
import Text from "./Text"

const data = [
  {
    heading: "VOILED ORGANIZATION",
    text: "We're a dynamic community dedicated to transforming ideas into triumphs. Our platform is a creative haven, uniting diverse minds for innovation and collaboration."
  },
  {
    heading: "YOUR JOB INSIDE VOILED",
    text: "Your job will be an Idea Creator for professionals to build. Revenue will be shared between you Idea Creators, and the professionals, where you’ll mingle with them."
  },
  {
    heading: "OUR MISSION",
    text: "Our goal is to empower individuals to bring ideas to life. Through collaboration and recognition, we aim to create a thriving space where innovative concepts flourish into impactful realities."
  },
  {
    heading: "Looking to become a professional?",
    text: "Skills we’re looking for: Web Developing, Web Designing, Marketing (All Types), SEO Optimizing, Photo & Video Editing, Content writing, App developing, AI Experts, and UI/UX Designers. If you’re looking to master your skills here, Join us and get hired instantly!"
  }
]

function About() {
  return (
    <div className="grid bg-fill border border-stroke rounded-md">
      <div className="border border-stroke px-8 md:px-10 py-4 rounded-t-md">
        <Heading2>
          About Us
        </Heading2>
      </div>

      <div className="border border-stroke px-8 md:px-10 py-10 rounded-b-md">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            data.map((i, n) => (
              <div key={i.text} className={n==3 ? "lg:col-span-3" : ""}>
                <Text className="text-[20px] md:text-center font-extrabold mb-1">
                  {i.heading}
                </Text>
                <Text className="md:text-center">
                  {i.text}
                </Text>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About