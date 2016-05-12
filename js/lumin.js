/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var openDemoForm = function() {
  $('.demo-btn').addClass('inactive');
  $('.demo-row').addClass('active');
}
var openDemoFormTwo = function() {
  $('.demo-btn-2').addClass('inactive');
  $('.demo-row-2').addClass('active');
}
$(".demo-btn").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
  $('.demo-btn').addClass('no-display');
  $('.demo-row').addClass('active');
});
$(".demo-btn-2").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
  $('.demo-btn-2').addClass('no-display');
  $('.demo-row-2').addClass('active');
});

$('.carousel').carousel({
  interval: 16000
});



// Dirty form validation
$('#formValidation').click(function() {
  if ($('#Field1').val() == '') {
    alert('Please enter your name');
  } else if ($('#Field4').val() == '') {
    alert('Please enter a valid email address');
  } else if ($('#Field3').val() == '') {
    alert('Please enter a company name');
  } else if ($('#Field7').val() == '') {
    alert('Please enter a description of your bot');
  } else {
    console.log("Forms filled")
    validateForm()
  }
});

$('#formValidation2').click(function() {
  if ($('#Field9').val() == '') {
    alert('Please enter your name');
  } else if ($('#Field2').val() == '') {
    alert('Please enter a valid email address');
  } else if ($('#Field8').val() == '') {
    alert('Please enter a company name');
  } else if ($('#Field6').val() == '') {
    alert('Please enter a description of your Bot');
  } else {
    console.log("Forms filled")
    validateForm2()
  }
});


var validateForm = function() {
  var x = document.forms["form1"]["Field4"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    alert("Please enter a valid email address");
    return false;
  } else {
    document.getElementById("form1").submit();
  }
}
var validateForm2 = function() {
  var x = document.forms["form2"]["Field2"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    alert("Please enter a valid email address");
    return false;
  } else {
    document.getElementById("form2").submit();
  }
}
