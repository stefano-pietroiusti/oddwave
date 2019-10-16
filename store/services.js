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
      id: 'website-design-dev-auckland',
      title: 'Mobile-First Website Design & Website Apps Development',
      linkTitle: 'Website Design & Development',
      description: 'Use our custom mobile-first web design and web application dev to target mobile & web in one go. Made with passion to grow brand loyalty, trust & sales.',
      landing: { header: 'Website Design & Web Apps Development', content: 'Here at The Odd Wave, we design and develop robust, cutting edge websites using latest, stable and lightweight frameworks built to last. We avoid clunk and love simplicity and performance. We continuously test and audit code and content for performance, accessibility and best practices to give you excellent quality and ROI.' },
      header: 'Custom Mobile First Web Design & Web Apps Development',
      icon: ['fab', 'dev'],
      backgroundImage: { color1: 'rgba(46, 217, 195, 1)', color2: 'rgba(46, 217, 195, 1)', url: 'webdesign.jpg', height: 'auto' },
      headerStyle: { bgStyle: 'text-secondary text-center' },
      subheader: 'Designing and developing for quality, performance and trust',
      subheaderStyle: { color: 'text-primary', buttonVariant: 'info' },
      content:
        [
          {
            // inlineImage: 'kiss.png',
            // inlineImageRight: true,
            // inlineImageText: 'The Odd Wave develop websites that are efficient and search-engine friendly using proven, innovative, open source and vanilla like technologies.',
            // inlineImageStyle: 'inlineImage100',
            text: 'We will design and develop a website that is fast, looks great and conforms to standards and best practices. We avoid clunk, overkill, template-based technologies and strive towards creativeness with quality, performance and trust.<br/>We take the time to understand your business and requirements so we can develop a website to help you stand out and grow your business further. With our range of web design and web development skills, we can create the perfect website for you.'
          },
          {
            text: "We're not about developing and reinventing the wheel. We're passionate about using technology to solve problems so will even use open-source tools, frameworks and plugins to keep things simple and efficient without comprising quality."
          }
          // and  It's not all aboutWe can also help you with a refresh and redesign if your website is looking a little dated. In so doing, you will move onto the latest tech and be where the world is going in terms of the web and data.  We can review your existing web design and provide recommendations on ways to improve its visual look and feel and performance. All our websites are search engine optimized, ensuring our sites are visible to search engines once published." },
          // { text: 'If you are looking to launch an online store , the Odd Wave can design and develop an eCommerce website fully integrated into a payment gateway. With a the range of other services we offer , we really do give you a turnkey business solution.' },

          // {
          //   // inlineImage: 'pwa3.png',
          //   // inlineImageRight: true,
          //   // inlineImageText: 'Web application designed to provide the best user experience on mobile devices',
          //   // inlineImageStyle: 'inlineImage100',
          //   header: 'Website design with a clear WOW factor',
          //   text: 'Website features and functions such as page and graphics design, site navigation, shopping cart, checkout and social media need to be fast, crisp, clear, simple and consistent throughout. Your whole online web and data package should be fun and enjoyable to use, from anywhere and anything.<br /><br />Great website design starts with a clear purpose in mind. Web pages need to look great and visually appealing.Good website design and content must be original and relevant to target audiences. <br /> <br />We will help you be a first- class version of yourself, not of others.Your website will also be fully responsive and will look great on any digital device.'
          // },

          // {
          //   // inlineImage: 'awesome-development.png',
          //   // inlineImageRight: true,
          //   // inlineImageText: 'Our flexible web platform provides a variety of ecommerce and digital signage possibilites',
          //   // inlineImageStyle: 'inlineImage50',
          //   header: 'More about the Odd Wave',
          //   text: 'The Odd Wave team are a small, tightly knit team that take pride in what they do to help others succeed.  We have 20 years experience behind us in the world of Web and Data. We are good at building websites and promoting businesses with search engine optimization, google adwords, social media and digital marketing.  We believe we have what it takes to achieve your personal and business goals. We are based in Auckland but are able to serve traders, shops, small business and medium enterprises across New Zealand.'
          // },
          // {
          //   text: 'We will help you manage your online initiatives by covering everything it takes to do so:',
          //   list: [
          //     'Suitable domain name registration',
          //     'Choosing a reliable hosts in terms Speed, Security, Location and Affordability',
          //     'Structuring and optimizing your content for search and social media',
          //     'Managing your content in a way so that it can be used anywhere very easily',
          //     'Designing according to your brand, features, products and services',
          //     'Managing your online presence going forward so you can focus more on your business']
          // }
        ],
      features: [
        {
          header: 'Webmastering',
          text:
            'Webmaster services to manage your online presence. Affordable, ongoing and trustworthy.',
          icon: ['fas', 'mobile-alt']
        },
        {
          header: 'Mobile-First',
          text:
            'Mobile-first web design, development and testing for websites and web applications that perform for everyone.',
          icon: ['fas', 'mobile-alt']
        },
        {
          header: 'Vanilla',
          text:
            'Development from Vanilla HTML, CSS, Javascript and NodeJs with minimal complexity and continuous improvement.',
          icon: ['fab', 'servicestack']
        },
        {
          header: 'Modern',
          text: 'We don’t fancy overkill and clunk that usually comes with templates based design and development. Our chosen technologies are modern, lightweight, efficient and future-proof resulting in websites that are quick, easy to support and scale.',
          // Our platform and processes empower us to design and manage your content and distribute it anywhere as required, starting with mobile devices and the web.'
          icon: ['fas', 'mobile-alt']
        }
        // {
        //   header: 'A+ testing and auditing',
        //   text:
        //       'Our websites are  testing and auditing for an A+ grade in performance, accessibility, best practices and SEO.',
        //   icon: ['fas', 'users']
        // }
      ],
      price: { value: 2200, unit: 'package' },
      rate: 'hour',
      marketing: {
        header: 'Join us',
        subheader: 'Remain competitive and be where the world is going',
        content: 'Using proven vanilla lightweight and super-fast web technologies'
      },
      cloud: [{ text: 'Website', value: 2000 },
        { text: 'Design', value: 1900 },
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
      keywords: ['website', 'design', 'development', 'html', 'css', 'java', 'javascript', 'VanillaJS', 'data', 'engineering', 'mentoring', 'workshops']
    },
    {
      id: 'photography-auckland',
      title: 'Creative Film and Digital Photography',
      linkTitle: 'Creative Film & Digital Photography',
      description: 'We can help with your still life photography, landscape photography, candid children photography and landscape photography needs. Enlighten your products, services, websites and digital signage with great photography by The Odd Wave.',
      landing: { header: 'Creative Film & Digital Photography', content: 'Compliment your visuals for products, services, websites and digital signage with our creative film and digital photography.' },
      header: 'Creative Photography',
      icon: ['fas', 'camera-retro'],
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
          image: 'silhoette.jpg',
          imageText: 'Creative photography'
        }

      ],
      price: { value: 1100, unit: 'package' },
      cloud: [{ text: 'Website', value: 2000 },
        { text: 'Design', value: 1900 },
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
      keywords: ['digital photography', 'creative photography', 'product photography', 'portrait photography', 'workshops']
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
  related: state => (id) => {
    return state.all.filter(service => service.id !== id)
  },
  total: (state) => {
    return state.all.length
  }
}
