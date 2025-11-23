import React from 'react';

interface WorkSidebarProps {
  email: string;
  businessNumber?: string;
  phone?: string;
  address?: string;
  kakao?: string;
  kakaoUrl?: string;
  instagram?: string;
  instagramUrl?: string;
  className?: string;
}

const WorkSidebar: React.FC<WorkSidebarProps> = ({
  email,
  businessNumber,
  phone,
  address,
  kakao,
  kakaoUrl,
  instagram,
  instagramUrl,
  className = '',
}) => {
  return (
    <aside className={`space-y-6 text-sm ${className}`}>
      <div>
        <a href={`mailto:${email}`} className="font-bold text-black hover:underline">
          {email}
        </a>
      </div>
      {businessNumber && (
        <div>
          <p className="text-gray-500 text-xs mb-1">Business License</p>
          <p className="font-bold text-black">{businessNumber}</p>
        </div>
      )}
      {phone && (
        <div>
          <p className="font-bold text-black">{phone}</p>
        </div>
      )}
      {address && (
        <div>
          <p className="text-gray-700">{address}</p>
        </div>
      )}
      {kakao && (
        <div>
          <p className="text-gray-600">Kakao.</p>
          <a
            href={kakaoUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:underline"
          >
            {kakao}
          </a>
        </div>
      )}
      {instagram && (
        <div>
          <p className="text-gray-600">Instagram. @</p>
          <a
            href={instagramUrl || `https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:underline"
          >
            {instagram}
          </a>
        </div>
      )}
    </aside>
  );
};

export default WorkSidebar;
