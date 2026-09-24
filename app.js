const projectArea = document.querySelector(".projects");
const projectHeading = document.querySelector(".project-heading");

for (let i = 0; i < 10; i++) {
  let projectCard = document.createElement("div");
  projectCard.classList.add("card");

  let projectHeading = document.createElement("div");
  let projectDescription = document.createElement("div");

  projectHeading.textContent = "This is an awesome project";
  projectDescription.textContent =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  projectCard.appendChild(projectHeading);
  projectCard.appendChild(projectDescription);

  projectArea.appendChild(projectCard);
}
