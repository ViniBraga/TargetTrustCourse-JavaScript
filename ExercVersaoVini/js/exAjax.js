HTTPRequest = new XMLHttpRequest();
HTTPRequest.onreadystatechange = function () {
	if(HTTPRequest.readyState == HTTPRequest.DONE){
		if(HTTPRequest.status == 200){
			resposta = HTTPRequest.responseText;
			
			conteudo = document.getElementById('conteudo');
			conteudo.innerHTML = resposta;
		}
	}
};
HTTPRequest.open('GET', 'teste.php', false);
HTTPRequest.send(null);