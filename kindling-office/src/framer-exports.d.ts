declare module "@reference-export/*.jsx" {
  import type { ComponentType } from "react";

  const component: ComponentType<Record<string, unknown>> & {
    Responsive?: ComponentType<Record<string, unknown>>;
  };

  export default component;
}
