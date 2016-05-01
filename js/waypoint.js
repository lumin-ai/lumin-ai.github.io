$('#navbar-trigger').waypoint( function(){
  console.log("Hey there");
  document.getElementById("subnav-nav").classList.add("sticky");
});

$('#main-nav-trigger').waypoint( function(){
  console.log("Hey there");
  document.getElementById("subnav-nav").classList.remove("sticky");
});
