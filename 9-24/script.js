const imageUpload = document.getElementById("image-upload");
const previewImage = document.getElementById("preview-image");

imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
