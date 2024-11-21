import Tags from '../components/Tags'
import './BlogPost.css'
import AforAMockup from '../assets/images/AforABlog/a-for-aesthetic-mockup.gif'
import AforACard from '../assets/images/AforABlog/a-for-aesthetic-product-card.gif'
import AforAFront from '../assets/images/AforABlog/a-for-aesthetic-frontpage.png'
import GitTTInterface from '../assets/images/GitTTBlog/git-tt-screenshot.png'

export default function GitTimeTravelBlog() {
    return (
        <div className='max-blog-width cont--blog-post'>
            <h1 className='title--blog'>Git Time Travel Game Proof of Concept</h1>
            <Tags tags={['Procreate', 'C#', 'Unity']} />
            <h2 className='upper-line'>The Problem</h2>
            <p>
                Learning how to use Git is a rite of passage for emerging developers.
                This undergraduate project started out with a question: “What if I could version control my life?”
                What came out of it was an educational game that uses managing timelines as an analogy for version control,
                offering a hands-on, engaging way for new developers to become comfortable with Git.
            </p>
            <h2>My Role</h2>
            <p>My role for this project is the sole <strong>game developer</strong>. I designed the game, made all of the assets, and programmed the logic myself.
            </p>
            <h2>The Design</h2>
            <p>
                For this game, I crafted a metaphor in which branching timelines in the game exist as git branches, and moments in time could be saved as git commits.
                This game is a click-and-point game in which timed-events happen. The player could type "git commit" in the in-game console to save a moment in time,
                and return to that moment using "git checkout".
            </p>
            <p>
                In order to bring this concept to reality, I needed to create an interface that accomplished the following:<br />
                <strong>(1)</strong> Allow the player to move and interact with objects.<br />
                <strong>(2)</strong> Allow the player to interact with a console.<br />
                <strong>(3)</strong> Allow the player to manage timelines.
            </p>


            <div className='cont--blog-img'>
                <img
                    className="medium-width-img"
                    src={GitTTInterface}
                    alt="A diagram laying out the navigation"
                />
                <span className='span--image-caption'>user interface</span>
            </div>

            <p>
                To implement these requirements effectively, I imagined how I’d want players to interact with the game.
                Since the keyboard would be used to interact with the console, I designed the mouse for navigating and interacting with objects.
                This setup gives players two distinct interfaces to choose from. The decision to use a point-and-click approach was also inspired by early educational computer games from the 1990s and 2000s, evoking a sense of nostalgia.
                To help players manage timelines, I included the option to view them with <em>git lg</em> and added a timestamp at the bottom for easy reference.
            </p>
            <p>
                For the console, I emulated a simple command line interface in the game.
                Users can use the git commands <em>commit</em>, <em>checkout</em>, and <em>branch</em>.
                By using the <em>git commit</em> command, players can save a moment in time along with all of the actions that the players have chosen.
                To return to that time, players can use the <em>git checkout</em>.
                Additionally, if the players want to explore different options in their choices, they could use <em>git branch</em> to create branching timelines.
            </p>
            <h2>The Result</h2>
            <h3>Implementation</h3>
            <p>
                To develop a working proof of concept, I began by creating the game's animations and assets from scratch using Procreate.
                Once the visuals were ready, I brought the game to life in Unity, combining the animations with C# scripting.
                At the heart of the game’s logic is a Git-like tree data structure that I programmed to handle player interactions.
                Through the in-game command prompt, players can use commands like “git commit” to save moments in time, “git branch” to create alternate timelines, and “git checkout” to return to previous commits within the data structure.
            </p>
            <h3>Tutorial</h3>
            <p>
                To complement the educational nature of the game, I wrote a tutorial on the github's wiki page teaching how to play the game as well as basic git commands.
                Players can download the game demo and test their knowledge of git commands.
            </p>
        </div>
    )
}