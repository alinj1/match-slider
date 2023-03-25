function slide1() {
    if (document.getElementById('slide3').style.left = 35 + '%') {
        document.getElementById("slide3").style.left = 69 + "%"
    }
    document.getElementById('slide1').style.left = 35 + "%"
    document.getElementById('slide1').className = "slide2"
    document.getElementById('slide2').style.left = 0
    document.getElementById('slide2').className = "slide1"
    document.getElementById('slide3').className = "slide3"
    document.getElementById("class_number1").innerHTML = "سال دهم"
    // document.getElementById("class_number2").innerHTML = "10 "

    document.getElementById('box').style.backgroundImage = "url(images/background1.png)";
    document.getElementById('color').style.color = "#ffd74e"
}
function slide2() {
    if (document.getElementById('slide1').style.left = 35 + '%') {
        document.getElementById("slide1").style.left = 0 + "%"
    }
    document.getElementById('slide2').style.left = 35 + "%"
    document.getElementById('slide2').className = "slide2"
    document.getElementById('slide1').style.left = 0
    document.getElementById('slide1').className = "slide1"
    document.getElementById('slide3').className = "slide3"

    if (document.getElementById('slide3').style.left = 35 + '%') {
        document.getElementById("slide3").style.left = 69 + "%"
    }

    document.getElementById("class_number1").innerHTML = "سال یازدهم"
    // document.getElementById("class_number2").innerHTML = "11 "


    document.getElementById('box').style.backgroundImage = "url(images/background3.png)"
    document.getElementById('color').style.color = "#a365ae"

    document.getElementById('color').style.textShadow = "0 0 15px rgb(105,75,75);"





}
function slide3() {
    if (document.getElementById('slide1').style.left = 35 + '%') {
        document.getElementById("slide1").style.left = 0 + "%"
    }
    document.getElementById('slide3').style.left = 35 + "%"
    document.getElementById('slide3').className = "slide2"
    document.getElementById('slide2').style.left = 69 + "%"
    document.getElementById('slide2').className = "slide3"
    document.getElementById('slide1').className = "slide1"
    document.getElementById("class_number1").innerHTML = "سال دوازدهم"
    // document.getElementById("class_number2").innerHTML = "12 "

    document.getElementById('box').style.backgroundImage = "url(images/background2.png)"

    document.getElementById('color').style.color = "#5ad8ef"

}