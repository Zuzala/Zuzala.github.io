
$('span').click(function(e){
    e.preventDefault(); 

    $('#table').addClass('hidden');
    var direction = $(this).text().toLowerCase();
    var going_home = false;

    if(direction === 'home'){
        $('#particles-js').removeClass('hidden');
        $('#wrapper').addClass('hidden');
        going_home = true;

        var parent_id = $(this).closest('div').prop('id');
        switch(parent_id){
            case 'nav-home-north':
                direction = 'research';
                break;
            case 'nav-home-west':
                direction = 'creative';
                break;
            case 'nav-home-east':
                direction = 'about';
                break;
            case 'nav-home-south':
                direction = 'projects';
                break;
            default:
                break;
        }
    }

    transitionParticles(direction);
      
    setTimeout(function(){
        if(going_home){
            window.location.href = '../index.html';
        } else{
            window.location.href = 'pages/' + direction + '.html';
        }
    }, 2000);
    
    return false; 
});

$(function() {
    var $target = $('.scrollable');
    $("body").mousewheel(function(event, delta) {
      $target.scrollTop($target.scrollTop() - (delta * 30));
      event.preventDefault();
   });
});