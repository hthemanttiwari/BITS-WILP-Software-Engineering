// Instantiating EasyHTTP
const http = new EasyHTTP;

// Define the Data method
const showData = data => {
  const charactersDiv = document.querySelector("#details-in-div");
	console.log(data);
  // Check if 'data' is defined and an array
  if (Array.isArray(data)) {
    data.forEach(character => {
      const characterElement = document.createElement("p");
      characterElement.innerText = `Name: ${character.name} \n Email: ${character.email} \n Username: ${character.username}`;

	  console.log(character.name)
      charactersDiv.appendChild(characterElement);
    });
  } else {
    console.error("The 'data' parameter is not an array or is undefined.");
  }
}

// Get prototype method
http.get('https://jsonplaceholder.typicode.com/users')

  // Resolving promise for response data
  .then(data => showData(data))
   
  // Resolving promise for error
  .catch(err => console.log(err));

// Data for post request
const data = {
  name: 'selmon_bhoi',
  username: '_selmon',
  email: 'selmonbhoi@gmail.com'
}

// Post prototype method
http.post(
  'https://jsonplaceholder.typicode.com/users',
  data)

  // Resolving promise for response data
  .then(data => console.log(data))

  // Resolving promise for error
  .catch(err => console.log(err));
