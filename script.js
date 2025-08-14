function upDate(previewPic) {
  console.log("upDate function triggered");
  console.log("Alt text:", previewPic.alt);
  console.log("Source:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over or focus on an image below to display here.";
}

function addTabindexToImages() {
  console.log("addTabindexToImages function triggered.");
  const images = document.querySelectorAll(".preview");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

// Add event listeners to all preview images
document.querySelectorAll(".preview").forEach(img => {
  img.addEventListener("mouseover", function() {
    upDate(this);
  });
  img.addEventListener("mouseout", undo);
  img.addEventListener("focus", function() {
    upDate(this);
  });
  img.addEventListener("blur", undo);
});