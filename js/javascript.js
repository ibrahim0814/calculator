$(document).ready(function(){
	
	//stores input from user 
	var inputs = [""];
	//put empty string initially because of validation issues 
	
	//total string
	var totalString;
	
	//operators array
	var operators1 =["+", "-", "/","*" ];
	
	//operators with decimal
	var operators2=["."];
	
	//numbers array
	var nums =[0,1,2,3,4,5,6,7,8,9];
	
	
	function getValue(input){
		
		//set max length for input array
		// don't do anything if it exceeds max length 
		if(inputs.length >=19){
			
		}
		//we don't want to start an operation with an input
		//set it back to default if true
		else if(operators1.includes(input) && inputs.length ===1){
			
			$("#steps").html("0");
		
			//we don't want to have two operators in a row
			} else if (operators1.includes(input) && operators1.includes(inputs[inputs.length-1])){
						  
				//push misc operators 
				// update console as well
			} else if(inputs.length ===1 && operators1.includes(input)===false){
				
				inputs.push(input);
				update();
				
				// if the input is within the num array then push it to inputs
				// if true then update console as well
			} else if (nums.includes(Number(input))){
				
				inputs.push(input);
				update();
				
				// prevents pushing if there is a . and operator or . and . in a row
			} else if((operators2.includes(input) || operators1.includes(input))  && inputs[inputs.length-1]==='.'){
				
			}
		
		// by this end of the if else statements, the input should either be a dot or operator
		// if true, then push and update console 
		else if(operators1.includes(input) || operators2.includes(input)){
				
				inputs.push(input);
				update();
				
			}
		
		
	}
						
	function update(){
		
		// update the console with whatever is in the inputs array 
		totalString = inputs.join("");
		$("#steps").html(totalString);
	}
	
	function getTotal(){
		
		totalString = inputs.join("");
	
		//eval method takes a string and evaluates it as a math operation
		$("#steps").html(eval(totalString));
	}
	
	$("a").on("click", function(){
		
		if(this.id === "ce" && (inputs.length ===1|| inputs.length===2)){
			inputs= [""];
			$("#steps").html("0");
			
			
			}
		else if(this.id === "ac"){
			
			// signals all clear, thus clear the inputs array and set 0 as default val
			inputs = [""];
			$("#steps").html("0");
			
		} else if(this.id === "ce"){

			// signals backclick so we want to pop off the last element within the inputs array
			inputs.pop();
			update();
		} else if(this.id ==="="){
			
			//signals equals, so we want to get the total, update the console, then clear inputs
			getTotal();
			inputs = [""];
		} else{
			
			//getValue(this.id);
			getValue(this.id);
		}
	})
})
