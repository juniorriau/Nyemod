/*
*  Nyemod.js, a Adsense boomer blocker tool
*  Rubi Jihantoro - 22 Juli 2017
*  @codenoid fb.com/real.jihantoro t.me/jihantoro
*  https://www.github.com/codenoid/Nyemod - http://jihantoro.net
*/
var Nyemod = {

    init: function(p) {
    	this.run(p);
    	document.cookie = "nct=0;";
    },
    readData: function(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
    },
    run: function(p){
    var click = p.click
    , 	interval = p.interval;
	var els = document.getElementsByClassName('nyemod');
	for (var i = 0, len = els.length; i < len; i++) {
	    var el = els[i];
	    el.addEventListener("click", function(){ // use this.
	    	tn = Nyemod.readData("nct");
	    	po = tn - 1 + 2;
	    	if(Nyemod.changer(click,interval)){
    			document.cookie = "nct="+po+";";
    		}
    		else
    			Nyemod.n('pointer-events:none;');
	    });
	}
    },
    changer: function(c,i) {
    	tc = this.readData("nct") - 1 + 2;
    	if(tc == c) {
    		setTimeout(function(){
    			document.cookie = "nct=0;";
    			Nyemod.n('pointer-events:cursor;');
    		}, i);
    		return false;
    	}
    	else {
    		return true;
    	}
    },
    n: function(w) {
		var els = document.getElementsByClassName('nyemod');
		for (var i = 0, len = els.length; i < len; i++) {
			var el = els[i];
			el.style = w;
		}
    }
}
