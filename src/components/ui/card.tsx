import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg shadow-md shadow-primary/50 bg-dark/70",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
