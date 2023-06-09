import Link from "next/link";
import Head from "next/head";

export default function Elearning() {
    return (
        <>
            <Head>
            <title>Ebooks - Blanchard International</title>
                <meta name="description" content="Measuring the Impact and ROI of Leadership Training Read eBook 7 Ways Poor Leaders Are Costing Your Company Money Read eBook 3 Fatal Mistakes Managers Make When Coaching Their Teams Read eBook When It Comes to Customer Service, Is Your Business Flourishing or Failing? Read eBook 7 Warning Signs That Distrust Is Harming Your Organization" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="inner-banner books-head-headbg">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>Ebooks</h3>
                    </div>
                </div>
                <div className="inner-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="what-did-area pb-40 pt-45 style2 themebg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="what-did-left-content">
                                <div className="row row-eq-height eventsandworkshopbox">

                                   

                                    <div className="col-sm-4">
                                        <div className="choose-card">
                                            <img src="/kbassets/img/4-critical-focus-areas-for-building-a-high-performance-team.jpg" alt="Images" />
                                            <h3>4 Critical Focus Areas for Building a High Performance Team</h3>
                                            <div className='row text-center eventsbottomarea2'>
                                                <div className='col-sm-12'>
                                                    <Link href="/ebooks/4-critical-focus-areas-for-building-a-high-performance-team">
                                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                

                                    <div className="col-sm-4">
                                        <div className="choose-card">
                                            <img src="/kbassets/img/ebook5.jpg" alt="Images" />
                                            <h3>7 Warning Signs That Distrust Is Harming Your Organization</h3>
                                            <div className='row text-center eventsbottomarea2'>
                                                <div className='col-sm-12'>
                                                    <Link href="/ebooks/7-warning-signs-that-distrust-is-harming-your-organization">
                                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="choose-card">
                                            <img src="/kbassets/img/ebook2.jpg" alt="Images" />
                                            <h3>7 Ways Poor Leaders Are Costing Your Company Money</h3>
                                            <div className='row text-center eventsbottomarea2'>
                                                <div className='col-sm-12'>
                                                    <Link href="/ebooks/7-ways-poor-leaders-are-costing-your-company-money">
                                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="choose-card">
                                            <img src="/kbassets/img/a-jump-start-for-virtual-facilitation-3.jpg" alt="Images" />
                                            <h3>A Jump Start For Virtual Facilitation</h3>
                                            <div className='row text-center eventsbottomarea2'>
                                                <div className='col-sm-12'>
                                                    <Link href="/ebooks/a-jump-start-for-virtual-facilitation-3">
                                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                

                               

                                    <div className="col-sm-4">
                                        <div className="choose-card">
                                            <img src="/kbassets/img/conversational-capacity.jpg" alt="Images" />
                                            <h3>Conversational Capacity</h3>
                                            <div className='row text-center eventsbottomarea2'>
                                                <div className='col-sm-12'>
                                                    <Link href="/ebooks/conversational-capacity">
                                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                          

                                    <div className="col-sm-4">
                                        <div className="choose-card">
                                            <img src="/kbassets/img/ebook1.jpg" alt="Images" />
                                            <h3>Measuring the Impact and ROI of Leadership Training</h3>
                                            <div className='row text-center eventsbottomarea2'>
                                                <div className='col-sm-12'>
                                                    <Link href="/ebooks/measuring-the-impact-and-roi-of-leadership-training">
                                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-sm-4">
                                        <div className="choose-card">
                                            <img src="/kbassets/img/ebook3.jpg" alt="Images" />
                                            <h3>3 Fatal Mistakes Managers Make When Coaching Their Teams</h3>
                                            <div className='row text-center eventsbottomarea2'>
                                                <div className='col-sm-12'>
                                                    <Link href="/ebooks/3-fatal-mistakes-managers-make-when-coaching-their-teams">
                                                        <a className="default-btn-two">Read eBook<i className="bx bx-right-arrow-alt"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}