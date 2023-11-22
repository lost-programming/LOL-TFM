"use client";

import React from "react";

// http response code 마다 다르게 만들어야 함
const GlobalError = () => {
  return (
    <html>
      <body>
        <h3>요청하신 페이지를 찾을 수 없습니다.</h3>
      </body>
    </html>
  );
};

export default GlobalError;
