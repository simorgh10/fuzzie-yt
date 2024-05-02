* https://www.youtube.com/watch?v=XkOXNlHJP6M

* https://github.com/webprodigies/fuzzie-production

# Shadcn UI

> bunx --bun create-next-app@latest . --typescript --tailwind --eslint

* didn't work. Try this:

> bun create next-app@latest . --typescript --tailwind --eslint

> bun --bun x shadcn-ui@latest init
* default style/slate/yes for css/

* copy globals.css from github

# Aceternity UI

* https://ui.aceternity.com/components/3d-card-effect

> bun add framer-motion clsx tailwind-merge

* Shadcn Dark mode themes: https://ui.shadcn.com/docs/dark-mode/next

> bun add next-themes

* src/providers/theme-provider.tsx content from shadcn https://ui.shadcn.com/docs/dark-mode/next

* wrap layout within ThemeProvider

# Use https in localhost with nextJS
* In package.json
> next dev --experimental-https

```
Downloading mkcert package...
Download response was successful, writing to disk
Attempting to generate self signed certificate. This may prompt for your password
CA Root certificate created in C:\Users\...\AppData\Local\mkcert
Certificates created in C:\Users\...\Work\Dev\web-learning-projects\nextjs\webprodigies-fuzzie-app\certificates
Adding certificates to .gitignore
```

# Navbar
* 

# Font
* use DM_Sans font
* The Fashboard/GetStarted is from aceternity UI

# Setup Animations
* copy tailwind config from github. the difference is + some interactions, animations, maybe some colors

