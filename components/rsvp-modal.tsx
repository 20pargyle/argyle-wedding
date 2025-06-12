"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { rsvpSchema } from "@/lib/schemas";
import { Input } from "./ui/input";
import { RadioNew, RadioItem } from "./ui/radio";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { RadioGroup } from "./ui/radio-group";

export default function RsvpModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alreadyFilledOut, setAlreadyFilledOut] = useState(false);

  const responses = [
    { id: "yes", name: "Yes!" },
    { id: "no", name: "No :(" },
    { id: "maybe", name: "Maybe" },
  ];

  useEffect(() => {
    setAlreadyFilledOut(!!localStorage.getItem("RSVP"));
  }, [open]);

  const form = useForm<z.infer<typeof rsvpSchema>>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      rsvpResponse: "yes",
      number: 1,
    },
  });

  function onSubmit(values: z.infer<typeof rsvpSchema>) {
    setLoading(true);
    toast.promise(axios.post("/api/rsvp", values), {
      loading: "Saving RSVP...",
      success: () => {
        setLoading(false);
        form.reset();
        setOpen(false);
        localStorage.setItem("RSVP", "true");
        return "RSVP saved.";
      },
      error: () => {
        setLoading(false);
        return "Problem saving RSVP.";
      },
    });
  }

  return (
    <>
      {!alreadyFilledOut ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[40%]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. the John Doe family"
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rsvpResponse"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start space-x-3 space-y-0">
                    <div className="mb-4">
                      <FormLabel className="text-base">Reception</FormLabel>
                      <FormDescription>Can you make it to our reception in Spanish Fork?</FormDescription>
                    </div>

                    <FormControl>
                      <RadioNew value={field.value} onValueChange={field.onChange}>
                        {responses.map((response) => (
                          <div className="flex items-center gap-3" key={response.id}>
                            <RadioItem value={response.id} id={response.id}></RadioItem>
                            <label htmlFor={response.id}>{response.name}</label>
                          </div>
                        ))}
                      </RadioNew>
                    </FormControl>      
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number in party</FormLabel>
                    <FormControl>
                      <Input type="number" disabled={loading} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading}>
                Submit
              </Button>
            </form>
          </Form>
      ) : (
        <div className="flex items-center justify-center h-40">
          <p>
            You have already RSVP&apos;d! No need to submit another response.
          </p>
        </div>
      )}
    </>
  );
}
