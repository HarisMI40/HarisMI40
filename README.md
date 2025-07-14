# 🌟 SweetTerm

**SweetTerm** is an Astro blog theme/template designed for coders who love their color schemes. Theme your whole website with your favorite color scheme from Shiki and have your prose rendered with a nod to the aesthetics of raw markdown.

![SweetTerm Example Website](https://i.imgur.com/nmE2HPM.png)

## ✨ Features

- **Amazing Theme Selection**: Personalize your blog's appearance with your favorite editor color scheme. Pick one (or more!) [Shiki Themes](https://expressive-code.com/guides/themes/#available-themes) bundled by the Expressive Code project.
- **Dark/Light/Auto Theme Mode**: Choose any two Shiki themes and use the standard light/dark/auto model for automatically adapting to your reader's theme preferences with a toggle button in the site header.
- **Multiple Theme Mode**: Choose three (or ten!) Shiki themes and allow your reader to choose their favorite from a button in the site header. Every element changes color interactively, including all of the code snippets of course.
- **GitHub Activity Widget**: Optionally include a GitHub activity React component that matches the active color scheme perfectly.
- **RSS Feed and Sitemap**: Built-in support for RSS feeds and sitemap with no extra configuration.
- **Social Links**: Easily include links to common developer social platforms.
- **Responsive Design**: Optimized for all devices, from desktops to mobile phones.
- **Customizable Content**: Easily update your site's content and structure.
- **SEO Optimized**: Boost your site's visibility with built-in SEO best practices.
- **Customizable Build**: Powered by [Astro](https://astro.build/), render as a static site or generate content dynamically.

## 🚀 Getting Started

Follow these steps to clone the repo and make it your own:

1. **Clone the Repository**:
    ```bash
    git clone --bare https://github.com/your-username/sweetterm.git my-new-blog
    cd my-new-blog
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Development Server**:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:4322` to see your site in action!

## 🛠️ Configuration

The core of SweetTerm lies in the `src/site.config.ts` file. This is where you can tailor your website to match your vision. Here's a quick overview:

### `src/site.config.ts`

- **`siteName`**: Set the name of your website.
- **`description`**: Add a short description for RSS purposes.
- **`themes`**: The highlight of SweetTerm! 🎨 Choose your favorite [Shiki themes](https://expressive-code.com/guides/themes/#available-themes).
- **`socialLinks`**: Add links to your social media profiles.

Please take a look at the `src/site.config.ts` file for more information.

## 📄 License

This project is licensed under the [MIT License](LICENSE).