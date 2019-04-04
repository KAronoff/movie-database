  
  // • Type into the search bar, and send the search 
  // result through the API OMDB. Buttons at the top
  //   • need ot take the value of the text area and insert it into the API 
  //   • submit button 
  //     • submit the input field into an array

  // • print the results to the page inside the movie-list div
  
// variables 
$(document).ready(function(){


  var moviesArr = [];

  // creat function to run to create buttons up top
  // id for div button-area
  // <button type="button" class="btn btn-primary">Primary</button>

  function createBtns (){
    $("#button-area").empty()
    
    for (var i=0; i < moviesArr.length; i++){
      var movieBtn = $("<button>");
      console.log(movieBtn);
      movieBtn.addClass("btn btn-primary mx-2 my-2")
      .attr("Type", "button")
      .attr("data-movie", moviesArr[i])
      .text(moviesArr[i]);

      $("#button-area").append(movieBtn);

    }
  }
  // generate movie information
  function showMovieInfo (){
    var movie = "The Hunger Games";
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      console.log(response)
    });
  };

  showMovieInfo()
  // search for the movie by clicking on the search button
  // $("#find-movie").on("click", function(event){
  //   var movieInputVal = $("#movie-input").val().trim();

  //   if (movieInputVal === ""){
  //     return false;
  //   }
    
  //   showMovieInfo()
  //   // API call function
    
  //   console.log("Clicked!");
  //   event.preventDefault();

  //   var movieInputVal = $("#movie-input").val().trim();
  //   console.log(movieInputVal);
  //   moviesArr.push(movieInputVal);

    
  //   createBtns ();
   
  //   // var urlQuery = "https://www.omdbapi.com/?t=" + findMovieVal + "&apikey=trilogy"
  // })
});