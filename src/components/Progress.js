import React, {useState, Fragment} from 'react';

function Progress() {

    let [cont, setCont] = useState(0);

    let sumarVuelta = () => {
        setCont(cont+1);
    };

    return (
        <Fragment>
            <button className="btn-floating waves-effect waves-light buttonColor" onClick={sumarVuelta} ><i className="material-icons buttonColor waves-effect waves-light">add</i></button>
            <h2>{cont}</h2>
        </Fragment>
    );
};

export default Progress;