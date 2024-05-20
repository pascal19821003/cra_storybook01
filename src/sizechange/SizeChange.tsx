import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const goods = "google plugin css style haha".split(" ");

/**
 * parent listen size change of child
 * @returns 
 */
export default function SizeChange() {

    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(30)

    useEffect(() => {
        console.log("1111");
        if (parentRef.current) {
            console.log("2222")

            const parentElement = parentRef.current;


            if (parentElement.hasChildNodes()) {
                let lastEle = parentElement.lastElementChild;

                if (lastEle) {
                    const observer = new ResizeObserver(entries => {
                        for (let entry of entries) {
                            if (entry.target === lastEle) {
                                console.log('Child element resized');

                                childrenSizeChanged()
                                // let { clientWidth } = entry.target;
                                // 在这里可以执行父元素知道的操作
                            }
                        }
                    });

                    observer.observe(lastEle);

                    return () => {
                        if (lastEle) {
                            observer.unobserve(lastEle);
                        }
                    };
                }

            }


            /////

            // const { offsetHeight, offsetWidth } = childElement;

            // console.log("element size: ", { offsetHeight, offsetWidth })

            // const observer = new ResizeObserver(entries => {
            //     for (let entry of entries) {
            //         if (entry.target === childElement) {
            //             console.log('Child element resized');
            //             let { clientWidth } = entry.target;
            //             // 在这里可以执行父元素知道的操作
            //         }
            //     }
            // });

            // observer.observe(childElement);

            // return () => {
            //     observer.unobserve(childElement);
            // };


        }
    }, []);

    const childrenSizeChanged = () => {
        const parentElement = parentRef.current
        if (parentElement) {
            ////
            const childNodes = parentElement.childNodes;
            console.log("parentElement.children", parentElement.children);


            let childrenTotalWith = 0;

            let lastChildOffsetWidth = 0;
            let lastChildOffsetLeft = 0;
            // 遍历所有直接子元素
            for (let i = 0; i < childNodes.length; i++) {
                const childNode = childNodes[i];
                if (childNode.nodeType === Node.ELEMENT_NODE) {
                    // 这是一个元素节点
                    console.log(childNode);
                    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = childNode as any as { offsetWidth: number, offsetHeight: number, offsetLeft: number, offsetTop: number }

                    console.log(offsetWidth, offsetHeight, offsetLeft, offsetTop);
                    childrenTotalWith += offsetWidth;

                    if (i === childNodes.length - 1) {
                        // debugger;
                        lastChildOffsetWidth = offsetWidth
                        lastChildOffsetLeft = offsetLeft
                    }
                }
            }
            console.log("childrenTotalWith", childrenTotalWith)


            const { offsetHeight, offsetWidth, offsetLeft, offsetTop } = parentElement;

            console.log("parent", { offsetHeight, offsetWidth, offsetLeft, offsetTop })

            let childrightpos = lastChildOffsetLeft + lastChildOffsetWidth;
            let parentrightpos = offsetLeft + offsetWidth;

            console.log("childrightpos", childrightpos);
            console.log("parentrightpos", parentrightpos);


        }

    }

    const changeChildSize = () => {
        setWidth(width + 10)
    }

    return (
        <div className="container" ref={parentRef} >
            {/* <h2>parent</h2>
            <div className="child" ref={childRef}  >Resizable Childdddddd dfsdafdsa wds</div>
            <button onClick={changeChildSize} >change children size</button> */}
            {goods.map((item, index) => {
                return (<div className="child" key={item + index}>{item}</div>)
            })}
        </div>)
}
