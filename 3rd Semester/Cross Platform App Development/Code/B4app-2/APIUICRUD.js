
        // Function to fetch data from the API
        function getDataUsingFetch1() {
            fetch('https://parseapi.back4app.com/classes/MyFirstClass', {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "X-Parse-Application-Id": "zoSunLUrNvxqtajS3CuGjQjDIu7ysZQPEkBzdopo",
                    "X-Parse-REST-API-Key": "HYynZIN9C5tiiGdiX7cOTlOBid3OcrUgJAgcOedC"
                }
            })
            .then(response => response.json())
            .then(json => {
                // Process the fetched data and display it in the UI
                const dataContainer = document.getElementById("data-container");

                // Assuming the API response is an array of objects
                json.results.forEach(item => {
                    const itemDiv = document.createElement("div");
                    itemDiv.innerHTML = `
                        <p><strong>Object ID:</strong> ${item.objectId}</p>
                        <p><strong>First Name:</strong> ${item.fname}</p>					
                        <p><strong>last Name:</strong> ${item.lname}</p>
                       
                    `;
                    dataContainer.appendChild(itemDiv);
                });
            })
            .catch(err => console.log(err));
        }

        // Call the function to fetch and display data
        getDataUsingFetch();
		
		function putDataUsingFetch() {
			
        const updateId = document.getElementById("update-id").value;
        const updatedFname = document.getElementById("update-fname").value;
        const updatedLname = document.getElementById("update-lname").value;

        if (!updateId || (!updatedFname && !updatedLname)) {
            alert("Please enter both ID and updated data (fname and/or lname).");
            return;
        }

        const _data = {};

        if (updatedFname) {
            _data.fname = updatedFname;
        }

        if (updatedLname) {
            _data.lname = updatedLname;
        }

        fetch(`https://parseapi.back4app.com/classes/MyFirstClass/${updateId}`, {
            method: "PUT",
            body: JSON.stringify(_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-Parse-Application-Id": "zoSunLUrNvxqtajS3CuGjQjDIu7ysZQPEkBzdopo",
                "X-Parse-REST-API-Key": "HYynZIN9C5tiiGdiX7cOTlOBid3OcrUgJAgcOedC"
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json); // Handle the response as needed
            alert(`Data with ID ${updateId} updated successfully.`);
        })
        .catch(err => console.log(err));
    }
	
	 function deleteDataUsingFetch() {
        const deleteId = document.getElementById("delete-id").value;

        if (!deleteId) {
            alert("Please enter an ID to delete.");
            return;
        }

        fetch(`https://parseapi.back4app.com/classes/MyFirstClass/${deleteId}`, {
            method: "DELETE", 
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-Parse-Application-Id": "zoSunLUrNvxqtajS3CuGjQjDIu7ysZQPEkBzdopo",
                "X-Parse-REST-API-Key": "HYynZIN9C5tiiGdiX7cOTlOBid3OcrUgJAgcOedC"
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json); // Handle the response as needed
            alert(`Data with ID ${deleteId} deleted successfully.`);
        })
        .catch(err => console.log(err));
    }
 function getDataUsingFetch() {
            fetch('https://parseapi.back4app.com/classes/MyFirstClass', {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "X-Parse-Application-Id": "zoSunLUrNvxqtajS3CuGjQjDIu7ysZQPEkBzdopo",
                    "X-Parse-REST-API-Key": "HYynZIN9C5tiiGdiX7cOTlOBid3OcrUgJAgcOedC"
                }
            })
            .then(response => response.json())
            .then(json => {
                // Process the fetched data and display it in the grid
                const dataContainer = document.getElementById("data-container");

                // Assuming the API response is an array of objects
                json.results.forEach(item => {
                    const gridItem = document.createElement("div");
                    gridItem.classList.add("grid-item");
                    gridItem.innerHTML = `
                        <p><strong>User ID:</strong> ${item.objectId}</p>
                        <p><strong>Last Name:</strong> ${item.lname}</p>
                        <p><strong>First Name:</strong> ${item.fname}</p>
                    `;
                    dataContainer.appendChild(gridItem);
                });
            })
            .catch(err => console.log(err));
        }
