import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">對話練習 App</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white">
              功能介紹
            </a>
            <a href="#process" className="text-gray-300 hover:text-white">
              學習流程
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white">
              價格方案
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white"
            >
              用戶見證
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white">
              常見問題
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
              登入/註冊
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            提升你的語言對話能力，從今天開始！
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            模擬真實場景對話，專屬你的個性化語言學習工具，隨時隨地增強口說能力。
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg text-lg hover:bg-blue-600">
            立即加入免費試用
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-gray-800 text-center">
            主要功能
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <FeatureCard
              title="模擬真實場景對話"
              description="多種對話場景，讓你輕鬆練習不同情境的語言能力。"
            />
            <FeatureCard
              title="即時語音與文本分析"
              description="專業AI技術，提供發音與語法建議，幫助提升學習效果。"
            />
            <FeatureCard
              title="進度追蹤與學習建議"
              description="隨時掌握你的學習進度，提供個性化的改進建議。"
            />
            <FeatureCard
              title="多樣化練習主題"
              description="從初學到高級，適合各種語言程度的使用者。"
            />
            <FeatureCard
              title="AI 評分與改進建議"
              description="即時評估對話表現，讓你更快速地進步。"
            />
            <FeatureCard
              title="多語言支援"
              description="提供多國語言學習，滿足全球用戶的需求。"
            />
          </div>
        </div>
      </section>

      {/* Learning Process Section */}
      <section id="process" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-gray-800 text-center">
            學習流程
          </h3>
          <div className="grid md:grid-cols-4 gap-8 mt-10">
            <StepCard step="1" description="註冊並選擇目標語言" />
            <StepCard step="2" description="挑選對話主題開始練習" />
            <StepCard step="3" description="獲取 AI 評分與改進建議" />
            <StepCard step="4" description="追蹤進度並完成挑戰" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-gray-800">價格方案</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <PricingCard
              title="免費版"
              price="NT$0"
              features={["基礎功能", "少量對話場景", "每日進度追蹤"]}
            />
            <PricingCard
              title="進階版"
              price="NT$199/月"
              features={["更多主題", "進階語音分析", "個性化學習建議"]}
            />
            <PricingCard
              title="專業版"
              price="NT$399/月"
              features={["所有功能", "專屬對話主題", "專屬語音評估"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-gray-800">用戶見證</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <TestimonialCard
              name="小明"
              comment="這款App幫我自信開口，順利通過了面試！"
            />
            <TestimonialCard
              name="小華"
              comment="多種對話場景讓我輕鬆練習，效果顯著！"
            />
            <TestimonialCard
              name="小美"
              comment="即時語音分析功能非常實用，真的推薦！"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-gray-800 text-center">
            常見問題
          </h3>
          <div className="mt-8">
            <FAQItem
              question="如何開始練習？"
              answer="只需註冊並選擇對話主題即可開始。"
            />
            <FAQItem
              question="支援哪些語言？"
              answer="目前支援多種語言，包括英語、法語等。"
            />
            <FAQItem
              question="可以取消訂閱嗎？"
              answer="可以隨時取消訂閱，無需額外費用。"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 對話練習 App. 保留所有權利.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:underline">
              隱私政策
            </a>
            <a href="#" className="hover:underline">
              服務條款
            </a>
            <a href="#" className="hover:underline">
              聯絡我們
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
    <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
    <p className="text-gray-600 mt-3">{description}</p>
  </div>
);

const StepCard = ({ step, description }) => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
    <h4 className="text-4xl font-bold text-gray-800">{step}</h4>
    <p className="text-gray-600 mt-3">{description}</p>
  </div>
);

const PricingCard = ({ title, price, features }) => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
    <h4 className="text-2xl font-bold text-gray-800">{title}</h4>
    <p className="text-blue-600 text-3xl font-bold mt-4">{price}</p>
    <ul className="text-gray-600 mt-4 space-y-2">
      {features.map((feature, index) => (
        <li key={index}>- {feature}</li>
      ))}
    </ul>
    <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      選擇方案
    </button>
  </div>
);

const TestimonialCard = ({ name, comment }) => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
    <p className="text-gray-600 italic">“{comment}”</p>
    <h5 className="text-sm font-semibold text-gray-800 mt-4">- {name}</h5>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="mb-6">
    <h5 className="text-lg font-semibold text-gray-800">{question}</h5>
    <p className="text-gray-600 mt-2">{answer}</p>
  </div>
);

export default LandingPage;
