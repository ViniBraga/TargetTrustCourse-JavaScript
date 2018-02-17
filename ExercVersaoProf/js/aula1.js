items = document.getElementsByTagName("ul");
alvo = items[0];

item_lista = document.createElement("li");
item_lista.innerHTML = 'Teste';

alvo.appendChild(item_lista);