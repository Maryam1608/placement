// Dummy function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const location = document.getElementById('location').value;
    const condition = document.getElementById('condition').value;
    const threshold = document.getElementById('threshold').value;
    
    // Display alert message (dummy)
    const alertsList = document.getElementById('alerts-list');
    const alertItem = document.createElement('li');
    alertItem.textContent = `Alert set for ${location}: ${condition} above ${threshold}`;
    alertsList.appendChild(alertItem);
    
    // Clear form inputs
    document.getElementById('alert-form').reset();
}

// Attach event listener to form submit
const alertForm = document.getElementById('alert-form');
alertForm.addEventListener('submit', handleFormSubmit);
