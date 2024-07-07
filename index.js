// Selecting DOM elements
const newItemText = document.getElementById('newItemText');
const addItemBtn = document.getElementById('addItemBtn');
const clearListBtn = document.getElementById('clearListBtn');
const shoppingList = document.getElementById('shoppingList');

// Array  shopping list items
let items = [
    { name: 'Apples', completed: false },
    { name: 'Bananas', completed: false },
    { name: 'Bread', completed: false },
    { name: 'Milk', completed: false },
    { name: 'Eggs', completed: false },
    { name: 'Cheese', completed: false },
    { name: 'Chicken', completed: false },
    { name: 'Rice', completed: false },
    { name: 'Tomatoes', completed: false },
    { name: 'Lettuce', completed: false }
];

// Function to render the shopping list
function renderList() {
    // Clear existing list items
    shoppingList.innerHTML = '';

    // Loop through items array and create list elements
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        
        // Add a class if item is completed
        if (item.completed) {
            li.classList.add('completed');
        }

        // Event listener to mark item as completed
        li.addEventListener('click', () => {
            item.completed = !item.completed;
            renderList(); // Update the list
        });

        shoppingList.appendChild(li);
    });
}

// Event listener for Add button
addItemBtn.addEventListener('click', () => {
    const itemName = newItemText.value.trim();
    if (itemName) {
        items.push({ name: itemName, completed: false });
        renderList(); // Update the list
        newItemText.value = ''; // Clear input field
    }
});

// Event listener for Clear List button
clearListBtn.addEventListener('click', () => {
    items = []; // Clear the items array
    renderList(); // Update the list
});

// Initial rendering of the list
renderList();
