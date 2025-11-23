import React, { useState } from 'react';
import { Container } from '../layout';
import { Input, TextArea, PhoneInput, Checkbox, FileUpload, Button, Divider } from '../ui';

interface FormField {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  format?: string;
  options?: {
    id: string;
    label: string;
    hasInput?: boolean;
  }[];
}

interface ContactFormSectionProps {
  title: string;
  fields: FormField[];
  submitLabel?: string;
  className?: string;
  onSubmit?: (data: Record<string, unknown>) => void;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  title,
  fields,
  submitLabel = '문의하기',
  className = '',
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>({});
  const [otherInputs, setOtherInputs] = useState<Record<string, string>>({});
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const handleInputChange = (id: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (fieldId: string, optionId: string, checked: boolean) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [`${fieldId}-${optionId}`]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    onSubmit?.({
      ...formData,
      checkboxes: checkboxStates,
      otherInputs,
      privacyAgreed,
    });
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <Input
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type as 'text' | 'email'}
            required={field.required}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
          />
        );

      case 'textarea':
        return (
          <TextArea
            key={field.id}
            id={field.id}
            label={field.label}
            required={field.required}
            rows={6}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
          />
        );

      case 'phone':
        return (
          <PhoneInput
            key={field.id}
            id={field.id}
            label={field.label}
            required={field.required}
            onChange={(value) => handleInputChange(field.id, value)}
          />
        );

      case 'checkbox':
        return (
          <div key={field.id} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-900">
              {field.label}
            </label>
            <div className="space-y-3 mt-2">
              {field.options?.map((option) => (
                <Checkbox
                  key={option.id}
                  id={`${field.id}-${option.id}`}
                  label={option.label}
                  checked={checkboxStates[`${field.id}-${option.id}`] || false}
                  hasInput={option.hasInput}
                  inputValue={otherInputs[option.id] || ''}
                  onChange={(checked) =>
                    handleCheckboxChange(field.id, option.id, checked)
                  }
                  onInputChange={(value) =>
                    setOtherInputs((prev) => ({ ...prev, [option.id]: value }))
                  }
                />
              ))}
            </div>
          </div>
        );

      case 'file':
        return (
          <FileUpload
            key={field.id}
            id={field.id}
            label={field.label}
            required={field.required}
            multiple
            onChange={(files) => handleInputChange(field.id, files)}
          />
        );

      case 'agreement':
        return (
          <div key={field.id} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-900">
              {field.label}
            </label>
            <div className="bg-gray-50 p-4 h-48 overflow-y-auto text-sm text-gray-600 border border-gray-200">
              <p className="mb-4">
                엔프프로젝트(이하 '회사'라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.
              </p>
              <p className="font-bold mb-2">제1조 (개인정보의 처리목적)</p>
              <p className="mb-4">
                회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <p className="mb-2">1. 홈페이지 회원 가입 및 관리</p>
              <p className="mb-4">
                회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리 등을 목적으로 개인정보를 처리합니다.
              </p>
              <p className="mb-2">2. 재화 또는 서비스 제공</p>
              <p className="mb-4">
                서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공 등을 목적으로 개인정보를 처리합니다.
              </p>
            </div>
            <Checkbox
              id={field.id}
              label="개인정보 수집 및 이용에 동의합니다."
              checked={privacyAgreed}
              onChange={setPrivacyAgreed}
              className="mt-2"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <Container>
        <Divider className="mb-12" />
        <h2 className="text-2xl font-bold text-black mb-8">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
          {fields.map(renderField)}
          <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
            {submitLabel}
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default ContactFormSection;
