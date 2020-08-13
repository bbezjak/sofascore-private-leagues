import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../../store";
import { Header } from "../Header";
import { CraLikeMain, FlexboxList } from "../../style";
import { League } from "../../model/league";
import { HomeLeagueElem } from "./components/HomeLeagueElem";
import { Button, PageTitle } from "../../components";
import { CreateLeagueModal } from "./components/CreateLeagueModal";
import { getLeagues } from "../../api/leagues/getLeagues";

export function HomePage() {
    const { user } = useSelector((state: ReduxState) => state);
    const [creatingLeague, setCreatingLeague] = useState(false);
    const [leagues, setLeagues] = useState<League[]>([]);

    async function fetch() {
        await getLeagues(user.token)
            .then((res) => {
                let newLeagues: League[] = [];

                // forEach s async/awaitom ne radi
                // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
                res.data.forEach(async (leagueData: any) => {
                    let league: League = {
                        leagueId: leagueData.id,
                        name: leagueData.name,
                        description: leagueData.description,
                        admins: leagueData.admins,
                        users: leagueData.users,
                        createdAtTimestamp: leagueData.createdTimestamp,
                        updatedAtTimestamp: leagueData.updatedTimestamp
                    };
                    newLeagues.push(league)
                })
                setLeagues(newLeagues);
            })
            .catch((err) => {
                // TODO dodaj error div
                
            })
    }

    useEffect( () => {
        
        fetch(); // useEffect je po defaultu sink pa nemože imati async await odmah
    }, [user.token])

    function createLeague() { setCreatingLeague(true); }

    function addLeague(league: League) {
        setLeagues([...leagues, league])
    }

    return(
        <>
        <Header/>
        <CraLikeMain>
            {creatingLeague && (
                <CreateLeagueModal onSuccess={addLeague} cancelCreating={() => setCreatingLeague(false)} />
            )}
            <PageTitle>Your leagues</PageTitle>
            <Button onClick={createLeague}><span>Add League</span></Button>
            <FlexboxList>
                {leagues.length === 0 ?
                    <p>There are no leagues, create some :D</p>: 
                    leagues.map((league, index) => <HomeLeagueElem key={league.leagueId + "_" + index} league={league}/>)}
            </FlexboxList>
        </CraLikeMain>
        </>
    )
}