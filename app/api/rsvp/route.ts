import { NextResponse } from "next/server";
import { google } from "googleapis";

import { rsvpSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, number, events } = rsvpSchema.parse(body);

    const dataToSave = [
      [
        name,
        events.includes("sealing") ? number : 0,
        events.includes("luncheon") ? number : 0,
        events.includes("ceremony") ? number : 0,
        events.includes("reception") ? number : 0,
      ],
    ];

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: "website@wedding-storage.iam.gserviceaccount.com",
        client_id: process.env.CLIENT_ID,
        private_key: (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      valueInputOption: "USER_ENTERED",
      range: process.env.RSVP_SHEET_RANGE,
      requestBody: {
        values: dataToSave,
      },
    });

    console.log(response);

    return NextResponse.json("Success", { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Something went wrong", { status: 500 });
  }
}
