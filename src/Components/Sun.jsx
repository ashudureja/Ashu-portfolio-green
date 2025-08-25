// SunburstIcon.jsx
import React from "react";
const Sun = ({ size = 400, color = "green" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 0L273 189L336 25L279 190L413 73L281 196L446 142L283 198L484 226L283 200L501 256L283 212L484 286L283 214L446 370L281 218L413 439L279 222L336 487L273 223L256 512L239 223L176 487L233 222L99 439L231 218L66 370L229 214L28 286L229 212L11 256L229 200L28 226L229 198L66 142L231 196L99 73L233 190L176 25L239 189L256 0Z" />
  </svg>
);

export default Sun;
