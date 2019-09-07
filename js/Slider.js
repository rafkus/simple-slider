class Slider {
    constructor(props) {
        this.mainContainer = this.getMainContainer(props.container);
        this.imageSources = props.imageSources;
        this.sliderItems = null;
        this.prevButton = null;
        this.nextButton = null;
        this.currentSlide = 0;

        this.changeImage = this.changeImage.bind(this);
        this.calculateNextSlide = this.calculateNextSlide.bind(this);
        this.calculatePrevSlide = this.calculatePrevSlide.bind(this);
        this.removeActiveClass = this.removeActiveClass.bind(this);
        this.addActiveClass = this.addActiveClass.bind(this);

        this.build();
        this.sliderItems = document.querySelectorAll(".slider-item");
        this.activateFirstSlide();
    }

    getMainContainer(containerId) {
        const container = document.querySelector(containerId);
        if(container === null) {
            throw new Error("Couldnt initialize container. There is no element with id: " + containerId);
        }
        return container;
    }

    activateFirstSlide() {
        this.sliderItems[0].classList.add("active");
    }

    build() {
        this.mainContainer.classList.add("slider");
        const slidesContainer = this.createSlidesContainer();
        const sliderItems = this.createAllsliderItems();
        slidesContainer.appendChild(sliderItems);

        this.prevButton = this.createButton("prev");
        this.prevButton.classList.add("btn-prev");
        this.nextButton = this.createButton("next");
        this.nextButton.classList.add("btn-next");

        this.prevButton.addEventListener("click", () => { this.changeImage(this.calculatePrevSlide) });
        this.nextButton.addEventListener("click", () => { this.changeImage(this.calculateNextSlide) });
        
        this.mainContainer.appendChild(slidesContainer);
        this.mainContainer.appendChild(this.prevButton);
        this.mainContainer.appendChild(this.nextButton);
    }

    createSlidesContainer() {
        const div = document.createElement("div");
        div.classList.add("slides-container");
        return div;
    }

    createAllsliderItems() {
        const sliderItems = document.createDocumentFragment();
        this.imageSources.forEach((source) => {
            const slideItem = this.createSlideItem(source);
            sliderItems.appendChild(slideItem);
        });
        return sliderItems;
    }

    createSlideItem(src) {
        const slideItem = document.createElement("div");
        slideItem.classList.add("slider-item");

        const image = document.createElement("img");
        image.setAttribute("src", src);

        slideItem.appendChild(image);
        return slideItem;
    }

    createButton(id) {
        const button = document.createElement("button");
        button.setAttribute("id", id);
        button.classList.add("slider-btn");

        return button;
    }

    changeImage(calculateCurrentSlide) {
        this.removeActiveClass();
        calculateCurrentSlide();
        this.addActiveClass();
    }

    removeActiveClass() {
        this.sliderItems[this.currentSlide].classList.remove("active");
    }

    addActiveClass() {
        this.sliderItems[this.currentSlide].classList.add("active");
    }

    calculateNextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.imageSources.length;
    }

    calculatePrevSlide() {
        this.currentSlide--;
        
        if(this.currentSlide < 0) {
            this.currentSlide = this.imageSources.length - 1;
        } 
    }
}

export default Slider;