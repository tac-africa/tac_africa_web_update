import React from 'react'
import Script from 'next/script'

export default function subscribe() {
  return (
    <>

<Script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js" />
<iframe frameborder="0" id="iframewin" width="100%" height="500px" src="https://zcsub-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecc229839&zx=12f80d451&sD=1e5f9fabe80f4d11"></iframe>





    {/* <Script  src="https://zcsub-cmpzourl.maillist-manage.com/js/optin.min.js" onload="setupSF('sf3z9aa327d1832b5fbd2cc142c92fc17b47e4cc5382de97bc55a0ddc31978db2891','ZCFORMVIEW',false,'light',false,'0')" />

    <div id="sf3z9aa327d1832b5fbd2cc142c92fc17b47e4cc5382de97bc55a0ddc31978db2891" data-type="signupform" style={{opacity: 1}}>
        <div id="customForm">
            <div name="SIGNUP_BODY" changeitem="BG_IMAGE" style={{width: '300px', height: '445px', position: 'relative', backgroundColor: 'rgb(255, 255, 255)', margin: 'auto', overflow: 'hidden'}}>
                <div changeitem="ELEGANTFORM_IMAGE" style={{width: '100%', height: '100%', position: 'absolute', bottom: 0}}>
                    <img src="https://campaign-image.com/zohocampaigns/1301d85c_sign_form_bg_27_2_1.png" style={{width: '100%', height: '100%', position: 'relative'}} />
                </div>
                <div style={{textAlign: 'center', width: '100%', float: 'left', marginTop: '115px', position: 'relative', zIndex: '2'}}>
                    <div style={{position:'relative'}}>
                        <div id="Zc_SignupSuccess" style={{display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)',  marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all'}}>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                    <tr>
                                        <td width="10%">
                                            <img class="successicon" src="https://zcsub-cmpzourl.maillist-manage.com/images/challangeiconenable.jpg" align="absmiddle" />
                                        </td>
                                        <td>
                                            <span id="signupSuccessMsg" style={{color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word'}}>&nbsp;&nbsp;Thank you for Signing Up</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <form method="POST" id="zcampaignOptinForm" style={{margin: '0px', width: '100%', color: 'rgb(255, 255, 255)'}} action="https://zcsub-cmpzourl.maillist-manage.com/weboptin.zc" target="_zcSignup">
                        <div style={{backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', border: '1px solid rgb(255, 217, 211)', opacity: 1, position: 'absolute', width: '80%', margin: '20px 10%', boxShadow: 'rgb(27, 27, 27) 0px 5px 12px 0px', margin: '-50px 10%', zIndex: '2', boxSizing: 'border-box', display: "none"}} id="errorMsgDiv">Please correct the marked field(s) below.</div>
                        <div style={{fontSize: '18px', fontWeight: 'bold', color: 'rgb(62, 62, 62)', lineHeight: '1.556', textAlign: 'center', margin: '10px 0 15px', width: '100%', float: 'left'}}>Begin now!</div>
                        <div style={{fontSize: '14px', fontWeight: 'normal', color: 'rgb(62, 62, 62)', float: 'left', textAlign: 'center', width: '100%', margin: '0 0 20px'}}>It's easy to get started. It's free!</div>
                        <div style={{position: 'relative', width: '230px', height: '40px', marginBottom: '20px', display: 'inline-block'}}>
                            <input type="text" style={{border: '1px solid rgb(188, 188, 188)', outline: 'none', borderRadius: '15px', backgroundColor: 'transparent', width: '100%', height: '100%', color: 'rgb(136, 136, 136)', textAlign: 'left', padding: '5px 10px'}} placeholder="Name" changeitem="SIGNUP_FORM_FIELD" name="FIRSTNAME" id="FIRSTNAME" />
                        </div>
                        <div style={{textAlign: 'center', width: '230px', height: '40px', margin: 'auto', marginBottom: '20px'}}>
                            <div id="Zc_SignupSuccess" style={{position: 'absolute', width: '87%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginBottom: '10px', wordBreak: 'break-all', opacity: 1, display: 'none'}}>
                                <div style={{width: '20px', padding: '5px', display: 'table-cell'}}>
                                    <img class="successicon" src="https://campaigns.zoho.com/images/challangeiconenable.jpg" style={{width: "20px"}} />
                                </div>
                                <div style={{display: "table-cell"}}>
                                    <span id="signupSuccessMsg" style={{color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', lineHeight: '30px', display: 'block'}}></span>
                                </div>
                            </div>
                            <input placeholder="Email Address" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" type="text" style={{border: '1px solid rgb(188, 188, 188)', outline: 'none', borderRadius: '15px', backgroundColor: 'transparent', width: '100%', height: '100%', color: 'rgb(136, 136, 136)', textAlign: 'left', padding: '5px 10px'}} />
                        </div>
                        <div style={{position: 'relative', width: '230px', height: '42px', marginTop: '15px', display: 'inline-block'}}>
                            <input type="button" style={{textAlign: 'center', backgroundColor: 'rgb(255, 252, 0)', color: 'rgb(0, 0, 0)', width: '100%', height: '100%', borderRadius: '15px', border: 0, cursor: 'pointer', outline: 'none', fontSize: '14px', fontWeight: 'bold'}} name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Sign Up" />
                        </div>
                        <input type="hidden" id="fieldBorder" value="" />
                        <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                        <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                        <input type="hidden" id="formType" name="formType" value="QuickForm" />
                        <input type="hidden" name="zx" id="cmpZuid" value="12f80d451" />
                        <input type="hidden" name="zcvers" value="3.0" />
                        <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                        <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                        <input type="hidden" id="zcld" name="zcld" value="" />
                        <input type="hidden" id="zctd" name="zctd" value="" />
                        <input type="hidden" id="document_domain" value="" />
                        <input type="hidden" id="zc_Url" value="zcsub-cmpzourl.maillist-manage.com" />
                        <input type="hidden" id="new_optin_response_in" value="0" /> 
                        <input type="hidden" id="duplicate_optin_response_in" value="0" />
                        <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                        <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z9aa327d1832b5fbd2cc142c92fc17b47e4cc5382de97bc55a0ddc31978db2891" />
                        <input type="hidden" id="viewFrom" value="URL_ACTION" />
                        <span style={{display: 'none'}} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                        <span style={{display: 'none'}} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                        <span style={{display: 'none'}} id="dt_LASTNAME">1,false,1,Last Name,2</span>
                    </form>
                </div>
            </div>
        </div>
        <img src="https://zcsub-cmpzourl.maillist-manage.com/images/spacer.gif" id="refImage" onload="referenceSetter(this)" style={{display: 'none'}}/>
    </div>
    <input type="hidden" id="signupFormType" value="QuickForm_Vertical" />
    <div id="zcOptinOverLay" oncontextmenu="return false" style={{ display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: '0.5', zIndex: '100', position: 'fixed', width: '100%', top: '0px', left: '0px', height: '988px'}}></div>
    <div id="zcOptinSuccessPopup" style={{display: 'none', zIndex: '9999', width: '800px', height: '40%', top: '84px', position: 'fixed', left: '26%', backgroundColor: '#FFFFFF', borderColor: '#E6E6E6', borderStyle: 'solid', borderWidth: '1px', boxShadow: '0 1px 10px #424242', padding: '35px'}}>
        <span style={{position: "absolute", top: '-16px', right: '-14px', zIndex: '99999', cursor: 'pointer'}} id="closeSuccess">
            <img src="https://zcsub-cmpzourl.maillist-manage.com/images/videoclose.png" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
    </div> */}
    </>

  )
}
