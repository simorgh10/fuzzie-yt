import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { authMiddleware } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   "/",
//   "/api/clerk-webhook",
//   "/api/drive-activity/notification",
//   "/api/auth/callback/discord",
//   "/api/auth/callback/notion",
//   "/api/auth/callback/slack",
//   "/api/flow",
//   "/api/cron/wait",
//   "/sign-in(.*)",
//   "/sign-up(.*)",
// ]);

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/settings(.*)",
  "/workflows(.*)",
  "/connections(.*)",
  "/billing(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

// export default authMiddleware({
// });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
