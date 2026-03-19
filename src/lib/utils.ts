import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&hellip;': '...',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
    '&ndash;': '–',
    '&mdash;': '—',
    '&lsquo;': "'",
    '&rsquo;': "'",
    '&ldquo;': '"',
    '&rdquo;': '"',
  };
  
  let decoded = text;
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, 'g'), char);
  }
  
  decoded = decoded.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(dec);
  });
  
  return decoded;
}

export function cleanExcerpt(excerpt: string): string {
  let cleaned = stripHtml(excerpt);
  cleaned = decodeHtmlEntities(cleaned);
  cleaned = cleaned.replace(/\[&hellip;\]/g, '');
  cleaned = cleaned.replace(/\[\.\.\.\]/g, '');
  cleaned = cleaned.replace(/\[…\]/g, '');
  cleaned = cleaned.replace(/&hellip;$/g, '');
  cleaned = cleaned.replace(/\.\.\.$/g, '');
  cleaned = cleaned.replace(/…$/g, '');
  
  return cleaned.trim();
}
