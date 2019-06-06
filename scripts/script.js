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

var currentProject = "treacherousAdventure"

var projects = [
    "treacherousAdventure",
    "smartParkDisney",
    "vrcane"
]

var colorSchemes = {
    "default": {
        "primary": "#BA5B50",
        "secondary": "#F0E5DD",
        "tertiary": "#D1CEBE"
    },
    "blue": {
        "primary": "#435892",
        "secondary": "#F0E5DD",
        "tertiary": "#BCAA8A"
    },
    "green": {
        "primary": "#8DA077",
        "secondary": "#F0E5DD",
        "tertiary": "#BABAAB"
    }
}

var titles = [
    "Software Engineer",
    "Data Engineer",
    "Full Stack Engineer",
    "Web Engineer",
    "Mobile Engineer"
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

function OpenCloseColorSchemas() {
    container = document.getElementsByClassName('colorSwitchContainer').item(0)
    display = container.style.display
    if (display == 'flex') {
        document.getElementsByClassName('colorSwitchContainer').item(0).style.display = "none"
    }
    else {
        document.getElementsByClassName('colorSwitchContainer').item(0).style.display = "flex"
    }
}

function ChangeColorSchema(schema) {
    // Change color vars
    document.documentElement.style.setProperty('--primary-color', colorSchemes[schema]["primary"]);
    document.documentElement.style.setProperty('--secondary-color', colorSchemes[schema]["secondary"]);
    document.documentElement.style.setProperty('--tertiary-color', colorSchemes[schema]["tertiary"]);

    // Close color schemas
    document.getElementsByClassName('colorSwitchContainer').item(0).style.display = "none"
}

function CycleTitle() {
    title = titles[0]
    titles = titles.slice(1, titles.length)
    titles.push(title)
    document.getElementById("title").textContent = title
}