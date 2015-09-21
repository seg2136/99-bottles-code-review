describe("bottleCounter", function() {
	it("takes the number '1' and returns the singular lyrical sentence to 99 Bottles", function() {
		expect(bottleCounter(1)).to.equal("Only 1 bottle of beer on the wall, only 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.");
	});

	it("takes any number between 1 and 98 and returns the corresponding lyrical sentence to 99 Bottles", function() {
		expect(bottleCounter(57)).to.equal("57 bottles of beer on the wall, 57 bottles of beer. Take one down and pass it around, 56 bottles of beer on the wall.");
	});

	it("takes the number '0' and returns the last lyrical sentence to 99 Bottles", function() {
		expect(bottleCounter(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
	});

	it("does not accept any number lower than '0'", function() {
		expect(bottleCounter(-1)).to.equal("It seems that you are too drunk to play this game. Try again!");
	});

	it("does not accept any number greater than '99'", function() {
		expect(bottleCounter(101)).to.equal("It seems that you are too drunk to play this game. Try again!");
	});
});