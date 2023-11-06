import { Info } from "lucide-react";

import RsvpModal from "@/components/rsvp-modal";

export default function RsvpAlert() {
  return (
    <div className="border-2 rounded py-2 px-4 flex justify-between items-center mx-4 bg-teal-200 border-teal-400 text-teal-800">
      <div className="flex items-center gap-x-4">
        <Info />
        <div>
          <p>RSVP</p>
          <p className="font-light">
            Click the button to RSVP for our wedding.
          </p>
        </div>
      </div>
      <RsvpModal />
    </div>
  );
}
