const VIDEO_ID = /^[\w-]{11}$/;

/** Extracts the video ID from any common YouTube URL (watch, youtu.be, shorts, embed, live). */
export function youtubeId(url: string): string | undefined {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return undefined;
  }

  const host = parsed.hostname.replace(/^(www|m)\./, '');
  let id: string | null | undefined;

  if (host === 'youtu.be') {
    id = parsed.pathname.slice(1);
  } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    id =
      parsed.pathname === '/watch'
        ? parsed.searchParams.get('v')
        : parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1];
  }

  return id && VIDEO_ID.test(id) ? id : undefined;
}

export const youtubeThumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
