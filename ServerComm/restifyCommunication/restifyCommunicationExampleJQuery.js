(function(){
        $.getJSON('http://127.0.0.1:8080/hi/1', function(data) {
          $('#say').text(data.say);
     });
    }())