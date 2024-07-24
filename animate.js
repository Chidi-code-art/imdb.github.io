const banner = document.querySelectorAll(".banner-disc");

document.addEventListener("scroll", function () {
    banner.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("banner-disc--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}