export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false,
  },
];

const showStatus = (books: Object[]): string => {
  let message = "";
  books.forEach((book) => {
    if (book["isRead"]) {
      let message1 = `Already read '${book["title"]}' by ${book["author"]}.\n`;
      return (message += message1);
    }

    if (!book["isRead"]) {
      let message2 = `You still need to read '${book["title"]}' by ${book["author"]}.`;
      return (message += message2);
    }
  });
  return message;
};

console.log(showStatus(library));

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
