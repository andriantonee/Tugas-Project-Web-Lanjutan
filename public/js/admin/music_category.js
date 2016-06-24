var add_music_category = function(){
		var data = {
				music_category : $('input[name=input_music_category]').val() || ""
			};

		if (data.music_category === ""){
			$("input[name=input_music_category]").focus();

			if ($( '#div-row-alert-form-category' ).length === 0){
				$( '<div id="div-row-alert-form-category" class="row">' +
		               '<div class="col-lg-12">' +
		                   '<div id="div-row-alert-messsage-form-category" class="alert alert-danger">' +
		                       'Category masih kosong !' +
		                   '</div>' +
		               '</div>' +
		           '</div>' ).insertBefore( '#div-row-form-music-category' );
			}
			else{
				$(' #div-row-alert-messsage-form-category ').html('Category masih kosong !');
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
					location.replace(window.location.origin + '/hidden/music/category');
				}
				else{
					$("input[name=input_music_category]").focus();
					
					if ($( '#div-row-alert-form-category' ).length === 0){
						$( '<div id="div-row-alert-form-category" class="row">' +
				               '<div class="col-lg-12">' +
				                   '<div id="div-row-alert-messsage-form-category" class="alert alert-danger">' +
				                       'Category masih kosong !' +
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
	delete_music_category = function(){

	};

$('button[name=add_music_category]').click(function(){ add_music_category() });
$('button[name=delete_music_category]').click(function(){ delete_music_category() });