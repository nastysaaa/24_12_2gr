document.addEventListener("DOMContentLoaded", ()=> {
    const apiUrl = "/api/data"; 
    const form = document.gotElementById("tempForm");
    const tableBody = document.guerySelector("#dataTable tbody");
    const avgTempElement = document.getElementById("avgTemp");

    //Fcija lai ielādētu datus un atjaunotu tabulu
    const loadTable = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        //notirīt tabulu
        tableBody.innerHTML = "";
        let totalTemp = 0;

    }
})