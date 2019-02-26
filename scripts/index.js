
$('a').click(function(e){
    e.preventDefault(); 

    $('#table').addClass('hidden');
    var direction = $(this).text().toLowerCase();

    transitionParticles(direction);
      
    setTimeout(function(){
        window.location.href = direction + '.html';
    }, 2000);
    
    return false; 
});

