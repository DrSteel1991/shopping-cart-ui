import { forwardRef } from "react";
import Button from "./Button";
import type { ButtonProps } from "./Button";

export interface SecondaryButtonProps extends Omit<ButtonProps, "bgColor" | "borderColor"> {
  /** Override the default secondary background color */
  bgColor?: ButtonProps["bgColor"];
  /** Override the default secondary border color */
  borderColor?: ButtonProps["borderColor"];
}

const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ bgColor = "secondary", borderColor = "secondary", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        bgColor={bgColor}
        borderColor={borderColor}
        {...props}
      />
    );
  }
);

SecondaryButton.displayName = "SecondaryButton";

export default SecondaryButton;

