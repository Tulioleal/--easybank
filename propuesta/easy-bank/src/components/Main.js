import React from 'react';
import imagenes from '../assets/images'

const Main = () =>

    <>
        <main>
            <div className='first'>
                <article className='paragrapgh'>
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <div>
                        <button>Request Invite</button>
                    </div>
                </article>
                <div>
                    {/* <img className='desktop' src={imagenes.background.imagenDt} alt={imagenes.background.imagenMb}></img>
                    {/* <img className='mobile' src={imagenes.background.imagenMb} alt={imagenes.background.imagenMb}></img> */}
                    {/* <img className='mockups' src={imagenes.mockUps.imagen} alt={imagenes.mockUps.alt}/> */} */}
                </div>
            </div>

            <div className='second'>
                <article  className='paragraph'>
                    <h2>Why choose Easybank?</h2>
                    <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </article>
                <div>
                    <section className="paragraph">
                        <img src={imagenes.online.imagen} alt={imagenes.online.alt}/>
                        <h3>Online Banking</h3>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </section>
                    <section className="paragraph">
                        <img src={imagenes.budgeting.imagen} alt={imagenes.budgeting.alt}/>
                        <h3>Simple Budgeting</h3>
                        <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </section>
                    <section className="paragraph">
                        <img src={imagenes.onboarding.imagen} alt={imagenes.onboarding.alt}/>
                        <h3>Fast Onboarding</h3>
                        <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </section>
                    <section className="paragraph">
                        <img src={imagenes.api.imagen} alt={imagenes.api.alt}/>
                        <h3>Open API</h3>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </section>
                </div>
            </div>

            <div className='third'>
                <h2>Latest Articles</h2>
                <div className='cards'>
                    <article>
                        <img src={imagenes.currency.imagen} alt={imagenes.currency.alt}/>
                        <div>
                            <span>By Claire Robinson</span>
                            <h3>Receive money in any currency with no fees</h3>
                            <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                        </div>
                    </article>
                    <article>
                        <img src={imagenes.restaurant.imagen} alt={imagenes.restaurant.alt}/>
                        <div>
                            <span>By Wilson Hutton</span>
                            <h3>Treat yourself without worrying about money</h3>
                            <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                        </div>
                    </article>
                    <article>
                        <img src={imagenes.plane.imagen} alt={imagenes.plane.alt}/>
                        <div>
                            <span>By Wilson Hutton</span>
                            <h3>Take your Easybank card wherever you go</h3>
                            <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                        </div>
                    </article>
                    <article>
                        <img src={imagenes.confetti.imagen} alt={imagenes.confetti.alt}/>
                        <div>
                            <span>By Claire Robinson</span>
                            <h3>Our invite-only Beta accounts are now live!</h3>
                            <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    </>

export default Main