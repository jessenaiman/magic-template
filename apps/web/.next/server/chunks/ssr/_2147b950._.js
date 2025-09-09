module.exports = {

"[project]/apps/web/metadata.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "metadata": (()=>metadata),
    "metadataKeywords": (()=>metadataKeywords)
});
(()=>{
    const e = new Error("Cannot find module '@/src/lib/site'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const metadataKeywords = [
    "React",
    "Component Library",
    "UI Components",
    "Design System",
    "Frontend Development",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Accessibility",
    "Performance",
    "Open Source",
    "Developer Tools",
    "Productivity",
    "User Interface",
    "UX Design",
    "Responsive Design",
    "CSS-in-JS",
    "Storybook",
    "Component-Driven Development",
    "Web Development",
    "Tutorials",
    "Modern Design Workshop"
];
const metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "Web Design Workshop",
            url: "https://design.omega-spiral.com"
        }
    ],
    creator: "Dice Wizard",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@dice_wizard"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};
}}),
"[project]/packages/components/ui/tooltip.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Tooltip() from the server but Tooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/ui/tooltip.tsx <module evaluation>", "Tooltip");
const TooltipContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipContent() from the server but TooltipContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/ui/tooltip.tsx <module evaluation>", "TooltipContent");
const TooltipProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipProvider() from the server but TooltipProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/ui/tooltip.tsx <module evaluation>", "TooltipProvider");
const TooltipTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipTrigger() from the server but TooltipTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/ui/tooltip.tsx <module evaluation>", "TooltipTrigger");
}}),
"[project]/packages/components/ui/tooltip.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Tooltip() from the server but Tooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/ui/tooltip.tsx", "Tooltip");
const TooltipContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipContent() from the server but TooltipContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/ui/tooltip.tsx", "TooltipContent");
const TooltipProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipProvider() from the server but TooltipProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/ui/tooltip.tsx", "TooltipProvider");
const TooltipTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipTrigger() from the server but TooltipTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/ui/tooltip.tsx", "TooltipTrigger");
}}),
"[project]/packages/components/ui/tooltip.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$ui$2f$tooltip$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/components/ui/tooltip.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$ui$2f$tooltip$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/packages/components/ui/tooltip.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$ui$2f$tooltip$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/packages/components/magicui/flickering-grid.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FlickeringGrid": (()=>FlickeringGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const FlickeringGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FlickeringGrid() from the server but FlickeringGrid is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/magicui/flickering-grid.tsx <module evaluation>", "FlickeringGrid");
}}),
"[project]/packages/components/magicui/flickering-grid.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FlickeringGrid": (()=>FlickeringGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const FlickeringGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FlickeringGrid() from the server but FlickeringGrid is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/components/magicui/flickering-grid.tsx", "FlickeringGrid");
}}),
"[project]/packages/components/magicui/flickering-grid.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$magicui$2f$flickering$2d$grid$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/components/magicui/flickering-grid.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$magicui$2f$flickering$2d$grid$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/packages/components/magicui/flickering-grid.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$magicui$2f$flickering$2d$grid$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/apps/web/src/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Root Layout Component
 *
 * ARCHITECTURE: Server Component
 * - No 'use client' directive - runs on server
 * - Handles metadata, viewport, and root HTML structure
 * - Wraps client components with necessary providers
 * - Manages global layout and navigation structure
 *
 * SERVER-SIDE FEATURES:
 * - Metadata generation for SEO
 * - Viewport configuration
 * - Font loading and optimization
 * - Global CSS imports
 *
 * CLIENT-SIDE FEATURES (via child components):
 * - Theme switching (ThemeProvider)
 * - Navigation interactions (UnifiedNavbar)
 * - Tooltips (TooltipProvider)
 * - Preview functionality (PreviewProvider)
 */ /*
 * IMPORTANT: Do NOT use suppressHydrationWarning globally (e.g., on <html> or root wrappers).
 * This attribute silences all hydration mismatch warnings and can hide serious bugs.
 * Use it only on a specific element when the mismatch is intentional and unavoidable.
 */ __turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata),
    "viewport": (()=>viewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$sans$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/sans.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GeistSans$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistsans_81192321.js [app-rsc] (ecmascript) <export default as GeistSans>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$mono$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/mono.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GeistMono$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistmono_8e2790ea.js [app-rsc] (ecmascript) <export default as GeistMono>");
(()=>{
    const e = new Error("Cannot find module '@/src/components/theme-provider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/src/lib/site'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/metadata.ts [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/src/components/footer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/ui/tooltip.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$magicui$2f$flickering$2d$grid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/components/magicui/flickering-grid.tsx [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/src/components/preview/preview-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/src/components/navigation/navbar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
;
;
;
;
const viewport = {
    themeColor: "black"
};
const metadata = {
    metadataBase: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : undefined,
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["metadataKeywords"]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GeistSans$3e$__["GeistSans"].variable} ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GeistMono$3e$__["GeistMono"].variable} font-sans antialiased`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeProvider, {
                    attribute: "class",
                    defaultTheme: "system",
                    enableSystem: true,
                    disableTransitionOnChange: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PreviewProvider, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-0 -z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$components$2f$magicui$2f$flickering$2d$grid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlickeringGrid"], {
                                            className: "absolute inset-0",
                                            squareSize: 4,
                                            gridGap: 6,
                                            color: "#6B7280",
                                            maxOpacity: 0.5,
                                            flickerChance: 0.1
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/layout.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 [mask-image:linear-gradient(to_top,transparent_25%,black_95%)] pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/layout.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/layout.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex min-h-screen flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(UnifiedNavbar, {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/layout.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                            className: "flex-1",
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/layout.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/layout.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/layout.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/layout.tsx",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/layout.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/layout.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/layout.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/layout.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/layout.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistsans_81192321.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "geistsans_81192321-module__hQgyEq__className",
  "variable": "geistsans_81192321-module__hQgyEq__variable",
});
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistsans_81192321.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistsans_81192321.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'GeistSans', 'GeistSans Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/sans.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistsans_81192321.js [app-rsc] (ecmascript)");
;
;
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/sans.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistsans_81192321.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$sans$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/sans.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistsans_81192321.js [app-rsc] (ecmascript) <export default as GeistSans>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GeistSans": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistsans_81192321$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistsans_81192321.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistmono_8e2790ea.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "geistmono_8e2790ea-module__wO4fra__className",
  "variable": "geistmono_8e2790ea-module__wO4fra__variable",
});
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistmono_8e2790ea.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistmono_8e2790ea.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'GeistMono', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/mono.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistmono_8e2790ea.js [app-rsc] (ecmascript)");
;
;
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/mono.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistmono_8e2790ea.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$mono$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/mono.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistmono_8e2790ea.js [app-rsc] (ecmascript) <export default as GeistMono>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GeistMono": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$geist$40$1$2e$5$2e$1_next$40$15$2e$3$2e$5_$40$babel$2b$core$40$7$2e$28$2e$4_$40$playwright$2b$test$40$1$2e$55$2e$0_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1_$2f$node_modules$2f$geist$2f$dist$2f$geistmono_8e2790ea$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/geist@1.5.1_next@15.3.5_@babel+core@7.28.4_@playwright+test@1.55.0_react-dom@19.1.1_react@19.1.1__react@19.1.1_/node_modules/geist/dist/geistmono_8e2790ea.js [app-rsc] (ecmascript)");
}}),

};

//# sourceMappingURL=_2147b950._.js.map