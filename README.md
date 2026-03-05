# LLM Benchmark Dashboard

A high-quality, State-Of-The-Art (SOTA) benchmark dashboard for aggregating LLM evaluation leaderboards into a single pane of glass.

## Features Implemented
- **Vite & React Setup**: Fast, modern SPA scaffolding.
- **Tailwind CSS v4**: Utilizes advanced Tailwind configuring including custom dark themes, CSS layer directives, and a tailored radial gradient background.
- **Dynamic Layout system**: A sleek grid that scales from 1 column on mobile to 2 columns on larger screens, containing the benchmark sources.
- **Glassmorphism Components**: The `BenchmarkCard` and `Header` components employ `backdrop-filter: blur`, subtle borders, and smooth hover animations.
- **Animated Loading States**: Embedded a custom loading spinner while iframes initialize.
- **Smart Fallback UI**: Sources that block iframe embedding gracefully present a fallback screen to open the leaderboard directly, rather than showing a broken connection window.

## Included Benchmarks
1. **Bullshit Benchmark**: Measuring LLM hallucination & refuse rates
2. **Artificial Analysis (GPQA)**: Graduate-level reasoning capabilities
3. **Open LLM Leaderboard (HuggingFace)**: Standard evaluation suite (X-Frame restricted)
4. **Chatbot Arena**: Crowdsourced blind testing & Elo rating (X-Frame restricted)

*Note: Due to security policies (X-Frame-Options / Content-Security-Policy), HuggingFace and Chatbot Arena do not permit embedding inside an iframe. They are handled by providing a direct link out to the respective platforms.*

## Visuals

### Dashboard Top View
![Dashboard Top View](./assets/dashboard_top.png)

### Dashboard Bottom View
![Dashboard Bottom View](./assets/dashboard_bottom.png)

### Dashboard Demo
![Dashboard Recording](./assets/dashboard_demo.webp)

## Run Locally
```bash
npm install
npm run dev
```
