//Take html variable into js using query selector
var button =document.querySelector('#btn');
var userinput= document.querySelector('#input-box');
var temperature= document.querySelector('.temp');
var humidity= document.querySelector('.humid');
var windspeed= document.querySelector('.wind');
var city= document.querySelector('.cityname');
var pic =document.querySelector('.cloud-pic');
var feelslike= document.querySelector('.feels');
var description= document.querySelector('.des');
var coun = document.querySelector('.country')
var hightemp = document.querySelector('.max-temp')
var lowtemp = document.querySelector('.min-temp')
var visib = document.querySelector('.visibility')
var srise = document.querySelector('.sunrise')
var sset = document.querySelector('.sunset')

apikey ="0bd0cb156a4190d28ec7664fd980a5e8";

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?&q='+userinput.value+'&appid='+apikey)
    .then(res => res.json())
    .then(data => {
        
        var tempature = data['main']['temp']
        var finalhumid= data['main']['humidity']
        var speed = data['wind']['speed'] 
        var cityn = data['name']
        var weathericon = data['weather']['0']['icon']
        var feels = data['main']['feels_like']
        var place = data['sys']['country']
        var temphigh = data['main']['temp_max']
        var templow = data['main']['temp_min']
        var sunrise = data['sys']['sunrise']
        var sunset = data['sys']['sunset']
        var visibi = data['visibility']
        var skycondition = data['weather']['0']['description']

        city.innerHTML = cityn;
        temperature.innerHTML = `<span>${conversion(tempature) }° C<span>`;
        humidity.innerHTML= `<span>${finalhumid} %<span>`;
        windspeed.innerHTML= `<span>${speed} km/h<span>`;
        pic.src= `http://openweathermap.org/img/wn/${weathericon}@2x.png`;
        feelslike.innerHTML= `<span> Feels Like: ${conversion(feels)}° C<span>`; 
        description.innerHTML= `<span>Sky Condition : ${skycondition}<span>`;
        coun.innerHTML= `<span>COUNTRY : ${place}<span>`;
        hightemp.innerHTML= `<span>MAX-TEMP : ${conversion(temphigh)}° C<span>`;
        lowtemp.innerHTML= `<span>MIN-TEMP : ${conversion(templow)}° C<span>`;
        srise.innerHTML= `<span>SUNRISE TIME :  ${timestamp(sunrise)}<span>`;
        sset.innerHTML= `<span>SUNSET TIME :  ${timestamp(sunset)}<span>`;
        visib.innerHTML= `<span>VISIBILITY : ${distance(visibi)} KM<span>`;

    })
})


//function for converting kalvin into celcius
function conversion(val){
    return (val - 273).toFixed(2)
}

//funtion for converting date and time 
function timestamp(t){
    const unixEpochTimeMS = t * 1000;
    const d = new Date(unixEpochTimeMS);
    const strDate = d.toLocaleString();
    return strDate; 
}

//function for converting meter into km

function distance(meter) {
    const dis = meter/1000;
    return dis;
  }





    

