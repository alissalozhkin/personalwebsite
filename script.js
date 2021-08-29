function fadeIn() {
    if (!window.AnimationEvent) { return; }
    var image = document.getElementById("name");
    image.classList.add('translate')
}