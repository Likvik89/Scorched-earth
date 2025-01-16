window.onload=function() {
    // Define the size of the battlefield
const rows = 10;  // Number of rows
const cols = 10;  // Number of columns

// Function to generate the battlefield
function generateBattlefield(rows, cols) {
    const battlefield = [];

    // Fill the battlefield with random "air" or "ground"
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            // Randomly assign "air" or "ground"
            row.push(Math.random() < 0.5 ? 'air' : 'ground');
        }
        battlefield.push(row);
    }

    return battlefield;
}

// Generate the battlefield
const battlefield = generateBattlefield(rows, cols);

// Display the battlefield in the console
console.table(battlefield);

}