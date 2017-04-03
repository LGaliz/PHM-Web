var GPS = (function() {
    //Singleton constructor is private
    function Singleton() {
    	 this.listaDePuntos = [
    	                       new Point(-34.578500, -58.528810),
    	                       new Point(-34.578510, -58.528880),
    	                       new Point(-34.579100, -58.528108),
    	                       new Point(-34.580310, -58.525458),
    	                       new Point(-34.581767, -58.522186),
    	                       new Point(-34.582968, -58.519643)
    	                     ]; //public var

        this.getPosicion = function(){ //public function
        	return this.listaDePuntos[Math.floor(Math.random()*this.cantidadDePuntos())];
        }
        this.cantidadDePuntos = function(){ //public function
            return this.listaDePuntos.length;
        }
    }
 
    //private var to store the single instance
    var singleInstance;
 
    //Return the object providing getInstance method
    return {
        getInstance: function() {
            if (!singleInstance) singleInstance = new Singleton();
            return singleInstance;
 
        }
    }
 
})();