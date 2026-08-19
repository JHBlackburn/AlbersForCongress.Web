export const retirementMessage = "This campaign website has been retired.";
export const retirementTitle = "Campaign Website Retired";
export const retirementHeaders = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
};

export function retiredHtml() {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>${retirementTitle}</title>
<style>
:root { color-scheme: dark; font-family: Arial, sans-serif; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #0a0a0a; color: #f5f5f5; }
main { max-width: 36rem; padding: 4rem 1.5rem; text-align: center; }
p.status { color: #a3a3a3; font-size: .875rem; font-weight: 700; letter-spacing: .18em; margin: 0 0 1rem; text-transform: uppercase; }
h1 { font-size: clamp(1.875rem, 5vw, 2.25rem); line-height: 1.15; margin: 0; }
p.message { color: #d4d4d4; font-size: 1rem; line-height: 1.75; margin: 1rem 0 0; }
</style>
</head>
<body>
<main>
<p class="status">410 Gone</p>
<h1>${retirementTitle}</h1>
<p class="message">${retirementMessage}</p>
</main>
</body>
</html>`;
}

export function retiredResponse() {
  return new Response(retiredHtml(), {
    status: 410,
    statusText: "Gone",
    headers: {
      ...retirementHeaders,
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
