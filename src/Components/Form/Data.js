export default function Data(dataName) {
    switch (dataName) {
        case "products":
            const products = [
                {
                    id: 1,
                    name: "Denim Jacket",
                    name_category: "Outerwear",
                    code: 100100302,
                    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&auto=format&fit=crop",
                    price: 750000,
                    old_price: 890000
                }
                ,
                {
                    id: 2,
                    name: "Men's Formal Suit",
                    name_category: "Formal Wear",
                    code: 100100306,
                    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop",
                    price: 2500000,
                    old_price: 3000000
                }
            ];
            return products;
        default:
            return [];
    }
}
