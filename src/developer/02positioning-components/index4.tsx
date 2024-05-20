import { Button, makeStyles, mergeClasses, Popover, PopoverSurface, PopoverTrigger, PositioningProps, PositioningShorthand, shorthands } from '@fluentui/react-components'
import React, { useState } from 'react'

//02positioning-components

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        "&>div, &>label": {
            ...shorthands.margin('10px'),
        }
    },
    inputItem: {
        display: "flex",
        ...shorthands.margin('10px', "10px", 0, "10px"),

    }
})



export default function ShorthandPositions() {
    const styles = useStyles();

    const [crossAxis, setCrossAxis] = useState(10);
    const [mainAxis, setMainAxis] = useState(10);

    return (
        <div className={styles.container} >

            <label className={styles.inputItem} style={{ gap: 10 }}>
                <code>crossAxis</code>
                <input type="number" value={crossAxis} onChange={(e) => {
                    setCrossAxis(Number(e.target.value))
                }} />
            </label>

            <label className={styles.inputItem} style={{ gap: 10 }}>
                <code>mainAxis</code>
                <input type="number" value={mainAxis} onChange={(e) => {
                    setMainAxis(Number(e.target.value))
                }} />
            </label>

            <div>
                <Popover positioning={{ position: "after", offset: { crossAxis, mainAxis } }}>
                    <PopoverTrigger disableButtonEnhancement>
                        <Button appearance='primary' style={{ width: 100 }}>Click me</Button>
                    </PopoverTrigger>
                    <PopoverSurface style={{ minWidth: 100 }}>Container</PopoverSurface>
                </Popover>
            </div>

            <div>
                <Popover positioning={{ position: "after", offset: { crossAxis, mainAxis } }}>
                    <PopoverTrigger disableButtonEnhancement>
                        <Button appearance='primary' style={{ width: 100 }}>Click me</Button>
                    </PopoverTrigger>
                    <PopoverSurface style={{ minWidth: 100 }}>Container</PopoverSurface>
                </Popover>
            </div>
        </div>
    );
}
