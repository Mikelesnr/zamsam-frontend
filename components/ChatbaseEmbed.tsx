'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    chatbaseConfig?: {
      chatbotId: string;
    };
  }
}

export default function ChatbaseEmbed() {
  useEffect(() => {
    window.chatbaseConfig = {
      chatbotId: process.env.NEXT_PUBLIC_CHATBASE_ID!,
    };

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
