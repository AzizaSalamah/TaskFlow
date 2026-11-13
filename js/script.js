// TaskFlow Tips
const tips = [
    "Start by organizing your tasks and setting priorities.",
    "Divide large projects into smaller tasks.",
    "Assign tasks to the right team members.",
    "Check your project progress regularly.",
    "Set clear deadlines to achieve your goals."
];

// Select HTML elements
const tipText = document.getElementById("tip-text");
const tipButton = document.getElementById("tip-button");

let currentTip = 0;

// Function to change the tip
function showNextTip() {

    currentTip++;

    if (currentTip >= tips.length) {
        currentTip = 0;
    }

    tipText.textContent = tips[currentTip];
}

// Button click event
tipButton.addEventListener("click", showNextTip);

// Dynamic Project Tasks

const projectTasks = [
    "Create project plan",
    "Design website interface",
    "Develop homepage",
    "Test website functionality",
    "Review project results"
];

// Get the HTML list
const taskList = document.getElementById("dynamic-task-list");

// Create tasks dynamically using a For Loop
for (let i = 0; i < projectTasks.length; i++) {

    const listItem = document.createElement("li");

    listItem.textContent = projectTasks[i];

    taskList.appendChild(listItem);
    listItem.addEventListener("click", function () {
    this.classList.toggle("completed");
});
}
// Count tasks using a While Loop

let taskCount = 0;

while (taskCount < taskList.children.length) {
    taskCount++;
}

document.getElementById("task-count").textContent =
    "Total Project Tasks: " + taskCount;

// Dynamic Picture
const heroPicture = document.getElementById("hero-picture");
const changePictureButton = document.getElementById("change-picture");

changePictureButton.addEventListener("click", function () {

    if (heroPicture.src.includes("taskflow-alt.png")) {

        heroPicture.src = "images/taskflow.png";
        heroPicture.alt = "TaskFlow project management illustration";

    } else {

        heroPicture.src = "images/taskflow-alt.png";
        heroPicture.alt = "Alternative TaskFlow illustration";

    }

});