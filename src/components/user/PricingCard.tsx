import React from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  buttonLabel: string;
  isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  currency,
  period,
  features,
  buttonLabel,
  isHighlighted = false,
}) => {
  return (
    <div
      className={`p-6 w-[80%] mx-[auto] rounded-xl shadow-lg flex flex-col justify-between h-[500px] ${
        isHighlighted ? "bg-[#24305E] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex-grow">
        {/* Title and Description */}
        <h2
          className={`text-2xl font-bold ${
            isHighlighted ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h2>
        <p className="text-sm my-4">{description}</p>

        {/* Price */}
        <div className="text-5xl font-bold mb-4">
          {price}{" "}
          <span className="text-lg font-normal">
            {currency} / {period}
          </span>
        </div>

        {/* Features List */}
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-white mr-2">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <button
        className={`w-full py-2 px-4 rounded-lg font-bold mt-auto ${
          isHighlighted ? "bg-white text-[#174C48]" : "bg-[#0C0AFF] text-white"
        } hover:bg-opacity-90 transition`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default PricingCard;
