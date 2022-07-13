

function OtherDataComp (props) {


    return (
        <div>
        <div id={"otherDataContainer"+props.user.id} className="menuElements otherMenuContainer"
             onClick={(e)=>{e.stopPropagation(); props.closeOtherData()}}>
            <div>
                <span className="userMenuKeys">Street:</span> <input id={"streetInput"+props.user.id} type="text"
                                                                     defaultValue={props.user.address.street}
                                                                     onClick={(e) => {e.stopPropagation()}}></input><br></br>
            </div>
            <div>
                <span className="userMenuKeys">City:</span> <input id={"cityInput"+props.user.id} type="text"
                                                                    defaultValue={props.user.address.city}
                                                                    onClick={(e) => {e.stopPropagation()}}></input><br></br>
            </div>
            <div>
                <span className="userMenuKeys">Zip Code:</span> <input id={"zipCodeInput"+props.user.id} type="text"
                                                                        defaultValue={props.user.address.zipcode}
                                                                        onClick={(e) => {e.stopPropagation()}}></input><br></br>
            </div>
        </div>
    </div>
    )
}

export default OtherDataComp