import React from 'react'

const Item = (props) => {
    return <div>
        <div id="hospital-box">
            <p>{props.nume}</p>
            <p>{props.tip}</p>
            <p>{props.locatie}</p>
            <img src="https://7card.ro/wp-content/uploads/2014/05/logo-clinica-regina-maria.png" style={{width:80}}/>

        </div>

        {/*<input type="hidden" name="id" value={props.id}/>*/}
        {/*{props.name} {props.category} {props.price} {props.stock}*/}
        {/*<img src={props.picture} height="100" width="100"/>*/}
        {/*<input type="button" onClick={() => props.buyItemHandler({...props})} value="Buy!"/>*/}
    </div>
};

export default Item