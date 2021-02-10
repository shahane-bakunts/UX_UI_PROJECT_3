$(function () {
    var fName = $("#name");
  
    fName.blur(function (e) {
      if (fName.val() === "") {
        fName.css("border", "1px solid red");
      } else {
        fName.css("border", "1px solid #271458");
      }
    });
  
    $("#contactForm").submit(function (e) {
      e.preventDefault();
      var fName = $("#name");
      var email = $("#email");
      var subject = $("#subject");
      if (fName.val() === "" || email.val() === "" || subject.val() === "") {
        alert("All fields are required");
      } else {
        $("#successMessage").text(
          `Thank You ${Name.val()} for your message. I'll get back to you ASAP!`
        );
        fName.val("");
        email.val("");
        subject.val("");
      }
    });
  
  });
  
  