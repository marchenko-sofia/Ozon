import getData from './getData';
import renderGoods from './renderGoods';
import { searchFilter } from './filters';

const search = () => {
    const searchImput = document.querySelector('.search-wrapper_input');

    searchImput.addEventListener('input', (event) => {
        const value = event.target.value;

        getData().then((data) => {
            renderGoods(searchFilter(data, value));
        });
    })
}

export default search;