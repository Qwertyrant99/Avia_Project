class PopularDestination {
  constructor(from, to, price) {
    this.from = from;
    this.to = to;
    this.price = price;
  }
}

let popularDestinations = [
  new PopularDestination("Warsaw", "Milan", 75),
  new PopularDestination("Warsaw", "London", 98),
  new PopularDestination("Warsaw", "Alicante", 139),
  new PopularDestination("Warsaw", "Madrid", 161),
  new PopularDestination("Warsaw", "Barcelona", 163),
  new PopularDestination("Warsaw", "Amsterdam", 319),
  new PopularDestination("Warsaw", "Lisbon", 330),
  new PopularDestination("Warsaw", "Paris", 400),
  new PopularDestination("Warsaw", "New York", 2089),
  new PopularDestination("Warsaw", "Denpasar-Bali", 2511),
];

function getPopularDestination() {
  const popularDestinationDiv = document.querySelector(
    ".rcmd__box_wrapper_dest"
  );

  for (let i = 0; i <= popularDestinations.length / 2; i++) {
    let firstItem = popularDestinations[i];
    let secondItem = popularDestinations[i + popularDestinations.length / 2];

    let listItem = document.createElement("div");
    listItem.classList.add("rcmd__items_dest");
    listItem.innerHTML = `
        <div class="rcmd__item rcmd__item_dest">
                <div class="rcmd__item_name">${firstItem.from} → ${firstItem.to}</div>
                <div class="rcmd__item_price">from ${firstItem.price} PLN</div>
              </div>
              <div class="rcmd__item rcmd__item_dest">
                <div class="rcmd__item_name">${secondItem.from} → ${secondItem.to}</div>
                <div class="rcmd__item_price">from ${secondItem.price} PLN</div>
              </div>`;
    popularDestinationDiv.append(listItem);
  }
}

getPopularDestination();

class TopAirlines {
  constructor(name, rate) {
    this.name = name;
    this.rate = rate;
  }
}

let airlinesRate = [
  new TopAirlines("Emirates", 4.7),
  new TopAirlines("Qatar Airways", 4.7),
  new TopAirlines("Turkish Airlines", 4.7),
  new TopAirlines("Singapore Airlines", 4.7),
  new TopAirlines("Korean Air", 4.7),
  new TopAirlines("Etihad Airways", 4.6),
  new TopAirlines("Cathay Pacific", 4.5),
  new TopAirlines("Air Astana", 4.5),
  new TopAirlines("Virgin Atlantic Airways", 4.5),
  new TopAirlines("Air New Zealand", 4.5),
];

function getTopAirlines() {
  const topAirlinesElem = document.querySelector(".rcmd__box_wrapper_comp");

  airlinesRate.forEach((item) => {
    let listItem = document.createElement("div");
    listItem.classList.add("rcmd__item");
    // listItem.classList.add("rcmd__item_comp");
    listItem.innerHTML = `
    <a href="#" class="rcmd__item_name">${item.name}</a>
                <div class="rcmd__item_rate">${item.rate}</div>`;
    topAirlinesElem.append(listItem);
  });
}

getTopAirlines();
