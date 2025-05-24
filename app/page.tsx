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
            <h1 className="font-light text-4xl sm:text-7xl tracking-wide mb-10 mt-14">
              PARKER & HANNAH
            </h1>
            <div className="flex flex-col items-center gap-y-1 font-light text-lg sm:text-xl">
              <h2>AUGUST 6, 2025</h2>
              <Countdown />
            </div>
          </div>
        </section>
        <nav className="flex justify-center p-4">
          <ul className="flex gap-10 font-light">
            <li className="group">
              <a href="#story">OUR STORY</a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
            </li>
            <li className="group">
              <a href="#address">ADDRESS</a>
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
          className="max-w-5xl p-4 mx-auto flex justify-left my-8"
        >
          <div className="flex flex-col items-center gap-4 font-light">
            <h2 className="text-2xl sm:text-4xl font-light">OUR STORY</h2>
            <p>
              One sunny summer day in Salt Lake City Utah (while Hannah and Parker were both working as summer camp counselors) Hannah walked up to Parker, intending to start a conversation and compliment his glasses.<br/>Parker... apparently wasn't super down to talk (he does not remember this). <br/> Luckily for Parker, he'd have another chance -- that wasn't the only time they'd meet that summer.
            </p>
            <p>
              Parker was supposed to do a week of camp in Montana in late July, but received a call that week in Salt Lake - apparently there already were enough people for that week of camp, so they asked if he would do one in California instead.<br />He said no.<br />How about Moscow, ID then? 
            </p>
            <p>
              So... a few weeks later, Hannah also happens to be going to Moscow, ID. They chat for a little bit in the airport, and go to dinner with a small group that evening.
            </p>
            <p>
              As the first week goes on, start to talk more and more. After a conversation on Tuesday, Hannah asks for Parker's number (She does not remember this).
            </p>
            <p>
              Conversations turn into walks around campus during breaks, hanging out during dinner, leading to spending that entire Saturday together, ending in a 5-hour conversation that only ends because it's 11PM and the sprinklers suddenly turn on.
            </p>
            <p>
              Now the problem.... they live 2 hours apart. After spending a month apart, they chat and decide to start dating despite the distance.
            </p>
            <p>
              Somehow, we survived 8 months of long-distance - only little dates every other weekend and lots of calls. But it worked! 
            </p>
            <p>
              Thanks so much to everyone that has helped us with places to stay, rides to/from Logan & Provo and everything inbetween.
            </p>
          </div>
        </section>
        <section id="address" className="sm:flex justify-center my-8 p-4">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-4xl font-light mb-8">
              REQUEST AN ANNOUCNEMENT
            </h2>
            <AddressForm />
          </div>
        </section>
        <section
          id="registry"
          className="flex flex-col items-center my-8 p-4 font-light gap-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-4xl">REGISTRY</h2>
          <div className="w-full flex flex-col gap-y-8 md:flex-row items-center gap-x-2 md:justify-around">
            <div className="flex flex-col items-center max-w-sm gap-4 p-4 border rounded ">
              <h3 className="text-xl">Amazon.com</h3>
              <p className="text-center">
                Full of the miscellaneous stuff n&apos; things that every new
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
                Full of homegoods to turn any scary basement apartment into a
                warm welcoming abode. Find something on our list that shows your
                style.
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
          <p className="text-sm font-light">
            Initial Design &copy; 2023 Carter Singletary
          </p>
        </div>
      </footer>
    </>
  );
}
