 <script>
   function toggleMenu() {
      document.getElementById("nav-links").classList.toggle("show");
    }

    // Image Slider with Controls
    let slides = document.querySelectorAll(".slide");
    let dotsContainer = document.getElementById("dots");
    let currentSlide = 0;
    let slideInterval;

    // Create dots
    slides.forEach((_, i) => {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      if(i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        showSlide(i);
        resetInterval();
      });
      dotsContainer.appendChild(dot);
    });

    let dots = document.querySelectorAll(".dot");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
        if(i === index) {
          slide.classList.add("active");
          dots[i].classList.add("active");
        }
      });
      currentSlide = index;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    document.getElementById("next").addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    document.getElementById("prev").addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

    function startInterval() {
      slideInterval = setInterval(nextSlide, 4000);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      startInterval();
    }

    startInterval();

  </script>
