export const retirementMessage = "This campaign website has been retired.";

export function throwGone(): never {
  throw new Response(retirementMessage, {
    status: 410,
    statusText: "Gone",
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}
