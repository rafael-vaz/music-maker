//Animações Jquery

$("document").ready(function () {
  $(".text-container").hide();
  $(".text-container").delay(100);
  $(".text-container").slideDown();

  $(".info-text").hide();
  $(".info-text").delay(300);
  $(".info-text").show("slide-right");

  $(document).click(function () {
    $(".menu-list").hide();
  });

  $(".menu-hamburger").click(function (event) {
    event.stopPropagation();
    $(".menu-list").slideToggle();
  });
});

//Music Maker - Tone.js Library

function sequencer() {
  const kick = new Tone.Player("../sounds/kick-electro01.wav").toMaster();
  const snare = new Tone.Player("../sounds/snare-lofi01.wav").toMaster();

  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1}`
    );
    let snareInputs = document.querySelector(
      `.snare input:nth-child(${step + 1})`
    );

    if (kickInputs.checked) {
      kick.start();
    }

    if (snareInputs.checked) {
      snare.start();
    }

    index++;
  }
}

sequencer();
