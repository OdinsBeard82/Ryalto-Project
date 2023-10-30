function loadContent(elementId, htmlFilePath) {
    const element = document.getElementById(elementId);
    if (element) {
        fetch(htmlFilePath)
            .then(response => response.text())
            .then(content => {
                element.innerHTML = content;
            })
            .catch(error => {
                console.error(`Error loading ${htmlFilePath}: ${error}`);
            });
    } else {
        console.error(`Element with ID ${elementId} not found.`);
    }
}

loadContent('header', 'header.html');
loadContent('navigation', 'navigation.html');
loadContent('cards', 'cards.html');
loadContent('footer', 'footer.html');
