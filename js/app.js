const searchBrand = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${(searchText)}`;
    fetch(url) 
        .then (res => res.json())
        .then ((data) => console.log(data));
    // console.log(url);
}
// Load Data 
// const url = `https://openapi.programming-hero.com/api/phones?search=${(searchText)}`;
// fetch(url) {
//     .then (res => res.json())
//     .then (data => displayPhone (data.data));
// }