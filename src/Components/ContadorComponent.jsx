import React from "react";
import { Button, Card } from "react-bootstrap";



export const ContadorComponent = ({incrementar, disminuir, reset, contador}) => {

    return (
    <div style={{ width: '30rem', height: '25rem'}}>
        <Card>
        <span>Contador: {contador} </span>
            <Button className="btn btn-success" onClick={incrementar}>Incrementar</Button>
            <Button className="btn btn-primary" onClick={disminuir}>Disminuir</Button>
            <Button className="btn btn-danger" onClick={reset}>Reset</Button>
        </Card>
    </div>
    );

}

export default ContadorComponent;