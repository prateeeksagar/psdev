import { cn } from '@/lib/utils'
import React from 'react'

const GlassContainer = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("GlassContainer", className)}>
  <div className="GlassContent">
    {children}
  </div>
  <div className="GlassMaterial">
    <div className="GlassEdgeReflection"></div>
    <div className="GlassEmbossReflection"></div>
    <div className="GlassRefraction"></div>
    <div className="GlassBlur"></div>
    <div className="BlendLayers"></div>
    <div className="BlendEdge"></div>
    <div className="Highlight"></div>
  </div>
</div>
  )
}

export default GlassContainer
