// Mobile menu

const toggle = document.querySelector("nav .toggle-btn");
const mobileMenu = document.querySelector("nav .nav-menu");
const navItems = document.querySelectorAll(".nav-menu li a");

const showMobileMenu = () => {
  mobileMenu.classList.toggle("active");
};

toggle.addEventListener("click", showMobileMenu);

const hideMobileMenu = () => {
  mobileMenu.classList.remove("active");
};

for (const navItem of navItems) {
  navItem.addEventListener("click", hideMobileMenu);
}

// Scroll spy and url change

const sectionsWithId = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu li a");

const observerOptions = { threshold: 0.3, rootMargin: "0px 0px 0px 0px" };

const changeUrlOnScroll = new IntersectionObserver(function (
  entries,
  changeUrlOnScroll
) {
  entries.forEach((entry) => {
    let hash = `#${entry.target.id}`;

    if (entry.isIntersecting && window.location.hash !== hash) {
      history.pushState({}, window.title, hash);
      navLinks.forEach((navLink) => {
        let id = entry.target.id;
        navLink.classList.remove("active");
        if (id !== "start") {
          document
            .querySelector(`.nav-menu li a[href*="#${id}"]`)
            .classList.add("active");
        }
      });
    }
  });
},
observerOptions);

sectionsWithId.forEach((sectionWithId) => {
  changeUrlOnScroll.observe(sectionWithId);
});

// Services tabs

const tabs = document.querySelectorAll(".services-nav a");

const tabContents = document.querySelectorAll(".service-description");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContents[index].classList.add("active");

    tabs[index].classList.add("active");
  });
});

//Project Modal

const projectModals = document.querySelectorAll(".project-modal");
const openElements = document.querySelectorAll(".project");
const closingElements = document.querySelectorAll(".close-modal");

openElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    projectModals.forEach((modal) => {
      modal.classList.remove("active");
    });
    projectModals[index].classList.add("active");

    closingElements.forEach((element) => {
      element.addEventListener("click", () => {
        projectModals[index].classList.remove("active");
      });
    });
  });
});

// Contact form validation

const form = document.querySelector("form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");
const emailError = form.querySelector("#email-error");
const messageError = form.querySelector("#message-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    emailError.textContent = "E-mail jest wymagany";
    input.style.outline = "1px solid red";
    window.location.hash = "kontakt";
  } else if (!isEmail(input.value.trim())) {
    emailError.textContent = "Wprowadź poprawny e-mail";
    input.style.outline = "1px solid red";
    window.location.hash = "kontakt";
  } else if (textarea.value.trim() === "") {
    messageError.textContent = "Wprowadź tekst. Wiadomość nie może być pusta";
    textarea.style.outline = "1px solid red";
    window.location.hash = "kontakt";
  } else {
    form.submit();
    input.value = "";
    textarea.value = "";
    emailError.textContent = "";
    messageError.textContent = "";
    input.style.outline = "none";
    textarea.style.outline = "none";
  }

  function isEmail(input) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      input
    );
  }
});

//Private Policy Modal

const privatePolicyModal = document.querySelector(".private-policy-modal");
const closeElements = document.querySelectorAll(".close");
const showElements = document.querySelectorAll(
  "[href='#polityka-prywatnosci']"
);

const showPrivatePolicyModal = () => {
  privatePolicyModal.classList.add("show");
};

const hidePrivatePolicyModal = () => {
  privatePolicyModal.classList.remove("show");

  if (window.history && window.history.pushState) {
    window.history.pushState("", "", window.location.pathname);
  } else {
    window.location.href = window.location.href.replace(/#.*$/, "#");
  }
};

showElements.forEach((element) => {
  element.addEventListener("click", showPrivatePolicyModal);
});
closeElements.forEach((element) => {
  element.addEventListener("click", hidePrivatePolicyModal);
});

//Cookie notice

const cookieInfo = document.querySelector("#cookieNotice");
const closeBtn = document.querySelector(".close-btn");
const consetBtn = document.querySelector(".conset-btn");

closeBtn.addEventListener("click", () => {
  cookieInfo.classList.remove("active");
});
consetBtn.addEventListener("click", () => {
  cookieInfo.classList.remove("active");
  localStorage.setItem("cookieAccepted", "yes");
});

setTimeout(() => {
  let cookieAccepted = localStorage.getItem("cookieAccepted");
  if (cookieAccepted !== "yes") {
    cookieInfo.classList.add("active");
  }
}, 1000);

// On scroll effects
const fadeElements = document.querySelectorAll(".fade-in");
const slideElements = document.querySelectorAll(".slide-in");

const options = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px",
};

const showOnScroll = new IntersectionObserver(function (entries, showOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      showOnScroll.unobserve(entry.target);
    }
  });
}, options);

fadeElements.forEach((fadeElement) => {
  showOnScroll.observe(fadeElement);
});
slideElements.forEach((slideElement) => {
  showOnScroll.observe(slideElement);
});
