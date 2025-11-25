import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GameCard from "@/components/GameCard";
import { Code2, Brain, Keyboard, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: <Keyboard className="w-6 h-6 text-primary" />,
      title: "Speed Coding",
      description: "Test your typing speed and accuracy with real code snippets."
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: "Logic Puzzles",
      description: "Solve algorithmic challenges to sharpen your problem-solving skills."
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: "Leaderboards",
      description: "Compete with other developers and climb the global rankings."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        {/* Features Section */}
        <section className="py-24 border-y border-border/50 bg-card/30">
          <div className="container px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold font-mono mb-4">Level Up Your Skills</h2>
              <p className="text-muted-foreground">
                Choose your path and master different aspects of software development through interactive gameplay.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-secondary/20 border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="mb-4 p-3 rounded-lg bg-background w-fit group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-mono">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Challenge Section */}
        <section className="py-24 container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold font-mono mb-4 flex items-center gap-3">
                <Code2 className="w-8 h-8 text-primary" />
                Featured Challenges
              </h2>
              <p className="text-muted-foreground">Top rated challenges this week</p>
            </div>
            <button onClick={() => setLocation('/games')} className="text-primary hover:underline font-mono">
              View All Challenges &rarr;
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GameCard 
              title="JS Syntax Sprint"
              description="Race against time to type correct JavaScript syntax."
              difficulty="Easy"
              icon={<Keyboard className="w-6 h-6" />}
              playCount={1250}
              onPlay={() => setLocation('/games')}
            />
            <GameCard 
              title="Algorithm Master"
              description="Solve complex logic puzzles using optimal algorithms."
              difficulty="Hard"
              icon={<Brain className="w-6 h-6" />}
              playCount={850}
              onPlay={() => setLocation('/games')}
            />
             <GameCard 
              title="CSS Grid Garden"
              description="Master CSS grid layout with visual challenges."
              difficulty="Medium"
              icon={<Code2 className="w-6 h-6" />}
              playCount={2100}
              onPlay={() => setLocation('/games')}
            />
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 bg-gradient-to-b from-secondary/20 to-background border-t border-border">
          <div className="container px-4 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-mono mb-6">Join the Community</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest coding challenges, tutorials, and developer news delivered straight to your inbox.
            </p>
            <form className="flex gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-background border border-border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
