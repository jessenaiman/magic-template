'use client';

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { useRouter, useSearchParams } from "next/navigation";
import { Share2, Code, Copy, RefreshCw, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useNotifications } from "@/components/design/notification-provider";
// Removed non-existent animate-ui imports

type CustomizePageProps = {
  componentName?: string;
  initialSettings?: Record<string, any>;
  previewComponent?: React.ReactNode;
};

// Client component that uses search params
function CustomizePageInner() {
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [componentName, setComponentName] = useState<string>("Button");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showNotification } = useNotifications();

  // Load component info from URL
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const componentParam = params.get("component");
    const categoryParam = params.get("category");

    if (componentParam) {
      setComponentName(componentParam);
      // Load default settings for component
      loadDefaultSettings(componentParam);
    }
  }, [searchParams]);

  const loadDefaultSettings = (component: string) => {
    // This would be expanded to load actual default settings for each component
    const defaultSettings: Record<string, any> = {
      buttonText: "Click Me",
      variant: "default",
      size: "default"
    };
    setSettings(defaultSettings);
  };

  const handleSettingChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleShare = async () => {
    const dataToEncode = { componentName, settings };
    const encodedSettings = btoa(JSON.stringify(dataToEncode));
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("settings", encodedSettings);

    try {
      await navigator.clipboard.writeText(url.toString());
      showNotification("success", "Link copied!", "Shareable link has been copied to your clipboard.");
    } catch (e) {
      showNotification("error", "Failed to copy link", "Please try again.");
    }
  };

  const handleReset = () => {
    loadDefaultSettings(componentName);
    showNotification("info", "Settings reset", "Component settings have been reset to defaults.");
  };

  const handleSave = () => {
    // TODO: Replace with proper database storage
    localStorage.setItem(`component-${componentName}`, JSON.stringify(settings));
    showNotification("success", "Settings saved!", "Your customized settings have been saved.");
  };

  const codeString = useMemo(() => {
    const propsToString = Object.entries(settings)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}="${value}"`;
        }
        if (typeof value === 'boolean' || typeof value === 'number') {
          return `${key}={${value}}`;
        }
        return `${key}={${JSON.stringify(value)}}`;
      })
      .join(' ');

    return `<${componentName} ${propsToString} />`;
  }, [settings, componentName]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      showNotification("success", "Code copied!", "Component code has been copied to your clipboard.");
    } catch (e) {
      showNotification("error", "Failed to copy code", "Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/design" className="mr-4 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">{componentName} Customizer</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm" onClick={handleCopyCode}>
            <Code className="mr-2 h-4 w-4" />
            Copy Code
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(settings).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                <Input
                  id={key}
                  value={value.toString()}
                  onChange={(e) => handleSettingChange(key, e.target.value)}
                />
              </div>
            ))}
            <div className="flex justify-between pt-2">
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset
              </Button>
              <Button variant="default" size="sm" onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="bg-muted p-6 rounded-lg border border-border">
          <p className="text-muted-foreground mb-2">Preview</p>
          <div className="flex h-5/6 items-center justify-center rounded-md bg-background p-4">
            {/* Placeholder for component preview - in a real app, this would render the actual component */}
            <Button {...settings}>{settings.buttonText}</Button>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-border bg-muted p-4">
        <p className="mb-2 text-muted-foreground">Code</p>
        <div className="rounded-md bg-background p-4 font-mono text-sm overflow-x-auto">
          {codeString}
        </div>
      </div>
    </div>
  );
}

// Loading component for suspense fallback
function CustomizeLoading() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading customizer...</p>
        </div>
      </div>
    </div>
  );
}

export default function CustomizePage() {
  return (
    <Suspense fallback={<CustomizeLoading />}>
      <CustomizePageInner />
    </Suspense>
  );
}
