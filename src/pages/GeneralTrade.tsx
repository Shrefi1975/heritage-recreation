import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, SprayCan, Refrigerator, Scissors, Video, Zap, Wrench, Car, Truck, Sofa, BookOpen, Gamepad2, Shirt, Wheat, Cog, ShieldCheck, Hammer, Globe2, Sparkles } from 'lucide-react';
import CategoryPage from '@/components/CategoryPage';
import SectorModal from '@/components/SectorModal';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImg from '@/assets/services/trade-import-export-african.jpg';

const scope = {
  ar: [
    'المواد الغذائية والمنتجات الاستهلاكية سريعة التداول.',
    'المنتجات المنزلية والمنظفات ومنتجات العناية الشخصية.',
    'الأجهزة المنزلية والكهربائية والإلكترونيات الاستهلاكية.',
    'أجهزة العناية المنزلية وأجهزة العناية الشخصية الكهربائية.',
    'أنظمة الأمن والمراقبة.',
    'المولدات والبطاريات والمحولات والمعدات الكهربائية.',
    'مواد البناء ومواد التشطيب والتجهيزات الصحية والكهربائية.',
    'السيارات والمركبات التجارية والشاحنات والحافلات وقطع الغيار.',
    'المعدات الثقيلة والآليات ومعدات الورش وقطع غيار الشاحنات والمعدات الثقيلة.',
    'الأثاث والتجهيزات للمنازل والمكاتب والمدارس والفنادق والمستشفيات والمرافق العامة.',
    'المستلزمات المدرسية والقرطاسية والوسائل التعليمية وتجهيزات الفصول الدراسية.',
    'ألعاب الأطفال والألعاب التعليمية والمنتجات الترفيهية والرياضية.',
    'الملابس والمنسوجات والزي المدرسي والزي المهني ومستلزماتها.',
    'المعدات الزراعية وأنظمة الري والبذور والأسمدة والأعلاف ومستلزمات الثروة الحيوانية.',
    'المعدات الصناعية ومستلزمات النفط والغاز ومعدات التعدين ومنتجات السلامة المهنية.',
    'أنظمة الأمن والسلامة ومكافحة الحريق.',
  ],
  en: [
    'Food products and fast-moving consumer goods.',
    'Household products, detergents and personal care.',
    'Home appliances, electrical goods and consumer electronics.',
    'Home care devices and electric personal-care devices.',
    'Security and surveillance systems.',
    'Generators, batteries, transformers and electrical equipment.',
    'Building and finishing materials, sanitary and electrical fittings.',
    'Cars, commercial vehicles, trucks, buses and spare parts.',
    'Heavy machinery, workshop equipment and truck & heavy-equipment spare parts.',
    'Furniture and fit-out for homes, offices, schools, hotels, hospitals and public facilities.',
    'School supplies, stationery, educational aids and classroom equipment.',
    "Children's toys, educational games, recreational and sporting products.",
    'Clothing, textiles, school and professional uniforms and accessories.',
    'Agricultural equipment, irrigation systems, seeds, fertilizers, feed and livestock supplies.',
    'Industrial equipment, oil & gas and mining supplies, occupational safety products.',
    'Security, safety and fire-fighting systems.',
  ],
  fr: [
    "Produits alimentaires et biens de consommation à rotation rapide.",
    "Produits ménagers, détergents et soins personnels.",
    "Électroménager, appareils électriques et électronique grand public.",
    "Appareils de soins domestiques et électriques personnels.",
    "Systèmes de sûreté et surveillance.",
    "Générateurs, batteries, transformateurs et équipements électriques.",
    "Matériaux de construction, finitions, sanitaires et installations électriques.",
    "Voitures, véhicules commerciaux, camions, bus et pièces détachées.",
    "Engins lourds, équipements d'atelier et pièces pour camions et engins.",
    "Mobilier et aménagement pour maisons, bureaux, écoles, hôtels, hôpitaux et administrations.",
    "Fournitures scolaires, papeterie, matériel pédagogique et équipement des classes.",
    "Jouets, jeux éducatifs, produits récréatifs et sportifs.",
    "Vêtements, textiles, uniformes scolaires et professionnels.",
    "Équipements agricoles, irrigation, semences, engrais, aliments et élevage.",
    "Équipements industriels, fournitures pétrole/gaz, mines et sécurité au travail.",
    "Systèmes de sûreté, sécurité et lutte contre l'incendie.",
  ],
  zh: [
    '食品和快速消费品。',
    '家用产品、洗涤剂和个人护理产品。',
    '家用电器、电气产品和消费电子产品。',
    '家庭护理设备和电动个人护理设备。',
    '安全和监控系统。',
    '发电机、电池、变压器和电气设备。',
    '建筑和装饰材料、卫生和电气配件。',
    '汽车、商用车辆、卡车、巴士和备件。',
    '重型机械、车间设备以及卡车和重型设备备件。',
    '家庭、办公室、学校、酒店、医院和公共设施的家具和陈设。',
    '学习用品、文具、教学辅助工具和教室设备。',
    '儿童玩具、教育游戏、娱乐和运动产品。',
    '服装、纺织品、校服和专业制服及配件。',
    '农业设备、灌溉系统、种子、肥料、饲料和畜牧用品。',
    '工业设备、石油天然气和矿业用品、职业安全产品。',
    '安全、安保和消防系统。',
  ],
};

const exportItem = {
  ar: 'التصدير من تشاد: دعم تصدير المنتجات التشادية إلى الأسواق الإقليمية والدولية (المنتجات الزراعية، الصمغ العربي، الثروة الحيوانية، الجلود، والمواد الخام).',
  en: 'Export from Chad: supporting exports of Chadian products to regional and international markets (agricultural crops, gum arabic, livestock, hides, and raw materials).',
  fr: "Export depuis le Tchad: soutien à l'exportation de produits tchadiens vers les marchés régionaux et internationaux (produits agricoles, gomme arabique, élevage, cuirs, matières premières).",
  zh: '从乍得出口：支持乍得产品出口到区域和国际市场（农产品、阿拉伯胶、畜牧业、皮革和原材料）。',
};

// Short titles + icons + gradients + modal background image for each scope card.
const scopeMeta: { icon: any; color: string; image: string; title: { ar: string; en: string; fr: string; zh: string } }[] = [
  { icon: Utensils, color: 'from-orange-500 to-red-500', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80', title: { ar: 'المواد الغذائية والاستهلاكية', en: 'Food & FMCG', fr: 'Alimentation & FMCG', zh: '食品与快消品' } },
  { icon: SprayCan, color: 'from-sky-500 to-cyan-500', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1600&q=80', title: { ar: 'المنتجات المنزلية والعناية', en: 'Household & Personal Care', fr: 'Ménager & Soins', zh: '家居与个护' } },
  { icon: Refrigerator, color: 'from-indigo-500 to-blue-600', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80', title: { ar: 'الأجهزة المنزلية والإلكترونيات', en: 'Appliances & Electronics', fr: 'Électroménager & Électronique', zh: '家电与电子' } },
  { icon: Scissors, color: 'from-pink-500 to-rose-500', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80', title: { ar: 'أجهزة العناية الشخصية', en: 'Personal Care Devices', fr: 'Appareils de Soins', zh: '个人护理设备' } },
  { icon: Video, color: 'from-slate-600 to-zinc-700', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&q=80', title: { ar: 'أنظمة الأمن والمراقبة', en: 'Security & Surveillance', fr: 'Sûreté & Surveillance', zh: '安防与监控' } },
  { icon: Zap, color: 'from-yellow-500 to-amber-600', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80', title: { ar: 'المولدات والمعدات الكهربائية', en: 'Generators & Electrical', fr: 'Générateurs & Électrique', zh: '发电机与电气' } },
  { icon: Hammer, color: 'from-stone-600 to-gray-700', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80', title: { ar: 'مواد البناء والتشطيب', en: 'Building Materials', fr: 'Matériaux de Construction', zh: '建筑与装修材料' } },
  { icon: Car, color: 'from-red-500 to-orange-600', image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600&q=80', title: { ar: 'السيارات والمركبات التجارية', en: 'Vehicles & Trucks', fr: 'Véhicules & Camions', zh: '汽车与商用车辆' } },
  { icon: Truck, color: 'from-amber-600 to-yellow-700', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80', title: { ar: 'المعدات الثقيلة والآليات', en: 'Heavy Machinery', fr: 'Engins Lourds', zh: '重型机械' } },
  { icon: Sofa, color: 'from-emerald-500 to-teal-600', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80', title: { ar: 'الأثاث والتجهيزات', en: 'Furniture & Fit-out', fr: 'Mobilier & Aménagement', zh: '家具与装饰' } },
  { icon: BookOpen, color: 'from-blue-500 to-indigo-600', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80', title: { ar: 'المستلزمات المدرسية والتعليمية', en: 'School & Educational', fr: 'Scolaire & Éducatif', zh: '学习与教育用品' } },
  { icon: Gamepad2, color: 'from-fuchsia-500 to-purple-600', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1600&q=80', title: { ar: 'الألعاب والرياضة', en: 'Toys & Sports', fr: 'Jouets & Sport', zh: '玩具与运动' } },
  { icon: Shirt, color: 'from-violet-500 to-purple-600', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1600&q=80', title: { ar: 'الملابس والمنسوجات', en: 'Clothing & Textiles', fr: 'Vêtements & Textiles', zh: '服装与纺织' } },
  { icon: Wheat, color: 'from-green-500 to-lime-600', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80', title: { ar: 'المعدات الزراعية والثروة الحيوانية', en: 'Agri & Livestock', fr: 'Agriculture & Élevage', zh: '农业与畜牧' } },
  { icon: Cog, color: 'from-gray-600 to-slate-700', image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1600&q=80', title: { ar: 'المعدات الصناعية والنفط والغاز', en: 'Industrial & Oil/Gas', fr: 'Industriel & Pétrole/Gaz', zh: '工业与油气' } },
  { icon: ShieldCheck, color: 'from-rose-600 to-red-700', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1600&q=80', title: { ar: 'أنظمة السلامة والحريق', en: 'Safety & Fire Systems', fr: 'Sécurité & Incendie', zh: '安全与消防系统' } },
];

const exportMeta = {
  icon: Globe2,
  color: 'from-teal-500 to-emerald-600',
  image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80',
  title: { ar: 'التصدير من تشاد', en: 'Export from Chad', fr: 'Export depuis le Tchad', zh: '从乍得出口' },
};

const ScopeOfTrade: React.FC = () => {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<any>(null);
  const baseItems = scope[language as keyof typeof scope] || scope.en;
  // Cards: base scope first, export moved to LAST.
  const cards = [
    ...baseItems.map((desc, i) => ({
      id: `scope-${i}`,
      icon: scopeMeta[i]?.icon,
      color: scopeMeta[i]?.color || 'from-primary to-accent',
      title: scopeMeta[i]?.title[language as 'ar'|'en'|'fr'|'zh'] || scopeMeta[i]?.title.en || '',
      desc,
    })),
    {
      id: 'export',
      icon: exportMeta.icon,
      color: exportMeta.color,
      title: exportMeta.title[language as 'ar'|'en'|'fr'|'zh'] || exportMeta.title.en,
      desc: exportItem[language as 'ar'|'en'|'fr'|'zh'] || exportItem.en,
    },
  ];

  const heading = language === 'ar' ? 'التجارة العامة والاستيراد والتصدير'
    : language === 'fr' ? "Commerce général, import et export"
    : language === 'zh' ? '综合贸易、进口与出口'
    : 'General Trade, Import & Export';
  const intro = language === 'ar'
    ? 'تشمل أنشطتنا في مجال التجارة العامة والاستيراد والتصدير مجموعة واسعة من المنتجات والفئات التجارية:'
    : language === 'fr'
    ? "Nos activités en commerce général, import et export couvrent une large gamme de produits et catégories:"
    : language === 'zh'
    ? '我们在综合贸易、进口和出口领域涵盖广泛的产品和类别:'
    : 'Our activities in general trade, import and export cover a wide range of products and categories:';
  const badgeText = language === 'ar' ? 'مجالاتنا التجارية'
    : language === 'fr' ? 'Nos Domaines'
    : language === 'zh' ? '我们的领域'
    : 'Our Trade Areas';

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-muted/20 via-background to-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-xs py-1.5 px-3 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            {badgeText}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">{heading}</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">{intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.04 }}
                onClick={() => setSelected({
                  id: c.id,
                  icon: c.icon,
                  title: c.title,
                  description: c.desc,
                  fullDescription: c.desc,
                  services: [],
                  color: c.color,
                })}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border group cursor-pointer"
              >
                <div className={`relative h-32 bg-gradient-to-br ${c.color} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {Icon && <Icon className="h-14 w-14 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="font-bold text-base md:text-lg text-primary mb-2 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {c.desc}
                  </p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${c.color}`} />
              </motion.article>
            );
          })}
        </div>
      </div>
      <SectorModal isOpen={!!selected} onClose={() => setSelected(null)} sector={selected} />
    </section>
  );
};


const GeneralTradeIntro: React.FC = () => {
  const { language } = useLanguage();
  const content = {
    ar: {
      title: 'مجالاتنا',
      subtitle: 'التجارة العامة والاستيراد والتصدير',
      tagline: 'شبكة توريد عالمية وتجارة دولية موثوقة',
      paragraphs: [
        'تقدم Global Business & Supplies (GBS) خدمات التجارة العامة والاستيراد والتصدير والتوريد في تشاد، من خلال توفير مجموعة واسعة من المنتجات والمعدات والمواد اللازمة للقطاع الحكومي، والقطاع الخاص، والمنظمات الدولية وغير الحكومية، والمشاريع التجارية والتنموية.',
        'وبصفتها شركة توريد وتجارة مقرها في تشاد، تعمل GBS على تلبية احتياجات السوق المحلي من خلال الاستيراد من الموردين والمصنعين الإقليميين والدوليين، والتوريد والتوزيع داخل تشاد، إلى جانب دعم تصدير بعض المنتجات والمواد المحلية إلى الأسواق الخارجية. كما تتعاون الشركة مع المصنعين والموردين والشركات الراغبة في العمل داخل السوق التشادية من خلال التوريد، والتوزيع، والتمثيل التجاري، وبناء شراكات طويلة الأمد.',
      ],
    },
    en: {
      title: 'Our Areas',
      subtitle: 'General Trade, Import & Export',
      tagline: 'A reliable global supply network and international trade',
      paragraphs: [
        'Global Business & Supplies (GBS) delivers general trade, import, export, and supply services in Chad by providing a wide range of products, equipment, and materials for the public sector, private sector, international organizations, NGOs, and commercial and development projects.',
        'As a Chad-based supply and trading company, GBS meets local market needs by importing from regional and international suppliers and manufacturers, supplying and distributing across Chad, and supporting the export of selected local products and materials to foreign markets. GBS also partners with manufacturers, suppliers, and companies wishing to operate in Chad through supply, distribution, commercial representation, and long-term partnerships.',
      ],
    },
    fr: {
      title: 'Nos Domaines',
      subtitle: 'Commerce Général, Import & Export',
      tagline: 'Un réseau d’approvisionnement mondial fiable et un commerce international',
      paragraphs: [
        "Global Business & Supplies (GBS) fournit des services de commerce général, d'importation, d'exportation et d'approvisionnement au Tchad en offrant une large gamme de produits, d'équipements et de matériaux destinés au secteur public, au secteur privé, aux organisations internationales et ONG, ainsi qu'aux projets commerciaux et de développement.",
        "Société de commerce et d'approvisionnement basée au Tchad, GBS répond aux besoins du marché local en important auprès de fournisseurs et fabricants régionaux et internationaux, en approvisionnant et distribuant sur tout le territoire, et en soutenant l'exportation de certains produits et matériaux locaux vers les marchés étrangers. GBS s'associe également avec les fabricants, fournisseurs et entreprises souhaitant opérer sur le marché tchadien via l'approvisionnement, la distribution, la représentation commerciale et des partenariats à long terme.",
      ],
    },
    zh: {
      title: '我们的领域',
      subtitle: '综合贸易、进口与出口',
      tagline: '可靠的全球供应网络与国际贸易',
      paragraphs: [
        'Global Business & Supplies (GBS) 在乍得提供综合贸易、进口、出口和供应服务，为政府部门、私营部门、国际组织和非政府组织以及商业和发展项目提供广泛的产品、设备和材料。',
        '作为一家总部位于乍得的供应与贸易公司，GBS 通过从区域和国际供应商及制造商进口、在乍得境内供应和分销，并支持部分本地产品和材料出口到国外市场，来满足本地市场需求。GBS 还与希望在乍得市场运营的制造商、供应商和公司合作，开展供应、分销、商业代表以及长期合作伙伴关系。',
      ],
    },
  } as const;
  const c = content[language as keyof typeof content] || content.en;
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container max-w-5xl">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 start-0 h-1.5 w-24 bg-gradient-to-r from-accent to-orange-500 rounded-br-lg" />
          <div className="mb-5">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent mb-2">{c.title}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">{c.subtitle}</h2>
            <p className="text-base md:text-lg text-foreground/70 font-semibold mt-2">{c.tagline}</p>
          </div>
          <div className="space-y-4">
            {c.paragraphs.map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GeneralTrade: React.FC = () => (
  <CategoryPage
    heroImage={heroImg}
    badge={{ ar: 'مجالاتنا التجارية', en: 'Our Trade Categories', zh: '贸易类别', fr: 'Nos Catégories' }}
    title={{
      ar: 'التجارة العامة والاستيراد والتصدير',
      en: 'General Trade, Import & Export',
      zh: '综合贸易、进口与出口',
      fr: 'Commerce Général, Import & Export',
    }}
    tagline={{
      ar: 'شبكة استيراد وتصدير عالمية لجميع الفئات التجارية',
      en: 'Global import/export network across all commercial categories',
      zh: '涵盖所有商业类别的全球进出口网络',
      fr: 'Réseau import/export mondial couvrant toutes les catégories',
    }}
    intro={{
      ar: 'نغطي جميع فئات التجارة العامة والاستيراد والتصدير في السوق التشادي — من المواد الغذائية والأجهزة المنزلية إلى المعدات الثقيلة والصناعية، مروراً بمواد البناء والأثاث والمستلزمات المدرسية وأنظمة الأمن والسلامة.',
      en: 'We cover every category of general trade, import and export for the Chadian market — from food and home appliances to heavy and industrial equipment, construction materials, furniture, school supplies and safety systems.',
      zh: '我们覆盖乍得市场综合贸易、进出口的每个类别 — 从食品和家用电器到重型和工业设备,建筑材料、家具、学习用品和安全系统。',
      fr: 'Nous couvrons toutes les catégories du commerce général, import et export pour le marché tchadien — de l\'alimentation et l\'électroménager aux engins lourds et industriels, matériaux de construction, mobilier, fournitures scolaires et sécurité.',
    }}
    belowHero={<GeneralTradeIntro />}
    serviceSlugs={[
      'gt-fmcg',
      'gt-home-appliances',
      'gt-construction-materials',
      'gt-vehicles',
      'gt-trucks',
      'gt-heavy-machinery',
      'gt-furniture',
      'gt-school-supplies',
      'gt-safety-security',
    ]}
    extraContent={<ScopeOfTrade />}
  />
);

export default GeneralTrade;
