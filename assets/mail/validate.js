// Example starter JavaScript for disabling form submissions if there are invalid fields 
// ref https://jsfiddle.net/83zopn51/1/
function telefone_validation(telefone){
  //retira todos os caracteres menos os numeros
  telefone = telefone.replace(/\D/g,'');
  
  //verifica se tem a qtde de numero correto
  if(!(telefone.length >= 10 && telefone.length <= 11)) return false;
  
  //Se tiver 11 caracteres, verificar se começa com 9 o celular
  if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;
    
  //verifica se não é nenhum numero digitado errado (propositalmente)
  for(var n = 0; n < 10; n++){
    //um for de 0 a 9.
    //estou utilizando o metodo Array(q+1).join(n) onde "q" é a quantidade e n é o 	  
    //caractere a ser repetido
    if(telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
    }
    //DDDs validos
    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 24, 27, 28, 31, 32, 33, 34,
  35, 37, 38, 41, 42, 43, 44, 45, 46,
  47, 48, 49, 51, 53, 54, 55, 61, 62,
  64, 63, 65, 66, 67, 68, 69, 71, 73,
  74, 75, 77, 79, 81, 82, 83, 84, 85,
  86, 87, 88, 89, 91, 92, 93, 94, 95,
  96, 97, 98, 99];
    //verifica se o DDD é valido (sim, da pra verificar rsrsrs)
    if(codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false;

    //se passar por todas as validações acima, então está tudo certo
    return true;

}

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          var email = $("input#email").val();
          var phone = $("input#phone").val()
          if(email === '' && phone === ''){ 
            form.classList.add('was-validated');
              $("#alert").html("<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Necessário informar um meio de contato: celular ou email.</div>")
              event.preventDefault();
              event.stopPropagation();              
          } else {
            $("#alert").html("");

            var f = false;
            var str = '';
            
            if (phone !== '') {
              // validar celular
              if (telefone_validation(phone)) {
                f = true;
              } else {
                str = str.concat('O celular deve conter o DDD no seguinte formato (XX) Xxxxx-xxxx.');
              }
            }

            if (email !== '') {
              var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
              if (email.match(pattern)) {
                f = true;
              } else {
                str = str.concat('Email inválido.');
              }
            }
  
            if (f) {
              form.classList.add('was-validated');
              $("#contactForm").trigger("reset");
              $("#alert").html("<div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Obrigada, entraremos em contato.</div>");
            } else {
              $("#alert").html("<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"+str+"</div>")
              event.preventDefault();
              event.stopPropagation();      
            }
          }
        }, false);
      });

    }, false);
  })();