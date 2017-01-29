var app = angular.module('hemaapp', []);

app.controller('nav', function() {
	this.cont = 1;
		
	this.selCont = function(setCont) {
		this.cont = setCont;
	};
		
	this.isSelected = function(checkCont) {
		return this.cont === checkCont;
	};
	
	this.BarsEnable = function() {
		if (this.cont != 0) { 
			return true;
		} else {
			return false;
		}
	}

/*	
	this.include = "html/kontakt.html";
	
	this.cont = function() {
		switch (this.cont) {
			case 1:
				this.include = "html/projektbeschreib.html";
				break;
		}
		return this.include;
	}
*/

});
