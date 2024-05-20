import React from 'react';
import { makeStyles, mergeClasses, tokens, shorthands, Button, Link } from '@fluentui/react-components';
import { CallEndRegular } from '@fluentui/react-icons'
//01StylingComponents

// 小结： mergeClasses 合并类。 



///////////////6


const useStyles = makeStyles({
  button: { color: tokens.colorNeutralForeground3 },
  buttonIcon: {
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke1),
  },
  link: { fontWeight: 'bold' }
})

export default function StylingComponents() {
  const overrides = useStyles();


  return (

    <>
      <Button className={overrides.button} icon={{
        className: overrides.buttonIcon,
        children: <CallEndRegular />
      }} />
      <Link className={overrides.link} >go to google</Link>
    </>
  )
}

///////////////5


// const useStyles = makeStyles({
//   root: {  display:"flex" ,backgroundColor:"black"},
//   rootPrimary: {color: tokens.colorNeutralBackground3}
// })

// export default function StylingComponents() {
//   const classes = useStyles();

//   console.log("classes", classes);

//   return (
//     <div className={mergeClasses(classes.root, classes.rootPrimary)}>StylingComponents</div>
//   )
// }


///////////////4


// const useStyles = makeStyles({
//   root: { color: 'red' },
// })

// function Components(props: any) {
//   const classes = useStyles();

//   return (
//     <div className={mergeClasses(classes.root, props.className)}>Components</div>
//   )
// }

// const useParentStyles = makeStyles({
//   root: { fontSize: '30px' },
// })

// export default function StylingComponents() {
//   const classes = useParentStyles();

//   return (
//     <Components className={classes.root} />
//   )
// }


///////////////3

// const useStyles = makeStyles({
//   root: { color: 'red' },
//   rootPrimary: { color: 'blue' },
// })

// function Component(props: any) {
//   console.log("props", props);
//   const classes = useStyles();

//   return <div className={mergeClasses('ui-component', classes.root, props.primary && classes.rootPrimary)}>component</div>
// }


// export default function StylingComponents() {

//   return (
//     <div  >

//       <Component primary={true} />
//       <Component />
//     </div>
//   )
// }


///////////////2
// const useStyles = makeStyles({
//   blueBold: {
//     color: "blue",
//     fontWeight: 'bold',
//   },
//   red: { color: 'red' },
// })

// export default function StylingComponents() {
//   const classes = useStyles();

//   const first = mergeClasses(classes.blueBold, classes.red);
//   const second = mergeClasses(classes.red, classes.blueBold,);

//   return (
//     <>
//       <div className={first}>StylingComponents</div>
//       <div className={second}>StylingComponents</div>
//     </>
//   )
// }

///////////////1
// const useStyles = makeStyles({
//   root: { color: 'red' },
// })

// export default function StylingComponents() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>StylingComponents</div>
//   )
// }
