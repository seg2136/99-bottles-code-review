var bottleCounter = function(number) {
	var bottleLyric = " ";

	if (number > 1) {
		bottleLyric = number + " bottles of beer on the wall, " + number + " bottles of beer. Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.";	
	}	
	else if (number === 1) {
		bottleLyric = "Only 1 bottle of beer on the wall, only 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.";
	} 
	else {
	 	bottleLyric = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."; 		
	}	
	return bottleLyric;
};


$(function() {
  $("form#bottle-counter").submit(function(event) {
    var bottleNumber = parseInt($("input#bottleNumber").val());

    result = bottleCounter(bottleNumber)

    $("#result").text(result)

    event.preventDefault();
  });
});