import React from 'react';
import imagenes from '../assets/images'

const Main = ({muckUp}) =>
    <main>
        <div>
            <div className='paragrapgh'>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button>Request Invite</button>
            </div>
            <div>
                <img src={imagenes.mockUps.imagen} alt={imagenes.mockUps.alt}/>
            </div>
        </div>

        <div>
            <article  className='paragraph'>
                <h1>Why choose Easybank?</h1>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </article>
            <div>
                <section className="paragraph">
                    <img src="" alt=""/>
                    <h1>Online Banking</h1>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </section>
                <section className="paragraph">
                    <img src="" alt=""/>
                    <h1>Simple Budgeting</h1>
                    <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </section>
                <section className="paragraph">
                    <img src="" alt=""/>
                    <h1>Fast Onboarding</h1>
                    <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </section>
                <section className="paragraph">
                    <img src="" alt=""/>
                    <h1>Open API</h1>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </section>
            </div>
        </div>

        <div>
            <h1>Latest Articles</h1>
            <article>
                <img src="" alt=""/>
                <span>By Claire Robinson</span>
                <h1>Receive money in any currency with no fees</h1>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
            </article>
            <article>
                <img src="" alt=""/>
                <span>By Wilson Hutton</span>
                <h1>Treat yourself without worrying about money</h1>
                <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
            </article>
            <article>
                <img src="" alt=""/>
                <span>By Wilson Hutton</span>
                <h1>Take your Easybank card wherever you go</h1>
                <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
            </article>
            <article>
                <img src="" alt=""/>
                <span>By Claire Robinson</span>
                <h1>Our invite-only Beta accounts are now live!</h1>
                <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
            </article>
        </div>
    </main>

export default Main