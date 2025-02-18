$.ajax({
    url : "products.php"
}).done(function(data){
    console.log(data);

    let result = JSON.parse(data);

    let template = document.querySelector("#productRowTemplate");
    let parent = document.querySelector("#tableBody");

    result.forEach(item => {
        let clone = template.content.cloneNode(true);
        clone.querySelector(".tdID").innerHTML = item.product_id;
        clone.querySelector(".tdName").innerHTML = item.product_name;

        parent.appendChild(clone);
    });
});






















// $.ajax({
//     url: "products.php"
// }).done(function(data) {
//     console.log(data);

//     let result = JSON.parse(data);

//     let template = document.querySelector("#productRowTemplate").content;
//     let parent = document.querySelector("#tableBody");

//     result.forEach(item => {
//         let clone = document.importNode(template, true);
//         clone.querySelector(".tdID").textContent = item.product_id;
//         clone.querySelector(".tdName").textContent = item.product_name;

//         parent.appendChild(clone);
//     });
// });