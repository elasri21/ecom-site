const cart = document.querySelector(".cart i");
const containerCart = document.querySelector(".cart");

cart.addEventListener("click", function(){
    document.querySelector(".message").style.display = "block";
    if(!document.querySelector(".message .box")) {
        hideCart();
    }
});

function elt(type, props, ...children) {
    let dom = document.createElement(type);
    for(let prop of Object.keys(props)) {
        dom.setAttribute(prop, props[prop])
    }
    for(let child of children) {
        if(typeof child != "string") dom.appendChild(child);
        else dom.appendChild(document.createTextNode(child));
    }
    return dom;
}

let itemPlace = document.querySelector('.num-of-item');
let addItems = document.querySelector(".add-item button");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const totalOfItems = document.querySelector(".total-of-items");
function doThingsBatter(){
    itemPlace.textContent = "";
    let box = elt("div", {class: "box"});
    let textContainer = elt("div", {class: "text-cnt"});
    itemPlace.appendChild(box);
    box.appendChild(elt("img", {src: "images/image-product-1.jpg", class: "img-added"}));
    textContainer.appendChild(elt("p", {class: "inline"}, "Autum Limited Edition..."));
    textContainer.appendChild(elt("p", {class: "bill"}, ""));
    box.appendChild(textContainer);
    box.appendChild(elt("i", {class: "fas fa-trash-alt"}));
    itemPlace.appendChild(elt("button", {}, "Checkout"));
    let items = document.querySelector(".items");
    items.textContent = document.querySelectorAll(".box").length;
    totalOfItems.style.display = "block";
    totalOfItems.textContent = document.querySelectorAll(".box").length;


    // the final amount that should be payed

    let finalAmount = document.querySelector(".bill");
    finalAmount.textContent = "$" + (Number(totalOfItems.textContent) * 125)
    // clear cart
    let basket = document.querySelector(".box i");
    basket.addEventListener("click", function() {
        document.querySelector(".num-of-item").textContent = "Your Cart Is Empty";
        items.textContent = 0;
        totalOfItems.textContent = "";
        totalOfItems.style.display = "none";
        setTimeout(hideCart, 500);
    })
}
addItems.addEventListener("click", function() {
    document.querySelector(".message").style.display = "none";
    doThingsBatter();
    increaseItems();
    reduceItems();
});

function increaseItems(){
    plus.addEventListener("click", function(){
        let total = Number(document.querySelector(".items").textContent);
        if(total == 0) {
            return;
        } else if(total >= 1) {
            total++;
            document.querySelector(".items").textContent = total;
            totalOfItems.textContent = total;
            let finalAmount = document.querySelector(".bill");
            finalAmount.innerHTML = `$125.00 * ${(Number(totalOfItems.textContent))} <strong> $${Number(totalOfItems.textContent) * 125}</strong>`;    
        }
  
    });
}
function reduceItems() {
    minus.addEventListener("click", function(){
        let total = Number(document.querySelector(".items").textContent);
        if(total > 1) {
            total--;
            document.querySelector(".items").textContent = total;
            totalOfItems.textContent = total;
            let finalAmount = document.querySelector(".bill");
            finalAmount.innerHTML = `$125.00 * ${(Number(totalOfItems.textContent))} <strong> $${Number(totalOfItems.textContent) * 125}</strong>`;
        } else if(total == 1 || total <= 0) {
            totalOfItems.textContent = "";
            document.querySelector(".items").textContent = 0;
            document.querySelector(".num-of-item").textContent = "Your cart is empty";
            totalOfItems.textContent = "";
            totalOfItems.style.display = "none";
            setTimeout(hideCart, 500);
        }
    });
}
function hideCart() {
    document.querySelector(".message").style.display = "none";
}

// Look through images in the container  that showed when we click the main image
const showArrows = Array.from(document.querySelectorAll(".show .icon"));
showArrows.forEach(arr => {
    arr.addEventListener("click", function() {
        let main = document.querySelector(".show .main-image img");
        let id = document.querySelector(".show .thumb-nail img.active").dataset.num;
        let datas = Array.from(document.querySelectorAll(".show .thumb-nail img"));
        for(let i = 0; i < datas.length; i++){
            datas.forEach(data => data.classList.remove("active"));
        }
        if(this.classList.contains("right")) {
            id >= 4 ?  id = 1 : id++;
            datas[id - 1].classList.add("active");
            main.src = `images/image-product-${id}.jpg`;
        } else if(this.classList.contains("left")) {
            id <= 1 ? id = 4: id--;
            datas[id -1].classList.add("active");
            main.src = `images/image-product-${id}.jpg`;
        }
    });
});

// Look through images using arrowa
let id = 1;
let main = document.querySelector(".main-image img");
function goToRight() {
    if(id < 4) {
        id++;
    } else {
        id = 1;
    }
    main.src = `images/image-product-${id}.jpg`;
}
function goToLeft() {
    if(id > 1) {
        id--;
    } else {
        id = 4;
    }
    main.src = `images/image-product-${id}.jpg`;
}

const switchers = Array.from(document.querySelectorAll(".arrow"));
switchers.forEach(switcher => {
    switcher.addEventListener("click", function() {
        if(this.classList.contains("right")) {
            goToRight();
        } else if(this.classList.contains("left")) {
            goToLeft();
        }
    });
});








