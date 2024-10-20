#readme (esto es para carrito)
<link rel="stylesheet" href="assets/css/prueba.css">




<a class="nav-icon position-relative text-decoration-none" href="#" class="cart-icon" id="cart-icon">
    <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
    <span class="cart-count" id="cart-count">0</span> <!-- Contador de productos -->
</a>



<div class="cart-window" id="cart-window">
    <div class="cart-header">
        <h2>Tu Carrito</h2>
        <span class="close-btn" id="close-btn">&times;</span>
    </div>
    <div class="cart-content" id="cart-content">
        <p>No hay productos en el carrito.</p>
    </div>
    <div class="cart-footer">
        <p>Total: <span id="cart-total">$0.00</span></p>
        <button id="checkout-btn">Pagar</button>
    </div>
</div>









<script src="assets/js/scripts.js"></script>
    
    <script>
    // Obtener elementos
const cartIcon = document.getElementById('cart-icon');
const cartWindow = document.getElementById('cart-window');
const closeBtn = document.getElementById('close-btn');
const cartContent = document.getElementById('cart-content');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Array para almacenar los productos del carrito
let cart = [];

// Función para abrir el carrito
cartIcon.addEventListener('click', () => {
    cartWindow.classList.add('active');
});

// Función para cerrar el carrito
closeBtn.addEventListener('click', () => {
    cartWindow.classList.remove('active');
});

// Función para actualizar el contenido del carrito
function updateCart() {
    cartContent.innerHTML = ''; // Limpiar el contenido actual
    if (cart.length === 0) {
        cartContent.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        cart.forEach((item, index) => {
            const productItem = document.createElement('div');
            productItem.classList.add('cart-item');
            productItem.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)}</p>
                <button class="remove-item" data-index="${index}">Eliminar</button>
            `;
            cartContent.appendChild(productItem);
        });

        // Actualizar el total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
        cartCount.textContent = cart.length;

        // Eliminar un producto
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                cart.splice(index, 1); // Eliminar del array
                updateCart(); // Actualizar el carrito
            });
        });
    }
}

// Añadir producto al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.closest('.add-to-cart').dataset.name;
        const productPrice = parseFloat(e.target.closest('.add-to-cart').dataset.price);

        // Añadir producto al array del carrito
        cart.push({ name: productName, price: productPrice });
        updateCart(); // Actualizar carrito
    });
});

// Botón de pago (solo muestra un mensaje por ahora)
checkoutBtn.addEventListener('click', () => {
    alert('Procesando el pago...');
    window.location.href = 'pago.html';
    cart = []; // Vaciar el carrito
    updateCart(); // Actualizar carrito
});

    </script>