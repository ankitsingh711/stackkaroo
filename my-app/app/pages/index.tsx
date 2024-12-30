import React from "react";
import Header from "../components/Header";
import LogoSection from "../components/LogoSection";
import FormSection from "../components/FormSection";

const PaymentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1A3B32] flex flex-col items-center">
      <Header title="Card payment" subtitle="Checkout form" />

      <div className="relative w-full mt-10">
        <main className="bg-white max-w-6xl mx-auto rounded-t-2xl shadow-lg p-12 h-[700px] grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <LogoSection />
          <FormSection />
        </main>
        <div className="absolute top-0 left-0 right-0 h-24 bg-[#1A3B32] z-0"></div>
      </div>
    </div>
  );
};

export default PaymentPage;
