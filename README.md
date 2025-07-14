# 🌟 SweetTerm

**SweetTerm** is an Astro blog theme/template designed for coders who love their color schemes. Theme your whole website with your favorite editor color scheme from Shiki and have your prose rendered with a nod to the aesthetics of raw markdown.

## ✨ Features

- **Amazing Theme Selection**: Personalize your blog's appearance with your favorite editor color scheme! Pick one or more of [any Shiki Theme](https://expressive-code.com/guides/themes/#available-themes) bundled by Expressive Code.
- **Dark/Light/Auto Theme Mode**: Choose any two Shiki themes and use the standard light/dark/auto model for automatically adapting to your reader's theme preferences.
- **Multiple Theme Mode**: Choose three (or ten!) Shiki themes and allow your reader to choose their favorite! Every element changes color interactively, including all of the code snippets.
- **RSS Feed and Sitemap**: Built-in support for RSS feeds and sitemap with no extra configuration.
- **Social Links**: Easily include links to common developer social platforms.
- **Responsive Design**: Optimized for all devices, from desktops to mobile phones.
- **Customizable Content**: Easily update your site's content and structure.
- **SEO Optimized**: Boost your site's visibility with built-in SEO best practices.
- **Customizable Build**: Powered by [Astro](https://astro.build/), render as a static site or generate content dynamically.

---

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

4. Open your browser and navigate to `http://localhost:3000` to see your site in action!

---

## 🛠️ Configuration

The core of SweetTerm lies in the `site.config.ts` file. This is where you can tailor your website to match your vision. Here's a quick overview:

### `src/site.config.ts`

- **`siteName`**: Set the name of your website.
- **`description`**: Add a short description for RSS purposes.
- **`themes`**: The highlight of SweetTerm! 🎨 Choose your favorite [Shiki themes](https://expressive-code.com/guides/themes/#available-themes).
- **`socialLinks`**: Add links to your social media profiles.

---

## 🌈 Custom Theming

The `themes` option in `site.config.ts` allows you to define interactive and dynamic themes for your site. Themes are defined as objects with properties like `name`, `colors`, and `fonts`. Here's an example:

```ts
export const themes = [
  {
     name: "Cotton Candy",
     colors: {
        background: "#ffebf0",
        text: "#6b4e71",
        accent: "#ff6f91",
     },
  },
  {
     name: "Mint Chocolate",
     colors: {
        background: "#2e3b3e",
        text: "#d9e7e2",
        accent: "#8abf69",
     },
  },
];
```

Visitors can switch between themes dynamically, making your site more engaging and delightful!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Happy building! 🎉 If you have any questions or run into issues, feel free to open an issue or contribute to the project. Let's create something sweet together!