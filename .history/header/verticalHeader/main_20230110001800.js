(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onsroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  let navlinks = select(".nav-link", true);
  const navLinkActive = () => {
    let position = window.scrollY + 200;
    navlinks.forEach((navlink) => {
      if (!navlink.hash) return;
      let section = select(navlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navLinkActive);
  onscroll(document, navLinkActive);

  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  on("click", ".scrollto", function(e){
    if(select(this.hash)){
        e.prevenDefault();
        let body = select("body");
        if(body.classList.contains())
    }
  })

  window.addEventListener("load", function () {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
