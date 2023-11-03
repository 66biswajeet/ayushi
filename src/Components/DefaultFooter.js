import React from 'react';


import { Footer } from 'flowbite-react';

function DefaultFooter() {
    return (
        <div>
            <Footer container>
                <Footer.Copyright
                    by="Flowbite™"
                    href="#"
                    year={2022}
                />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        About
                    </Footer.Link>
                    <Footer.Link href="#">
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                        Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    )
}

export default DefaultFooter;
