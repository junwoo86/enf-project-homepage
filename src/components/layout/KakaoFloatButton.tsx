import React from 'react';
import siteData from '../../data/siteStructure.json';

const KakaoFloatButton: React.FC = () => {
  const kakaoChat = (siteData as any).floatingElements?.kakaoChat;

  // 카카오 채팅 설정이 없으면 렌더링하지 않음
  if (!kakaoChat?.channelId) {
    return null;
  }

  const kakaoUrl = `http://pf.kakao.com/${kakaoChat.channelId}/chat`;

  return (
    <a
      href={kakaoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-500 transition-colors"
      aria-label={kakaoChat.buttonText || '카카오톡 채팅'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="#3C1E1E"
      >
        <path d="M12 3C6.48 3 2 6.58 2 11c0 2.76 1.78 5.19 4.47 6.59l-.96 3.55c-.1.37.3.66.62.46l4.13-2.73c.56.07 1.14.11 1.74.11 5.52 0 10-3.58 10-8 0-4.42-4.48-8-10-8z" />
      </svg>
    </a>
  );
};

export default KakaoFloatButton;
