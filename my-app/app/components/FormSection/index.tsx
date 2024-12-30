import React from "react";

const FormSection: React.FC = () => {
  return (
    <form className="space-y-6">
      <div>
        <h3 className="text-lg font-bold">Complete registration payment</h3>
        <p className="text-sm font-semibold mt-4">Personal details</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <input
            type="text"
            placeholder="Address line"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1A3B32]"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1A3B32]"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1A3B32]"
          />
          <input
            type="text"
            placeholder="Postal code"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1A3B32]"
          />
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">Payment methods</p>
        <div className="flex flex-wrap justify-start gap-4 mt-2">
          <img
            src="/assets/visa-logo-visa-icon-transparent-free-png.webp"
            alt="Visa"
            className="h-8 max-w-full object-contain"
          />
          <img
            src="/assets/stripe-logo-png-transparent.webp"
            alt="Stripe"
            className="h-8 max-w-full object-contain"
          />
          <img
            src="/assets/paypal-logo.webp"
            alt="PayPal"
            className="h-8 max-w-full object-contain"
          />
          <img
            src="/assets/mastercard_PNG16.webp"
            alt="MasterCard"
            className="h-8 max-w-full object-contain"
          />
          <img
            src="/assets/purepng.com-google-pay-gpay-logobrandlogobrand-logoiconssymbolslogosgoogle-681522937443muxmx.webp"
            alt="Google Pay"
            className="h-8 max-w-full object-contain"
          />
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold">Card details</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <input
            type="text"
            placeholder="Cardholder's name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1A3B32]"
          />
          <input
            type="text"
            placeholder="Card number"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1A3B32]"
          />
          <input
            type="text"
            placeholder="Expiry"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1A3B32]"
          />
          <input
            type="text"
            placeholder="CVC"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1A3B32]"
          />
        </div>
      </div>
    </form>
  );
};

export default FormSection;
