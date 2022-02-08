let url = document.location.href

let urlsplit = url.split("#")
let urlbase = urlsplit[0]
let urlid = urlsplit[1] 

let delayOver = true;

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function doDelay(){
    disableScroll();
    delayOver = false;
    await sleep(1000);
    enableScroll();
    delayOver = true
}

document.onkeydown = async function (e) {
    var str = "";
    console.log(e.keyCode)

    if (e.keyCode == 38 || e.keyCode == 37) {
        document.location.replace(urlbase + "#week1")
        document.documentElement.scrollTop = document.body.scrollTop = 0; 
        doDelay()
        // document.location.reload()
    }
    else if (e.keyCode == 40 || e.keyCode == 39) {
        document.location.replace(urlbase + "#week2")
        document.documentElement.scrollTop = document.body.scrollTop = 1000000;
        doDelay()
        // document.location.reload()
    }
}