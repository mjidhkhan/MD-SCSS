const action_buttons = document.querySelectorAll('#md-buttons .btn');
Array.prototype.forEach.call(action_buttons, function(action_buttons) {
	action_buttons.addEventListener('click', function(event) {
		//console.log(event.srcElement.classList[1]);
		//console.log(event);
		let sectionId = event.target.dataset.section + '-section';

		var c1 = event.srcElement.classList[0];
		var c2 = event.srcElement.classList[1];
		var data = createCSSClassesToAdd(c1, c2);
		createButton(data);
	});
});

function createCSSClassesToAdd(c1, c2) {
	var md_class = [];
	var str = c2;

	var res = str.split('-');

	console.log(res);
	//console.log(res);
	if (res.length > 3) {
		md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-' + res[2] + '-50');
	} else {
		md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-50');
	}
	for (i = 1; i <= 9; i++) {
		if (res.length > 3) {
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-' + res[2] + '-' + i + '00');
		} else {
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-' + i + '00');
		}
	}
	if (res[1] == 'brown' || res[2] == 'gray' || res[1] == 'gray') {
	} else {
		if (res.length > 3) {
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-' + res[2] + '-A100');
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-' + res[2] + '-A200');
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-' + res[2] + '-A400');
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-' + res[2] + '-A700');
		} else {
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-A100');
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-A200');
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-A400');
			md_class.push(c1 + ' ' + res[0] + '-' + res[1] + '-A700');
		}
	}

	return md_class;
}

function createButton(data) {
	//console.log(data);
	var buttonDiv = document.querySelector('#md-theme');
	var card = document.querySelector('.card');
	while (buttonDiv.firstChild) {
		buttonDiv.removeChild(buttonDiv.firstChild);
	}
	buttonDiv.classList.add('mb-3');

	data.forEach((element) => {
		var button = document.createElement('button');
		var str = element.split(' ');
		button.innerHTML = str[1];
		button.classList.add(str[0]);
		button.classList.add(str[1]);
		button.classList.add('mr-3');
		button.classList.add('mb-3');
		button.classList.add('mt-3');
		buttonDiv.appendChild(button);
	});

	//console.log(buttonDiv);
}

function checkedState() {
	if (document.querySelector('.type').checked) {
		var element = document.querySelector('.type');
	}
}
