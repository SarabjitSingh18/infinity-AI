import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)



    return (
        <>
            <div className="main">
                <div className="nav">
                    <p>Infinity AI</p>
                    <img src={assets.user_icon} alt="" />
                </div>
                <div className="main-container">
                    {!showResult
                        ? <>            <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                            <div className="cards">
                                <div className="card">
                                    <p>How do I sign up for an account on your Gemini website?</p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Can you provide assistance with navigating through the various features of the website?</p>
                                    <img src={assets.code_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>How do I deposit funds into my account?</p>
                                    <img src={assets.message_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>I encountered an error while using the platform. How can I troubleshoot this?</p>
                                    <img src={assets.bulb_icon} alt="" />
                                </div>
                            </div>
                        </>
                        : <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading
                                    ? <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />

                                    </div>
                                    :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }

                            </div>

                        </div>
                    }


                    <div className="main-bottom">
                        <div className="search-box">
                            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt ' />
                            <div>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                               {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                            </div>
                        </div>
                        <p className="bottom-info">
                            Please note that the information provided is subject to change, and we recommend verifying details.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main
