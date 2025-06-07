// components/ui/radio.tsx

import * as React from "react"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"

const RadioNew = React.forwardRef<
  React.ElementRef<typeof RadioGroup.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroup.Root>
>(({ className, ...props }, ref) => (
  <RadioGroup.Root
    ref={ref}
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
))
RadioNew.displayName = RadioGroup.Root.displayName

const RadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroup.Item>
>(({ className, children, ...props }, ref) => (
  <RadioGroup.Item
    ref={ref}
    className={cn(
      "h-4 w-4 shrink-0 rounded-full border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <RadioGroup.Indicator className="flex items-center justify-center text-current" />
    {children}
  </RadioGroup.Item>
))
RadioItem.displayName = RadioGroup.Item.displayName

export { RadioNew, RadioItem }
