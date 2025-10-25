let bg = document.getElementById("bg");
function getDataFromLocakStorage(){
    let data= localStorage.getItem("cart");
    if(data==null){
        return[]
    }else{
        return JSON.parse(data);
    }
}

let productDetails= getDataFromLocakStorage()
console.log(productDetails)

function displayCard(product){
    let div = document.createElement("div");
    div.classList.add("card")
    bg.appendChild(div);

    let image = document.createElement("img");
    image.src=product.image;
    image.alt = product.title;
    image.classList.add("img")
    div.appendChild(image);

    let h2 = document.createElement("h2");
    h2.textContent = product.title.substr(0,30);
    h2.classList.add("title")
    div.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = product.description.substr(0,120);
    p.classList.add("des")
    div.appendChild(p);

    let h3 = document.createElement("h3");
    h3.textContent = "price: "+product.price+"$";
    h3.classList.add("price");
    div.appendChild(h3);

    let h4 = document.createElement("h4");
    h4.textContent = "rating: "+product.rating.rate+"("+product.rating.count+")";
    div.appendChild(h4);

    let button = document.createElement("button");
    button.textContent="Add to cart";
    div.appendChild(button);

    button.onclick=function(){
        productDetails.push(product);
        localStorage.setItem("cart",JSON.stringify(productDetails))
    }

    button.onclick=function(){
        console.log(product)
    }

}

function displayData(products){
    for(let product of products){
        displayCard(product)
    }
}


function fetchData(){
    fetch("https://fakestoreapi.com/products").then(function(data){
        return data.json();
    }).then(function(data){
        displayData(data);
    })
    .catch(function(err){
        console.log(err)
    })
}

fetchData()