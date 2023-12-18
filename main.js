let strokeValue = 0;
let currentTab = 1;
document.querySelector("body").addEventListener("wheel", (event) => {

    if (event.deltaY > 0 && currentTab < 7) { //Scroll Down condition 
        strokeValue += 135;
        currentTab++;
        document.querySelector(".circle-scroll-bar svg #Dots" + currentTab + " .dotsfill" + currentTab).style.cssText += "fill: rgb(0, 146, 255);";
        document.querySelector(".circle-scroll-bar svg #Dots" + currentTab + " .dotsstro" + currentTab).style.cssText += "opacity: 1;";
    }
    else if (event.deltaY < 0 && currentTab > 1) { //Scroll Up condition
        strokeValue -= 135;
        document.querySelector(".circle-scroll-bar svg #Dots" + currentTab + " .dotsfill" + currentTab).style.cssText += "fill: rgba(255,255,255,0.5);";
        document.querySelector(".circle-scroll-bar svg #Dots" + currentTab + " .dotsstro" + currentTab).style.cssText += "opacity: 0;";
        currentTab--;
    }

    //Changing Progress value of the svg to represent scroll value
    document.querySelector(".circle-scroll-bar svg .transrgwht").style.cssText += `stroke-dasharray: ${strokeValue}, 1000;`;


    //Activating tabs
    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".tab" + currentTab).classList.add("active");


    //Updating UI based on current tab
    let subHeadingImg = document.querySelector(".sub-heading img");
    let viewCaseCon = document.querySelector(".view-case-container div");
    let viewCaseConImg = document.querySelector(".view-case-container img");
    if (currentTab == 7) {
        viewCaseCon.innerHTML = "Coming Soon";
        viewCaseCon.style.cssText += "opacity: 0.5;";
        viewCaseConImg.style.cssText += "display: none;";
        subHeadingImg.style.cssText += "display: block;";
        subHeadingImg.src = "Assests/mobile-app-of-the-year-by-entrepreneur.png";
    } else if (currentTab == 1) {
        subHeadingImg.style.cssText += "display: block;";
        subHeadingImg.src = "Assests/world-communication-awards-for-best-digital-experience.png";
        viewCaseCon.innerHTML = "View Case Study";
        viewCaseCon.style.cssText += "opacity: 1;";
    } else {
        subHeadingImg.style.cssText += "display: none;";
        viewCaseCon.innerHTML = "View Case Study";
        viewCaseCon.style.cssText += "opacity: 1;";
        viewCaseConImg.style.cssText += "display: block;";

    }

    if (currentTab == 3) {
        document.querySelector(".main-heading img").style.cssText += "display: block;";
        document.querySelector(".main-heading-text").style.cssText += "display: none;";
    } else {
        document.querySelector(".main-heading-text").style.cssText += "display: block;";
        document.querySelector(".main-heading img").style.cssText += "display: none;";
    }


    //Updateing Texts on scroll

    let texts = [
        ["", "25M+ Downloads", "on appstore & google playstore", "ABC 123", "We are the best web development<br> company in the world"],
        ["The Next Big", "Blockchain", "Revolution", "ABC 234", "We are the best web development<br> company in the world"],
        ["Powered by advamce", "", "Algorithms", "ABC 345", "We are the best<br> web development company<br> in the world"],
        ["Redefining", "UX Strategy", "and UI design", "ABC 456", "We are the best<br> web development company<br> in the world"],
        ["Text Headline", "Text Headline", "Footer Headline", "ABC 567", "We are the best AR<br> web development company<br> in the world"],
        ["Developing ERP Solution for", "Text Headline", "in furniture industry", "ABC 678", "Best since 2017<br> We offer wide range of<br> web development and app development"],
        ["Biggest Classified", "East Asia", "Countries", "ABC 23478", "We are the best<br> web development company<br> in the world"]
    ];
    let tempIndex = currentTab - 1;
    document.querySelector(".main-heading .top-left-heading").innerHTML = texts[tempIndex][0];
    document.querySelector(".main-heading .main-heading-text").innerHTML = texts[tempIndex][1];
    document.querySelector(".main-heading .bottom-right-heading").innerHTML = texts[tempIndex][2];
    document.querySelector(".sub-heading .sub-heading-text").innerHTML = texts[tempIndex][3];
    document.querySelector(".sub-heading .sub-left-text").innerHTML = texts[tempIndex][4];



    //Changing Background color on scroll
    let bgColors = [
        ["6411A9", "6411A9"],
        ["4E27CE", "4E27CE"],
        ["0F113B", "0F113B"],
        ["17263C", "17263C"],
        ["124AA3", "1457C1"],
        ["022A91", "022A91"],
        ["01824D", "01824D"]
    ];
    document.querySelector(".left-container").style.cssText = `background: #${bgColors[tempIndex][0]};`;
    document.querySelector(".circle-scroll-bar svg").style.cssText = `background: #${bgColors[tempIndex][1]};`;
})