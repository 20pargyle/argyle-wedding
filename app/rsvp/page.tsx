import RsvpModal from "@/components/rsvp-modal";

export default async function Page() {
 
  return (
    <main>
      <section className="flex flex-col items-center m-16">
        <h1 className="text-2xl">RSVP to Parker and Hannah&apos;s Wedding!</h1>
        <RsvpModal />
      </section>
    </main>
  )
}