const getData = () => {
    return fetch('https://ozon-371f2-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json();
        });
}

export default getData;