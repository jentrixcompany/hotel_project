        // About Page Functionality

        // Initialize About Page
        function initAboutPage() {
            // Tab switching functionality
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');

                    // Remove active class from all buttons and contents
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));

                    // Add active class to clicked button
                    this.classList.add('active');

                    // Show corresponding content
                    document.getElementById(tabId).classList.add('active');
                });
            });

            // Image thumbnail functionality
            const thumbnails = document.querySelectorAll('.thumbnail');
            const aboutMainImage = document.getElementById('aboutMainImage');

            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', function() {
                    const imageSrc = this.getAttribute('data-image');

                    // Update main image
                    aboutMainImage.src = imageSrc;

                    // Update active thumbnail
                    thumbnails.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');

                    // Add fade effect
                    aboutMainImage.style.opacity = '0.5';
                    setTimeout(() => {
                        aboutMainImage.style.opacity = '1';
                    }, 200);
                });
            });

            // Auto-rotate images
            let currentImageIndex = 0;
            function rotateAboutImages() {
                if (thumbnails.length > 0) {
                    currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
                    const thumbnail = thumbnails[currentImageIndex];
                    const imageSrc = thumbnail.getAttribute('data-image');

                    aboutMainImage.src = imageSrc;
                    thumbnails.forEach(t => t.classList.remove('active'));
                    thumbnail.classList.add('active');

                    aboutMainImage.style.opacity = '0.5';
                    setTimeout(() => {
                        aboutMainImage.style.opacity = '1';
                    }, 200);
                }
            }

            // Start image rotation (every 5 seconds)
            let imageRotation = setInterval(rotateAboutImages, 5000);

            // Pause rotation on hover
            const aboutImage = document.querySelector('.about-image');
            aboutImage.addEventListener('mouseenter', () => {
                clearInterval(imageRotation);
            });

            aboutImage.addEventListener('mouseleave', () => {
                imageRotation = setInterval(rotateAboutImages, 5000);
            });

            // Animate milestones on scroll
            const milestones = document.querySelectorAll('.milestone');
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px 0px -50px 0px'
            };

            const milestoneObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                        milestoneObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Set initial styles for animation
            milestones.forEach(milestone => {
                milestone.style.opacity = '0';
                milestone.style.transform = 'translateY(20px)';
                milestone.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                milestoneObserver.observe(milestone);
            });
        }

        // Add to your existing DOMContentLoaded event listener
        document.addEventListener('DOMContentLoaded', function() {
            // ... your existing initialization code ...

            // Initialize About Page
            initAboutPage();

            // ... rest of your existing code ...
        });

        // Add this to your existing scroll animations function
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe all elements with slide-up class
            document.querySelectorAll('.slide-up').forEach(element => {
                observer.observe(element);
            });

            // Also observe team members for special animation
            const teamObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                        teamObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Animate team members
            document.querySelectorAll('.team-member').forEach(member => {
                member.style.opacity = '0';
                member.style.transform = 'translateY(30px)';
                member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                teamObserver.observe(member);
            });
        }
        // Enhanced Menu Data with Kenyan Dishes
        const menuItems = [
            {
                id: 1,
                name: "Kenyan Breakfast Platter",
                description: "Mandazi, sausage, eggs your style, baked beans, and chai. A complete traditional Kenyan breakfast.",
                price: 450,
                category: "breakfast",
                rating: 4.8,
                popular: true,
                image: "../images/breakfast.png",
                prepTime: "15-20 min"
            },
            {
                id: 2,
                name: "Chapati & Beans",
                description: "Freshly made chapati served with well-seasoned Kenyan beans stew.",
                price: 300,
                category: "breakfast",
                rating: 4.7,
                popular: true,
                image: "../images/chapati.png",
                prepTime: "10-15 min"
            },
            {
                id: 3,
                name: "Ugali & Sukuma Wiki",
                description: "Kenya's staple dish - soft ugali served with sautéed kale (sukuma wiki) and your choice of protein.",
                price: 350,
                category: "lunch",
                rating: 4.9,
                popular: true,
                image: "../images/ugali.png",
                prepTime: "20-25 min"
            },
            {
                id: 4,
                name: "Nyama Choma",
                description: "Grilled goat meat marinated in traditional Kenyan spices, served with kachumbari and ugali.",
                price: 850,
                category: "lunch",
                rating: 4.9,
                popular: true,
                image: "../images/nyama.png",
                prepTime: "25-30 min"
            },
            {
                id: 5,
                name: "Pilau",
                description: "Fragrant rice cooked with tender beef, spices, and vegetables. A Kenyan favorite for special occasions.",
                price: 400,
                category: "lunch",
                rating: 4.8,
                popular: false,
                image: "../images/pilau.png",
                prepTime: "20-25 min"
            },
            {
                id: 6,
                name: "Fish Tilapia Fry",
                description: "Fresh tilapia fried to perfection, served with ugali and vegetables on the side.",
                price: 750,
                category: "dinner",
                rating: 4.7,
                popular: true,
                image: "../images/fish.png",
                prepTime: "25-30 min"
            },
            {
                id: 7,
                name: "Mukimo",
                description: "Traditional Kikuyu dish made from mashed potatoes, peas, corn, and pumpkin leaves.",
                price: 350,
                category: "dinner",
                rating: 4.6,
                popular: false,
                image: "../images/mukimo.png",
                prepTime: "20-25 min"
            },
            {
                id: 8,
                name: "Githeri",
                description: "A hearty mix of boiled maize and beans, seasoned with traditional spices and vegetables.",
                price: 250,
                category: "dinner",
                rating: 4.5,
                popular: false,
                image: "../images/githeri.jpeg",
                prepTime: "15-20 min"
            },
            {
                id: 9,
                name: "Fresh Passion Juice",
                description: "100% natural passion fruit juice, freshly squeezed and served chilled.",
                price: 180,
                category: "drinks",
                rating: 4.8,
                popular: true,
                image: "../images/passion.jpeg",
                prepTime: "5 min"
            },
            {
                id: 10,
                name: "Dawa Tea",
                description: "Kenyan specialty tea with ginger, honey, and lemon. Known for its healing properties.",
                price: 150,
                category: "drinks",
                rating: 4.9,
                popular: true,
                image: "../images/tea.jpeg",
                prepTime: "5-7 min"
            },
            {
                id: 11,
                name: "Fresh Mango Smoothie",
                description: "Creamy smoothie made from ripe Kenyan mangoes and yogurt.",
                price: 220,
                category: "drinks",
                rating: 4.7,
                popular: false,
                image: "../images/mango.jpeg",
                prepTime: "5 min"
            },
            {
                id: 12,
                name: "Kenyan Coffee",
                description: "Premium Arabica coffee from Kenyan highlands, brewed to perfection.",
                price: 200,
                category: "drinks",
                rating: 4.8,
                popular: false,
                image: "../images/coffee.jpeg",
                prepTime: "5 min"
            }
        ];

        // Shopping Cart
        let cart = [];
        let orderCounter = 1247;

        // DOM Elements
        const menuItemsContainer = document.getElementById('menuItems');
        const cartCount = document.getElementById('cartCount');
        const cartModal = document.getElementById('cartModal');
        const cartBody = document.getElementById('cartBody');
        const cartTotal = document.getElementById('cartTotal');
        const cartIcon = document.getElementById('cartIcon');
        const closeCartBtn = document.getElementById('closeCart');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const orderForm = document.getElementById('orderForm');
        const orderSummary = document.getElementById('orderSummary');
        const orderTotal = document.getElementById('orderTotal');
        const proceedCheckoutBtn = document.getElementById('proceedCheckout');
        const continueShoppingBtn = document.getElementById('continueShopping');
        const orderSuccessModal = document.getElementById('orderSuccessModal');
        const orderNumberElement = document.getElementById('orderNumber');
        const orderIdDisplay = document.getElementById('orderIdDisplay');
        const newOrderBtn = document.getElementById('newOrderBtn');
        const closeSuccessBtn = document.getElementById('closeSuccessBtn');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const header = document.getElementById('header');
        const floatingElements = document.getElementById('floatingElements');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Create floating elements
            createFloatingElements();

            // Render menu items
            renderMenuItems('all');

            // Set up event listeners
            setupEventListeners();

            // Load cart from localStorage
            loadCartFromStorage();

            // Initialize animations on scroll
            initScrollAnimations();
        });

        // Create floating background elements
        function createFloatingElements() {
            for (let i = 0; i < 20; i++) {
                const element = document.createElement('div');
                element.className = 'floating-element';
                element.style.left = `${Math.random() * 100}%`;
                element.style.top = `${Math.random() * 100}%`;
                element.style.width = `${Math.random() * 40 + 20}px`;
                element.style.height = element.style.width;
                element.style.background = `rgba(${Math.random() * 50 + 200}, ${Math.random() * 50}, ${Math.random() * 50 + 60}, ${Math.random() * 0.1 + 0.05})`;
                element.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
                element.style.animationDelay = `${Math.random() * 5}s`;

                // Add floating animation
                const style = document.createElement('style');
                style.innerHTML = `
                    @keyframes float {
                        0% { transform: translateY(0) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(180deg); }
                        100% { transform: translateY(0) rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);

                floatingElements.appendChild(element);
            }
        }

        // Render menu items based on category
        function renderMenuItems(category) {
            menuItemsContainer.innerHTML = '';

            const filteredItems = category === 'all'
                ? menuItems
                : menuItems.filter(item => item.category === category);

            filteredItems.forEach(item => {
                const menuItemElement = document.createElement('div');
                menuItemElement.className = 'menu-item slide-up';
                menuItemElement.setAttribute('data-category', item.category);
                menuItemElement.innerHTML = `
                    ${item.popular ? '<div class="menu-item-badge">Most Popular</div>' : ''}
                    <div class="menu-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3 class="menu-item-title">${item.name}</h3>
                            <div class="menu-item-price">Ksh ${item.price.toFixed(2)}</div>
                        </div>
                        <p class="menu-item-description">${item.description}</p>
                        <div class="menu-item-footer">
                            <div class="menu-item-rating">
                                <i class="fas fa-star"></i>
                                <span>${item.rating}</span>
                                <span style="color: var(--medium-text); margin-left: 5px;">(${item.prepTime})</span>
                            </div>
                            <div class="menu-item-order">
                                <div class="quantity-control">
                                    <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                                    <span class="quantity-value" id="qty-${item.id}">1</span>
                                    <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                                </div>
                                <button class="btn" style="padding: 10px 20px;" data-id="${item.id}">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
                menuItemsContainer.appendChild(menuItemElement);
            });

            // Add event listeners to menu item buttons
            document.querySelectorAll('.menu-item-order .btn').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    const quantityElement = document.getElementById(`qty-${itemId}`);
                    const quantity = parseInt(quantityElement.textContent);
                    addToCart(itemId, quantity);

                    // Reset quantity
                    quantityElement.textContent = '1';
                });
            });

            // Add event listeners to quantity buttons
            document.querySelectorAll('.increase-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    const quantityElement = document.getElementById(`qty-${itemId}`);
                    let quantity = parseInt(quantityElement.textContent);
                    quantityElement.textContent = quantity + 1;
                });
            });

            document.querySelectorAll('.decrease-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    const quantityElement = document.getElementById(`qty-${itemId}`);
                    let quantity = parseInt(quantityElement.textContent);
                    if (quantity > 1) {
                        quantityElement.textContent = quantity - 1;
                    }
                });
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Category filter buttons
            categoryBtns.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    categoryBtns.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    // Render items for selected category
                    const category = this.getAttribute('data-category');
                    renderMenuItems(category);
                });
            });

            // Footer menu category links
            document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const category = this.getAttribute('data-category');

                    // Update active category button
                    categoryBtns.forEach(btn => btn.classList.remove('active'));
                    document.querySelector(`.category-btn[data-category="${category}"]`).classList.add('active');

                    // Render items
                    renderMenuItems(category);

                    // Scroll to menu
                    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
                });
            });


                        // Footer menu category links
            document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const category = this.getAttribute('data-category');

                    // Update active category button
                    categoryBtns.forEach(btn => btn.classList.remove('active'));
                    document.querySelector(`.category-btn[data-category="${category}"]`).classList.add('active');

                    // Render items
                    renderMenuItems(category);

                    // Scroll to menu
                    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Cart icon
            cartIcon.addEventListener('click', openCart);

            // Close cart button
            closeCartBtn.addEventListener('click', closeCart);

            // Continue shopping button
            continueShoppingBtn.addEventListener('click', closeCart);

            // Proceed to checkout button
            proceedCheckoutBtn.addEventListener('click', function() {
                if (cart.length === 0) {
                    alert('Your cart is empty. Please add items before checking out.');
                    return;
                }
                closeCart();
                document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
            });

            // Close cart when clicking outside
            cartModal.addEventListener('click', function(e) {
                if (e.target === cartModal) {
                    closeCart();
                }
            });

            // Order form submission
            orderForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (cart.length === 0) {
                    alert('Your cart is empty. Please add items before placing an order.');
                    return;
                }

                // Generate order ID
                orderCounter++;
                orderNumberElement.textContent = orderCounter;
                orderIdDisplay.textContent = `TENDA-${orderCounter}`;

                // Show success modal
                orderSuccessModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';

                // Clear cart
                cart = [];
                updateCart();
                saveCartToStorage();

                // Reset form
                orderForm.reset();
            });

            // New order button
            newOrderBtn.addEventListener('click', function() {
                orderSuccessModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
            });

            // Close success modal
            closeSuccessBtn.addEventListener('click', function() {
                orderSuccessModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });

            // Close success modal when clicking outside
            orderSuccessModal.addEventListener('click', function(e) {
                if (e.target === orderSuccessModal) {
                    orderSuccessModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });

            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-bars');
                this.querySelector('i').classList.toggle('fa-times');
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('#mainNav a').forEach(link => {
                link.addEventListener('click', function() {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                });
            });

            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
                    header.style.backdropFilter = 'blur(10px)';
                } else {
                    header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                    header.style.backdropFilter = 'blur(10px)';
                }
            });

            // Newsletter form submission
            document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input').value;
                alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
                this.reset();
            });
        }

        // Add item to cart
        function addToCart(itemId, quantity = 1) {
            const item = menuItems.find(menuItem => menuItem.id === itemId);
            if (!item) return;

            // Check if item already exists in cart
            const existingItemIndex = cart.findIndex(cartItem => cartItem.id === itemId);

            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += quantity;
            } else {
                cart.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: quantity,
                    image: item.image
                });
            }

            updateCart();
            saveCartToStorage();

            // Show a quick confirmation
            showNotification(`${item.name} added to cart!`);
        }

        // Update cart display
        function updateCart() {
            // Update cart count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;

            // Update cart modal
            updateCartModal();

            // Update order summary in form
            updateOrderSummary();
        }

        // Update cart modal
        function updateCartModal() {
            cartBody.innerHTML = '';

            if (cart.length === 0) {
                cartBody.innerHTML = '<p class="empty-cart-message">Your cart is empty. Please add items from the menu.</p>';
                cartTotal.textContent = 'Ksh 0.00';
                return;
            }

            let total = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">Ksh ${item.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease-cart-btn" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase-cart-btn" data-id="${item.id}">+</button>
                    </div>
                    <div class="cart-item-total">Ksh ${itemTotal.toFixed(2)}</div>
                `;
                cartBody.appendChild(cartItemElement);
            });

            cartTotal.textContent = `Ksh ${total.toFixed(2)}`;

            // Add event listeners to cart quantity buttons
            document.querySelectorAll('.decrease-cart-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    updateCartItemQuantity(itemId, -1);
                });
            });

            document.querySelectorAll('.increase-cart-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    updateCartItemQuantity(itemId, 1);
                });
            });
        }

        // Update order summary in form
        function updateOrderSummary() {
            orderSummary.innerHTML = '';

            if (cart.length === 0) {
                orderSummary.innerHTML = '<p class="empty-cart-message">Your cart is empty. Please add items from the menu.</p>';
                orderTotal.textContent = 'Ksh 0.00';
                return;
            }

            let total = 0;

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const summaryItem = document.createElement('div');
                summaryItem.className = 'summary-item';
                summaryItem.innerHTML = `
                    <span>${item.name} x ${item.quantity}</span>
                    <span>Ksh ${itemTotal.toFixed(2)}</span>
                `;
                orderSummary.appendChild(summaryItem);
            });

            // Add delivery fee
            const deliveryFee = total > 1000 ? 0 : 150;
            if (deliveryFee > 0) {
                const deliveryItem = document.createElement('div');
                deliveryItem.className = 'summary-item';
                deliveryItem.innerHTML = `
                    <span>Delivery Fee</span>
                    <span>Ksh ${deliveryFee.toFixed(2)}</span>
                `;
                orderSummary.appendChild(deliveryItem);
                total += deliveryFee;
            } else {
                const freeDelivery = document.createElement('div');
                freeDelivery.className = 'summary-item';
                freeDelivery.innerHTML = `
                    <span>Delivery Fee</span>
                    <span style="color: #4CAF50;">FREE</span>
                `;
                orderSummary.appendChild(freeDelivery);
            }

            orderTotal.textContent = `Ksh ${total.toFixed(2)}`;
        }

        // Update cart item quantity
        function updateCartItemQuantity(itemId, change) {
            const itemIndex = cart.findIndex(item => item.id === itemId);

            if (itemIndex !== -1) {
                cart[itemIndex].quantity += change;

                // Remove item if quantity is 0 or less
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                    showNotification('Item removed from cart');
                }

                updateCart();
                saveCartToStorage();
            }
        }

        // Open cart modal
        function openCart() {
            cartModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Close cart modal
        function closeCart() {
            cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Save cart to localStorage
        function saveCartToStorage() {
            localStorage.setItem('tendaHotelCart', JSON.stringify(cart));
        }

        // Load cart from localStorage
        function loadCartFromStorage() {
            const savedCart = localStorage.getItem('tendaHotelCart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCart();
            }
        }

        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(135deg, var(--crimson) 0%, var(--crimson-dark) 100%);
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                z-index: 3000;
                font-weight: 500;
                transform: translateX(100%);
                transition: transform 0.3s;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);

            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 10);

            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Initialize scroll animations
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe all elements with slide-up class
            document.querySelectorAll('.slide-up').forEach(element => {
                observer.observe(element);
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#') return;

                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
