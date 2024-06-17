const verbs = [
    { base: "become", v2: "became", v3: "become", hebrew: "להפוך" },
    { base: "begin", v2: "began", v3: "begun", hebrew: "להתחיל" },
    { base: "break", v2: "broke", v3: "broken", hebrew: "לשבור" },
    { base: "bring", v2: "brought", v3: "brought", hebrew: "להביא" },
    { base: "build", v2: "built", v3: "built", hebrew: "לבנות" },
    { base: "buy", v2: "bought", v3: "bought", hebrew: "לקנות" },
    { base: "catch", v2: "caught", v3: "caught", hebrew: "לתפוס" },
    { base: "choose", v2: "chose", v3: "chosen", hebrew: "לבחור" },
    { base: "come", v2: "came", v3: "come", hebrew: "לבוא" },
    { base: "cost", v2: "cost", v3: "cost", hebrew: "לעלות" },
    { base: "do", v2: "did", v3: "done", hebrew: "לעשות" },
    { base: "drink", v2: "drank", v3: "drunk", hebrew: "לשתות" },
    { base: "drive", v2: "drove", v3: "driven", hebrew: "לנהוג" },
    { base: "eat", v2: "ate", v3: "eaten", hebrew: "לאכול" },
    { base: "find", v2: "found", v3: "found", hebrew: "למצוא" },
    { base: "fly", v2: "flew", v3: "flown", hebrew: "לטוס" },
    { base: "forget", v2: "forgot", v3: "forgotten", hebrew: "לשכוח" },
    { base: "get", v2: "got", v3: "gotten", hebrew: "לקבל" },
    { base: "give", v2: "gave", v3: "given", hebrew: "לתת" },
    { base: "go", v2: "went", v3: "gone", hebrew: "ללכת" }
];
function showAnswers() {
    if (currentVerb) {
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.innerText = `Correct answers are: V2 - ${currentVerb.v2}, V3 - ${currentVerb.v3}, Hebrew - ${currentVerb.hebrew}`;
        feedbackElement.style.color = 'black'; // Reset color in case it was set to red/green from previous checks
    }
}

let usedVerbs = [];

function getRandomVerb() {
    if (usedVerbs.length === verbs.length) {
        usedVerbs = [];
    }

    let randomIndex;
    let randomVerb;
    do {
        randomIndex = Math.floor(Math.random() * verbs.length);
        randomVerb = verbs[randomIndex];
    } while (usedVerbs.includes(randomVerb));

    usedVerbs.push(randomVerb);
    return randomVerb;
}

let currentVerb = null;

function nextQuestion() {
    currentVerb = getRandomVerb();
    document.getElementById('question').innerText = `What is the V2, V3, and Hebrew translation of the verb "${currentVerb.base}"?`;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim();
    const answerParts = answer.split(',');
    if (answerParts.length !== 3) {
        document.getElementById('feedback').innerText = 'Please enter the V2, V3, and Hebrew translation separated by commas.';
        return;
    }

    const [v2, v3, hebrew] = answerParts;
    if (v2 === currentVerb.v2 && v3 === currentVerb.v3 && hebrew === currentVerb.hebrew) {
        document.getElementById('feedback').innerText = 'Correct!';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').innerText = `Incorrect! The correct answers are: V2 - ${currentVerb.v2}, V3 - ${currentVerb.v3}, Hebrew - ${currentVerb.hebrew}`;
        document.getElementById('feedback').style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', nextQuestion);
