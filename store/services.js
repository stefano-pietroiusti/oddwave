const commonKeywords = ['professional', 'workshops', 'auckland', 'rotorua', 'new zealand', 'NZ']

export const state = () => ({
  all: [
    {
      id: 'seo-auckland',
      title: 'SEO Auckland New Zealand - Search Engine Optimisation',
      linkTitle: 'Search Engine Optimisation - SEO',
      description: 'High quality Search Engine Optimisation to raise your Google ranking and drive organic traffic to your website, resulting in increased sales and ROI. ',
      landing: { header: 'Search Engine Optimization (SEO)', content: 'Be found by more New Zealand customers searching for products and services you offer. The Odd Wave will get your business ranking on search engines such as Google and Bing by increasing your website visibility through high quality SEO.' },
      header: 'Search Engine Optimisation (SEO)',
      icon: ['fas', 'search'],
      backgroundImage: { color1: 'rgba(84, 200, 232, 1)', color2: 'rgba(84, 200, 232, 1)', url: 'seo.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Drive organic traffic to your website with the latest SEO practices',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      // 'We offer Website Design and Management, Progressive Web Applications, Animations, Content Writing and Revising, Search Engine Optimization, Digital Marketing and Pay per Click (Google Ads, Bing) as our primary services.',
      // "We will help you get to know your audience and create brand loyalty, likeness and trust.
      content: [
        // Sample { text: 'content', inlineImage: 'imageName.png' , bgImage: 'imageName.png', dark: true/false },
        // Sample banner { text: '<p><br/><p/><p><br/><p/><p><br/><p/>', bgImage: 'seo.jpg', dark: false },
        {
          inlineImage: 'seoinline.jpg',
          inlineImageText: 'Be found by more New Zealand customers searching services you offer.The Odd Wave will get your business on the first page of Google by increasing your website visibility on search engines. ',
          inlineImageStyle: 'inlineImage100',
          text: 'Be found by more New Zealand customers searching services you offer.The Odd Wave will get your business on the first page of Google by increasing your website visibility on search engines. <br/><br/>If you want long term, increased visibility in the organic search results, you\'ve come to the right place. We can cost-effectively increase your ranking and drive organic traffic to your site. If your New Zealand business isn\'t on page one, you might as well not exist. '
        },
        {
          text: 'We make it easy for your customers to find you and outrank your competition.We target the right searches that will convert into leads and more revenue for your business. SEO leads have a 14.6% close rate compared to outbound leads which have a 1.4% close rate. <br/><br/>Want to be found by more New Zealand customers? Get in touch to find out how we can help.<br/><br/>Everything we do is with a custom strategy for your business to help you achieve your Auckland business goals delivering the best possible result. We report on the things that really matter to your business like leads and sales. You can quickly see how the SEO is performing and the return you are generating on every dollar invested. '
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
          // inlineImage: 'seo.jpg',
          // inlineImageRight: true,
          // inlineImageText: 'Advertising your business is of utmost importance. When any company goes online, pay per click advertising (PPC) works best to generate a considerable amount of web traffic. SEO allows a great deal of free advertising. ',
          // inlineImageStyle: 'inlineImage75',
          text: 'Optimized content increases organic traffic to your website resulting in lead generation, increased sales, and improve ROI.Some search engine optimization practices are Technical SEO and On-Page SEO. Technical SEO determines the quality of a website based on factors like speed and code. Optimizing the technical aspects of the website enables search engines to crawl and index the site, which is beneficial to obtain a higher search engine rank in Google.Some steps to take in the direction of technical search engine optimization include fixing broken links. , removing duplicate pages, testing, and improving website speed. also, ensuring the website is mobile-friendly.'
        },
        {
          text: 'Get a serious  advantage over your competitors and be found by more of the right customer. Contact The Odd Wave team for a free quotation.<br/><br/>We have various SEO packages to choose from with secure monthly payments and no fixed contract, and you can cancel anytime. Monthly SEO packages starting from $599 + GST. '
        }
      ],
      price: { value: 600, unit: 'month' },
      relatedServices: ['ppc-auckland'],
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
      keywords: ['seo', 'search engine optimization', 'search', 'serp', 'search engine ranking']
    },
    {
      id: 'ppc-auckland',
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
          },
          { text: 'The Odd Wave provides professionally managed Search Engine Marketing services for small to medium-sized businesses throughout NZ from our North Shore, Auckland office. We have over eight years experience in successfully managing Google advertising campaigns.' }

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
      id: 'website-design-build-auckland',
      title: 'Website Design & Web Development',
      linkTitle: 'Website Design & Web Development',
      description: 'Affordable custom mobile-first web design and web application development from good practises and standards to target mobile & web in one go. Made with passion to grow brand loyalty, trust & sales.',
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
            text: 'A wide range of tools and services are used to make sure we adhere to guidelines and recommendations for making websites and web content accessible and useful to everyone. Our websites are continuously tested for accessibility and adherence to good practices and standards to include people with disabilities or special needs and people who rely on assistive technologies.'
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
      relatedServices: ['seo-auckland', 'photography-auckland'],
      rate: 'hour',
      marketing: {
        header: 'Join us',
        subheader: 'Remain competitive and be where the world is going',
        content: 'Using proven vanilla lightweight and super-fast web technologies'
      },
      keywords: [...commonKeywords, 'website design', 'web design', 'web development', 'custom websites', 'pwa web apps development', 'progressive web apps development', 'mobile web design', 'nuxtjs', 'javascript', 'Vanilla JS', 'data engineering']
    },
    {
      id: 'creative-photographer-auckland',
      title: 'Creative Photography',
      linkTitle: 'Creative Photography',
      description: 'Get creative with great photography using film and digital. Creative photography for capturing the best of people, products, functions and candid moments.',
      landing: { header: 'Creative Photography', content: 'Compliment your products, services, websites and digital signage with our creative photography from using both film and digital. Making awesomeness timeless through awesome creative photography.' },
      header: 'Creative Photography',
      icon: ['fas', 'camera-retro'],
      backgroundImage: { color1: 'rgba(244, 67, 108, 1)', color2: 'rgba(244, 67, 108, 1)', url: 'photography.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Making awesomeness timeless through awesome creative photography',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content:
        [
          {
            text: 'Visual communication has reached new heights with digital photography becoming an essential part of product or service promotion. Digital photography is widely used in website design and is a great way to make a website more attractive and eye-catching.'
          } ],
      features: [
        {
          header: 'Professional',
          text:
              'Professional goal-driven photography to help you get the results you need.',
          icon: ['fas', 'greater-than-equal']
        },
        {
          header: 'Win-win',
          text:
              'Photography to help you achieve your goals and help us retain our reputation.',
          icon: ['fas', 'award']
        },
        {
          header: 'Vanilla',
          text:
              'Photography from film and manual digital, RAW and JPEG formats and in a way to minimise post-processing.',
          icon: ['fab', 'servicestack']
        }
      ],
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
      keywords: [...commonKeywords, 'professional photographer in auckland', 'black and white photography', 'digital photography', 'film photography', 'creative photographer', 'product photographer', 'candid photographer']
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
        icon: item.icon
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
          icon: item.icon
        }
      ))
    }
    return otherSummaries
  },
  total: (state) => {
    return state.all.length
  }
}
