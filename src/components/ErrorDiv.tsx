import React from "react";
import styled from "styled-components";

interface IErrorDivProps {
    error: string | undefined
}

export function ErrorDiv({error}: IErrorDivProps) {

    return(
        <Div id="error-div" className={!error ? "no-display" : ""}>
            <p>{error}</p>
        </Div>
    )
}

const Div = styled.div`
overflow:hidden;
text-overflow: ellipsis;
background-color: rgba(255, 99, 71);
word-wrap: break-word;
display: flex;
flex-direction: column;
justify-content: center;
max-width: inherit;

p {
  margin: 0 5px;
}
`