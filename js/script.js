// toogling humbager mwnu on mobile view
const headerComponent = document.querySelector(".header");
const menuBtn = document.querySelector(".btn-mobile-nav");

const toogleMobileMenu = () => {
    headerComponent.classList.toggle("nav-open");
};
menuBtn.addEventListener("click", toogleMobileMenu);

// adding a sticky navigation
const heroSection = document.getElementById("hero");

const observerFunc = (entries) => {
    const ent = entries[0];
    console.log(ent);
};

const observer = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);
        if (!ent.isIntersecting) {
            document.body.classList.add("sticky");
        } else {
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);

observer.observe(heroSection);
