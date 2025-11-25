import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: 1,
    question: "What is the output of '2' + 2 in JavaScript?",
    options: ["4", "'22'", "NaN", "Error"],
    correct: 1
  },
  {
    id: 2,
    question: "Which method creates a new array with the results of calling a function for every array element?",
    options: ["filter()", "forEach()", "map()", "reduce()"],
    correct: 2
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correct: 2
  },
  {
    id: 4,
    question: "Which hook is used to perform side effects in React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correct: 1
  }
];

export default function CodeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <Card className="w-full max-w-lg mx-auto text-center p-8 bg-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl font-mono text-primary">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-6xl font-bold text-white mb-4">
            {Math.round((score / questions.length) * 100)}%
          </div>
          <p className="text-muted-foreground">
            You answered {score} out of {questions.length} questions correctly.
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={resetQuiz} className="w-full max-w-xs">Try Again</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/50 border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground font-mono">Question {currentQuestion + 1}/{questions.length}</span>
          <span className="text-sm text-primary font-mono">Score: {score}</span>
        </div>
        <CardTitle className="text-xl md:text-2xl">{questions[currentQuestion].question}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {questions[currentQuestion].options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = index === questions[currentQuestion].correct;
          const showCorrect = isAnswered && isCorrect;
          const showWrong = isAnswered && isSelected && !isCorrect;

          return (
            <Button
              key={index}
              variant="outline"
              className={cn(
                "h-auto p-4 justify-start text-left text-lg font-normal relative overflow-hidden transition-all",
                showCorrect && "border-green-500 bg-green-500/10 text-green-400 hover:bg-green-500/10 hover:text-green-400",
                showWrong && "border-red-500 bg-red-500/10 text-red-400 hover:bg-red-500/10 hover:text-red-400",
                !isAnswered && "hover:border-primary/50 hover:bg-primary/5"
              )}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
            >
              <span className="mr-4 text-muted-foreground font-mono opacity-50">{String.fromCharCode(65 + index)}.</span>
              {option}
              {showCorrect && <CheckCircle2 className="absolute right-4 w-5 h-5 text-green-500" />}
              {showWrong && <XCircle className="absolute right-4 w-5 h-5 text-red-500" />}
            </Button>
          );
        })}
      </CardContent>
      <CardFooter className="justify-end">
        <Button 
          onClick={handleNext} 
          disabled={!isAnswered}
          className="w-full sm:w-auto"
        >
          {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </Button>
      </CardFooter>
    </Card>
  );
}
