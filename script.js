document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    
    
    alert('Full Name: ' + fullName + '\nEmail: ' + email + '\nAge: ' + age + '\nGender: ' + gender);
  });