let currentTab = 1;
function main(prevTab = currentTab) {
    for (var i = 1; i <= currentTab; i++) {
        document.querySelector(".circle-scroll-bar svg #Dots" + i + " .dotsfill" + i).style.cssText += "fill: rgb(0, 146, 255);";
        document.querySelector(".circle-scroll-bar svg #Dots" + i + " .dotsstro" + i).style.cssText += "opacity: 1;";
    }
    for (var j = currentTab + 1; j <= 7; j++) {
        document.querySelector(".circle-scroll-bar svg #Dots" + j + " .dotsfill" + j).style.cssText += "fill: rgba(255,255,255,0.5);";
        document.querySelector(".circle-scroll-bar svg #Dots" + j + " .dotsstro" + j).style.cssText += "opacity: 0;";
    }
    //Changing Progress value of the svg to represent scroll value
    let strokeValue = 135 * (currentTab - 1);
    document.querySelector(".circle-scroll-bar svg .transrgwht").style.cssText += `stroke-dasharray: ${strokeValue}, 1000;`;


    if (window.innerWidth <= 768) { //For mobile
        document.querySelector(".tabs-container").style.cssText += `left: -${window.innerWidth * (currentTab - 1)}px;`
    } else {
        //Activating tabs for PC
        if (prevTab < currentTab)
            document.querySelector(".tab.active").classList.add("reverse");
        document.querySelector(".tab.active").classList.remove("active");
        document.querySelector(".tab" + currentTab).classList.add("active");
        if (prevTab > currentTab)
            document.querySelector(".tab" + currentTab).classList.remove("reverse");

    }


    let tempIndex = currentTab - 1;

    //Changing Background color on scroll
    let circleSvgBgColors = ["6411A9", "4E27CE", "0F113B", "17263C", "1457C1", "022A91", "01824D"];
    let bgColors = ["#6411A9", "#4E27CE", "#0F113B", "#17263C", "#124AA3", "#022A91", "#01824D"];
    if (window.innerWidth <= 768) bgColors[1] = "linear-gradient(135deg, #C62BB2, #5826C7)";
    else bgColors[1] = "#4E27CE"
    document.querySelector(".circle-scroll-bar svg").style.cssText = `background: #${circleSvgBgColors[tempIndex]};`;
    document.querySelector(".bg").style.cssText = `background: ${bgColors[tempIndex]};`;
}



function showProgressForMobile() {
    if (window.innerWidth > 768) return;
    try {
        document.querySelector(".dotted-progress-bar div.active").classList.remove("active")

    } catch (err) {

    }
    document.querySelector(".dotted-progress-bar .dot" + currentTab).classList.add("active")
}



let autoScroll;
let runing = false;
function autoScrollFunction() {
    if (window.innerWidth <= 768 && runing == false) {
        runing = true;
        autoScroll = setInterval(() => {
            let prevTab = currentTab;
            currentTab++;
            if (currentTab > 7) currentTab = 1;
            showProgressForMobile();
            main(prevTab);
        }, 2000)
    } else if (window.innerWidth > 768 && runing == true) {
        clearInterval(autoScroll)
        runing = false;
    }
}



function changeUI() {
    if (window.innerWidth <= 768) { //For mobile
        document.querySelectorAll(".tab").forEach((e) => {
            e.classList.add("active")
        })
        document.querySelectorAll(".tab").forEach((e) => {
            e.style.cssText += `width: ${window.innerWidth}px`;
        })
        document.querySelector(".tabs-container").style.cssText += `left: -${window.innerWidth * (currentTab - 1)}px;`
    } else {    //for PC
        document.querySelectorAll(".tab").forEach((e) => {
            e.classList.remove("active");
        })
        document.querySelector(".tab" + currentTab).classList.add("active")
        document.querySelectorAll(".tab").forEach((e) => {
            e.style.cssText += `width: 100%`;
        })
    }
}



window.onresize = () => {
    main();
    changeUI();
    autoScrollFunction();
    showProgressForMobile();
};



let wait = false;
document.querySelector("body").addEventListener("wheel", (event) => {
    if (wait == true) return;
    wait = true;
    let prevTab = currentTab;
    if (event.deltaY > 0 && currentTab < 7) { //Scroll Down condition 
        currentTab++;
    }
    else if (event.deltaY < 0 && currentTab > 1) { //Scroll Up condition
        currentTab--;
    }
    main(prevTab);
    showProgressForMobile();
    setTimeout(() => {
        wait = false;
    }, 500)

})



document.querySelectorAll(".dotted-progress-bar div").forEach((e) => {
    e.addEventListener("click", () => {
        let prevTab = currentTab;
        currentTab = parseInt((e.classList[0].toString())[3]);
        main(prevTab);
        showProgressForMobile();
    })
})



showProgressForMobile();
autoScrollFunction();
changeUI();



//Swipe Function for Mobile
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        let prevTab = currentTab;

        if (xDiff > 0) {
            // right swipe 
            if (currentTab < 7)
                currentTab++;
        } else {
            // left swipe 
            if (currentTab > 1)
                currentTab--;
        }
        main(prevTab);
        showProgressForMobile();

    } else {
        if (yDiff > 0) {
            // down swipe
        } else {
            // up swipe 
        }
    }

    xDown = null;
    yDown = null;
};



//Updateing Texts on scroll
// function updateTextsForMobile(){
// let texts = [
//     ["", "25M+ Downloads", "on appstore & google playstore", "ABC 123", "We are the best web development<br> company in the world"],
//     ["The Next Big", "Blockchain", "Revolution", "ABC 234", "We are the best web development<br> company in the world"],
//     ["Powered by advamce", "", "Algorithms", "ABC 345", "We are the best<br> web development company<br> in the world"],
//     ["Redefining", "UX Strategy", "and UI design", "ABC 456", "We are the best<br> web development company<br> in the world"],
//     ["Text Headline", "Text Headline", "Footer Headline", "ABC 567", "We are the best AR<br> web development company<br> in the world"],
//     ["Developing ERP Solution for", "Text Headline", "in furniture industry", "ABC 678", "Best since 2017<br> We offer wide range of<br> web development and app development"],
//     ["Biggest Classified", "East Asia", "Countries", "ABC 23478", "We are the best<br> web development company<br> in the world"]
// ];
// }