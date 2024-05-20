import React from 'react'

export default function Parent({ childComponentType }: { childComponentType: React.FC<{ childProp: string }> }) {

    const ChildComponentType = childComponentType;

    const propToChild = "这是来自父组件的属性值";

    return (
        <div>
            <h2>父组件</h2>
            {/* 渲染传入的子组件类型，并将属性传递给子组件 */}
            <ChildComponentType childProp={propToChild} />
        </div>
    )
}
