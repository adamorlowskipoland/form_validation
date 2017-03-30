//(function checkName() {
//    const errorDiv = document.getElementById("error");
//    const orderForm = document.getElementById("order");
//    const nameInput = document.getElementById("name");
//    
//    
//    
//    
//    
//	orderForm.onsubmit = function() {
//		if(nameInput.value == "") {
//			errorDiv.innerHTML = "Fill section name";
//			return false;
//		} else {
//			return true;
//		}
//	}    
//})();



(function checkCheckbox() {
    const errorDiv = document.getElementById("error");
    const orderForm = document.getElementById("order");
    const regulations = document.getElementById("regulations");
    
    
    
    
    
	orderForm.onsubmit = function() {
		if(regulations.checked == false) {
			errorDiv.innerHTML = "Accept regulations";
			return false;
		} else {
            errorDiv.innerHTML = "";
			return true;
		}
	}    
})();