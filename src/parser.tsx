import React from 'react'

import Card from '@gemeente-denhaag/nlds-react-components/surfaces/card/Card'
import CardHeader from '@gemeente-denhaag/nlds-react-components/surfaces/cardheader/CardHeader'
import CardContent from '@gemeente-denhaag/nlds-react-components/surfaces/cardcontent/CardContent'
import Typography from '@gemeente-denhaag/nlds-react-components/datadisplay/Typography/Typography'
import CardActions from '@gemeente-denhaag/nlds-react-components/surfaces/cardactions/CardActions'

// Card
// CardHeader
// CardContent
// Typography
// CardActions

// Icon?
// CardMedia?

// interface ComponentData {
//     type?: string,
//     attributes?: any,
//     children?: Array<ComponentData>
// }

function parser(params: any): Array<React.Component> {
  let componentMap: Map<String, React.FC<any>> = new Map([
    ['CardHeader', CardHeader],
    ['Card', Card],
    ['CardContent', CardContent],
    ['Typography', Typography],
    ['CardActions', CardActions]
  ])

  console.log(params)
  let retVal: Array<React.Component> = []
  let components: Array<any> = params.content.components
  components.forEach((component) => {
    console.log(component.type)
  })

  return retVal
}

export default parser
