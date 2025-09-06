// Handle profile picture upload
document.getElementById("upload").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("profile-pic").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Contact form submission
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});