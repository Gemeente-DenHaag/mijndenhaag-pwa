import React from 'react'

// interface ComponentData {
//     type?: string,
//     attributes?: any,
//     children?: Array<ComponentData>
// }

function parser(params: any): Array<React.Component> {
    console.log(params);
    let retVal: Array<React.Component> = []
    let components: Array<any> = params.content.components;
    components.forEach(component => {
        console.log(component.type);
    });

    return retVal
}

export default parser;