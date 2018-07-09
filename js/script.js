/*$(document).ready(function() {
        $("#blanks form").submit(function() {
          $(".person1").append("blah blah");
  });
});*/
//for the form//
$(document).ready(function(){
  var age=parseInt(prompt('what is your age'));
      if(age>=18){
        $('.provision').show();
      }else if (age==18) {
        alert('finaly made it')
        $('.provision').show();
      }else {
        $('.statement').show();
      }
});
