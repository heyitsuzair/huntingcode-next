import React from "react";

const Dummy = () => {
  return (
    <>
      <style jsx>
        {`
          .dummy {
            background-color: red;
          }
        `}
      </style>
      <div className="dummy">Dummy</div>
    </>
  );
};

export default Dummy;
