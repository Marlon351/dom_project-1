document.addEventListener('DOMContentLoaded', function () {

    document.body.style["background-color"] = "#00008b";

    const title = document.querySelector(".introduction h1");
    title.style["text-decoration"] = "underline";


    const heading2 = document.querySelector(".introduction h2");
    heading2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
    heading2.style["text-align"] = "center";


    const img = document.querySelector("#starters_image_div img");
    img.style["border"] = "5px dotted #f6c416";


    const images = document.querySelectorAll(".pokemon_images");

    images.forEach((image) => {
        image.style["border"] = "5px dotted #f6c416";
    });

    const bulbasaurContainer = document.querySelector("#bulbasaur_container")
    bulbasaurContainer.style["background-color"] = "#388e8e";

    const squirtlerContainer = document.querySelector("#squirtle_container")
    squirtlerContainer.style["background-color"] = "#8dc4cd";

    const footer = document.querySelector("footer");
    footer.style["text-decoration"] = "underline overline";
});