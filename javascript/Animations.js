gsap.from(".top h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
});

gsap.from(".top p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.7
});

gsap.from(".icon", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1
});

gsap.from(".down", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1
});

// ========================

function animateSkillsSection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.from(entry.target, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
        });

        observer.unobserve(entry.target);
      }
    });
  }

  const skillsSection = document.querySelector(".skills");
  const skillsCards = skillsSection.querySelectorAll(".card");

  const observer = new IntersectionObserver(animateSkillsSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  observer.observe(skillsSection);
  skillsCards.forEach((card) => {
    observer.observe(card);
  });