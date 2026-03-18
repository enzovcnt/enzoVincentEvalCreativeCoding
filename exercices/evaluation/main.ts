import "@/style.css";
import "./style.css";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)


//stylet
const logo = document.querySelector(".stylet");

logo!.addEventListener("mouseenter", () => {
    gsap.fromTo(
        logo,
        {
            xPercent: 0,
        },
        {
            xPercent: 1440,
            duration: 5,
            ease: "power1.out",
            repeat: 1,
            yoyo: true
        }
    );
});


//timeline
let isOpen = false;
const button = document.querySelector("button");
const menuTimeline = gsap.timeline({
    paused: true,
    onComplete: () => {
        isOpen = true;
    },
    onReverseComplete: () => {
        isOpen = false;
    },
});

gsap.set(".menu", { height: "60px", width: "60px" });

menuTimeline
    .to(".menu", { height: "20%", width: "10%" })
    .from(".menu li", { xPercent: 100, stagger: 0.1 }, "<");

button?.addEventListener("click", () => {
    isOpen ? menuTimeline.reverse() : menuTimeline.play();
});

//Text
SplitText.create(".title", {
    type: "chars",
    charsClass: "chars",
    mask: "chars",
});

gsap.from(".chars", {
    yPercent: -100,
    stagger: {
        amount: 4,
        from: "start",
    },
});

//Slider
const slider = new Swiper(".caroussel", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    modules: [Autoplay],
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    allowTouchMove: false,
    centeredSlides: true,
});

