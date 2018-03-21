window.onload = function () {

	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

	// Get elements
	var showLives = document.getElementById("mylives");
	// var showScore = document.getElementById("myscore");
	// score = 0;

	var getHint = document.getElementById("hint");
	var showClue = document.getElementById("clue");

	// create alphabet ul
	var buttons = function () {
		myButtons = document.getElementById('buttons');
		letters = document.createElement('div');

		for (var i = 0; i < alphabet.length; i++) {
			letters.id = 'alphabet';
			list = document.createElement('div');
			list.id = 'letter';
			list.innerHTML = alphabet[i];
			check();
			myButtons.appendChild(letters);
			letters.appendChild(list);
		}
	}

	// Create geusses ul
	result = function () {
		wordHolder = document.getElementById('hold');
		correct = document.createElement('div');

		for (var i = 0; i < word.length; i++) {

			correct.setAttribute('id', 'my-word');

			guess = document.createElement('div');

			if (word[i] === "-") {
				guess.innerHTML = "-";
				space = 1;
			} else {
				guess.innerHTML = "_";
			}

			geusses.push(guess);
			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
	}

	// Show lives
	comments = function () {
		showLives.innerHTML = "Lives - " + lives;

		// showScore.innerHTML = "Score - " + "( " + score + " )";

		if (lives < 1) {
			document.getElementById('alphabet').style.display = 'none';
			document.getElementById('my-word').style.display = 'none';
			document.getElementById('buttonscont').style.display = 'none';
			document.getElementById('cluebox').style.display = 'none';
			document.getElementById('hint').style.display = 'none';
			showLives.innerHTML = "No more lives!" + "<br>" + "<br>" + "The word was " + word.toUpperCase();

		}


		for (var i = 0; i < geusses.length; i++) {
			if (counter + space === geusses.length) {
				document.getElementById('alphabet').style.display = 'none';
				document.getElementById('my-word').style.display = 'none';
				document.getElementById('buttonscont').style.display = 'none';
				document.getElementById('cluebox').style.display = 'none';
				document.getElementById('hint').style.display = 'none';
				showLives.innerHTML = "You got the word!" + "<br>" + "<br>" + word.toUpperCase();
			}
		}
	}

	// OnClick Function
	check = function () {
		list.onclick = function () {
			var geuss = (this.innerHTML);
			this.setAttribute("class", "active");
			this.onclick = null;
			for (var i = 0; i < word.length; i++) {
				if (word[i] === geuss) {
					geusses[i].innerHTML = geuss;
					counter += 1;
					// score += 20;

				}
			}
			var j = (word.indexOf(geuss));
			if (j === -1) {
				lives -= 1;
				// score -= 10;

				comments();
				// animate();
			} else {
				comments();
			}
		}
	}


	// Play
	play = function () {
		categories = [
        ["alien", "umbrella", "gladiator", "hammock", "shark", "gloves", "glue", "photograph", "anniversary"]
    ];

		chosenCategory = categories[Math.floor(Math.random() * categories.length)];
		word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
		word = word.replace(/\s/g, "-");
		console.log(word);
		buttons();

		geusses = [];
		lives = 7;
		counter = 0;
		space = 0;
		result();
		comments();
	}

	play();


	// Hint
	hint.onclick = function () {
		//score -= 10;
		lives -= 1;

		showLives.innerHTML = "Lives - " + lives;
		// showScore.innerHTML = "Score - " + "( " + score + " )";


		hints = [
        ["outer space", "stay dry", "ancient Rome", "net for people", "ocean dwellers with a bad rep", "warm hands", "sticky", "captured memory", "special date"]
    ];

		var catagoryIndex = categories.indexOf(chosenCategory);
		var hintIndex = chosenCategory.indexOf(word);
		showClue.innerHTML = hints[catagoryIndex][hintIndex];

	};

	// Reset

	document.getElementById('reset').onclick = function () {
		document.getElementById('alphabet').style.display = 'flex';
		document.getElementById('my-word').style.display = 'flex';
		document.getElementById('buttonscont').style.display = 'flex';
		document.getElementById('cluebox').style.display = 'flex';
		document.getElementById('hint').style.display = 'flex';
		correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		showClue.innerHTML = "";
		play();
	}
}