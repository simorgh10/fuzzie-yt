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

# Landing Page
* copy container scroll animarion from github. Coms originally from Aceternity UI with adaptation
* https://ui.aceternity.com/components/container-scroll-animation

> bun --bun x shadcn-ui@latest add button

* Inifinite Moving Cards, HeroParallax, Lamp, 3d-card and Sparkles from github. Originally from Aceternity with adaptation

> bun i framer-motion clsx tailwind-merge @tsparticles/react @tsparticles/engine @tsparticles/slim


> bun --bun x shadcn-ui@latest add card

# 40k through social media in 2 weeks
* Automatic Lead Generating Machine. $0 dollars to spend, 0 cold outreach, clients come to you.
* SINGLE BEST BUSINESS MODEL - Social Media Influencer
* Become a creator, and monetize anything you want
* Make passive income

# Sidebar

> bun --bun x shadcn-ui@latest add tooltip

* copy icons from github

> bun --bun x shadcn-ui@latest add separator

* the mode tooggle copy it from giuthub but you can grab it from Shadcn

# Dark and Light modes

> bun --bun x shadcn-ui@latest add dropdown-menu

* for infobar

> bun --bun x shadcn-ui@latest add input

# Settings Page

* see https://css-tricks.com/how-to-tame-line-height-in-css/

> bun --bun x shadcn-ui@latest add form