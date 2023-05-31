function showMessage(response) {
  var image = document.getElementById("image");
  if (response === "yes") {
    alert(
      "I am so lucky to have found you. You are the love of my life, and I want to spend every moment with you. Will you be mine forever?"
    );
    image.src = "2.jpg"; // Replace with the path to the "Yes" image
  } else if (response === "no") {
    alert(
      "I understand. My love for you will always remain, and I respect your decision."
    );
    image.src = "3.jpg"; // Replace with the path to the "No" image
  }
  image.style.display = "block"; // Show the image
}
function createParticles() {
  const particleCount = 50;
  const particleSize = 10;
  const particleContainer = document.getElementById("background");

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.width = particleSize + "px";
    particle.style.height = particleSize + "px";
    particle.style.animationDuration = Math.random() * 2 + 1 + "s";
    particle.style.animationDelay = Math.random() * 2 + "s";
    particleContainer.appendChild(particle);
  }
}

createParticles();
