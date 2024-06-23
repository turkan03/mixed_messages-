inspMessages = () => {
  let messageNum = Math.floor(Math.random() * 3);

  switch (messageNum) {
    case 0:
      console.log(
        "Perfection is notattainable, but if we chase perfection we can catch excekkence."
      );
      break;
    case 1:
      console.log("Believe you can and you're halfway there.");
      break;
    case 2:
      console.log("Happiness is not by chance, but by choice.");
      break;
    default:
      console.log("Choose correct number!");
  }
};

inspMessages();
