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
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const events = [
  { id: "sealing", name: "Sealing" },
  { id: "luncheon", name: "Luncheon" },
  { id: "ceremony", name: "Ring Ceremony" },
  { id: "reception", name: "Reception" },
];

export default function RsvpModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alreadyFilledOut, setAlreadyFilledOut] = useState(false);

  useEffect(() => {
    setAlreadyFilledOut(!!localStorage.getItem("RSVP"));
  }, [open]);

  const form = useForm<z.infer<typeof rsvpSchema>>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      events: ["reception"],
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
    <Dialog open={open} onOpenChange={() => setOpen((value) => !value)}>
      <DialogTrigger asChild>
        <Button className="bg-teal-800 hover:bg-teal-700">RSVP</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>RSVP</DialogTitle>
          <DialogDescription>Fill out the form below.</DialogDescription>
        </DialogHeader>
        {!alreadyFilledOut ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. John Doe"
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
                name="events"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Events</FormLabel>
                      <FormDescription>
                        Select the events you will be attending.
                      </FormDescription>
                    </div>
                    {events.map((event) => (
                      <FormField
                        key={event.id}
                        control={form.control}
                        name="events"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={event.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(event.id)}
                                  disabled={loading}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          event.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== event.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {event.name}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
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
      </DialogContent>
    </Dialog>
  );
}
