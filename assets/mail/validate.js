// Example starter JavaScript for disabling form submissions if there are invalid fields
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
          var email = $("#email").val();
          var phone = $("#phone").val()
          var successHide = document.getElementById("successHide");
          if(email === '' && phone === ''){ 
            form.classList.add('was-validated');
              $("#success").html("Necessário um meio de contato: telefone ou email.")
              successHide.style.display = "block";
              event.preventDefault();
              event.stopPropagation();              
          }
          else{
          $("#validate").removeClass("error");
          form.classList.add('was-validated');
             $("#success").removeClass(".alert-danger");
             $("#success").html("");
             successHide.style.display = "none";
          }
        }, false);
      });

    }, false);
  })();