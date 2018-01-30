var AIchoice = ['rock', 'paper', 'scissors'];
var rand = Math.floor(Math.random()*3);

var AIscore = 0;
var userScore = 0;

var turns = 1;
while(turns <= 5 && AIscore < 3 && userScore < 3){

var userChoice = prompt('What do you choose?: (R)ock, (P)aper, (S)cissors');

switch (userChoice) {
  case 'R':
  if (rand == 1) {
    alert ('AI picked '+AIchoice[rand]+', YOU LOSE!');
    AIscore++;
  } else if (rand == 2) {
    alert ('AI picked '+AIchoice[rand]+', YOU WIN!');
    userScore++;
  }
  else {
    alert ('AI picked '+AIchoice[rand]+', TIED');
  }
  break;

  case 'P':
  if (rand == 1) {
    alert ('AI picked '+AIchoice[rand]+', TIED');
  } else if (rand == 2) {
    alert ('AI picked '+AIchoice[rand]+', YOU LOSE!');
    AIscore++;
  }
  else {
    alert ('AI picked '+AIchoice[rand]+', YOU WIN!');
    userScore++;
  }
    break;

    case 'S':
    if (rand == 1) {
      alert ('AI picked '+AIchoice[rand]+', YOU WIN!');
      userScore++;
    } else if (rand == 2) {
      alert ('AI picked '+AIchoice[rand]+', TIE');
    }
    else {
      alert ('AI picked '+AIchoice[rand]+', YOU LOSE!');
      AIscore++;
    }
      break;
  }
  turns++;
  alert('AI score: '+AIscore+' User score: '+userScore);
}
if (AIscore > userScore) {
  alert('YOU LOSE');
} else if (userScore > AIscore) {
  alert('YOU WIN');
} else {
  alert('IT WAS A TIE')
}
