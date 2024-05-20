import { Button, makeStyles, mergeClasses, Popover, PopoverSurface, PopoverTrigger, PositioningProps, PositioningShorthand, shorthands } from '@fluentui/react-components'
import React from 'react'

//02positioning-components

const useExampleStyles = makeStyles({
    popoverSurface: {
        width: '150px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    target: {
        height: '50px',
        width: '140px',
        display: 'flex',
        justifyContent: "center",
        // justifyContent: 'space-between',
    }
})


const useGridExampleStyles = makeStyles({
    // targetContainer: {
    //     display: "inline-block",
    //     gridTemplateColumns: "repeat(5, 1fr)",
    //     gridTemplateRows: "repeat(5, 64px)",
    //     ...shorthands.gap('20px'),
    //     ...shorthands.margin('16px', '128px')
    // }

    targetContainer: {
        // backgroundColor: "green",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
        // gridTemplateColumns: "repeat(5, 1fr)",
        // gridTemplateRows: "repeat(5, 64px)",
        ...shorthands.gap("20px"),
        ...shorthands.margin("16px", "128px"),
        // justifyContent:"center",
        // alignItems:"end"
    },

    item: {
        textAlign: 'center',
        ...shorthands.padding('20px', '10px'),
        fontSize: '30px',
        // backgroundColor: 'lightblue',
    },
    item12: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        // alignItems:"revert"
        // "& div:nth-child(2)": {
        //     transform: "rotate(90deg)"
        // }
    },
    item13: {
        display: "flex",
        justifyContent: "center",
        "& div:nth-child(2)": {
            display: 'none'
        }
    },
    item14: {
        display: "flex",
        justifyContent: "space-between",

    },
    item21: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        "& div:nth-child(2)": {
            transform: "rotate(-90deg)"
        }
    },
    item25: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        "& div:nth-child(2)": {
            transform: "rotate(90deg)"
        }
    },
    item31: {
        display: "flex",
        justifyContent: "center",
        "& div:nth-child(2)": {
            display: 'none'
        }
    },
    item35: {
        display: "flex",
        justifyContent: "center",
        "& div:nth-child(2)": {
            display: 'none'
        }
    },
    item41: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& div:nth-child(2)": {
            transform: 'rotate(-90deg)'
        }
    },
    item45: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

    },
    item52: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        "& div:nth-child(2)": {
            transform: "rotate(180deg)"
        }
    },
    item53: {
        display: "flex",

        justifyContent: "center",
        "& div:nth-child(2)": {
            display: 'none'
        }
    },
    item54: {
        display: "flex",
        justifyContent: "space-between",
        "& div:nth-child(2)": {
            transform: "rotate(180deg)"
        }
    },
})

export default function ShorthandPositions() {
    const styles = useGridExampleStyles();

    return (
        <>
            <div className={styles.targetContainer} >
                <div className={styles.item} style={{ gridColumn: '2/span 1' }}>
                    <PositioningComponents positioning='above-start' targetContent='above-start' targetClassName={styles.item12} />
                </div>
                <div className={styles.item} style={{ gridColumn: '3/span 1' }}>
                    <PositioningComponents positioning='above' targetContent='above' targetClassName={styles.item13} />
                </div>
                <div className={styles.item} style={{ gridColumn: '4/span 1' }}>
                    <PositioningComponents positioning={'above-end'} targetContent='above-end' targetClassName={styles.item14} />
                </div>
                <div className={styles.item} style={{ gridRow: 2, gridColumn: '1/span 1' }}>
                    <PositioningComponents positioning={'before-top'} targetContent='before-top' targetClassName={styles.item21} />
                </div>
                <div className={styles.item} style={{ backgroundColor: "lightblue", gridRow: '2/5', gridColumn: '2/span 3', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Click each button to see its positioned element
                </div>
                <div className={styles.item} style={{ gridRow: 2, gridColumn: '5/span 1' }}>
                    <PositioningComponents positioning={'after-top'} targetContent='after-top' targetClassName={styles.item25} />
                </div>
                <div className={styles.item} style={{ gridRow: 3, gridColumn: '1/span 1' }}>
                    <PositioningComponents positioning={'before'} targetContent='before' targetClassName={styles.item31} />
                </div>
                <div className={styles.item} style={{ gridRow: 3, gridColumn: '5/span 1' }}>
                    <PositioningComponents positioning={'after'} targetContent='after' targetClassName={styles.item35} />
                </div>
                <div className={styles.item} style={{ gridRow: 4, gridColumn: '1/span 1' }}>
                    <PositioningComponents positioning={'before-bottom'} targetContent='before-bottom' targetClassName={styles.item41} />
                </div>
                <div className={styles.item} style={{ gridRow: 4, gridColumn: '5/span 1' }}>
                    <PositioningComponents positioning={'after-bottom'} targetContent='after-bottom' targetClassName={styles.item45} />
                </div>
                <div className={styles.item} style={{ gridRow: 5, gridColumn: '2/span 1' }}>
                    <PositioningComponents positioning={'below-start'} targetContent='below-start' targetClassName={styles.item52} />
                </div>
                <div className={styles.item} style={{ gridRow: 5, gridColumn: '3/span 1' }}>
                    <PositioningComponents positioning={'below'}  targetContent='below' targetClassName={styles.item53} />
                </div>
                <div className={styles.item} style={{ gridRow: 5, gridColumn: '4/span 1' }}>
                    <PositioningComponents positioning={'below-end'} targetContent='below-end' targetClassName={styles.item54} />
                </div>
                {/* 
                <PositioningComponents />
                <PositioningComponents />
                <PositioningComponents />
                <PositioningComponents /> */}
            </div>

        </>
    );
}

function PositioningComponents(props: {
    positioning?: PositioningShorthand;
    gridArea?: string;
    targetContent?: React.ReactNode;
    targetClassName?: string;
}) {
    const { positioning, targetContent = 'Click me', targetClassName } = props;
    const styles = useExampleStyles();
    return (
        <Popover positioning={positioning}>
            <PopoverTrigger disableButtonEnhancement>
                <Button appearance='primary'
                    className={mergeClasses(styles.target, targetClassName)}
                >
                    <div >
                        {targetContent}
                    </div>
                    <div  >
                        ↑
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverSurface style={{ minHeight: 100 }}>Container</PopoverSurface>
        </Popover>

    )
}
