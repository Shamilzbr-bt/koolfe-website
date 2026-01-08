## 2024-05-24 - Content Security Policy Implementation
**Vulnerability:** Cross-Site Scripting (XSS) risk due to unrestricted resource loading.
**Learning:** React Single Page Applications (SPAs) without a backend are vulnerable to XSS if an attacker can inject a script tag.
**Prevention:** Implemented a Content Security Policy (CSP) meta tag in `index.html` to restrict valid sources for scripts, styles, images, and other resources. This acts as a defense-in-depth measure.
