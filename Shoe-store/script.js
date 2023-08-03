
const shoesData = [
   

    {
        id: 1,
        name: 'Running Shoe 1',
        price: 79.99,
        category: 'running',
        image: 'shoe1.jpg',
    },
    {
        id: 2,
        name: 'Performance Shoe 1',
        price: 99.99,
        category: 'performance',
        image: 'shoe2.jpg',
    },
    {
        id: 3,
        name: 'Running Shoe 2',
        price: 89.99,
        category: 'running',
        image: 'shoe3.jpg',
    },
    {
        id: 4,
        name: 'Performance Shoe 2',
        price: 109.99,
        category: 'performance',
        image: 'shoe4.jpg',
    },
    {
        id: 5,
        name: 'Casual Shoe 1',
        price: 49.99,
        category: 'casual',
        image: 'shoe5.jpg',
    },
    {
        id: 6,
        name: 'Casual Shoe 2',
        price: 59.99,
        category: 'casual',
        image: 'shoe6.jpg',
    },
  
];




const cart = [];
let cartTotal = 0;

function updateCart() {
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');

    cartCountElement.textContent = cart.length;
    cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}



function renderShoes(category) {
    const shoeListElement = document.getElementById('shoe-list');
    shoeListElement.innerHTML = '';

    shoesData.forEach(shoe => {
        if (category === 'all' || shoe.category === category) {
            const shoeItem = document.createElement('div');
            shoeItem.classList.add('shoe-item');

            const shoeImage = document.createElement('img');
            shoeImage.src = shoe.image;
            shoeItem.appendChild(shoeImage);

            const shoeName = document.createElement('p');
            shoeName.textContent = shoe.name;
            shoeItem.appendChild(shoeName);

            const shoePrice = document.createElement('p');
            shoePrice.textContent = `$${shoe.price.toFixed(2)}`;
            shoeItem.appendChild(shoePrice);

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.addEventListener('click', () => {
                cart.push(shoe);
                cartTotal += shoe.price;
                updateCart();
            });
            shoeItem.appendChild(addToCartButton);

            shoeListElement.appendChild(shoeItem);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category-item');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const selectedCategory = category.getAttribute('data-category');
            renderShoes(selectedCategory);
        });
    });

    renderShoes('all'); 
});




