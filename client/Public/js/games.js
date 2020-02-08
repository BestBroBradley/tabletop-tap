
// $(".alphabet").on("click",function(evt){
//   evt.preventDefault()
//   console.log();


//   $.get("/html/games/"+$(this).data("index").tolowerCase(),function(){
// $.get("/api/games/search/" + $("#query").val().trim(), function (data) {
//   // console.log(data)
//   return console.log(data)
// }).catch(err => {
//   throw err;
// });
//   })
// })




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

//   router.get("/search/:query",gamesController.findByLetter);
// module.exports = router;


// $.ajax({
//   path:"/api/games/search/"+$("#query").val().trim(),
//   method:"get"
// }).then(data=>{
//   $.ajax({
//     route:
//   })