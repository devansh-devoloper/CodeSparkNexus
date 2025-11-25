import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RefreshCw, Trophy } from "lucide-react";

const sampleText = "function binarySearch(arr, target) { let left = 0; let right = arr.length - 1; while (left <= right) { const mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; if (arr[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }";

export default function TypingTest() {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [completed, setCompleted] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (!startTime) setStartTime(Date.now());

    setInput(value);

    // Calculate WPM
    const timeElapsed = (Date.now() - (startTime || Date.now())) / 1000 / 60;
    const wordsTyped = value.length / 5;
    const currentWpm = Math.round(wordsTyped / (timeElapsed || 1/60)); // avoid div by zero
    setWpm(currentWpm);

    // Calculate Accuracy
    let correctChars = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === sampleText[i]) correctChars++;
    }
    const currentAccuracy = Math.round((correctChars / value.length) * 100) || 100;
    setAccuracy(currentAccuracy);

    // Check completion
    if (value === sampleText) {
      setCompleted(true);
    }
  };

  const resetGame = () => {
    setInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setCompleted(false);
  };

  return (
    <div className="space-y-6 w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="p-4 text-center bg-secondary/30 border-primary/20">
          <div className="text-sm text-muted-foreground mb-1">WPM</div>
          <div className="text-2xl font-mono font-bold text-primary">{wpm}</div>
        </Card>
        <Card className="p-4 text-center bg-secondary/30 border-primary/20">
          <div className="text-sm text-muted-foreground mb-1">Accuracy</div>
          <div className="text-2xl font-mono font-bold text-green-500">{accuracy}%</div>
        </Card>
        <Card className="p-4 text-center bg-secondary/30 border-primary/20">
          <div className="text-sm text-muted-foreground mb-1">Progress</div>
          <div className="text-2xl font-mono font-bold text-blue-400">
            {Math.round((input.length / sampleText.length) * 100)}%
          </div>
        </Card>
      </div>

      <div className="relative font-mono text-lg leading-relaxed p-6 bg-card border border-border rounded-lg shadow-inner min-h-[200px]">
        {/* Background Text (Ghost) */}
        <div className="absolute inset-0 p-6 pointer-events-none text-muted-foreground/30 select-none break-words whitespace-pre-wrap">
          {sampleText}
        </div>
        
        {/* Input Overlay */}
        <textarea
          value={input}
          onChange={handleInput}
          disabled={completed}
          className="w-full h-full min-h-[200px] bg-transparent border-none outline-none resize-none text-transparent caret-primary font-mono p-0 relative z-10 focus:ring-0 selection:bg-primary/20"
          spellCheck={false}
          autoFocus
        />
        
        {/* Rendered Colored Text */}
        <div className="absolute inset-0 p-6 pointer-events-none break-words whitespace-pre-wrap z-0">
          {sampleText.split('').map((char, index) => {
            let color = "text-muted-foreground/30";
            if (index < input.length) {
              color = input[index] === char ? "text-green-400" : "text-red-400 bg-red-900/20";
            }
            return <span key={index} className={color}>{char}</span>;
          })}
        </div>
      </div>

      {completed && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 p-6 bg-green-500/10 rounded-lg border border-green-500/30"
        >
          <div className="flex items-center gap-2 text-green-400 text-xl font-bold">
            <Trophy className="w-6 h-6" />
            Challenge Completed!
          </div>
          <Button onClick={resetGame} variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/20">
            <RefreshCw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
        </motion.div>
      )}

      {!completed && (
        <div className="flex justify-center">
          <Button variant="ghost" onClick={resetGame} className="text-muted-foreground hover:text-primary">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      )}
    </div>
  );
}
