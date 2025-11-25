import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import TypingTest from "@/components/games/TypingTest";
import CodeQuiz from "@/components/games/CodeQuiz";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Keyboard, Brain, Code2, Terminal } from "lucide-react";

export default function Games() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 container px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-mono mb-4 text-glow">Coding Arena</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Put your skills to the test with our interactive coding challenges.
            Select a game below to start playing.
          </p>
        </div>

        {activeGame ? (
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setActiveGame(null)}
              className="mb-6 text-sm text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              ← Back to Games
            </button>
            
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {activeGame === 'typing' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                    <Keyboard className="w-6 h-6 text-primary" />
                    Syntax Sprint
                  </h2>
                  <TypingTest />
                </div>
              )}
              
              {activeGame === 'quiz' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
                    <Brain className="w-6 h-6 text-primary" />
                    Tech Trivia
                  </h2>
                  <CodeQuiz />
                </div>
              )}
            </div>
          </div>
        ) : (
          <Tabs defaultValue="all" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="bg-secondary/50 border border-primary/10">
                <TabsTrigger value="all">All Games</TabsTrigger>
                <TabsTrigger value="speed">Speed</TabsTrigger>
                <TabsTrigger value="logic">Logic</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4">
              <GameCard 
                title="Syntax Sprint"
                description="Test your typing speed with real code snippets. Accuracy matters!"
                difficulty="Easy"
                icon={<Keyboard className="w-6 h-6" />}
                playCount={1543}
                onPlay={() => setActiveGame('typing')}
              />
              <GameCard 
                title="Tech Trivia"
                description="Challenge your knowledge of web development concepts."
                difficulty="Medium"
                icon={<Brain className="w-6 h-6" />}
                playCount={892}
                onPlay={() => setActiveGame('quiz')}
              />
              <GameCard 
                title="Bug Hunter"
                description="Find and fix bugs in broken code blocks. (Coming Soon)"
                difficulty="Hard"
                icon={<Code2 className="w-6 h-6" />}
                playCount={0}
                onPlay={() => {}}
                className="opacity-75 cursor-not-allowed"
              />
            </TabsContent>
            
            <TabsContent value="speed">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <GameCard 
                  title="Syntax Sprint"
                  description="Test your typing speed with real code snippets."
                  difficulty="Easy"
                  icon={<Keyboard className="w-6 h-6" />}
                  playCount={1543}
                  onPlay={() => setActiveGame('typing')}
                />
              </div>
            </TabsContent>

            <TabsContent value="logic">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <GameCard 
                  title="Tech Trivia"
                  description="Challenge your knowledge of web development concepts."
                  difficulty="Medium"
                  icon={<Brain className="w-6 h-6" />}
                  playCount={892}
                  onPlay={() => setActiveGame('quiz')}
                />
              </div>
            </TabsContent>
          </Tabs>
        )}
      </main>

      <Footer />
    </div>
  );
}
