// src/nodes/image-node.tsx
import React from 'react';
import { Handle, Position } from 'reactflow';

export const ImageNode = ({ data }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #777', borderRadius: '5px', background: '#fff' }}>
      <img src={data.src} alt={data.label} style={{ width: '100%', borderRadius: '5px' }} />
      <div>{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};