// LOADING SCREEN
(function() {

		// Variáveis associadas à função do "preload"
		var preload = document.getElementById('preload');
		var loading = 0;
		var id = setInterval(frame, 64);

		// Função associada ao "loading"
		function frame() {
				if(loading == 100) {
						clearInterval(id);

						// Mudança para a página de index
						window.open('index.html', '_self');
				} else {
						// Final da animação de loading (flash)
						loading = loading + 1;
						if(loading == 90) {
							preload.style.animation = "fadeout 1s ease";
						}
				}
		}

})();