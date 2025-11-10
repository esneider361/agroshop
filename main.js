
class ProductCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .product-card {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }
        .content {
            padding: 1rem;
        }
        h4 {
            font-size: 1.4rem;
            margin: 0 0 0.5rem 0;
            color: var(--primary-color, #2c5e2e);
        }
        p {
            font-size: 1rem;
            margin: 0;
        }
      </style>
      <div class="product-card">
        <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
        <div class="content">
          <h4>${this.getAttribute('name')}</h4>
          <p>${this.getAttribute('price')}</p>
        </div>
      </div>
    `;

    shadow.appendChild(template.content.cloneNode(true));
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
    for (const category in products) {
        const grid = document.getElementById(`${category}-grid`);
        products[category].forEach(product => {
            const productCard = document.createElement('product-card');
            productCard.setAttribute('name', product.name);
            productCard.setAttribute('price', product.price);
            productCard.setAttribute('image', product.image);
            grid.appendChild(productCard);
        });
    }
});
