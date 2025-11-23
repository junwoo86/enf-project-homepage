import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout, Container } from '../components/layout';

// 포트폴리오 상세 데이터 타입
interface PortfolioDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  description: string;
  client?: string;
  pdfUrl: string; // PDF 파일 경로
}

// Portfolio detail data
const portfolioDetails: Record<string, PortfolioDetail> = {
  'zipiderm': {
    id: 'zipiderm',
    title: 'ZIPIDERM [지피덤]',
    subtitle: '"Real Skin Switch"',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics',
    tags: ['Brand Development', 'Brand Identity', 'Package Design', 'Marketing Strategy'],
    description: '피부 본연의 건강함을 되돌리고 유지시켜주는 리얼 바이오 더마 코스메틱 브랜드. 셀트리온 바이오 기술력을 기반으로 손상된 피부 장벽 회복부터 슬로우에이징까지 실현하는 차세대 더마 브랜드입니다.',
    client: '셀트리온스킨큐어',
    pdfUrl: '/portfolio/ZIPIDERM.pdf',
  },
  'plodica': {
    id: 'plodica',
    title: 'Plodica [플로디카]',
    subtitle: '"Be Positive, Be Plodica"',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics',
    tags: ['Brand Development', 'Brand Identity', 'Package Design', 'Content Directing'],
    description: '당신의 긍정적 삶의 변화와 함께하는 고기능성 비건 브랜드. 클린뷰티에서 성분 효능까지 갖춘 Z세대형 고기능성 비건 스킨케어입니다.',
    client: '셀트리온스킨큐어',
    pdfUrl: '/portfolio/Plodica.pdf',
  },
  'biocellheal': {
    id: 'biocellheal',
    title: 'BIOCELLHEAL [바이오셀힐]',
    subtitle: '"Heal Your Skin, Cell by Cell"',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics',
    tags: ['Brand Development', 'Brand Identity', 'Package Design'],
    description: '세포 단위의 정밀한 케어로 피부 본연의 힘을 되살리는 바이오 스킨케어 브랜드. 첨단 바이오 기술력을 담아 손상된 피부 세포의 재생과 회복을 돕고, 건강하고 탄력 있는 피부로 가꾸어 줍니다.',
    pdfUrl: '/portfolio/BIOCELLHEAL.pdf',
  },
  'jinny-h': {
    id: 'jinny-h',
    title: 'JINNY H [지니에이치]',
    subtitle: '"Your Skin, Our Magic"',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics',
    tags: ['Brand Development', 'Brand Identity', 'Package Design'],
    description: '당신의 피부에 마법 같은 변화를 선사하는 프리미엄 스킨케어 브랜드. 피부 고민에 맞춘 맞춤형 솔루션으로, 건강하고 빛나는 피부를 위한 특별한 경험을 제공합니다.',
    pdfUrl: '/portfolio/JINNY H.pdf',
  },
};

const WorkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? portfolioDetails[id] : null;

  if (!project) {
    return (
      <Layout>
        <Container className="py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              프로젝트를 찾을 수 없습니다
            </h1>
            <Link
              to="/Work"
              className="text-gray-600 hover:text-black transition-colors"
            >
              ← 목록으로 돌아가기
            </Link>
          </div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Project Header */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <Link
            to="/Work"
            className="text-gray-500 hover:text-black transition-colors text-sm md:text-base"
          >
            ← Projects
          </Link>
          <div className="mt-8 mb-4">
            <span className="text-gray-500 text-lg">[{project.categoryLabel}]</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            {project.subtitle}
          </p>

          {/* Tags */}
          <div className="mb-6">
            <p className="text-gray-600">
              {project.tags.join(' | ')}
            </p>
            {project.client && (
              <p className="text-gray-500 mt-2">Client: {project.client}</p>
            )}
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
        </Container>
      </section>

      {/* PDF Content */}
      <section className="pb-16 bg-gray-50">
        <Container>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              src={`${project.pdfUrl}#toolbar=0&navpanes=0`}
              title={project.title}
              className="w-full"
              style={{ height: '80vh', minHeight: '600px' }}
            />
          </div>

          {/* Download Link */}
          <div className="mt-8 text-center">
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors mr-4"
            >
              PDF 전체보기
            </a>
            <Link
              to="/Work"
              className="inline-block px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              목록으로
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default WorkDetailPage;
