import Image from "next/image";

const whatsappLink =
  "https://wa.me/212612345678?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%BA%D9%8A%D8%AA%20%D9%86%D8%B7%D9%84%D8%A8%20%D8%B4%D9%84%D8%A7%D8%B8%D8%A9%20%D9%86%D9%8A%D8%B3%D9%88%D8%A7%D8%B2%20%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9";

const highlights = [
  "مكونات طازجة 100٪ من خضرة، تونة ممتازة، وزيت زيتون بكر",
  "تحضير سريع أقل من ٣ دقائق، بلا مواد حافظة ولا إضافات صناعية",
  "توصل يومي داخل الدار البيضاء وممكن نجمدو الطلبات خارجها"
];

export default function Page() {
  return (
    <main className="page">
      <header className="top-bar">
        <div className="logo">
          <Image src="/logo.svg" alt="لوغو شلاظة" width={64} height={64} priority />
          <span className="logo-text">شلاظة نيسواز مغربية</span>
        </div>
        <div className="price-badge">
          <span className="price-value">79 درهم</span>
          <span className="price-note">سيرڤيس فردي فاخر</span>
        </div>
      </header>

      <section className="hero">
        <div className="copy">
          <p className="eyebrow">صحة وذوق بلا مجهود</p>
          <h1>
            بغيت شي حاجة صحية؟ بنينة؟ وواجدة فثواني؟
            <br />
            جرّب شلاظة نيسواز مغربية… وخلي صحتك هي الأولوية!
          </h1>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="cta-group">
            <a className="cta" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Image src="/whatsapp.svg" alt="واتساب" width={28} height={28} />
              <span>
                06 12 34 56 78
                <small>اضغط وطلب دابا على واتساب</small>
              </span>
            </a>
            <p className="secondary-info">
              نوفر كذلك باك عائلي وڤيغن بطلب مسبق. تواصل معنا للتفاصيل.
            </p>
          </div>
        </div>

        <div className="visual">
          <div className="scene">
            <div className="table-shadow" />
            <div className="plate">
              <Image
                src="/salad-hero.svg"
                alt="عرض الشلاظة فوق طاولة"
                width={340}
                height={340}
                priority
              />
            </div>
            <div className="hand">
              <span className="hand-inner">
                <Image src="/hand.svg" alt="يد خدامة" width={200} height={160} />
              </span>
            </div>
            <div className="glow" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          كاينة عروض خاصة للمطاعم والشركات. راسلونا واش بنينا لكم شيء باك حسب الطلب.
        </p>
      </footer>
    </main>
  );
}
