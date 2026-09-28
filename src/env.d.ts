/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    class?: string;
  }
  interface HtmlHTMLAttributes<T> {
    class?: string;
  }
  interface MetaHTMLAttributes<T> {
    charset?: string;
  }
  interface LinkHTMLAttributes<T> {
    crossorigin?: string | boolean;
  }
  interface ScriptHTMLAttributes<T> {
    "set:html"?: string;
  }
}
