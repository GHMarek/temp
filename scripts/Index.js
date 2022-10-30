var sections = document.querySelectorAll(".section");
var sectBtns = document.querySelectorAll(".controls");
var sectBtn = document.querySelectorAll(".control");
var allSections = document.querySelectorAll(".main-content");

function PageTransitions() {
    //Button click active class
    for (var i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
        let currentBtn = document.querySelectorAll(".active-btn");
        currentBtn[0].classList.remove("active-btn");
        this.classList.add("active-btn");
        })}


        allSections[0].addEventListener("click", (e) => {

            const id = e.target.dataset.id;
            console.log(id);

            if (id) {

                sectBtn.forEach((btn) => {
                    btn.classList.remove("active");
                });

                sections.forEach((section) => {
                    section.classList.remove("active");
                });

                e.target.classList.add("active");

                const element = document.getElementById(id);
                element.classList.add("active");
            }


        });
}

PageTransitions();


