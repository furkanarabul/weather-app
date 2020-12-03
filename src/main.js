
let getCity = document.querySelector('#city')
let searchButton = document.querySelector('#city-search')
let cityname = document.querySelector('.city-name');
let degree = document.querySelector('.degree')
let icon = document.querySelector('.icon')
let desc = document.querySelector('.desc')
searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    city = (getCity.value);
    fetch(`https://api.weatherapi.com/v1/current.json?key=76b3523dbdd942d6ac7232959200112&q=${city}`).then(response => {
    return response.json();
    }).then(city =>{
    cityname.innerText = (city.location.name)
    let weathericon = city.current.condition.icon
    icon.innerHTML = `<img src="http:${weathericon}">`
    desc.innerHTML  = city.current.condition.text
    degree.innerText = (city.current.temp_c)
    //partly cloudy
})
})
//async function fetchCity () {
//    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=76b3523dbdd942d6ac7232959200112&q=${city}`)
//    const posts = await response.json()
//}
//fetchCity();

