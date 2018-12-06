var campoCep = document.querySelector('#cep');

campoCep.oninvalid = function(){
	this.setCustomValidity('');
	
	if(!this.validity.valid){
		this.setCustomValidity('Ops! Algo deu errado no campo CEP');
		document.querySelector('#msgAcessibilidade').innerHTML = "Por favor, preencher o campo CEP";
		
			this.parentNode.classList.add('contatoCampo--erro')
	}
}

