function AdminResView({reservation}){
    function HandleDelete(){
        return;
    }
    return(
        <div>
            <div>
                <div>Name: {reservation.name}</div>
                <div>Adults: {reservation.numAdults}</div>
                <div>Children:{reservation.numChildren}</div>
                <div>Check in: {reservation.CheckIn}</div>
                <div>Check out: {reservation.CheckOut}</div>
            </div>
            <div>
                <button onClick={HandleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default AdminResView;