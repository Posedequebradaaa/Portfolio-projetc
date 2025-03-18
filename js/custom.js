(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

document.addEventListener('DOMContentLoaded', () => {
  function initializeProgressBar(barId, textId, targetPercentage, color) {
    const progressBar = document.getElementById(barId);
    const progressText = document.getElementById(textId);
    let progress = 0;

    function updateProgress() {
      if (progress <= targetPercentage) {
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;

        // Cor baseada na porcentagem
        if (progress <= 5) {
          const percentage = progress / 35;
          const r = Math.floor(255 - (255 - 255) * percentage);
          const g = Math.floor(0 + (165 - 0) * percentage);
          const b = Math.floor(255);
          progressBar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else if (progress <= 70) {
          progressBar.style.backgroundColor = color;
        }

        progress++;
        setTimeout(updateProgress, 20);
      } else {
        setTimeout(() => {
          progress = 0;
          updateProgress();
        }, 3000);
      }
    }

    updateProgress();
  }

  initializeProgressBar('progress-bar-ceh', 'progress-text-ceh', 60, 'royalblue');
  initializeProgressBar('progress-bar-cisco', 'progress-text-cisco', 90, 'red');
  initializeProgressBar('progress-bar-CCST-CY', 'progress-bar-CCST-CY', 90, 'red');
  initializeProgressBar('progress-bar-CCST-CNT', 'progress-bar-CCST-CNT', 90, 'red');
  initializeProgressBar('progress-bar-cin', 'progress-bar-cin', 100, 'forestgreen');
  initializeProgressBar('progress-bar-ech', 'progress-bar-ech', 100, 'forestgreen');
  initializeProgressBar('progress-bar-solyd', 'progress-bar-solyd', 100, 'forestgreen');
  initializeProgressBar('progress-bar-uceh', 'progress-bar-uceh', 100, 'forestgreen');
  initializeProgressBar('progress-bar-soc', 'progress-bar-soc', 100, 'forestgreen');
  initializeProgressBar('progress-bar-siem', 'progress-bar-siem', 100, 'forestgreen');
  initializeProgressBar('progress-bar-iso', 'progress-bar-iso', 100, 'forestgreen');
  initializeProgressBar('progress-bar-wire', 'progress-bar-wire', 100, 'forestgreen');
  initializeProgressBar('progress-bar-net', 'progress-bar-net', 100, 'forestgreen');
  initializeProgressBar('progress-bar-adm', 'progress-bar-adm', 100, 'forestgreen');
  initializeProgressBar('progress-bar-arq', 'progress-bar-arq', 100, 'forestgreen');
  initializeProgressBar('progress-bar-fire', 'progress-bar-fire', 100, 'forestgreen');
  initializeProgressBar('progress-bar-pf', 'progress-bar-pf', 100, 'forestgreen');
  initializeProgressBar('progress-bar-for', 'progress-bar-for', 100, 'forestgreen');
  initializeProgressBar('progress-bar-eng', 'progress-bar-eng', 40, 'deepskyblue');
  initializeProgressBar('progress-bar-ana', 'progress-bar-ana', 100, 'forestgreen');
  initializeProgressBar('progress-bar-tec', 'progress-bar-tec', 100, 'forestgreen');
  initializeProgressBar('progress-text-lp1', 'progress-text-lp1', 85, 'gold');
});

document.addEventListener('DOMContentLoaded', () => {
  const audios = document.querySelectorAll('.custom-audio');
  const buttons = document.querySelectorAll('.play-button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const audioId = this.getAttribute('data-audio-id');
      const audio = document.getElementById(audioId);

      if (!audio) {
        console.error(`Áudio com ID "${audioId}" não encontrado.`);
        return;
      }

      if (audio.paused) {
        audio.play();
        this.classList.add('paused');
        this.innerHTML = '<i class="fa fa-pause"></i> Pause Audio';

        // Pause outros áudios
        audios.forEach(a => {
          if (a !== audio) {
            a.pause();
            const otherButton = document.querySelector(`[data-audio-id="${a.id}"]`);
            if (otherButton) {
              otherButton.classList.remove('paused');
              otherButton.innerHTML = '<i class="fa fa-play"></i> Play Audio';
            }
          }
        });
      } else {
        audio.pause();
        this.classList.remove('paused');
        this.innerHTML = '<i class="fa fa-play"></i> Play Audio';
      }
    });
  });

  audios.forEach(audio => {
    audio.addEventListener('timeupdate', function() {
      const progress = this.closest('.audio-wrapper').querySelector('.audio-progress-bar');
      if (progress) {
        progress.value = (this.currentTime / this.duration) * 100;
      }
    });

    audio.addEventListener('ended', function() {
      const button = document.querySelector(`[data-audio-id="${this.id}"]`);
      if (button) {
        button.classList.remove('paused');
        button.innerHTML = '<i class="fa fa-play"></i> Play Audio';
      }
    });
  });
});

function setAudioTime(audio) {
  const progress = audio.closest('.audio-wrapper').querySelector('.audio-progress-bar');
  if (audio && progress) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
}


document.addEventListener("DOMContentLoaded", function () {
  // Defina um tempo para a tela de boas-vindas (por exemplo, 3 segundos)
  setTimeout(function () {
      // Remova a tela de boas-vindas
      document.getElementById("welcome-screen").classList.add("hidden");

      // Exibe o conteúdo principal após a transição
      document.getElementById("main-content").style.display = "block";
  }, 3000); // 3000 ms = 3 segundos
});
