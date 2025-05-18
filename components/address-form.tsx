"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import states from "states-us";
import { Check, ChevronsUpDown } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { addressSchema } from "@/lib/schemas";

export default function AddressForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      name: "",
      lineOne: "",
      lineTwo: "",
      city: "",
      state: "",
      email: "",
      zip: "",
      attending: "yes",
    },
  });

  async function onSubmit(values: z.infer<typeof addressSchema>) {
    setLoading(true);
    toast.promise(axios.post("/api/address", values), {
      loading: "Saving address...",
      success: () => {
        setLoading(false);
        form.reset();
        return "Address saved.";
      },
      error: () => {
        setLoading(false);
        return "Problem saving address.";
      },
    });
  }

  return (
    <div className="w-full sm:w-[500px]">
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
            name="lineOne"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line One</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 123 Random Lane"
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
            name="lineTwo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line Two</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. apt 8"
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
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Scranton"
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
            name="state"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>State</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        disabled={loading}
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? states.find(
                              (state) => state.abbreviation === field.value
                            )?.abbreviation
                          : "Select state"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search states..." />
                      <CommandEmpty>No state found.</CommandEmpty>
                      <CommandGroup>
                        {states.map((state) => (
                          <CommandItem
                            value={state.abbreviation}
                            key={state.abbreviation}
                            onSelect={() => {
                              form.setValue("state", state.abbreviation);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                state.abbreviation === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {state.abbreviation}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zipcode</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 84321"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. example@email.com"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  We need this so we can update you, just in case.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
