$(document).ready(function(){

	var chosenCharacter;
	var moveEnemy;

	$(".character").on("click", function() {
			
		// Choose Character to Play With	
		var chosenCharacter = $(this);
			console.log(this);
			$('#playerChar').append(chosenCharacter);

		// Moves Remaining Characters to Choose Enemy Section	
		var moveEnemy = $('.character').not(this);
			console.log(moveEnemy);
         	$("#chooseenemyChar").append(moveEnemy);

         $(moveEnemy).on("click", function() {
			// var chosenEnemy = moveEnemy;
				chosenCharacter = moveEnemy.not(this);
				$("#enemyChar").append(moveEnemy);
		});	

    });     	

	// $(moveEnemy).on("click", function() {
	// 	var chosenEnemy = $(this);
	// 		console.log(this);
	// 		$("#enemyChar").append(chosenEnemy);
	// });

});