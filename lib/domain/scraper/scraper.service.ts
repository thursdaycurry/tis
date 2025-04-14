import { Injectable } from '@nestjs/common';
import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';

@Injectable()
export class ScraperService {
  /**
   * Parses raw HTML content and extracts structured article data.
   *
   * Returns an object with the following properties:
   * - title: Title of the article
   * - content: HTML string of the processed article content
   * - textContent: Plain text of the article, with all HTML tags removed
   * - length: Character length of the article
   * - excerpt: Short excerpt or summary of the content
   * - byline: Author metadata
   * - dir: Text direction (e.g., 'ltr' or 'rtl')
   * - siteName: Name of the source website
   * - lang: Language of the content
   * - publishedTime: Article's published timestamp (if available)
   */
  parseHtml(html: string, url: string) {
    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = JSON.stringify(reader.parse());
    return JSON.parse(article);
  }

  ping() {
    return 'pong';
  }
}
