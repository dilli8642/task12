const scanBtn = document.getElementById("scanBtn");

scanBtn.addEventListener("click", () => {

    scanBtn.innerText = "Scanning...";

    setTimeout(() => {
        scanBtn.innerText = "Threats Detected ✓";

        scanBtn.style.background = "#00ff88";
        scanBtn.style.color = "#000";
    }, 2000);

});

console.log("VigilOS Loaded Successfully");