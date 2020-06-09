import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../store";
import { CraLikeMain } from "../../utils";
import { Header } from "../Header";

export function Users() {
    const dispatch = useDispatch();
    const user = useSelector((state: ReduxState) => state.user);

    return(
        <CraLikeMain>
        <Header/>
        <div>
            <p>TODO dodaj fetch za sve usere</p>
        </div>
        </CraLikeMain>
        
    )
}