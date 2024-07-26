window.onload = function() {
    const image = document.querySelector('.fade-in-image');
    const button = document.querySelector('.fade-in-button');

    // 画像が表示された後にボタンを表示する
    image.classList.add('show');

    image.addEventListener('transitionend', () => {
        button.classList.add('show');
    });
};

function redirectToLogin() {
    window.location.href = 'login.php';
}




document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("btn_mainstart").style.display = "block";
    }, 5000); // 5000ミリ秒 = 5秒

    document.getElementById("btn_mainstart").addEventListener("click", function() {
        window.location.href = "login.html"; // 次のページのURLを指定
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // 3秒ごとにスライドを切り替え
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const mainContent = document.getElementById('main-content');

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const contentUrl = item.getAttribute('data-content');
            fetch(contentUrl)
                .then(response => response.text())
                .then(data => {
                    mainContent.innerHTML = data;
                })
                .catch(error => {
                    mainContent.innerHTML = `<p>Error loading content: ${error}</p>`;
                });
        });
    });
});


