let hide = document.getElementById("hide");

hide.addEventListener("mouseover", function() {
	hide.classList.add("discovered");
});
hide.addEventListener("mouseleave", function() {
	hide.classList.remove("discovered");
});