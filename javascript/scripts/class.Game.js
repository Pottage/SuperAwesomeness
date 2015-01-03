function Game() {

}

/* In javascript, since it isn't really OOP, the concept of class isn't as well defined. However the function is a first class citizen unlike java, and we can add methods to it on its 'prototype'...*/

//Methods for Mr Barczak to implement...

Game.prototype.init = function() {
	//Needs to return 'this'
};

Game.prototype.sideToMove = function() {
	//Needs to return a string
	return "Cross";
}