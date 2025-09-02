'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { toast } from 'sonner';

interface NotificationContextType {
  showNotification: (type: 'success' | 'error' | 'info' | 'warning', title: string, description?: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}

interface NotificationProviderProps {
  children: ReactNode;
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const showNotification = (type: 'success' | 'error' | 'info' | 'warning', title: string, description?: string) => {
    switch (type) {
      case 'success':
        toast.success(title);
        break;
      case 'error':
        toast.error(title);
        break;
      case 'info':
        toast.info(title);
        break;
      case 'warning':
        toast.warning(title);
        break;
    }
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}
