let inputArticle = '';
let cleanedArticle = '';
let numberOfWords = 1;
let inputWordList = [];
let wordCount = [];
let wordList = [];
let showWords = false;
let wordsHtml = '';

createApp()

function createApp() {
    document.getElementById('app').innerHTML = /*html*/`
    <h1 id="title"> Word Counter </h1>
    </br>
    </br>
    <label for="article">Enter article or paragraph:</label><br>
    <input type="text" id="article" oninput='inputArticle=this.value'>
    </br>
    <button onclick="cleanArticle()">Count Words</button>
    <div id="wordsDiv">
    ${showWords?wordsHtml:''}
    </div> 
    `;
}

function cleanArticle() {
    for (let i = 0; i < inputArticle.length; i++) {
        let articleLetter = isLetter(inputArticle[i])

        if(inputArticle[i]===' ') numberOfWords++

        if(articleLetter) cleanedArticle+=inputArticle[i]
    }
    inputWordList=cleanedArticle.split(' ');
    countWords()
}

function isLetter(c) {
    if(c.toLowerCase() != c.toUpperCase()||c === ' ') {
        return true
    } else {
        return false
    }
}

function countWords() {
    for (let j = 0; j < inputWordList.length; j++) {

        if (wordList.includes(inputWordList[j])===false) {
            wordList.push(inputWordList[j])
            let wordIndex = wordList.indexOf(inputWordList[j])
            wordCount[wordIndex]=1
        } else {
            let wordIndex = wordList.indexOf(inputWordList[j])
            wordCount[wordIndex]+=1
        } 
    }
    console.log(wordList, wordCount)
    createWordsHtml()
}

function createWordsHtml() {
    for (let k = 0; k < wordList.length; k++) {
        wordsHtml+=`<div>${wordList[k]} = ${wordCount[k]}</div>`
    }
    showWords=true
    createApp()
}
