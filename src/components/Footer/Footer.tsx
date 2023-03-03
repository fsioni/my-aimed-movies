"use client"
import {Footer as FrFooter} from "flowbite-react/"
import Logo from "@/components/Logo";

const Footer = function () {
    return (
        <FrFooter className="absolute bottom-0 p-3">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FrFooter.Brand href="/" src="">
                        <Logo/>
                    </FrFooter.Brand>
                    <FrFooter.LinkGroup className="mr-6">
                        <FrFooter.Link href="#" className="mr-2">
                            About
                        </FrFooter.Link>
                        <FrFooter.Link href="#" className="mr-2">
                            Privacy Policy
                        </FrFooter.Link>
                        <FrFooter.Link href="#" className="mr-2">
                            Licensing
                        </FrFooter.Link>
                        <FrFooter.Link href="#">
                            Contact
                        </FrFooter.Link>
                    </FrFooter.LinkGroup>
                </div>
                <FrFooter.Divider/>
                <FrFooter.Copyright
                    href="https://github.com/fsioni"
                    by="FSioni"
                    year={2023}
                />
            </div>
        </FrFooter>);
}

export default Footer