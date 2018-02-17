window.addEventListener('load', function(){

	var carrinho = [];

	fn = function(){
		if (HTTPRequest.readyState === HTTPRequest.DONE) {
			if (HTTPRequest.status === 200) {
				produtos = JSON.parse(HTTPRequest.responseText);
			}
		}
	};

	try{
		r = new requisicao('GET', 'http://localhost:8080/jsav/listar.php', null, fn, false);
	}catch(e){
		console.log(e.message);
	}


	lista = document.querySelector('#listaprodutos');
	cElement = document.querySelector('tbody');

	for (p = 0; p < produtos.length; p++) {
		lItem = document.createElement('li');
		
		eSpan = document.createElement('span');
		eSpan.innerHTML = produtos[p].nome;
		
		lItem.appendChild(eSpan);
		
		tNode = document.createTextNode(' R$ ');
		lItem.appendChild(tNode);
		
		vSpan = document.createElement('span');
		vSpan.innerHTML = produtos[p].preco;
		
		lItem.appendChild(vSpan);
		
		eLink = document.createElement('a');
		eLink.setAttribute('id', produtos[p].id);
		eLink.setAttribute('href', '#');
		eLink.innerHTML = ' Comprar ';
		
		eLink.addEventListener('click', function () {

			requisicao('GET', 'http://localhost:8080/jsav/consulta.php', 'id='+this.getAttribute('id'), function () {
				if (HTTPRequest.readyState === HTTPRequest.DONE) {
					if (HTTPRequest.status === 200) {
						produto = JSON.parse(HTTPRequest.responseText);
					}
				}
			}, false);
				
			linha = document.createElement('tr');
			c1 = document.createElement('td');
			c1.innerHTML = p;
			c2 = document.createElement('td');
			c2.innerHTML = produto.nome;
			c3 = document.createElement('td');
			c3.innerHTML= produto.quantidade;
			c4 = document.createElement('td');
			c4.innerHTML = produto.preco;
			c5 = document.createElement('td');
			c5.innerHTML = 'y';
			
			linha.appendChild(c1);
			linha.appendChild(c2);
			linha.appendChild(c3);
			linha.appendChild(c4);
			linha.appendChild(c5);
			
			cElement.appendChild(linha);
			
			requisicao('GET', 'http://localhost:8080/jsav/compra.php?id=', 'id='+this.getAttribute('id'), function(){}, false)
			
			fn = function () {
				if (HTTPRequest.readyState === HTTPRequest.DONE) {
					if (HTTPRequest.status === 200) {
					}
				}
			};
			
			requisicao('GET', 'http://localhost:8080/jsav/consultaTotal.php', null, function(){
				if (HTTPRequest.readyState === HTTPRequest.DONE) {
					if (HTTPRequest.status === 200) {
						total = HTTPRequest.responseText;
						document.querySelector('span.label').innerHTML = total;
					}
				}
			}, false);
		});
		
		lItem.appendChild(eLink);
		lista.appendChild(lItem);
	}


});

