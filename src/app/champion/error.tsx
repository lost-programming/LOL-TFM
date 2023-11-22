"use client";

import React, { useEffect } from "react";

interface ErrorProps {
  error: Error;
}

// http response code 마다 다르게 만들어야 함
const Error = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h3>{error.message || "검색하신 챔피언을 찾을 수 없습니다."}</h3>
    </div>
  );
};

export default Error;
