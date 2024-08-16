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
                For the color palette, I chose a blue-based palette specifically to convey a sense of trust and security, which are key elements that users look for in the cryptocurrency space.
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
                For the original functionality of this application, I wanted Gas Tracker to have a main dashboard so users have a centralized place to view the fee values of cryptocurrencies.
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
                With the visual identity and functionality in mind, I built a prototype on <strong>Figma</strong>. This prototype allows me to test my how I want my product before I build it.
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
            <h3>Front End</h3>
            <p><strong>React:</strong> I used Firebase's Cloud Firestore to save the user's watchlist to their account.
            </p>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img"
                    src={GTDashboard}
                    alt="Dashboard view"
                />
                <span className='span--image-caption'>Dashboard page on Gas Tracker</span>
            </div>
            <p><strong>Firebase Authentication:</strong> I used Firebase's Cloud Firestore to save the user's watchlist to their account.
            </p>
            <h3>Back End</h3>
            <p><strong>AWS:</strong> Using Node.js, I built a back-end application that queries the daily average fees of the past month for each cryptocurrency.
                This application then formats the data into JSON so it can be used as a REST API. Afterwards, I hosted the application on AWS.
            </p>
            <p><strong>Cloud Firestore:</strong> I used Firebase's Cloud Firestore to save the user's watchlist to their account.
            </p>
            <h3>Deviations from the prototype</h3>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img"
                    src={GTPrototypeChanges}
                    alt="Changes from prototype"
                />
                <span className='span--image-caption'>navigational flow chart (note: some changes were made in the final product)</span>
            </div>
            <p><strong>Background color:</strong> When it came to testing out the final product, I noticed that there was not enough contrast to make the graph components visually stand out.
                To solve this issue, I darkened the background color of the application.
            </p>
            <p><strong>Hierarchy:</strong> When it came to testing out the final product, I noticed that there was not enough contrast to make the graph components visually stand out.
                To solve this issue, I darkened the background color of the application.
            </p>
            <p><strong>Data refinement:</strong> There is one way that my prototype features <em>more</em> functionality than the final product.
                That is, the graph's card had more options for the user to set its date range. However, I chose to limit the total number of data points for two reasons.
                Firstly, unlike stock prices, if users were to use this application, they would not be looking at a timespan over a month realistically.
                Secondly, after changing this, there is the emergent benefit that there would be less API calls and data processing from the backend.
            </p>
            <p><strong>Tabs:</strong> I realized that I wanted this project to have room for more expansion and improvement.
                Consequently, I changed the layout of the application by adding tabs.
            </p>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img"
                    src={GTCompareTab}
                    alt="Prototype Screens"
                />
                <span className='span--image-caption'>Screens from the gas tracker prototype.</span>
            </div>

            <h2>Changes to Make</h2>
            <h3>Testing, testing, testing...</h3>
        </div>
    )
}