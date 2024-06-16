const text = document.querySelector(".headText")

const writeText = () => {
    setTimeout(() => {
        text.textContent = "Elegance";
        text.style.color = "rgb(255, 246, 209)";
    }, 0);
    setTimeout(() => {
        text.textContent = "Elegance";
        text.style.color = "rgb(245, 245, 220)";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Elegance";
        text.style.color = "rgb(255, 179, 186)";
    }, 8000);
}

writeText();
setInterval(writeText, 12000);