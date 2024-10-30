console.log("hallo welt");

const gigasecond = (date) => {
  const startTime = date.getTime();
  const endTime = new Date(startTime + 10 ** 12);
  console.log(endTime);
};

gigasecond(new Date(1980, 2));
