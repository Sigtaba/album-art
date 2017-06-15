
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

function resetFields() {
  $("input#image").val("");
  $("input#artist").val("");
  $("input#title").val("");
  $("input#year").val("");
}


////////////////////////////////////////////////////////////
////////////////////   USER INTERFACE   ////////////////////
////////////////////////////////////////////////////////////


$(document).ready(function() {

  // Get the modal
  var modal = document.getElementById('album-modal');

  // When the user clicks on the button, open the modal
  $("#btn").click(function() {
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  $(".close").click(function() {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  $(".form1").submit(function(event) {
    event.preventDefault();

    var inputImage = $("input#image").val();
    var inputArtist = $("input#artist").val();
    var inputTitle = $("input#title").val();
    var inputYear = $("input#year").val();

    var albumInput = new Album(inputImage, inputArtist, inputTitle, inputYear);
    arrayOfAlbums.push(albumInput);

    $("#results").empty();

    modal.style.display = "none";

    for (i = 0; i < arrayOfAlbums.length; i++) {

      console.log(arrayOfAlbums);
      $("#results").prepend( '<div class="album-group">' + '<ul>' +
        '<li>' + '<img src="' + arrayOfAlbums[i].image + '">' + '</li>' +
        '<li>' + arrayOfAlbums[i].artist + '</li>' +
        '<li>' + arrayOfAlbums[i].title + '</li>' +
        '<li>' + arrayOfAlbums[i].year + '</li>' +
        '</ul>' + '</div>'
      );
    }
    resetFields();
  });
});
