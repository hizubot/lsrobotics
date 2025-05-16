function changeTitle() {
    document.getElementById("slide-title").style.display = "none";
    document.getElementById("slide-device").style.display = "flex";
}
window.onload = function() {
    setTimeout(changeTitle, 1500);
};