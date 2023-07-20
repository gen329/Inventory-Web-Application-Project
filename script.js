
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let scent = event.target.scent.value;
    let price = event.target.price.value;
    let img = event.target.img.value;
    let size = event.target.size.value;
    let inStock = event.target.inStock.value;

    newCandle(name, scent, price, img, size, inStock);
    form.reset();
});
const candleOne = document.querySelector("article.candle1")
const removeButtonOne = document.querySelector("button.candle1")
const inStockCandles = document.querySelector("section.inStockCandles")
removeButtonOne.addEventListener("click", (event) => {
    {
        candleOne.remove()
    }
    return inStockCandles;
})

const candleTwo = document.querySelector("article.candle2")
const removeButtonTwo = document.querySelector("button.candle2")
removeButtonTwo.addEventListener("click", (event) => {
    {
        candleTwo.remove()
    }
    return inStockCandles;
})
const candleThree = document.querySelector("article.candle3")
const removeButtonThree = document.querySelector("button.candle3")
removeButtonThree.addEventListener("click", (event) => {
    {
        candleThree.remove()
    }
    return inStockCandles;
})

function newCandle(name, scent, price, size, img, inStock) {
    const article = document.createElement("article");
    const div = document.querySelector("article");
    div.append(article);
    if (name) {
        const h2 = document.createElement("h2");
        h2.textContent += name;
        article.append(h2);
    }
    if (scent) {
        const h3 = document.createElement("h3");
        h3.textContent += scent;
        article.append(h3);
    }
    if (price) {
        const p = document.createElement("p");
        p.textContent += price;
        article.append(p);
    }
    if (img) {
        const img = document.createElement("img");
        img.src += img;
        article.append(img);
    }
    if (size) {
        const h4 = document.createElement("h4");
        h4.textContent += size;
        article.append(h4);
    }
    if (inStock) {
        const div = document.createElement("div");
        div.textContent += "";
        article.append(div);
    }
}




    const removeButtons = document.querySelector
    for (let button of removeButtons) {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.target.parentElement.remove();
            event.reset()
        });
    }
    removeButtons.addEventListener("click", (event) => {
        ul.remove();
    });

// function toggleInStock(element) {
//     element.addEventListener("click", (event) => {
//         let innerButtonText = element.innerText === "In Stock" ? "Out of Stock"
//         element.innerText = innerButtonText;
//     });
// }
