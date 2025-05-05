import Banner from "../components/Banner"
import MainLayout from "../Layout/MainLayout"
import panoramaLokacija from "../assets/panoramaLokacijaPogled.jpg"
import { useState, useContext } from "react"
import LoginRedirect from "../components/LoginRedirect"
import { UserContext } from "../contexts/UserContext";

function NewReservation(params) {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [resFormData, setResFormData]= useState({

    })

    if (!currentUser) {
        return <LoginRedirect></LoginRedirect>
    }

    return(
        <MainLayout>
            <Banner picSrc={panoramaLokacija} title={"Book your stay now"}></Banner>
            <div>
                new res
            </div>
        </MainLayout>
    )
}

export default NewReservation