document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.dots-container');
    
    let currentImageIndex = 0;
    const images = [
        '/assets/Group4.png',
        '/assets/Group5.png',
        '/assets/Group4.png',
        '/assets/Group5.png'
    ];

    mainImage.src = images[0];

    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => updateImage(index));
        dotsContainer.appendChild(dot);
    });

    function updateImage(index) {
        currentImageIndex = index;
        mainImage.src = images[index];

        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
            thumb.src = images[i];
        });

        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    thumbnails.forEach((thumb, index) => {
        thumb.src = images[index];
        thumb.addEventListener('click', () => updateImage(index));
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage(currentImageIndex);
    });

    const flavorRadios = document.querySelectorAll('input[name="flavor"]');
    const subscriptionRadios = document.querySelectorAll('input[name="subscription"]');
    const addToCartBtn = document.getElementById('addToCartBtn');

    function updateAddToCartLink() {
        const selectedFlavor = document.querySelector('input[name="flavor"]:checked').value;
        const selectedSubscription = document.querySelector('input[name="subscription"]:checked').value;
        
        let buttonText;
        let price;
        
        switch (selectedSubscription) {
            case 'single':
                buttonText = 'Subscribe Now (Single Kit) →';
                price = '$37';
                break;
            case 'double':
                buttonText = 'Subscribe Now (Double Kit) →';
                price = '$68';
                break;
            case 'try-once':
                buttonText = 'Try Once →';
                price = '$46';
                break;
            default:
                buttonText = 'Add to Cart →';
        }
        
        addToCartBtn.textContent = buttonText;
        
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Adding to cart: ${selectedFlavor} flavor - ${selectedSubscription} subscription - ${price}`);
            alert(`Added to cart: ${selectedFlavor} flavor - ${selectedSubscription} subscription - ${price}`);
        });
    }

    flavorRadios.forEach(radio => {
        radio.addEventListener('change', updateAddToCartLink);
    });

    subscriptionRadios.forEach(radio => {
        radio.addEventListener('change', updateAddToCartLink);
    });

    updateAddToCartLink();
});
document.querySelectorAll(".faq-question").forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      const toggle = item.querySelector(".faq-toggle");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        toggle.textContent = "+";
      } else {
        answer.style.display = "block";
        toggle.textContent = "−";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".testimonial-wrapper");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const dotsContainer = document.querySelector(".dots-container");
    const testimonials = document.querySelectorAll(".testimonial");
    
    let index = 0;

    function updateDots() {
        dotsContainer.innerHTML = "";
        testimonials.forEach((_, i) => {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === index) dot.classList.add("active");
            dot.addEventListener("click", () => {
                index = i;
                scrollToTestimonial();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function scrollToTestimonial() {
        wrapper.scrollTo({
            left: index * 320,
            behavior: "smooth",
        });
        updateDots();
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % testimonials.length;
        scrollToTestimonial();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + testimonials.length) % testimonials.length;
        scrollToTestimonial();
    });

    updateDots();
});
function playVideo() {
    document.getElementById("videoThumbnail").style.display = "none";
    document.getElementById("youtubeVideo").style.display = "block";
}
document.addEventListener("DOMContentLoaded", () => {
    // Search Box Toggle
    const searchIcon = document.querySelector(".search-icon");
    const searchBox = document.querySelector(".search-box");

    searchIcon.addEventListener("click", () => {
        searchBox.style.display = searchBox.style.display === "block" ? "none" : "block";
    });

    // Mobile Menu Toggle
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mobileNav = document.querySelector(".mobile-nav");

    hamburgerMenu.addEventListener("click", () => {
        if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
            mobileNav.style.display = "flex";
        } else {
            mobileNav.style.display = "none";
        }
    });
});
