const functionForFindDefferenceBetwenTwoDates = (dayOld, monthOld, yearOld) => {
  let date = new Date().toLocaleDateString();
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, 10);
  const dateToday = `${month}/${day}/${year}`;
  const dateOld = `${monthOld}/${dayOld}/${yearOld}`;
  const date1 = new Date(dateToday);
  const date2 = new Date(dateOld);
  const diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default functionForFindDefferenceBetwenTwoDates;