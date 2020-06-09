import React, { useState, memo } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { League } from "../../../model/league";
import { Button } from "../../../components";
import { LeagueEvent } from "../../../model/leagueEvent";
import { Card } from "../../../utils";

type Props = {
    leagueId: string,
    event: LeagueEvent
}

export const LeagueEventElem = memo(LeagueEventElemComponent);

function LeagueEventElemComponent({leagueId, event}: Props) {
    const history = useHistory();

    function redirectToLeague() {
       
        history.push(`/league/${leagueId}/events/${event.eventId}`)
    }

    return(
       <Card onClick={redirectToLeague}>
            <span>{event.name}</span>
            <span>{event.homeTeam}</span>
            <span>{event.awayTeam}</span>
            {/* {<Buttons>
            <Button onClick={() => setEdit}>
                <span>Update League</span>
            </Button>
            <Button>
                <span>Delete League</span>
            </Button>
            </Buttons>} */}
        </Card>
    )
}