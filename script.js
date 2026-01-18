var textarea = document.getElementById("message");
var counter = document.getElementById("counter");
var warning = document.getElementById("warning");

var maxChars = 200;

textarea.addEventListener("input", function () {
    if (textarea.value.length > maxChars) {
        textarea.value = textarea.value.slice(0, maxChars);
        warning.style.display = "block";
    }
    else {
        warning.style.display = "none";
    }

    counter.textContent = textarea.value.length + " / " + maxChars + " characters";
});
