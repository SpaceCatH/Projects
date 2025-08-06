
//Expand photos
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.src = image.src;
    modal.classList.add("show");
}

function closeModal() {
    document.getElementById("imageModal").classList.remove("show");
}