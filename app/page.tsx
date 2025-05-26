import AddressForm from "@/components/address-form";
import Image from "next/image";

import mainImage from "../public/main.jpg";
import venmo from "../public/venmo.jpg";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Countdown from "@/components/countdown";
import RsvpAlert from "@/components/rsvp-alert";

export default function Home() {
  return (
    <>
      <main>
        <section id="home" className="flex items-center justify-center">
          <div className="flex flex-col items-center p-4">
            <h1 className="font-light text-4xl sm:text-7xl tracking-wide mb-10 mt-14 text-center text-[#214b49]">
              PARKER & HANNAH
            </h1>
            <div className="flex flex-col items-center gap-y-1 font-light text-lg sm:text-xl">
              <h2>AUGUST 6, 2025</h2>
              <Countdown />
            </div>
          </div>
        </section>
        <nav className="flex justify-center p-4">
          <ul className="flex gap-4 font-light justify-center flex-wrap text-center max-lg:underline">
            <li className="group">
              <a href="#story">OUR STORY</a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
            </li>
            <li className="group">
              <a href="#address">GIVE ADDRESS</a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
            </li>
            <li className="group">
              <a href="#registry">REGISTRY</a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
            </li>
            <li className="group">
              <a href="/album">PHOTOS</a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
            </li>
          </ul>
        </nav>
        <section className="max-w-6xl md:mx-auto mb-8">
          <Image
            src={mainImage}
            alt="Parker and Hannah"
            className="p-4"
            priority
          />
        </section>
        <section
          id="story"
          className="max-w-5xl p-4 mx-auto flex justify-left my-4"
        >
          <div className="flex flex-col items-center gap-4 font-light">
            <h2 className="text-2xl sm:text-4xl font-light text-[#214b49]">OUR STORY</h2>
            <p className="font-light text-center">
              One sunny summer day in Salt Lake City, Utah (while Hannah and Parker were both working as summer camp counselors) Hannah walked up to Parker, intending to start a conversation and compliment his glasses. Parker... apparently didn&apos;t seem very interested in chatting (he does not remember this). Luckily for Parker, he&apos;d have another chance -- that wasn&apos;t the only time they&apos;d meet that summer.
              Parker was assigned to work a week in Montana in late July, but received a call in Salt Lake, asking if he would do one in Moscow, ID instead. Turns out -- Hannah was going to be there too.
            </p>
            <p className="font-light text-center">
              So... a few weeks later, they reconnect in the airport, heading to Moscow. As the first week goes on, they start to talk more and more. After a conversation on Tuesday, Hannah asks for Parker&apos;s number (she does not remember this).
              Small conversations and jokes turn into walks around campus during their breaks and hanging out during dinner. By Saturday, they are spending the entire day together, ending in a 5-hour conversation on some patch of lawn. It only ends because sprinklers suddenly turn on and they frantically run inside, trying to stay dry.<br />Great story, right? This should be an easy decision and relationship! Just one tiny problem -- the schools they attend are 2 hours apart. 
            </p>
            <p className="font-light text-center">
              After about a month, they are both back in Utah for school and somehow it works out to have 2 dates in the first week. After the second, they chat and decide to start dating despite the 100 miles between them.
              Now, somehow, they survived 8 months of long-distance; Short dates every other weekend with lots of calls and voice messages during the week.
            </p>
            <p className="font-light text-center">
              But it worked and it&apos;s over! That shared trial has drawn them closer together and closer to God.
              Thanks so much to everyone that has helped us with places to stay, rides, and everything in between. We owe you a ton!
            </p>
          </div>
        </section>
        <section id="address" className="sm:flex justify-center my-8 p-4">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-4xl font-light mb-8 text-center text-[#214b49]">
              REQUEST AN ANNOUNCEMENT
            </h2>
            <AddressForm />
          </div>
        </section>
        <section
          id="registry"
          className="flex flex-col items-center my-8 p-4 font-light gap-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-4xl text-[#214b49]">REGISTRY</h2>
          <div className="w-full flex flex-col gap-y-8 md:flex-row items-center gap-x-2 md:justify-around">
            <div className="flex flex-col items-center max-w-sm gap-4 p-4 border rounded ">
              <h3 className="text-xl">Amazon.com</h3>
              <p className="text-center">
                Full of the miscellaneous stuff that every new
                couple needs. Tons of options for every price point.
              </p>
              <a
                href="https://www.amazon.com/hz/wishlist/ls/JGZDRWT1WUEK"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full"
                )}
              >
                View
              </a>
            </div>
            <div className="flex flex-col items-center max-w-sm gap-4 p-4 border rounded ">
              <h3 className="text-xl">Ikea.com</h3>
              <p className="text-center">
                Home goods that can turn any scary basement apartment into a
                warm welcoming abode.
              </p>
              <a
                href="https://www.ikea.com/us/en/gift-registry/guest/?id=b23b1e11-7905-4e30-9301-7189af971697"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full"
                )}
              >
                View
              </a>
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <div className="max-w-sm mx-auto p-4">
            <p className="text-center">Contribute to our honeymoon through Venmo!</p>
            <a
              href="https://account.venmo.com/u/hannah_banana136"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={venmo} alt="venmo @hannah_banana136" />
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full p-8">
        <div className="flex flex-col items-center">
          <p className="text-sm font-light text-center">
            Initial Design &copy; 2023 Carter Singletary<br />Current Version &copy; Parker Argyle
          </p>
        </div>
      </footer>
    </>
  );
}
