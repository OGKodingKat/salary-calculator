// Attach an event listener to the form with ID "salaryForm" that listens for the "submit" event
document
  .getElementById("salaryForm")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission behavior (i.e., page reload)
    event.preventDefault();
    // Get the form values: salary and state
    const salary = parseFloat(document.getElementById("salary").value); // Parse the salary input as a floating-point number
    const state = document.getElementById("state").value; // Get the selected state value

    // Initialize variables for location, tax rate, and marginal tax rate
    let location = "";
    let taxRate = 0;
    let marginalTaxRate = 0;

    // Determine tax rates and location based on the selected state
    switch (state) {
      case "newyork":
        location = "New York, USA"; // Set location for New York
        taxRate = 0.217; // Set tax rate for New York
        marginalTaxRate = 0.36; // Set marginal tax rate for New York
        break;
      case "california":
        location = "California, USA"; // Set location for California
        taxRate = 0.25; // Set tax rate for California
        marginalTaxRate = 0.39; // Set marginal tax rate for California
        break;
      case "texas":
        location = "Texas, USA"; // Set location for Texas
        taxRate = 0.15; // Set tax rate for Texas
        marginalTaxRate = 0.22; // Set marginal tax rate for Texas
        break;
    }

    // Perform tax and income calculations
    const totalTax = salary * taxRate; // Calculate the total tax based on salary and tax rate
    const netIncome = salary - totalTax; // Calculate the net income after tax
    const monthlyIncome = netIncome / 12; // Calculate the monthly income
    const taxOn100 = 100 * marginalTaxRate; // Calculate the tax on an additional $100
    const netOn100 = 100 - taxOn100; // Calculate the net income on an additional $100 after tax
    const bonus1000 = 1000 * (1 - marginalTaxRate); // Calculate the net amount of a $1000 bonus after tax
    const bonus5000 = 5000 * (1 - marginalTaxRate); // Calculate the net amount of a $5000 bonus after tax

    // Update the summary section with the calculated values
    document.getElementById(
      "grossIncome"
    ).textContent = `$${salary.toLocaleString()}`; // Display the gross income
    document.getElementById("location").textContent = location; // Display the selected location
    document.getElementById(
      "totalTax"
    ).textContent = `$${totalTax.toLocaleString()}`; // Display the total tax
    document.getElementById(
      "netIncome"
    ).textContent = `$${netIncome.toLocaleString()}`; // Display the net income
    document.getElementById(
      "monthlyIncome"
    ).textContent = `$${monthlyIncome.toFixed(2)}`; // Display the monthly income
    document.getElementById("averageTaxRate").textContent = `${(
      taxRate * 100
    ).toFixed(1)}%`; // Display the average tax rate as a percentage
    document.getElementById("marginalTaxRate").textContent = `${(
      marginalTaxRate * 100
    ).toFixed(1)}%`; // Display the marginal tax rate as a percentage
    document.getElementById("taxOn100").textContent = `$${taxOn100.toFixed(2)}`; // Display the tax on $100
    document.getElementById("netOn100").textContent = `$${netOn100.toFixed(2)}`; // Display the net income on $100
    document.getElementById("bonus1000").textContent = `$${bonus1000.toFixed(
      2
    )}`; // Display the net amount of a $1000 bonus
    document.getElementById("bonus5000").textContent = `$${bonus5000.toFixed(
      2
    )}`; // Display the net amount of a $5000 bonus

    // Make the summary section visible by removing the "hidden" class
    document.getElementById("summary").classList.remove("hidden");
  });
