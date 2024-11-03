'use client'

import { NodeSidebar } from '@/components/builder/node-sidebar'
import { FlowBuilder } from '@/components/builder/flow-builder'

export default function BuilderPage() {
  return (
    <div className="flex h-screen w-full">
      <NodeSidebar />
      <div className="flex-1">
        <FlowBuilder />
      </div>
    </div>
  )
}
