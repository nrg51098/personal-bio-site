

const projects =[{
    title: "Cool Project", 
    screenshot: "https://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }];


const printToDom=(selector, domString)=>{
const div = document.querySelector(selector);
div.innerHTML = domString;

}

const createProjectsCards = (myProjects)=>{
    let domString = "";
    for (let i = 0; i < myProjects.length; i++) {
        domString += `
        <div class="card">
        <h2>${myProjects[i].title}</h2>
        <img src="${myProjects[i].screenshot}">
        <p>${myProjects[i].description}</p>
        <p>Technologies Used: ${myProjects[i].technologiesUsed}</p>
        <p>Available: ${myProjects[i].available}</p>
        <a href="${myProjects[i].url}">url</a>
        <a href=${myProjects[i].githubUrl}>githuburl</a>
        </div>
        `;
        
    }
console.log(`${myProjects[0].screenshot}`);
    const selector = "#projectsPage";
    printToDom(selector, domString);
}

const init =()=>{
    createProjectsCards(projects);

}

  init();