import * as z from "zod";

export const addressSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  lineOne: z.string().min(1, { message: "Address line one is required." }),
  lineTwo: z.string(),
  city: z.string().min(1, { message: "City is required." }),
  state: z.string().min(1, { message: "State is required." }),
  zip: z.string().min(5, { message: "Zipcode is required." }),
  email: z.string().email({ message: "Email is required." }),
  attending: z.string(),
});
