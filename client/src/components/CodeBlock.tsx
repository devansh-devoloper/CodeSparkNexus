import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ 
  code, 
  language = "javascript", 
  className,
  showLineNumbers = true 
}: CodeBlockProps) {
  const lines = code.trim().split('\n');

  return (
    <div className={cn(
      "relative rounded-lg overflow-hidden bg-[#0d1117] border border-border font-mono text-sm shadow-xl",
      className
    )}>
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-border">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-auto text-xs text-muted-foreground opacity-50">{language}</span>
      </div>
      
      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, i) => (
              <motion.tr 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {showLineNumbers && (
                  <td className="pr-4 text-right select-none text-muted-foreground/30 w-[1%] whitespace-nowrap">
                    {i + 1}
                  </td>
                )}
                <td className="whitespace-pre text-foreground/90 font-fira">
                  <span dangerouslySetInnerHTML={{ 
                    __html: highlightSyntax(line) 
                  }} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Simple mock syntax highlighter for visual effect
function highlightSyntax(line: string): string {
  return line
    .replace(/(const|let|var|function|return|import|from|export|default|class|interface)/g, '<span class="text-[#ff7b72]">$1</span>')
    .replace(/('.*?'|".*?")/g, '<span class="text-[#a5d6ff]">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="text-[#8b949e] italic">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="text-[#79c0ff]">$1</span>')
    .replace(/([A-Z][a-zA-Z0-9]*)/g, '<span class="text-[#d2a8ff]">$1</span>')
    .replace(/({|}|\[|\]|\(|\))/g, '<span class="text-[#79c0ff]">$1</span>');
}
