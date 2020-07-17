// fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
// 		"x-rapidapi-key": "1bb1ac1d5amsh81f8fadcd780b33p1bae8ajsnb57ee55c52bd"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });


const countryForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

countryForm.addEventListener('submit', e => {
	e.preventDefault();
	const Country = countryForm.country.value.trim();
	countryForm.reset();
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://covid-19-data.p.rapidapi.com/country?format=json&name=" + `${Country}`,true);
	// xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
	xhr.setRequestHeader("x-rapidapi-key", "1bb1ac1d5amsh81f8fadcd780b33p1bae8ajsnb57ee55c52bd");
	xhr.onload = function(){
		if(this.status = 200){
			// console.log(this.responseText)
			let cases = JSON.parse(this.responseText);
			var output='';	
			for(var i in cases){
				output +='<ul>'+
					'<li id="country"> COUNTRY:  ' +cases[i].country+'</li>' +
					'<li id="confirm"> CONFIRMED: ' +cases[i].confirmed +'</li>' +
					'<li id="recovered"> RECOVERED:'  +cases[i].recovered+'</li>' +
					'<li><span>CRITICAL<span>: ' +cases[i].critical+'</li>' +
					'</ul>';
				
			

			}
			details.innerHTML = output;
			if(card.classList.contains('d-none')){
				card.classList.remove('d-none');
			}
		}
	}
	xhr.send();
	

})
console.log(1);
console.log("Done");
console.log('2');
console.log('changes');
// const key = "1bb1ac1d5amsh81f8fadcd780b33p1bae8ajsnb57ee55c52bd";

// const getCountry = async(Country) => {
// 	const base= "https://covid-19-data.p.rapidapi.com/country?format=json&name=";


// 	const response = await fetch(base + query);
// 	const data = await response.json();
// 	console.log(response)
// };