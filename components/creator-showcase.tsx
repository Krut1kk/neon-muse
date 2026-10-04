"use client";

import { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { CreatorCard } from "@/components/creator-card";
import { CreatorModal } from "@/components/creator-modal";
import { creators } from "@/data/creators";
import { CREATOR_PARAM, setCreatorParam } from "@/shared/lib/creator-url";
import { Container } from "@/shared/ui/container";
import { Eyebrow } from "@/shared/ui/eyebrow";
import { Pill } from "@/shared/ui/pill";
import { StatusDot } from "@/shared/ui/status-dot";

function SelectedCreatorModal() {
  const slug = useSearchParams().get(CREATOR_PARAM);
  const creator = creators.find((item) => item.slug === slug);

  if (!creator) return null;

  return <CreatorModal key={creator.slug} creator={creator} onClose={() => setCreatorParam(null)} />;
}

export function CreatorShowcase() {
  return (
    <>
      <Container as="section" id="creators" className="relative scroll-mt-8 pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-24 size-[420px] rounded-full bg-violet-600/[0.09] blur-[120px]" />
          <div className="absolute -right-24 bottom-0 size-[380px] rounded-full bg-gradient-to-br from-pink-500/[0.07] to-cyan-400/[0.07] blur-[120px]" />
        </div>

        <div className="mb-6 md:flex md:items-end md:justify-between md:gap-6">
          <div>
            <Eyebrow tone="accent">Featured personalities</Eyebrow>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Choose your vibe.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
              {creators.length} different personalities, interests and visual worlds — designed to feel like real creator brands.
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3 md:mt-0 md:shrink-0">
            <Pill>
              <StatusDot /> {creators.length} AI creators online
            </Pill>
            <span className="inline-flex items-center gap-1 text-xs text-white/45 md:hidden">
              Swipe to explore <ArrowRight size={13} aria-hidden />
            </span>
          </div>
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3.5 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4 xl:gap-4">
          {creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onOpen={(item) => setCreatorParam(item.slug)}
              className="w-[calc(100vw-4rem)] max-w-[400px] shrink-0 snap-start md:w-auto md:max-w-none"
            />
          ))}
        </div>
      </Container>

      <Suspense fallback={null}>
        <SelectedCreatorModal />
      </Suspense>
    </>
  );
}
