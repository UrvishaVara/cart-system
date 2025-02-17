function getData(){
    const localData = JSON.parse(localStorage.getItem("cartData")) ?? []
    console.log(getData);
}


function cart() {

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