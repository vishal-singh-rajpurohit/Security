import React, { useContext, useState } from 'react'
import '../../Styles/signup.css'
import AuthContext from '../../context/AuthContext.context'
const SecurityOtp = () => {

    const {openVerify, setOpenVerify, verifyUser} = useContext(AuthContext);
    const [Otp, setOtp] = useState();

    

    return (
        <section className="signup-main" style={{display: openVerify? 'flex' : 'none'}}>
            <div className="left-right lr2">
                <div class="signup-input-single">
                    <input type="number" onChange={(e)=>setOtp(e.target.value)} placeholder="OTP" class="signup-single-input" />
                </div>
                <div class="signup-input-single">
                    <button type="submit" onClick={()=>verifyUser(Otp)} class="input-full-signup">Submit</button>
                </div>
                <div class="signup-input-single">
                    <button type="submit" onClick={()=>setOpenVerify(false)} class="input-full-signup">Cancle</button>
                </div>
            </div>
        </section>
    )
}

export default SecurityOtp