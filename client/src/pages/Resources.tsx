import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileCode, ExternalLink } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "React Hooks Deep Dive",
      description: "Master the power of useEffect, useMemo, and custom hooks.",
      type: "Article",
      icon: <FileCode className="w-5 h-5" />,
      tags: ["React", "Advanced"],
      time: "15 min read"
    },
    {
      title: "CSS Grid vs Flexbox",
      description: "When to use which layout model for modern web design.",
      type: "Video",
      icon: <Video className="w-5 h-5" />,
      tags: ["CSS", "Layout"],
      time: "12 min watch"
    },
    {
      title: "TypeScript Generic Types",
      description: "Understanding generics to write reusable type-safe code.",
      type: "Tutorial",
      icon: <BookOpen className="w-5 h-5" />,
      tags: ["TypeScript", "Basics"],
      time: "20 min read"
    },
    {
      title: "State Management Patterns",
      description: "Comparing Redux, Zustand, and Context API.",
      type: "Article",
      icon: <FileCode className="w-5 h-5" />,
      tags: ["Architecture", "State"],
      time: "25 min read"
    },
    {
      title: "Web Accessibility Guide",
      description: "Building inclusive web applications for everyone.",
      type: "Guide",
      icon: <BookOpen className="w-5 h-5" />,
      tags: ["A11y", "Best Practices"],
      time: "30 min read"
    },
    {
      title: "Next.js App Router",
      description: "Getting started with the new routing paradigm.",
      type: "Video",
      icon: <Video className="w-5 h-5" />,
      tags: ["Next.js", "Fullstack"],
      time: "45 min watch"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 container px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-mono mb-4 text-glow">Developer Resources</h1>
          <p className="text-muted-foreground max-w-2xl">
            Curated tutorials, guides, and articles to help you become a better developer.
            Updated weekly with the latest tech trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <Card key={i} className="bg-card/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-secondary text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="flex items-center gap-1">
                      {resource.icon}
                      {resource.type}
                    </span>
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">{resource.time}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors flex items-center gap-2">
                  {resource.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  {resource.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-primary/5 text-primary/80 font-mono border border-primary/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
