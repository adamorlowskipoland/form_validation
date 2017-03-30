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



//(function checkCheckbox() {
//    const errorDiv = document.getElementById("error");
//    const orderForm = document.getElementById("order");
//    const regulations = document.getElementById("regulations");
//    
//    
//    
//    
//    
//	orderForm.onsubmit = function() {
//		if(regulations.checked == false) {
//			errorDiv.innerHTML = "Accept regulations";
//			return false;
//		} else {
//            errorDiv.innerHTML = "";
//			return true;
//		}
//	}    
//})();


//(function checkQantity() {
//    const errorDiv = document.getElementById("error");
//    const orderForm = document.getElementById("order");
//    const quantity = document.getElementById("quantity");
//    
//    
//    
//    
//    
//	orderForm.onsubmit = function() {
//		if(isNaN(quantity.value) || quantity.value === "") {
//			errorDiv.innerHTML = "Put number value in quantity";
//			return false;
//		} else {
//            errorDiv.innerHTML = "";
//			return true;
//		}
//	}    
//})();


(function checkEmail() {
    const errorDiv = document.getElementById("error");
    const orderForm = document.getElementById("order");
    const email = document.getElementById("email");
    
    
    const patternRegExp = /[@]/;
    
    
	orderForm.onsubmit = function() {
		if(email.value.match(patternRegExp)) {
            errorDiv.innerHTML = "";
			return true;
		} else {
			errorDiv.innerHTML = "Email should look like this: info@server.com";
			return false;
		}
	}    
})();