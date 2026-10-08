var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productImage = document.getElementById("productImage");
var productDescription = document.getElementById("productDescription");
var mainbutten1 = document.getElementById("main-butten1")
var mainbutten2 = document.getElementById("main-butten2")
var rowData = document.getElementById("rowData");
var search = document.getElementById("search");
var productsList = [];

// =======================
// GET DATA FROM LOCAL STORAGE
// =======================

if (localStorage.getItem("prolist") !== null) {

  productsList = JSON.parse(localStorage.getItem("prolist"));

}

display(productsList);

addnumerof();

// =======================
// ADD PRODUCT
// =======================

function addProduct() {

   if (
    productName.value.trim() === "" ||
    productPrice.value.trim() === "" ||
    productCategory.value.trim() === "" ||
    productDescription.value.trim() === ""
  ) {

    Swal.fire({
      title: "Please fill all fields",
      icon: "warning"
    });

    return;
  }

  var product = {

    name: productName.value,

    price: productPrice.value,

    category: productCategory.value,

    image: "./img/pngtree-red-fox-is-looking-at-the-camera-picture-image_2463056.jpg",

    description: productDescription.value

  };

  productsList.push(product);

  Swal.fire({

    title: "Product Added Successfully",

    icon: "success",

    draggable: true

  });

  localStorage.setItem("prolist", JSON.stringify(productsList));

  clearData();

  display(productsList);

  addnumerof();

}

// =======================
// CLEAR INPUTS
// =======================

function clearData() {

  productName.value = "";

  productPrice.value = "";

  productCategory.value = "";

  productImage.value = "";

  productDescription.value = "";

}

// =======================
// DISPLAY PRODUCTS
// =======================

function display(proudect) {

  if (proudect.length === 0) {

    rowData.innerHTML = `
    
      <div class="col-12 d-flex justify-content-center align-items-center" style="min-height: 400px;">

        <div class="text-center">

          <i class="fa-solid fa-box-open fa-5x text-secondary mb-4"></i>

          <h1 class="fw-bold">
            No Products Found
          </h1>

          <p class="text-muted fs-5">
            Please Add Your First Product
          </p>

        </div>

      </div>
    
    `;

    return;
  }

  var cartona = "";

  for (var i = 0; i < proudect.length; i++) {

    cartona += `
    
      <div class="col-lg-4 col-md-6">

        <div class="product-card">

          <div class="product-image">

            <img src="${proudect[i].image}" class="w-100" alt="">

          </div>

          <div class="product-content">

            <div class="d-flex justify-content-between align-items-center mb-2">

              <h3 class="product-title">
                ${proudect[i].name}
              </h3>

              <span class="product-price">
                ${proudect[i].price} $
              </span>

            </div>

            <span class="product-category">
              ${proudect[i].category}
            </span>

            <p class="product-description">
              ${proudect[i].description}
            </p>

            <div class="d-flex gap-2 mt-4">

              <button class="btn btn-warning w-50" id = "updet${i}"
                onclick="updet(${proudect[i].oldindex !== undefined ? proudect[i].oldindex : i})">

                <i class="fa-solid fa-pen"></i>

                Update

              </button>

              <button class="btn btn-danger w-50"
                id="deletbtten${i}"
                onclick="deletitms(${proudect[i].oldindex !== undefined ? proudect[i].oldindex : i})">

                <i class="fa-solid fa-trash"></i>

                Delete

              </button>

            </div>

          </div>

        </div>

      </div>
    
    `;
  }

  rowData.innerHTML = cartona;

}

// =======================
// NUMBER OF PRODUCTS
// =======================

function addnumerof() {

  var numberofarry = document.querySelector("#number-arry");

  if (numberofarry !== null) {

    numberofarry.textContent = productsList.length;

  }

}

// =======================
// DELETE PRODUCT
// =======================



function deletitms(i) {

var delbutten = document.getElementById(`deletbtten${i}`);


  productsList.splice(i, 1);

  localStorage.setItem("prolist", JSON.stringify(productsList));

  display(productsList);

  addnumerof();

}

// =======================
// SEARCH
// =======================

function searchinput() {

  var datasaerch = search.value.toLowerCase();

  var fliterprodect = [];

  for (var i = 0; i < productsList.length; i++) {

    if (

      productsList[i].name.toLowerCase().includes(datasaerch)

      ||

      productsList[i].category.toLowerCase().includes(datasaerch)

    ) {

      var product = {

        ...productsList[i],

        oldindex: i

      };

      fliterprodect.push(product);

    }
  }

  display(fliterprodect);

}

// =======================
// UPDATE PRODUCT
// =======================
var findinedex =0  ;
function updet(i) {
  findinedex = i;


var updetbuten =document.getElementById(`updet${i}`); 
  productName.value = productsList[i].name;

  productPrice.value = productsList[i].price;

  productCategory.value = productsList[i].category;

  productDescription.value = productsList[i].description;
  
 
  mainbutten1.classList.add("d-none");
  mainbutten2.classList.remove("d-none");
  


}
function updateproudect(){
    productsList[findinedex].name =productName.value ;

  productsList[findinedex].price = productPrice.value ;

   productsList[findinedex].category = productCategory.value  ;

  productsList[findinedex].description = productDescription.value;
   
   
  localStorage.setItem("prolist", JSON.stringify(productsList));

  display(productsList);
  mainbutten1.classList.remove("d-none");
  mainbutten2.classList.add("d-none");
  clearData()
  addnumerof();
}