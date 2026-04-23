var url = "https://api.themoviedb.org/3/trending/movie/week?api_key=e95929cf0f089dc675f6f2c7ae4ca352"

fetch(url)
    .then(res => res.json())
    .then(data => {
        var movieListData = "";
        for(var i = 0; i < data.results.length; i++) {
            movieListData += `
                    <div class="col-lg-3" style="margin-bottom: 2%;">
                        <div class="card Card" style="width: 18rem;">
                            <img src="https://image.tmdb.org/t/p/original${data.results[i].poster_path}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">${data.results[i].title}</h5>
                                <p class="card-text fw-normal" style="font-size: 90%;">${data.results[i].overview}</p>
                            </div>
                        </div>
                    </div>
                `;
        }
        document.querySelector("#movie-list").innerHTML = movieListData;
    })

    window.onload = function() {
    var userLoggedIn = localStorage.getItem("userLoggedIn");
    if(userLoggedIn != null) {
        userLoggedIn = JSON.parse(userLoggedIn);
        document.getElementById("user-info").innerHTML = `
            <div class="d-flex justify-content-end align-items-center">
                <span class="me-3 fw-bold">Hello, ${userLoggedIn.username}!</span>
                <button id="btn-logout" class="btn btn-danger fw-bold">Logout</button>
            </div>
        `;
    }
}

document.addEventListener("click", function(e) {
    if(e.target && e.target.id === "btn-logout") {
        localStorage.removeItem("userLoggedIn");
        alert("You have been logged out. Redirecting to homepage...");
        window.location.href = "/";
    }
})

const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

stars.forEach((star) => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        
        // Cập nhật số điểm hiển thị
        ratingValue.innerText = value;

        // Reset tất cả sao về màu xám trước khi tô màu mới
        stars.forEach(s => s.classList.remove('active'));

        // Thêm class 'active' cho ngôi sao được nhấn và các ngôi sao phía trước nó
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= value) {
                s.classList.add('active');
            }
        });
    });
});