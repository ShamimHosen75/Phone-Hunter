const searchBrand = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url) 
        .then (res => res.json())
        .then (data => showPhone(data));
};

const showPhone = (data) => {
    console.log(data.status);
    const phoneContainer =document.getElementById("phone-container");
    phoneContainer.innerHTML= '';
    if(data.status === false){
        phoneContainer.innerHTML=`<h2 class='text-center' style='margin: 0 auto'> No Result Found</h2>`;
    }
    const phone = data.data;
    console.log(phone);
    const first20Data = phone.slice(0, 20);
    for (const phone of first20Data){
        const div =document.createElement('div');


div.classList.add('col-lg-4');
div.classList.add('mb-2');
div.innerHTML = `
    <div class="card border-primary p-3 border bg-light gy-5 text-center style="width: 14rem;">
        <img src="${phone.image}" style="max-width: 75%;" class="card-img-top mx-auto" alt="...">
    <div class="card-body border-0">
       <h5 class="card-title"> <b>Brand:</b> ${phone.brand}</h5>
        <p class="card-text"><b>Model:</b> ${phone.phone_name}</p>
        <button onclick="seeDetailsBtn('${phone.slug}')" 
            class="btn btn-danger text-white">Details</button>
      </div>
  </div>
    `;
    phoneContainer.appendChild(div);
    }
};

// See Details Button with API Data Loaded
const seeDetailsBtn = (slug) => {
    // seeDetailsBtn.innerHTML ="";
    const url =`https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch (url)
            .then (res => res.json())
            .then (data =>seeDetailsSection(data.data));
    console.log(url);
}

// See Details Result 
const seeDetailsSection =(allinfo) => {
    console.log(allinfo)
    const img = allinfo.image
    const detailsContainer =document.getElementById("details-container");
    detailsContainer.innerHTML='';
    const div = document.createElement('div');
    div.classList.add('col-12');
    div.classList.add('mb-2');
    div.innerHTML =`
    <div class="card border-info m-3>
       
    <div class=card-body>
    <img src="${img}" style="width-14rem"; 
    class="card-img-top w-50 mx-auto m-3">
        <h5 class="card-title">${allinfo.name}</h5>
        <h6 class="card-text"><b>Brand:</b> ${allinfo.brand}</h6>
        <p class="card-text"><b>Release Date:</b>${allinfo.releaseDate? allinfo.releaseDate: "Sorry, we didn't find the Release date"}</p>
        <h4> Main Features </h4>
        <p class="card-text"><b>Sensors:</b>${allinfo.mainFeatures.sensors? allinfo.mainFeatures.sensors: "Sorry, we didn't find the Sensors"}</p>
        <p class="card-text"><b>Chipset:</b>${allinfo.mainFeatures.chipSet? allinfo.mainFeatures.chipSet: "Sorry, we didn't find the Chip Set"}</p>
        <p class="card-text"><b>Display Size:</b> ${allinfo.mainFeatures.displaySize}</p>
        <p class="card-text"><b>Memory:</b> ${allinfo.mainFeatures.memory}</p>
        <p class="card-text"><b>Storage:</b> ${allinfo.mainFeatures.storage}</p>
        <h4> Others Information </h4>
        <p class="card-text"><b>Bluetooth:</b>${allinfo.others.Bluetooth? allinfo.others.Bluetooth: "Sorry, we didn't find the Bluetooth"}</p>
        <p class="card-text"><b>GPS:</b>${allinfo.others.GPS? allinfo.others.GPS: "Sorry, we didn't find the GPS"}</p>
        <p class="card-text"><b>NFC:</b>${allinfo.others.NFC? allinfo.others.NFC: "Sorry, we didn't find the NFC"}</p>
        <p class="card-text"><b>Radio:</b>${allinfo.others.Radio? allinfo.others.Radio: "Sorry, we didn't find the Radio"}</p>
        <p class="card-text"><b>USB:</b>${allinfo.others.USB? allinfo.others.USB: "Sorry, we didn't find the USB"}</p>
        <p class="card-text"><b>WLAN:</b>${allinfo.others.WLAN? allinfo.others.WLAN: "Sorry, we didn't find the WLAN"}</p>
     </div>
    </div>
    `;
    detailsContainer.appendChild(div);

}