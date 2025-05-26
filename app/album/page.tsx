import Image from "next/image"
import mainImage from "../../public/main.jpg";
import img1 from "../../public/IMG_4358.jpg";
import img2 from "../../public/IMG_4436.jpg";
import img3 from "../../public/IMG_4488.jpg";
import img4 from "../../public/IMG_4542.jpg";
import img5 from "../../public/IMG_4649.jpg";
import img6 from "../../public/IMG_4657.jpg";

const imgClass = "max-sm:max-w-xs max-w-xl m-6 max-sm:m-2 border-4";
 
export default async function Page() {
  return (
    <>
      <main>
        <h1 className="m-8 mt-10 text-center text-5xl font-light text-[#214b49]">PHOTOS</h1>
        <section className="flex flex-wrap justify-center w-full">
          <Image
            src={img1}
            alt="Parker and Hannah"
            className={imgClass}
          />
          <Image
            src={img5}
            alt="Parker and Hannah"
            className={imgClass}
          />
          <Image
            src={img4}
            alt="Parker and Hannah"
            className={imgClass}
          />
          <Image
            src={img3}
            alt="Parker and Hannah"
            className={imgClass}
          />
          <Image
            src={img2}
            alt="Parker and Hannah"
            className={imgClass}
            priority
          />
          <Image
            src={img6}
            alt="Parker and Hannah"
            className={imgClass}
          />
        </section>
      </main>
    </>
  )
}