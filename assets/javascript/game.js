// $(document).ready(function(){

// 	var chosenCharacter;
// 	var moveEnemy;
// 	var chosenEnemy;

// 	$(".character").on("click", function() {
			
// 		// Choose Character to Play With	
// 		var chosenCharacter = $(this);
// 			console.log(this);
// 			$('#playerChar').append(chosenCharacter);

// 		// Moves Remaining Characters to Choose Enemy Section	
// 		var moveEnemy = $('.character').not(this);
// 			console.log(moveEnemy);
//          	$("#chooseenemyChar").append(moveEnemy);

//         // Moves Chosen Enemy to the Enemy Character	
//         moveEnemy.on("click", function() {
// 			var chosenEnemy = $(this);
// 			$("#enemyChar").append(chosenEnemy);
// 			$('#playerChar').append(chosenCharacter);



// 		});

//     });     	

// });

$(document).ready(function(){

	var chosenCharacter = $(".character");
	var moveEnemy;
	var chosenEnemy;

	$(".character").on("click", function() {
			
		if (chosenCharacter == true) {
			$("#playerChar").append(chosenCharacter);
		} else if (chosenCharacter == false) {
			$("#chooseenemyChar").append(chosenCharacter);
		}
    	

});