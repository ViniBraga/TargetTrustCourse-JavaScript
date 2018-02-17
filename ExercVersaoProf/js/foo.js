function HR()
{
	this.y = '123';
	this.r = new XMLHttpRequest();
	this.r.open('GET', 'http://localhost:8080/jsav/listar.php');
	this.r.send(null);
	
	this.r.onreadystatechange = function (x) {
		if (this.readyState == this.DONE) {
			console.log(this.status);
		}
		
	}(this);
}