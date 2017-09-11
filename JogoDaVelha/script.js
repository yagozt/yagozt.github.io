var jogador = 'x';
var vez = 1
function chkJogo(id){
	var src = document.getElementById(id).innerHTML;
	document.getElementById(id).className = "casax";
	alert(classe);
	if (src == ''){
		document.getElementById(id).innerHTML=jogador;
		if(chkVitoria()){
			alert("Fim de jogo!");
			location.reload();
			return;
		}
		if (jogador == 'x')
			jogador = 'o';
		else
			jogador = 'x'
		vez++;
		if (vez > 9){
			alert("Empate");
			location.reload();
			return;
		}
	}
}

function chkVitoria(){
	if ( casasIguais(1,2,3) || casasIguais(4,5,6) || casasIguais(7,8,9) ||
	casasIguais(1,4,7) || casasIguais(2,5,8) || casasIguais(3,6,9) ||
	casasIguais(1,5,9) || casasIguais(3,5,7)
	)
		return true;
	return false;
}

function casasIguais(a,b,c){
	var casaA = document.getElementById("cel" + a).innerHTML;
	var casaB = document.getElementById("cel" + b).innerHTML;
	var casaC = document.getElementById("cel" + c).innerHTML;
	
	if((casaA == casaB) && (casaB == casaC) && (casaA != "none" && casaA != ""))
		return true;
	return false;
}