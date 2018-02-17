 
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
}

fn = function(){
	if(HTTPRequest.readyState == HTTPRequest.DONE){
		if(HTTPRequest.status == 200){
			document.querySelector('div').innerHTML = JSON.parse(HTTPRequest.responseText)[0].nome;
		}
	}
}

requisicao('GET', 'http://localhost:8080/jsav/listar.php', null, fn, false);
