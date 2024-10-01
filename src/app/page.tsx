import Hero from "./_components/Hero";
import How from "./_components/How";
import About from "./_components/About";
import Benefits from "./_components/Benefits";
import Reviews from "./_components/Reviews";
import Questions from "./_components/Questions";
import Newsletter from "./_components/Newsletter";

export default function Home() {
  return (
    <div className="bg-background px-[12%] py-[8%] space-y-10">
      <Hero/>
      <How/>
      <About/>
      <Benefits/>
      <Reviews/>
      <Questions/>
      <Newsletter/>
      {/* <Footer/> */}
    </div>
  );
}
