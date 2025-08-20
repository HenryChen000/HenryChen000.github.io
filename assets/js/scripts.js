// Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    let delay = 0;
    const delayIncrement = 0.2;

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;

            element.style.transitionDelay = `${delay}s`;
            delay += delayIncrement;

            element.classList.add('visible');

            observer.unobserve(element);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up-composers').forEach(el => observer.observe(el));
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const toggle = document.querySelector('.mobile-nav-toggle');
const nav = document.getElementById('navmenu');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('bi-x');
    toggle.classList.toggle('animate');
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let firstTab = document.querySelector(".classicalmusic .nav-item:first-child");
        if (firstTab) {
            firstTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
    }, 0.01);
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function handleSubmit(form) {
    setTimeout(function () {
      form.reset();
    }, 2000);
    return true;
}

function onFormSubmitSuccess() {
    const btn = document.getElementById('submit-button');
    if (btn) {
      const originalContent = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-circle-fill success-icon"></i>';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.disabled = false;
      }, 1000);
    }
}





