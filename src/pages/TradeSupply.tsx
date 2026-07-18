import React from 'react';
import CategoryPage from '@/components/CategoryPage';
import SectorsShowcase from '@/components/services/SectorsShowcase';
import heroImg from '@/assets/services/trade-import-export-african.jpg';

const TradeSupply: React.FC = () => (
  <CategoryPage
    heroImage={heroImg}
    badge={{ ar: 'مجالاتنا', en: 'Our Categories', zh: '业务领域', fr: 'Nos Domaines' }}
    title={{
      ar: 'التوريدات التجارية',
      en: 'Commercial Supply',
      zh: '商业供应',
      fr: 'Approvisionnements Commerciaux',
    }}
    tagline={{
      ar: 'شبكة توريد عالمية وتجارة دولية موثوقة',
      en: 'Global supply network and reliable international trade',
      zh: '全球供应网络与可靠的国际贸易',
      fr: "Réseau d'approvisionnement mondial et commerce international fiable",
    }}
    intro={{
      ar: 'نوفر المنتجات والمواد والمعدات والبضائع التجارية والاستهلاكية من خلال شبكة من المصنعين والموزعين والموردين المحليين والإقليميين والدوليين، إلى جانب خدمات التوريدات من تشاد إلى الأسواق الدولية وإدارة عمليات التجارة الدولية مع الشركاء حول العالم.',
      en: 'We supply products, materials, equipment, and commercial and consumer goods through a network of local, regional, and international manufacturers, distributors, and suppliers — along with export services from Chad to international markets and management of international trade operations.',
      zh: '我们通过本地、地区和国际制造商、分销商和供应商网络提供产品、材料、设备及商业和消费品,同时提供从乍得出口到国际市场的服务以及国际贸易运营管理。',
      fr: "Nous fournissons produits, matériaux, équipements et biens commerciaux et de consommation via un réseau de fabricants, distributeurs et fournisseurs locaux, régionaux et internationaux, ainsi que des services d'export depuis le Tchad et la gestion des opérations de commerce international.",
    }}
    serviceSlugs={['supply-trading', 'export-trade', 'international-trade']}
    extraContent={<SectorsShowcase />}
  />
);

export default TradeSupply;
