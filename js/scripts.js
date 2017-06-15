
////////////////////////////////////////////////////////////
////////////////////   BUSINESS LOGIC   ////////////////////
////////////////////////////////////////////////////////////
var arrayOfAlbums = [];

function Album(image, artist, title, year) {
  this.image = image;
  this.artist = artist;
  this.title = title;
  this.year = year;
}

// function resetFields() {
//     $("input#image").val("");
//     $("input#artist").val("");
//     $("input#title").val("");
//     $("input#year").val("");
// }


////////////////////////////////////////////////////////////
////////////////////   USER INTERFACE   ////////////////////
////////////////////////////////////////////////////////////

$(document).ready(function() {
  $(".form1").submit(function(event) {
    event.preventDefault();

    var inputImage = $("input#image").attr("src", $(this).val());
    var inputArtist = $("input#artist").val();
    var inputTitle = $("input#title").val();
    var inputYear = $("input#year").val();

    var albumInput = new Album(inputImage, inputArtist, inputTitle, inputYear);
    arrayOfAlbums.push(albumInput);

    $("#results").empty();

    for (i = 0; i < arrayOfAlbums.length; i++) {

      console.log(arrayOfAlbums);
      $("#results").append( '<div class="album-group">' + '<ul>' +
        '<li>' + arrayOfAlbums[i].image + '</li>' +
        '<li>' + arrayOfAlbums[i].artist + '</li>' +
        '<li>' + arrayOfAlbums[i].title + '</li>' +
        '<li>' + arrayOfAlbums[i].year + '</li>' +
        '</ul>' + '</div>'
      );
    }
    // resetFields();
    // $('.initially-hidden').show();
  });

});

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
