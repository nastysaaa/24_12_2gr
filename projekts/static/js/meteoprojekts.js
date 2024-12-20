// Datu saraksts
const data = [];

// Pievienot datus tabulai
document.getElementById("addData").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    const temperature = parseFloat(document.getElementById("temperature").value);

    if (city && !isNaN(temperature)) {
        data.push({ city, temperature });

        // Attēlot tabulā
        const table = document.getElementById("dataTable");
        const newRow = table.insertRow();
        newRow.insertCell(0).innerText = city;
        newRow.insertCell(1).innerText = temperature;

        // Aprēķināt vidējo temperatūru
        calculateAverage();
    } else {
        alert("Lūdzu, ievadiet derīgus datus!");
    }
});

// Aprēķināt vidējo temperatūru
function calculateAverage() {
    const total = data.reduce((sum, entry) => sum + entry.temperature, 0);
    const average = (total / data.length).toFixed(2);
    document.getElementById("averageTemp").innerText = Vidējā temperatūra: ${average} °C;
}