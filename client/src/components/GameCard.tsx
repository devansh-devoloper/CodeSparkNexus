import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface GameCardProps {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  icon: React.ReactNode;
  playCount?: number;
  onPlay: () => void;
  className?: string;
}

export default function GameCard({
  title,
  description,
  difficulty,
  icon,
  playCount = 0,
  onPlay,
  className
}: GameCardProps) {
  const difficultyColor = {
    Easy: "bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20",
    Medium: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20",
    Hard: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20"
  };

  return (
    <Card className={cn("group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(88,166,255,0.1)] bg-card/50", className)}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <Badge variant="outline" className={cn("font-mono transition-colors", difficultyColor[difficulty])}>
            {difficulty}
          </Badge>
        </div>
        <CardTitle className="font-mono text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Trophy className="w-4 h-4" />
          <span>{playCount.toLocaleString()} players</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onPlay} className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <Play className="w-4 h-4 mr-2" />
          Start Challenge
        </Button>
      </CardFooter>
    </Card>
  );
}
