gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);


function workAnimationCode() {
  ScrollTrigger.create({
    trigger: ".sec7",
    start: "top top",
    pin: true,
    pinSpacing: false,
  });

  gsap.to(".cbholder", {
    scrollTrigger: {
      trigger: ".sec7",
      start: "top top",
      pin: true,
      scrub: 2,
    },
    top: "-250%",
  });
}
workAnimationCode();