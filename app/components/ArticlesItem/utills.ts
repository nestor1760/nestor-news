export function getCorrectDateFormat(date: string): string {
  const defDate = new Date(date);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = String(defDate.getDate()).padStart(2, '0');
  const month = months[defDate.getMonth()];
  const year = defDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate
}