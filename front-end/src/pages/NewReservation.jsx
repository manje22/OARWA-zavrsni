import Banner from "../components/Banner"
import MainLayout from "../Layout/MainLayout"
import panoramaLokacija from "../assets/panoramaLokacijaPogled.jpg"
import { useState } from "react"
import LoginRedirect from "../components/LoginRedirect"

function NewReservation(params) {
    const [resFormData, setResFormData]= useState({

    })
    return(
        <MainLayout>
            <Banner picSrc={panoramaLokacija} title={"Book your stay now"}></Banner>
            <div>
                <LoginRedirect></LoginRedirect>
            </div>
        </MainLayout>
    )
}

export default NewReservation