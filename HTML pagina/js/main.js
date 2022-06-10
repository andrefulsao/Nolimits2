
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
   
})(jQuery);




function logar (){

    event.preventDefault();
    
    let login = document.getElementById("email").value;
    let senha = document.getElementById("pass").value;
    debugger;
    
    if(login == "admin@hotmail.com" && senha == "admin" ){
        localStorage.setItem('login', login);
        location.href = "bem_vindo.html";
       
    } else {
        alert('Login ou senha inválidos!')
    } 

    
}  


/*function loginFunc (){

    event.preventDefault();
    var login = document.getElementById('email').value;
    var sen = document.getElementById('pass').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(login);
    var data = JSON.parse(user);
    console.log(data);

    

} */



function paginaInicial(){
    
    event.preventDefault();
    location.href = "index.html"; 
}