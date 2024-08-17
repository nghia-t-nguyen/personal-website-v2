import Tags from '../components/Tags'
import './BlogPost.css'
import GTVisualIdentity from '../assets/images/GTBlog/gastracker_visual_identity.png'
import GTVisualIdentityMobile from '../assets/images/GTBlog/gastracker_visual_identity_mobile.png'
import GTPrototype from '../assets/images/GTBlog/gastracker_prototype.png'
import GTPrototypeChanges from '../assets/images/GTBlog/gastracker_prototype_changes.png'
import GTDashboard from '../assets/images/GTBlog/gastracker_dashboard.png'
import GTCompareTab from '../assets/images/GTBlog/gastracker_compare_tab.png'
import Navigation from '../assets/images/GTBlog/navigation.png'

export default function GasTrackerBlog() {
    return (
        <div className='max-blog-width cont--blog-post'>
            <h1 className='title--blog'>Keeping Track of Cryptocurrency Exchange Values with Gas Tracker</h1>
            <Tags tags={['ReactJS', 'HTML', 'CSS', 'JS', 'Firebase', 'Cloud Firestore', 'AWS', 'Node.js', 'BitQuery']} />
            <h2 className='upper-line'>The Problem</h2>
            <p>
                Gas is the fee required to successfully conduct a transaction or execute a contract on cryptocurrencies.
            </p>
            <p>
                There aren't many websites that display this type of data. Of the websites that do display this data there are two problems.  One: these fee values are never displayed all on the same page. Websites that track gas tend to only focus on a singular cryptocurrency.
                Consequently, I sought out to resolve these issues.
            </p>
            <h2>The Design</h2>
            <h3>Visual Identity</h3>
            <p>
                I associate cryptocurrency with the futuristic technology.
                Therefore, for the overall look of this project, I decided to build on the idea that this is a technology that would lead us forward into the future.
                In order to cultivate a cohesive visual identity, I researched and tested several color palettes, typography, and design trends.
                After thorough consideration, I settled on a unified visual identity.
            </p>
            <div className='cont--blog-img'>
                <picture>
                    <source
                        media="(max-width: 600px)"
                        srcSet={`${GTVisualIdentityMobile} 461w`}
                    />
                    <source
                        srcSet={`${GTVisualIdentity} 754w`}
                    />
                    <img
                        className="full-width-img"
                        src={GTVisualIdentity}
                        alt="Visual Identity"
                    />
                </picture>
                <span className='span--image-caption'>the established visual identity</span>
            </div>
            <p>
                <strong>Colors:</strong> I opted for a dark mode to create a futuristic, cyberpunk-inspired atmosphere that is easy for on the tech-hungry eye.
                Additionally, this approach allowed me to select hues that pop and shine, enhancing the overall visual impact of the website.
                For the color palette, I specifically chose a blue-based palette to convey a sense of trust and security, which are key elements that users look for in the cryptocurrency space.
            </p>
            <p>
                <strong>Typography:</strong> For the heading font, I selected <em>DM Sans</em>.
                Its modern and clean design enhances the visual identity of the site while also being highly readable, making it accessible to users.
                To complement <em>DM Sans</em>, I chose <em>Space Mono</em> for general text elements.
                The use of a monospace font evokes a strong connection to technology, as such fonts are commonly found in data-based applications and development environments.
                Additionally, <em>Space Mono</em> brings a unique, retro-futuristic character that adds to Gas Tracker's distinctiveness.
            </p>
            <p>
                <strong>Other Design Elements:</strong> The other design elements that I use, such as subtle gradients, glowiness, and blur, contribute significantly to a glassmorphic vibe.
                Not only is glassmorphism a trendy design choice, it enhances the website by making it seem more dimensional and having a cutting-edge appearance.
            </p>
            <h3>Fuctionality</h3>
            <p>
                For the original functionality of this application, I wanted Gas Tracker to have a main dashboard so users would have a centralized place to view the fee values of cryptocurrencies.
                Additionally, users have the option to create and log into their account. With their account, they can save their favorite cryptocurrencies to a watchlist at the top of their dashboard.
            </p>
            <p>
                Below is a flow chart I made to help me layout the navigational flow of the application.
            </p>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img"
                    src={Navigation}
                    alt="A diagram laying out the navigation"
                />
                <span className='span--image-caption'>navigational flow chart (note: some changes were made in the final product)</span>
            </div>

            <h3>Prototype</h3>
            <p>
                With the visual identity and functionality in mind, I built a prototype on <strong>Figma</strong>.
                This tool allowed me to carefully plan and design the user interface, giving insights into how the functionality of this application would align with my design vision.
                Additionally, the prototype allowed me to test different features and workflows before committing to the actual development, ensuring that the final build would meet both user needs.
            </p>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img"
                    src={GTPrototype}
                    alt="Prototype Screens"
                />
                <span className='span--image-caption'>Screens from the gas tracker prototype.</span>
            </div>
            <h2>The Product</h2>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img"
                    src={GTDashboard}
                    alt="Dashboard view"
                />
                <span className='span--image-caption'>Dashboard page on Gas Tracker</span>
            </div>
            <h3>Front End</h3>
            <p><strong>React:</strong> I built the front-end application using React's create-react-app.
                You can <a href='https://gas-trkr.netlify.app/dashboard' target="_blank" rel="noopener noreferrer">view the dashboard</a>.
            </p>
            <p><strong>Firebase Authentication:</strong> To allow for the creation of accounts and authentication, I integrated Firebase Authentication into the front end application.
            </p>
            <h3>Back End</h3>
            <p><strong>AWS:</strong> Using Node.js, I built a back-end application that queries the daily average fees of the past month for each cryptocurrency.
                This application then formats the data into JSON so it can be used as a REST API. Afterwards, I hosted the application on AWS.
            </p>
            <p><strong>Cloud Firestore:</strong> I used Firebase's Cloud Firestore to save the user's watchlist to their Firebase account.
            </p>
            <h3>Deviations from the prototype</h3>
            <p>When I built the application, I made several deviations from the prototype that I thought better suited the user's needs.
                These changes are evident in the card component as shown below.
            </p>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img"
                    src={GTPrototypeChanges}
                    alt="Changes from prototype"
                />
                <span className='span--image-caption'>Changes made to prototype card component.</span>
            </div>
            <p><strong>Background color:</strong> When it came to testing out the final product, I noticed that there was not enough contrast to make the graph components visually stand out.
                To solve this issue, I darkened the background color of the application.
            </p>
            <p><strong>Hierarchy:</strong> One of the issues I noticed with my prototype was a lack of hierarchy.
                For example, it appeared as though the card title "Bitcoin (BTC)" and "click for more details" was competing with the section heading "watchlist".
                To resolve this, I changed the font weight, font sizing, and text throughout my application.
            </p>
            <p><strong>Data refinement:</strong> There is one way that my prototype features <em>more</em> functionality than the final product.
                That is, the graph's card had more options for the user to set its date range. However, I chose to limit the total number of data points for two reasons.
                Firstly, unlike stock prices, if users were to use this application, they would not be looking at a timespan over a month realistically.
                Secondly, after changing this, there is the emergent benefit that there would be less API calls and data processing from the backend.
                In order to give the user more information after these changes, I added the fee value to the bottom left corner of the card components.
            </p>
            <p><strong>Tabs:</strong> I realized that I wanted this project to have room for more expansion and improvement.
                Consequently, I changed the layout of the application by adding tabs.
                This way, I can organically add new features, such as the compare tab that was not present in my original prototype.
            </p>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img"
                    src={GTCompareTab}
                    alt="Prototype Screens"
                />
                <span className='span--image-caption'>The compare tab.</span>
            </div>

            <h2>Changes to Make</h2>
            <h3>Testing, testing, testing...</h3>
            <p>As this application is an ongoing process, I am still testing some of the UI/UX features , such as the inclusion of icons or changing colors.
                For instance, in the compare tab, I opted for using a gradient to color the graph as opposed to the associated colors of the cryptocurrencies.
                My reasoning for this is that a lot of the cryptocurrencies tend to be in the warm range for colors, and the colors might not suit a dark mode color palette.
                However, one user in particular found the difference between the cryptocurrency's associated color and its color as shown in the graph jarring.
                Therefore, this highlights the tradeoff between readability and user familiarity and would need to be tested further.
            </p>
            <h3>New features</h3>
            <p>
                I am currently satisfied with the state of my application.
                However, I added tabs to make it more adaptable to future changes.
                One feature I am considering is adding a <em>rank</em> tab, allowing users to see the order of the fee values.
                I plan to continue rolling out features to meet any user needs.
            </p>
        </div>
    )
}