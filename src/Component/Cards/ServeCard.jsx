const ServeCard = ({order}) => {
  // Static mock data
  // const order = {
  //   order_title: "Beef Steak",
  //   table_no: 12,
  //   waiterId: "W-007",
  //   cooked_At: "12:45 PM",
  // };

  return (
    <div className="border rounded-xl p-5 shadow bg-green-50 hover:shadow-md transition">
      {/* Order Title */}
      <h3 className="text-xl font-bold text-green-700 mb-2">
        {order.order_title}
      </h3>

      {/* Table No */}
      <p className="text-gray-800">
        <span className="font-semibold">Table:</span> {order.table_no}
      </p>

      {/* Waiter ID */}
      <p className="text-gray-800">
        <span className="font-semibold">Waiter ID:</span> {order.waiterId}
      </p>

      {/* Cooking Time */}
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Cooking Time:</span> {order.cookedAt}
      </p>
    </div>
  );
};

export default ServeCard;