$("document").ready(function () {





//------------ project 01---------------
$("#toggle-btn").click(function(){
  $(this).toggleClass("fa-plus fa-times");
  $("#toggle-project-block").slideToggle();
});

$("#textArea").keyup(function(){
  var totalTextLength = $(this).val().length;
  $("#typed-characters").html(totalTextLength);
  $("#remainingText").html(255 - totalTextLength);
});

document.querySelector("#btn-counter").addEventListener("click" , function () {
  let copyText = document.querySelector(".text-input");
  copyText.select();
  document.execCommand("copy");
  document.querySelector("#btn-counter").innerHTML = "Copied";
});



//------------ project 02 Registration Form Validation ---------------
$("#toggle-btn2").click(function(){
  $(this).toggleClass("fa-plus fa-times");
  $("#toggle-project-block2").slideToggle();
});

//-------------first Name ---------------
$("#firstName").keyup(function(){
  let firstName = $("#firstName").val();
  if (firstName.length > 1){
    $("#firstNameStatusOk").show();
    $("#firstNameStatusOk").css("color", "green");
    $("#firstNameStatusWorng").hide();

  }else{
    $("#firstNameStatusWorng").show();
    $("#firstNameStatusWorng").css("color","red");
    $("#firstNameStatusOk").hide();
  }

});
//---------------- last Name -----------------
$("#lastName").keyup(function(){
  let lastName = $("#lastName").val();
  if (lastName != ""){
    $("#lastNameStatusOk").show();
    $("#lastNameStatusOk").css("color", "green");
    $("#lastNameStatusWorng").hide();
  }else{
    $("#lastNameStatusWorng").show();
    $("#lastNameStatusWorng").css("color","red");
    $("#lastNameStatusOk").hide();
  }
  
});
//------------------- Email field----------------
$("#userEmail").keyup(function(){
  let userEmail = $("#userEmail").val();
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(userEmail.match(emailFormat)){
    $("#emailStatusOk").show();
    $("#emailStatusOk").css("color","green");
    $("#emailStatusWorng").hide();
  }else{
    $("#emailStatusOk").hide();
    $("#emailStatusWorng").show();
    $("#emailStatusWorng").css("color","red");
  }

});
//------------------ password------------------
$("#toggle-password1").click(function(){
  $(this).toggleClass("fa-eye fa-eye-slash");
  var inputType = $($(this).attr("toggle"));
  if(inputType.attr("type") == "password"){
    inputType.attr("type","text");
  }else{
    inputType.attr("type","password");
  }
});
// When the user clicks on the password field, show the message box
$("#pass").focus(function(){
  $("#message").slideToggle("slow");
});
// When the user clicks outside of the password field, hide the message box
$("#pass").blur(function(){
  $("#message").slideToggle("slow");
});

// When the user starts to type something inside the password field

//-------------- lowerCaseLetters validation -----------
$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  var lowerCaseLetters = /[a-z]/g;
  if(inputedPass.match(lowerCaseLetters)){
    $("#letter").removeClass("invalid");
    $("#letter").addClass("valid");
  }else{
    $("#letter").removeClass("valid");
    $("#letter").addClass("invalid");
  }
});

//-------------- UpperCaseLetters validation -----------

$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  var capitalCaseLetters = /[A-Z]/g;
  if(inputedPass.match(capitalCaseLetters)){
    $("#capital").removeClass("invalid");
    $("#capital").addClass("valid");
  }else{
    $("#capital").removeClass("valid");
    $("#capital").addClass("invalid");
  }
});
//-------------- numbers validation -----------
$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  var numbers = /[0-9]/g;
  if(inputedPass.match(numbers)){
    $("#number").removeClass("invalid");
    $("#number").addClass("valid");
  }else{
    $("#number").removeClass("valid");
    $("#number").addClass("invalid");
  }
});

//-------------- special character -----------
$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  var specialChar = /[!@#$%^&*]/g;
  if(inputedPass.match(specialChar)){
    $("#special").removeClass("invalid");
    $("#special").addClass("valid");
  }else{
    $("#special").removeClass("valid");
    $("#special").addClass("invalid");
  }
});
//-------------- length validation  -----------
$("#pass").keyup(function(){
  var inputedPass = $("#pass").val();
  
  if(inputedPass.length > 8){
    $("#length").removeClass("invalid");
    $("#length").addClass("valid");
  }else{
    $("#length").removeClass("valid");
    $("#length").addClass("invalid");
  }
});

//------------------ Repeat password---------------
$("#passConfirm").keyup(function(){
  var passValue = $("#pass").val();
  var passConfirmValue = $("#passConfirm").val();
  if(passValue === passConfirmValue){
    $("#passNotMatchStatus").hide();
  }else{
    $("#passNotMatchStatus").show();
    $("#passNotMatchStatus").css("color","red");
  }
})
//-----------------Show/Hide password field-----------
$("#toggle-password").click(function(){
  $(this).toggleClass("fa-eye fa-eye-slash");
  var inputType = $($(this).attr("toggle"));
  if(inputType.attr("type") == "password"){
    inputType.attr("type" , "text");
  }else{
    inputType.attr("type", "password");
  }
});


//------------ faq 03 Automatic username genarator ---------------
$("#toggle-btn3").click(function(){
  $(this).toggleClass("fa-plus fa-times");
  $("#toggle-project-block3").slideToggle();
});




$("#fName").keyup(function(){
  //collect the user input value 
  var userValue = $(this).val().length;
  if(userValue > 0){
    //collect the user input value 
    var userValue = $(this).val();
    //tollat length size of value
    var userinputValueLength = $(this).val().length;
    //isolate the first char from whole value 
    var firstChar = userValue.slice(0,1);
    //turn firstchar to upper case 
    var firstChar = firstChar.toUpperCase();
    //isolate the rest of value 
    var restChar = userValue.slice(1, userinputValueLength);
    //convert the value to lower case 
    var restChar = restChar.toLowerCase();
    //re-assign the firstChar and restChar as an input value 
    $(this).val(firstChar+restChar);
    $("#statusOk").show();
    $("#statusWrong").hide();
  }else{
    $("#statusWrong").show();
    $("#statusOk").hide();
  }
});

$("#lName").keyup(function(){
  //collect the user input value 
  var userValue = $(this).val().length;
  if(userValue > 0){
    //collect the user input value 
    var userValue = $(this).val();
    //tollat length size of value
    var userinputValueLength = $(this).val().length;
    //isolate the first char from whole value 
    var firstChar = userValue.slice(0,1);
    //turn firstchar to upper case 
    var firstChar = firstChar.toUpperCase();
    //isolate the rest of value 
    var restChar = userValue.slice(1, userinputValueLength);
    //convert the value to lower case 
    var restChar = restChar.toLowerCase();
    //re-assign the firstChar and restChar as an input value 
    $(this).val(firstChar+restChar);
    $("#lastName0StatusOk").show();
    $("#lastNameStatusWrong").hide();
  }else{
    $("#lastNameStatusWrong").show();
    $("#lastName0StatusOk").hide();
  }
});

document.querySelector("#btnAutoGenerator").addEventListener("click", function(){
  var fName = document.querySelector("#fName").value;
  var lName = document.querySelector("#fName").value;
  var userName = document.querySelector("#userName").value;
  if(fName != "" && lName != ""){
      //take the value of first name field 
var fName = document.querySelector("#fName").value;
//take the value of last name field 
var lName = document.querySelector("#fName").value;
//slice the first two char from the whole name 
var firstTwoChar =  lName.slice(0,2)
//conter to lower case 
var firstTwoChar = firstTwoChar.toLowerCase();
//take the value of last name 
var lName = document.querySelector("#lName").value;
//convert the value to lower case 
var lName = lName.toLowerCase();
//now generate the auto username
$("#userName").val(lName+firstTwoChar+"@company.com");

//now its time to create a auto generator password
//declare a variable with our choice of letters numbers or signs or whatever you like 
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var lettersLength = letters.length;


//then declare a empty string variable so that our for loop could retunrs the random letters to it.
var password = "";

//in our for loop condition we need 3 condition 
// in my case initial variable value 0
// maximum varibale length 20 
//
for(var i = 0 ; i < 20 ; i++ ){
  //math.random always return a random number
  //math.floor return a nearest downward integer number
  let generate = letters[Math.floor(Math.random() * 62 )];

  password += generate;
}
//returns generated password to the password input field 
$("#autoPassword").val(password);
//if there is no input value 
  }else{
    //Then show a aleart message
    alert("Please check your input");
  }
})

//--------------------- copy icon--------------------------
//now its time to create function for copy icon
//add click event litener for copy icon
document.querySelector("#copyUserName").addEventListener("click", function(){
  //select the input value with input field id
  let userName = document.querySelector("#userName");
  userName.select();
  document.execCommand("copy");
  //after click the copy icon input field would be disabled
  //javaschript 
  //document.querySelector("#userName").disabled = "true";
  //jquery 
  $("#userName").prop("disabled", true);

})

document.querySelector("#copyUserPassword").addEventListener("click", function(){
  let userPassword = document.querySelector("#autoPassword");
  userPassword.select();
  document.execCommand("copy");
  //after click the copy icon input field would be disabled
  //javaschript 
  //document.querySelector("#autoPassword").disabled = "true";
  //jquery 
  $("#autoPassword").prop('disabled', true);
})





//------------ faq 04---------------
$("#toggle-btn4").click(function(){
  $(this).toggleClass("fa-plus fa-times");
  $("#toggle-project-block4").slideToggle();
});


document.querySelector("#btnUnitCalculator").addEventListener("click", function(){
  let userMoney = document.querySelector("#amountOfMoney").value;
  let productUnitPrice = document.querySelector("#pruductUnitPrice").value;
 
  if(userMoney != "" && productUnitPrice != ""){
    giveMeInfo(userMoney, productUnitPrice);
  }else{
    alert("Please check your input field");
  }
  
  function giveMeInfo(userMoney , productUnitPrice){
    //how many product i m able to buy
    var numberOfProduct = userMoney/ productUnitPrice;
    var numberOfProduct = Math.floor(numberOfProduct);

    document.querySelector("#totalProduct").innerHTML = "You will be able to buy a maximum " + numberOfProduct +" number of product.";
    //how mouch i have to pay 
    var haveToPay = numberOfProduct * productUnitPrice;
    document.querySelector("#haveToPay").innerHTML = "You have to pay "+ haveToPay +" Euro";
    
    //How much i will get back from shop
    var moneyGetBack = userMoney % productUnitPrice;
    document.querySelector("#getBackMoney").innerHTML = "You will get back "+ moneyGetBack +" Euro";
  }
});
document.querySelector("#btnRefresh").addEventListener("click", function(){
  document.querySelector("#amountOfMoney").value = "";
  document.querySelector("#pruductUnitPrice").value = "";
  document.querySelector("#totalProduct").innerHTML = "Output";
  document.querySelector("#haveToPay").innerHTML = "";
  document.querySelector("#getBackMoney").innerHTML = "";
})


  });