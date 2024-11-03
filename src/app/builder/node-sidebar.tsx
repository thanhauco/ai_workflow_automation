import { Button } from '../ui/button'

const nodeTypes = [
  {
    type: 'aiPrompt',
    label: 'AI Prompt',
    description: 'Send prompts to AI models'
  },
  {
    type: 'text',
    label: 'Text Input',
    description: 'Add text content'
  },
  {
    type: 'image',
    label: 'Image Input',
    description: 'Add image content'
  },
  {
    type: 'output',
    label: 'Output',
    description: 'Display or save results'
  }
]

export function NodeSidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-64 bg-slate-800 p-4 text-white">
      <h2 className="text-xl font-bold mb-4">Nodes</h2>
      <div className="space-y-2">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            draggable
            onDragStart={(e) => onDragStart(e, node.type)}
            className="p-3 bg-slate-700 rounded-lg cursor-move hover:bg-slate-600 transition-colors"
          >
            <h3 className="font-medium">{node.label}</h3>
            <p className="text-sm text-slate-300">{node.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}