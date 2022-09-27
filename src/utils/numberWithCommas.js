const numberWithCommas = (number, unit = 'đ') => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + unit;
};
export default numberWithCommas;
