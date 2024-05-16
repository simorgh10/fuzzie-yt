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

# Prisma And Neon Tech

> bun i -D prisma

> bun x prisma init

* create a neontech project/database and copy database url into .env.local file

> bun x prisma generate

* needs to create client (lib.db.ts)
* again

> bun x prisma generate  (Why ?)

> bun x prisma db push

* copy rest of schema from github

> bun x prisma generate

> bun x prisma db push

* open prisma studio

> bun x prisma studio

# Uploadcare

> bun add @uploadcare/blocks --save-exact
(see https://stackoverflow.com/questions/58638817/what-is-the-purpose-of-using-save-exact)

```
If you are using TypeScript in your project add the following line to the tsconfig.json:


"types": ["@uploadcare/blocks/types/jsx"]
```

# Clerk

* create a new clerk application fuzzie-yt

> bun add @clerk/nextjs

* Setup your environment variables

* Add ClerkProvider to your app

* Update middleware.ts (authMiddleware is deprecated use clerkMioddleware https://clerk.com/docs/references/nextjs/clerk-middleware)

* authMiddleware is deprecated. Used clerkMiddleware but no clue how to distinguish between ignores and public routes. So put them all in the same matcher.

# Setup Google Cloud Console

* go on clerk, for Google enable use custom credentials, and add drive.activity.readonly + drive.metadata + drive.readonly
  + https://www.googleapis.com/auth/drive.activity.readonly
  + https://www.googleapis.com/auth/drive.metadata
  + https://www.googleapis.com/auth/drive.readonly

* go to google developer console, create project, fuzzie-production, API & services, OAuth consent screen click on external, fill app name fuzzie-app, put an email, developer contact information, save and continue, then save and continue again -> then back to dashboard

* create credentials -> OAuth client -> app type web application -> fuzzie-app -> for utis go back to clerk the copu Authorized redirect URI (google dialog modal), but just the domain, also add localhost:3000, then on authorized redirect URI paste the full url

* once saved, copy clientID + client secret back to clerk google modal

# NGrok

* used to allow to call a localhost address from a webhook. tool to communicate between your local dev host and a hosted link

* installed ngrok from https://dashboard.ngrok.com/get-started/setup/windows

> ngrok config add-authtoken <...>

* token saved to config file C:\Users\<user>\AppData\Local/ngrok/ngrok.yml

> ngrok http https://localhost:3000

```
Try our new Traffic Inspector Dev Preview: https://ngrok.com/r/ti                                                                                                                                                                               Session Status                online                                                                                    Account                       <email> (Plan: Free)                                            Version                       3.9.0                                                                                     Region                        Europe (eu)                                                                               Web Interface                 http://127.0.0.1:4040                                                                     Forwarding                    https://<URL> -> https://localhost:3000                                                                                                                        Connections                   ttl     opn     rt1     rt5     p50     p90                                                                             0       0       0.00    0.00    0.00    0.00                                              
```

* copy forwarding url
* on clerk create webhook > new endpoint and paste ngrok forwarding url to which concatenate  /api/clerk-webhook
* On Message Filtering click on user/user.created+updated

# Sign-in and Sign-up page

* [[...sign-in]] is an optional catch all segment

* src/api/clerk-webhook, add a POST webhook

* when trying to signing in, got this error
```
accounts.dev n'a pas terminé la procédure de validation de Google. L'appli est en cours de test, et seuls les testeurs approuvés par le développeur y ont accès. Si vous pensez que vous devriez y avoir accès, contactez le développeur.
Si vous êtes un développeur de accounts.dev, consultez les détails de l'erreur.
Erreur 403 : access_denied
```

* OAuth consent screen > test user > add your email

* also add https://localhost:3000 to credentials callback uris

* In next.config.js add img.clerk.com under images

* In profileform the video author suffested that {...field} shopuld be above everything else but he does not know why. maybe because oif the disabled prop ??? TODO investigate

# Global State Management

* create Modal Context

> bun --bun x shadcn-ui@latest add drawer

> bun --bun x shadcn-ui@latest add switch

# Editor

* React Flow

> bun install reactflow

> bun --bun x shadcn-ui@latest add badge

> bun --bun x shadcn-ui@latest add resizable

> bun --bun x shadcn-ui@latest add sonner

> bun add uuid

> bun add --save-dev @types/uuid

* used //@ts-ignore above setNodes

> bun --bun x shadcn-ui@latest add tabs

> bun --bun x shadcn-ui@latest add accordion

> bun add zustand

* got multiple-selector from https://shadcnui-expansions.typeart.cc/docs/multiple-selector. Seems identical to https://github.com/webprodigies/fuzzie-production/blob/main/src/components/ui/multiple-selector.tsx

> bun add cmdk

> bun --bun x shadcn-ui@latest add command badge

> bun add axios

> bun add @notionhq/client

* TODO: ariaChecked ? Why not just use checked ?

From Bing Copilot
```
Unlike native HTML checkboxes, custom elements require explicit ARIA attributes to communicate their state.

When using custom elements, developers often set ariaChecked to indicate whether the element is checked (true), unchecked (false), or in an indeterminate state (mixed).
```

* Is this a good pratctice to include localhost in redirect url ?
```
NextResponse.redirect(
        `https://localhost:3000/connections
```

* From google console > APIs and services > credentials > fuzzie-yt, import client ID and client secret.
* For Notion, search for "Notion Integration", click on Build your First Integration => https://developers.notion.com/docs/create-a-notion-integration. Then https://www.notion.so/my-integrations.
  + New INtegration > name fuzzie-yt > copy secret
  + THen Capabilities > check read and insert comments > Save
  + Distribution > make integration pubic > fuzzie-yt-test|https://localhost:3000|https://localhost:3000/privacypolicy|https://localhost:3000/termsofuse|my test email|redirect_uri:https://localhost:3000/api/auth/callback/notion > Submit then copy ID client and secret key and authorization url
  
* For Slack, https://api.slack.com/apps > sign in > create workspace > fuzzie-yt > work -> testing > free plan. Go back to https://api.slack.com/apps > create an app > from scratch > fuzzie-yt > App credentials > copy credentials and create 2 app level tokens ... click generate token and scopes > SLACK_APP_TOKEN scope connections:write + SLACK_BOT_TOKEN connections:write and authorizations:read. OAuth & Permissions > add redirect url https://localhost:3000/api/auth/callback/slack. Also add Bot scopes

* For Discord, https://discord.com/developers/docs/intro, Get Started > Create an App > signin > fuzzie-yt > copy app id into client id and publicKey, then OAuth2 > regenerate and copy client secret (not sure public key is needed). Add Redirect > https://localhost:3000/api/auth/callback/discord. Add scopes identify, connections, guilds, guilds.member.read, webhook.incoming, email$ then SAVE CHANGES. Select redirect url > import auth url into .env.local

* Try to connect to Slack. OK!!
* Try to connect to Notion. But befoire create a database. Go to your workspace. Create a new page. Then add inline database type "/data" and select the right option. add created time peoprty to the table. OK!!

* Try to connect to Discord. But have to create a Discord server. Call SimorgTesting's server


# Testing content sending
* Sending messages trough Discord worked
* For Slack, on Slack console, on canal #testing > v > Integrations > Add App > Add fuzzie-yt Bot

* For some reason cmdk was not recognized as a module. Juste uninstalled and reinstalled it. (??!!)

* But still selecting channel menu not working. Had to rollback to version 0.2.0 of cmdk

> bun uninstall cmdk

> bun install cmdk@0.2.0

* And here could select testing channel and send message !!

* For Notion, make sure the database property is named name not Name nor Nom., and that it corresponds to the property referenced in onCreateNewPageInDatabase

# Listener on Google Drive

> bun add googleapis

* What's this for ?
```
flowPath.splice(flowPath[current], 1)
```

# Cron job

* https://cron-job.org/en/ > login > Settings > Create Key fuzzie-yt
* Then Display API key, then copy key

# Testing listener

* Start ngrok:

> ./ngrok http https://localhost:3000

* copy url into .env.local
* Connect Slack with Google Drive
* Under Google settings, click on Create a Listener
* You may need to log out/log in in order to fix status 5000 token refresh token error when clicking on Create Listener.
* make sure Google Drive API is enabled.