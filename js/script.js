import Slider from './Slider.js';

const run = () => {
    const props = {
        container: "#slider",
        imageSources: ["../assets/img1.jpg", "../assets/img2.jpg", "../assets/img3.jpg", "../assets/img4.jpg"]
    }

    const slider = new Slider(props);
}

document.addEventListener("DOMContentLoaded", run);