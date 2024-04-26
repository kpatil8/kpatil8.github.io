function showImage(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    
    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalImage.style.width = "80%"; // Set the width of the modal image to 80% of the viewport width
    modalImage.style.height = "80%"; // Set the height of the modal image to 80% of the viewport height
    modalImage.style.margin = "auto"; // Center the modal image horizontally
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}