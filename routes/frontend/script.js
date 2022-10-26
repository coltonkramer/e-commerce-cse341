let url = 'https://e-commerce-cse341.onrender.com/routes'
fetch(url)
.then(r=>r.json())
.then(data => {
    console.log(data)
    data.forEach(element => {
        let mainContainer = document.getElementById('main-container')
        let productDiv = document.createElement('div')
        productDiv.setAttribute('class','product-div')

        let productImg = document.createElement('img')
        productImg.setAttribute('src', element.img)
        productImg.setAttribute('alt', element.manufacturer + ', ' + element.name)
        productDiv.appendChild(productImg)

        let nameAndPriceContainer = document.createElement('div')
        nameAndPriceContainer.setAttribute('class', 'name-price-container')
        
        let productName = document.createElement('h3')
        productName.textContent = element.manufacturer + ' ' + element.name;
        nameAndPriceContainer.appendChild(productName)

        let productPrice = document.createElement('h3')
        productPrice.textContent = element.price;
        nameAndPriceContainer.appendChild(productPrice)
        productDiv.appendChild(nameAndPriceContainer)
        
        let productSku = document.createElement('p')
        productSku.textContent = element.sku;
        productDiv.appendChild(productSku)
        
        let productSize = document.createElement('p')
        productSize.textContent = element.size;
        productDiv.appendChild(productSize)
        
        let productColor = document.createElement('p')
        productColor.textContent = element.color;
        productDiv.appendChild(productColor)
        
        mainContainer.appendChild(productDiv)
    });
})
