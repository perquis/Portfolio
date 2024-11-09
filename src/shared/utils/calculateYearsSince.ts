export function calculateYearsSince(dateString: string): number {
  const startDate = new Date(dateString);
  const currentDate = new Date();

  const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  const monthDifference = currentDate.getMonth() - startDate.getMonth();
  const dayDifference = currentDate.getDate() - startDate.getDate();

  // Adjust the year difference if the current date is before the start date in the year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    return yearsDifference - 1;
  }

  return yearsDifference;
}
