"use client";
import StrideFeaturesSection from "@/components/StrideFeaturesSection";
import HeroSection from "@/components/HeroSection";
import CustomerStories from "@/components/CustomerStories";
import RiderTrustSection from "@/components/RiderTrustSection";
import TiltCardParallax from "@/components/TiltCardParallax";
import FaqSection from "@/components/FaqSection";
import OurStory from "@/components/OurStory";

export default function Home() {
  return (
    <>
      <div >
        <section id="hero" className="h-auto w-full overflow-hidden">
          <HeroSection />
        </section>

        <StrideFeaturesSection />
        <OurStory />
        <RiderTrustSection />
        <CustomerStories
          testimonials={[
            {
              quote:
                "Before Stride EV, I used to get tired halfway through the day. Now I can ride longer, deliver more, and still have energy left when I get home.",
              author: "Chinedu",
              title: "Delivery Rider in Surulere",
              image: "/Stride_bike_man.jpeg",
            },
            {
              quote:
                "I like what you guys are doing, once everything is working well as expected, I am sure all riders will switch to your product.",
              author: "Ubong",
              title: "Chowdeck Dispatch Rider",
              image: "/stride_rider.jpeg",
            },
            {
              quote:
                "When will it launch? Once everything is fixed, the speed is increased, I will purchase it, money is not a problem, as long as it delivers for me.",
              author: "Amara",
              title: "Item 7 Dispatch Rider",
              image: "/stride_rider_woman.jpeg",
            },
          ]}
        />

        <FaqSection />
        <TiltCardParallax />
      </div>
    </>
  );
}
