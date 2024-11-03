import { Handle, Position } from 'reactflow';

export function TextNode({ data }: { data: { label: string } }) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <Handle type="target" position={Position.Top} className="w-16 !bg-blue-500" />
      <div className="flex items-center">
        <div className="ml-2">
          <div className="text-lg font-bold">{data.label}</div>
          <textarea
            className="nodrag w-full p-2 rounded border"
            placeholder="Enter text content..."
          />
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-blue-500" />
    </div>
  );
}
