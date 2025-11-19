import getData from './getData';
import renderGoods from './renderGoods';
import renderCart from './renderCart';

const load = () => {
    const cartCounter = document.querySelector('.counter');
    const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];

    getData().then((data) => {
        renderGoods(data);
    });

    renderCart(cart);
    cartCounter.textContent = cart.length;
}

export default load;