// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Clock,
//   Code,
//   MessageSquare,
//   TrendingUp,
//   CheckCircle,
//   AlertCircle,
//   Lightbulb,
//   HelpCircle,
//   ChevronRight,
//   Calendar,
//   Target,
// } from "lucide-react";
// import { supabaseServer } from "@/lib/supabase";

// interface Session {
//   id: string;
//   problem_title: string;
//   problem_body: string;
//   problem_url: string;
//   code_text: string;
//   transcript_text: string;
//   mode: string;
//   created_at: string;
//   feedback_json: {
//     scores: {
//       understanding: number;
//       approach: number;
//       communication: number;
//       code: number;
//     };
//     summary: string;
//     highlights: string[];
//     gaps: string[];
//     suggestions: string[];
//     follow_up_questions: string[];
//     complexity: {
//       time: string;
//       space: string;
//     };
//   };
// }

// function ScoreCard({ label, score }: { label: string; score: number }) {
//   const getScoreColor = (score: number) => {
//     if (score >= 8)
//       return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
//     if (score >= 6) return "text-amber-400 bg-amber-500/10 border-amber-500/20";
//     return "text-rose-400 bg-rose-500/10 border-rose-500/20";
//   };

//   return (
//     <div
//       className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${getScoreColor(
//         score
//       )}`}
//     >
//       <span className="text-sm font-medium text-foreground/80">{label}</span>
//       <span
//         className={`text-xl font-mono font-bold ${
//           getScoreColor(score).split(" ")[0]
//         }`}
//       >
//         {score}/10
//       </span>
//     </div>
//   );
// }

// function CompactSessionCard({ session }: { session: Session }) {
//   const averageScore = Math.round(
//     (session.feedback_json.scores.understanding +
//       session.feedback_json.scores.approach +
//       session.feedback_json.scores.communication +
//       session.feedback_json.scores.code) /
//       4
//   );

//   const getScoreColor = (score: number) => {
//     if (score >= 8) return "text-emerald-400";
//     if (score >= 6) return "text-amber-400";
//     return "text-rose-400";
//   };

//   return (
//     <Card className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/60 border-border/40 hover:border-border/60 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//       <CardHeader className="pb-3 relative">
//         <div className="flex items-start justify-between gap-3">
//           <div className="space-y-2 flex-1 min-w-0">
//             <CardTitle className="text-lg font-semibold text-balance leading-tight group-hover:text-primary transition-colors duration-200">
//               {session.problem_title}
//             </CardTitle>
//             <div className="flex items-center gap-2 text-muted-foreground text-sm">
//               <Calendar className="h-3.5 w-3.5" />
//               <span>
//                 {new Date(session.created_at).toLocaleDateString("en-US", {
//                   month: "short",
//                   day: "numeric",
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </span>
//             </div>
//           </div>
//           <div className="flex flex-col items-end gap-2">
//             <div
//               className={`text-2xl font-mono font-bold ${getScoreColor(
//                 averageScore
//               )}`}
//             >
//               {averageScore}
//             </div>
//             <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
//           </div>
//         </div>
//       </CardHeader>

//       <CardContent className="pt-0 relative">
//         <div className="flex items-center justify-between mb-4">
//           <Badge
//             variant="secondary"
//             className="font-mono text-xs px-3 py-1 bg-muted/50"
//           >
//             {session.mode.replace("_", " ").toUpperCase()}
//           </Badge>
//           <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-md">
//             <Target className="h-3 w-3" />
//             <span>{session.feedback_json.complexity.time}</span>
//           </div>
//         </div>

//         <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
//           {session.feedback_json.summary}
//         </p>
//       </CardContent>
//     </Card>
//   );
// }

// function DetailedSessionView({ session }: { session: Session }) {
//   const averageScore = Math.round(
//     (session.feedback_json.scores.understanding +
//       session.feedback_json.scores.approach +
//       session.feedback_json.scores.communication +
//       session.feedback_json.scores.code) /
//       4
//   );

//   const getScoreColor = (score: number) => {
//     if (score >= 8) return "text-emerald-400";
//     if (score >= 6) return "text-amber-400";
//     return "text-rose-400";
//   };

//   return (
//     <div className="space-y-8 max-h-[80vh] overflow-y-auto">
//       {/* Header */}
//       <div className="space-y-4">
//         <div className="flex items-center justify-between">
//           <Badge variant="outline" className="font-mono text-sm px-4 py-2">
//             {session.mode.replace("_", " ").toUpperCase()}
//           </Badge>
//           <div
//             className={`text-3xl font-mono font-bold ${getScoreColor(
//               averageScore
//             )}`}
//           >
//             {averageScore}/10
//           </div>
//         </div>
//         <div className="flex items-center gap-2 text-muted-foreground">
//           <Calendar className="h-4 w-4" />
//           <span className="text-sm">
//             {new Date(session.created_at).toLocaleDateString("en-US", {
//               weekday: "long",
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//               hour: "2-digit",
//               minute: "2-digit",
//             })}
//           </span>
//         </div>
//       </div>

//       {/* Scores Grid */}
//       <div className="grid grid-cols-2 gap-4">
//         <ScoreCard
//           label="Understanding"
//           score={session.feedback_json.scores.understanding}
//         />
//         <ScoreCard
//           label="Approach"
//           score={session.feedback_json.scores.approach}
//         />
//         <ScoreCard
//           label="Communication"
//           score={session.feedback_json.scores.communication}
//         />
//         <ScoreCard
//           label="Code Quality"
//           score={session.feedback_json.scores.code}
//         />
//       </div>

//       {/* Complexity */}
//       <div className="flex items-center gap-6 p-4 bg-gradient-to-r from-muted/40 to-muted/20 rounded-xl border border-border/40">
//         <div className="flex items-center gap-2">
//           <TrendingUp className="h-5 w-5 text-primary" />
//           <span className="font-medium text-foreground">Complexity</span>
//         </div>
//         <div className="flex gap-6 text-sm">
//           <div className="flex items-center gap-2">
//             <span className="text-muted-foreground">Time:</span>
//             <code className="text-primary font-mono font-semibold bg-primary/10 px-2 py-1 rounded">
//               {session.feedback_json.complexity.time}
//             </code>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-muted-foreground">Space:</span>
//             <code className="text-primary font-mono font-semibold bg-primary/10 px-2 py-1 rounded">
//               {session.feedback_json.complexity.space}
//             </code>
//           </div>
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="space-y-3">
//         <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
//           <MessageSquare className="h-5 w-5 text-primary" />
//           Summary
//         </h4>
//         <p className="text-muted-foreground leading-relaxed text-pretty bg-muted/20 p-4 rounded-xl border border-border/40">
//           {session.feedback_json.summary}
//         </p>
//       </div>

//       {/* Highlights */}
//       {session.feedback_json.highlights.length > 0 && (
//         <div className="space-y-3">
//           <div className="flex items-center gap-2">
//             <CheckCircle className="h-5 w-5 text-emerald-400" />
//             <h4 className="text-lg font-semibold text-foreground">
//               Highlights
//             </h4>
//           </div>
//           <div className="space-y-2">
//             {session.feedback_json.highlights.map((highlight, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-3 p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20"
//               >
//                 <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
//                 <span className="text-sm text-foreground/90 text-pretty">
//                   {highlight}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Gaps */}
//       {session.feedback_json.gaps.length > 0 && (
//         <div className="space-y-3">
//           <div className="flex items-center gap-2">
//             <AlertCircle className="h-5 w-5 text-rose-400" />
//             <h4 className="text-lg font-semibold text-foreground">
//               Areas for Improvement
//             </h4>
//           </div>
//           <div className="space-y-2">
//             {session.feedback_json.gaps.map((gap, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-3 p-3 bg-rose-500/5 rounded-lg border border-rose-500/20"
//               >
//                 <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
//                 <span className="text-sm text-foreground/90 text-pretty">
//                   {gap}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Suggestions */}
//       {session.feedback_json.suggestions.length > 0 && (
//         <div className="space-y-3">
//           <div className="flex items-center gap-2">
//             <Lightbulb className="h-5 w-5 text-amber-400" />
//             <h4 className="text-lg font-semibold text-foreground">
//               Suggestions
//             </h4>
//           </div>
//           <div className="space-y-2">
//             {session.feedback_json.suggestions.map((suggestion, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-3 p-3 bg-amber-500/5 rounded-lg border border-amber-500/20"
//               >
//                 <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
//                 <span className="text-sm text-foreground/90 text-pretty">
//                   {suggestion}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Follow-up Questions */}
//       {session.feedback_json.follow_up_questions.length > 0 && (
//         <div className="space-y-3">
//           <div className="flex items-center gap-2">
//             <HelpCircle className="h-5 w-5 text-blue-400" />
//             <h4 className="text-lg font-semibold text-foreground">
//               Follow-up Questions
//             </h4>
//           </div>
//           <div className="space-y-2">
//             {session.feedback_json.follow_up_questions.map(
//               (question, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/20"
//                 >
//                   <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
//                   <span className="text-sm text-foreground/90 text-pretty">
//                     {question}
//                   </span>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       )}

//       <Separator className="my-6" />

//       {/* Code and Transcript */}
//       <div className="grid grid-cols-1 gap-6">
//         <div className="space-y-3">
//           <div className="flex items-center gap-2">
//             <Code className="h-5 w-5 text-primary" />
//             <h4 className="text-lg font-semibold text-foreground">Code</h4>
//           </div>
//           <ScrollArea className="h-64 w-full rounded-xl border border-border/40 bg-muted/20">
//             <pre className="p-4 text-sm font-mono text-foreground/90 whitespace-pre-wrap">
//               {session.code_text}
//             </pre>
//           </ScrollArea>
//         </div>

//         <div className="space-y-3">
//           <div className="flex items-center gap-2">
//             <MessageSquare className="h-5 w-5 text-primary" />
//             <h4 className="text-lg font-semibold text-foreground">
//               Transcript
//             </h4>
//           </div>
//           <ScrollArea className="h-64 w-full rounded-xl border border-border/40 bg-muted/20">
//             <p className="p-4 text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
//               {session.transcript_text}
//             </p>
//           </ScrollArea>
//         </div>
//       </div>
//     </div>
//   );
// }

// async function getSessions(): Promise<{ sessions: Session[]; error?: string }> {
//   try {
//     const { data, error } = await supabaseServer
//       .from("sessions")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) {
//       if (error.code === "PGRST205" || error.message.includes("sessions")) {
//         return {
//           sessions: [],
//           error:
//             "The sessions table has not been created yet. Please run the database setup script first.",
//         };
//       }
//       throw error;
//     }
//     return { sessions: data || [] };
//   } catch (error) {
//     console.error("Error fetching sessions:", error);
//     return {
//       sessions: [],
//       error:
//         error instanceof Error ? error.message : "Failed to fetch sessions",
//     };
//   }
// }

// export default async function SessionsPage() {
//   const { sessions, error } = await getSessions();

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//         <div className="max-w-4xl mx-auto px-6 py-12">
//           <Card className="bg-amber-500/10 border-amber-500/20 backdrop-blur-sm">
//             <CardHeader className="text-center py-12">
//               <div className="mx-auto mb-6 p-4 bg-amber-500/20 rounded-full w-fit">
//                 <AlertCircle className="h-12 w-12 text-amber-500" />
//               </div>
//               <CardTitle className="text-2xl text-amber-600 mb-2">
//                 Database Setup Required
//               </CardTitle>
//               <CardDescription className="text-lg text-muted-foreground mb-6">
//                 {error}
//               </CardDescription>
//               <div className="bg-muted/30 p-4 rounded-lg border border-border/40">
//                 <p className="text-sm text-muted-foreground">
//                   <strong>Next step:</strong> Run the database setup script from
//                   the scripts folder to create the sessions table.
//                 </p>
//               </div>
//             </CardHeader>
//           </Card>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//       {/* Header */}
//       <div className="border-b border-border/40 bg-card/30 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="flex items-center justify-between">
//             <div className="space-y-2">
//               <h1 className="text-4xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
//                 Interview Sessions
//               </h1>
//               <p className="text-muted-foreground text-lg">
//                 Review your coding interview practice sessions and detailed AI
//                 feedback
//               </p>
//             </div>
//             <div className="flex items-center gap-6">
//               <div className="text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
//                 <div className="text-3xl font-bold text-primary">
//                   {sessions.length}
//                 </div>
//                 <div className="text-sm text-muted-foreground font-medium">
//                   Total Sessions
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Sessions Grid */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {sessions.length === 0 ? (
//           <Card className="bg-card/60 border-border/40 backdrop-blur-sm">
//             <CardHeader className="text-center py-16">
//               <div className="mx-auto mb-6 p-4 bg-muted/30 rounded-full w-fit">
//                 <Clock className="h-12 w-12 text-muted-foreground" />
//               </div>
//               <CardTitle className="text-2xl text-muted-foreground mb-2">
//                 No Sessions Yet
//               </CardTitle>
//               <CardDescription className="text-lg">
//                 Start practicing coding interviews to see your sessions and
//                 detailed feedback here.
//               </CardDescription>
//             </CardHeader>
//           </Card>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {sessions.map((session) => (
//               <Dialog key={session.id}>
//                 <DialogTrigger asChild>
//                   <div>
//                     <CompactSessionCard session={session} />
//                   </div>
//                 </DialogTrigger>
//                 <DialogContent className="max-w-5xl max-h-[90vh] bg-card/95 backdrop-blur-sm">
//                   <DialogHeader>
//                     <DialogTitle className="text-2xl font-semibold text-balance">
//                       {session.problem_title}
//                     </DialogTitle>
//                   </DialogHeader>
//                   <DetailedSessionView session={session} />
//                 </DialogContent>
//               </Dialog>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import ZohoDeskWidget from "@/components/ZohoDeskWidget";
import { useEffect, useState } from "react";

export default function Page() {
  const [zohoAsapToken, setZohoAsapToken] = useState<string>("");
  // useEffect(() => {
  //   const url = new URL(window.location.href);
  //   const params = url.searchParams.toString();

  //   console.log("Received query params:", params);

  //   const redirectUrl =
  //     "warden:///(auth)/email-login" + (params ? `?${params}` : "");

  //   console.log("Redirecting to:", redirectUrl);

  //   window.location.replace(redirectUrl);
  // }, []);

  return (
    <div>
      <ZohoDeskWidget zohoAsapToken={zohoAsapToken} />
      <input
        type="text"
        placeholder="Enter Zoho ASAP Token"
        value={zohoAsapToken || ""}
        onChange={(e) => setZohoAsapToken(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full max-w-md"
      />
    </div>
  );
}
