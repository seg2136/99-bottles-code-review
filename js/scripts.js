var bottleCounter = function(number) {
	var bottleSong = " ";

	if ((number > 1) && (number < 99)) {
		bottleSong = number + " bottles of beer on the wall, " + number + " bottles of beer. Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.";	
	}	
	else if (number === 1) {
		bottleSong = "Only 1 bottle of beer on the wall, only 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.";
	} 
	else if (number === 0) {
	 	bottleSong = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."; 		
	}	
	else {
		bottleSong = "It seems that you are too drunk to play this game. Try again!";		
	}	return bottleSong;
// }

// var bottleSong = function(number) {
// 	document.write(bottleSong);
// }
// 	var bottles = [];
// 	for (variable i=number; i<=bottles.length; i++) {
// 		i
// 		bottles[i]
// 	}
// 	bottles.forEach(bottleSong);
};


$(function() {
  $("form#bottle-counter").submit(function(event) {
    var bottleNumber = parseInt($("input#bottleNumber").val());

    result = bottleCounter(bottleNumber)

    $("#result").text(result)

    event.preventDefault();
  });
});