const COHORT = "2109-CPU-RM-WEB-PT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
    events: [],
};

const eventsList = document.querySelector('#eventsList');
const eventForm = document.getElementById('eventForm');

// Function to fetch events from the API and update the state
async function getEvents() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        state.events = data;
        renderEvents();
    } catch (error) {
        console.error(error);
    }
}

// Function to render events to the DOM
function renderEvents() {
    eventsList.innerHTML = ''; // Clear existing content

    if (!state.events.length) {
        eventsList.innerHTML = "<li>No events</li>";
        return;
    }

    state.events.forEach(event => {
        const li = document.createElement("li");
        li.innerHTML = `<h2>${event.name}</h2><p>Location: ${event.location}, Date: ${event.date}</p>`;
        eventsList.appendChild(li);
    });
}

// Event listener for form submission
eventForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission and page refresh


window.onload = getEvents;