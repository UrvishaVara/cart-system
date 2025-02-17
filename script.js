const containerData = [
    {
        id: 1,
        title: "STARNSTYLE Polycotton 220 <br> TC Floral Printed King Size <br> Double Bedsheet with 2 Pillow <br> Covers, (90 x 90 Inches,)",
        price: "199 Rs.",
        discount: "15%",
        deliveryTime: "2-3 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/51y0xHiBPeL.jpg",
    },
    {
        id: 2,
        title: "Amazon Brand - Solimo - <br> Solimo Foresty Blue 100% <br> Cotton Single Bedsheet with 1 <br> Pillow Covers Deep Blue",
        price: "499 Rs.",
        discount: "25%",
        deliveryTime: "4-5 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/71AiVPUPrpL._SL1500_.jpg",
    },
    {
        id: 3,
        title: "Amazon Brand - Solimo Super <br> Soft Polyester Single Bedsheet <br> with 1 Pillow Cover | 95 GSM <br> (Beige)",
        price: "399Rs.",
        discount: "20%",
        deliveryTime: "2-3 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/71qxFXHtCCL._SL1500_.jpg",
    },
    {
        id: 4,
        title: "Amazon Brand - Solimo - <br> Solimo Foresty Blue 100% <br> Cotton Single Bedsheet with 1 <br> Pillow Covers Deep Blue",
        price: "499 Rs.",
        discount: "25%",
        deliveryTime: "4-5 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/71PesUHQjgL._SL1500_.jpg",
    },
    {
        id: 5,
        title: "Amazon Brand - Solimo Super <br> Soft Polyester Single Bedsheet <br> with 1 Pillow Cover | 95 GSM <br> (Beige)",
        price: "399Rs.",
        discount: "20%",
        deliveryTime: "2-3 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/91tBcZOZ9HL._SL1500_.jpg",
    },
    {
        id: 6,
        title: "STARNSTYLE Polycotton 220 <br> TC Floral Printed King Size <br> Double Bedsheet with 2 Pillow <br> Covers, (90 x 90 Inches,)",
        price: "199 Rs.",
        discount: "15%",
        deliveryTime: "2-3 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/51y0xHiBPeL.jpg",
    },
    {
        id: 7,
        title: "Amazon Brand - Solimo - <br> Solimo Foresty Blue 100% <br> Cotton Single Bedsheet with 1 <br> Pillow Covers Deep Blue",
        price: "499 Rs.",
        discount: "25%",
        deliveryTime: "4-5 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/71AiVPUPrpL._SL1500_.jpg",
    },
    {
        id: 8,
        title: "Amazon Brand - Solimo Super <br> Soft Polyester Single Bedsheet <br> with 1 Pillow Cover | 95 GSM <br> (Beige)",
        price: "399Rs.",
        discount: "20%",
        deliveryTime: "2-3 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/71qxFXHtCCL._SL1500_.jpg",
    },
    {
        id: 9,
        title: "Amazon Brand - Solimo - <br> Solimo Foresty Blue 100% <br> Cotton Single Bedsheet with 1 <br> Pillow Covers Deep Blue",
        price: "499 Rs.",
        discount: "25%",
        deliveryTime: "4-5 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/71PesUHQjgL._SL1500_.jpg",
    },
    {
        id: 10,
        title: "Amazon Brand - Solimo Super <br> Soft Polyester Single Bedsheet <br> with 1 Pillow Cover | 95 GSM <br> (Beige)",
        price: "399Rs.",
        discount: "20%",
        deliveryTime: "2-3 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/91tBcZOZ9HL._SL1500_.jpg",
    },
    {
        id: 11,
        title: "Amazon Brand - Solimo - <br> Solimo Foresty Blue 100% <br> Cotton Single Bedsheet with 1 <br> Pillow Covers Deep Blue",
        price: "499 Rs.",
        discount: "25%",
        deliveryTime: "4-5 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/71PesUHQjgL._SL1500_.jpg",
    },
    {
        id: 12,
        title: "Amazon Brand - Solimo Super <br> Soft Polyester Single Bedsheet <br> with 1 Pillow Cover | 95 GSM <br> (Beige)",
        price: "399Rs.",
        discount: "20%",
        deliveryTime: "2-3 business days",
        serviceName: "Amazon Prime",
        img: "https://m.media-amazon.com/images/I/91tBcZOZ9HL._SL1500_.jpg",
    },


]

function renderData() {

    const container = document.getElementById("container");

    const containerHTMLData = containerData.map((ele, ind) => {
        return (
            `<div>
            <img style="width:250px; height:300px; border-radius:10px" src="${ele.img}" alt="Item Image" />
            <p>${ele.title}</p>
            <p>${ele.price}</p>
            <p>${ele.discount}</p>
            <p>${ele.deliveryTime}</p>
            <p>Service Name</p>
            <button style="padding:10px 20px; margin:10px; border-radius:10px" onclick="addToCart(${ind})"> Add to cart </button>
        </div>`
        )
    });

    container.innerHTML = containerHTMLData.join(' ')

}

renderData();

function addToCart(ind) {
    const dataToSave = containerData[ind];
    const localData = JSON.parse(localStorage.getItem("cartData")) ?? []
    localStorage.setItem("cartData", JSON.stringify([...localData, dataToSave]));
}