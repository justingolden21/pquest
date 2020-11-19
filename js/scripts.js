$( ()=> {

	// generate faces
	let html = '';
	for(let i=0; i<151; i++) {
		html += `
		<div class="poke" tabindex="0">
		<div class="poke-face" style="background-position: 0px -${i*64}px;"></div>
		<span class="poke-name">${pokeData[i].name}</span>
		</div>`;
	}
	$('#faces').append(html);




	// todo: make it so clicking toggle changes value of checkbox
	$('.toggle__element').click( (event)=> {
		// $(event.target).val($(event.target).val() == 'on' ? 'off' : 'on');
		console.log($('#dex-toggle').is(':checked') );

		$('#dex-toggle').attr('checked', true);
		$('#dex-toggle').prop('checked', true);

		// console.log($(event.target).find('.toggle__checkbox').length );
		// console.log($(event.target).children('.toggle__checkbox').length );
		// console.log($(event.target).children().find('.toggle__checkbox').length );
		// $(event.target).children('.toggle__checkbox').click();

		console.log($('#dex-toggle').is(':checked') );
	});
	// const TOGGLE_PARTS = 'label element checkbox line dot text'.split(' ');
	// for( part of TOGGLE_PARTS) {
	// 	$(`.toggle__${part}`).click( ()=> {
	// 		console.log('toggle thing clicked');
	// 		$(this).find('toggle__element').focus();
	// 	});
	// }

	// make enter and space work on focused toggles
	$(document).on('keydown', (event)=> {
		if( (event.which == 13 || event.which == 32) && $(event.target).hasClass('toggle__element') ) { // 13 and 32 enter and space
			event.preventDefault();
			$(event.target).click();
		}
	});

	// clicking toggle text focuses toggle
	$('.toggle__text').click( (event)=> {
		$(event.target).siblings()[0].focus();
	});

	// search input
	$('#search-input').keyup( ()=> {
		const val = $('#search-input').val().toLowerCase().trim();
		$('.poke').each( (idx, elm)=> {
			if($(elm).find('.poke-name').html().toLowerCase().indexOf(val) != -1) {
				$(elm).css('display', 'inline-block');
			} else {
				$(elm).css('display', 'none');
			}
		});
	});

	// open pokemon when clicked or enter
	$('.poke').on('keydown', (event)=> {
		if(event.which == 13) // enter
			openPokemon($(event.target).find('.poke-name').html() );
	});
	$('.poke-face').click( (event)=> {
		openPokemon($(event.target).parent().find('.poke-name').html() );
	});

	function openPokemon(name) {
		console.log(name);
	}


});

// window.onkeyup = function(e) {
// 	let key = e.keyCode ? e.keyCode : e.which;
// }
