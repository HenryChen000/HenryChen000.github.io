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
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const otherTab = document.querySelector("#Other-Composers");
    if (!otherTab) return;

    // 收集所有 composer 區塊 (tab-header + row)
    const blocks = [];
    const headers = otherTab.querySelectorAll(".tab-header");

    headers.forEach(header => {
        const row = header.nextElementSibling;
        if (row && row.classList.contains("row")) {
            blocks.push({ header, row });
        }
    });

    const blocksPerLoad = 2; // 每次顯示幾個 composer
    let currentIndex = 0;

    // 先隱藏所有
    blocks.forEach(b => {
        b.header.style.display = "none";
        b.row.style.display = "none";
    });

    function loadMore() {
        for (let i = 0; i < blocksPerLoad && currentIndex < blocks.length; i++) {
            blocks[currentIndex].header.style.display = "block";
            blocks[currentIndex].row.style.display = "flex"; // row 用 flex 顯示
            currentIndex++;
        }
        // 如果所有 block 都已經顯示 -> 移除按鈕
        if (currentIndex >= blocks.length) {
            loadMoreBtn.remove();
        }
    }

    // 建立 Load More 按鈕
    const loadMoreBtn = document.createElement("button");
    loadMoreBtn.textContent = "Load More";
    loadMoreBtn.className = "btn btn-outline-secondary mt-3 d-block mx-auto";
    loadMoreBtn.addEventListener("click", loadMore);

    // 把按鈕加在 Other-Composers 的最後
    otherTab.appendChild(loadMoreBtn);

    // 一開始先載入一批
    loadMore();
});




