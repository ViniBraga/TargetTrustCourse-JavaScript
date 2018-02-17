

function requisicao(m, u, d, c, a){
	
	var metodo;
	var url;
	var dados;
	var callback;
	var async;
	
	this.metodo = m;
	this.url = u;
	this.dados = d;
	this.callback = c;
	this.async = a;
	
	HTTPRequest = new XMLHttpRequest();
	HTTPRequest.onreadystatechange = this.callback;
	
	if(this.metodo == 'GET'){
		this.url += '?' + this.dados;
	}
	
	HTTPRequest.open(this.metodo, this.url, this.async);
	
	if(this.metodo == 'POST'){
		HTTPRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		HTTPRequest.send(this.dados);
	}
	else {
		HTTPRequest.send(null);
	}
	
	if(HTTPRequest.readyState != HTTPRequest.DONE){
		throw new Error('ReadyState não é DONE: '+HTTPRequest.readyState);
	}
	
	if(HTTPRequest.status != 200){
		throw new Error('Status HTTP diferente de 200: '+HTTPRequest.status);
	}
}