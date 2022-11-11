const functionForFindDefferenceBetwenTwoDates = (day, month, year, dayOld, monthOld, yearOld) => {
  const dateToday = `${month}/${day}/${year}`;
  const dateOld = `${monthOld}/${dayOld}/${yearOld}`;
  const date1 = new Date(dateToday);
  const date2 = new Date(dateOld);
  const diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}

export default functionForFindDefferenceBetwenTwoDates;