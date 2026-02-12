// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");  // ✅ FIXED: Changed from ".btn[]"

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");  // ✅ FIXED: Changed "documents" to "document" and "fianlText" to "finalText"

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    } ,50);
});

// Logic to make YES button grow

 let yesScale = 1;

 yesBtn.style.position = "relative";
 yesBtn.style.transformOrigin = "center center";
 yesBtn.style.transition = "transform 0.3s ease";

 noBtn.addEventListener("click", () => {
     yesScale += 1;

    if (yesBtn.style.position !== "fixed") {  // ✅ FIXED: Added quotes around "fixed"
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    } else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "I LOVE YOU SO MUCHHHHHHHHH!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("open");

    buttons.style.display = "none";

    finalText.style.display = "block";  // ✅ FIXED: Changed "fianlText" to "finalText"
});