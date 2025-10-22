const CookingCard = ({order}) => {
  // Mock data
//   const order = {
//     order_title: "Pasta Alfredo",
//     quantity: 2,
//     special_instruction: "Extra cheese, no garlic",
//   };

  return (
    <div
      className="rounded-xl p-5 shadow hover:shadow-lg"
      style={{
        background: "linear-gradient(#ffffff50, #FCB700), url('/public/cook-bg.gif')",
      }}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-primary mb-2">
        {order.order_title}
      </h3>

      {/* Quantity */}
      <p className="text-lg font-semibold">
        Quantity: <span className="text-gray-700">{order.quantity}</span>
      </p>

      {/* Special Instruction */}
      <p className="text-xs text-gray-600 mt-2 italic">
        {order.special_instruction}
      </p>

      {/* Static Button */}
      <button className="px-6 mt-3 py-1 shadow text-sm hover:bg-black hover:text-white bg-white cursor-pointer rounded-xl">
        Cooked?
      </button>
    </div>
  );
};

export default CookingCard;