const ava = document.getElementById("resume-ava");
const changeAva = () => {
    ava.setAttribute("src","../images/duy2b.png");
}

const changeBackAva = () => {
    ava.setAttribute("src","images/duy2a.png");
}

ava.addEventListener("mouseenter", function() {
    console.log("in");
});

ava.addEventListener("mouseleave", function() {
    console.log("out");
});