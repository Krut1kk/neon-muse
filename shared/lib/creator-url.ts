export const CREATOR_PARAM = "creator";

export function setCreatorParam(slug: string | null) {
  const url = new URL(window.location.href);

  if (slug) {
    url.searchParams.set(CREATOR_PARAM, slug);
  } else {
    url.searchParams.delete(CREATOR_PARAM);
  }

  window.history.replaceState(null, "", url);
}
