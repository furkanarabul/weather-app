
let getCity = document.querySelector('#city')
let searchButton = document.querySelector('#city-search')
let cityname = document.querySelector('.city-name');
let degree = document.querySelector('.degree')
let icon = document.querySelector('.icon')
searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    city = (getCity.value);
    fetch(`http://api.weatherapi.com/v1/current.json?key=76b3523dbdd942d6ac7232959200112&q=${city}`).then(response => {
    return response.json();
    }).then(city =>{
    cityname.innerText = (city.location.name)
    let weathericon = city.current.condition.icon
    icon.innerHTML = `<img src="http:${weathericon}">`
    degree.innerText = (city.current.temp_c)
    console.log(city.current.condition.icon);
    console.log(city.current.condition.text);
    //partly cloudy
})
})
//async function fetchCity () {
//    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=76b3523dbdd942d6ac7232959200112&q=${city}`)
//    const posts = await response.json()
//}
//fetchCity();

