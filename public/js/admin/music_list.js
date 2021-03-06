var func_add_music_list = function(){
        var data = {
            music_category : $( '#musiccategory' ).val() || "",
            music_title : $( 'input[name=input_music_title]' ).val() || "",
            music_singer : $( 'input[name=input_music_singer]' ).val() || "",
            youtube_video_id : $( 'input[name=input_youtube_video_id]' ).val() || "",
            lyric : $( 'textarea[name=input_lyric]' ).val() || "",
            album_image : $( 'input[name=input_image_album]' )[0].files[0] || undefined
        };

        if (data.music_category === ""){
            $( '#musiccategory' ).focus();

            if ($( '#div-row-alert-form-list' ).length === 0){
                $( '<div id="div-row-alert-form-list" class="row">' +
                       '<div class="col-lg-12">' +
                           '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                               'Music Category yang ingin diinput masih kosong !' +
                           '</div>' +
                       '</div>' +
                   '</div>' ).insertBefore( '#div-row-form-music-list' );
            }
            else{
                $(' #div-row-alert-messsage-form-list ').html('Music Category yang ingin diinput masih kosong !');
            }

            return false;
        }
        if (data.music_title === ""){
            $( 'input[name=input_music_title]' ).focus();

            if ($( '#div-row-alert-form-list' ).length === 0){
                $( '<div id="div-row-alert-form-list" class="row">' +
                       '<div class="col-lg-12">' +
                           '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                               'Music Title yang ingin diinput masih kosong !' +
                           '</div>' +
                       '</div>' +
                   '</div>' ).insertBefore( '#div-row-form-music-list' );
            }
            else{
                $(' #div-row-alert-messsage-form-list ').html('Music Title yang ingin diinput masih kosong !');
            }

            return false;
        }
        if (data.music_singer === ""){
            $( 'input[name=input_music_singer]' ).focus();

            if ($( '#div-row-alert-form-list' ).length === 0){
                $( '<div id="div-row-alert-form-list" class="row">' +
                       '<div class="col-lg-12">' +
                           '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                               'Music Singer yang ingin diinput masih kosong !' +
                           '</div>' +
                       '</div>' +
                   '</div>' ).insertBefore( '#div-row-form-music-list' );
            }
            else{
                $(' #div-row-alert-messsage-form-list ').html('Music Singer yang ingin diinput masih kosong !');
            }

            return false;
        }
        if (data.youtube_video_id === ""){
            $( 'input[name=input_youtube_video_id]' ).focus();

            if ($( '#div-row-alert-form-list' ).length === 0){
                $( '<div id="div-row-alert-form-list" class="row">' +
                       '<div class="col-lg-12">' +
                           '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                               'Youtube Video ID yang ingin diinput masih kosong !' +
                           '</div>' +
                       '</div>' +
                   '</div>' ).insertBefore( '#div-row-form-music-list' );
            }
            else{
                $(' #div-row-alert-messsage-form-list ').html('Youtube Video ID yang ingin diinput masih kosong !');
            }

            return false;
        }
        if (data.lyric === ""){
            $( 'textarea[name=input_lyric]' ).focus();

            if ($( '#div-row-alert-form-list' ).length === 0){
                $( '<div id="div-row-alert-form-list" class="row">' +
                       '<div class="col-lg-12">' +
                           '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                               'Lyric yang ingin diinput masih kosong !' +
                           '</div>' +
                       '</div>' +
                   '</div>' ).insertBefore( '#div-row-form-music-list' );
            }
            else{
                $(' #div-row-alert-messsage-form-list ').html('Lyric yang ingin diinput masih kosong !');
            }

            return false;
        }
        if (data.album_image !== undefined){
          if (data.album_image.type !== 'image/jpg' && data.album_image.type !== 'image/jpeg'){
            $( 'input[name=input_image_album]' ).focus();

            if ($( '#div-row-alert-form-list' ).length === 0){
                $( '<div id="div-row-alert-form-list" class="row">' +
                       '<div class="col-lg-12">' +
                           '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                               'Maaf, file yang diupload hanya boleh image yang berextensi *.jpg/*.jpeg' +
                           '</div>' +
                       '</div>' +
                   '</div>' ).insertBefore( '#div-row-form-music-list' );
            }
            else{
                $(' #div-row-alert-messsage-form-list ').html('Maaf, file yang diupload hanya boleh image yang berextensi *.jpg/*.jpeg');
            }

            return false;
          }
        }

        var formdata = new FormData();
        formdata.append('music_category', data.music_category);
        formdata.append('music_title', data.music_title);
        formdata.append('music_singer', data.music_singer);
        formdata.append('youtube_video_id', data.youtube_video_id);
        formdata.append('lyric', data.lyric);
        formdata.append('image', data.album_image);

        $.ajax({
            method : 'POST',
            async : false,
            data : {
              music_category : data.music_category,
              music_title : data.music_title,
              music_singer : data.music_singer,
              youtube_video_id : data.youtube_video_id,
              lyric : data.lyric
            },
            url : window.location.origin + '/hidden/music/list/add',
            success : function(res){
                if (res.success === true){
                  if (data.album_image !== undefined){
                    $.ajax({
                      method : 'POST',
                      async : false,
                      data : formdata,
                      url : window.location.origin + '/hidden/music/list/upload',
                      success : function(res){
                          if (res.success === true){
                              location.reload();
                          }
                          else{
                              $( 'input[name=input_music_singer]' ).focus();

                              if ($( '#div-row-alert-form-list' ).length === 0){
                                  $( '<div id="div-row-alert-form-list" class="row">' +
                                         '<div class="col-lg-12">' +
                                             '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                                                 res.message +
                                             '</div>' +
                                         '</div>' +
                                     '</div>' ).insertBefore( '#div-row-form-music-list' );
                              }
                              else{
                                  $(' #div-row-alert-messsage-form-list ').html(res.message);
                              }

                              return false;
                          }
                      },
                      contentType: false,
                      processData : false
                    });
                  }
                  else{
                    location.reload();
                  }
                }
                else{
                    $( 'input[name=input_music_singer]' ).focus();

                    if ($( '#div-row-alert-form-list' ).length === 0){
                        $( '<div id="div-row-alert-form-list" class="row">' +
                               '<div class="col-lg-12">' +
                                   '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                                       res.message +
                                   '</div>' +
                               '</div>' +
                           '</div>' ).insertBefore( '#div-row-form-music-list' );
                    }
                    else{
                        $(' #div-row-alert-messsage-form-list ').html(res.message);
                    }

                    return false;
                }
            }
        });
    },
    func_del_music_list = function(){
        var data = {
            music_category : $( '#musiccategory' ).val() || "",
            music_title : $( 'input[name=input_music_title]' ).val() || "",
            music_singer : $( 'input[name=input_music_singer]' ).val() || ""
        };

        if (data.music_category === ""){
            $( '#musiccategory' ).focus();

            if ($( '#div-row-alert-form-list' ).length === 0){
                $( '<div id="div-row-alert-form-list" class="row">' +
                       '<div class="col-lg-12">' +
                           '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                               'Music Category yang ingin dihapus masih kosong !' +
                           '</div>' +
                       '</div>' +
                   '</div>' ).insertBefore( '#div-row-form-music-list' );
            }
            else{
                $(' #div-row-alert-messsage-form-list ').html('Music Category yang ingin dihapus masih kosong !');
            }

            return false;
        }
        if (data.music_title === ""){
            $( 'input[name=input_music_title]' ).focus();

            if ($( '#div-row-alert-form-list' ).length === 0){
                $( '<div id="div-row-alert-form-list" class="row">' +
                       '<div class="col-lg-12">' +
                           '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                               'Music Title yang ingin dihapus masih kosong !' +
                           '</div>' +
                       '</div>' +
                   '</div>' ).insertBefore( '#div-row-form-music-list' );
            }
            else{
                $(' #div-row-alert-messsage-form-list ').html('Music Title yang ingin dihapus masih kosong !');
            }

            return false;
        }
        if (data.music_singer === ""){
            $( 'input[name=input_music_singer]' ).focus();

            if ($( '#div-row-alert-form-list' ).length === 0){
                $( '<div id="div-row-alert-form-list" class="row">' +
                       '<div class="col-lg-12">' +
                           '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                               'Music Singer yang ingin dihapus masih kosong !' +
                           '</div>' +
                       '</div>' +
                   '</div>' ).insertBefore( '#div-row-form-music-list' );
            }
            else{
                $(' #div-row-alert-messsage-form-list ').html('Music Singer yang ingin dihapus masih kosong !');
            }

            return false;
        }
        
        $.ajax({
            method : 'POST',
            async : false,
            data : data,
            url : window.location.origin + '/hidden/music/list/delete',
            success : function(res){
                if (res.success === true){
                    location.reload();
                }
                else{
                    $( 'input[name=input_music_title]' ).focus();

                    if ($( '#div-row-alert-form-list' ).length === 0){
                        $( '<div id="div-row-alert-form-list" class="row">' +
                               '<div class="col-lg-12">' +
                                   '<div id="div-row-alert-messsage-form-list" class="alert alert-danger">' +
                                       res.message +
                                   '</div>' +
                               '</div>' +
                           '</div>' ).insertBefore( '#div-row-form-music-list' );
                    }
                    else{
                        $(' #div-row-alert-messsage-form-list ').html(res.message);
                    }

                    return false;
                }
            }
        });
    },
    func_music_category_handleonchange = function(value){
        location.replace(window.location.origin + '/hidden/music/list/' + value.value); 
    },
    func_music_list_table_click = function(value){
        $( 'input[name=input_music_title]' ).val($(value).children()[1].innerHTML).focus();
        $( 'input[name=input_music_singer]' ).val($(value).children()[2].innerHTML);
        $( 'input[name=input_youtube_video_id]' ).val($(value).children()[3].innerHTML);
        $( 'textarea[name=input_lyric]' ).val($( '#target' + $($(value).children()[4]).attr('id') )[0].innerHTML);
    };

$( '#musiccategory' ).change(function(){ func_music_category_handleonchange(this) });
$( 'button[name=add_music_list]' ).click(function(){ func_add_music_list() });
$( 'button[name=delete_music_list]' ).click(function(){ func_del_music_list() });
$( 'tr.cursor-pointer' ).click(function(){ func_music_list_table_click(this) });