document.addEventListener("DOMContentLoaded", e => {
    rowValue.addEventListener("input", syncValue => {
        rowValueNumber.value = rowValue.value;
    });
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("val")) rowValue.value = urlParams.get("val"), rowValueNumber.value = urlParams.get("val");

    let polygonElement = document.getElementById("rowGraph");
    polygonElement.points.clear();
    let point1 = polygonElement.parentElement.createSVGPoint();
    point1.x = 0;
    point1.y = 0;
    let point2 = polygonElement.parentElement.createSVGPoint();
    point2.x = 0;
    point2.y = 50;
    let form = document.getElementById("graphForm");
    form.addEventListener("submit", updateBar => {
        updateBar.preventDefault();
        polygonElement.points.clear();
        let point3 = polygonElement.parentElement.createSVGPoint();
        point3.x = rowValue.value * 8;
        point3.y = 50;
        let point4 = polygonElement.parentElement.createSVGPoint();
        point4.x = rowValue.value * 8;
        point4.y = 0;
        polygonElement.points.appendItem(point1);
        polygonElement.points.appendItem(point2);
        polygonElement.points.appendItem(point3);
        polygonElement.points.appendItem(point4);
    });
});

while (elementToBeCleared.firstChild) {
    elementToBeCleared.firstChild.remove();
}