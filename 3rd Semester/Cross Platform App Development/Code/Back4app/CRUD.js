function postData() {
  alert("Calling POST");
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  const MyFirstClass = Parse.Object.extend("MyFirstClass");
  const myFirstClass = new MyFirstClass();
  myFirstClass.set("fname", fname);
  myFirstClass.set("lname", lname);
  myFirstClass.save()
    .then((object) => {
      // Success
      alert('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      alert('Failed to create new object, with error code: ' + error.message);
      alert("I am done!");
    });
}

function getData() {
  alert("Calling GET");
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  const MyFirstClass = Parse.Object.extend("MyFirstClass");
  const query = new Parse.Query(MyFirstClass);
  query.equalTo("fname", fname);
  query.equalTo("lname", lname);
  
  query.find().then((results) => {
    // You can use the "get" method to get the value of an attribute
    alert(`fname----> ${results[0].get('fname')}`);
    alert(`lname----> ${results[0].get('lname')}`);
    
    if (typeof document !== 'undefined') {
      document.write(`Person found: ${JSON.stringify(results)}`);
    }
    
    console.log('Person found', results);
  }).catch((error) => {
    if (typeof document !== 'undefined') {
      document.write(`Error while fetching Record: ${JSON.stringify(error)}`);
    }
    console.error('Error while fetching Record', error);
  });
}

function updateData() {
  alert("Calling UPDATE!");
 
  var u_objectId = document.getElementById("u_objectId").value;
  var u_fname = document.getElementById("u_fname").value;
  var u_lname = document.getElementById("u_lname").value;
  
 
  var u_objectId = document.getElementById("u_objectId").value;
  const MyFirstClass = Parse.Object.extend("MyFirstClass");
  const query = new Parse.Query(MyFirstClass);
   
 query.get(u_objectId).then((object) => {
  console.log(object.get('fname'));
  object.set('fname',u_fname)
  object.set('fname', u_fname);
  object.set('lname', u_lname);
  return object.save();
   }).then((response) => {
      alert(`Updated fname: ${response.get("fname")}`);
      alert(`Updated lname: ${response.get("lname")}`);
      console.log('Updated Record', response);
    }).catch((error) => {
      console.error('Error while updating Record', error);
    }); 
   
}

function deleteData() {
  alert("Calling DELETE");
  var d_objectId = document.getElementById("d_objectId").value;
  const MyFirstClass = Parse.Object.extend("MyFirstClass");
  const query = new Parse.Query(MyFirstClass);
  
  query.get(d_objectId).then((object) => {
  console.log(object.fname);
    object.destroy().then((response) => {
      if (typeof document !== 'undefined') {
        document.write(`Deleted Record: ${JSON.stringify(response)}`);
      }
      console.log('Deleted Record', response);
    }).catch((error) => {
      if (typeof document !== 'undefined') {
        document.write(`Error while deleting Record: ${JSON.stringify(error)}`);
      }
      console.error('Error while deleting Record', error);
    });
  }).catch((error) => {
    if (typeof document !== 'undefined') {
      document.write(`Error while fetching Record: ${JSON.stringify(error)}`);
    }
    console.error('Error while fetching Record', error);
  });
}

