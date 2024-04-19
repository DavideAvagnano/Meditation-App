import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-primary border-2 border-primary hover:bg-primary/5 active:bg-transparent",
        hero: "bg-primary/5 border-2 border-primary text-base text-primary font-semibold rounded-full hover:bg-primary/10 hover:ring-1 hover:ring-primary transition-all",
        timer:
          "bg-dark border-2 rounded-full border-primary hover:border-transparent hover:shadow-md hover:shadow-primary transition-all duration-300 group",
        dialog: "relative bg-dark text-primary text-base rounded-full gap-1",
        carousel:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        hero: "px-14 py-3",
        timer: "h-14 w-14",
        carousel: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
