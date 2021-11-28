function ClickImage(div_Count = 0) {
    let open_images = document.querySelectorAll(".images");
    open_images[div_Count].classList.add("active");

    function removeClass() {
        open_images.forEach(function(s) {
            s.classList.remove("active");
        });
    }

    for (let img of open_images) {
        img.addEventListener("click", function() {
            removeClass();
            img.classList.add("active");
        });
    }
}

ClickImage();

let ct = 0;

function toggleMenu() {
    let menu = document.getElementById("navbar");

    document.getElementById("menubutton").addEventListener("click", function() {
        if (ct == 0) {
            menu.classList.add("active");
            ct = 1;
        } else if (ct == 1) {
            menu.classList.remove("active");
            ct = 0;
        }
    });
}

toggleMenu();

function MenuItems(element_count = 0) {
    let list_content = document.querySelectorAll(".list_items");
    let span_contant = document.querySelectorAll(".menu-name");

    document.getElementById("menubutton").addEventListener("click", function() {
        if (ct == 1) {
            for (let i = 0; i < 4; i++) {
                list_content[i].classList.add("open-nav");
                span_contant[i].classList.add("open-nav-text");
            }
        } else if (ct == 0) {
            for (let i = 0; i < 4; i++) {
                list_content[i].classList.remove("open-nav");
                span_contant[i].classList.remove("open-nav-text");
            }
        }
    });

}

MenuItems();