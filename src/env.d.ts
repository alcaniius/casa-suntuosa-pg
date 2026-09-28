/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import "react";

declare module "react" {
  interface Attributes {
    "client:load"?: boolean | string;
    "client:idle"?: boolean | string;
    "client:visible"?: boolean | string;
    "client:media"?: string;
    "client:only"?: boolean | string;
  }
  interface HTMLAttributes<T> {
    class?: string;
    fetchpriority?: string;
  }
  interface ImgHTMLAttributes<T> {
    fetchpriority?: string;
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
