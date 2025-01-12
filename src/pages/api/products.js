// pages/api/products.js
export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Baby Girls Dresses",
            price: 4500,
            image: "/images/baby.webp"
        },
        {
            id: 2,
            name: "Baba Boy Dresses",
            price: 4500,
            image: "/images/boy.jpg"
        },
        {
            id: 3,
            name: "Ladies Bag",
            price: 850,
            image: "/images/bag.webp"
        },
        {
            id: 4,
            name: "Mens Items",
            price: 7500,
            image: "/images/men.webp"
        },
        {
            id: 5,
            name: "Kids Shoes",
            price: 3000,
            image: "/images/kid.webp"
        },
        {
            id: 6,
            name: "Shoes",
            price: 5000,
            image: "/images/shoes.jpg"
        }
    ];

    res.status(200).json(products);
}
