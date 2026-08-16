// ==========================================
// MAHALAKSHMI PORTFOLIO - SCRIPT.JS
// ==========================================


// ==========================================
// 1. SMOOTH SCROLLING
// ==========================================

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================================
// 2. NAVBAR ACTIVE LINK
// ==========================================

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav-links a"
);

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (
            linkTarget === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


// Run when scrolling

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


// Run when page loads

updateActiveNavigation();


// ==========================================
// 3. NAVBAR BACKGROUND ON SCROLL
// ==========================================

const navbar =
    document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateNavbar
);

updateNavbar();


// ==========================================
// 4. HERO ENTRANCE ANIMATION
// ==========================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);


// ==========================================
// 5. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".section-container, .skill-card, .project-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ==========================================
// 6. PROJECT CARD STAGGER ANIMATION
// ==========================================

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    }
);


// ==========================================
// 7. SKILL CARD STAGGER ANIMATION
// ==========================================

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );

skillCards.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 70}ms`;

    }
);


// ==========================================
// 8. HERO BUTTON EFFECT
// ==========================================

const heroButton =
    document.querySelector(
        ".hero-button"
    );

if (heroButton) {

    heroButton.addEventListener(
        "mouseenter",
        () => {

            heroButton.classList.add(
                "button-hover"
            );

        }
    );

    heroButton.addEventListener(
        "mouseleave",
        () => {

            heroButton.classList.remove(
                "button-hover"
            );

        }
    );

}


// ==========================================
// 9. IMAGE LOAD EFFECT
// ==========================================

const profileImage =
    document.querySelector(
        ".profile-image"
    );

if (profileImage) {

    profileImage.addEventListener(
        "load",
        () => {

            profileImage.classList.add(
                "image-loaded"
            );

        }
    );

}


// ==========================================
// 10. PARALLAX EFFECT FOR CHARACTER
// ==========================================

const character =
    document.querySelector(
        ".character"
    );

window.addEventListener(
    "scroll",
    () => {

        if (!character) return;

        const scrollPosition =
            window.scrollY;

        // Only apply while hero is visible

        if (scrollPosition < window.innerHeight) {

            const movement =
                scrollPosition * 0.08;

            character.style.transform =
                `translateY(${movement}px)`;

        }

    }
);


// ==========================================
// 11. SCROLL INDICATOR
// ==========================================

const scrollIndicator =
    document.querySelector(
        ".scroll-indicator"
    );

if (scrollIndicator) {

    scrollIndicator.addEventListener(
        "click",
        () => {

            const aboutSection =
                document.querySelector(
                    "#about"
                );

            if (aboutSection) {

                aboutSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// ==========================================
// 12. HIDE SCROLL INDICATOR AFTER SCROLL
// ==========================================

window.addEventListener(
    "scroll",
    () => {

        if (!scrollIndicator) return;

        if (window.scrollY > 100) {

            scrollIndicator.classList.add(
                "hidden"
            );

        } else {

            scrollIndicator.classList.remove(
                "hidden"
            );

        }

    }
);


// ==========================================
// 13. PREVENT BROKEN PLACEHOLDER LINKS
// ==========================================

const placeholderLinks =
    document.querySelectorAll(
        'a[href="#"]'
    );

placeholderLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

        }
    );

});


// ==========================================
// 14. CURRENT YEAR
// ==========================================

const footer =
    document.querySelector(".footer p");

if (footer) {

    const currentYear =
        new Date().getFullYear();

    footer.innerHTML =
        `© ${currentYear} Mahalakshmi. All Rights Reserved.`;

}


// ==========================================
// 15. CONSOLE MESSAGE
// ==========================================

console.log(
    "🚀 Mahalakshmi Portfolio Loaded Successfully!"
);