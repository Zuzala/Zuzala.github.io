
$('a').click(function(e){
    e.preventDefault(); 

    $('#table').addClass('hidden');
    var direction = $(this).text();

    switch(direction){
        case 'Research':
            transitionParticles(direction);
            break;
        case 'Creative':
            transitionParticles(direction);
            break;
        case 'About':
            transitionParticles(direction);
            break;
        case 'Projects':
            transitionParticles(direction);
            break;
 
    }
    setTimeout(function(){
        window.location.href = direction + '.html';
    }, 5000);
    
    return false; 
});

