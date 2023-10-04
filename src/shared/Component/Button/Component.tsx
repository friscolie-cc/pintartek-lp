import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className="w-[200px] px-3 py-2 rounded-sm text-white bg-blue-500"
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
