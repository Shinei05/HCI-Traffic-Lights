let circles = document.querySelectorAll(".circle"),
    light = 0;

setInterval(() => {
    changeLight();
}, 7000);

function changeLight() {
    circles[light].classList.remove("col1", "col2", "col3");
    light++;

    if (light > 2) {
        light = 0;
    }

    const selectLight = circles[light];
    selectLight.classList.add(selectLight.getAttribute("color"));
}
