fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=S%C3%A3o%20Paulo&appid=6ee3dabf6902a2c892a6adfab2127c8f')
.then(response => response.json())
.then(data => {
  let element = document.getElementById('tempmax')
  element.innerHTML = (data.main.temp_max)

  let element1 = document.getElementById('tempmin')
  element1.innerHTML = (data.main.temp_min)

  let element2 = document.getElementById('temp')
  element2.innerHTML = (data.main.temp)

  let element3 = document.getElementById('name')
  element3.innerHTML = (data.name)

  let element4 = document.getElementById('sensacao')
  element4.innerHTML = (data.main.feels_like)
  
  console.log(data)

})
.catch(err=>console.log(err))