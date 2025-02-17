function cart() {
    const localData = JSON.parse(localStorage.getItem("cartData")) ?? []

    const container = document.getElementById("cartcontainer");

    const containerHTMLData = localData.map((ele, ind) => {
        return (
            `<div>
            <img style="width:250px; height:300px; border-radius:10px" src="${ele?.img}" alt="Item Image" />
            <p>${ele?.title}</p>
            <p>${ele?.price}</p>
            <p>${ele?.discount}</p>
            <p>${ele?.deliveryTime}</p>
            <p>Service Name</p>
            <button style="padding:10px 20px; margin:10px; border-radius:10px" onclick="removeCart(${ind})"> Remove cart </button>
        </div>`
        )
    });

    container.innerHTML = containerHTMLData.join(' ')

}
cart();

function removeCart(ind) {
    const localData = JSON.parse(localStorage.getItem("cartData")) ?? [];
    const filteredData = localData.filter((ele,index) => index !== ind)
    localStorage.setItem("cartData", JSON.stringify(filteredData));
    cart()
}