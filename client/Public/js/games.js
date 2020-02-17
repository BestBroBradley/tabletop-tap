$(document).ready(function() {
  $(".view-more, .delete").on("click", function(e) {
    console.log('clicked')
    console.log($(this).attr("id"))
    let id = $(this).attr("id");
    $(`#${id}.modal`).toggle();
  })
                                
                                
  $("#searchGames").on("submit", function (evt) {
    evt.preventDefault()
    // $.get("/api/games/search/" + $("#query").val().trim(), function (data) {
    //   // console.log(data)
    //   console.log(data)
    if($("#query").val().trim()){
    document.location = '/html/games/search/'+ $("#query").val().trim()
  }
      // $.ajax({
      //   url : "http://localhost:8080/html/games/",
      //   method:"get"
      // })
    // })
    // .then((res)=>{
    //   console.log(res)
    //   // location.reload();
    // }).catch(err => {
    //   console.log(err)}
    // });
  })
})
