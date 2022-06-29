

var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var ProductCategoryInput = document.getElementById("ProductCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var mainBtn = document.getElementById("mainBtn");
var alertErr = document.getElementById("alertErr");

function regularEx(){

    var regax = /^[A-Z][a-z]{3,8}/;
    if(regax.test(productNameInput.value) == true)
    {
        productNameInput.classList.add("is-valid")
        productNameInput.classList.remove("is-invalid")
        alertErr.classList.replace("d-block" , "d-none")
    }
    else
    {
        productNameInput.classList.add("is-invalid")
        productNameInput.classList.remove("is-valid")
        alertErr.classList.replace("d-none" , "d-block")


    }


}
productNameInput.addEventListener("blur" , regularEx );






var productsContainer ;
if(localStorage.getItem("myProduct")== null)
{
    productsContainer =[];
}
else
{
    productsContainer = JSON.parse( localStorage.getItem("myProduct") );
    displayProduct();

}
function addProduct()
{
    var product = {


        name:productNameInput.value,
        price:productPriceInput.value,
        category:ProductCategoryInput.value,
        desc:productDescInput.value
    }
    productsContainer.push( product );
    localStorage.setItem("myProduct" , JSON.stringify( productsContainer ));
    displayProduct();

    clearForm();
    console.log(displayProduct);
}

function clearForm()
{
    productNameInput.value = "";
    productPriceInput.value = "";
    ProductCategoryInput.value = "";
    productDescInput.value = "";
}


function displayProduct()
{
    var cartoona = "";
    for(var i = 0 ; i < productsContainer.length ; i++)
    {
        cartoona += `<tr>
        <td>`+i+`</td>
        <td>`+productsContainer[i].name+`</td>
        <td>`+productsContainer[i].price+`</td>
        <td>`+productsContainer[i].category+`</td>
        <td>`+productsContainer[i].desc+`</td>
        <td><button onclick="productUpdate(`+i+`)" class="btn btn-outline-warning">update</button></td>
        <td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button></td>
        </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
};

function deleteProduct(productIndex)
{

        productsContainer.splice(productIndex , 1);
        localStorage.setItem("myProduct" , JSON.stringify( productsContainer ));

        displayProduct();
}


function searchProduct(searchTearm)
{
    cartoona = "";

    for(var i = 0 ; i<productsContainer.length ; i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(searchTearm.toLowerCase()) == true)
        {
            cartoona += `<tr>
            <td>`+i+`</td>
            <td>`+productsContainer[i].name+`</td>
            <td>`+productsContainer[i].price+`</td>
            <td>`+productsContainer[i].category+`</td>
            <td>`+productsContainer[i].desc+`</td>
            <td><button onclick="productUpdate(`+i+`)" class="btn btn-outline-warning">update</button></td>
            <td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button></td>
            </tr>`;
        }
        else
        {

        }
    }
    document.getElementById("tableBody").innerHTML = cartoona;

};


function productUpdate(productIndex)
{
    productNameInput.value = productsContainer[productIndex].name;
    productPriceInput.value = productsContainer[productIndex].price;
    ProductCategoryInput.value = productsContainer[productIndex].category;
    productDescInput.value = productsContainer[productIndex].desc;
    
    mainBtn.innerHTML = "update";

}; 




