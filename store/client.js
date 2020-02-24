const commonKeywords = [
  'NZ website design',
  'new zealand website design',
  'website design',
  'online business',
  'website design company',
  'digital maketing',
  'digital maketing company',
  'NZ',
  'North Shore',
  'Auckland', 'online ads', 'search engine optimisation', 'seo company', 'domain name']

export const state = () => ({
  client: {
    '@id': `${process.env.baseUrl}`,
    '@type': 'Organization',
    geo: {
      '@type': 'GeoCoordinates',
      'latitude': -36.708400,
      'longitude': 174.734479
    },
    title:
      'Custom Websites, PWA eCommerce and Online Marketing | The Odd Wave, North Shore, Auckland, NZ',
    description:
      'New Zealand website design company; providing digital marketing services to grow your business. Based in North Shore, Auckland NZ we build your website and promote it online.',
    header: 'WEBSITE DESIGN, DATA & DIGITAL MARKETING',
    subheader: 'CUSTOM WEBSITE DESIGN & DIGITAL MARKETING',
    subtitle:
      "We provide custom <a href='/services/website-design-nz/' title='Website design'>website design</a>, <a href='/services/pwa-ecommerce-nz/' title='PWA eCommerce'>PWA eCommerce</a> and <a href='/services/digital-marketing-nz/' title='Digital marketing'>digital marketing</a> services to grow your business. Based in North Shore, Auckland NZ we build your website and promote it online.",
    featuresHeader: 'Why us?',
    features: [
      {
        header: 'Continuous Quality Assurance',
        text:
          "We don't just develop, deliver and leave you to it. We take projects from beginning to end and then stay with you to help grow your business with our solution.",
        icon: ['fab', 'servicestack'],
        image: '/imgs/web-dev.svg'
      },
      {
        header: 'Simplifying complexity',
        text:
          'We combine our services and custom development and integration with proven open source technologies, microservices, APIs and platforms to make the complex simple and to maximise return on investment.',
        icon: ['fas', 'chart-line'],
        image: '/imgs/web-content-search.svg'
      },
      {
        header: 'User First Design',
        text:
          'First impressions count which is why we follow goal-driven user-oriented design principles that make our solutions, websites and web applications quick, responsive, eye catching, usable by anyone on any device and worth the investment.',
        icon: ['fas', 'mobile-alt'],
        image: '/imgs/mobile-first.svg'
      },
      {
        header: 'A+ Google audit score',
        text:
          'We continuously test and audit our websites to ensure A+ Google Lighthouse scores in performance, accessibility, best practices & SEO. All content is SEO Optimised with the right keywords for your business, products and market.',
        icon: ['fas', 'users'],
        image: '/imgs/best-web-design.svg'
      }
    ],
    content: [
      // { header: 'Our approach is simple and flexible', text: 'We manage data and content so it can be distributed anywhere, we make content accessible for display on any device. We revise and optimize content in response to trending keyword searches to make it search engine friendly and increase your Google rankings' },
      // { text: 'We design and develop awesome mobile-first websites to present your content - web apps that are fast, responsive and look great anywhere.<br/>Choose between static, periodic publishing and real-time, universal mobile web apps. A range of fit-for-purpose services and hosting packages are also available to keep carbon footprints and running costs low.' },
      { text: 'The Odd Wave is a modern tech driven web development company with solutions and services to help local businesses thrive. We create websites that are search and mobile friendly and score A+ in Google’s audit of web performance, accessibility, SEO, best practices & standards.' },
      {
        text:
          'The Odd Wave offers a range of services to support your online business venture:',
        list: [
          'Website Design and web development ',
          'Digital marketing with managed google ads, facebook ads and other social media channels',
          'IT Business solutions and support',
          'Photography to bring out the best of your users, brand, products & services',
          'Web logs data analysis for online ads quality assurance',
          'Managing data and content for your users & internet search engines',
          'Managing your online presence so you can focus more on your business',
          'Training and mentoring',
          'Domain name registration and website hosting'
        ]
      },
      {
        text:
          "We're based in Torbay, North Shore, Auckland, and are here to help everyone in New Zealand."
      }
    ],
    name: 'The Odd Wave Digital - Websites & Digital Marketing',
    legalName: 'The Odd Wave Ltd',
    category: ['Internet Marketing', 'Website Designer'],
    email: 'team@theoddwave.co.nz',
    url: process.env.baseUrl,
    image: [
      `${process.env.baseUrl}/imgs/seo.jpg`,
      `${process.env.baseUrl}/imgs/websitedesign.jpg`,
      `${process.env.baseUrl}/imgs/photography.jpg`
    ],
    logo: `${process.env.baseUrl}/imgs/oddwave.png`,
    foundingDate: '2019',
    founders: [{
      '@type': 'Person',
      name: 'Jaline Van Dyk',
      jobTitle: 'Owner',
      description: '15+ years experience software development, digital marketing & management.',
      image: '/imgs/jaline-vandyk.jpg',
      sameAs: [
        'https://www.linkedin.com/in/jaline-pietroiusti-ab354b56'
      ]
    }, {
      '@type': 'Person',
      name: 'Stefano Pietroiusti',
      sameAs: [
        `${process.env.author}`
      ],
      jobTitle: 'Technical Lead',
      description: 'Experienced IT generalist and tech enthusiast with 20+ years IT experience across web, data, cloud, search & mentoring.',
      image: '/imgs/stefano-pietroiusti.jpg'
    }
    ],
    phone: ['0800 4 2020 4', '+64 210 8658 172', '+64 210 8823 769'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7 Halder Place',
      addressLocality: 'Torbay',
      addressRegion: 'Auckland',
      postalCode: '0632',
      addressCountry: 'New Zealand'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Support',
      telephone: '0800420204',
      email: 'team@theoddwave.co.nz'
    },
    telephone: '0800420204',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        'opens': '8:00',
        'closes': '16:30'
      }
    ],
    sameAs: [
      'https://g.page/theoddwave/',
      'https://www.facebook.com/theoddwave',
      'https://www.instagram.com/theoddwavenz/',
      'https://www.linkedin.com/company/the-odd-wave-ltd/'
    ],
    priceRange: '$$',
    copyright: '© 2019 Copyright The Odd Wave',
    poweredBy: 'powered by The Odd Wave suite of web technologies',
    marketing: 'Mobile devices are being used every day to perform simple tasks on the go, and this includes searching for products, services and shopping online. Customers today are looking to snappy websites that beautifully display the information they want, look great on mobile and display what they are looking for with minimal effort. <br><br> We’re passionate about growing your business, and we make complex simple so you can put your time and effort into what matters most in your business. <br><br>Many solutions/packages out there are too expensive. Our goal is to do things the right way using the best solutions to keep your business growing, every cent spent with us is not wasted because anything we develop can scale affordably. We combine custom development with API services and proven open source technologies to fast track solutions to your problems. <br><br>Contact us today about building your business website. We would love to help you create a quality website to meet your business needs.',
    about: 'The Odd Wave is a creative Digital Marketing and Website Design company, passionate about modern technology that we use to propel small to medium size businesses to success. Our Mission is to assist local businesses with digital transformation by delivering an impactful online presence backed by our digital marketing expertise with round the clock support.',
    history: 'Odd - Meaning we’re “different to what is usual or expected” <br> Wave - Meaning we’re “the sudden occurrence or increase in a positive phenomenon, feeling or emotion” from working with us and using the right modern technologies.',
    services: 'We offer a range of web solutions and services to help your business thrive in this rapidly changing digital world. Website Design, Web Development, Software Engineering, SEO, Online Reputation Management ,Digital Marketing and Data Analysis to <b>drive the right traffic</b> to your online business,<br/>backed by our round the clock support on all our solutions',
    businessvalue: 'Get in touch to learn more about how we can help you grow your business with us.',
    fb: 'https://www.facebook.com/theoddwave',
    instagram: 'https://www.instagram.com/theoddwavenz/',
    linkedin: 'https://www.linkedin.com/company/the-odd-wave-ltd/',
    whatsapp: 'https://chat.whatsapp.com/DT09gv1r4fR7iD05jl7ing',
    googlebusiness: 'https://g.page/theoddwave/review?gm',
    keywords: [
      ...commonKeywords
    ]
  }
})

export const getters = {
  getClient: (state) => {
    const client = state.client
    return client
  },
  getClientFeatures: (state) => {
    return state.client.features
  }
}
