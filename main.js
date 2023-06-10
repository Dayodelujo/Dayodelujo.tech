const techstack = document.getElementById("tech-stack");
const projects = document.getElementById("projects");
const techstackSection = document.getElementById("techstack-section");
const projectSection = document.getElementById("project-section");



function scrollToTarget() {
    techstackSection.scrollIntoView({ behavior: "smooth" });
}

function scrollIntoTarget () {
    projectSection.scrollIntoView({ behavior: "smooth" });
}


techstack.addEventListener("click", scrollToTarget);
projects.addEventListener("click", scrollIntoTarget);