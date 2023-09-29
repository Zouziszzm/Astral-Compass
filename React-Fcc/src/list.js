export const main = async function() {
  const raw = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
  );
  const processed = raw.json();
  return processed.data.cards[3].card.card.gridElements.infoWithStyle
    .restaurants;
};
