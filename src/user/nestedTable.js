import { useState } from "react";
import warnIcon from "../images/warningIcon.png";
import plusIcon from "../images/plusIcon.png";
import minusIcon from "../images/minusIcon.png";
import NestedContentTable from "./nestedContentTable";

function NestedTable(props) {

    const [active, setActive] = useState(null);

    const rowSelected = (e, index) => {
        props.rowSelected(e, index);
        if (index === active) {
            setActive(null);
        }
        else {
           setActive(index);
        }
    }

    return (
        <>
        <tr key = { props.index } onClick = {(e) => rowSelected(e, props.index)}>
                <td><img src={props.selected == props.index && active === props.index ? minusIcon : plusIcon} style={{width:'20px', height:'20px', marginLeft:'2rem', paddingRight:'2rem'} }/></td>
            <td>{props.item.bookingId}</td>
            <td>{props.item.service}</td>
            <td><p className={props.item.type == 'Private' ? 'private' : 'public'}>{props.item.type}</p></td>
            <td>{props.item.sessions}</td>
            <td>{props.item.dateSlot}</td>
            <td>{props.item.member}</td>
            <td>{props.item.paid}</td>
            <td><p className={props.item.status == 'Confirmed' ? 'confirmed' : (props.item.status == 'Completed' ? 'completed' : (props.item.status == 'Cancelled' ? 'cancelled' : 'awaiting'))}><img src={props.item.status == 'Awaiting confirmation' ? warnIcon : ""} /> {props.item.status}</p></td>
            <td>{props.item.option1}</td>
            <td>{props.item.option2}</td>
            </tr>
            {props.selected == props.index && active === props.index ?
                (<NestedContentTable data={props.item.nestedData} />) : null
             }
            </>
    )
}

export default NestedTable;