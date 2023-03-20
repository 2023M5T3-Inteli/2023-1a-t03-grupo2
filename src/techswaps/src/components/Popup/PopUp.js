import React from "react";


const popup = styled.div`

`;

const popupInner = styled.div`

`;

const closeButton = styled.button`

`;

function Popup(props) {
    return (props.trigger) ? (
        <popup>
            <popupInner>
                <closeButton>close</closeButton>
                { props.children }
            </popupInner>
        </popup>
    ) : "";
}