import type { Breakpoint, WithBreakpoints } from "./ui";

/**
 * Extracts the base value from a WithBreakpoints type.
 * If it's a simple value, returns it. If it's an object with breakpoints,
 * returns the first available value (prioritizing xs -> sm -> md -> lg -> xl -> 2xl)
 * or undefined if no value is found.
 */
export function getBreakpointValue<T>(
  value: WithBreakpoints<T> | undefined
): T | undefined {
  if (value === undefined) {
    return undefined;
  }

  // If it's not an object, it's a direct value
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return value as T;
  }

  // At this point, value is an object. Check if it's a breakpoint object
  // by checking if it has any breakpoint keys
  const breakpointOrder: Breakpoint[] = ["xs", "sm", "md", "lg", "xl", "2xl"];

  // Type guard: if it's a breakpoint object, it will have at least one breakpoint key
  const breakpointObject = value as Partial<Record<Breakpoint, T>>;

  for (const bp of breakpointOrder) {
    if (bp in breakpointObject && breakpointObject[bp] !== undefined) {
      return breakpointObject[bp] as T;
    }
  }

  return undefined;
}
