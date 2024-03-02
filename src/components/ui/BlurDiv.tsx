// BlurredDiv.tsx
import React from "react";

interface BlurredDivProps {
  style: React.CSSProperties;
  className: string;
}

const BlurredDiv: React.FC<BlurredDivProps> = ({ style, className }) => (
  <div style={style} className={className}></div>
);

export default BlurredDiv;
