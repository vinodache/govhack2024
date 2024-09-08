export function DropDown1({style1, callback}) {
    return (
        <div style={style1} >
            <label style={{color:'#FFB0A5', fontWeight:'bold'}}>
                Accident Reason
                <select style={{color:'black'}} onChange={callback}>
                    <option value="all">All</option>
                    <option value="old">Old Vehicle</option>
                    <option value="atmosphere">Atmospheric Condition</option>
                    <option value="road">Road Condition</option>
                </select>
            </label>
        </div>
    )
}
export function DropDown2({style1, callback}) {
    return (
        <div style={style1} >
            <label style={{color:'#FFB0A5', fontWeight:'bold'}}>
                Accident Fatality
                <select style={{color:'black'}} onChange={callback}>
                    <option value="fatal">Fatal</option>
                    <option value="injury">Injury</option>
                    <option value="notinjured">Not Injured</option>
                </select>
            </label>
        </div>
    )
}
export function DropDown3({style1, callback}) {
    return (
        <div style={style1} >
            <label style={{color:'#FFB0A5', fontWeight:'bold'}}>
                Vehicle Type
                <select style={{color:'black'}} onChange={callback}>
                    <option value="car">Car</option>
                    <option value="taxi">Taxi</option>
                    <option value="bicycle">Bicycle</option>
                </select>
            </label>
        </div>
    )
}