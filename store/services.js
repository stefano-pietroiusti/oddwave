const commonKeywords = [
  'fun workshops auckland',
  'workshops auckland',
  'workshops rotorua',
  'workshops new zealand',
  'workshops NZ',
  'auckland', 'rotorua', 'new zealand', 'NZ']

export const state = () => ({
  all: [
    {
      id: 'website-design-build-auckland',
      variant: 'rwcyellow',
      animate: 'bounceInLeft',
      title: 'Website Design & Web Development',
      linkTitle: 'Website Design & Web Development',
      description: 'Custom mobile-first web design and web application development from good practises and standards to target mobile & web in one go. Made with passion to grow brand loyalty, trust & sales.',
      landing: { header: 'Website Design & Web Development', content: 'Here at The Odd Wave, we design and develop robust, cutting edge websites using stable and lightweight frameworks built to last. We avoid clunk and overkill and love keeping things simple even when developing to solve the most complex problems. We continuously test and audit code and content for performance, accessibility, best practices and SEO to give you excellent quality and ROI.' },
      header: 'Custom Mobile First Web Design & Web Apps Development',
      icon: ['fab', 'dev'],
      backgroundImage: { color1: 'rgba(46, 217, 195, 1)', color2: 'rgba(46, 217, 195, 1)', url: 'webdesign.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Designing and developing for quality, loyalty, performance and trust',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content:
        [
          {
            text: 'We will design and develop a website that performs, looks great and continuously conforms to standards and best practices. We avoid clunk, overkill, quick template-based technologies and strive towards creativeness with quality, performance and trust. <br/>We take the time to understand your business and requirements so we can develop a website to help you stand out and grow your business further.'
          },
          {
            header: 'Mobile-first Content-first design',
            text: 'Content-first design principles are used to structure our websites in a way to guide users to achieve their goals as quickly as possible. Fit for purpose mobile-first design principles are followed so whatever we create looks good and performs well on the smallest mobile screen first and then naturally translates well to bigger screens.'
          },
          {
            header: 'Continuous improvement',
            text: 'Our passion for finding and using the right technology to solve problems drives us to research, test and apply the right improvements continuously.'
          },
          {
            header: 'Websites for everyone',
            text: 'A wide range of tools and services are used to make sure we adhere to guidelines and recommendations for making websites and web content accessible and useful to everyone. Our websites are continuously tested for accessibility and adhere to good practices and standards so as to include people with disabilities or special needs and people who rely on assistive technologies.'
          },
          {
            header: 'Open source',
            text: 'Open-source tools, frameworks and plugins help us keep things lean, flexible, secure and reliable and allow us to create with the highest quality.'
          }
        ],
      features: [
        {
          header: 'Professional',
          text:
            'Professional webmaster services to help you manage your online presence. Affordable, continuous and trustworthy.',
          icon: ['fas', 'greater-than-equal']
        },
        {
          header: 'Content-First Mobile-First',
          text:
            'Content-First Mobile-First design, development and testing for websites that are consistent and perform well for everyone.',
          icon: ['fas', 'mobile-alt']
        },
        {
          header: 'Vanilla',
          text:
            'Development from set standards, good practices, established open source frameworks, Vanilla Javascript, HTML, CSS and NodeJs. All resulting in minimal complexity and continuous improvement.',
          icon: ['fab', 'servicestack']
        },
        {
          header: 'Modern',
          text: 'Our chosen technologies are modern, light-weight, efficient and future-proof resulting in websites that are quick, easy to support and scale.',
          icon: ['fas', 'mobile-alt']
        }
      ],
      price: { value: 2400, unit: 'package' },
      relatedServices: ['seo-auckland', 'creative-photographer-auckland'],
      rate: 'hour',
      marketing: {
        header: 'Join us',
        subheader: 'Remain competitive and be where the world is going',
        content: 'Using proven vanilla lightweight and super-fast web technologies'
      },
      keywords: [...commonKeywords, 'website design', 'web design', 'web development', 'custom websites', 'pwa web apps development', 'progressive web apps development', 'mobile web design', 'nuxtjs', 'javascript', 'Vanilla JS', 'data engineering']
    },
    {
      id: 'seo-auckland',
      variant: 'rwcred',
      animate: 'flipInX',
      title: 'SEO Auckland New Zealand - Search Engine Optimisation',
      linkTitle: 'Search Engine Optimisation - SEO',
      description: 'High quality Search Engine Optimisation to raise your Google ranking and drive organic traffic to your website, resulting in increased sales and ROI. ',
      landing: { header: 'Search Engine Optimization (SEO)', content: 'Be found by more New Zealand customers searching for products and services you offer. The Odd Wave will get your business ranking on search engines such as Google and Bing by increasing your website visibility through high quality SEO.' },
      header: 'Search Engine Optimisation (SEO)',
      icon: ['fas', 'search'],
      backgroundImage: { color1: 'rgba(84, 200, 232, 1)', color2: 'rgba(84, 200, 232, 1)', url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23ffb100' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ffb800' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ffbf00' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23ffc500' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ffcc00' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ffd624' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ffe038' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23ffeb49' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23fff558' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffff66' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E", height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Drive organic traffic to your website with the latest SEO practices',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content: [
        {
          inlineImage: 'seoinline.jpg',
          inlineImageText: 'Be found by more New Zealand customers searching services you offer.The Odd Wave will get your business ranking on Google and Bing by increasing your website visibility on search engines. ',
          inlineImageStyle: 'inlineImage100',
          text: 'Be found by more New Zealand customers searching services you offer.The Odd Wave will get your business ranking on Google by increasing your website visibility on search engines. <br/><br/>If you want long term, increased visibility in the organic search results, you\'ve come to the right place. We can cost-effectively increase your ranking and drive organic traffic to your site. If your New Zealand business isn\'t ranking, you might as well not exist. '
        },
        {
          text: 'We make it easy for your customers to find you and outrank your competition.We target the right searches that will convert into leads and more revenue for your business. SEO leads have a 14.6% close rate compared to outbound leads which have a 1.4% close rate. <br/><br/>Everything we do is with a custom strategy for your business to help you achieve your Auckland business goals delivering the best possible result. We report on the things that really matter to your business like leads and sales. You can quickly see how the SEO is performing and the return you are generating on every dollar invested. '
        },
        {
          inlineImage: 'onpageseo.png',
          inlineImageRight: true,
          inlineImageText: 'Everything we do is with a custom strategy for your business to help you achieve your Auckland business goals delivering the best possible result. We report on the things that really matter to your business like leads and sales. You can quickly see how the SEO is performing and the return you are generating on every dollar invested. ',
          inlineImageStyle: 'inlineImage50',
          text: 'Search Engine Optimization is an essential part of a digital marketing strategy . SEO  assists in driving customers to your small business via online platforms.SEO assists in making the website rank higher in the SERP (search engine result page) so that your business website is found by customers searching for your product and services online. Advertising your business is of utmost importance. When any company goes online, pay per click advertising (PPC) works best to generate a considerable amount of web traffic. SEO allows a great deal of free advertising. '
        },
        {
          text: 'Proper optimization makes a website rank on the first page of SERP. The common belief is that people generally check the first two pages of search engine results. Approximately 74% of online users use search engines to find products and services. Keyword research and the proper use of keywords (including avoiding keyword stuffing) directly influence the complexity and readability of the content. Keyword-rich page content makes a substantial difference in your Google rankings and search engine results. '
        },
        {
          text: 'Optimized content increases organic traffic to your website resulting in lead generation, increased sales, and improve ROI.Some search engine optimization practices are Technical SEO and On-Page SEO. Technical SEO determines the quality of a website based on factors like speed and code. Optimizing the technical aspects of the website enables search engines to crawl and index the site, which is beneficial to obtain a higher search engine rank in Google.Some steps to take in the direction of technical search engine optimization include fixing broken links. , removing duplicate pages, testing, and improving website speed. also, ensuring the website is mobile-friendly.'
        },
        {
          text: 'We have various SEO packages to choose from, payable on a monthly basis with no fixed contract, and you can cancel anytime.'
        }
      ],
      price: { value: 600, unit: 'month' },
      relatedServices: ['ppc-auckland', 'website-design-build-auckland'],
      marketing: {
        header: 'SEO Services',
        subheader: 'Drive traffic to your website with latest SEO practices',
        content: 'Increase your ranking and revenue potential'
      },
      cloud: [
        { text: 'SEO', value: 10000 },
        { text: 'Photography', value: 1900 },
        { text: 'Optimization', value: 15000 },
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
        { text: 'Optimization', value: 700 },
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
      keywords: [...commonKeywords, 'seo', 'search engine optimisation', 'serp', 'search engine ranking', 'improve your search engine ranking']
    },
    {
      id: 'ppc-auckland',
      variant: 'rwcpurple',
      animate: 'zoomInLeft',
      title: 'Google AdWords Management and PPC Advertising Services',
      linkTitle: 'Pay per Click Advertising - PPC',
      description: 'The Odd Wave offers AdWords management services to businesses all over NZ. Google Ads and pay-per-click advertising provide instant results.',
      landing: { header: 'Pay per Click Advertising (PPC)', content: 'The Odd Wave provides professionally managed service for Pay per Click advertising. Stay ahead of your competition with Google AdWords pay-per-click.' },
      header: 'Pay per Click  Advertising',
      icon: ['fas', 'search-dollar'],
      backgroundImage: { color1: 'rgba(153, 61, 187, 1)', color2: 'rgba(153, 61, 187, 1)', url: 'ppc.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Accelerate market penetration with Google Ads',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content:
        [
          {
            inlineImage: 'bargraph.jpg',
            inlineImageText: 'We manage search engine advertising campaigns to generate valid clicks to your website',
            inlineImageStyle: 'inlineImage100',
            text: 'Advertising your business is of utmost importance. When any company goes online, pay per click advertising (PPC) works best to generate a considerable amount of web traffic and sales leads. PPC Advertising is paid advertising generating leads to your site, rather than earning visits organically and is one of the most popular forms of PPC. <br/> <br/>The Odd Wave provides professionally managed Search Engine Marketing services for small to medium-sized businesses throughout NZ from our North Shore, Auckland office. '
          },
          { text: 'Pay per click or search engine marketing is one of the most potent advertising channels available, to businesses of every size. PPC ads can be in any form of text, a photo, a video, and slides.  The largest online advertising platform is Google Ads targeted at users using Google Search Engine. Google drives 95% of all paid search on mobile phones, the second-largest platform used for PPC advertising is Bing Ads. ' },
          {
            inlineImage: 'marketinglogos.png',
            inlineImageLeft: true,
            inlineImageText: 'We use Google Ads and Bing Ads to advertise',
            inlineImageStyle: 'inlineImage100'

          },
          {
            text: 'Here\'s what you can expect from The Odd Wave:',
            list: [
              'Initial Consultation to get know your business, products, services and your customers',
              'Carefully selected online marketing channels, these include Search Engine Marketing (paid) and Search Engine Optimization (earned). ',
              'Keyword Research that comply with Google policies',
              'Ad Campaign creation and setup , including Google Analytics setup and conversion tracking',
              'Audience Targeting ensuring you attract the right customer',
              'Optimization of Ad Campaigns',
              'Campaign Monitoring , checks include search terms, negative keywords, location targeting, and budgets to mention a few.',
              'Monthly Campaign performance']
          },

          {
            inlineImage: 'didyouknow.png',
            inlineImageRight: true,
            inlineImageText: 'Use a well-designed PPC campaign to maximise your market share from online advertising',
            inlineImageStyle: 'inlineImage50',
            text: 'Some interesting PPC statistics (Editor\'s Choice).<br/> <br/> In 2017, 7 million advertisers spent $10.1 billion on PPC ads. Businesses typically earn $2 for every $1 spent on Google Ads. High commercial intent queries on Google AdWords get 65% of the clicks. <br/><br/>PPC visitors are 50% more likely to purchase something than organic visitors. 41% of clicks go to the top three paid ads in search results; .63 % of online searches are Google searches. Google AdWords reaches 80% of global internet users. '
          },
          { text: 'In 2019, the average number of Google searches is over 191 billion per month. Paid search can raise brand awareness by up to 80%.62% of marketers plan to increase their PPC budgets in 2019. <br/>CTR (Click Through Rate) represents the percentage of people who click on your ad and visit the landing page on your website. So, if 100 people see your advertisement and 10 of them click on it, the CTR is 10 percent. It is essential to have as many of the right customer type clicking on your ad as possible, which means having a good CTR. A high CTR means users are visiting your website. More visits to your site mean more customers. The reward from Google is a lower cost per click for your Ad\'s campaign' }

        ],
      price: { value: 240, unit: 'per month' },
      relatedServices: ['seo-auckland'],
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
        { text: 'Optimization', value: 1800 },
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
        { text: 'Optimization', value: 700 },
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
      id: 'creative-photographer-auckland',
      variant: 'rwcblue',
      animate: 'jackInTheBox',
      title: 'Creative Photography',
      linkTitle: 'Creative Photography',
      description: 'Get creative with great photography using film and digital. Creative photography for capturing the best of people, products, functions and candid moments.',
      landing: { header: 'Creative Photography', content: 'Compliment your products, services, websites and digital signage with our creative photography from using both film and digital. Making great things timeless through awesome & creative photography.' },
      header: 'Creative Photography',
      icon: ['fas', 'camera-retro'],
      backgroundImage: { color1: 'rgba(244, 67, 108, 1)', color2: 'rgba(244, 67, 108, 1)', url: 'photography.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Making awesomeness timeless through awesome creative photography',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content:
        [
          // {
          //   text: 'Visual communication has reached new heights with digital photography becoming an essential part of product or service promotion. Digital photography is widely used in website design and is a great way to make a website more attractive and eye-catching.'
          // }
        ],
      features: [
        {
          header: 'Professional',
          text:
            'Professional goal-driven photography to help you get the results you need.',
          icon: ['fas', 'greater-than-equal']
        },
        {
          header: 'Diverse',
          text:
            'A range of photography techniques are used to isolate, highlight and enhance ideas. ',
          icon: ['fas', 'award']
        },
        {
          header: 'Vanilla',
          text:
            'Photography from film and manual digital to high quality media, RAW and JPEG formats with minimal post-processing.',
          icon: ['fab', 'servicestack']
        }
      ],
      relatedServices: ['website-design-build-auckland'],
      marketing: {
        header: 'Enhance your website visuals',
        subheader: 'Compliment your branding',
        content: 'Using creative digital photography techniques'
      },
      slides: [
        {
          image: 'chelsea-pensioner-royal-hospital-candid.jpg',
          imageText: 'Chelsea pensioner at the Chelsea Royal Hospital'
        },
        {
          image: 'pet-and-owner-portrait.jpg',
          imageText: 'Owner and dog Cerchio Italy'
        },
        {
          image: 'pet-portrait.jpg',
          imageText: 'Cat portrait'
        },
        {
          image: 'portrait-street-children-portrait.jpg',
          imageText: 'Children portrait'
        },
        {
          image: 'bee-flower-candid.jpg',
          imageText: 'Bee merging from flower'
        },
        {
          image: 'bee-candid.jpg',
          imageText: 'Bee at work'
        },
        {
          image: 'mussels-portrait.jpg',
          imageText: 'Mussels in the wild'
        },
        {
          image: 'silhoette-candid.jpg',
          imageText: 'Creative silhoette of people waving'
        }

      ],
      price: { value: 1100, unit: 'package' },
      keywords: [...commonKeywords, 'professional photographer in auckland', 'creative photographer', 'product photographer', 'food photographer', 'still-life photographer', 'candid photographer', 'black and white photography', 'digital photography', 'film photography']
    }
  ]
})

export const getters = {
  links: (state) => {
    return state.all.map((item) => {
      return {
        id: item.id,
        title: item.linkTitle
      }
    })
  },
  summaries: (state) => {
    return state.all.map((item) => {
      return {
        id: item.id,
        title: item.linkTitle,
        landing: item.landing,
        backgroundImage: item.backgroundImage,
        icon: item.icon,
        variant: item.variant
      }
    })
  },
  others: state => (id) => {
    return state.all.filter(service => service.id !== id)
  },
  getServiceById: state => (id) => {
    return state.all.find(service => service.id === id)
  },
  getRelatedSummaries: state => (id) => {
    const service = state.all.find(service => service.id === id)
    let otherSummaries
    if (service.relatedServices && service.relatedServices.length > 0) {
      otherSummaries = state.all.filter(item => (service.relatedServices.includes(item.id))).map(item => (
        {
          id: item.id,
          title: item.linkTitle,
          landing: item.landing,
          backgroundImage: item.backgroundImage,
          icon: item.icon,
          variant: item.variant
        }
      ))
    }
    return otherSummaries
  },
  total: (state) => {
    return state.all.length
  }
}
