$( ()=> {
	let html = '';
	for(let i=0; i<151; i++) {
		html += `
		<div class="poke">
		<div class="poke-face" style="background-position: 0px -${i*64}px;"></div>
		<span class="poke-name">${pokeData[i].name}</span>
		</div>`;
	}
	$('#faces').append(html);

});

// window.onkeyup = function(e) {
// 	let key = e.keyCode ? e.keyCode : e.which;
// }
