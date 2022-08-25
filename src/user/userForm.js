import { useState } from 'react';
import './user.css';
import userLogo from '../images/user.png';
import editLogo from "../images/editIcon.png";
import deleteLogo from "../images/deleteIcon.png";
import leftLogo from '../images/leftArrow.png';
import rightLogo from "../images/rightArrow.png";
import barsIcon from "../images/bars.png";
import mockTableData from "./mockTableData";
import NestedTable from './nestedTable';

function UserForm() {

    const [rowColor, setRowColor] = useState(false);
    const [active, setActive] = useState(null);

    const rowSelected = (e, index) => {
        let table = document.getElementById("tableId");
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].className = 'trUnSelectedBgColor';
        }
        if (active !== index) {
            table.rows[index + 1].className = 'trSelectedBgColor';
        }
        else {
            table.rows[index + 1].className = 'trUnSelectedBgColor';
        }
        setActive(index);
    }

    const expand = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " topNavRes";
        } else {
            x.className = "topnav";
        }

        let x1 = document.getElementById("headerId");
        if (x1.className === "headerDivClass") {
            x1.className += " headerDiv1Class";
        } else {
            x1.className = "headerDiv1Class";
        }
    }

    return (
        <div className="loginFromClass">
            <div className="headerDivClass" id="headerId">
                <div className="leftSideClass">
                    <div className="imgDivClass">
                        <img src={userLogo} className="imgLogoClass" />
                    </div>
                    <div className="detailsDivClass">
                        <h2 className="h2Class">Lokesh Reddy</h2>
                        <h4 className="h4Class">Lokesh Reddy</h4>
                        <h5 className="h5Class">Services offered</h5>                       
                    </div>
                </div>
                <div className="rightSideClass">
                    <a href="javascript:void(0);" className="barsClassName" onClick={ expand}>
                        <img src={barsIcon} style={{width:'24px', float:"right", marginTop:"1rem", marginRight:"1rem", height:'24px'} } />
                    </a>
                    <div className="rightBtnClass">
                        <div className="optionBtnGroupClass"><img src={editLogo} className="imgNClass" /> <span >Edit</span> </div>
                        <div className="optionBtnGroupClass"><img src={deleteLogo} className="imgNClass" /><span > Delete </span></div>
                    </div>
                </div>
               
            </div>
            <div class="topnav" id="myTopnav">
                <input type="button" value="Demo Service" className="buttonGroupClass" />
                <input type="button" value="Covid Testing" className="buttonGroupClass" />
                <input type="button" value="Fever" className="buttonGroupClass" />
                <input type="button" value="H1n1" className="buttonGroupClass" />
            </div>
            <div className="contentTableClass">
                <table id="tableId">
                    <thead>
                        <tr>
                            <th scope="col" style={{ width: '10px' }}></th>
                            <th scope="col"><a href="#" className="sort-by">Booking Id</a></th>
                            <th scope="col"><a href="#" className="sort-by">Service</a></th>
                            <th scope="col"><a href="#" className="sort-by">Type</a></th>
                            <th scope="col">Sessions</th>
                            <th scope="col"><a href="#" className="sort-by">Date & slot</a></th>
                            <th scope="col"><a href="#" className="sort-by">Member</a></th>
                            <th scope="col">Paid</th>
                            <th scope="col"><a href="#" className="sort-by">Status</a></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockTableData.map((item, index) => {
                            return (
                                <NestedTable item={item} index={index} rowSelected={(e, index) => rowSelected(e, index)} selected={active} />
                            )
                        })}
                    </tbody>
                </table>                
            </div>
            <div id='footerDiv' style={{textAlign:"center", marginTop: "3rem", display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '3rem' }}>
    
                    <div className="optionBtnGroupFooterClass"><img src={leftLogo} className="imgNClass" /> <span > Previous </span> </div>
                    <div className="optionBtnGroupFooterClass1"><span >  1 </span></div>
                    <div className="optionBtnGroupFooterClass1"><span >  2 </span> </div>
                    <div className="optionBtnGroupFooterClass"><span > Next </span><img src={rightLogo} className="imgNClass" /></div>
                    
            </div>
        </div>)
}

export default UserForm;