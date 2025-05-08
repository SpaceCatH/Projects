
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

//Expand iframe


function toggleIframeSize() {
    const iframeContainer = document.getElementById("iframeContainer");
    const iframe = document.getElementById("googleSheetIframe");
    const button = document.getElementById("expandButton");
    const body = document.body;

    if (!iframeContainer.classList.contains("expanded")) {
        // Expand the iframe and center it
        iframe.style.width = "90vw"; // Use viewport width for large expansion
        iframe.style.height = "90vh"; // Use viewport height for large expansion
        iframeContainer.classList.add("expanded");
        body.classList.add("no-margin"); // Remove body margins
        button.textContent = "Collapse";
    } else {
        // Collapse the iframe and reset its position
        iframe.style.width = "100%"; // Reset to default width
        iframe.style.height = "600px"; // Reset to default height
        iframeContainer.classList.remove("expanded");
        body.classList.remove("no-margin"); // Restore body margins
        button.textContent = "Expand";
    }
}