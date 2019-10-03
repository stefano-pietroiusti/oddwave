// const colors = {
//   rwcblue: 'rgba(84, 200, 232, 1)',
//   rwcpurple: 'rgba(153, 61, 187, 1)',
//   rwcteal: 'rgba(46, 217, 195, 1)',
//   rwcred: 'rgba(244, 67, 108, 1)',
//   rwcyellow: 'rgba(245, 168, 0, 1)',
//   rwclime: 'rgba(200, 232, 84, 1)'
// }

export const state = () => ({
  all: [
    {
      id: 'seo',
      title: 'Search Engine Optimisation',
      description: 'Search Engine Optimization (SEO) by the Odd Wave Wave, Increase your Google ranking and drive organic traffic to your website visit theoddwave.co.nz',
      header: 'Drive organic traffic to your website with SEO',
      backgroundImage: { color1: 'rgba(84, 200, 232, 1)', color2: 'rgba(84, 200, 232, 1)', url: 'seo.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Increase your ranking cost effectively',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content: [
        // Sample { text: 'content', inlineImage: 'imageName.png' , bgImage: 'imageName.png', dark: true/false },
        // Sample banner { text: '<p><br/><p/><p><br/><p/><p><br/><p/>', bgImage: 'seo.jpg', dark: false },
        { inlineImage: 'seoinline.jpg', inlineImageText: 'Revise content and optimise your website for search engines to index your content efficiently', inlineImageStyle: 'inlineImage100', text: 'An essential part of a digital marketing strategy is SEO (Search engine optimization) . SEO helps drive customers to your business via online platforms. SEO assists in making the website rank higher in the SERP (search engine result page) so that your business website is found by customers searching for your product and services online.<br/><br/> SEO allows a great deal of free advertising. Proper optimization makes a website rank on the first page of SERP. The common belief is that people generally check the first two pages of search engine results. Approximately 94% of online users use search engines to find products and services.' },
        { text: 'Keyword-rich page content makes a substantial difference in your Google rankings and search engine results. Optimized content increases organic traffic to your website resulting in lead generation, increased sales, and improve ROI.' },
        { inlineImage: 'onpageseo.png', inlineImageRight: true, inlineImageText: 'Rank as high as possible using vanilla standards for search engine optimization', inlineImageStyle: 'inlineImage50', text: 'Technical SEO and On-Page SEO are two examples of search engine optimization practices. Technical SEO determines the quality of a website based on factors like speed and and the website has been developed. Optimizing the technical aspects of a website enables search engines to crawl and index the site correctly, which is beneficial to obtain a higher search engine rank in Google. Page load speed is another crucial aspect to consider to avoid high bounce rates and therefore improve your SEO ranking.' },
        { text: 'We have various SEO packages to choose from with secure monthly payments and no fixed contract, and you can cancel anytime.' }
      ],
      price: { value: 600, unit: 'month' },
      marketing: {
        header: 'SEO Services',
        subheader: 'Drive traffic to your website with latest SEO practices',
        content: 'Increase your ranking and revenue potential'
      },
      cloud: [
        { text: 'SEO', value: 10000 },
        { text: 'Photography', value: 1900 },
        { text: 'Optimisation', value: 15000 },
        { text: 'Websites', value: 1700 },
        { text: 'Workshops', value: 1600 },
        { text: 'Advertising', value: 1500 },
        { text: 'Branding', value: 1400 },
        { text: 'Partner', value: 1300 },
        { text: 'Animation', value: 1200 },
        { text: 'Content', value: 1100 },
        { text: 'CMS', value: 1000 },
        { text: 'SEO', value: 900 },
        { text: 'Photography', value: 800 },
        { text: 'Optimisation', value: 700 },
        { text: 'Websites', value: 600 },
        { text: 'Workshops', value: 500 },
        { text: 'Advertising', value: 400 },
        { text: 'Branding', value: 300 },
        { text: 'Partner', value: 200 },
        { text: 'Animation', value: 100 },
        { text: 'Content', value: 90 },
        { text: 'CMS', value: 80 },
        { text: 'Product', value: 70 }
      ],
      keywords: ['seo', 'search engine optimization', 'search', 'serp', 'search engine ranking']
    },
    {
      id: 'ppc',
      title: 'Pay per Click Advertising',
      description: 'Boost your sales with search advertising using Google Ads and Bing Ads, contact the Odd Wave online advertising team to get you started.',
      header: 'Pay per Click  Advertising',
      backgroundImage: { color1: 'rgba(153, 61, 187, 1)', color2: 'rgba(153, 61, 187, 1)', url: 'ppc.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Accelerate market penetration with Google Ads',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content:
        [
          {
            inlineImage: 'bargraph.png',
            inlineImageText: 'We manage search engine advertising campaigns to generate valid clicks to your website',
            inlineImageStyle: 'inlineImage50',
            text: 'PPC Advertising is paid advertising generating leads to your site, rather than earning visits organically. Advertising your business is of utmost importance. When any company goes online, pay per click advertising (PPC) works best to generate a considerable amount of web traffic.  Search engine advertising is one of the most popular forms of PPC. Pay per click or search engine marketing is one of the most potent advertising channels available, to businesses of every size. <br/><br/>The largest online advertising platform is Google Ads targeted at users using Google Search Engine. Google drives 95% of all paid search on mobile phones. Bing Ads is the second-largest platform used for PPC advertising.'
          },
          { text: 'PPC ads can be in any form of text, a photo, a video, and slides. Some interesting PPC statistics (Editor\'s Choice). In 2017, 7 million advertisers spent $10.1 billion on PPC ads. High commercial intent queries on Google AdWords get 65% of the clicks. Businesses typically earn $2 for every $1 spent on Google Ads.' },
          {
            inlineImage: 'didyouknow.png',
            inlineImageRight: true,
            inlineImageText: 'Use a well-designed PPC campaign to maximise your market share from online advertising',
            inlineImageStyle: 'inlineImage50',
            text: 'PPC visitors are 50% more likely to purchase something than organic visitors. 41% of clicks go to the top three paid ads in search results; .63 % of online searches are Google searches. Google AdWords reaches 80% of global internet users. In 2019, the average number of Google searches is over 191 billion per month. Paid search can raise brand awareness by up to 80%.62% of marketers plan to increase their PPC budgets in 2019. <br/>CTR (Click Through Rate) represents the percentage of people who click on your ad and visit the landing page on your website. So, if 100 people see your advertisement and 10 of them click on it, the CTR is 10 percent. It is essential to have as many of the right customer type clicking on your ad as possible, which means having a good CTR. A high CTR means users are visiting your website. More visits to your site mean more customers. The reward from Google is a lower cost per click for your Ad\'s campaign'
          },
          { text: 'The Odd Wave provides professionally managed Search Engine Marketing services for small to medium-sized businesses throughout NZ from our North Shore, Auckland office. We have over eight years experience in successfully managing Google advertising campaigns.' },
          {
            inlineImage: 'analyticsnew.png',
            inlineImageText: 'We research and monitor the right keywords for your pay-per-click marketing campaigns',
            inlineImageStyle: 'inlineImage75',
            text: 'Our skilled team will create a custom digital marketing strategy that will help you achieve your company goals. We will carefully help you select the correct online marketing channels. Some of these channels include Search Engine Marketing (paid) and Search Engine Optimization (earned). <br/>Here\'s what you can expect from the odd wave: Keyword research and audience targeting ensuring you attract the right customer and professionally created Ad\'s creation based on keywords researched and comply with google policies.We make sure your campaign is running optimally. The checks include search terms, negative keywords, location targeting, and budgets to mention a few.'
          }
        ],
      price: { value: 240, unit: 'per month' },
      marketing: {
        header: 'PPC search engine advertising',
        subheader: 'Generate more visits to your site',
        content: 'Increase your ranking and drive organic traffic to your site'

      },
      services:
        [
          { header: 'Google Ads', content: ['Google Ads', 'Google Ads'], price: 10 },
          { header: 'Display Advertising', content: ['Display Advertising', 'Display Advertising'], price: 10 },
          { header: 'Remarketing', content: ['Remarketing', 'Remarketing'], price: 10 }
        ],
      cloud: [{ text: 'PPC', value: 2000 },
        { text: 'Revenue', value: 1900 },
        { text: 'Optimisation', value: 1800 },
        { text: 'Websites', value: 1700 },
        { text: 'Workshops', value: 1600 },
        { text: 'Advertising', value: 1500 },
        { text: 'Branding', value: 1400 },
        { text: 'Partner', value: 1300 },
        { text: 'Animation', value: 1200 },
        { text: 'Content', value: 1100 },
        { text: 'CMS', value: 1000 },
        { text: 'SEO', value: 900 },
        { text: 'Photography', value: 800 },
        { text: 'Optimisation', value: 700 },
        { text: 'Websites', value: 600 },
        { text: 'Workshops', value: 500 },
        { text: 'Advertising', value: 400 },
        { text: 'Branding', value: 300 },
        { text: 'Partner', value: 200 },
        { text: 'Animation', value: 100 },
        { text: 'Content', value: 90 },
        { text: 'CMS', value: 80 },
        { text: 'Product', value: 70 }],
      keywords: ['pay per click', 'google ads', 'bing ads', 'microsoft advertising', 'advertising', 'workshops']
    },
    {
      id: 'webdesign',
      title: 'Website Design & PWA Development New Zealand',
      description: 'The Odd Wave’s responsive website design and progressive web application development makes it easy to distribute relevant content anywhere and quickly with an awesome look',
      header: 'Website design and progressive website development, New Zealand',
      backgroundImage: { color1: 'rgba(46, 217, 195, 1)', color2: 'rgba(46, 217, 195, 1)', url: 'webdesign.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Design, manage and distribute your content anywhere, starting with the web',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content:
        [
          {
            inlineImage: 'kiss.png',
            inlineImageRight: true,
            inlineImageText: 'We develop websites that are efficient and search-engine friendly using proven, innovative, open source technologies',
            inlineImageStyle: 'inlineImage100',
            text: 'Our approach is simple. We will manage your data and content in a way that it can be distributed and used anywhere. We will design and develop a website that is fast and responsive and look great anywhere. We do this using the latest frameworks and future-proof standards in the world of web, data, search and cloud.<br/>We use plugins and custom built components to custom build progressive web applications for every client, using latest stable frameworks and supporting processes. We avoid the standard template technologies out there and strive towards creativeness and performance.<br/>We take the time to understand your business and requirements so we can develop a website to help you stand out and grow your business further. With a range of web design and web development services on offer, we will create the perfect website to suit your budget. With our extensive industry experience, we can help you realize your kiwi business dream.'
          },
          { text: 'We can also help you with a refresh and redesign if your website is looking a little dated. In so doing, you will move onto the latest tech and be where the world is going in terms of the web and data.  We can review your existing web design and provide recommendations on ways to improve its visual look and feel and performance. All our websites are search engine optimized, ensuring our sites are visible to search engines once published.' },
          { text: 'If you are looking to launch an online store , we can design and develop an eCommerce website fully integrated into a payment gateway. With a the range of other services we offer , we really do give you a turnkey business solution.' },
          {
            inlineImage: 'pwa3.png',
            inlineImageRight: true,
            inlineImageText: 'Web application designed to provide the best user experience on mobile devices',
            inlineImageStyle: 'inlineImage100',
            header: 'Website design with a clear WOW factor',
            text: 'Website features and functions such as page and graphics design, site navigation, shopping cart, checkout and social media need to be fast, crisp, clear, simple and consistent throughout. Your whole online web and data package should be fun and enjoyable to use, from anywhere and anything.<br /><br />Great website design starts with a clear purpose in mind.Web pages need to look great and visually appealing.Good website design and content must be original and relevant to target audiences. <br /> <br />We will help you be a first- class version of yourself, not of others.Your website will also be fully responsive and will look great on any digital device.'
          },
          {
            // inlineImage: 'pwa.jpg',
            // inlineImageRight: true,
            // inlineImageText: 'Our flexible web platform provides a variety of ecommerce and digital signage possibilites',
            // inlineImageStyle: 'inlineImage100',
            header: 'Website services fit for purpose',
            text: 'We don’t fancy complex processes, overkill and clunk that usually arises from templates based design and development. We are passionate about technologies that are proven, modern and future-proof.<br />We keep things quick, simple, easy to support and integrate with.<br />Our platform and processes empower us to design and manage your content and distribute it anywhere as required, starting with the web.'
          },
          {
            inlineImage: 'awesome-development.png',
            inlineImageRight: true,
            inlineImageText: 'Our flexible web platform provides a variety of ecommerce and digital signage possibilites',
            inlineImageStyle: 'inlineImage50',
            header: 'More about the Odd Wave',
            text: 'The Odd Wave team are a small, tightly knit team that take pride in what they do to help others succeed.  We have 20 years experience behind us in the world of Web and Data. We are good at building websites and promoting businesses with search engine optimization, google adwords, social media and digital marketing.  We believe we have what it takes to achieve your personal and business goals. We are based in Auckland but are able to serve traders, shops, small business and medium enterprises across New Zealand.<br/>We will help you manage your online initiatives by covering everything it takes to do so:<br/>Suitable domain name registration<br/>Choosing a reliable hosts in terms Speed, Security, Location and Affordability<br/>Structuring and optimizing your content for search and social media<br/>Managing your content in a way so that it can be used anywhere very easily<br/>Designing according to your brand, features, products and services<br/>Managing your online presence going forward so you can focus more on your business<br/>'
          }
        ],
      price: { value: 2200, unit: 'package' },
      rate: 'hour',
      marketing: {
        header: 'Adopt latest web technologies',
        subheader: 'Remain competitive and be where the world is going',
        content: 'Using proven vanilla lightweight and super-fast web technologies'
      },
      cloud: [{ text: 'Website', value: 2000 },
        { text: 'Design', value: 1900 },
        { text: 'Optimisation', value: 1800 },
        { text: 'Websites', value: 1700 },
        { text: 'Workshops', value: 1600 },
        { text: 'Advertising', value: 1500 },
        { text: 'Branding', value: 1400 },
        { text: 'Partner', value: 1300 },
        { text: 'Animation', value: 1200 },
        { text: 'Content', value: 1100 },
        { text: 'CMS', value: 1000 },
        { text: 'SEO', value: 900 },
        { text: 'Photography', value: 800 },
        { text: 'Optimisation', value: 700 },
        { text: 'Websites', value: 600 },
        { text: 'Workshops', value: 500 },
        { text: 'Advertising', value: 400 },
        { text: 'Branding', value: 300 },
        { text: 'Partner', value: 200 },
        { text: 'Animation', value: 100 },
        { text: 'Content', value: 90 },
        { text: 'CMS', value: 80 },
        { text: 'Product', value: 70 }],
      keywords: ['website', 'design', 'development', 'html', 'css', 'java', 'javascript', 'VanillaJS', 'data', 'engineering', 'mentoring', 'workshops']
    },
    {
      id: 'photography',
      title: 'Creative Digital Photography',
      description: 'Show off your products and services with captivating digital photography services by The Odd Wave.',
      header: 'Creative Digital Photography',
      backgroundImage: { color1: 'rgba(244, 67, 108, 1)', color2: 'rgba(244, 67, 108, 1)', url: 'photography.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Attract potential customers with creative photography',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content:
      [
        {

          text: 'Visual communication has reached new heights with digital and social media marketing resulting in digital photography, becoming an essential part of product or service promotion. Digital photography is widely used in website design and is a great way to make a website more attractive and eye-catching.'
        },
        {
          text: 'Companies need to grab the attention of their target audience. An online presence, such as a website is necessary for showing your product or brand to the world and reaching potential clients.<br/><br/>We will help you support this purpose with our website design capabilities and beautiful website photography. Visual elements increase users\' willingness to read the content. The human brain processes a limited amount of information at any given time; an eye-catching photograph can be processed faster and will take precedence.',
          inlineImage: 'photography.jpg',
          inlineImageText: 'We compliment our designs with our own creative photography inspired by the wonders of New Zealand',
          inlineImageStyle: 'inlineImage75'
        },
        {
          text: 'Combining written text with visual content is an excellent way of grabbing a target audience\'s attention. Captivating digital photography drives emotional responses about a brand.Digital photos help users visualize the product or service they want to use and imagine how it will help improve their lives.'
        },
        {
          inlineImage: 'crew.jpg',
          inlineImageRight: true,
          inlineImageText: 'We love creating partnerships wherever possible to offer the best New Zealand can offer in terms of creativeness and business success',
          inlineImageStyle: 'inlineImage50',
          text: 'Our experienced in house photographer will assist you in showcasing your product or services online with eye-catching, high-quality digital photography.<br/> <br/> Contact us with your requirements.'
        }
      ],
      marketing: {
        header: 'Enhance your website visuals',
        subheader: 'Compliment your branding',
        content: 'Using creative digital photography techniques'
      },
      slides: [
        {
          image: 'art.jpg',
          imageText: 'Art works'
        },
        {
          image: 'bee.jpg',
          imageText: 'Natural bee'
        },
        {
          image: 'colluseum.jpg',
          imageText: 'International landmarks and attractions'
        },
        {
          image: 'flower.jpg',
          imageText: 'Natural beauty in every detail'
        },
        {
          image: 'mussels.jpg',
          imageText: 'Natural beauty in every detail'
        },
        {
          image: 'kitten.jpg',
          imageText: 'Natural beauty in every detail'
        },
        {
          image: 'food.jpg',
          imageText: 'Delicious food in every detail'
        },
        {
          image: 'soupbowl.jpg',
          imageText: 'Delicious food in every detail'
        },
        {
          image: 'silhoette.jpg',
          imageText: 'Creative photography'
        }

      ],
      price: { value: 1100, unit: 'package' },
      cloud: [{ text: 'Website', value: 2000 },
        { text: 'Design', value: 1900 },
        { text: 'Optimisation', value: 1800 },
        { text: 'Websites', value: 1700 },
        { text: 'Workshops', value: 1600 },
        { text: 'Advertising', value: 1500 },
        { text: 'Branding', value: 1400 },
        { text: 'Partner', value: 1300 },
        { text: 'Animation', value: 1200 },
        { text: 'Content', value: 1100 },
        { text: 'CMS', value: 1000 },
        { text: 'SEO', value: 900 },
        { text: 'Photography', value: 800 },
        { text: 'Optimisation', value: 700 },
        { text: 'Websites', value: 600 },
        { text: 'Workshops', value: 500 },
        { text: 'Advertising', value: 400 },
        { text: 'Branding', value: 300 },
        { text: 'Partner', value: 200 },
        { text: 'Animation', value: 100 },
        { text: 'Content', value: 90 },
        { text: 'CMS', value: 80 },
        { text: 'Product', value: 70 }],
      keywords: ['digital photography', 'creative photography', 'product photography', 'portrait photography', 'workshops']
    }
  ]
})

// export const getters = {
//   totalServices: (state) => {
//     return state.all.length
//   }
// }
