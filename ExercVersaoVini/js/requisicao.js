function requisicao(metodo, url, dados, callback, async){
	HTTPRequest = new XMLHttpRequest();
	HTTPRequest.onreadystatechange = callback;
	
	if(metodo == 'GET'){
		url += '?' + dados;
	}
	
	HTTPRequest.open(metodo, url, async);
	
	if(metodo == 'POST'){
		HTTPRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		HTTPRequest.send(dados);
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