document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const totalPriceDisplay = document.getElementById('totalPrice');

    items.forEach(item => {
        const price = parseFloat(item.dataset.price);
        const amountDisplay = item.querySelector('.amount');
        const increaseButton = item.querySelector('.increase');
        const decreaseButton = item.querySelector('.decrease');
        const removeButton = item.querySelector('.remove');
        const likeButton = item.querySelector('.like-button');

        // Update total price
        const updateTotalPrice = () => {
            let total = 0;
            items.forEach(i => {
                const qty = parseInt(i.querySelector('.amount').textContent);
                const itemPrice = parseFloat(i.dataset.price);
                total += qty * itemPrice;
            });
            totalPriceDisplay.textContent = `$${total}`;
        };

        // Increase quantity
        increaseButton.addEventListener('click', () => {
            const currentAmount = parseInt(amountDisplay.textContent);
            amountDisplay.textContent = currentAmount + 1;
            updateTotalPrice();
        });

        // Decrease quantity
        decreaseButton.addEventListener('click', () => {
            const currentAmount = parseInt(amountDisplay.textContent);
            if (currentAmount > 0) {
                amountDisplay.textContent = currentAmount - 1;
                updateTotalPrice();
            }
        });

        // Remove item
        removeButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        // Like item
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
            likeButton.textContent = likeButton.classList.contains('liked') ? '❤️' : '🤍';
        });
    });

    // Initialize total price
    updateTotalPrice();
});
