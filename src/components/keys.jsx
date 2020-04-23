import React, { useState } from "react";

const Keys = ({ setHasFired, onChange, rows }) => {
  return (
    <>
      <div>
        {rows.map((key) => (
          <div onMouseOver={(e) => onChange(e)} onMouseOut={() => setHasFired}>
            {key}
          </div>
        ))}
      </div>
    </>
  );
};

export default Keys;
