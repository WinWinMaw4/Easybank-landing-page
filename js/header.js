const navMenu = document.querySelector(".nav-menu");
const sliderTag = document.querySelector(".slider");
const tabs = ["Home","About","Contact","Blog","Careers"];
const tabsId = ["#home","#about","#lastArticle","#footer","#footer"]

const handleTabChange = (event) => {
    const clickTagId = event.target.id;
    const clickATag = document.getElementById(clickTagId);
    const clickATagWidth = clickATag.offsetWidth;
    const clickATagOffsetLeft = clickATag.offsetLeft;
    sliderTag.style.width = clickATagWidth + "px";
    sliderTag.style.transform = `translateX(${clickATagOffsetLeft}px)`;
    // console.log(clickATagOffsetLeft);
}

for(let i=0;i<tabs.length;i++){
    const aTag = document.createElement("a");
    aTag.id = i;
    aTag.className = "nav-link";
    aTag.href = tabsId[i];
    aTag.append(tabs[i]);
    navMenu.append(aTag);

    if(i===0){
        sliderTag.style.width = aTag.offsetWidth + "px";
        // console.log(sliderTag.style.width = aTag.offsetWidth + "px");
    }

    aTag.addEventListener("mouseover",handleTabChange);
}

// hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLink.forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

