import moment from "moment";

export default function getTotalPrice(updateTime, currentTime, price) {
  const formattedRentalTime = moment(updateTime);
  const formattedCurrentTime = moment(currentTime);

  const deltaTime = formattedCurrentTime.diff(formattedRentalTime);

  const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
  const daysToHours = days * 24;
  const totalTimeRent = (daysToHours + hours) * 60 + mins;
  const discountTime = 20 * 60;

  let totalPrice;
  totalTimeRent >= discountTime
    ? (totalPrice = ((price / 60) * (totalTimeRent / 2)).toFixed(2))
    : (totalPrice = ((price / 60) * totalTimeRent).toFixed(2));

  return totalPrice;
}
