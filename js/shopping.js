const cartArry = [];

function display(cartProduct) {
    let totalPrice = 0;
    const tableBody = document.getElementById('cart-product-details')
    tableBody.innerText = '';
    for (let i = 0; i < cartProduct.length; i++) {
        const name = cartArry[i].productName;
        const price = cartArry[i].productPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
        
        `;
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th></th>
        <td>Total Price</td>
        <td>${totalPrice}</td>
        `;
    tableBody.appendChild(tr);
}

function addToCart(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const productName = element.parentNode.parentNode.children[0].innerText;

    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;


    const productObject = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    cartArry.push(productObject);

    // console.log(cartArry);
    // console.log(cartArry.length);

    document.getElementById('total-added-product').innerText = cartArry.length;
    display(cartArry);
}