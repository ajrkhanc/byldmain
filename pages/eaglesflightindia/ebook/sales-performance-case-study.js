import Head from 'next/head'

export default function Ebookpage(){

    const EbookSubmit = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/5/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    setTimeout(function() {
                        window.open("/efassets/pdf/sales-performance-case-study.pdf", "_blank")
                     }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-Company=" + event.target.organization.value +      
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value +
            "&formname=" + event.target.formname.value )

    }

    return(
        <>
          <Head>
            <title>Sales Performance Case Study - Eagle’s Flight</title>
            <meta name="description" content="The client approached Eagle’s Flight with the need to shift their sales team’s mindset and behaviors from selling a product to selling a solution."/> 
          </Head>

          <div className="rs-services">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <div className='sec-title3 ptt-30'>
                      <h4 className="countertoph2 text-center font30">Sales Performance Case Study</h4>
                      <div className="heading-border-line left-center"></div>
                      </div>
                    </div>         
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font24">A CULTURE OF HIGH-PERFORMANCE SALES</h4>
                        <h4 className="countertoph2 text-left font18">How one of the world's largest food and beverage companies shifted the mindset of their sales team from product to solution selling</h4>
                        <p className='mall5'>
                        The client approached Eagle’s Flight with the need to shift their sales team’s mindset and behaviors from selling a product to selling a solution. To do so, Eagle’s Flight developed and delivered three customized sales training programs based on role within the sales team. The success of the initiative was greatly assisted by the involvement of the senior executives who cascaded the key leanings and messages throughout the organization to drive a culture of high performance sales.
                        </p>
                        
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-left">                                
                                <h4 className="countertoph2 text-left font24">Download now</h4>
                                <div className="heading-border-line left-style"></div>
                            </div>
                            <form id="contactForm" className='clientcornner pbb-20' onSubmit={EbookSubmit}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No. (Optional)"/>
                                        </div> 
                                        
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization (Optional)"/>
                                        </div>                                       
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="formname" value="Sales Performance Case Study"/>
                                        </div>
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagle’s Flight"/>
                                        </div>                                        
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Download"/>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>                                                                         
                            </form>                             
                            </div>
                        </div>
                    </div>
                    
                </div>                 
            </div>
            </div>

        
            
  
        </>
    )
}