const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    const audio = document.getElementById(`audio${index + 1}`);

    card.addEventListener("click", () => {
    if (!audio.paused) {
        audio.pause();
    } else {
        document.querySelectorAll("audio").forEach(a => {
            a.pause();
            a.currentTime = 0;
        });
        audio.play();
    }
});
});