// Main components used to know which to turn on/off
var mainComponents = [
    "greetingComponent",
    "experienceComponent",
    "portfolioComponent"
]

var linkMappings = {
    "greetingComponent": "greetingLink",
    "experienceComponent": "experienceLink",
    "portfolioComponent": "portfolioLink"
}

var projects = [
    "treacherousAdventure",
    "smartParkDisney",
    "vrcane"
]

function ChangeToComponent(activeId) {
    // Hide/show components
    mainComponents.forEach(id => {
        var element = document.getElementById(id)
        if (id === activeId) {
            element.style.display = "flex"
        }
        else {
            element.style.display = "none"
        }
    })

    // Change active colors
    var activeLinkId = linkMappings[activeId]
    Object.keys(linkMappings).forEach(componentId => {
        var linkElement = document.getElementById(linkMappings[componentId])
        if (linkMappings[componentId] === activeLinkId) {
            linkElement.style.color = "#F0E5DD"
        }
        else {
            linkElement.style.color = ""
        }
    })
}

var currentProject = "treacherousAdventure"

function NextProject() {
    // Get the index of the next project
    var nextProjectIndex = projects.indexOf(currentProject) + 1
    if (nextProjectIndex >= projects.length) {
        nextProjectIndex = 0
    }

    var nextProjectId = projects[nextProjectIndex]

    // Make next project visible
    projects.forEach(id => {
        var element = document.getElementById(id)
        if (id === nextProjectId) {
            element.style.display = "flex"
        }
        else {
            element.style.display = "none"
        }
    })

    // Update current project
    currentProject = nextProjectId
}