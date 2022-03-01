const searchBrand = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search= ${(searchText)}`;
    fetch(url) 
        .then (res => res.json())
        .then ((data) => showPhone(data.data.slice(0,20)));
};

const showPhone = (phones) => {
    for (const phone of phones){
     const phoneContainer =document.getElementById("phone-container");

     const div =document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card p-3 text-center shadow-lg">
        <img src="${phone.images}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body border-0">
            <h5 class="card-title">Brand:${phone.brand}</h5>
            <p class="card-text">Model:${phone.phone_name}</p>
            <button onclick="moreInfo('${phone.slug}')" 
                class="btn btn-info text-white">Details</button>
        </div>
    </div>
        `;
    phoneContainer.appendchild(div);

    }
};
