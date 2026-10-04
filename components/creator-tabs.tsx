"use client";

import { useId, useState, type ReactNode } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ChatPreview } from "@/components/chat-preview";
import { LatestDrops } from "@/components/latest-drops";
import { cn } from "@/shared/lib/cn";
import { StatusDot } from "@/shared/ui/status-dot";
import { TagList } from "@/shared/ui/tag-list";
import { VerifiedName } from "@/shared/ui/verified-name";
import type { Creator } from "@/types/creator";

const TABS = [
  { id: "profile", label: "Profile" },
  { id: "feed", label: "Feed" },
  { id: "chat", label: "Chat" },
] as const;

type CreatorTab = (typeof TABS)[number]["id"];

function SectionTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">{children}</h3>;
}

type CreatorTabsProps = {
  creator: Creator;
};

export function CreatorTabs({ creator }: CreatorTabsProps) {
  const [activeTab, setActiveTab] = useState<CreatorTab>("profile");
  const [chatPromptIndex, setChatPromptIndex] = useState(0);
  const baseId = useId();
  const tabId = (tab: CreatorTab) => `${baseId}-${tab}-tab`;
  const panelId = (tab: CreatorTab) => `${baseId}-${tab}-panel`;

  const startConversation = (index: number) => {
    setChatPromptIndex(index);
    setActiveTab("chat");
  };

  return (
    <>
      <div className="sticky top-0 z-10 border-b border-white/10 bg-surface/85 px-5 pb-3 pr-16 pt-4 backdrop-blur-xl sm:px-7 sm:pr-16 lg:pt-7">
        <VerifiedName name={creator.name} />
        <p className="mt-0.5 text-xs text-white/50">{creator.handle}</p>

        <div role="tablist" aria-label={`${creator.name} profile sections`} className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                id={tabId(tab.id)}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId(tab.id)}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-medium transition duration-200 motion-safe:active:scale-[0.97]",
                  isActive ? "bg-(--accent)/15 text-white ring-1 ring-inset ring-(--accent)/40" : "text-white/55 hover:text-white",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-5 py-6 sm:px-7">
        <div role="tabpanel" id={panelId("profile")} aria-labelledby={tabId("profile")} hidden={activeTab !== "profile"}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-(--accent)">{creator.category}</p>
          <p className="mt-3 text-lg leading-7 text-white/85 md:text-xl md:leading-8">{creator.bio}</p>

          <dl className="mt-6 grid grid-cols-2 border-y border-white/10">
            <div className="py-4 pr-4">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/40">Followers</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-[-0.02em]">{creator.followers}</dd>
            </div>
            <div className="border-l border-white/10 py-4 pl-4">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/40">Status</dt>
              <dd className="mt-2.5 flex items-center gap-2 text-sm font-medium text-white/85">
                <StatusDot glow /> Live now
              </dd>
            </div>
          </dl>

          <section className="mt-6">
            <SectionTitle>Topics</SectionTitle>
            <TagList tags={creator.tags} size="md" className="mt-3" />
          </section>

          <section className="mt-6 border-t border-white/10 pt-6">
            <SectionTitle>Conversation starters</SectionTitle>
            <ul className="mt-3 space-y-2">
              {creator.prompts.map((prompt, index) => (
                <li key={prompt.label}>
                  <button
                    type="button"
                    onClick={() => startConversation(index)}
                    className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-left text-sm font-medium text-white/85 transition duration-200 hover:border-(--accent)/40 hover:bg-(--accent)/[0.08] hover:text-white motion-safe:active:scale-[0.99]"
                  >
                    <span className="flex items-center gap-2.5">
                      <Sparkles size={15} aria-hidden className="shrink-0 text-(--accent)" />
                      {prompt.label}
                    </span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden
                      className="shrink-0 text-(--accent) transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div role="tabpanel" id={panelId("feed")} aria-labelledby={tabId("feed")} hidden={activeTab !== "feed"}>
          <LatestDrops drops={creator.latestDrops} />
        </div>

        <div role="tabpanel" id={panelId("chat")} aria-labelledby={tabId("chat")} hidden={activeTab !== "chat"}>
          <ChatPreview key={chatPromptIndex} creator={creator} initialPromptIndex={chatPromptIndex} />
        </div>
      </div>
    </>
  );
}
