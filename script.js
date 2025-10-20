/*
 * Arquivo de configuração para a biblioteca particles.js.
 * Este script deve ser carregado APÓS a inclusão do arquivo particles.min.js
 * no seu HTML para funcionar corretamente.
 */

// ---- particles.js config ----

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 40, // Quantidade de partículas
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // Cor das partículas: Branco
    },
    "shape": {
      "type": "circle", // Tipo de forma: Círculo
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg", // Nota: Esta imagem será ignorada se 'type' for 'circle'
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff", // Cor das linhas: Branco
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
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
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Modo de interação: 'grab' (pegar/ligar linhas)
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Modo de clique: 'push' (adicionar partículas)
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
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
});


/* ---- stats.js config ---- */
/*
 * O código abaixo é usado para exibir o contador de partículas no canto superior.
 * Ele requer o arquivo stats.min.js, que não foi incluído, mas é mantido aqui
 * para o caso de você querer usá-lo.
 */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  // Esta verificação garante que a biblioteca particles.js carregou antes de tentar acessar suas propriedades
  if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS && window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
