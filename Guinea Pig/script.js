document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the elements we need from the HTML
    const soundCard = document.getElementById('sound-card');
    const wheekSound = document.getElementById('wheek-sound');

    // Set volume lower so it's not startling
    if(wheekSound) {
        wheekSound.volume = 0.5; 
    }

    // 2. Add a click listener to the card
    if(soundCard && wheekSound) {
        soundCard.addEventListener('click', () => {
            
            // Reset sound to start if currently playing (allows rapid clicking)
            wheekSound.currentTime = 0;
            
            // Play the sound
            wheekSound.play().catch(error => {
                console.log("Audio play failed (browser permission likely needed):", error);
            });
            
            // Visual Cue: Flash the border orange briefly
            const originalBorder = soundCard.style.borderColor;
            soundCard.style.borderColor = "var(--pop-orange)";
            
            setTimeout(() => {
                 soundCard.style.borderColor = originalBorder;
            }, 300);
        });
    }
});