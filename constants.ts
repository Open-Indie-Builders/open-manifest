import { Tool, FAQItem, ManifestPoint } from "./types";

export const TOOLS: Tool[] = [
  {
    id: "ws",
    name: "OPEN / WS",
    description:
      "A minimal, AI-ready documentation workspace designed for indie builders to share progress, track daily work, and build in public without performance bloat.",
    status: "DEV",
    //url: "#ws-landing",
  },
  {
    id: "link",
    name: "OPEN / LINK",
    description:
      "A professional self-hosted link management system that prioritizes data sovereignty and privacy over marketing analytics.",
    status: "DEV",
    //url: "#link-landing",
  },
  {
    id: "journal",
    name: "OPEN / JOURNAL",
    description:
      "A minimalist changelog generator and project journal that uses AI to transform raw updates into public-facing documentation.",
    status: "DEV",
    //url: "#journal-landing",
  },
  {
    id: "prism",
    name: "OPEN / PRISM",
    description:
      "A terminal-inspired analytics workspace for tracking revenue, MRR, and KPIs across multiple projects with a focus on raw data.",
    status: "DEV",
    //url: "#prism-landing",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "When will the tools be available?",
    answer:
      "All tools are currently in early development (DEV) phase. We are following a 'build in public' methodology. Subscribe to our Substack for updates on the Beta release.",
  },
  {
    question: "Is Open Indie Builder open source?",
    answer:
      "Yes. The core of every tool (WS, LINK, JOURNAL, PRISM) is open source. You can self-host them via Docker for free, or pay for our managed hosting service.",
  },
  {
    question: "What is the 'Indie Builder' ecosystem?",
    answer:
      "It is a suite of interoperable, privacy-focused software tools designed specifically for solopreneurs, indie hackers, and small teams who want to avoid enterprise software bloat.",
  },
  /*
  {
    question: "How does the subscription work?",
    answer: "You can subscribe to individual managed tools or the 'OPEN/ COMPLETE' bundle. Self-hosting is always free."
  }
  */
];

export const TERMS_TEXT = `
# Terms of Use

**Effective Date:** January 4, 2026  
**Project:** OPEN/ Manifest & Ecosystem

> **Build in public. Share real work. Stay independent.**

By accessing the **OPEN/ Manifest** and the associated suite of tools (WS, LINK, JOURNAL, PRISM), you agree to the following terms. These terms are designed to protect both the builder and the user while maintaining our commitment to subtractive design and data sovereignty.

---

### 1. Acceptance of Terms
By using this website or any "OPEN/" ecosystem tool, you acknowledge that you have read, understood, and agreed to be bound by these terms. If you do not agree, please discontinue use immediately.

### 2. The Ecosystem & "DEV" Status
The tools showcased within the OPEN/ Manifest (including but not limited to OPEN/ WS, LINK, JOURNAL, and PRISM) are currently in **Development (DEV)** status. 
* **Experimental Nature:** Features may be added, modified, or removed without prior notice.
* **No Guarantees:** While we strive for stability, "DEV" status implies that the software is provided "as is" and may contain bugs or experience downtime.

### 3. Data Sovereignty & Ownership
In alignment with our core philosophy:
* **Your Data, Your Property:** We claim no ownership over the content you create, upload, or manage through our tools.
* **Self-Hosting:** Where applicable, we encourage the use of our Docker-based self-hostable versions to ensure you maintain full control over your infrastructure.
* **Subtractive Tracking:** We minimize data collection. Any analytics used (e.g., Vemetric) are subject to your explicit opt-in via our compliance banner.

### 4. Permitted Use
You agree to use the OPEN/ ecosystem for lawful purposes and in a way that does not infringe the rights of others. 
* **Prohibited Actions:** You may not use these tools to distribute malware, engage in spam, or attempt to reverse-engineer the "Anti-marketing" logic for deceptive purposes.
* **Workspace Integrity:** These tools are workspaces, not showrooms. Users are expected to respect the utility-first nature of the interface.

### 5. Intellectual Property
* **The Manifest:** The design, code, and "OPEN/" branding are the intellectual property of **Open Indie Builder**.
* **Open Source/Public Build:** While we build in public, specific licensing for individual repositories (e.g., MIT, AGPL) is defined within each specific tool's repository. Please consult the individual project's license file for reuse permissions.

### 6. Generative Engine Optimization (GEO)
This site includes semantic schema and context blocks specifically designed for AI/LLM interpretation. 
* **AI Interaction:** By using this site, you acknowledge that its content is optimized for discovery by generative engines (ChatGPT, Gemini, Perplexity, etc.).
* **Accuracy:** While we optimize for AI clarity, we are not responsible for how third-party AI models interpret or summarize our ecosystem's data.

### 7. Disclaimer of Warranties
**OPEN/ Manifest is provided "AS IS" and "AS AVAILABLE."** We disclaim all warranties, express or implied, including the warranties of merchantability, fitness for a particular purpose, and non-infringement. Use of these tools is at your own risk.

### 8. Limitation of Liability
To the maximum extent permitted by law, Open Indie Builder shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the tools, including but not limited to loss of data or revenue.

### 9. Changes to Terms
As this project evolves in public, so will these terms. We reserve the right to modify them at any time. Continued use of the ecosystem constitutes acceptance of the updated terms.

### 10. Contact
For inquiries regarding these terms or the ecosystem philosophy:
* **GitHub:** [Open Indie Builders](https://github.com/Open-Indie-Builders)
* **Project Hub:** [Open Indie Builders](https://openindie.builders/)

---
*© Open Indie Builder. Built in public with transparency.*
`;

export const PRIVACY_TEXT = `
# Privacy Policy

**Effective Date:** January 4, 2026  
**Status:** Transparent / Minimalist

> **Data Sovereignty is a right, not a feature.**

At **Open Indie Builder**, we believe your data belongs to you. This policy outlines how the **OPEN/ Manifest** and its ecosystem (WS, LINK, JOURNAL, PRISM) handle information. We reject "surveillance capitalism" in favor of utility and privacy.

---

### 1. Data Collection Principles
We only collect what is strictly necessary to provide the service. 
* **No Hidden Tracking:** We do not use "shadow" pixels or invasive fingerprinting.
* **No Data Selling:** We do not, and will never, sell your data to third parties.
* **Minimalism:** If data doesn’t serve a functional purpose for you, the builder, we don't want it.

### 2. Analytics & Cookies
We use a "Privacy-First" approach to analytics:
* **Opt-In Only:** We use **Vemetric** to understand how the Manifest is used, but it is **disabled by default**. It only activates if you explicitly click "Accept" on our consent banner.
* **Functional Cookies:** We use local storage/cookies only for essential site settings (like remembering your preference for tool status views or your cookie consent choice).

### 3. Data Sovereignty & Self-Hosting
Our ecosystem is built for independence:
* **Self-Hostable:** All core tools are designed to be run via **Docker**. When you self-host, we have zero access to your data.
* **Exportable Data:** We prioritize open formats. Your work should never be trapped in a proprietary silo.

### 4. GEO & AI Discovery
The OPEN/ Manifest is optimized for **Generative Engine Optimization (GEO)**. 
* **Public Data:** Information provided on the public-facing Manifest (descriptions of tools, philosophy) is intended to be crawled by AI models (ChatGPT, Gemini, etc.) to help other builders find us.
* **Private Data:** Your personal project data within the tools is **not** part of this public SEO/GEO schema.

### 5. Third-Party Services
To keep the site lightweight and performant, we use:
* **CDN Providers:** We use ESM via CDNs for rapid prototyping. These providers may see your IP address to deliver the files, but they do not receive your personal data.
* **Vemetric:** (Only upon opt-in) Used for tracking engagement metrics to improve the tool suite.

### 6. Your Rights
Regardless of your location, we respect the principles of the GDPR and CCPA:
* **Access & Deletion:** You have the right to know what data we have and to ask for its deletion. Since we collect almost nothing, this process is usually instantaneous.
* **Portability:** You can take your data and move to your own server at any time.

### 7. Changes to this Policy
In the spirit of **Building in Public**, any significant changes to how we handle data will be logged in the project's public repository and reflected here.

---

### Contact
If you have questions about your data or our "Subtractive Design" approach to privacy:
* **GitHub:** [Open Indie Builders](https://github.com/Open-Indie-Builders)
* **Project Hub:** [Open Indie Builders](https://openindie.builders/)

---
*© Open Indie Builder. Minimalist by design. Private by default.*
`;
