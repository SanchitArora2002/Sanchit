(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // const profileImage = document.getElementById("profile-image");
        // if (document.body.classList.contains("dark-mode")) {
        //     profileImage.src = "img/Profile.PNG"; // Dark mode image
        // } else {
        //     profileImage.src = "img/Profile.PNG"; // Light mode image
        // }
    });
})();

// function flipCard(element) {
//     element.classList.toggle('flip');
// }
