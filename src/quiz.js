class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
    // 2. getQuestion()
    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    // 3. moveToNextQuestion()
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }
    // 4. shuffleQuestions()
    shuffleQuestions() {
        this.questions.sort(() => Math.random() - 0.5);
    }
    // 5. checkAnswer(answer)
    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++;
        }
    }
    // 6. hasEnded()
    hasEnded() {
        return this.currentQuestionIndex === this.questions.length;
    }

    // 7. filterQuestionsByDifficulty(difficulty)
    filterQuestionsByDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter(question => question.difficulty === difficulty);
        }
    }

    // 8. averageDifficulty()
    averageDifficulty() {
        const sum = this.questions.reduce((acc, question) => acc + question.difficulty, 0);
        return sum / this.questions.length;
    }
}