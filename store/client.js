const commonKeywords = [
  'consulting auckland',
  'website design auckland',
  'Web Development auckland',
  'Digital Marketing auckland',
  'Online Marketing auckland',
  'seo packages auckland',
  'seo auckland',
  'best website company auckland',
  'google adwords auckland', 'online ads auckland', 'search engine optimisation auckland', 'seo company auckland', 'domain name']

export const state = () => ({
  client: {
    '@id': `${process.env.baseUrl}`,
    '@type': 'Web Designer',
    geo: {
      '@type': 'GeoCoordinates',
      'latitude': -36.708400,
      'longitude': 174.734479
    },
    title:
      'Web Design & Digital Marketing Company North Shore Auckland NZ',
    description:
      'Web Design and web development company that can help you grow your online business using modern web technology, data engineering, automation, SEO and Digital Marketing',
    header: 'WEB DESIGN | SEO | DIGITAL MARKETING | DATA ANALYSIS',
    subheader: 'CUSTOM WEB DESIGN & DIGITAL MARKETING TO HELP NZ BUSINESSES GROW',
    subtitle:
      "We provide custom web design and web application development from North Shore, Auckland, New Zealand. We market our clients' businesses as if they were our own.",
    featuresHeader: 'Why us?',
    features: [
      {
        header: 'Web design with A+ Google audit score in Performance, Accessibility, Best Practices & SEO',
        text:
          "Our websites are continuously tested and audited using Google's recommended open source tools to achieve an A+ score in performance, accessibility, best practices & SEO. ",
        icon: ['fas', 'users'],
        image: '/imgs/best-web-design.svg'
      },
      {
        header: 'Web Design that puts Users, Content & Mobile First',
        text:
          'We follow a user-oriented web design approach that makes our websites, web applications and content usable by anyone on any device.',
        icon: ['fas', 'mobile-alt'],
        image: '/imgs/mobile-first.svg'
      },
      {
        header: 'Web Development with fit-for-purpose Open Source',
        text:
          'We combine established open source website frameworks with our vanilla HTML, CSS & javascript development to build websites that are lean, quick, flexible & scalable. Take advantage of our future-proof way to grow your brand image, sales and customer loyalty online.',
        icon: ['fab', 'servicestack'],
        image: '/imgs/web-dev.svg'
      },

      {
        header: 'Web design and Content for Users and Search',
        text:
          'We write structured online content to be friendly to users, mobiles & search engines. We can also help you optimize your return on investment (ROI) from our search engine optimization (SEO) services, managed conversion tracking and reporting.',
        icon: ['fas', 'chart-line'],
        image: '/imgs/web-content-search.svg'
      }
    ],
    content: [
      // { header: 'Our approach is simple and flexible', text: 'We manage data and content so it can be distributed anywhere, we make content accessible for display on any device. We revise and optimize content in response to trending keyword searches to make it search engine friendly and increase your Google rankings' },
      // { text: 'We design and develop awesome mobile-first websites to present your content - web apps that are fast, responsive and look great anywhere.<br/>Choose between static, periodic publishing and real-time, universal mobile web apps. A range of fit-for-purpose services and hosting packages are also available to keep carbon footprints and running costs low.' },
      { text: 'The Odd Wave is a modern tech driven web development company with services to help businesses grow their online presence. We create websites that are search and mobile friendly and score A+ in Google’s audit of web performance, accessibility, SEO, best practices & standards.' },
      {
        text:
          'The Odd Wave offers a range of services to support your online business venture:',
        list: [
          'Web design and web development ',
          'Digital marketing with managed google ads, facebook ads and other social media channels',
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
    name: 'The Odd Wave - SEO Web Design, Web Development & Digital Marketing Auckland NZ',
    legalName: 'The Odd Wave Ltd',
    category: ['Technology'],
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
      jobTitle: 'Owner / Director of Digital Marketing',
      description: '15+ years experience software development & management.',
      image: '/imgs/stefano-pietroiusti.jpg',
      sameAs: [
        'https://www.linkedin.com/in/jaline-pietroiusti-ab354b56'
      ]
    }, {
      '@type': 'Person',
      name: 'Stefano Pietroiusti',
      sameAs: [
        `${process.env.author}`
      ],
      jobTitle: 'IT Director',
      description: '20+ years experience in web, data, cloud, team leading & mentoring.',
      image: '/imgs/stefano-pietroiusti.jpg'
    }
    ],
    phone: ['+64 210 8658 172', '+64 210 8823 769'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7 Halder Pl',
      addressLocality: 'Torbay',
      addressRegion: 'Auckland',
      postalCode: '0632',
      addressCountry: 'New Zealand'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales Support',
      telephone: '+642108658172',
      email: 'team@theoddwave.co.nz'
    },
    telephone: '+642108658172',
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
      'https://www.facebook.com/theoddwave',
      'https://www.instagram.com/theoddwavenz/',
      'https://www.linkedin.com/company/the-odd-wave-ltd/'
    ],
    priceRange: '$$',
    copyright: '© 2019 Copyright The Odd Wave',
    poweredBy: 'powered by The Odd Wave suite of web technologies',
    about: "The Odd Wave offers a range of services to support your online business venture. Everything we do is aimed at producing results that our clients want for their businesses. We're based in Torbay, North Shore, Auckland, and are here to help everyone in New Zealand.",
    services: 'Solid and flexible web design, developer, SEO, Digital marketing and data analysis to <b>drive the right traffic</b> to your online business and <b>help your business grow</b> online.<br/><u>We do websites for ROI.</u>',
    businessvalue: "Everything we do is aimed at producing results that our clients want for their businesses. We're based in Torbay, North Shore, Auckland, and are here to help everyone in New Zealand.",
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
