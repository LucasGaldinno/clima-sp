fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=S%C3%A3o%20Paulo&appid=6ee3dabf6902a2c892a6adfab2127c8f')
.then(response => response.json())
.then(data => {
  let medidor = document.getElementById('tempmax')
  medidor.innerHTML = (data.main.temp_max)

  let medidor2 = document.getElementById('tempmin')
  medidor2.innerHTML = (data.main.temp_min)

  let medidor3 = document.getElementById('temp')
  medidor3.innerHTML = (data.main.temp)

  let title = document.getElementById('name')
  title.innerHTML = (data.name)

  let medidor4 = document.getElementById('sensacao')
  medidor4.innerHTML = (data.main.feels_like)
  
  console.log(data)

})