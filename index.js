const apiKey = "8bd3baf81eb9456a824141703232712"

const searchBox = document.querySelector(".search-bar")
const searchBtn = document.querySelector(".search-button")

getWeather("Red Wing")

function getWeather(cityValue) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityValue}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.getElementById("location").innerHTML = data.location.name
      document.getElementById(
        "temperature"
      ).innerHTML = `${data.current.temp_f} °F`
      document.getElementById("condition").innerHTML =
        data.current.condition.text
      document.getElementById("condition-icon").src =
        data.current.condition.icon
    })
    .catch((error) => {
      console.log(error)
    })
}

searchBtn.addEventListener("click", () => {
  getWeather(searchBox.value)
})

searchBox.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    getWeather(searchBox.value)
  }
})
