const handleButtonClick = (playAudio) => {
  if (playAudio) document.getElementsByTagName("audio")[0].play();

  document
    .getElementsByClassName("music-modal-wrapper")[0]
    .classList.add("fade-out-animation");
};

document.getElementById("no-button").addEventListener("click", () => {
  handleButtonClick(false);
});

document.getElementById("yes-button").addEventListener("click", () => {
  handleButtonClick(true);
});
