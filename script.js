// Function to fetch data from public API
function getQuote() {

    // Show loading indicator
    document.getElementById("loading").innerText = "Loading...";
    document.getElementById("quote").innerText = "";
    document.getElementById("author").innerText = "";

    // Fetch API call
fetch("https://dummyjson.com/quotes/random")
        .then(response => {
            // Check if response is successful
            if (!response.ok) {
                throw new Error("Network response failed");
            }
            return response.json(); // Convert response to JSON
        })
        .then(data => {
            // Display fetched data on UI
            console.log(data);
            document.getElementById("quote").innerText = `"${data.quote}"`;
            document.getElementById("author").innerText = `— ${data.author}`;
            document.getElementById("loading").innerText = "";
        })
        .catch(error => {
            // Handle errors
            document.getElementById("loading").innerText = "Error fetching data!";
            console.error("Error:", error);
        });
}
