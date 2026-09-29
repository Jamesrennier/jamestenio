function showMessage() {
    alert("Welcome to my portfolio!");
}

function filterProjects(category, button) {

    let projects = document.querySelectorAll(".project-box");
    let buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    projects.forEach(function(project) {

        if (
            category === "all" ||
            project.getAttribute("data-category") === category
        ) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

    });
}