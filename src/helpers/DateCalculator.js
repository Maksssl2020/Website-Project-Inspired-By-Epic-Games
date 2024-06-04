export function calcElapsedDays(date) {
  const publicationDate = new Date(Date.parse(date));
  const today = new Date();
  const differenceInTime = today.getTime() - publicationDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return `${differenceInDays}D AGO`;
}

export function calcSaleEndDate() {
  let now = new Date();

  let day = now.getDate() + 7;
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  return `${day} / ${month} / ${year} at 08:00 PM`;
}
