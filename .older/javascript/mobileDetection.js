function indexMobileDetect() {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
    // This checks if the current device is in fact mobile
        document.getElementById("theme").href="css/mobile.css";
    } else {
        document.getElementById("theme").href="css/main.css";
    }
}
function mobileDetect() {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
    // This checks if the current device is in fact mobile
        document.getElementById("theme").href="../css/mobile.css";
    } else {
        document.getElementById("theme").href="../css/main.css";
    }
};