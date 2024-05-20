import { Button, makeStyles, mergeClasses, Popover, PopoverSurface, PopoverTrigger, PositioningShorthand, shorthands } from '@fluentui/react-components'
import React, { useState } from 'react'
import type { PositioningProps } from '@fluentui/react-components';
//02positioning-components

const useStyles = makeStyles({
    container: {}
})



export default function ShorthandPositions() {
    const styles = useStyles();

    const offset: PositioningProps['offset'] = ({
        positionedRect,
        targetRect,
        position,
        alignment,
    }) => {
        console.log("positionedRect.width", positionedRect.width)
        return { crossAxis: 10, mainAxis: positionedRect.width / 2 }
    }

    console.log("offset" , offset);
    return (
        <div className={styles.container} >
            <Popover positioning={{ position: "after", offset }}>
                <PopoverTrigger disableButtonEnhancement>
                    <Button appearance={'primary'}>Click me</Button>
                </PopoverTrigger>
                <PopoverSurface style={{ minWidth: 100 }}>Container</PopoverSurface>
            </Popover>
        </div>
    );
}
