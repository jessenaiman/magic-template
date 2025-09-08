Text content does not match server-rendered HTML
Why This Error Occurred

While rendering your application, there was a difference between the React tree that was pre-rendered from the server and the React tree that was rendered during the first render in the browser (hydration).

Hydration

is when React converts the pre-rendered HTML from the server into a fully interactive application by attaching event handlers.
Common Causes

Hydration errors can occur from:

    Incorrect nesting of HTML tags
        <p> nested in another <p> tag
        <div> nested in a <p> tag
        <ul> or <ol> nested in a <p> tag
        Interactive Content

    cannot be nested (<a> nested in a <a> tag, <button> nested in a <button> tag, etc.)

Using checks like typeof window !== 'undefined' in your rendering logic
Using browser-only APIs like window or localStorage in your rendering logic
Using time-dependent APIs such as the Date() constructor in your rendering logic
Browser extensions
modifying the HTML
Incorrectly configured CSS-in-JS libraries

    Ensure your code is following our official examples

Incorrectly configured Edge/CDN that attempts to modify the html response, such as Cloudflare Auto Minify
Possible Ways to Fix It

The following strategies can help address this error:
Solution 1: Using useEffect to run on the client only

Ensure that the component renders the same content server-side as it does during the initial client-side render to prevent a hydration mismatch. You can intentionally render different content on the client with the useEffect hook.

import { useState, useEffect } from 'react'
 
export default function App() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  return <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
}

During React hydration, useEffect is called. This means browser APIs like window are available to use without hydration mismatches.
Solution 2: Disabling SSR on specific components

Next.js allows you to disable prerendering on specific components, which can prevent hydration mismatches.

import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })
 
export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}

Solution 3: Using suppressHydrationWarning

Sometimes content will inevitably differ between the server and client, such as a timestamp. You can silence the hydration mismatch warning by adding suppressHydrationWarning={true} to the element.

<time datetime="2016-10-25" suppressHydrationWarning />

    Good to know:

        This only works one level deep, and is intended to be an escape hatch. Don’t overuse it.
        React will not attempt to patch mismatched text content when suppressHydrationWarning={true} is set.

Common iOS issues

iOS attempts to detect phone numbers, email addresses, and other data in text content and convert them into links, leading to hydration mismatches.

This can be disabled with the following meta tag:

<meta
  name="format-detection"
  content="telephone=no, date=no, email=no, address=no"
/>