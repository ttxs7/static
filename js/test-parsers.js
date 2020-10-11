export const myUnits={
    myUnit:(unit,config,extUnitParsers)=>{
        const element=document.createElement('span')
        element.textContent='Hi '+unit.options.object.name
        return element
    }
}