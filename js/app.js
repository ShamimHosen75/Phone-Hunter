const searchBrand = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url) 
        .then (res => res.json())
        .then (data => showPhone(data.data));
};

const showPhone = (phone) => {
    console.log(phone);
     const first20Data = phone.slice(0, 20);
    for (const phone of first20Data){
        const phoneContainer =document.getElementById("phone-container");
        const div =document.createElement('div');
        // console.log(phone.brand);


div.classList.add('col-lg-4');
div.classList.add('mb-2');
div.innerHTML = `
    <div class="card border-primary m-3 text-center style="width: 14rem;">
        <img src="${phone.image}" style="width: 16rem;" class="card-img-top img-w-50 mx-auto" alt="...">
    <div class="card-body border-0">
       <h5 class="card-title">Brand:${phone.brand}</h5>
        <p class="card-text">Model:${phone.phone_name}</p>
        <button onclick="moreInfo('${phone.slug}')" 
            class="btn btn-danger text-white">Details</button>
      </div>
  </div>
    `;
    phoneContainer.appendChild(div);
    }
};