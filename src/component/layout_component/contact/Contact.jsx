import React, { useState } from 'react';
import './contact.css'
import icon1 from '../../../img/icon/phon.svg'
import icon2 from '../../../img/icon/face_black.svg'
import icon3 from '../../../img/icon/insta_black.svg'
import icon4 from '../../../img/icon/tweter_black.svg'
import API from '../../../API';


export default function Contact() {

    const [name, setname] = useState(null)
    const [phon, setphon] = useState(null)
    const [email, setemail] = useState(null)
    const [text, settext] = useState(null)
    const [msg, setmsg] = useState(null)






    const handelsubmit = (e) => {
        e.preventDefault();

        API.post('/api/contact/contactus',
            {
                username: name,
                email: email,
                phone_number: phon,
                maseeg: text

            }

        )
            .then(() => {
                setmsg(["شكرا لتواصلك معنا تم استلام ردك بنجاح ", '#b3d585'])
                setTimeout(() => {
                    setmsg(null)
                }, 2500);
            })
            .catch(err => {
                console.log(err);
                setmsg([' لم يتم تسليم رسالتك', '#ff000086'])
                setTimeout(() => {
                    setmsg(null)
                }, 2500);

            })




    }

    return <div>

        <section>
            <div className="container">
                <div className="row justify-content-center justify-content-md-evenly ">
                    <div className=" col-md-6 contact-div-2 p-4 pt-0">
                        <form onSubmit={handelsubmit}>
                            <h2> Contact Us</h2>
                            <input onChange={e => { setname(e.target.value) }} dir='rtl' placeholder=' Full Name ' className='col-10 p-2' type="text" />
                            <input onChange={e => { setemail(e.target.value) }} dir='rtl' placeholder=' Email' className='col-10 p-2' type='email' />
                            <input onChange={e => { setphon(e.target.value) }} dir='rtl' placeholder='Phon Numper ' className='col-10 p-2' type='tel' />

                            <textarea onChange={e => { settext(e.target.value) }} name="" className='p-2' dir='rtl' placeholder='massege' id="" rows="6"></textarea>
                            <input type='submit' value='Supmit' className='btn-submit p-3' />


                        </form>
                        {
                            msg && <p style={{ 'backgroundColor': msg[1], 'width': '300px', 'textAlign': 'center', 'borderRadius': '17px', 'height': '35px', 'padding': '5px' }}>
                                {msg[0]}
                            </p>
                        }
                    </div>





                    <div className="col-md-3 p-4 p-md-0 " dir='rtl'>
                        <div className=" p-2  p-md-0 " >
                            <div className="box">
                                <h5>Phon numper </h5>
                                <a href='tel:+96433801866' style={{ 'textDecoration': 'none' }}>
                                    <div className='d-flex m-1'>
                                        <img src={icon1} alt="" width={20} />
                                        <p className='m-0 p-0'>96433801866+</p>
                                    </div>
                                </a>
                                <a href='tel:+96433801866' style={{ 'textDecoration': 'none' }}>
                                    <div className='d-flex'>
                                        <img src={icon1} alt="" width={20} />
                                        <p className='m-0 p-0'>96433801866+</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className=" p-2  p-md-0 ">
                            <div className="box">
                                <h5> Email</h5>
                                <a href='mailto:mohammedapas07@gmail.com' style={{ 'textDecoration': 'none' }}>
                                    <div className='d-flex m-1'>
                                        <img src={icon1} alt="" width={20} />
                                        <p className='m-0 p-0'>contact@UnaryCar.com</p>
                                    </div>
                                </a>

                            </div>

                        </div>
                        <div className=" p-2  p-md-0 ">
                            <div className="box">
                                <h5>Social Media </h5>


                                <a href='https://instagram.com/m__cel' style={{ 'textDecoration': 'none' }}>
                                    <div className='d-flex m-1'>
                                        <img src={icon2} alt="" width={20} />
                                        <p className='m-0 p-0'>UnaryCar</p>
                                    </div>
                                </a>


                                <a href="https://instagram.com/m__cel" style={{'textDecoration': 'none'}} >
                                    <div className='d-flex'>
                                        <img src={icon3} alt="" width={20} />
                                        <p className='m-0 p-0 '>UnaryCar</p>
                                    </div>
                                </a>


                                <a href="https://instagram.com/m__cel" style={{'textDecoration': 'none'}}>
                                    <div className='d-flex'>
                                        <img src={icon4} alt="" width={20} />
                                        <p className='m-0 p-0'>UnaryCar</p>
                                    </div>
                                </a>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </div >;
}
