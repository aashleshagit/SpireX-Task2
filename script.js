
// Dark and Light Mode

function toggleTheme() {

    const body = document.body;
    const button = document.getElementById("themeBtn");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}


// Download / Print Resume

function printResume() {

    window.print();

}


// Welcome Message

window.addEventListener("load", function() {

    console.log("Welcome to Aashlesha's Resume!");

});
