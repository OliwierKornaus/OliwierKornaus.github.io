document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1. TYPING EFFECT (HERO)
  ========================= */
  const typingElement = document.getElementById("typing");

  if (typingElement) {
    const text = "Frontend Developer";
    let i = 0;

    function type() {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }

    type();
  }

  /* =========================
     2. SCROLL REVEAL SECTIONS
  ========================= */
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((sec) => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "0.6s ease";
    observer.observe(sec);
  });

  /* =========================
     3. CUSTOM CURSOR + GLOW
  ========================= */
  const cursor = document.querySelector(".cursor");
  const glow = document.querySelector(".cursor-glow");

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (cursor) {
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    }

    if (glow) {
      glow.style.left = x + "px";
      glow.style.top = y + "px";
    }
  });

  /* =========================
     4. NAV ACTIVE ON SCROLL
  ========================= */
  const navLinks = document.querySelectorAll(".nav a");
  const sectionsList = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    sectionsList.forEach((section) => {
      if (
        scrollPos >= section.offsetTop - 120 &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        const id = section.getAttribute("id");

        navLinks.forEach((link) => {
          link.style.opacity = "0.6";
          link.style.color = "white";

          if (link.getAttribute("href") === "#" + id) {
            link.style.opacity = "1";
            link.style.color = "#0ea5e9";
          }
        });
      }
    });
  });

});
