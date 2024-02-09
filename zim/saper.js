let first = true;
let second = true;
let cordsx = [];
let cordsy = [];
let liczba = "red";
let count = 0;
let liscountx = [];
let liscounty = [];

let polezerox = [];
let polezeroy = [];

let numbpole = 0;
//bool do zmian zabezpieczenie i odpiezpieczenia
function generate(){//generuje plansze
	for(let i = 0; i < 20; i++){
		document.getElementById("board").innerHTML += '<tr id="i' + i + '"></tr>';
		//document.getElementById("i"+i).style.display = "inline";
		for(let j = 0; j < 20; j++){
			document.getElementById("i"+i).innerHTML += '<td id="i' + i + 'j' + j + '"><button id="i' + i + 'b'+ j +'" onClick="check('+ i + ','+ j +', 1)" oncontextmenu="bomb('+ i + ','+ j +')"></button>' + '</td>';
			document.getElementById("i"+i+"b"+j).style.height = "25px";
			document.getElementById("i"+i+"b"+j).style.width = "25px";
			document.getElementById("i"+i+"b"+j).style.backgroundColor = "blue";
			//document.getElementById("i"+i+"b"+j).style.Color = "#8bb6dd";
		}
	}
}
function checkbomb(x, y){//sprawdza bombe
	for(let i = 0; i < 60; i++){
		if(cordsx[i] == x && cordsy[i] == y){
			return true;
		}
	}
	document.getElementById("i"+x+"b"+y).style.backgroundColor = "white";
	let bombs = numbercont(x, y);
	if(bombs != 0){
		document.getElementById("i"+x+"b"+y).innerHTML = bombs;
		numbpole++;
	}
	else{
		numbpole++;
		opened(x, y);
	}
	return false;
}
function opened(x, y){
	let bombs;
	let prawy = true;
	let lewy = true;
	let gora = true;
	let dol = true;
	for(let j = 1; (j+x) < 20 ; j++){// potem ma byc j>0 chyba już nie
		for(let k = 0; k <= i ; k++){
			bombs = numbercont((x + j), (y+k));
			if(bombs == 0 && dol){
				//polezerox.push(x+j);//chyba nie musze tego po prostu jak bomb 0 to odkryj
				//polezeroy.push(y);
				document.getElementById("i"+(x+j)+"b"+(y+k)).style.backgroundColor = "white";
			}
			else{
				//break;
				if(dol){
					document.getElementById("i"+(x+j)+"b"+(y+k)).style.backgroundColor = "white";
					document.getElementById("i"+(x+j)+"b"+(y+k)).innerHTML = bombs;
				}
				dol = false;
				//continue;
			
			}
		}
		//dol = true;
		
		
		
		/*for(let i = 0; i < polezerox.length; i++){
			if(polezerox[i] == x && polezeroy[i] == y+1){//!!!!!!!!!!!!!!!!!!!!!!!!!do zrobienia            chyba dac zmienna j zamiast 1
				prawy = true;
			}
			if(polezerox[i] == x && polezeroy[i] == y-1){
				lewy = true;
			}
			if(polezerox[i] == x+1 && polezeroy[i] == y){
				gora = true;
			}
			if(polezerox[i] == x-1 && polezeroy[i] == y){
				dol = true;
			}
		}
		if(!prawy){
			checkbomb(x, y+1);
		}
		if(!lewy){
			checkbomb(x, y-1);
		}
		if(!gora){
			checkbomb(x+1, y);
		}
		if(!dol){
			checkbomb(x-1, y);
		}*/
	}
}
function firstbombssee(x, y){//odrywa pola wokol
	checkbomb(x+1, y);
	checkbomb(x+1, y+1);
	checkbomb(x+1, y-1);
	checkbomb(x-1, y);
	checkbomb(x-1, y+1);
	checkbomb(x-1, y-1);
	checkbomb(x, y+1);
	checkbomb(x, y-1);
}
function losegame(){
	for(let g = 0; g < 60; g++){//pokazuje wszystkie bomby kiedy przegra
		document.getElementById("i"+cordsx[g]+"b"+cordsy[g]).style.backgroundColor = "red";
		console.log(cordsx.length);
	}
}

function check(x, y, zerori){//sprawdza bombe (wywoluje funkcje) i pierwszy raz
	//document.write(x + "," + y);
	if(first){//pierwsze odsloniecie to miesza bomby
		solve(x, y);
		first = false;
		firstbombssee(x, y);
		document.getElementById("i"+x+"b"+y).style.backgroundColor = "white";//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ma byc potem jakas funkcja do odlsony
		let bombs = numbercont(x, y);
		document.getElementById("i"+x+"b"+y).innerHTML = bombs;
	}
	else{
		if(checkbomb(x, y)){
			document.getElementById("i"+x+"b"+y).style.backgroundColor = "red";
			alert("Przegrałeś");
			losegame();
		}
	if(numbpole == 340){
		alert("Wygrałeś");
	}
	/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	document.getElementById("i"+x+"b"+y).style.backgroundColor = "blue";
	/////x- gora x+ dol y prawo lewo
	let ch = false;
	//to jak jest poraz pierwszy
	if(second || zerori == 0){
		second = false;
	for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x-1) && cordsy[i] == y){
				ch = true;
				break;
			}
		}
	if(!ch){
		let xg = (x-1);
		if(document.getElementById("i"+xg+"b"+y).style.backgroundColor != "orange"){
			document.getElementById("i"+xg+"b"+y).style.backgroundColor = "blue";
			numbercont(xg, y);
		}
		//tu dalsze sprawdzanie
		
		for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x-1) && cordsy[i] == (y-1)){
				ch = true;
				break;
			}
		}
		if(!ch){
			let xg = (x-1);
			let yg = (y-1);
			if(document.getElementById("i"+xg+"b"+yg).style.backgroundColor != "orange"){
				document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
				numbercont(xg, yg);
			}
		}
		ch = false;
		
		for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x-1) && cordsy[i] == (y+1)){
				ch = true;
				break;
			}
		}
		if(!ch){
			let xg = (x-1);
			let yg = (y+1);
			if(document.getElementById("i"+xg+"b"+yg).style.backgroundColor != "orange"){
				document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
				numbercont(xg, yg);
			}
		}
	ch = false;
	}
	ch = false;
	
	for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x+1) && cordsy[i] == y){
				ch = true;
				break;
			}
		}
	if(!ch){
		let xg = (x+1);
		if(document.getElementById("i"+xg+"b"+y).style.backgroundColor != "orange"){
			document.getElementById("i"+xg+"b"+y).style.backgroundColor = "blue";
			numbercont(xg, y);
		}
		
		for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x+1) && cordsy[i] == (y-1)){
				ch = true;
				break;
			}
		}
		if(!ch){
			let xg = (x+1);
			let yg = (y-1);
			if(document.getElementById("i"+xg+"b"+yg).style.backgroundColor != "orange"){
				document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
				numbercont(xg, yg);
			}
		}
		ch = false;
		
		for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x+1) && cordsy[i] == (y+1)){
				ch = true;
				break;
			}
		}
		if(!ch){
			let xg = (x+1);
			let yg = (y+1);
			if(document.getElementById("i"+xg+"b"+yg).style.backgroundColor != "orange"){
				document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
				numbercont(xg, yg);
			}
		}
		ch = false;
		
		
	}
	ch = false;
	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
	
	/*for(let i = 0; i < 60; i++){///
			if(cordsx[i] == (x+1) && cordsy[i] == (y-1)){
				ch = true;
				break;
			}
		}
	if(!ch){
		let xg = (x+1);
		let yg = (y-1);
		document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
	}
	ch = false;*/
	
	/*for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x+1) && cordsy[i] == (y+1)){
				ch = true;
				break;
			}
		}
	if(!ch){
		let xg = (x+1);
		let yg = (y+1);
		document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
	}
	ch = false;*/
	
	/*for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x-1) && cordsy[i] == (y-1)){
				ch = true;
				break;
			}
		}
	if(!ch){
		let xg = (x-1);
		let yg = (y-1);
		document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
	}
	ch = false;*/
	
	/*for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x-1) && cordsy[i] == (y+1)){
				ch = true;
				break;
			}
		}
	if(!ch){
		let xg = (x-1);
		let yg = (y+1);
		document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
	}
	ch = false;*/
	
	/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	for(let i = 0; i < 60; i++){ // zmienicna 60
			if(cordsx[i] == x && cordsy[i] == (y-1)){
				ch = true;
				break;
			}
		}
	if(!ch){
		let yg = (y-1);
		if(document.getElementById("i"+x+"b"+yg).style.backgroundColor != "orange"){
			document.getElementById("i"+x+"b"+yg).style.backgroundColor = "blue";
			numbercont(x, yg);
		}
		for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x+1) && cordsy[i] == (y-1)){
				ch = true;
				break;
			}
		}
		if(!ch){
			let xg = (x+1);
			let yg = (y-1);
			if(document.getElementById("i"+xg+"b"+yg).style.backgroundColor != "orange"){
				document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
				numbercont(xg, yg);
			}
		}
		ch = false;
		
		//tu
		for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x-1) && cordsy[i] == (y-1)){
				ch = true;
				break;
			}
		}
		if(!ch){
			let xg = (x-1);
			let yg = (y-1);
			if(document.getElementById("i"+xg+"b"+yg).style.backgroundColor != "orange"){
				document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
				numbercont(xg, yg);
			}
		}
		ch = false;
		
	}
	ch = false;
	
	for(let i = 0; i < 60; i++){
			if(cordsx[i] == x && cordsy[i] == (y+1)){
				ch = true;
				break;
			}
		}
	if(!ch){
		let yg = (y+1);
		if(document.getElementById("i"+x+"b"+yg).style.backgroundColor != "orange"){
			document.getElementById("i"+x+"b"+yg).style.backgroundColor = "blue";
			numbercont(x, yg);
		}
		
		for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x-1) && cordsy[i] == (y+1)){
				ch = true;
				break;
			}
		}
		if(!ch){
			let xg = (x-1);
			let yg = (y+1);
			if(document.getElementById("i"+xg+"b"+yg).style.backgroundColor != "orange"){
				document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
				numbercont(xg, yg);
			}
		}
	ch = false;
	
	for(let i = 0; i < 60; i++){
			if(cordsx[i] == (x+1) && cordsy[i] == (y+1)){
				ch = true;
				break;
			}
		}
		if(!ch){
			let xg = (x+1);
			let yg = (y+1);
			if(document.getElementById("i"+xg+"b"+yg).style.backgroundColor != "orange"){
				document.getElementById("i"+xg+"b"+yg).style.backgroundColor = "blue";
				numbercont(xg, yg);
			}
		}
		ch = false;
	
	}
	ch = false;
	zerori = 1;
	}
	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
	////
	//numbercont(x, y)
	}
}

function solve(x, y){//rozklada bomby
	for(let i = 0; i < 60; i++){
		cordsx[i] = parseInt(Math.floor(Math.random() * 20));
		cordsy[i] = parseInt(Math.floor(Math.random() * 20));
		if(cordsy[i] == y && cordsx[i] == x){//nie ma bomby gdzie klikniesz
			i--;
			//break;
			continue;
		}
		for(let j = 0; j < i; j++){
			if(cordsx[i] == cordsx[j] && cordsy[i] == cordsy[j] && cordsy[i] == y && cordsx[i] == x){
				i--;
				break;
				//continue;
			}
		}
	}
	/*for(let g = 0; g < 60; g++){//pokazuje bomby
		document.getElementById("i"+cordsx[g]+"b"+cordsy[g]).style.backgroundColor = "black";
		console.log(cordsx.length);
		//document.write(cordsx[g]+","+cordsy[g]+"<br>"); //// ty dziala
	}*/
}

function numbercont(x, y){//liczy bomby wokol x i y
	let ch = false;
	let bombs = 0;
	for(let i = 0; i < 60; i++){///
		if(cordsx[i] == (x+1) && cordsy[i] == (y-1)){
			ch = true;
			bombs++;
			break;
		}
	}
	ch = false;
	
	for(let i = 0; i < 60; i++){
		if(cordsx[i] == (x+1) && cordsy[i] == (y+1)){
			ch = true;
			bombs++;
			break;
		}
	}
	ch = false;
	
	for(let i = 0; i < 60; i++){
		if(cordsx[i] == (x-1) && cordsy[i] == (y-1)){
			ch = true;
			bombs++;
			break;
		}
	}
	ch = false;
	
	for(let i = 0; i < 60; i++){
		if(cordsx[i] == (x-1) && cordsy[i] == (y+1)){
			ch = true;
			bombs++;
			break;
		}
	}
	ch = false;
	
	for(let i = 0; i < 60; i++){
		if(cordsx[i] == (x-1) && cordsy[i] == (y)){
			ch = true;
			bombs++;
			break;
		}
	}
	ch = false;
	
	for(let i = 0; i < 60; i++){
		if(cordsx[i] == (x+1) && cordsy[i] == (y)){
			ch = true;
			bombs++;
			break;
		}
	}
	ch = false;
	
	for(let i = 0; i < 60; i++){
		if(cordsx[i] == (x) && cordsy[i] == (y+1)){
			ch = true;
			bombs++;
			break;
		}
	}
	ch = false;
	
	for(let i = 0; i < 60; i++){
		if(cordsx[i] == (x) && cordsy[i] == (y-1)){
			ch = true;
			bombs++;
			break;
		}
	}
	ch = false;
	
	return bombs;
	/*if(bombs != 0){
		document.getElementById("i"+x+"b"+y).innerHTML = bombs;
	}
	else
	{
		check(x, y, 0);
	}*/
}

function bomb(x, y){//rozbraja bombe
	document.getElementById("i"+x+"b"+y).style.backgroundColor = "aqua";
}