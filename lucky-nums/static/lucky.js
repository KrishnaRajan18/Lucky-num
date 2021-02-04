// global var
const $form = $('#lucky-form');
const $name = $('#name');
const $nameErr = $('#name-err');
const $year = $('#year');
const $yearErr = $('#year-err');
const $email = $('#email');
const $emailErr = $('#email-err');
const $color = $('#color');
const $results = $('#lucky-results');

//function to get the data and call API from our backend
async function processForm(evt) {

	evt.preventDefault();

	
	data = {
		name  : $name.val(),
		year  : $year.val(),
		email : $email.val(),
		color : $color.val()
	};

	// call our API with info from client
	let resp =  await axios.post('/api/get-lucky-num', data);

	handleResponse(resp);
}



function handleResponse(resp) {
    let text = resp.data;
     //reset errors
	$('b').html('');
	// reset results
	$results.text('');

	//display errors 
	if (text.errors) {
	
		const errors = text.errors;
		for (let err_el in errors) {
			for (let err of errors[err_el]) {
				$(`#${err_el}-err`).append(err);
			}
		}
		
	} else {
        // add the form data to the dom if no errors exist

		let numData = text.num;
		let yearData = text.year;

		let numFact = `Your lucky number is ${numData.num} (${numData.fact})`;
		let yearFact = `Your birth year, ${yearData.year}, fact is: ${yearData.fact}`;

		// append facts to DOM
		$results.append(numFact).append('<br>').append(yearFact);
	}
}

// handle the form submission
$('#lucky-form').on('submit', processForm);