(function checkName() {
    const errorDiv = document.getElementById("error");
    const orderForm = document.getElementById("order");
    const nameInput = document.getElementById("name");
    
    
    
    
    
	orderForm.onsubmit = function() {
		if(nameInput.value == "") {
			errorDiv.innerHTML = "Fill section name";
			return false;
		} else {
			return true;
		}
	}    
})();




//
//function checkName() {
//	document.getElementById("order").onsubmit = function() {
//		if(document.getElementById("name").value == "") {
//			document.getElementById("error").innerHTML = "Fill section name";
//			return false;
//		} else {
//			document.getElementById("error").innerHTML = "";
//			return true;
//		}
//	}
//}
//window.onload = function()
//{
//	checkName();
//}