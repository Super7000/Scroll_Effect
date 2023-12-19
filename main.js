let currentTab = 1;
function main(prevTab) {

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


    if (window.innerWidth <= 768) {

        if (prevTab < currentTab) {
            document.querySelector(".tab.active").style.cssText += "animation: left-to-mid 1s reverse;";
            document.querySelector(".tab" + currentTab).style.cssText += "animation: right-to-mid 1s;";
        } else if (prevTab > currentTab) {
            document.querySelector(".tab.active").style.cssText += "animation: right-to-mid 1s reverse;";
            document.querySelector(".tab" + currentTab).style.cssText += "animation: left-to-mid 1s;";
        }
    }

    // if (window.innerWidth > 768) {
    //     if (prevTab < currentTab) {
    //         document.querySelectorAll(".tab.active .main-heading .text-wrapper div").forEach((e) => {
    //             e.style.cssText += "animation: top-to-mid 0.5s reverse;";

    //         })
    //         document.querySelectorAll(".tab" + currentTab + " .main-heading .text-wrapper div").forEach((e) => {
    //             e.style.cssText += "animation: down-to-mid 0.5s;";
    //         })
    //     } else {
    //         document.querySelectorAll(".tab.active .main-heading .text-wrapper div").forEach((e) => {
    //             e.style.cssText += "animation: down-to-mid 0.5s reverse;";
    //         })
    //         document.querySelectorAll(".tab" + currentTab + " .main-heading .text-wrapper div").forEach((e) => {
    //             e.style.cssText += "animation: top-to-mid 0.5s;";
    //         })
    //     }
    // }


    //Activating tabs
    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".tab" + currentTab).classList.add("active");



    //Updateing Texts on scroll

    // let texts = [
    //     ["", "25M+ Downloads", "on appstore & google playstore", "ABC 123", "We are the best web development<br> company in the world"],
    //     ["The Next Big", "Blockchain", "Revolution", "ABC 234", "We are the best web development<br> company in the world"],
    //     ["Powered by advamce", "", "Algorithms", "ABC 345", "We are the best<br> web development company<br> in the world"],
    //     ["Redefining", "UX Strategy", "and UI design", "ABC 456", "We are the best<br> web development company<br> in the world"],
    //     ["Text Headline", "Text Headline", "Footer Headline", "ABC 567", "We are the best AR<br> web development company<br> in the world"],
    //     ["Developing ERP Solution for", "Text Headline", "in furniture industry", "ABC 678", "Best since 2017<br> We offer wide range of<br> web development and app development"],
    //     ["Biggest Classified", "East Asia", "Countries", "ABC 23478", "We are the best<br> web development company<br> in the world"]
    // ];
    let tempIndex = currentTab - 1;
    // document.querySelector(".main-heading .top-left-heading").innerHTML = texts[tempIndex][0];
    // document.querySelector(".main-heading .main-heading-text").innerHTML = texts[tempIndex][1];
    // document.querySelector(".main-heading .bottom-right-heading").innerHTML = texts[tempIndex][2];
    // document.querySelector(".sub-heading .sub-heading-text").innerHTML = texts[tempIndex][3];
    // document.querySelector(".sub-heading .sub-left-text").innerHTML = texts[tempIndex][4];



    //Changing Background color on scroll
    let circleSvgBgColors = ["6411A9", "4E27CE", "0F113B", "17263C", "1457C1", "022A91", "01824D"];
    let bgColors = ["#6411A9", "#4E27CE", "#0F113B", "#17263C", "#124AA3", "#022A91", "#01824D"];
    document.querySelector(".circle-scroll-bar svg").style.cssText = `background: #${circleSvgBgColors[tempIndex]};`;
    document.querySelector(".bg").style.cssText = `background: ${bgColors[tempIndex]};`;
}

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
    main(prevTab)
    setTimeout(() => {
        wait = false;
    }, 500)

})

let autoScroll;
let runing = false;
window.onresize = () => {
    if (window.innerWidth <= 768 && runing == false) {
        runing = true;
        autoScroll = setInterval(() => {
            let prevTab = currentTab;
            currentTab++;
            if (currentTab > 7) currentTab = 1;
            main(prevTab);
        }, 2000)
    } else if (window.innerWidth > 768 && runing == true) {
        clearInterval(autoScroll)
        runing = false;
    }
}