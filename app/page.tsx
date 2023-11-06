import AddressForm from "@/components/address-form";
import Image from "next/image";

import title from "../public/title.svg";
import mainImage from "../public/main.jpeg";
import venmo from "../public/venmo.jpeg";

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
            <Image src={title} alt="Our Day" priority className="pl-6" />
            <h1 className="font-light text-4xl sm:text-7xl tracking-wide mb-10">
              MEG & CARTER
            </h1>
            <div className="flex flex-col items-center gap-y-1 font-light text-lg sm:text-xl">
              <h2>DECEMBER 19, 2023 - HIGHLAND, UTAH</h2>
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
          </ul>
        </nav>
        <section className="max-w-5xl md:mx-auto mb-8">
          <RsvpAlert />
          <Image
            src={mainImage}
            alt="Megan and Carter"
            className="p-4"
            priority
          />
        </section>
        <section
          id="story"
          className="max-w-4xl p-4 mx-auto flex justify-center my-8"
        >
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl sm:text-4xl font-light">OUR STORY</h2>
            <p className="font-light text-center">
              Meeting was the absolute last thing either of us expected, but one
              of the greatest blessings of our lives. It seems like a million
              strings had to be pulled and a million redirections had to be
              taken for us to just sit next to each other in an institute class
              on the second day of school. Having both just returned from our
              missions five weeks earlier, we hit it off instantly and went on
              our first date just two hours after meeting, a very spontaneous
              and slightly less than romantic trip to Utah State&apos;s very own
              Taco Time. (USU&apos;s dining hall is one thing about their campus
              that needs a serious update, so you can imagine greasy tables and
              ultimately the picture of class.) Somehow it still worked, and due
              to Carter&apos;s stalking habits, accidentally becoming a couple
              one week in, and an endless amount of good car talks, we have
              spent every possible day together since that first time we charmed
              each other&apos;s socks off at Taco Time :)
            </p>
            <p className="font-light text-center max-w-2xl mx-auto">
              We love you all and are so excited to celebrate our big day with
              you. Thank you for being there and for loving us as much as we
              love you!!
            </p>
          </div>
        </section>
        <section id="address" className="sm:flex justify-center my-8 p-4">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-4xl font-light">
              REQUEST AN INVATATION
            </h2>
            <p className="font-light text-md sm:text-xl mb-8">
              COME CELEBRATE WITH US.
            </p>
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
                href="https://www.amazon.com/wedding/registry/26AW4LWEACM09"
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
                href="https://www.ikea.com/us/en/gift-registry/guest/?id=5a2583a7-95ba-4c54-8f8a-f8680e5b457e"
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
              href="https://account.venmo.com/u/Carter-Singletary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={venmo} alt="venmo @carter-singletary" />
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full p-8">
        <div className="flex flex-col items-center">
          <p className="font-light mb-4">Designed by Meg & Carter</p>
          <p className="text-sm font-light">
            Copyright &copy; 2023 Carter Singletary
          </p>
        </div>
      </footer>
    </>
  );
}
