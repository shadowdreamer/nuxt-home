import ScrollTrigger from "gsap/ScrollTrigger";
import { Power0 } from "gsap";
export default ()=>{
  onMounted(() => {
    initNavPin();
  });
  function initNavPin() {
    
    const {$gsap} = useNuxtApp();
    $gsap.set("#app-nav", {
      background: "linear-gradient(0deg,  rgba(255,255,255,0) 20%, rgba(0,0,0,0.2) 100%)",
      color: "#333",
      duration: 0.2,
      ease: Power0.easeOut,
    });
    let trigger = ScrollTrigger.create({
      trigger: "#app-nav",
      pin: true,
      pinSpacing: false,
      start: "top",
      end: "max",
      id: "nav",
      markers: true,
      onUpdate: (self) => {             
        if (self.progress > 0.01) {
          $gsap.to("#app-nav", {
            background: "linear-gradient(0deg, rgba(255,255,255, 0.6) 20%, rgba(255,255,255, 0.0) 100%)",
            color: "#333",
          });
        } else {
          $gsap.to("#app-nav", {
            background: "linear-gradient(0deg, rgba(255,255,255,0) 20%, rgba(0,0,0,0.2) 100%)",
            color: "#333",
          });
        }
      },
    });
    function handleResize() {
      ScrollTrigger.refresh();
      console.log("resize");
      
    }
    const th = throttle(handleResize,500)
    window.addEventListener('resize', th);
    const observer = new MutationObserver(th);
    observer.observe(document.body, { childList: true, subtree: true });
    onUnmounted(() => { 
      trigger.kill();
      observer.disconnect();
      window.removeEventListener('resize', th);
    });
  }
}