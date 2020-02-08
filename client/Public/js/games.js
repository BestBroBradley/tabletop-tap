
$(document).ready(function() {$(".view-more, .delete").on("click", function(e) {
  console.log('clicked')
  $(".modal").toggle()
})
                              
                              
$("#searchGames").on("submit", function (evt) {
  evt.preventDefault()
  $.get("/api/games/search/" + $("#query").val().trim(), function (data) {
    // console.log(data)
    console.log(data)
    $.ajax({
      url :"/html/games/",
      method:"post",
      data:data
    })
  }).catch(err => {
    throw err;
  });
})
})
