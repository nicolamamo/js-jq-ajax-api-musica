
$(document).ready(function() {



// chiamata ajax
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data) {
        // recupero dischi restituiti dall api (array)
        var dischi = data.response
        // ciclo tutti gli elementi
        for (var i = 0; i < dischi.length; i++) {
        // recupero l' elemento corrente
          var cd = dischi[i];
// recuperole info ( .AUTORE POSTER TITOLO ANNO)


        var titolo = cd.title;
        var autore = cd.author;
        var anno   = cd.year;
        var immagine = cd.poster;

        //preparo
        var context = {
        'poster' : immagine,
        'title '    :titolo,
        'name'     : autore,
        'anno' : anno,
    }

// compilo
          var source = $("#hb-template").html();
          var template = Handlebars.compile(source);

          var html = template(context);
          $(".cds-container").append(html) // fine ciclo
        }
    },
    error: function() {
        alert('errore')
    }
  });
});
