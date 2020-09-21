function openTopNav() {
	//Adds responsive class to navbar
	var x = document.getElementById("SiteNav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
}

//Add event listener to dropdown the nav
DropDownButton.addEventListener("click", openTopNav);