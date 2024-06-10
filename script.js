document.addEventListener("DOMContentLoaded", function() {
    class Shoe {
        constructor(type, colors, description, prices) {
            this.type = type;
            this.colors = colors;
            this.description = description;
            this.prices = prices;
        }
    }

    const louBoutin = new Shoe(
        "LouBoutin",
        ["Black", "White", "Pink"],
        "LouBoutin is a luxury shoe brand known for its red bottomed heels. The brand was created in 1992 by Christian Louboutin.",
        {
            "5": 800,
            "6": 805,
            "7": 810,
            "8": 815,
            "9": 820
        }
    );

    const prada = new Shoe(
        "Prada",
        ["Black", "Red", "White"],
        "Prada is an Italian luxury fashion brand known for its leather handbags, shoes, and accessories. It was founded in 1913 by Mario Prada",
        {
            "5": 750,
            "6": 755,
            "7": 760,
            "8": 765,
            "9": 770
        }
    );

    const chanel = new Shoe(
        "Chanel",
        ["White", "Pink", "Blue"],
        "Chanel is a French luxury fashion brand that was founded by Coco Chanel in 1910. It specializes in perfume, bags, jewelry, and shoes",
        {
            "5": 1100,
            "6": 1105,
            "7": 1110,
            "8": 1115,
            "9": 1120
        }
    );

    const shoeTypeDropdown = document.getElementById("shoe-type");
    const shoeColorDropdown = document.getElementById("shoe-color");
    const shoeSizeRadioButtons = document.querySelectorAll('input[name="shoe-size"]');
    
    let selectedShoe = "LouBoutin";
    let selectedColor = "Black";
    let selectedSize = "5"; 

    populateShoeColors(selectedShoe);
    updateShoeImageAndDescription(selectedShoe, selectedColor, selectedSize);

    shoeTypeDropdown.addEventListener("change", function() {
        selectedShoe = this.value;
        populateShoeColors(selectedShoe);
        updateShoeImageAndDescription(selectedShoe, shoeColorDropdown.value, selectedSize);
    });

    shoeColorDropdown.addEventListener("change", function() {
        selectedColor = this.value;
        updateShoeImageAndDescription(selectedShoe, selectedColor, selectedSize); 
    });

    shoeSizeRadioButtons.forEach(radio => {
        radio.addEventListener("change", function() {
            selectedSize = this.value; 
            updateShoeImageAndDescription(selectedShoe, selectedColor, selectedSize);
        });
    });

    function populateShoeColors(selectedShoe) {
        const shoeColors = document.getElementById("shoe-color");
        shoeColors.innerHTML = "";

        switch(selectedShoe) {
            case "LouBoutin":
                louBoutin.colors.forEach(color => {
                    const option = document.createElement("option");
                    option.text = color;
                    shoeColors.add(option);
                });
                break;
            case "Prada":
                prada.colors.forEach(color => {
                    const option = document.createElement("option");
                    option.text = color;
                    shoeColors.add(option);
                });
                break;
            case "Chanel":
                chanel.colors.forEach(color => {
                    const option = document.createElement("option");
                    option.text = color;
                    shoeColors.add(option);
                });
                break;
            default:
                break;
        }
    }

    function updateShoeImageAndDescription(selectedShoe, selectedColor, selectedSize) {
        const shoeImage = document.getElementById("shoe-image");
        shoeImage.src = `images/${selectedShoe.toLowerCase()}_${selectedColor.toLowerCase()}.jpeg`;

        const descriptionTextArea = document.getElementById("textbox");
        const selectedShoeObj = getShoeObject(selectedShoe);

        const price = selectedShoeObj.prices[selectedSize];
        const priceText = price ? `Price: $${price}` : "Price: select a size to see price";

        descriptionTextArea.value = `Brand: ${selectedShoe}\n\nDescription: ${selectedShoeObj.description}\n\nColor: ${selectedColor}\nSize: ${selectedSize}\n${priceText}`;
    }

    function getShoeObject(shoeType) {
        switch(shoeType) {
            case "LouBoutin":
                return louBoutin;
            case "Prada":
                return prada;
            case "Chanel":
                return chanel;
            default:
                return null;
        }
    }
});


