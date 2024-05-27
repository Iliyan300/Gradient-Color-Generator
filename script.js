
// color values for both sections inputs //

const sec1_InputLeft = document.querySelector(".color-1");
const sec1_InputRight = document.querySelector(".color-2");
const sec2_InputLeft = document.querySelector(".color-3");
const sec2_InputRight = document.querySelector(".color-4");



// sections backgrounds //

const sectionOne = document.querySelector(".first-section");
const sectionTwo = document.querySelector(".section-two");

// sections H3`s and P //

const sectionOneH3 = document.querySelector(".first-sec-h3");
const sectionTwoH3 = document.querySelector(".second-sec-h3");
const sectionOneP = sectionOne.querySelector("p");
const sectionTwoP = sectionTwo.querySelector("p");

// sections buttons //

const copyBtn1 = document.querySelector(".copybtn-1");
const copyBtn2 = document.querySelector(".copybtn-2");
const sec1_reverseBtn = document.querySelector(".reverse-btn");
const sec2_reverseBtn = document.querySelector(".reverse-btn-2");


// changing the background for first section //


function changeColorsToRight() {

    
    const colorInputLeft = sec1_InputLeft.value;
    const colorInputRight = sec1_InputRight.value;
    const currentBackground = window.getComputedStyle(sectionOne).background;
    
    
    if(currentBackground.includes("to right")) {

    sectionOne.style.background = 
    `linear-gradient(to right, 
     ${colorInputLeft}, ${colorInputRight})`;

     sectionOneH3.textContent = 
     `background: linear-gradient(to right, ${colorInputLeft}, ${colorInputRight});`

    } else if(currentBackground.includes("to left")) {

        sectionOne.style.background = 
        `linear-gradient(to left, 
         ${colorInputRight}, ${colorInputLeft})`;
    
         sectionOneH3.textContent = 
         `background: linear-gradient(to left, ${colorInputRight}, ${colorInputLeft});`

    }
}

// changing the background for second section //

function changeColorsToBottom() {

    const colorInputTop = sec2_InputLeft.value;
    const colorInputBottom = sec2_InputRight.value;
    const currentBackground = window.getComputedStyle(sectionTwo).background;

    if(currentBackground.includes("to top")) {

    sectionTwo.style.background = 
    `linear-gradient(to top, 
    ${colorInputBottom}, ${colorInputTop})`;
   
    sectionTwoH3.textContent = 
    `background: linear-gradient(to top, ${colorInputBottom}, ${colorInputTop});`

    } else if (!currentBackground.includes("to top")) {

        sectionTwo.style.background = 
        `linear-gradient(to bottom, 
        ${colorInputTop}, ${colorInputBottom})`;
       
        sectionTwoH3.textContent = 
        `background: linear-gradient(to bottom, ${colorInputTop}, ${colorInputBottom});`

    }
   
}

// copying text for section one //

function copyText() {
    
    const textToCopy = sectionOneH3.textContent;
   
    navigator.clipboard.writeText(textToCopy).then( 
        
    popUp

    ).catch(err => {
        console.error('Грешка при копиране на текста: ', err);
    });
}

// copying text for section two //

function copyTextTwo() {

    
const textToCopy2 = sectionTwoH3.textContent;

navigator.clipboard.writeText(textToCopy2).then( 
        
    popUpTwo

    ).catch(err => {
        console.error('Грешка при копиране на текста: ', err);
    });

}

// when copied popUp will make the check icon pop up //

function popUp() {

const checkIconOne = document.querySelector("#sec-one-i");

checkIconOne.style.visibility = "visible";
checkIconOne.classList.toggle("hidden");
checkIconOne.classList.toggle("popup");


}


function popUpTwo() {

    const checkIconTwo = document.querySelector("#sec-two-i");

    checkIconTwo.style.visibility = "visible";
    checkIconTwo.classList.toggle("hidden");
    checkIconTwo.classList.toggle("popup");

}


function reverseColors() {

const currentBackground = window.getComputedStyle(sectionOne).background;
let colorInputLeft = sec1_InputLeft.value;
let colorInputRight = sec1_InputRight.value;

if(currentBackground.includes("to right")) {
    
    let reversedBackground = currentBackground.replace("to right", "to left");
    sectionOne.style.background = reversedBackground;
   
   sec1_InputLeft.value = colorInputRight;
   sec1_InputRight.value = colorInputLeft;

    sectionOneH3.textContent = `background: linear-gradient(to left, ${colorInputRight}, ${colorInputLeft});`;
    sectionOneP.textContent = "to left";
   

} else if (currentBackground.includes("to left")) {


    reversedBackground = currentBackground.replace("to left" , "to right");
    sectionOne.style.background = reversedBackground;

    sec1_InputRight.value = colorInputLeft;
    sec1_InputLeft.value = colorInputRight;

    sectionOneH3.textContent = `background: linear-gradient(to right, ${colorInputRight}, ${colorInputLeft});`;
    sectionOneP.textContent = "to right";
   
}

}


function reverseColorsHorizontal() {


const currentBackground = window.getComputedStyle(sectionTwo).background;
let colorInputTop = sec2_InputLeft.value;
let colorInputBottom = sec2_InputRight.value;


if(currentBackground.includes("to top")) {
    
   
    let reversedBackground = currentBackground.replace("to top", "to bottom");
    sectionTwo.style.background = reversedBackground;

    sec2_InputLeft.value = colorInputBottom;
    sec2_InputRight.value = colorInputTop;

    sectionTwoH3.textContent = `background: linear-gradient(to bottom, ${colorInputTop}, ${colorInputBottom});`;
    sectionTwoP.textContent = "to bottom";
   

} else if (!currentBackground.includes("to bottom")) {

    sectionTwo.style.background = `linear-gradient(to top, ${colorInputTop}, ${colorInputBottom})`
    
    sec2_InputRight.value = colorInputTop;
    sec2_InputLeft.value = colorInputBottom;

    sectionTwoH3.textContent = `background: linear-gradient(to top, ${colorInputTop}, ${colorInputBottom});`;
    sectionTwoP.textContent = "to top";

}


}

function smoothScroll() {

    const html = document.querySelector("html");
    html.style.scrollBehavior = "smooth";

}

// events for section 1 //

sec1_InputLeft.addEventListener("input", changeColorsToRight);
sec1_InputRight.addEventListener("input", changeColorsToRight);

// events for section 2 //

sec2_InputLeft.addEventListener("input", changeColorsToBottom);
sec2_InputRight.addEventListener("input", changeColorsToBottom);

// events for btns //

copyBtn1.addEventListener("click", copyText);
copyBtn2.addEventListener("click", copyTextTwo);
sec1_reverseBtn.addEventListener("click", reverseColors);
sec2_reverseBtn.addEventListener("click", reverseColorsHorizontal);


changeColorsToRight();
changeColorsToBottom();


 // I know this code is not very efficent but Im learning. Thank you for your patience :)  //
