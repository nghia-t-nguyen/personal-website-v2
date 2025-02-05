import Tags from '../components/Tags'
import './BlogPost.css'
import AforAMockup from '../assets/images/AforABlog/a-for-aesthetic-mockup.gif'
import AforACard from '../assets/images/AforABlog/a-for-aesthetic-product-card.gif'
import AforAFront from '../assets/images/AforABlog/a-for-aesthetic-frontpage.png'
import FairyGodmoth from '../assets/images/AforABlog/fairygodmoth.jpg'
import FortuneSketch from '../assets/images/AforABlog/fortune_sketch.png'

export default function AforABlog() {
    return (
        <div className='max-blog-width cont--blog-post'>
            <h1 className='title--blog'>Elevate your aesthetic with A for Aesthetic</h1>
            <Tags tags={['Shopify', 'Liquid Templating', 'HTML', 'CSS', 'Figma']} />
            <h2 className='upper-line'>The Problem (with Cute These Days)</h2>
            <p>
                <a href='https://aforaesthetic.com/' target="_blank" rel="noopener noreferrer">A for Aesthetic</a> is an artistic lifestyle brand that empowers customers to take control of their own aesthetic.
                Founded as a small, family-owned business, my sisters and I noticed a gap between the cute products we wanted and what was available in the market.
                The main issue is that cuteness is an ever-evolving entity that many companies struggle to capture.
                Here are a few examples.
            </p>
            <p>
                <strong>Outdated cuteness:</strong> One issue with modern cute products is that many are not updated to reflect current trends.
                For example, many cute items still follow a 2010s kawaii style that is no longer as relevant.
            </p>
            <p>
                <strong>Lack of representation:</strong> Another issue we found is the lack of representation when companies design products.
                A notable example is in "gamer girl" products in companies with a majority of men in leadership.
                This often leads to products that have broody, saturated colors like deep magenta, rather than the lighter pastel shades that many women might prefer.
            </p>
            <p>
                <strong>The emergence of coziness:</strong> Since the pandemic, consumers have been drawn to coziness. However, we found that when we want certain cozy products, they don't exist.
            </p>
            <p>
                Therefore, we started this small business in order to make cute products that are as diverse as the people buying them.
                We're beginning with coloring books as our first product, with hopes of growing this business into something bigger.
            </p>
            <h2>My Role</h2>
            <p>My main role for this project is the <strong>front end developer</strong>.
                However, as this is a small, family-owned business, I have to wear a lot of hats.
                Consequently, I actively contribute to the development of products and the design of the products, brand, and website.</p>
            <h2>The Design</h2>
            <div className='cont--blog-img'>
                <img
                    className="medium-width-img"
                    src={AforAMockup}
                    alt="Early mockup of A for Aesthetic"
                />
                <span className='span--image-caption'>A very early mockup of A for Aesthetic by our designer.</span>
            </div>
            <h3>Visual Identity</h3>
            <p>
                Our brand identity is minimalistic, retro, clean, neat, and legible with a touch of magic.
            </p>
            <p>
                <strong>Colors:</strong> The colors of the website are limited to black, white, and pastels.
                The minimalistic color scheme aligns with our aesthetic, offering a clean look that appeals to a broad audience.
            </p>
            <p>
                <strong>Typography:</strong> For the heading fonts, we use <em>Playfair Display</em> which is a fun, retro, and trendy font that adds a touch of character to the design.
                For subheadings and general text, we use <em>Avenir Next</em> which is a versatile font that balances between modern and classic typography.
            </p>
            <p>
                <strong>Graphics:</strong> The graphics for this website have minimalistic, almost neo-brutalist quality to them.
                They are characterized by bold border, high contrast, flatness, sharp-edged shadows, and the occassional sparkle for that touch of magic.
            </p>
            <h2>The Result</h2>
            <div className='cont--blog-img'>
                <img
                    className="medium-width-img"
                    src={AforAFront}
                    alt="Screenshot of the front page of A for Aesthetic"
                />
                <span className='span--image-caption'>Screenshot of the front page of A for Aesthetic.</span>
            </div>
            <h3>Using Liquid</h3>
            <p>For this project, I used Shopify's storefront and their Liquid templating engine.
                We wanted to have a storefront
                Instead of starting from scratch and potentially encountering challenges or errors, I decided to work off of the premade Crave template and customize the site.</p>
            <p>
                Initially, I found the process of customizing the website challenging, as I had never worked with Liquid before.
                The premade template contained a lot of redundant or unnecessary code.
                However, adapting to it was similar to working with any other developer's code, and I quickly got the hang of it.
                This experience not only enhanced my coding skills but also boosted my confidence in tackling new technologies.
            </p>
            <h3>My contribution</h3>

            <p>
                <p>
                    <strong>User interface:</strong>  I implement all of the designs for the user interface.
                    I make necessary adjustments to the website, balancing trade-offs between readability, utility, and aesthetics.
                    By changing the storefront's user interface, we strengthen our brand identity and ensure that our storefront stands out rather than appearing generic.
                </p>
                <div className='cont--blog-img'>
                    <img
                        className="small-width-img"
                        src={AforACard}
                        alt="Screenshot of the front page of A for Aesthetic"
                    />
                    <span className='span--image-caption'>Sparkle on hover.</span>
                </div>
                <strong>Responsiveness:</strong> As the front end developer, I don't just add sparkles to the website, I also keep the responsiveness of the website in mind.
                When I often begin implementing the front end, I discover that the website's responsiveness doesn't always function well for the user as originally intended in the design.
                It's my responsibility to identify what works and what needs improvement, ensuring a seamless experience across all devices and screens.
            </p>
            <h3>Why start with coloring books?</h3>
            <p>
                We chose coloring books as our first product because they align perfectly with our mission to bring customizable aesthetics into the customer's hands.
                Firstly, we can offer coloring pages as a digital product, making them easily accessible and convenient for our audience.
                Additionally, coloring books are a trendy, easy-to-produce product that directly showcases our unique sense of aesthetics.
                By allowing customers to personalize each page, we give them a tangible and relaxing way to engage with the brand.
                Because of this, we felt it was the ideal way to jumpstart our journey and connect with our audience.
            </p>
            <h2>What I am working on right now</h2>
            <p>Some of my work is not directly reflected in the website itself.
                I've just finished the writing some of the characters backstories, which we are going to pivot into their own aesthetic lines.
                Furthermore, I am working on testing to see if any AI tools are worthwhile to streamline any of the processes or if they can be used to help with customer engagement.
                I believe that there might be an opportunity to see if open source stable-diffusion models could clean up sketches a little bit more to make the lining process faster.
                Another idea that is floating around is to match a color palette or image to pick specific colors from a marker set, as that would also help customer engagement.
                Additionally, I am currently working on a *surprise feature*... on the fortune telling coloring page, which would include fortune telling cards with individualized fortunes.</p>
            <div className='cont--blog-img'>
                <img
                    className="medium-width-img"
                    src={FortuneSketch}
                    alt="Sketch of the fortune telling page"
                />
                <span className='span--image-caption'>Sketch of the fortune telling page.</span>
            </div>
            <h2>Changes to Make</h2>
            <div className='cont--blog-img'>
                <img
                    className="small-width-img"
                    src={FairyGodmoth}
                    alt="Sketch of a fairy godmother moth"
                />
                <span className='span--image-caption'>My sketch of a proposed mascot: a Fairy Godmoth</span>
            </div>
            <p>I am currently satisfied with the state of the website. However, there are still some changes that can be anticipated and perhaps a redesign underway.</p>
            <p><strong>Maintenance:</strong> As the front end developer, it is my job to maintain the website's functionality and appearance.
                Therefore, I update the website with the latest information and fix any issues that arise to keep the user experience smooth.</p>
            <p><strong>Other projects:</strong> There are some projects that I could take that don't have to do with the storefront.
                These include ads, analytics, SEO, and creating widgets that users could use for software, such as Notion.</p>

        </div>
    )
}