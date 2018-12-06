

// Variaveis

var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');
var noticias = document.querySelectorAll('.listaDeArtigos-item');

new0.style.display = 'block'

// Criando indicador de Slide Atual

var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.id = 'escondeVisualmente';
indicadorSlideAtual.textContent = '(Slide atual)';

var btns = document.querySelectorAll('.listaDeArtigos-slider-item');

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
		
	//	btn.href = 'javascript:void(0)' // serve para deixar a pagina "parada" após clicar em qualquer slide do carrosel. Como o href tem esse comportamento de deslocar um pouco a página, esse comando ameniza esse comportamento.
		
		noticias.forEach(function(noticia){
			noticia.style.display = 'none';
			
			if ( this.getAttribute('data-sliderItem') === noticia.getAttribute('data-noticia') ){
				noticia.style.display = 'block';		
			}
		}.bind(this));
		
		document.querySelector('.listaDeArtigos-slider-item .escondeVisualmente').remove();
		this.append(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})