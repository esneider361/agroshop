
class ProductCard extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'price', 'image'];
    }

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.shadow.innerHTML = `
            <style>
                :host { display:block; }
                .product-card {
                    background: var(--card-bg, #fff);
                    border-radius: 10px;
                    box-shadow: 0 5px 15px var(--shadow-color, rgba(0,0,0,0.1));
                    overflow: hidden;
                    transition: transform 0.3s, box-shadow 0.3s;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                }
                img { width: 100%; height: 180px; object-fit: cover; }
                .content {
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }
                h4 { font-size: 1.4rem; margin: 0 0 0.5rem 0; color: var(--primary-color, #2c5e2e); }
                p { font-size: 1rem; margin: 0; flex-grow: 1; }
                .add-to-cart-btn {
                    background-color: var(--primary-color, #2c5e2e);
                    color: white;
                    border: none;
                    padding: 0.75rem;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    text-transform: uppercase;
                    font-weight: bold;
                    margin-top: 1rem;
                }
                .add-to-cart-btn:hover {
                    background-color: var(--primary-dark, #1e4220);
                }
            </style>
            <div class="product-card">
                <img>
                <div class="content">
                    <h4></h4>
                    <p></p>
                    <button class="add-to-cart-btn">Añadir al Carrito</button>
                </div>
            </div>
        `;

        this.imgEl = this.shadow.querySelector('img');
        this.titleEl = this.shadow.querySelector('h4');
        this.priceEl = this.shadow.querySelector('p');
        this.addToCartBtn = this.shadow.querySelector('.add-to-cart-btn');

        this.addToCartBtn.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('add-to-cart', {
                bubbles: true,
                composed: true,
                detail: {
                    name: this.getAttribute('name'),
                    price: this.getAttribute('price'),
                    image: this.getAttribute('image'),
                }
            }));
        });
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case 'image':
                this.imgEl.src = newValue || "https://placehold.co/400x300?text=No+image";
                this.imgEl.alt = this.getAttribute('name') || '';
                break;
            case 'name':
                this.titleEl.textContent = newValue || "";
                this.imgEl.alt = newValue || '';
                break;
            case 'price':
                this.priceEl.textContent = newValue || "";
                break;
        }
    }
}

customElements.define('product-card', ProductCard);


const products = {
    frutas: [
        { name: 'Manzanas', price: '$2.50/kg', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
        { name: 'Plátanos', price: '$1.80/kg', image: 'https://images.unsplash.com/photo-1571771894824-c13b341134a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    ],
    verduras: [
        { name: 'Zanahorias', price: '$1.20/kg', image: 'https://images.unsplash.com/photo-1590868309235-e62758673633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
        { name: 'Tomates', price: '$3.00/kg', image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    ],
    lacteos: [
        { name: 'Leche Fresca', price: '$1.50/L', image: 'https://images.unsplash.com/photo-1620189507195-68309c04c4d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
        { name: 'Queso Artesanal', price: '$12.00/kg', image: 'https://images.unsplash.com/photo-1628022299361-934f559437a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    ],
    cereales: [
        { name: 'Avena en Hojuelas', price: '$4.00/kg', image: 'https://images.unsplash.com/photo-1500219955672-7a0c96848225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
        { name: 'Maíz', price: '$1.00/kg', image: 'https://images.unsplash.com/photo-1599447462853-f72a445778a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const categoryLinks = document.querySelectorAll('.category-sidebar a');
    const cartIcon = document.querySelector('.cart');
    const cartModal = document.querySelector('.shopping-cart-modal');
    const closeCartButton = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart-btn');

    let cartItems = [];

    function displayProducts(category) {
        productContainer.innerHTML = '';
        const productsToDisplay = category === 'all' 
            ? Object.values(products).flat() 
            : products[category];

        if (productsToDisplay) {
            productsToDisplay.forEach(product => {
                const productCard = document.createElement('product-card');
                productCard.setAttribute('name', product.name);
                productCard.setAttribute('price', product.price);
                productCard.setAttribute('image', product.image);
                productContainer.appendChild(productCard);
            });
        }
    }

    function updateCartView() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
            cartTotalEl.textContent = '$0.00';
            return;
        }

        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <p>${item.name}</p>
                    <p>${item.price}</p>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            
            const priceValue = parseFloat(item.price.replace(/[^\d.]/g, ''));
            total += priceValue;
        });

        cartTotalEl.textContent = `$${total.toFixed(2)}`;
    }

    productContainer.addEventListener('add-to-cart', (e) => {
        const existingItem = cartItems.find(item => item.name === e.detail.name);
        if (existingItem) {
            alert('Este artículo ya está en tu carrito.');
        } else {
            cartItems.push(e.detail);
            updateCartView();
            updateCartIcon();
            // Show a confirmation
            const confirmation = document.createElement('div');
            confirmation.className = 'add-to-cart-confirmation';
            confirmation.textContent = `${e.detail.name} añadido al carrito!`;
            document.body.appendChild(confirmation);
            setTimeout(() => {
                confirmation.remove();
            }, 2000);
        }
    });

    clearCartBtn.addEventListener('click', () => {
        cartItems = [];
        updateCartView();
        updateCartIcon();
    });

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            categoryLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            displayProducts(category);
        });
    });

    function updateCartIcon() {
        const cartCounter = cartIcon.querySelector('.cart-counter');
        if (cartItems.length > 0) {
            cartCounter.textContent = cartItems.length;
            cartCounter.style.display = 'flex';
        } else {
            cartCounter.style.display = 'none';
        }
    }

    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeCartButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    displayProducts('all');
    updateCartView(); 
    updateCartIcon();
});
