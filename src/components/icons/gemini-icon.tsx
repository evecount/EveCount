import { cn } from "@/lib/utils";

export function GeminiIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-sparkles", className)}
    >
      <path d="m12 3-1.9 4.8-4.8 1.9 4.8 1.9L12 16l1.9-4.8 4.8-1.9-4.8-1.9L12 3z" />
      <path d="M5 21v-4" />
      <path d="M3 19h4" />
      <path d="M19 3v4" />
      <path d="M17 5h4" />
    </svg>
  );
}
