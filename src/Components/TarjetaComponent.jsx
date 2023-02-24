import React from "react";
import { Card} from "react-bootstrap";


export const TarjetaComonent = ({ Titulo, Cuerpo, img, contador }) => {

    return (
        <div className=" my-3 px-3 mb-3">
            <Card style={{ width: '30rem', height: '25rem'}}>
                <Card.Img src={img} style={{width: '100px', height: '100px', alignContent:"center"}}/>
                <Card.Header>
                    {Titulo}
                </Card.Header>
                <Card.Body>
                    <p>{Cuerpo}</p>
                </Card.Body>
                <Card.Footer >
                    <span>Contador: {contador} </span>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default TarjetaComonent;