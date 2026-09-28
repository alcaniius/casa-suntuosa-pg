/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import "react";

declare module "astro/jsx-runtime" {
  export * from "astro/dist/jsx-runtime/index.js";
  export import JSX = astroHTML.JSX;
}

declare module "astro/jsx-dev-runtime" {
  export * from "astro/dist/jsx-runtime/index.js";
  export import JSX = astroHTML.JSX;
}

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
  interface SVGAttributes<T> {
    class?: string;
  }
}
