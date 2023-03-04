// const request = require("request");
// const dotenv = require("dotenv").config();
const num = '3ffd72e667d28b26af78bca8cf35ebbd';
const submButton = document.querySelector('#subButton');

// addEventListeners();


function addEventListeners()
{
    //button is clicked
    submButton.addEventListener('click',(e)=>fetchData(e.target));
}


function fetchData(e)
{
  const cityName = e.parentElement.children[1].value;
  if (cityName==="" || cityName.length<2)
  {
    
  }
  else
  {

  
    //console.log('cityname', cityName);
    // const options = {
    //   url: `http://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${num}`,
    //   method: "GET",
    //   json: true,
    // };
  
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${num}`)
    .then(res=>res.json())
    .then(json=>{
      console.log(json);
      let textMes = "";
      if (json.message == 'city not found')
      {
        textMes = `Sorry, but we do not have that data`;
      }
      else
      {
        const curTemp = json.main.temp;
        const weatherName = json.weather[0].main;
        

        if(weatherName ==="")
        {
          textMes = `Sorry, but we do not have that data`;
        }
        else
        {
          textMes = `The current temp in ${cityName} is ${curTemp} C`;
        }
        
      

      const weatherData = document.querySelector('#weatherData');
      let imgSrc = ''
      if (weatherName==='Clear')
      {
        imgSrc = 'image/sunny.png'
      }
      else if (weatherName==='Clouds')
      {
        imgSrc = 'image/cloud.png'
      }
      else if (weatherName==='Rain')
      {
        imgSrc = 'image/rain.png'
      }
      else if (weatherName==='Snow')
      {
        imgSrc = 'image/snow.png'
      }
  
      if (imgSrc!=="")
      {
        weatherData.innerHTML = '<h1>' + textMes + '</h1>' + '<br>' + '<img src=' + imgSrc + '>';
      }
      else
      {
        weatherData.innerHTML = '<h1>' + textMes + '</h1>';
      }
    }
       
    });
  }
}

addEventListeners();
