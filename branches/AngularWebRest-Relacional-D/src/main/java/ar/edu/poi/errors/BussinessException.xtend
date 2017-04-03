package ar.edu.poi.errors

class BussinessException extends Exception {
	new(String msg) {
		super(msg)
	}

}
class BuildException extends BussinessException {
	
	new(String msg) {
		super(msg)
	}
	
}
