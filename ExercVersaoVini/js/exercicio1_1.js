HTTPRequest = new XMLHttpRequest();
HTTPRequest.onreadystatechange = function () {
	if(HTTPRequest.readyState == HTTPRequest.DONE){
		if(HTTPRequest.status == 200){
			resposta = JSON.parse(HTTPRequest.responseText);
			conteudo = document.querySelector("#conteudo");
			conteudo.innerHTML = resposta.nome;
		}
	}
};
HTTPRequest.open('GET', 'consulta.php?id=4', false);
HTTPRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
HTTPRequest.send(null);
