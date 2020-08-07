import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../store";
import { Button, PageTitle } from "../../components";

export function Header() {

    const dispatch = useDispatch();
    const user = useSelector((state: ReduxState) => state.user)

    return(
        <StyledHeader>
            <FlexContainer>
                <div>
                    <NavLink to="/">HOME</NavLink>
                </div>
                <div>
                    <NavLink to={`/user/me`}>{user.username}</NavLink>
                    <Button >Change theme</Button>
                </div>
            </FlexContainer>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position:absolute;
    top: 0;
    width:100%;

    a {
        margin: 0 5px;
        text-transform: initial;
    }
`

const FlexContainer = styled.div`
/*background-image: url(https://images4.alphacoders.com/284/thumb-1920-284804.jpg);*/
/*background-image: url(https://wallpaperaccess.com/full/552032.jpg);*/
//background-image: url(https://observatoriocomunicacionviolencia.org/l/2019/12/wallpaper-kobe-bryant-basketball-nba-lakers-7-los-angeles-cool-wallpapers-schedule-tonight-all-star-game-brooklyn-nets-ichiro-suzuki-jaelen-strong-ben-simmons-and-joel-embiid-live-black-box.jpg);
display: flex;
justify-content: space-between;
position: sticky;
top:0;
`