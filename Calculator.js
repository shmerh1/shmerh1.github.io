let results = [];  

document.write("<h1>Simple Calculator</h1>");
document.write("<p>The results of your calculations will appear below:</p>");

// Start the table to display the calculations
document.write("<table border='1'>");
document.write("<tr><th>x</th><th>Op</th><th>y</th><th>Result</th></tr>");

function isValidOperator(operator) {
    return ['+', '-', '*', '/', '%'].includes(operator);
}

function calculateResult(x, y, operator) {
    if (operator === '+') return x + y;
    if (operator === '-') return x - y;
    if (operator === '*') return x * y;
    if (operator === '/') return y !== 0 ? x / y : 'Error: Division by zero';
    if (operator === '%') return x % y;
    return 'Error: Invalid operator';
}

// Calculation loop
while (true) {
    let x = prompt("Enter the first number (or click Cancel to quit):");
    if (x === null) break;  // Exit loop if Cancel is clicked
    x = parseFloat(x);
    
    if (isNaN(x)) {
        document.write("<tr><td colspan='4'>Error: Invalid number for X</td></tr>");
        continue;
    }

    let y = prompt("Enter the second number:");
    if (y === null) break;  
    y = parseFloat(y);

    if (isNaN(y)) {
        document.write("<tr><td colspan='4'>Error: Invalid number for Y</td></tr>");
        continue;
    }

    let operator = prompt("Enter an arithmetic operator (+, -, *, /, %):");
    if (operator === null) break;  

    let result;
    if (!isValidOperator(operator)) {
        result = 'Error: Invalid operator';
    } else {
        result = calculateResult(x, y, operator);
        if (typeof result === 'number') {
            results.push(result);  // Only push valid results
        }
    }

    // Add row to the table for this calculation
    document.write(`<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>`);
}


document.write("</table>");


if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;

    // Create and display the summary table
    document.write("<h3>Summary of Valid Results</h3>");
    document.write("<table border='1'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`);
    document.write("</table>");
} else {

    document.write("<p>No valid results to summarize.</p>");
}