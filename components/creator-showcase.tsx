"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CreatorCard } from "@/components/creator-card";
import { CreatorModal } from "@/components/creator-modal";
import { creators } from "@/data/creators";
import { Container } from "@/shared/ui/container";
import { Eyebrow } from "@/shared/ui/eyebrow";
import { Pill } from "@/shared/ui/pill";

const CREATOR_PARAM = "creator";

function setCreatorParam(slug: string | null) {
  const url = new URL(window.location.href);

  if (slug) {
    url.searchParams.set(CREATOR_PARAM, slug);
  } else {
    url.searchParams.delete(CREATOR_PARAM);
  }

  window.history.replaceState(null, "", url);
}

function SelectedCreatorModal() {
  const slug = useSearchParams().get(CREATOR_PARAM);
  const creator = creators.find((item) => item.slug === slug);

  if (!creator) return null;

  return <CreatorModal key={creator.slug} creator={creator} onClose={() => setCreatorParam(null)} />;
}

export function CreatorShowcase() {
  return (
    <>
      <Container as="section" id="creators" className="scroll-mt-8 pb-24">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <Eyebrow tone="accent">Featured personalities</Eyebrow>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Choose your vibe.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
              {creators.length} different personalities, interests and visual worlds — designed to feel like real creator brands.
            </p>
          </div>
          <div className="hidden sm:block">
            <Pill>{creators.length} AI creators online</Pill>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} onOpen={(item) => setCreatorParam(item.slug)} />
          ))}
        </div>
      </Container>

      <Suspense fallback={null}>
        <SelectedCreatorModal />
      </Suspense>
    </>
  );
}
