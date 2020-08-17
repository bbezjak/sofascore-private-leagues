import React, { useState, memo } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { League } from "../../../model/league";
import { Card } from "../../../style";

export type LeagueElemProps = {
  league: League;
};

export const HomeLeagueElem = memo(HomeLeagueElemComponent);

function HomeLeagueElemComponent({ league }: LeagueElemProps) {
  const history = useHistory();

  function redirectToLeague() {
    history.push(`/league/${league.leagueId}`);
  }

  return (
    <Card onClick={redirectToLeague}>
      <span>{league.name}</span>
      <span>{league.description}</span>
    </Card>
  );
}
