function dropDown(){
	document.querySelector("#drop-down").classList.toggle("show");
}

window.onscroll = function(){
	var navi = document.querySelector(".navi");
	var sticky = navi.offsetTop;
	if (window.pageYOffset >= sticky) {
    navi.classList.add("sticky");
  } else {
    navi.classList.remove("sticky");
  }
}