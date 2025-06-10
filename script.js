function showSection(section) {
  document.getElementById("home").style.display =
    section === "home" ? "flex" : "none";
  document.getElementById("about").style.display =
    section === "about" ? "block" : "none";
  document.getElementById("gallery").style.display = "none";
}

function openGallery(projectId) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    const img = document.createElement("img");
    img.src = `https://via.placeholder.com/200x150?text=Proj${projectId}+Img${i}`;
    gallery.appendChild(img);
  }
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  gallery.style.display = "flex";
}
