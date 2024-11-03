import { Node, Edge } from 'reactflow';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'aiPrompt',
    position: { x: 0, y: 0 },
    data: { label: 'AI Prompt' },
  },
];

export const initialEdges: Edge[] = [];