import React, { useEffect, useState } from 'react'

type Props = {
    component: JSX.Element // Khi truyền props thì truyền dạng <component />
    mobileComponent?: JSX.Element
}
type ScreenType = {
    width: number,
    height: number
}

const ResponsiveItem = (props: Props) => {
    const [screen, setScreen] = useState<ScreenType>({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [component, setComponent] = useState<JSX.Element>(props.component);
    const setScreenWindow = () => {
        setScreen({
            width: window.innerWidth,
            height:window.innerHeight
        })
    }
    useEffect(() => {
        window.addEventListener('resize',setScreenWindow);
        window.addEventListener('load',setScreenWindow);
        return () => {
            window.removeEventListener('resize',setScreenWindow);
            window.removeEventListener('load',setScreenWindow);
        }
    }, [])
  
    useEffect(() => {
        if (screen.width <= 768 && props.mobileComponent) {
            setComponent(props.mobileComponent);
        }else {
            setComponent(props.component);
        }
    },[screen.width])


    return (
        <>
            {component}
        </>
    )
}

export default ResponsiveItem

/*
    2 type của component
    const Component:React.FC = (props) => { return <div></div>}

    const <Component />: JSXElement

*/