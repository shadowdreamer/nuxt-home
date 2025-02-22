// plugins/gsap.client.ts
import { defineNuxtPlugin } from '#app';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap); 
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  
});

declare module '#app' {
  interface NuxtApp {
    $gsap: typeof gsap;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $gsap: typeof gsap;
  }
}