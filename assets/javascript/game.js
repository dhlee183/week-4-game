$(document).ready(function(){

	$(".character").on("click", function() {
			
		// Choose Character to Play With	
		var chosenCharacter = $(this);
			$('#playerChar').append(chosenCharacter);

		// Moves Remaining Characters to Choose Enemy Section	
		var moveEnemy = $('.character').not(this);
			moveEnemy.each(function(){
         	$("#chooseenemyChar").append(moveEnemy);
     	});

		

	});

});