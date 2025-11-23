import React, { useRef } from 'react';

interface FileUploadProps {
  id: string;
  label: string;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (files: FileList | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  label,
  accept = '*',
  multiple = false,
  required = false,
  disabled = false,
  className = '',
  onChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = React.useState<string>('');

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileName(files.length > 1 ? `${files.length}개 파일 선택됨` : files[0].name);
    } else {
      setFileName('');
    }
    onChange?.(files);
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-medium text-gray-900">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleClick}
          disabled={disabled}
          className="px-4 py-3 border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-sm"
        >
          파일 올리기
        </button>
        <span className="text-sm text-gray-500">
          {fileName || '선택된 파일 없음'}
        </span>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        id={id}
        accept={accept}
        multiple={multiple}
        required={required}
        disabled={disabled}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default FileUpload;
