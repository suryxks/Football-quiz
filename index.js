var readlineSync = require('readline-sync');
const chalk = require('chalk');
//intial score and highest scores
var score = 0;
var highScores = [{
        name: "surya",
        score: 6
    },
    {
        name: "amar",
        score: 3
    }
];
//getting name of the user


var userName = readlineSync.question(chalk.bgMagentaBright("What is your name? "));
console.log(chalk.bgRed("welcome " + userName + " Let's test your Football knowledge"));

players = ['sunil chetri', 'Cristiano ronaldo', 'Messi', 'Alli Daei'],
    index = readlineSync.keyInSelect(players, 'Which player has more international goals?');
if (index === 3) {
    score++;
    console.log(chalk.green("you are right\n" + `your score:${score}`));
} else {
    console.log(chalk.red("sorry it's wrong better luck for next question\n" + `your score:${score}`));
}


//function for asking questions and checking answers
function checkQuestionAndAnswer(Question, answer) {
    var ans = readlineSync.question(chalk.bgYellow(Question));
    if (ans.toLowerCase() === answer) {
        score++;
        console.log(chalk.green("you are right\n" + `your score:${score}`));
    } else {
        console.log(chalk.red("You are wrong " + "your score:" + score));
    }
};

checkQuestionAndAnswer("which player has won most Ballon d'or? ", "messi");
checkQuestionAndAnswer("who is captain of INDIAN football team? ", "sunil chetri");
checkQuestionAndAnswer("Which player has won most fifia world cups? ", "pele");
checkQuestionAndAnswer("which country won the latest fifa world cup? ", "france");
checkQuestionAndAnswer("which country won the latest euro cup ? ", "italy");

//function for checking highScores
function checkForHighscore(score) {
    if (score >= highScores[0].score || score >= highScores[1].score) {
        console.log(chalk.bgYellowBright("Congratulations you have got a highscre please send me a screenshot so that i can update the highScores"));
    } else {
        console.log(chalk.bgBlueBright("Highscores: \n" + `1.Name:${highScores[0].name}` + '\n' + `score:${highScores[0].score}\n`));
        console.log(chalk.bgBlueBright(`2.Name:${highScores[1].name}` + '\n' + `score:${highScores[1].score}\n`));

    }

}
checkForHighscore(score);