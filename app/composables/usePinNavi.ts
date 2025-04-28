import ScrollTrigger from "gsap/ScrollTrigger";
import { Power0 } from "gsap";
export default ()=>{
  onMounted(() => {
    initNavPin();
  });
  function initNavPin() {
    
    const {$gsap} = useNuxtApp();
    $gsap.set("#app-nav", {
      background: "#333",
      color: "#fff",
      duration: 0.2,
      ease: Power0.easeOut,
    });
    let trigger = ScrollTrigger.create({
      trigger: "#app-nav",
      pin: true,
      pinSpacing: false,
      start: "top",
      end: "max",
      onUpdate: (self) => {             
        if (self.progress > 0.01) {
          $gsap.to("#app-nav", {
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
          });
        } else {
          $gsap.to("#app-nav", {
            background: "#333",
            color: "#fff",
          });
        }
      },
    });
    function handleResize() {
      ScrollTrigger.refresh();
      console.log("resize",ScrollTrigger);

      
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