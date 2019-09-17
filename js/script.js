import Slider from './Slider.js';

const run = () => {
    const props = {
        container: "#slider",
        imageSources: [
            "https://images.alphacoders.com/943/943148.jpg",
            "https://images5.alphacoders.com/602/602575.png", 
            "https://images.alphacoders.com/699/699287.jpg", 
            "https://images4.alphacoders.com/220/220184.jpg"]
    }

    const slider = new Slider(props);
}

document.addEventListener("DOMContentLoaded", run);