items = document.getElementsByTagName("li");
alvo = items[0];

//console.log(alvo.innerHTML);

item_lista = document.createElement("li");
item_lista.innerHTML = 'Teste';

alvo.appendChild(item_lista);