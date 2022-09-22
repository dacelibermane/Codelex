export {};

function tidyUpString(str: string) {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  const firstLetterUpper = str[0].toUpperCase();
  return firstLetterUpper + str.substring(1);
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map((mentor) => capitalise(tidyUpString(mentor)));

// let mentorsTidy = mentors.map((mentor) => {
//   const tidyMentor = tidyUpString(mentor);
//   return capitalise(tidyMentor);
// }); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
