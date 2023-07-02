function breakDown(){
    Array.from(document.querySelectorAll("div, center, h1, p, table, tr, td, img")).forEach(element => element.remove());

    document.querySelector("body").innerHTML = 
    "<center><img style='width: 90%; height='90%' margin-top='20px'' src='favicon/smallScreen.png' alt='Small screens not supported!'></center>";

}

window.matchMedia("(max-width: 1256px)").addListener(breakDown);