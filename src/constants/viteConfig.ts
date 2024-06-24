const viteConfig = {
  isDev: (import.meta.env.VITE_IS_DEV ?? "false") === "true",
};

export default viteConfig;
