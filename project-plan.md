# **AI Agent Task: Finalize Component Showcase Architecture**

This document provides a precise, step-by-step guide to refactor the entire component showcase within the /app/design/ directory. You will align all legacy files with the established modern architecture, which uses nested layouts and a data-driven approach.

### **Architectural Goals**

1. **Category-Wide Controls:** Implement a DesignPageHero UI element that provides base customization controls for all components within a specific category (e.g., all buttons share font size, border-radius controls).  
2. **Unified Design Layout:** The root /design/layout.tsx is responsible for the overall page structure. It provides the responsive grid for preview tiles and exposes a "slot" for the DesignPageHero.  
3. **Nested Category Layouts:** Each category directory (e.g., /design/buttons/) will have its own layout.tsx. This file's sole purpose is to configure and provide the category-specific controls that will be displayed in the DesignPageHero.  
4. **Inline Tile Customization:** Individual page.tsx files will contain the PreviewTile components. These tiles can add further, specific customizations on top of the category-level controls.

### **Core Principles (Non-Negotiable)**

* **No Architectural Changes:** You must strictly adhere to the architecture defined in the goals above. Do not introduce new design patterns, contexts, or layouts.  
* **Adhere to the Gold Standard:** The refactored app/design/buttons/html-css/page.tsx and the layouts within /app/design/ and /app/design/buttons/ are the "gold standard" examples. Your output must match their structure precisely.  
* **Data-Driven Pattern:** All component previews must be rendered using data-driven configuration objects passed as props to the \<PreviewTile /\> component.  
* **Precision and Accuracy:** Each file modification must be exact. Do not add or remove functionality beyond what is specified.

### **Detailed Action Plan**

#### **Step 1: Delete Obsolete Files and Directories**
Complete

#### **Step 2: Create Category-Specific Layouts**

For each category directory within app/design/ that does *not* already have one, create a new layout.tsx file. Its purpose is to provide the shared context for that category.

* **File Path:** e.g., app/design/effects/layout.tsx, app/design/text/layout.tsx, etc.  
* **Content:**  
  import { PreviewSurface } from '@/components/preview-surface';  
  import { DesignPageProvider } from '@/components/design-page-context';

  export default function CategoryLayout({  
    children,  
  }: {  
    children: React.ReactNode;  
  }) {  
    return (  
      \<DesignPageProvider\>  
        {children}  
      \</DesignPageProvider\>  
    );  
  }

#### **Step 3: Refactor All Showcase Pages**

For every page.tsx file within the app/design/ subdirectories (e.g., app/design/backgrounds/magicui/page.tsx), you must replace its entire content by precisely following the "gold standard" pattern.

**The "Gold Standard" Pattern (app/design/buttons/html-css/page.tsx):**

'use client';

import \* as React from 'react';  
import { useDesignPage } from '@/components/design-page-context';  
import { PreviewTile, PreviewTileProps } from '@/components/preview-tile';  
import { FieldConfig } from '@/components/preview-controls/preview-customization-panel';  
// Import the actual components being demonstrated...

// 1\. Create a PageConfigurator component  
function PageConfigurator() {  
  const { setTitle, setDescription, setFields } \= useDesignPage();

  React.useEffect(() \=\> {  
    // 2\. Set the title and description for the hero  
    setTitle('...'); // e.g., 'Magic UI Backgrounds'  
    setDescription('...'); // e.g., 'A collection of animated backgrounds from Magic UI.'  
      
    // 3\. Define the shared controls for all tiles on this page  
    const fields: FieldConfig\[\] \= \[  
        // ... field configurations common to this category  
    \];  
    setFields(fields);  
  }, \[setTitle, setDescription, setFields\]);

  return null; // This component renders no UI itself.  
}

// 4\. Define a configuration object for EACH example  
const exampleOneConfig: PreviewTileProps \= {  
  title: "...",  
  description: "...",  
  componentName: "...",  
  code: \`...\`,  
  initialCustomization: { /\* ... \*/ },  
  customFields: \[ /\* ... optional fields specific to THIS tile \*/ \],  
  children: (customization) \=\> \<div /\>, // The live component preview  
};

// 5\. The default export renders the configurator and the data-driven tiles  
export default function Page() {  
  return (  
    \<\>  
      \<PageConfigurator /\>  
        
      \<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"\>  
        \<PreviewTile {...exampleOneConfig} /\>  
        {/\* ... more tiles ... \*/}  
      \</div\>  
    \</\>  
  );  
}

### **Task Checklist**

#### **Phase 1: Layout Standardization**

* \[ \] 1\. Create app/design/backgrounds/layout.tsx  
* \[ \] 2\. Create app/design/effects/layout.tsx  
* \[ \] 3\. Create app/design/page-transitions/layout.tsx  
* \[ \] 4\. Create app/design/responsive-design/layout.tsx  
* \[ \] 5\. Create app/design/text/layout.tsx

#### **Phase 2: Page Refactoring (Follow Gold Standard)**

* \[ \] 6\. Refactor app/design/backgrounds/animate-ui/page.tsx  
* \[ \] 7\. Refactor app/design/backgrounds/html-css/page.tsx  
* \[ \] 8\. Refactor app/design/backgrounds/magicui/page.tsx  
* \[ \] 9\. Refactor app/design/backgrounds/reactbits/page.tsx  
* \[ \] 10\. Refactor app/design/backgrounds/tailwind/page.tsx  
* \[ \] 11\. Refactor app/design/buttons/animate-css/page.tsx  
* \[ \] 12\. Refactor app/design/buttons/magic/page.tsx  
* \[ \] 13\. Refactor app/design/buttons/shadcn/page.tsx  
* \[ \] 14\. Refactor app/design/buttons/tailwind/page.tsx  
* \[ \] 15\. Refactor app/design/effects/magicui/page.tsx  
* \[ \] 16\. Refactor app/design/effects/tailwind/page.tsx  
* \[ \] 17\. Refactor app/design/page-transitions/html-css/page.tsx  
* \[ \] 18\. Refactor app/design/page-transitions/magicui/page.tsx  
* \[ \] 19\. Refactor app/design/page-transitions/nextjs/page.tsx  
* \[ \] 20\. Refactor app/design/page-transitions/tailwind/page.tsx  
* \[ \] 21\. Refactor app/design/responsive-design/html-css/page.tsx  
* \[ \] 22\. Refactor app/design/responsive-design/magicui/page.tsx  
* \[ \] 23\. Refactor app/design/responsive-design/nextjs/page.tsx  
* \[ \] 24\. Refactor app/design/text/html-css/page.tsx  
* \[ \] 25\. Refactor app/design/text/magicui/page.tsx  
* \[ \] 26\. Refactor app/design/text/reactbits/page.tsx  
* \[ \] 27\. Refactor app/design/text/shadcn/page.tsx  
* \[ \] 28\. Refactor app/design/text/tailwind/page.tsx