function fuja(){

    let btnN = document.getElementById("n")

    let widthwindow = window.innerWidth;
    let heightwindow = window.innerHeight;

    let maxX = widthwindow - btnN.offsetWidth;
    let maxY = heightwindow - btnN.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    btnN.style.left = randomX + "px";
    btnN.style.top = randomY + "px";
}