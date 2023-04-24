var youScore=0;
var cpuScore=0;
var winnerParagraph= document.getElementById("winner");
var userScoreLine=document.getElementById('user-scoreline');
var cpuScoreLine=document.getElementById('cpu-scoreline');

function updateScorelines() {
    userScoreLine.textContent = "Score: "+youScore;
    cpuScoreLine.textContent = "Score: "+cpuScore;
}



function generateCpuChoice() {
    const min = 6;
    const max = 15687;
     return (Math.floor(Math.random() * (max - min + 1)) + min)%3;
}
function textToNumber(num){
    if(num==0)
        return "👊🏼";
    if(num==1)
        return "✋🏼";
    else
        return "✌🏼";
}

function updateHtmlParagraphes(cpuText, userText) {
    const cpuParagraph = document.getElementById("cpu-text");
    cpuParagraph.textContent += 'CPU: ' + cpuText + " ";
    const userParagraph = document.getElementById("user-text");
    userParagraph.textContent += 'You: ' + userText + " ";
}

function updateScore(scoreValue) {
    if(scoreValue==="w")
        youScore++;
    if(scoreValue==="l")
        cpuScore++;
}

function whoWins(userChoiceNumber, cpuChoiceRandNumber) {
    if(userChoiceNumber==cpuChoiceRandNumber){
        winnerParagraph.textContent+='draw';
        return "d";
    }
    if(userChoiceNumber==0){
        if(cpuChoiceRandNumber==1){
            winnerParagraph.textContent='CPU wins';
            return "l";
        }
        if(cpuChoiceRandNumber==2){
            winnerParagraph.textContent='you win';
            return 'w';
        }

    }
    if(userChoiceNumber==1){
        if(cpuChoiceRandNumber==2){
            winnerParagraph.textContent='CPU wins';
            return "l";
        }
        if(cpuChoiceRandNumber==0){
            winnerParagraph.textContent='you win';
            return 'w';
        }
    }
    if(userChoiceNumber==2){
        if(cpuChoiceRandNumber==0){
            winnerParagraph.textContent='CPU wins';
            return "l";
        }
        if(cpuChoiceRandNumber==1){
            winnerParagraph.textContent='you win';
            return 'w';
        }
    }
}

function resetToDefults() {
    winnerParagraph.textContent='';
    const cpuParagraph = document.getElementById("cpu-text");
    const userParagraph = document.getElementById("user-text");
    cpuParagraph.textContent='';
    userParagraph.textContent='';
}

function challenge(userChoiceNumber) {
    resetToDefults();
    const cpuChoiceRandNumber = generateCpuChoice();
    let cpuText, userText;
    cpuText = textToNumber(cpuChoiceRandNumber);
    userText = textToNumber(userChoiceNumber);
    updateHtmlParagraphes(cpuText, userText);
    let scoreLetter=whoWins(userChoiceNumber,cpuChoiceRandNumber);
    updateScore(scoreLetter);
    updateScorelines();
}













