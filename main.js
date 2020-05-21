
$(document).ready(function() {




function datiAjax() {
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(dati) {
	      console.log(dati);

	  dati.response.forEach(d => {
			var album = $("#hb-template").html();
			var card = Handlebars.compile(album);
			var oggetti = {classname: 'cd', img: d.poster, title:d.title ,name:d.author ,genere:d.genere ,anno:d.year };
			var albumArtista  = card(oggetti);
			$("#albums").append(albumArtista);
	  });
    },
    error: function() {
        alert('errore')
    }
  });

};
datiAjax()
});
