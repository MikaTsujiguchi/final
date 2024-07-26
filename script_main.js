document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#sidebar a');
    const mainContent = document.getElementById('main-content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentUrl = this.getAttribute('data-content');
            
            fetch(contentUrl)
                .then(response => response.text())
                .then(data => {
                    mainContent.innerHTML = data;
                    
                })
                .catch(error => {
                    console.error('Error loading content:', error);
                });
        });
    });
});




