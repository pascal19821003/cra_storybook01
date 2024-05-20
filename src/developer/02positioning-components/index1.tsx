import { Button, Popover, PopoverSurface, PopoverTrigger, PositioningProps } from '@fluentui/react-components'
import React from 'react'

//02positioning-components




export default function PositioningComponents(props: PositioningProps) {
    return (
        <div style={{marginLeft:50, marginTop:20}}>
            <Popover positioning={props}>
                <PopoverTrigger disableButtonEnhancement>
                    <Button appearance='primary'>Click me</Button>
                </PopoverTrigger>
                <PopoverSurface style={{ minHeight: 100 }}>Container</PopoverSurface>
            </Popover>

        </div>
    )
}
