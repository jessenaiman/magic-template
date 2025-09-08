'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface MobileMenuButtonProps {
  onOpenMenu: () => void;
  logoText?: string;
}

export function MobileMenuButton({
  onOpenMenu,
  logoText = 'Magic UI'
}: MobileMenuButtonProps): React.JSX.Element {
  return (
    <div className="flex items-center space-x-2 md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={onOpenMenu}
        className="h-8 w-8 p-0"
        aria-label="Open navigation menu"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <div className="text-lg font-semibold">{logoText}</div>
    </div>
  );
}
