var domains = ['gmail.com', 'aol.com', 'outlook.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org", "br"];
var campoEmail = document.querySelector('#email');
var sugestao = document.querySelector('#sugestao');


campoEmail.addEventListener('blur', function() {
	Mailcheck.run({
		email: campoEmail.value,
		domains: domains,                       // optional
		topLevelDomains: topLevelDomains,       // optional
		secondLevelDomains: secondLevelDomains, // optional
	
		suggested: function(suggestion) {
			
			sugestao.style.display = 'inline-block';
			sugestao.textContent = 'Você quis dizer: ' + suggestion.full + ' ?';
			sugestao.parentNode.classList.add('contatoCampo--erro');
			campoEmail.classList.add('contatoCampo--validouErro');
			sugestao.setAttribute('tabIndex', '0');
			sugestao.setAttribute('role', 'alert');
		}
		
	});
});