const garageSlug = "most-beautiful-garage"
const url = `https://wagon-garage-api.herokuapp.com/${garageSlug}/cars`

// GETTING ALL THE CARS
// 1. fetch all cars from the API
const displayCars = (data) => {
  const carsBox = document.querySelector('.cars-list');
  carsBox.innerHTML = "";
  // 2. For each car, insert some html code
  data.forEach((car) => {
    const carHTML = `<div class="car">
                      <div class="car-image">
                        <img src="http://loremflickr.com/280/280/${car.brand + " " + car.model}" />
                      </div>
                      <div class="car-info">
                        <h4>${car.brand + " " + car.model}</h4>
                        <p><strong>Owner:</strong> ${car.owner}</p>
                        <p><strong>Plate:</strong> ${car.plate}</p>
                      </div>
                    </div>`

    carsBox.insertAdjacentHTML('beforeend', carHTML);
  });
}

const refreshCars = () => {
  fetch(url)
    .then(response => response.json())
    .then(displayCars);
}

const createNewCar = (form) => {
   const newCar = {
    "brand": form.querySelector('#brand').value,
    "model": form.querySelector('#model').value,
    "owner": form.querySelector('#owner').value,
    "plate": form.querySelector('#plate').value
  };

  return newCar;
};

const sendCar = (car) => {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  }

  fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data));
};

const submitCarForm = (event) => {
  // 2. Prevent default behavior of form (refreshes page)
  event.preventDefault();
  // 3. Retrieve data entered by the user
  const newCar = createNewCar(event.currentTarget);
  // 4. Send a POST request to the API
  sendCar(newCar);
  // 5. Refresh the cars list
  refreshCars();
}


export { refreshCars, submitCarForm };
