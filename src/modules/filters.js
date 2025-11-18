export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    });
}

export const priceFilter = (goods, value1 = 0, value2 = 0) => {
    return goods.filter((goodsItem) => {
        if (value1 === 0 && value2 === 0) {
            return goodsItem;
        };
        if (value1 === 0 && goodsItem.price <= value2) {
            return goodsItem;
        };
        if (value2 === 0 && goodsItem.price >= value1) {
            return goodsItem;
        };
        if (value1 > value2) {
            return false;
        }
        if (value1 === value2 && value1 != 0) {
            return goodsItem.price === value1;
        }
        if (goodsItem.price >= value1 && goodsItem.price <= value2) {
            return goodsItem;
        };
    });
}