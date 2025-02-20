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


// ADD PRODUCT
$("#btnCreateProduct").click(function(){
    $.ajax({
        url: "add_product.php",
        type: "GET",
        dataType: "json",
        data: {
            pname: "RORAL"
        }
    }).done(function(result){

        if(result.res == "success" ){
            alert("ADDED NA BOSS!");
           window.location.reload();
        }
        else{
            alert("Error siya boss");
        }
    });

});


// UPDATE PRODUCT
$("#btnUpdateProduct").click(function () {
    $.ajax({
        url: "edit_product.php",
        type: "GET",
        dataType: "json",
        data: {
            id: "5",  
            pname: "Rad" 
        }
    }).done(function (result) {
        if (result.res === "success") {
            alert("Updated na Boss!");
            window.location.reload();
        } else {
            alert("Wasay update boss malasman!");
        }
    });
});


// DELETE PRODUCT
$("#btnDeleteProduct").click(function () {
    $.ajax({
        url: "delete_product.php",
        type: "GET",
        dataType: "json",
        data: {
            id: "7"
        }
    }).done(function (result) {
        if (result.res === "success") {
            alert("Deleted na Boss!");
            window.location.reload();
        } else {
            alert("Wasay delete boss malasman!");
        }
    });
});


