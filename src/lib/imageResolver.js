/**
 * Automatically converts ImgBB viewer page links (e.g. https://ibb.co.com/5VgX5y5)
 * into direct, raw image file URLs (e.g. https://i.ibb.co.com/QG376R6/auranex.png) by inspecting OpenGraph metadata.
 */
export async function resolveDirectImageUrl(url) {
  if (!url || typeof url !== "string") return url;
  
  // Check if link is an ImgBB HTML viewer page link
  if (url.includes("ibb.co") && !url.includes("i.ibb.co")) {
    try {
      const res = await fetch(url, { 
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
        cache: "force-cache" 
      });
      if (res.ok) {
        const html = await res.text();
        const match = html.match(/og:image"\s+content="([^"]+)"/i) || html.match(/content="([^"]+)"\s+property="og:image"/i);
        if (match && match[1]) {
          return match[1];
        }
      }
    } catch (e) {
      console.warn("Failed to automatically resolve ImgBB viewer link:", url);
    }
  }
  
  return url;
}
