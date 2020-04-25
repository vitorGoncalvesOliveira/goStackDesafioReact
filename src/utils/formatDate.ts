const formatDate = (date: Date): string => {
  const data = new Date(date);
  return Intl.DateTimeFormat('pt-br').format(data);
};

export default formatDate;
