import { cn } from "../../lib/cn";

export function Container({ children, className, as: Component = "div" }) {
  return (
    <Component className={cn("site-container", className)}>
      {children}
    </Component>
  );
}

export default Container;
