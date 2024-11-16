var names = ["John", "Jane", "Paul", "Jack", "Mike", "Sarah"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);  // Goodbye
  } else {
    helloSpeaker.speak(names[i]);  // Hello
  }
}