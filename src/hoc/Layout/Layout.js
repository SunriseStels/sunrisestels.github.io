import React, {Component} from 'react'
import './Layout.scss'
import classNames from 'classnames'

class Layout extends Component {
   render() {

      //first color
      const arr = ['pink', 'blue', 'green']
      const randomStyle = arr[Math.floor(Math.random() * arr.length)]

      const figure = ['square', 'circle']
      const randomFigure = figure[Math.floor(Math.random() * figure.length)]
      //second color
      const arr2 = ['pink', 'blue', 'green']
      const randomStyle2 = arr2[Math.floor(Math.random() * arr2.length)]

      const figure2 = ['square', 'circle']
      const randomFigure2 = figure2[Math.floor(Math.random() * figure2.length)]
      //third color
      const arr3 = ['pink', 'blue', 'green']
      const randomStyle3 = arr3[Math.floor(Math.random() * arr3.length)]

      const figure3 = ['square', 'circle']
      const randomFigure3 = figure3[Math.floor(Math.random() * figure3.length)]

      return (
         <div className={"Layout"}>
            <div className={"Title"}>Most used timer</div>
            <div className={"LayoutMost"}>
               <div className={classNames(randomStyle, randomFigure)}>
                  <div className={"title"}>Test</div>
                  <div className={"time"}>15 min</div>
               </div>
               <div className={classNames(randomStyle2, randomFigure2)}>
                  <div className={"title"}>Name</div>
                  <div className={"time"}>50 min</div>
               </div>
               <div className={classNames(randomStyle3, randomFigure3)}>
                  <div className={"title"}>Some title</div>
                  <div className={"time"}>35 min</div>
               </div>
            </div>
         </div>
      )
   }
}

export default Layout