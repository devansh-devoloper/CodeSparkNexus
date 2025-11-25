import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import CodeBlock from "./CodeBlock";
import heroBg from "@assets/generated_images/dark_futuristic_code_editor_background_with_glowing_syntax_highlighting.png";

export default function Hero() {
  const heroCode = `function levelUp() {
  const skills = ["React", "TypeScript", "UI/UX"];
  const experience = Infinity;
  
  return skills.map(skill => {
    return \`Mastering \${skill}...\`;
  });
}`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Cyberpunk Code Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/20">
            <Terminal className="w-4 h-4" />
            <span>v2.0.0 is live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/50 text-glow">
            Code. Create. <br/>
            <span className="text-primary">Conquer.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            Master the art of programming through interactive challenges, 
            real-world projects, and a community of passionate developers.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/games">
              <Button size="lg" className="h-12 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(88,166,255,0.3)] transition-all hover:scale-105">
                Start Coding
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary/20 hover:bg-primary/10 hover:text-primary">
                Explore Resources
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>1,204 Online</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>50+ Challenges</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-2xl opacity-20 animate-pulse" />
          <CodeBlock 
            code={heroCode} 
            className="transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-card/80 backdrop-blur-xl border-primary/20" 
          />
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 p-4 bg-secondary/90 backdrop-blur border border-border rounded-lg shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="font-mono text-sm text-green-400">Tests Passed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
