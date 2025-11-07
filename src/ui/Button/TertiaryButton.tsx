import { forwardRef } from "react";
import Button from "./Button";
import type { ButtonProps } from "./Button";

export interface TertiaryButtonProps extends Omit<ButtonProps, "bgColor" | "borderColor"> {
  /** Override the default danger background color */
  bgColor?: ButtonProps["bgColor"];
  /** Override the default danger border color */
  borderColor?: ButtonProps["borderColor"];
}

const TertiaryButton = forwardRef<HTMLButtonElement, TertiaryButtonProps>(
  ({ bgColor = "danger", borderColor = "danger", ...props }, ref) => {
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

TertiaryButton.displayName = "TertiaryButton";

export default TertiaryButton;

