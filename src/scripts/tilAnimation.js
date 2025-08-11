import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
    const element = document.querySelectorAll('.js-titlt');
    VanillaTilt.init(element);
}