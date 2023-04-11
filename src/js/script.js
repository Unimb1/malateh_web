$(document).ready(function(){
    function valideForms(form){
        $(form).validate({
            rules: {
                name: "required",
                company: "required",
                position: "required",
                message: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, укажите настоящее имя",
                email: {
                    required: "Пожалуйста, укажите настоящую почту",
                    email: "Введите email адресс формата: name@domain.com"
                },
                position: "Пожалуйста, заполните данное поле",
                company: "Пожалуйста, заполните данное поле",
                message: "Пожалуйста, заполните данное поле"
            }
            
        });
    }

    valideForms("#touch form");
    

});