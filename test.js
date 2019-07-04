
$(document).ready(function(){
  $("select#dropdown").change(function(e){
    e.preventDefault();
    let query = $(this).children("option:selected").val();

    let url="https://api.themoviedb.org/3/discover/movie?&sort_by="+query+".desc&&api_key=1d8fd401ecb64be7202f561859f1c86b&api_key=1d8fd401ecb64be7202f561859f1c86b&api_key=1d8fd401ecb64be7202f561859f1c86b&with_original_language=en";
    if(query !== ""){
        $.ajax({
          url:url,
          method:"GET",
          dataType: "json",
          success: function (movie) {
            let output="";
            let update=movie.results;
            for (var i in update) {

              output+=`
              <img src="${"https://image.tmdb.org/t/p/w500/"+update[i].backdrop_path}">
              <h2>Movie Name  :${update[i].original_title}</h2>
              <h6>language : ${update[i].original_language}</h6>
              <h6>Budget       : ${update[i].budget}</h6>
              <h6>URL          : ${update[i].homepage}</h6>
              <h6>Release Date : ${update[i].release_date}</h6>
              <h6>Overview     : ${update[i].overview}</h6><hr>
              `;}
            if(output!==""){
              $("#display").html(output);
            }else {
              let notfound=query+"movie not found";
              $("#display").html(notfound);
            }
            console.log(movie);
          },
         error: function(){
            console.log("error");
          }

        });
    }else{
      let a="<h2>please enter something</h2>";
        $("#display").html(a);
    }

  });

});
