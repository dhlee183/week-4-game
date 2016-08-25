$(document).ready(function(){

	var chosenCharacter;
	var moveEnemy;
	var chosenEnemy;

	$("button").on("click", function() {
		if ($(this).hasClass("character")) {	
		// Choose Character to Play With	
		var chosenCharacter = $(this);
			console.log(this);
			$('#playerChar').append(chosenCharacter);	
			$('#playerHP').html();

		// Moves Remaining Characters to Choose Enemy Section	
		var moveEnemy = $('.character').not(this);
			console.log(moveEnemy);
         	$("#chooseenemyChar").append(moveEnemy);

        // Moves Chosen Enemy to the Enemy Character	
        moveEnemy.on("click", function() {
			var chosenEnemy = $(this);
			$("#enemyChar").append(chosenEnemy);
			$('#playerChar').append(chosenCharacter);

		});

    	}

    	if ($(this).hasClass("attack")) {

    	}

    }); 

});

