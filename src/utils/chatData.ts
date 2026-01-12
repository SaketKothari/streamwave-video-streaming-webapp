const nameList: string[] = [
  "Michael Scott",
  "Jim Halpert",
  "Pam Beesly",
  "Dwight Schrute",
  "Angela Martin",
  "Oscar Martinez",
  "Kevin Malone",
  "Toby Flenderson",
  "Kelly Kapoor",
  "Ryan Howard",
  "Andy Bernard",
  "Erin Hannon",
  "Phyllis Smith",
  "Stanley Hudson",
  "Creed Bratton",
  "Jan Levinson",
  "Meredith Palmer",
  "Darryl Philbin",
  "Roy Anderson",
  "Karen Filippelli",
];

const messageList: string[] = [
  "That's what she said.",
  "Bears. Beets. Battlestar Galactica.",
  "I'm not superstitious, but I am a little stitious.",
  "Identity theft is not a joke, Jim! Millions of families suffer every year!",
  "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way.",
  "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
  "You miss 100% of the shots you don't take.",
  "I have flaws. What are they? Oh, I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally, I'll hit somebody with my car.",
  "I declare bankruptcy!",
  "I'm not saying I invented the turtleneck, but I was the first person to realize its potential as a tactical garment.",
  "Well, well, well, how the turntables...",
  "You know what they say. Fool me once, strike one. But fool me twice... strike three.",
  "I'm Kelly Kapoor, the business bitch!",
  "It's a simple question. Would you rather have a one-night stand with Jan, or Michael?",
  "I live in a nine-bedroom farmhouse.",
  "I'm not a hero. I'm a high school science teacher.",
  "I'm sorry, do you have some prior commitment? Some hideous skirt convention you have to go to?",
  "I've been involved in a number of cults, both as a leader and a follower. You have more fun as a follower, but you make more money as a leader.",
  "I wish there was a way to know you're in the good old days before you've actually left them.",
  "I want people to be afraid of how much they love me.",
];

export function generateRandomName(): string {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage(): string {
  return messageList[Math.floor(Math.random() * messageList.length)];
}
