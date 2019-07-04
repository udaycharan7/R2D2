
$(document).ready(function(){
  $("#b1").on("click",function(e){
    e.preventDefault();
    let query=$("#search").val();



    let url="https:api.themoviedb.org/3/movie/"+query+"?q&api_key=1d8fd401ecb64be7202f561859f1c86b&with_original_language=te";

    if(query !== ""){
        $.ajax({
          url:url,
          method:"GET",
          dataType: "json",
          success: function (movie) {
            let output="";
            let update=movie;

              output+=`
              <img src="${"https://image.tmdb.org/t/p/w500/"+update.poster_path}">
              <h2>Movie Name  :${update.original_title}</h2>
              <h6>Release date : ${update.original_language}</h6>
              <h6>Budget       : ${update.budget}</h6>
              <h6>URL          : ${update.homepage}</h6>
              <h6>Release Date : ${update.release_date}</h6>
              <h6>Overview     : ${update.overview}</h6>
              `;
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
