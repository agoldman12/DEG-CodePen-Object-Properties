/*
	Below, you will find a "bands" object containing key-value pairs. Each key corresponds to the name of a band and each value corresponds to how much that band rocks on a scale of 1 to 10. 

Iterate through the object's keys to construct an HTML string of list items. The HTML string will be used to populate the unordered list in the DOM. The contents of each list item should have the following format: {bandName}: {howMuchTheyRock}.
*/

const bands = {
	Astronoid: 10,
	Deafheaven: 10,
	LongDistanceCalling: 9,
	Maybeshewill: 8,
	RussianCircles: 8
};

// let html = ''; <<< I don't understand what this is used for

/* Your code to construct the HTML string goes here */
const iterator = (obj) => {
	for(let key in obj){
		let keyItem = document.createElement('li'); 
		let valueItem = obj[key]; // <<< why does this get me the value of the key/value pair?

		keyItem.innerText = key + ":" + " " + valueItem; 

		//document.querySelector('ul').innerHTML = html; <<< I don't understand what this is used for
		
		let list = document.querySelector('ul');
		list.appendChild(keyItem);
	}

	
} 
iterator(bands);


/*
1. Is is better to use parameters when writing functions or to pass the object?
2. Is this code supposed to replace the hard coded "Good Charlotte 0" line?

const iterator = (bands) => {
	for(let key in bands){
		let keyItem = document.createElement('li'); 
		let valueItem = bands[key]; 

		keyItem.innerText = key + ":" + " " + valueItem; 

		//document.querySelector('ul').innerHTML = html; <<< I don't understand what this is used for
		
		let list = document.querySelector('ul');
		list.appendChild(keyItem);
	}

	
} 
iterator(bands);
*/

