import { Handle, Position } from 'reactflow';

export function OutputNode({ data }: { data: { label: string } }) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <Handle type="target" position={Position.Top} className="w-16 !bg-purple-500" />
      <div className="flex items-center">
        <div className="ml-2">
          <div className="text-lg font-bold">{data.label}</div>
          <select className="nodrag w-full p-2 rounded border">
            <option value="display">Display Result</option>
            <option value="save">Save to File</option>
            <option value="api">Send to API</option>
          </select>
        </div>
      </div>
    </div>
  );
}