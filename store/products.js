const commonKeywords = ['developing solutions', 'creating solutions', 'north shore', 'northland', 'auckland', 'rotorua', 'new zealand', 'NZ']

export const state = () => ({
  products: [
    {
      id: 'pro-business-website-landing',
      icon: ['fab', 'dev'],
      variant: 'rwcyellow',
      title: 'Website Landing Page',
      linkTitle: 'Business Promotion Website',
      description: 'Custom business promotion landing page with animations, stock photos, team profiles, social media links, SEO & contact form',
      header: 'Business Promotion Website',
      image: 'websitedesign.jpg',
      features: [
        {
          header: 'Custom design & development',
          text: 'Copy writing, stock photos, animations, social media links, contact form, fb messenger chat',
          icon: ['fas', 'check']
        },
        {
          header: 'Google My Business',
          icon: ['fas', 'check']
        },
        {
          header: 'A+ Google Lighthouse Audit score in SEO, Accessibility, Best Practices, Performance',
          text: 'Error free in factors that affect user experience',
          icon: ['fas', 'check']
        },
        {
          header: 'Responsive, Mobile and Search-Engine friendly',
          icon: ['fas', 'check']
        }
      ],
      samples: [
        {
          image: 'jumalutech_seo_sem.jpg',
          text: 'Our website and Google Add Campaign is still run by The Odd Wave and we are extremely satisfied with their Service. The campaign is continually evolving and growing with their guidance. Our monthly campaign cost is extremely successful as can be seen by growth rate in Turnover.',
          author: 'Jacques Pretorius, Founder',
          company: 'Jumalutech Fencing',
          link: '/docs/Jumalutech_Testimonial.pdf'
        },
        {
          author: 'The Odd Wave',
          company: 'KiwiCycles custom design to be born',
          image: 'kiwicycles_website_design.jpg',
          text: 'Perfecting your brand online.'
        },
        {
          author: 'The Odd Wave',
          company: 'Crossfit custom design to be born',
          image: 'crossfit_website_design.jpg',
          text: 'Superfit websites for gyms and fitness centres'
        },
        {
          author: 'The Odd Wave',
          company: 'Foodies custom design to be born',
          image: 'restaurant_website_design.jpg',
          text: 'Bringing to life awesome designs for foodies, cafes, restaurants and catering companies through our professional and rapid application development'
        },
        {
          author: 'The Odd Wave',
          company: 'Marine and boaties custom designs to be born',
          image: 'marine_website-design.jpg',
          text: 'Bringing to life awesome designs for marine companies through our professional and rapid web development'
        }
      ],
      isFeatured: true,
      isFeaturedOrder: 0,
      relatedServices: ['website-design-nz'],
      price: { value: 1248, unit: 'package', discount: 0, flexible: true },
      keywords: [...commonKeywords, 'business website package', 'custom website', 'landing page', 'products website', 'services website', 'website with contact form']
    },
    {
      id: 'pro-business-website',
      icon: ['fab', 'dev'],
      variant: 'rwcyellow',
      title: 'Business Website',
      linkTitle: 'Business Website Packages',
      description: 'Business Website with Landing, Contact Us, Products &/ Services',
      header: 'Business Website Packages',
      name: 'Business Website',
      image: 'websitedesign.jpg',
      features: [
        {
          header: 'Custom design & development',
          text: 'Landing, Contact Us, Products &/ Services',
          icon: ['fas', 'check']
        },
        {
          header: 'A+ Google Audit score in SEO, Accessibility & Best Practices',
          text: 'Error free in factors that affect user experience',
          icon: ['fas', 'check']
        },
        // },
        // {
        //   header: 'Advanced SEO optimization with JSON-LD Structured Data Support',
        //   icon: ['fas', 'check']
        // },
        {
          header: 'Responsive, Mobile and Search-Engine friendly',
          icon: ['fas', 'check']
        },
        {
          header: 'Scalable to a headless CMS and ecommerce PWA after consultation',
          text: 'Multilingual, headless CMS, ecommerce PWA',
          icon: ['fas', 'check']
        }
      ],
      samples: [

      ],
      isFeatured: true,
      isFeaturedOrder: 0,
      relatedServices: ['website-design-nz'],
      price: { value: 3120, unit: 'package', discount: 0, flexible: true },
      keywords: [...commonKeywords, 'business website package', 'custom website', 'landing page', 'products website', 'services website', 'website with contact form']
    },
    {
      id: 'pwa-headless-cms',
      icon: ['fab', 'dev'],
      variant: 'rwcyellow',
      title: 'PWA with any headless CMS | The Odd Wave | Auckland, NZ',
      linkTitle: 'PWA with any headless CMS',
      description: 'Combine the power of PWA with any headless CMS. It is ultrafast, offline ready, secure and can be used with any headless CMS.',
      header: 'PWA with any headless CMS',
      image: 'websitedesign.jpg',
      features: [
        {
          header: 'Offline-ready, secure, fast',
          icon: ['fas', 'check']
        },
        {
          header: 'Create, manage and expose your content-rich experiences to any digital device including digital signage',
          icon: ['fas', 'check']
        },
        {
          header: 'Stay-in-touch push notifications',
          icon: ['fas', 'check']
        },
        {
          header: 'Scalable and flexible',
          icon: ['fas', 'check']
        },
        {
          header: 'A+ Google Lighthouse Audit score in SEO, Accessibility, Best Practices, Performance',
          text: 'Error free in factors that affect user experience',
          icon: ['fas', 'check']
        }
      ],
      isFeatured: true,
      isFeaturedOrder: 0,
      relatedServices: ['pwa-ecommerce-nz'],
      price: { value: 3900, unit: 'package', discount: 0, flexible: true },
      keywords: [...commonKeywords, 'PWA with any headless CMS']
    },
    {
      id: 'pwa-eCommerce',
      icon: ['fab', 'dev'],
      variant: 'rwcyellow',
      title: 'PWA with any eCommerce | The Odd Wave | Auckland, NZ',
      linkTitle: 'PWA with any eCommerce',
      description: 'Combine the power of PWA with any e-commerce platform to provide the best shopping experiences, increase conversion rates, and grow sales.',
      header: 'PWA with any eCommerce',
      image: 'websitedesign.jpg',
      features: [
        {
          header: 'Offline-ready, secure, fast, scalable, flexible',
          icon: ['fas', 'check']
        },
        {
          header: 'Create, manage and expose your content-rich experiences to any digital device including digital signage',
          icon: ['fas', 'check']
        },
        {
          header: 'Stay-in-touch push notifications',
          icon: ['fas', 'check']
        },
        {
          header: 'Any e-commerce integration (Shopware, Shopify, Magento, Custom, Stripe, Paypal etc.)',
          icon: ['fas', 'check']
        },
        {
          header: 'A+ Google Lighthouse Audit score in SEO, Accessibility, Best Practices, Performance',
          text: 'Error free in factors that affect user experience',
          icon: ['fas', 'check']
        }
      ],
      isFeatured: true,
      isFeaturedOrder: 0,
      relatedServices: ['pwa-ecommerce-nz'],
      price: { value: 5900, unit: 'package', discount: 0, flexible: true },
      keywords: [...commonKeywords, 'PWA with any headless CMS']
    },
    {
      id: 'seo-website-package-1',
      icon: ['fas', 'search'],
      variant: 'rwcred',
      title: 'SEO website optimization for 1 Web Page',
      linkTitle: 'SEO website pack x 1 Page',
      header: 'SEO website pack - 1 Web Page',
      description: 'SEO optimization according to the Google Webmaster guidelines, includes updating of web page content, media, meta keywords, title, description, links',
      image: 'seo.jpg',
      features: [
        {
          header: 'SEO Website Audit'
        },
        {
          header: 'Website updates',
          text: 'Updating web page headings, body text, keywords, title, description, meta-tags, links, HTML code errors'
        },
        {
          header: 'Site Map and robots.txt updates'
        },
        {
          header: 'Page speed optimization',
          text: 'Updating code for images and videos'
        },
        {
          header: 'Following Google Webmaster Guidelines'
        }
      ],
      // samples: [
      //   {
      //     image: 'createrenovations.jpg',
      //     text: 'The Odd Wave Digital SEO services are professional, flexible and we look forward to building a trustworthy relationship with them for our online marketing.',
      //     author: 'Cameron, Founder',
      //     company: 'Create Renovations',
      //     link: 'https://www.createrenovations.co.nz/'
      //   }
      // ],
      price: { value: 130, unit: 'package', discount: 0, flexible: true },
      isFeatured: true,
      isFeaturedOrder: 3,
      relatedServices: ['seo-nz'],
      keywords: [...commonKeywords, 'seo package A']
    },
    {
      id: 'seo-website-package-5',
      icon: ['fas', 'search'],
      variant: 'rwcred',
      title: 'SEO website optimization for 5 Web Pages',
      linkTitle: 'SEO website pack x 5 Pages',
      description: 'SEO website of up to 5 pages and includes the features of a 1 page SEO such as updating of web page headings, body text, keywords, title, description, meta-tags, links, HTML code errors',
      header: 'SEO website pack - 5 Web Pages',
      image: 'seo.jpg',

      features: [
      ],
      price: { value: 470, unit: 'package', discount: 0, flexible: true },
      isFeatured: false,
      isFeaturedOrder: 3,
      relatedServices: ['seo-nz'],
      keywords: [...commonKeywords, 'SEO website pack 5 Pages']
    },
    {
      id: 'seo-website-package-10',
      icon: ['fas', 'search'],
      variant: 'rwcred',
      title: 'SEO website optimization for 10 Web Pages',
      linkTitle: 'SEO website pack x 10 Pages',
      description: 'SEO website of up to 10 pages and includes the features of a 1 page SEO such as updating of web page headings, body text, keywords, title, description, meta-tags, links, HTML code errors',
      header: 'SEO website pack - 10 Web Pages',
      image: 'seo.jpg',

      features: [
      ],
      price: { value: 865, unit: 'package', discount: 0, flexible: true },
      isFeatured: false,
      isFeaturedOrder: 3,
      relatedServices: ['seo-nz'],
      keywords: [...commonKeywords, 'seo package A']
    },
    {
      id: 'seo-website-package-20',
      icon: ['fas', 'search'],
      variant: 'rwcred',
      title: 'SEO website optimization for 20 Web Pages',
      linkTitle: 'SEO website pack x 20 Pages',
      description: 'SEO website of up to 20 pages and includes the features of a 1 page SEO such as updating of web page headings, body text, keywords, title, description, meta-tags, links, HTML code errors',
      header: 'SEO website pack - 20 Web Pages',
      image: 'seo.jpg',

      features: [
      ],
      price: { value: 1585, unit: 'package', discount: 0, flexible: true },
      isFeatured: false,
      isFeaturedOrder: 3,
      relatedServices: ['seo-nz'],
      keywords: [...commonKeywords, 'seo package A']
    },
    {
      id: 'website-digital-photo-24',
      icon: ['fas', 'camera-retro'],
      variant: 'rwcblue',
      title: 'Digital Photography Package with 24 edited images',
      linkTitle: 'Digital Photography Pack x24',
      description: 'Our digital photography package with about 1.5 hour photography time, rights and access to all images, and includes 24 edited images.',
      header: 'Digital Photography Pack x24',
      image: 'photography.jpg',
      features: [
      ],
      isFeatured: true,
      isFeaturedOrder: 5,
      price: { value: 270, unit: 'package', discount: 0.0 },
      relatedServices: ['photography-nz'],
      keywords: [...commonKeywords, 'photography package']
    },
    {
      id: 'website-digital-photo-100',
      icon: ['fas', 'camera-retro'],
      variant: 'rwcblue',
      title: 'Digital Photography Package with 100 edited images',
      linkTitle: 'Digital Photography Pack 2.5HR x100',
      description: 'Our digital photography package for large format digital product photos, services, backgrounds and website visuals. 2.5 hours photography time, rights and access to all images, including 100 edited images. ',
      header: 'Digital Photography Pack 2.5HR x100',
      image: 'photography.jpg',

      features: [
      ],
      price: { value: 680, unit: 'package', discount: 0.0 },
      relatedServices: ['photography-nz'],
      keywords: [...commonKeywords, 'photography maxi package']
    },
    {
      id: 'film-photography-nz',
      icon: ['fas', 'camera-retro'],
      variant: 'rwcblue',
      title: 'Film Photography with 35mm film',
      linkTitle: 'Film Photography Pack 24 x 35mm',
      description: 'Our film photography package comes with 24 x 35mm developed images and film negatives that are scanned to digital.',
      header: 'Film Photography Pack 24 x 35mm film',
      image: 'photography.jpg',
      features: [
        {
          header: '35mm film development',
          icon: ['fas', 'check']
        },
        {
          header: '35mm film negatives to digital with our film negative scanner',
          icon: ['fas', 'check']
        }
      ],
      price: { value: 350, unit: 'package', discount: 0.2 },
      isFeatured: false,
      isFeaturedOrder: 5,
      relatedServices: ['photography-nz'],
      keywords: [...commonKeywords, 'film photography package']
    },
    {
      id: 'creating-solutions-nz',
      icon: ['fab', 'dev'],
      variant: 'rwcgreen',
      title: 'Design and Development in Cloud, Web, Data, Search',
      linkTitle: 'Design and Development Services',
      header: 'Design and Development Services',
      description: 'Supporting businesses with design and development across the Cloud, Web, Data and Search.',
      image: 'websitedesign.jpg',
      features: [
        {
          header: 'Custom design, development & engineering from your ideas, designs, POCs, APIs',
          icon: ['fas', 'check']
        }, {
          header: 'Website Design, Web development, Cloud development',
          icon: ['fas', 'check']
        }, {
          header: 'Integration, Data Engineering',
          icon: ['fas', 'check']
        }, {
          header: 'BI development, Data Analysis (TSQL, Qlikview, Excel, PowerBI)',
          icon: ['fas', 'check']
        },
        {
          header: 'Documentation & Training',
          icon: ['fas', 'check']
        }
      ],
      price: { value: 120, unit: 'hour', discount: 0 },
      isFeatured: true,
      isFeaturedOrder: 5,
      relatedServices: ['software-engineering-nz'],
      keywords: [...commonKeywords, 'hourly consulting services']
    },
    {
      id: 'technical-support-nz',
      icon: ['fab', 'dev'],
      variant: 'rwcgreen',
      title: 'Technical Help and Support North Shore Auckland NZ',
      linkTitle: 'Technical Support Services',
      header: 'Technical Help and Support',
      description: 'Supporting businesses with anything technical.',
      image: 'websitedesign.jpg',
      features: [
        {
          header: 'Prototyping, designing, POCs',
          icon: ['fas', 'check']
        },
        {
          header: 'Computing and Webmaster Support',
          icon: ['fas', 'check']
        },
        {
          header: 'Customisation and configuration',
          icon: ['fas', 'check']
        },
        {
          header: 'Data visualization and reporting',
          icon: ['fas', 'check']
        },
        {
          header: 'Technical writing and documentation',
          icon: ['fas', 'check']
        }
      ],
      price: { value: 120, unit: 'hour', discount: 0 },
      isFeatured: true,
      isFeaturedOrder: 5,
      relatedServices: ['software-engineering-nz'],
      keywords: [...commonKeywords, 'hourly consulting services']
    }
  ]
})

export const getters = {
  productLinks: (state) => {
    return state.products.map((item) => {
      return {
        id: item.id,
        title: item.linkTitle,
        icon: item.icon,
        variant: item.variant
      }
    })
  },
  summaries: (state) => {
    return state.products.map((item) => {
      return {
        id: item.id,
        title: item.title,
        variant: item.variant
      }
    })
  },
  getPrice: state => (price, discount) => {
    const gstRate = 0
    const totalPrice = (Math.round(price * (1 - discount) * (1 + gstRate)) * 100) / 100
    return totalPrice
  },
  getPaymentPlan: state => (price) => {
    const depositRate = price <= 500 ? 0.50 : 0.50
    // const interestRate = 0.02
    // const frequency = price <= 500 ? 0 : (price < 1000 ? 2 : 5)
    const total = price
    const depositBalance = Math.round((total * depositRate) * 100) / 100
    // const remainingBalance = total * (1 - depositRate)
    // const frequencyPayment = price <= 500 ? ((Math.round(total) * 100) / 100) : Math.round(((remainingBalance * (1 + interestRate)) / frequency) * 100) / 100
    // return price <= 00 ? '' : `Flexi payment: upfront deposit $${depositBalance} + ${frequency} weekly payments of $${frequencyPayment} (incl. ${interestRate * 100}% admin fee and GST)`
    return price <= 500 ? '' : `Flexi payment: upfront deposit $${depositBalance} + progress payments`
  },
  getFeaturedProducts: (state, getters) => () => {
    return state.products.filter(product => product.isFeatured)
      .sort((a, b) => { return a.isFeaturedOrder - b.isFeaturedOrder || a.price.value - b.price.value })
      .map(item => (
        {
          id: item.id,
          header: item.header,
          description: item.description,
          features: item.features,
          price: getters.getPrice(item.price.value, item.price.discount),
          paymentPlan: item.price.flexible ? getters.getPaymentPlan(getters.getPrice(item.price.value, item.price.discount)) : undefined,
          relatedServices: item.relatedServices
        }
      ))
  },
  getProductById: (state, getters) => (id) => {
    const item = state.products.find(product => product.id === id)
    return {
      // JSON ld name, image, price, and priceCurrency
      id: item.id,
      title: item.title,
      name: item.header,
      description: item.description,
      header: item.header,
      subheader: item.subheader,
      image: item.image,
      features: item.features,
      relatedService: item.relatedServices[0],
      price: getters.getPrice(item.price.value, item.price.discount),
      priceCurrency: 'NZD',
      paymentPlan: item.price.flexible ? getters.getPaymentPlan(getters.getPrice(item.price.value, item.price.discount)) : undefined,
      offers: {
        '@type': 'Offer',
        'url': `${process.env.baseUrl}/products/${id}/`,
        'priceCurrency': 'NZD',
        'price': getters.getPrice(item.price.value, item.price.discount),
        'priceValidUntil': '2020-01-01',
        'itemCondition': 'https://schema.org/NewCondition',
        'availability': 'https://schema.org/PreOrder',
        'seller': {
          '@type': 'Organization',
          'name': 'The Odd Wave Ltd.'
        }
      }
    }
  },
  getProductsById: (state, getters) => (serviceId) => {
    return state.products.filter(product => (product.relatedServices.includes(serviceId)))
      .sort((a, b) => { return a.price.value - b.price.value })
      .map(item => (
        {
          id: item.id,
          header: item.header,
          subheader: item.subheader,
          features: item.features,
          price: getters.getPrice(item.price.value, item.price.discount),
          paymentPlan: item.price.flexible ? getters.getPaymentPlan(getters.getPrice(item.price.value, item.price.discount)) : undefined,
          relatedServices: item.relatedServices
        }
      ))
  },
  getPoductPortfolios: (state) => {
    return [].concat(...state.products.map(({ samples }) => samples || []))
  }
}
