
 
function getDataUsingFetch() {
fetch('https://parseapi.back4app.com/classes/MyFirstClass', {
method: "GET",
headers: {"Content-type": "application/json; charset=UTF-8", 
"X-Parse-Application-Id": "zoSunLUrNvxqtajS3CuGjQjDIu7ysZQPEkBzdopo", 
"X-Parse-REST-API-Key": "HYynZIN9C5tiiGdiX7cOTlOBid3OcrUgJAgcOedC"}
})
.then (response => response.json())
.then(json => console.log(json))
.catch(err=> console.log(err));
}
function postDataUsingFetch(){
	//data  to be sent to the post request
	let _data={
		fname:"chan",
		lname:"ravan",
	}
	fetch('https://parseapi.back4app.com/classes/MyFirstClass', {
	method: "POST",
	body: JSON.stringify(_data),
	headers: {"Content-type": "application/json; charset=UTF-8", 
	"X-Parse-Application-Id": "zoSunLUrNvxqtajS3CuGjQjDIu7ysZQPEkBzdopo", 
	"X-Parse-REST-API-Key": "HYynZIN9C5tiiGdiX7cOTlOBid3OcrUgJAgcOedC"}
	}).then (response => response.json())
	.then(json => console.log(json))
	.catch(err=> console.log(err));
}

function putDataUsingFetch(){
	//data  to be sent to the post request
	let _data={
		fname:"chan",
		lname:"ravan",
	}
	fetch('https://parseapi.back4app.com/classes/MyFirstClass/h0B8JhasGn', {
	method: "PUT",
	body: JSON.stringify(_data),
	headers: {"Content-type": "application/json; charset=UTF-8", 
	"X-Parse-Application-Id": "zoSunLUrNvxqtajS3CuGjQjDIu7ysZQPEkBzdopo", 
	"X-Parse-REST-API-Key": "HYynZIN9C5tiiGdiX7cOTlOBid3OcrUgJAgcOedC"}
	}).then (response => response.json())
	.then(json => console.log(json))
	.catch(err=> console.log(err));
	
}
function deleteDataUsingFetch(){ 

fetch('https://parseapi.back4app.com/classes/MyFirstClass/h0B8JhasGn', {
	method: "DELETE", 
	headers: {"Content-type": "application/json; charset=UTF-8", 
	"X-Parse-Application-Id": "zoSunLUrNvxqtajS3CuGjQjDIu7ysZQPEkBzdopo", 
	"X-Parse-REST-API-Key": "HYynZIN9C5tiiGdiX7cOTlOBid3OcrUgJAgcOedC"}
	}).then (response => response.json())
	.then(json => console.log(json))
	.catch(err=> console.log(err));

}




 