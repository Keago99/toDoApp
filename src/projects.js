import {basicTodo, changeHeader, loadTasks} from "./toDos";

const starterProject = new Project("starterProject");

let AllProjects = [starterProject];
let ActiveProject  = 0;


// A method for creating project objects
function Project(projectName, tasks = []){
    this.projectName = projectName;
    this.tasks = tasks;
}

function setInitialProject(){
    const initialProject = document.getElementsByClassName("projItem");
    initialProject[0].classList.add("activeProject");
}



// A function to add the projects to the AllProjects Arraylist
function addProjects(){
    const inputText = document.getElementById("inputText").value;
    if (inputText != ""){
        let addedProject = new Project(inputText, new Array());
        AllProjects.push(addedProject);
    }

}

function activeOnClickProject(){
    const projectItems = document.querySelectorAll(".projItem");
    for (let i = 0; i <projectItems.length; i++ ){
        projectItems[i].addEventListener("click", () => {
            for (let i = 0; i < projectItems.length; i++){
                projectItems[i].classList.remove("activeProject");
            }
            projectItems[i].classList.add("activeProject");
            changeHeader();
            ActiveProject = i;
            console.log("The active project is number: " + ActiveProject);
            loadTasks();
        })
    }
}

// A function to update the amount of projects
function updateProjects(){
    const projList = document.getElementById("nameOfProjects");
    projList.innerHTML = "";
    
    for (let i = 0; i < AllProjects.length; i++){
        let item = document.createElement("div");
        item.className = ("projItem");
        item.innerText = (AllProjects[i].projectName);
        if(i == ActiveProject)
        {
            item.classList.add("activeProject");
        }

        projList.appendChild(item);

    }
    activeOnClickProject();
}

// A function to load the projects, it will reference the AllProjects Arraylist
function loadProjects(){
    AllProjects[ActiveProject].tasks.push(basicTodo);
    console.log(AllProjects[ActiveProject].tasks[0].title);
}

// A function to show the hidden project add form with its accept and cancel buttons
function showProjAdd(){
    const projectAdd = document.getElementById("hiddenProjAdd");
    const addProjButton = document.getElementById("addProjButton");

    addProjButton.style.display = "none";
    projectAdd.style.display = "block";

}

// a function to clear the project form and hide its contents, including the two buttons, this should
// also reshow the "add project" button.
function cancelProjAdd(){
    const hiddenForm = document.getElementById("hiddenProjAdd");
    const addProjButton = document.getElementById("addProjButton");
    const input = document.getElementById("inputText");

    input.value = "";

    hiddenForm.style.display = "none";
    addProjButton.style.display = "block";

}


// Adding all eventlisteners that have to do with the project class.
function projAdditionListeners(){
    const addProjButton = document.getElementById("addProjButton");
    const cancelButton = document.getElementById("cancelButton");


    addProjButton.addEventListener("click", () => {
        showProjAdd();
    })

    cancelButton.addEventListener("click", () => {
        cancelProjAdd();
    })
}

// Adding the ProjectListenerButton to the Add Project green button NB: This should be bundled into
// A bigger sort of AddListener function.
function addProjectListenerButton(){
    const addNewProj = document.getElementById("addNewProj");

    addNewProj.addEventListener("click", () => {
        addProjects();
        updateProjects();
        cancelProjAdd();
    })

}




export {setInitialProject, activeOnClickProject, addProjectListenerButton, projAdditionListeners, loadProjects, updateProjects, starterProject, AllProjects, ActiveProject};
