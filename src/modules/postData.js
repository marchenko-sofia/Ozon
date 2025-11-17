const postData = () => {
    return fetch('http://localhost:3000/goods', {
        method: 'POST',
        body: JSON.stringify({
            title: "Ведьмак 3",
            price: 3000,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    })
        .then(res => res.json());
}


// Удаляет элемент по id
// return fetch('http://localhost:3000/goods/id', {
//         method: 'DELETE',
//     })
//         .then(res => res.json());

// Изменили элемент по id
// fetch('http://localhost:3000/goods/id', {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json; charset=utf-8'
//         },
//         body: JSON.stringify({ 
//             title: "Ведьмак 3",
//             price: 5000, //изменили данные
//             sale: true,
//             img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
//             category: "Игры и софт"
//         })

// Изменяем только часть данных
// fetch('http://localhost:3000/goods/id', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json; charset=utf-8'
//         },
//         body: JSON.stringify({
//             price: 1794, //изменили часть данных
//         })

export default postData;