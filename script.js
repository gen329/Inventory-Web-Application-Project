const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
        name: event.target.name.value,
        scent: event.target.scent.value,
        price: event.target.price.value,
        img: event.target.img.value,
        size: event.target.size.value,
        inStock: event.target.inStock.value,
    };

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


    function generateNewCandle(name, scent, price, size, img, inStock) {
        const article = newCandle(name, scent, price, size, img, inStock);
        const div = document.querySelector("article");
        div.append(article);
    }
    generateNewCandle(name, scent, price, img, size, inStock);
    form.reset();
});

function newCandle(name, scent, price, size, img, inStock) {
    const article = document.createElement("article");

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
        const size = document.createElement("h4");
        h4.textContent += size;
        article.append(h4);
    }

    if (inStock) {
        const div = doucment.createElement("div");
        div.textContent += "";
        article.append(div);
    }
}

function removeCandle() {
    const remove = document.createElement("button");
    
    candle = document.querySelector("article");
    article.append(remove);

    remove.addEventListener("click", (event) => {
        candle.remove();
    });

remove.innerText = "Remove";
article.append(remove);

remove.addEventListener("click", (event) => {
    article.remove();
});
return removedCandle;

}