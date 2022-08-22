import warnIcon from "../images/warningIcon.png";

function NestedContentTable(props) {
    return (
        < >
            {props.data.map((item, index) => {
                return (
                    <tr key={index} className="nestedTrClass">
                        <td style={{ width: '20px', height: '20px', marginLeft: '2rem', paddingRight: '2rem' }}></td>
                        <td>{item.bookingId}</td>
                        <td>{item.service}</td>
                        <td><p className={item.type == 'Private' ? 'private' : 'public'}>{item.type}</p></td>
                        <td>{item.sessions}</td>
                        <td>{item.member}</td>
                        <td>{item.dateSlot}</td>
                        <td>{item.paid}</td>
                        <td><p className={item.status == 'Confirmed' ? 'confirmed' : (item.status == 'Completed' ? 'completed' : (item.status == 'Cancelled' ? 'cancelled' : 'awaiting'))}><img src={item.status == 'Awaiting confirmation' ? warnIcon : ""} /> {item.status}</p></td>
                        <td>{item.option1}</td>
                        <td>{item.option2}</td>
                    </tr>)
            })}
        </>
        )
}

export default NestedContentTable;