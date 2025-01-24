import React from 'react';
import './Customize.css';

const CustomProduct = () => {
    return (
        <>
            <main className="Custom-page">
                <section className="custom-page-sect">
                    <section className="custom-card">
                        <div className="top-custom">
                            <h1 className="cutom-heading">Select Your Requirements</h1>
                        </div>
                        <div className="custom-fields">
                            <form className="custom-form-div">
                                <div className="input-cutom-field">
                                    <div className="custom-fld">
                                        <label htmlFor="" className='field-type'>Camera Type</label>
                                        <select name="" id="" className="select-types">
                                            <option value="HD">HD Camera</option>
                                            <option value="IP">IP Camera</option>
                                        </select>
                                    </div>
                                    <div className="custom-fld">
                                        <label htmlFor="" className='field-type'>Mega Pixels</label>
                                        <select name="" id="" className="select-types">
                                            <option value="2">2 MP</option>
                                            <option value="4">4 MP</option>
                                            <option value="5">5 MP</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-cutom-field">
                                    <div className="custom-fld">
                                        <label htmlFor="" className='field-type'>Number Of Indoor Cameras</label>
                                        <input type="number" className="select-types" />
                                    </div>
                                    <div className="custom-fld">
                                        <label htmlFor="" className='field-type'>Number Of OutDoor Cameras</label>
                                        <input type="number" className="select-types" />
                                    </div>
                                </div>
                                <div className="input-cutom-field">
                                    <div className="custom-fld">
                                        <label htmlFor="" className='field-type'>Number Of Channels</label>
                                        <select name="" id="" className="select-types">
                                            <option value="4">4 Channels</option>
                                            <option value="8">8 Channels</option>
                                            <option value="16">16 Channels</option>
                                            <option value="32">32 Channels</option>
                                        </select>
                                    </div>
                                    <div className="custom-fld">
                                        <label htmlFor="" className='field-type'>Hard Disk Size </label>
                                        <select name="" id="" className="select-types">
                                            <option value="1 TB">1 TB</option>
                                            <option value="2 TB">2 TB</option>
                                            <option value="4 TB">4 TB</option>
                                            <option value="10 TB">10 TB</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-cutom-field">
                                    <div className="custom-fld">
                                        <label htmlFor="" className='field-type'>Area Of Your Building or Shop or House</label>
                                        <select name="" id="" className="select-types">
                                            <option value="HD">Larger</option>
                                            <option value="IP">Medium</option>
                                            <option value="IP">Small</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="warning-dialouge-box2">
                                    <div className="dalouge-div">
                                        <p className="policy text">
                                            By continuing, you agree to Data Secourity's
                                            <a  className='policy-link'> Conditions of Use</a> and
                                            <a className='policy-link'>Privacy Notice</a>
                                            .</p>
                                    </div>
                                </div>
                                <div className="terms-condition-div">
                                    <input type="checkbox" name="" id="term" className="accpt-term" />
                                    <label htmlFor="term" className='policy-text'>all the terms and condition Lorem ipsum  illo!</label>
                                </div>
                                <div className="notice-board">
                                    <div className="nt-board">
                                        <p className="notice">We Will Contace You Soon For More Feasibility</p>
                                    </div>
                                </div>
                                <div className="submit-area">
                                    <input type="submit" value="Submit" className="submit-button-custom" />
                                </div>
                            </form>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

export default CustomProduct;