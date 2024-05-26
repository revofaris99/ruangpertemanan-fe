import React, { useState } from "react";

const ShowMore = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div className="flex text-center justify-center text-black">
        <button>show more</button>
      </div>
    </div>
  );
};

export default ShowMore;
