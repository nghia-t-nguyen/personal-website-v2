import './Experience.css'
import FireCrystal from '../assets/icons/fire_crystal.png'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer';

export default function Experience() {
    const [whichExperience, setWhichExperience] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.65 });

    return (
        <div className='wrapper--cont--experience'>
            <div ref={ref} className={`cont--experience ${inView ? 'visible' : ''}`}>
                <div className='cont--tabs'>
                    <div role='tab' className={`cont--tab ${whichExperience === 0 ? 'focused-tab' : ''}`} onClick={() => setWhichExperience(0)}>
                        <img className={`${whichExperience === 0 ? 'fire-crystal-visible' : 'fire-crystal-hidden'}`} src={FireCrystal} />
                        <span>
                            Software Dev
                        </span>
                    </div>
                    <div role='tab' className={`cont--tab ${whichExperience === 1 ? 'focused-tab' : ''}`} onClick={() => setWhichExperience(1)}>
                        <img className={`${whichExperience === 1 ? 'fire-crystal-visible' : 'fire-crystal-hidden'}`} src={FireCrystal} />
                        <span>
                            Research
                        </span>
                    </div>
                    <div role='tab' className={`cont--tab ${whichExperience === 2 ? 'focused-tab' : ''}`} onClick={() => setWhichExperience(2)}>
                        <img className={`${whichExperience === 2 ? 'fire-crystal-visible' : 'fire-crystal-hidden'}`} src={FireCrystal} />
                        <span>
                            Education
                        </span>
                    </div>


                </div>
                <div className='cont--experience-text'>
                    {
                        whichExperience === 0 &&
                        <div>
                            <h2>
                                Software Development
                            </h2>
                            <h3>PT Front-end Developer @ A for Aesthetic</h3>
                            <p>
                                As a software developer, I get to make magic.
                                My most recent software development experience is working part time as a front-end developer and cofounder for ✨A for Aesthetic✨, a small, creative, family-owned business:<br /><br />
                                <strong>Jan 2024 - present (Columbia, SC)</strong>
                            </p>
                            <p className='indent'>
                                <strong>Curating</strong> visually engaging frontend interfaces that align with A for Aesthetic's brand vision by translating dynamic and evolving aesthetic trends into user-friendly designs. <br />
                                <strong>Crafting</strong> immersive, narrative-driven user experiences by writing character narratives, and developing concept art and designs.<br />

                            </p>
                            <p><br /></p>
                            <h3>SWE for Technical Content @ Twilio</h3>
                            <p>
                                Additionally, I have software development experience as a Software Engineer for Technical Content at Twilio, a SAAS company that focuses on customer engagement and communication.
                                During my time at Twilio, I developed technical content for the Twilio's Developer Voices blog:<br /><br />
                                <strong>May 2022 - Nov 2023 (San Francisco, CA)</strong>
                            </p>
                            <p className='indent'>
                                <strong>Improved</strong> developer relations by encouraging developers to build through Twilio's blog and products by creating educational technical content. <br />
                                <strong>Built</strong> 7 applications using Twilio APIs and products and wrote 7 corresponding technical tutorials.<br />
                                <strong>Boosted</strong> Twilio Blog's web traffic with thousands of page views by writing technical articles.<br />
                                <strong>Collaborated</strong> with dozens of developers to publish 15 new pieces by reviewing drafts & software applications.
                            </p>
                        </div>
                    }

                    {
                        whichExperience === 1 &&
                        <div>
                            <h2>
                                Research
                            </h2>
                            <h3>ML Research Assistant @ University of South Carolina</h3>
                            <p>
                                As a researcher, I get to push the boundaries of knowledge.
                                My most recent research experience was as a Machine Learning Researcher in materials science at the University of South Carolina. There, I worked on improving and adapting a machine learning model with Python to predict vibrational frequencies between bonds in crystals:<br /><br />
                                <strong>May 2021 - Dec 2021 (Columbia, SC)</strong>
                            </p>
                            <p className='indent'>
                                <strong>Provided</strong> solutions in materials discovery by predicting molecular vibrational frequencies using a graph neural network.<br />
                                <strong>Trained</strong>, <strong>tested</strong>, and <strong>evaluated</strong> over 40,000 crystal samples using Python packages, such as NumPy, pandas, scikit-learn, PyTorch, and Pymatgen.<br />
                                <strong>First author</strong> on a research paper published by the American Chemistry Society by improving machine learning models and creating graphic figures after using Python to manipulate and analyze data results.
                            </p>
                        </div>
                    }

                    {
                        whichExperience === 2 &&
                        <div>
                            <h2>
                                Education
                            </h2>
                            <h3>Tutor @ University of South Carolina</h3>
                            <p>
                                In addition to my educational role as a developer educator at Twilio, I tutored at the Dodie Anderson Academic Enrichment Center at the UofSC.<br /><br />
                                <strong>Aug 2020 - May 2022 (Columbia, SC)</strong>
                            </p>
                            <p className='indent'>
                                <strong>Helped</strong> over a dozen students reach their full academic potential by tutoring in Computer Science, Math, and Physics.<br />
                                <strong>Addressed</strong> the specific needs of students by adapting individualized approaches and supplementary materials to communicate complex subjects.
                            </p>
                            <p><br /></p>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}