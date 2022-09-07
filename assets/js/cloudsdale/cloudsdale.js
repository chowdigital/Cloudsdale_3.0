  function scrollToTop() {
    window.scrollTo(0, 0);
}

$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});



(function() {
    // Tutorial: https://medium.com/@patrickwestwood/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27
    window.addEventListener('scroll', function(event) {
      var depth, i, layer, layers, len, movement, topDistance, translate3d;
      topDistance = this.pageYOffset;
      layers = document.querySelectorAll("[data-type='parallax']");
      for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);
        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
      }
    });
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWdJO0VBQUE7RUFFaEksTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFFBQUEsQ0FBQyxLQUFELENBQUE7QUFDbEMsUUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUE7SUFBRSxXQUFBLEdBQWMsSUFBQyxDQUFBO0lBQ2YsTUFBQSxHQUFTLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQix3QkFBMUI7SUFFVCxLQUFBLHdDQUFBOztNQUNFLEtBQUEsR0FBUSxLQUFLLENBQUMsWUFBTixDQUFtQixZQUFuQjtNQUNSLFFBQUEsR0FBVyxDQUFDLENBQUMsV0FBQSxHQUFjLEtBQWY7TUFDWixXQUFBLEdBQWMsaUJBQUEsR0FBb0IsUUFBcEIsR0FBK0I7TUFDN0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxtQkFBRCxDQUFYLEdBQW1DO01BQ25DLEtBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQUQsQ0FBWCxHQUFnQztNQUNoQyxLQUFLLENBQUMsS0FBSyxDQUFDLGVBQUQsQ0FBWCxHQUErQjtNQUMvQixLQUFLLENBQUMsS0FBSyxDQUFDLGNBQUQsQ0FBWCxHQUE4QjtNQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVosR0FBd0I7SUFSMUI7RUFKZ0MsQ0FBbEM7QUFGZ0kiLCJzb3VyY2VzQ29udGVudCI6WyIjIFR1dG9yaWFsOiBodHRwczovL21lZGl1bS5jb20vQHBhdHJpY2t3ZXN0d29vZC9ob3ctdG8tbWFrZS1tdWx0aS1sYXllcmVkLXBhcmFsbGF4LWlsbHVzdHJhdGlvbi13aXRoLWNzcy1qYXZhc2NyaXB0LTJiNTY4ODNjM2YyN1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAnc2Nyb2xsJywgKGV2ZW50KSAtPlxuICB0b3BEaXN0YW5jZSA9IEBwYWdlWU9mZnNldCBcbiAgbGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXR5cGU9J3BhcmFsbGF4J11cIilcbiAgXG4gIGZvciBsYXllciBpbiBsYXllcnNcbiAgICBkZXB0aCA9IGxheWVyLmdldEF0dHJpYnV0ZSgnZGF0YS1kZXB0aCcpXG4gICAgbW92ZW1lbnQgPSAtKHRvcERpc3RhbmNlICogZGVwdGgpXG4gICAgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoMCwgJyArIG1vdmVtZW50ICsgJ3B4LCAwKSdcbiAgICBsYXllci5zdHlsZVsnLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHRyYW5zbGF0ZTNkXG4gICAgbGF5ZXIuc3R5bGVbJy1tb3otdHJhbnNmb3JtJ10gPSB0cmFuc2xhdGUzZFxuICAgIGxheWVyLnN0eWxlWyctbXMtdHJhbnNmb3JtJ10gPSB0cmFuc2xhdGUzZFxuICAgIGxheWVyLnN0eWxlWyctby10cmFuc2Zvcm0nXSA9IHRyYW5zbGF0ZTNkXG4gICAgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRlM2RcbiAgcmV0dXJuIl19
  //# sourceURL=coffeescript
  
function validateForm() {
    // var x =  document.getElementById('name').value;
    // if (x == "") {
    //     document.getElementById('status').innerHTML = "Name cannot be empty";
    //     return false;
    // }
    // x =  document.getElementById('email').value;
    // if (x == "") {
    //     document.getElementById('status').innerHTML = "Email cannot be empty";
    //     return false;
    // } else {
    //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if(!re.test(x)){
    //         document.getElementById('status').innerHTML = "Email format invalid";
    //         return false;
    //     }
    // }
    // x =  document.getElementById('subject').value;
    // if (x == "") {
    //     document.getElementById('status').innerHTML = "Subject cannot be empty";
    //     return false;
    // }
    // x =  document.getElementById('message').value;
    // if (x == "") {
    //     document.getElementById('status').innerHTML = "Message cannot be empty";
    //     return false;
    // }


    document.getElementById('status').innerHTML = "Sending...";
    formData = {
        'name'     : $('input[name=name]').val(),
        'email'    : $('input[name=email]').val(),
        'subject'  : $('input[name=subject]').val(),
        'message'  : $('textarea[name=message]').val()
    };


   $.ajax({
    url : "https://cloudsdale.co.uk/wp-content/themes/Cloudsdale_2.0/mail.php",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {

        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
        $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
        $('#status').text(jqXHR);
    }
});



}

    document.getElementsByClassName('blocks-gallery-item');
    element.classList.add('class-1');


