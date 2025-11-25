import { Link, useLocation } from "wouter";
import { Code2, Menu, X, Terminal, Cpu, BookOpen, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/", icon: <Code2 className="w-4 h-4" /> },
    { label: "Games", path: "/games", icon: <Terminal className="w-4 h-4" /> },
    { label: "Resources", path: "/resources", icon: <BookOpen className="w-4 h-4" /> },
    { label: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-mono font-bold text-xl text-primary hover:text-primary/80 transition-colors">
          <Cpu className="w-6 h-6" />
          <span>CodeCraft</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                isActive(item.path) ? "text-primary text-glow" : "text-muted-foreground"
              )}>
                {item.icon}
                {item.label}
              </a>
            </Link>
          ))}
          <Button variant="outline" size="sm" className="ml-4 font-mono border-primary/50 hover:bg-primary/10 hover:text-primary">
            Sign In
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px] border-l border-primary/20">
            <div className="flex flex-col gap-6 mt-6">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                  <a className={cn(
                    "flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary",
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  )}>
                    {item.icon}
                    {item.label}
                  </a>
                </Link>
              ))}
              <Button className="w-full mt-4 font-mono" onClick={() => setIsOpen(false)}>
                Sign In
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
