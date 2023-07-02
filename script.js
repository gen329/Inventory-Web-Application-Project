const form = document.querySelector("form");
const ul = document.createElement('ul');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const li = document.createElement("li");
    const candleListing = event.target
    const candleName = document.createElement("h2");
    const candlePrice = document.createElement("h4");
    const candleImg = document.createElement("img");
    const remove = document.createElement("button")

    candleName.textContent = candleListing.name.value;
    li.append(candleName,candlePrice,candleImg, remove);
    ul.append(li)

    remove.innerText = "Remove Candle"
    
    
    remove.addEventListener("click", (event) => {
        console.log('clicked!')
        li.remove();
    })
})

document.body.append(ul)

// let formData = {
    //         name: event.target.name.value,
    //         scent: event.target.scent.value,
    //         price: event.target.price.value,
    //         img: event.target.img.value,
    //         size: event.target.size.value,
    //         inStock: event.target.inStock.value,
    //     }
    
    
    