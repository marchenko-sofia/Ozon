import getData from './getData';
import renderGoods from './renderGoods';
import { priceFilter } from './filters';

const price = () => {
    const priceFilterInputs = document.querySelectorAll('.filter-price input');
    const minPrice = document.getElementById('min');
    const maxPrice = document.getElementById('max');

    let arrPrice = [0, 0];

    minPrice.addEventListener('change', (event) => {
        const price = event.target.value;
        if (price == '') { arrPrice[0] = 0 } else { arrPrice[0] = price };
    });

    maxPrice.addEventListener('change', (event) => {
        const price = event.target.value;
        if (price == '') { arrPrice[1] = 0 } else { arrPrice[1] = price };
    });

    priceFilterInputs.forEach((priceItem) => {
        priceItem.addEventListener('change', () => {
            getData().then((data) => {
                renderGoods(priceFilter(data, arrPrice[0], arrPrice[1]));
            });
        })
    })
}

export default price;