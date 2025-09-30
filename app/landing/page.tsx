import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mic,
  MessageSquareText,
  Bot,
  LayoutPanelTop,
  Rocket,
  Github,
  Chrome,
  Code,
  Cpu,
  Boxes,
  Settings2,
  CheckCircle2,
  ArrowRight,
  CalendarClock,
} from "lucide-react";
import Link from "next/link";

const REPO_URL = "https://github.com/PCoder23/leetcode-coach-extension";

function Hero() {
  return (
    <header className="border-b border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          <Badge variant="outline" className="px-3 py-1 text-xs">
            LeetCode Interview Coach
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            Practice coding interviews with AI feedback — right on LeetCode
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Record your explanation, get an automatic transcript, and receive
            structured AI feedback on clarity, approach, and code quality.
            Upgrade your interview prep with actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <a href={REPO_URL} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                View on GitHub
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#install">Installation (Dev Mode)</a>
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Works on LeetCode problems
            </div>
            <div className="hidden md:block text-border">|</div>
            <div className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-primary" />
              Saves time with focused feedback
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Features() {
  const items = [
    {
      icon: Mic,
      title: "Voice Recording",
      desc: "Capture your thought process as you solve problems.",
    },
    {
      icon: MessageSquareText,
      title: "Transcript Generation",
      desc: "Auto-generated transcript of your explanation.",
    },
    {
      icon: Bot,
      title: "AI Feedback",
      desc: "Scores, complexity analysis, highlights, gaps, and suggestions.",
    },
    {
      icon: LayoutPanelTop,
      title: "Seamless Integration",
      desc: "Floating panel UI on LeetCode problem pages.",
    },
  ];
  return (
    <section className="bg-card/40 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why you'll love it
          </h2>
          <p className="text-muted-foreground mt-2">
            Everything you need to practice effectively — and learn faster.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-md bg-muted">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <CardTitle className="text-base">{title}</CardTitle>
                </div>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "Open LeetCode",
      details:
        "Navigate to any problem page. A small banner invites you to start a coaching session.",
    },
    {
      step: "Start Coaching",
      details:
        "LeetCode page shifts slightly and an AI Coaching Panel appears. Begin recording your explanation.",
    },
    {
      step: "Stop & Process",
      details:
        "Your audio, code, and problem details are sent to your backend for transcription and AI feedback.",
    },
    {
      step: "Review Results",
      details:
        "View scores, complexity, highlights, gaps, suggestions, and follow-up questions — all in one place.",
    },
  ];
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
          <p className="text-muted-foreground mt-2">
            Built to feel native on LeetCode, with an AI coach by your side.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <Card key={idx} className="bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{s.step}</CardTitle>
                  <Badge variant="secondary" className="font-mono">
                    {idx + 1}
                  </Badge>
                </div>
                <CardDescription>{s.details}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstallSteps() {
  const steps = [
    {
      icon: Github,
      title: "Clone the repository",
      code: "git clone https://github.com/PCoder23/leetcode-coach-extension.git\ncd leetcode-coach-extension/apps/extension",
    },
    {
      icon: Boxes,
      title: "Install & build",
      code: "npm install\nnpm run build",
    },
    {
      icon: Chrome,
      title: "Load in Chrome",
      details:
        "Open chrome://extensions → Enable Developer Mode → Load unpacked → select apps/extension.",
    },
    {
      icon: Settings2,
      title: "Configure host permissions",
      details:
        "Point manifest host_permissions to your backend (localhost:3000 by default or your deployed URL).",
    },
  ];

  return (
    <section id="install" className="bg-card/40 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Installation (Dev Mode)
          </h2>
          <p className="text-muted-foreground mt-2">
            Set up locally in minutes. Follow these quick steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {steps.map(({ icon: Icon, title, code, details }) => (
            <Card key={title} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-md bg-muted">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <CardTitle className="text-base">{title}</CardTitle>
                </div>
                {details ? (
                  <CardDescription className="text-pretty">
                    {details}
                  </CardDescription>
                ) : null}
              </CardHeader>
              {code ? (
                <CardContent>
                  <pre className="text-sm font-mono bg-muted p-4 rounded-md border border-border/40 whitespace-pre-wrap">
                    {code}
                  </pre>
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-base">Backend URL</CardTitle>
              <CardDescription className="text-pretty">
                Update{" "}
                <code className="font-mono px-1 py-0.5 rounded bg-background border">
                  host_permissions
                </code>{" "}
                in manifest.json to point to your backend. Default is{" "}
                <code className="font-mono px-1 py-0.5 rounded bg-background border">
                  http://localhost:3000
                </code>
                .
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const items = [
    { icon: Cpu, label: "Manifest V3 Extension" },
    { icon: Code, label: "TypeScript + Vite" },
    { icon: Boxes, label: "TailwindCSS (Shadow DOM)" },
    { icon: Bot, label: "Next.js / FastAPI backend" },
  ];
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Tech stack</h2>
          <p className="text-muted-foreground mt-2">
            Simple and pragmatic tools built for speed.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <Card key={label} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-md bg-muted">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <CardTitle className="text-sm">{label}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-card/40 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <Card className="bg-card">
          <CardHeader className="gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="text-xl md:text-2xl">
                Ready to practice smarter?
              </CardTitle>
              <CardDescription className="mt-1">
                Visit the repository to get started and star the project to
                follow progress.
              </CardDescription>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg">
                <a href={REPO_URL} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#install">
                  <Rocket className="h-4 w-4" />
                  Install locally
                </a>
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <InstallSteps />
      <TechStack />
      <CTA />
      <footer className="border-t border-border/40 bg-background">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-muted-foreground flex items-center justify-between">
          <span>LeetCode Interview Coach</span>
          <div className="flex items-center gap-2">
            <span className="hidden sm:block">Repository</span>
            <Separator orientation="vertical" className="h-4" />
            <Link
              href={REPO_URL}
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
            >
              github.com/PCoder23/leetcode-coach-extension
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
