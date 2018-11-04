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

//let html = ''; //<<<<< how do I get key/value pairs into here?

/* Your code to construct the HTML string goes here */
const displayBandsThatRock = (obj) => {
	for(const key in obj){
		const keyItem = document.createElement('li');
		const valueItem = obj[key]; 


		keyItem.innerText = key + ":" + " " + valueItem; 
		//document.querySelector('ul').innerHTML = html;
			
		const list = document.querySelector('ul');
		list.appendChild(keyItem);
		
	}

	
} 


const chk_box = document.getElementById('rockBox');
chk_box.addEventListener('change', function(e){

		const list = document.querySelector('ul');
		
		if(list){
			
			if(chk_box.checked){
				displayBandsThatRock(bands);
			}else{
				reset(e);
			}
		}

	});

function reset(){
	
	document.querySelector('ul').innerHTML = " ";
 
}

/*
 1. The reset function takes away the first band in the list (hard coded Good Charlotte).
    How can I keep this band when I use the reset function? I want it to make sense when the checkbox says "more bands that rock".
 2. How do I use the line 'let html = ''; and document.querySelector('ul').innerHTML = html;
 3. Is insertAdjacentHTML a more modern way to put html on the page than document.CreateElement / appendChild?
*/


