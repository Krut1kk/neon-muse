"use client";

import { Fragment, useEffect, useState, type ReactNode } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import { StatusDot } from "@/shared/ui/status-dot";
import type { Creator, CreatorPrompt } from "@/types/creator";

const TYPING_DELAY_MS = 600;
const WORD_STAGGER_MS = 35;

type ChatBubbleProps = {
  from: "creator" | "user";
  className?: string;
  children: ReactNode;
};

function ChatBubble({ from, className, children }: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "max-w-[86%] rounded-2xl px-4 py-3 leading-5",
        from === "user" ? "ml-auto rounded-br-md bg-(--accent) font-medium text-black/85" : "rounded-bl-md bg-white/[0.07] text-white/75",
        className,
      )}
    >
      {children}
    </div>
  );
}

type ChatPreviewProps = {
  creator: Creator;
};

export function ChatPreview({ creator }: ChatPreviewProps) {
  const [selectedPrompt, setSelectedPrompt] = useState(creator.prompts[0]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isTyping) return;

    const timeout = setTimeout(() => setIsTyping(false), TYPING_DELAY_MS);
    return () => clearTimeout(timeout);
  }, [isTyping, selectedPrompt]);

  const selectPrompt = (prompt: CreatorPrompt) => {
    if (prompt === selectedPrompt) return;

    setSelectedPrompt(prompt);
    setIsTyping(true);
  };

  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-medium text-white/50">
          <MessageCircle size={14} /> AI chat preview
        </div>
        <div className="flex items-center gap-1 text-[10px] text-emerald-300/80">
          <StatusDot /> online
        </div>
      </div>

      <div aria-live="polite" className="mt-4 space-y-3 text-sm">
        <ChatBubble from="creator">Hey 👋 Pick a prompt and I’ll show you how this could feel in the real product.</ChatBubble>

        <ChatBubble from="user">{selectedPrompt.label}</ChatBubble>

        {isTyping ? (
          <ChatBubble from="creator" className="flex w-fit items-center gap-2 text-white/50">
            <span className="size-1.5 animate-pulse rounded-full bg-(--accent)" />
            Typing…
          </ChatBubble>
        ) : (
          <ChatBubble from="creator" className="animate-fade-in ring-1 ring-inset ring-(--accent)/25">
            {selectedPrompt.response.split(" ").map((word, index) => (
              <Fragment key={index}>
                {index > 0 && " "}
                <span style={{ animationDelay: `${index * WORD_STAGGER_MS}ms` }} className="motion-safe:animate-word-in">
                  {word}
                </span>
              </Fragment>
            ))}
          </ChatBubble>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {creator.prompts.map((prompt) => {
          const isActive = prompt === selectedPrompt;

          return (
            <button
              key={prompt.label}
              type="button"
              aria-pressed={isActive}
              onClick={() => selectPrompt(prompt)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs transition hover:border-(--accent)/40 hover:bg-(--accent)/10 hover:text-white active:bg-(--accent)/15 motion-safe:active:scale-[0.97]",
                isActive ? "border-(--accent)/40 bg-(--accent)/10 text-white" : "border-white/10 bg-white/[0.05] text-white/65",
              )}
            >
              <Sparkles size={12} className={cn(isActive && "text-(--accent)")} />
              {prompt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
