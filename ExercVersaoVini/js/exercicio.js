HTTPRequest = new XMLHttpRequest();
HTTPRequest.onreadystatechange = function () {
	if(HTTPRequest.readyState == HTTPRequest.DONE){
		if(HTTPRequest.status == 200){
			resposta = JSON.parse(HTTPRequest.responseText);
			//resposta = HTTPRequest.responseXML;
			//texto = resposta.querySelector('span').innerHTML;
			//conteudo = document.querySelector('#conteudo');
			//conteudo.innerHTML = texto;
		}
	}
};
HTTPRequest.open('POST', 'listar.php', false);
//HTTPRequest.open('POST', 'testeJSON.php', false);
//HTTPRequest.open('POST', 'testeXML.php', false);
HTTPRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
//HTTPRequest.send('nome=Galvão&curso=JS Avançado');//Feito apenas para requisições POST
HTTPRequest.send(null);
produtos = resposta;

//------------------------------------------------------------------Produtos estão sendo buscados de arquivos PHP
/*var produtos = [
    {nome:'Cewin 500mg C/ 30 Comprimidos',preco:18.46, quantidade:2},
    {nome:'Targifor C Efervescente C/ 16 Comprimidos',preco:29.38, quantidade:7},
    {nome:'Shampoo A Seco Batiste Fresh 150ml',preco:17.58, quantidade:1},
    {nome:'Inneov Fermete 60 Drágeas',preco:103.92, quantidade:3},
    {nome:'Leite Aptamil 2 800g',preco:33.90, quantidade:2},
    {nome:'Lencos Umedecidos Huggies Turma Monica C/96',preco: 12.84, quantidade:4},
];  

container = document.getElementById("listaprodutos");

for (n = 0; n < produtos.length; n++) {
	p = produtos[n];
	//console.log(p);
	//console.table(p);
	console.log(p.nome);
	
	elemento = document.createElement("li");
	elemento.innerHTML = p.nome + ' R$ ' + p.preco + ' Comprar';
	//elemento.id = n;//Não recomendável
	elemento.setAttribute("id", n);
	
*/
//-------------------------------------------------------------------




lista = document.getElementById('listaprodutos');
cElement = document.querySelector('tbody')
// Ou cElement = document.getElementsByTagName('tbody')

for (p = 0; p < produtos.length; p++) {
	lItem = document.createElement('li');
	
	eSpan = document.createElement('span');
	eSpan.innerHTML = produtos[p].nome;
	lItem.appendChild(eSpan);
	
	tNode = document.createTextNode('RS');
	lItem.appendChild(tNode);
	
	vSpan = document.createElement('span');
	vSpan.innerHTML = produtos[p].preco;
	lItem.appendChild(vSpan);
	
	eLink = document.createElement('a');
	eLink.setAttribute('id', p);
	eLink.setAttribute('href','#');
	eLink.innerHTML = 'Comprar';
	eLink.addEventListener('click', function(){
		preco = this.previousSibling.innerHTML;
		nome = this.previousSibling.previousSibling.previousSibling.innerHTML;
		
		itemLista = this.parentNode;
		lista = itemLista.parentNode;
		//itemRemovido = lista.removeChild(itemLista);//OBS: removeChild retorna o item removido
		//document.getElementById('outralista').appendChild(itemRemovido);
		//OU
		//document.querySelector('#outralista').appendChild(itemRemovido);//Função similar ao JQuery (getElementById, getElementsByTagName e getElementsByClassName podem ser substituidos por querySelector)
		
		//console.log(preco);
		//console.log(nome);
		
		linha = document.createElement('tr');
		
		c1 = document.createElement('td');
		c1.innerHTML = p;
		
		c2 = document.createElement('td');
		c2.innerHTML = nome;
		
		c3 = document.createElement('td');
		c3.innerHTML = 'x';
		
		c4 = document.createElement('td');
		c4.innerHTML = preco;
		
		c5 = document.createElement('td');
		c5.innerHTML = 'y';
		
		

		linha.appendChild(c1);
		linha.appendChild(c2);
		linha.appendChild(c3);
		linha.appendChild(c4);
		linha.appendChild(c5);

		
		cElement.appendChild(linha);
	});
	lItem.appendChild(eLink);
	
	lista.appendChild(lItem);
}

