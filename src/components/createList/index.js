
import { arrayEmoji } from "../../mock/emojiData"






function CreateList (){
    
    const dataEmoji  = arrayEmoji
    // console.log(dataEmoji[10].title)


    

    
    return (
        <ul>
            {dataEmoji.map(array => <li>{array.symbol} {array.title}</li>)}
            
        </ul>
    )
}


export {CreateList}