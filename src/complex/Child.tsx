import React from 'react'

export default function Child({ childProp }: { childProp: string }) {
    return (
        <div>
            <p>子组件的属性值：{childProp}</p>
        </div>
    );
}
