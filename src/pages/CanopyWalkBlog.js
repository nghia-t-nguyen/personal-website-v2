import Tags from '../components/Tags'
import './BlogPost.css'
import TreehouseDrawing from '../assets/images/CanopyWalkBlog/treehouse_drawing.png'

export default function CanopyWalkBlog() {
    return (
        <div className='max-blog-width cont--blog-post'>
            <h1 className='title--blog'>Immerse yourself at the Canopy Walk</h1>
            <Tags tags={['UX Research', 'UX/UI Design', 'Interactive', 'Unity', 'Prototyping']} />
            <h2 className='upper-line'>The Problem</h2>
            <p>
                The Georgia Aquarium is planning on updating the rope bridge that was previously above their River Scout exhibit.
                This new exhibit will feature three treehouses above the River Scout exhibit. Each treehouse is connected to the other 
                with rope bridges, and the aquarium gave us free reign to come up with ideas of what interactives could be featured in each treehouse.
                The interactives should have an educational narrative, and are made for children between the ages of 5-9.
            </p>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img"
                    src={TreehouseDrawing}
                    alt="2D drawing on panorama of River Scout"
                />
                <span className='span--image-caption'>2D drawing of the treehouses on a panorama of the River Scout exhibit.</span>
            </div>
            <h2>Challenges</h2>
            <p>
                Some of the challenges with this project is that children are a vulnerable population when working with research, being offered many protections.
                Therefore, it can be difficult to gather insights on what children actually want.
            </p>
            <p>
                Additionally, there are several design considerations that must be taken into account.
                For example, how do you balance engagement while optimizing for flow (so that the children will keep moving throughout the exhibit)?
                Also, how does one design interactables for an attraction that can receive up to 20,000 visitors in one weekend?
                These are tough questions that requires thoughtful research and consideration.
            </p>

            <h2>My Role</h2>
            <p>
                In this project, my three groupmates and I often switch roles: researcher, interviewer, analyzer, communications, project manager, etc. 
                However, what I uniquely bring to the table is my ability to handle difficult tasks involving data and to come up with creative ideas. 
                I attribute my confidence in handling data to my background as a machine learning research assistant and my educational background in math and physics.
            </p>
            <p>
                When analyzing data, such as survey results, I created a dashboard using Google Sheets and React. 
                Additionally, when giving feedback, my groupmates wrote that I am good at coming up with creative ideas. 
                For instance, one idea I thought of was to co-design with children by giving them a page of an empty treehouse. 
                From there, we could see what insights children have to offer in terms of what would go in the treehouse.

            </p>
            <h2>Methods</h2>
            <h3>Exploration</h3>
            <p><strong>Observations:</strong> Weekly visits to the aquarium let us see how children interact with exhibits in real time, focusing on behaviors in interactive spaces.</p>
            <p><strong>User Interviews and Surveys:</strong> We gather insights on preferences, challenges, and motivations from children, parents, and staff. Surveys use QR codes and are hosted securely via Qualtrics.</p>
            <p><strong>Literature Review:</strong> We review research on children’s learning and museum design to inform evidence-based decisions.</p>
            <h3>Data Analysis and Synthesis</h3>
            <p><strong>Comparative Analysis:</strong> We analyze other museums and play spaces to identify patterns in engaging children.</p>
            <p><strong>Affinity Mapping:</strong> Notes from observations, interviews, and surveys are grouped into themes to define user needs and guide design.</p>
            <h3>Design and Prototyping</h3>
            <p><strong>Narrative and Storyboarding:</strong> We build a story across three treehouses to guide user experiences, using sketches and digital illustrations.</p>
            <p><strong>Journey Mapping:</strong> Visualizing children’s, parents’, and staff experiences helps identify pain points and opportunities.</p>
            <p><strong>Co-designing Exercises:</strong> Children design their ideal treehouses using drawings or 3D materials to inspire exhibit features.</p>
            <p><strong>Walkthrough and Functional Prototypes:</strong> Low-fidelity 3D mockups and interactive prototypes test usability and refine the design iteratively.</p>
            <h3>User Testing and User Feedback</h3>
            <p><strong>Dot Voting:</strong> Children prioritize design options through a simple, tactile voting system.</p>
            <p><strong>Heuristic Testing:</strong> Experts review usability to identify issues and improve the design efficiently.</p>

            <h2>The Design</h2>
            <p>We are currently not in the design phase of this project. Come back to learn more!</p>

        </div>
    )
}