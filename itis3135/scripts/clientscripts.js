function showImage(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}