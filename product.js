

const mainImg=document.getElementById('main-img')
const productTitle=document.getElementById('product-title')
const productPrice=document.getElementById('price')
const productDescription=document.getElementById('description')
 const productList =document.getElementById('productList')

async function getOneProduct()
{
    const response=await fetch('https://fakestoreapi.com/products/1')
           const productData=await response.json()
          // console.log(productData);
          displayOneProduct(productData)
           
}
getOneProduct()
function displayOneProduct(product)


{
console.log(product);
mainImg.src=product.image
productTitle.innerHTML=product.title
productPrice.innerHTML=product.price
productDescription.innerHTML=product.description
}
async function getAllProduct()
{
    const response=await fetch('https://fakestoreapi.com/products')
    const productArray=await response.json()
    //console.log(productArray);
    displayProductCards(productArray)
    
}
getAllProduct()
function displayProductCards(productArray)
{

productArray.forEach((product)=>{
    //console.log(productArray);

  //   <!-- Product 1 -->
  //   <div class="col-6 col-md-4 col-lg-3 col-xl-2">
  //     <div class="card h-100">
  //       <img src="https://via.placeholder.com/150" class="card-img-top" alt="Stylish Wallet">
  //       <div class="card-body text-center">
  //         <h6 class="card-title">Stylish Wallet</h6>
  //         <div class="rating mb-1">
  //           <span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
  //         </div>
  //         <p class="text-danger product-price">$19.99</p>
  //         <button class="btn btn-sm btn-outline-primary w-100 product-btn">Add to Cart</button>
  //       </div>
  //     </div>
  //   </div>

  const productCol=document.createElement('div')
  productCol.className='col-6 col-md-4 col-lg-3 col-xl-2'

  const cardDiv=document.createElement('div')
  cardDiv.className='card h-100'
  productCol.appendChild(cardDiv)

  const productImage=document.createElement('img')
  productImage.className='card-img-top'
  productImage.src=product.image
  productImage.alt=product.title
  cardDiv.appendChild(productImage)

  const cardBody=document.createElement('div')
  cardBody.className='card-body text-center'
  cardDiv.appendChild(cardBody)

  const cardTitle=document.createElement('h6')
  cardTitle.className='card-title'
  cardTitle.textContent=product.title
  cardBody.appendChild(cardTitle)

  const productRating=document.createElement('div')
  productRating.className='rating mb-1'
  productRating.innerHTML=` <span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>`
  cardBody.appendChild(productRating)

  const productPrice=document.createElement('p')
  productPrice.className='text-danger product-price'
  productPrice.textContent=`$${product.price}`
  cardBody.appendChild(productPrice)


  const productBtn=document.createElement('button')
  productBtn.className='btn btn-sm btn-outline-primary w-100 product-btn'
  productBtn.textContent='Add To Cart'
  cardBody.appendChild(productBtn)



  document.getElementById('productList').appendChild(productCol)










    

   


    console.log(productCol)


    
});

}
