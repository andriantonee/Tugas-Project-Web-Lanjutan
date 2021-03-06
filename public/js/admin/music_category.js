var func_add_music_category = function(){
		var data = {
				music_category : $( 'input[name=input_music_category]' ).val() || ""
			};

		if (data.music_category === ""){
			$( "input[name=input_music_category]" ).focus();

			if ($( '#div-row-alert-form-category' ).length === 0){
				$( '<div id="div-row-alert-form-category" class="row">' +
		               '<div class="col-lg-12">' +
		                   '<div id="div-row-alert-messsage-form-category" class="alert alert-danger">' +
		                       'Category yang ingin diinput masih kosong !' +
		                   '</div>' +
		               '</div>' +
		           '</div>' ).insertBefore( '#div-row-form-music-category' );
			}
			else{
				$(' #div-row-alert-messsage-form-category ').html('Category yang ingin diinput masih kosong !');
			}

			return false;
		}

		$.ajax({
			method : 'POST',
			async : false,
			data : data,
			url : window.location.origin + '/hidden/music/category/add',
			success : function(res) {
				if (res.success === true){
					// location.replace(window.location.origin + '/hidden/music/category');
					location.reload();
				}
				else{
					$("input[name=input_music_category]").focus();

					if ($( '#div-row-alert-form-category' ).length === 0){
						$( '<div id="div-row-alert-form-category" class="row">' +
				               '<div class="col-lg-12">' +
				                   '<div id="div-row-alert-messsage-form-category" class="alert alert-danger">' +
				                       res.message +
				                   '</div>' +
				               '</div>' +
				           '</div>' ).insertBefore( '#div-row-form-music-category' );
					}
					else{
						$(' #div-row-alert-messsage-form-category ').html(res.message);
					}
				}
			}
		});
	},
	func_delete_music_category = function(){
		var data = {
				music_category : $('input[name=input_music_category]').val() || ""
			};

		if (data.music_category === ""){
			$("input[name=input_music_category]").focus();

			if ($( '#div-row-alert-form-category' ).length === 0){
				$( '<div id="div-row-alert-form-category" class="row">' +
		               '<div class="col-lg-12">' +
		                   '<div id="div-row-alert-messsage-form-category" class="alert alert-danger">' +
		                       'Category yang ingin dihapus masih kosong !' +
		                   '</div>' +
		               '</div>' +
		           '</div>' ).insertBefore( '#div-row-form-music-category' );
			}
			else{
				$(' #div-row-alert-messsage-form-category ').html('Category yang ingin dihapus masih kosong !');
			}

			return false;
		}

		$.ajax({
			method : 'POST',
			async : false,
			data : data,
			url : window.location.origin + '/hidden/music/category/delete',
			success : function(res) {
				if (res.success === true){
					// location.replace(window.location.origin + '/hidden/music/category');
					location.reload();
				}
				else{
					$("input[name=input_music_category]").focus();
					
					if ($( '#div-row-alert-form-category' ).length === 0){
						$( '<div id="div-row-alert-form-category" class="row">' +
				               '<div class="col-lg-12">' +
				                   '<div id="div-row-alert-messsage-form-category" class="alert alert-danger">' +
				                       res.message +
				                   '</div>' +
				               '</div>' +
				           '</div>' ).insertBefore( '#div-row-form-music-category' );
					}
					else{
						$(' #div-row-alert-messsage-form-category ').html(res.message);
					}
				}
			}
		});
	},
	func_music_category_table_click = function(value){
		$( 'input[name=input_music_category]' ).val($(value).children()[1].innerHTML).focus();
	};

$( 'button[name=add_music_category]' ).click(function(){ func_add_music_category() });
$( 'button[name=delete_music_category]' ).click(function(){ func_delete_music_category() });
$( 'tr.cursor-pointer' ).click(function(){ func_music_category_table_click(this) });