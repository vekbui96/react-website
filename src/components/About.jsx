
import about from "../data/about.json";
import SocialMedia from "./SocialMedia";
import SectionTitle from "./SectionTitle";
import "../css/about.css"

const AboutMe = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <SectionTitle
                    title="About Me"
                    className="aboutTab"
                />

                <div className="class1">
                    <div className="class1">
                        <div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
                        </div>
                    </div>

                    <div className="col-start-6 col-end-13">
                        <div className="bio mt-5 sm:mt-10 md:mt-0">
                            <SectionTitle
                                title="About Me"
                                className="hidden lg:block"
                            />

                            <div className="bio-text" dangerouslySetInnerHTML={{__html: about.bio}}/>

                            <SocialMedia className="mt-10"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
