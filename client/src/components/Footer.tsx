import { Github, Twitter, Linkedin, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card/50 py-12 mt-auto">
      <div className="container px-4 grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono font-bold text-xl text-primary">
            <Code2 className="w-6 h-6" />
            <span>CodeCraft</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Level up your coding skills with interactive challenges and community resources.
          </p>
        </div>
        
        <div>
          <h3 className="font-mono font-bold mb-4 text-foreground">Platform</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/games" className="hover:text-primary transition-colors">Challenges</a></li>
            <li><a href="/resources" className="hover:text-primary transition-colors">Tutorials</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Leaderboard</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono font-bold mb-4 text-foreground">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono font-bold mb-4 text-foreground">Connect</h3>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="container px-4 mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} CodeCraft. All rights reserved.
      </div>
    </footer>
  );
}
