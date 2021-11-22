String.prototype.splice = function(idx, rem, str) {
   return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

export function boolval(val){
	if(val == 0) { return false; }
	return true;
}

export function ID(el){ return document.getElementById(el); }

export function httpReq(url, exec = null, data = null, intialize = null, abort = null){
	if (intialize != null){ intialize(); }
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var resp = this.responseText;
			exec(resp);
		}
	};
	if (abort!= null){ xhttp.onabort = function(){ abort(); }; }
	if (data != null){ var formData = data(); xhttp.open("POST", url, true); xhttp.send(formData); }
	else 			 { xhttp.open('GET', url, true); xhttp.send(); }
	return xhttp;
}

export function swtDate(m){
	var mes = "";
	switch (m){
		case 1  : mes = 'Janeiro';  break;
		case 2  : mes = 'Fevereiro'; break;
		case 3  : mes = 'Março'; 	 break;
		case 4  : mes = 'Abril'; 	 break;
		case 5  : mes = 'Maio'; 	 break;
		case 6  : mes = 'Junho'; 	 break;
		case 7  : mes = 'Julho'; 	 break;
		case 8  : mes = 'Agosto'; 	 break;
		case 9  : mes = 'Setembro';  break;
		case 10 : mes = 'Outubro'; 	 break;
		case 11 : mes = 'Novembro';  break;
		case 12 : mes = 'Dezembro';  break;
	}
	return mes;
}

export function sqlToDate(date){
	const strDate = date.split('-');
	date = strDate[2]+'/'+strDate[1]+'/'+strDate[0];
	return date;
}

export function getFirstName(nome){
	nome = nome.split(' ');
	return nome[0];
}

export function sqlToInput(valor, decs = 2){
	return valor.toLocaleString('pt-br', {minimumFractionDigits: decs, maximumFractionDigits: decs});
}

export function inputToSql(valor){
	valor = valor.replace('.','' ,valor);
	valor = valor.replace(',','.',valor);
	return parseFloat(valor);
}

export function intVal(valor){
	return (valor).toFixed(0);
}

export function floatVal(valor){
	return (valor).toFixed(2);
}

export function abrVal(valor){
	if (valor >= 1000000) 		{ return (valor/1000000).toFixed(2)+'mi';} 
	else if (valor > 100)      { return (valor/1000).toFixed(0)+'mil';}
	else if ((valor <= 100) && (valor >= -100)) { return (valor).toFixed(2)+'%';}
	else if (valor <= -1000000){ return (valor/1000000).toFixed(2)+'mi';}
	else if (valor <= -10000)  { return (valor/1000).toFixed(0)+'mil';}
	else if (valor < -100)     { return (valor/1000).toFixed(0)+'mil';}
}