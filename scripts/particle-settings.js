var particleJSON =
{
    "particles": {
        "number": {
        "value": 150,
        "density": {
            "enable": false,
            "value_area": 4000
        }
        },
        "color": {
        "value": "#c0c0c0"
        },
        "shape": {
        "type": "edge",
        "stroke": {
            "width": 0,
            "color": "#000000"
        },
        "polygon": {
            "nb_sides": 3
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
        },
        "opacity": {
        "value": 0.49716301422833176,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 4.395604395604396,
            "opacity_min": 0.42357642357642356,
            "sync": false
        }
        },
        "size": {
        "value": 3,
        "random": true,
        "anim": {
            "enable": true,
            "speed": 10,
            "size_min": .1,
            "sync": false
        }
        },
        "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 0.5,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
        "onhover": {
            "enable": false,
            "mode": "repulse"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true
}


particlesJS('particles-js', particleJSON);




// const default_speed = 3;
// const default_direction = 'none';
// var move_speed = particleJSON.particles.move.speed;
// var move_direction = particleJSON.particles.move.direction;

function transitionParticles(direction){
    

    switch(direction){
        case 'research':
            particleJSON.interactivity.events.onhover.enable = true;
            particleJSON.particles.number.value = 150;
            particleJSON.particles.move.speed = 25;
            particleJSON.particles.move.direction = 'bottom';
            break;
        case 'creative':
            particleJSON.interactivity.events.onhover.enable = true;
            particleJSON.particles.number.value = 150;
            particleJSON.particles.move.speed = 25;
            particleJSON.particles.move.direction = 'right';
            break;
        case 'about':
            particleJSON.interactivity.events.onhover.enable = true;
            particleJSON.particles.number.value = 150;
            particleJSON.particles.move.speed = 25;
            particleJSON.particles.move.direction = 'left';
            break;
        case 'projects':
            particleJSON.interactivity.events.onhover.enable = true;
            particleJSON.particles.number.value = 150;
            particleJSON.particles.move.speed = 25;
            particleJSON.particles.move.direction = 'top';
            break;
    }


    particlesJS('particles-js', particleJSON);
}