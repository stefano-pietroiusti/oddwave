const commonKeywords = ['developing solutions', 'creating solutions', 'north shore', 'northland', 'auckland', 'rotorua', 'new zealand', 'NZ']

export const state = () => ({
  all: [
    {
      id: 'flexi-surface-business',
      variant: 'success',
      title: 'Flexi-Surface Business Website package NZ',
      linkTitle: 'Flexi-Surface Business Website package NZ',
      description: 'Great value business starter web package giving access to flexible services',
      header: 'Flexi-Surface Business Website Package',
      icon: ['fas', 'check'],
      subheader: 'Universal multi-page starter package for all businesses',
      features: [
        {
          header: '5 page custom website',
          text: 'Landing, Contact Us, Products &/ Services',
          icon: ['fas', 'check']
        },
        {
          header: 'A+ Google Audit score in SEO, Accessibility & Best Practices',
          text: 'Error free in factors that affect user experience',
          icon: ['fas', 'check']
        },
        {
          header: 'SEO Package A',
          text: 'Optimization of up to 5 Pages',
          icon: ['fas', 'check']
        },
        {
          header: 'Stock Images',
          icon: ['fas', 'check']
        },
        {
          header: 'Domain registration',
          icon: ['fas', 'check']
        },
        {
          header: '1 year business hosting',
          icon: ['fas', 'check']
        },
        {
          header: 'HTTPS secure',
          icon: ['fas', 'check']
        },
        {
          header: 'Content design',
          text: 'Optimum website flow, content & SEO',

          icon: ['fas', 'check']
        },
        {
          header: 'Mobile friendly',
          icon: ['fas', 'check']
        },
        {
          header: 'SEO search-engine friendly',
          icon: ['fas', 'check']
        },
        {
          header: 'Social media links',
          icon: ['fas', 'check']
        },
        {
          header: 'Unlimited email',
          text:
            'We will set up 1 - 5 email addresses for you initially',
          icon: ['fas', 'check']
        },
        {
          header: 'Google business listing',
          icon: ['fas', 'check']
        },
        {
          header: 'Google analytics',
          icon: ['fas', 'check']
        },
        {
          header: 'Scalable to optional add-ons after consultation',
          text: 'Additional pages, online customer chat, monthly management, maintenance & support, custom feature development, content writing, headless CMS with GraphQL API, shopping cart & ecommerce',
          icon: ['fas', 'check']
        }
      ],
      // addons: [
      //   {
      //     header: 'Content writing & SEO',
      //     text:
      //       'Additional page, services, products',
      //     icon: ['fab', 'servicestack'],
      //     price: { value: 120, unit: 'page of optimised 250 words' }
      //   },
      //   {
      //     header: 'Custom development',
      //     text:
      //       'Features, addons, customisations',
      //     price: { value: 100, unit: 'hour' }
      //   },
      //   {
      //     header: 'Monthly management, maintenance, reporting',
      //     text:
      //       'Monthly management, maintenance, analytics reporting up to 2 hours',
      //     price: { value: 80, unit: 'package' }
      //   }, {
      //     header: 'Updates',
      //     text:
      //       '2 hours per month',
      //     icon: ['fas', 'check']
      //   },
      //   {
      //     header: 'Monthly management & reporting',
      //     text:
      //       '2 hours per month',
      //     icon: ['fas', 'check']
      //   }
      // ],
      isFeatured: true,
      isFeaturedOrder: 0,
      relatedServices: ['website-design-auckland'],
      price: { value: 2250, unit: 'package', discount: '0', flexible: true },
      keywords: [...commonKeywords, 'business website package', 'custom website', 'landing page', 'products website', 'services website', 'website with contact form']
    },
    {
      id: 'flexi-landing',
      variant: 'success',
      title: 'Website Landing Page Auckland',
      linkTitle: 'Website Landing Page Auckland',
      description: 'Business promotion-specific page with external links',
      header: 'Website Landing Page',
      icon: ['fas', 'check'],
      subheader: 'Dedicated promotion-specific website landing page page with media and external links',
      features: [
        {
          header: 'Website landing page design',
          text: 'Website homepage design, Content design, stock photos, Text animation &/ scroll animation, external links to services, documents, social media',
          icon: ['fas', 'check']
        },
        {
          header: 'A+ Google Website Audit score in SEO, Accessibility & Best Practices',
          text: 'Error free in factors that affect user experience',
          icon: ['fas', 'check']
        },
        {
          header: 'Website address registration',
          text: 'Suitable domain name registration',
          icon: ['fas', 'check']
        },
        {
          header: '1 year web hosting & email hosting',
          icon: ['fas', 'check']
        },
        {
          header: 'Website security',
          text: 'HTTPS web server & website hosting',
          icon: ['fas', 'check']
        },
        {
          header: 'Mobile friendly',
          icon: ['fas', 'check']
        },
        {
          header: 'SEO search-engine friendly',
          icon: ['fas', 'check']
        },
        {
          header: 'Social media links',
          icon: ['fas', 'check']
        },
        {
          header: 'Unlimited email',
          text:
            'We will set up 1 - 5 email addresses for you initially',
          icon: ['fas', 'check']
        },
        {
          header: 'Scalable to Flexi-Surface',
          icon: ['fas', 'check']
        }
      ],
      isFeatured: true,
      isFeaturedOrder: 0,
      relatedServices: ['website-design-auckland'],
      price: { value: 749, unit: 'package', discount: '0', flexible: true },
      keywords: [...commonKeywords, 'business website package', 'custom website', 'landing page', 'products website', 'services website', 'website with contact form']
    },
    {
      id: 'digital-photo-0',
      variant: 'success',
      title: 'Flexi Digital Photography',
      linkTitle: 'Business starter package',
      description: 'Great value photography package',
      header: 'Digital Photography',
      icon: ['fas', 'check'],
      subheader: 'Rights to all images + 10 edited images',
      features: [
      ],
      price: { value: 150, unit: 'package', discount: '0' },
      isFeatured: true,
      isFeaturedOrder: 5,
      relatedServices: ['photographer-nz'],
      keywords: [...commonKeywords, 'photography package']
    },
    {
      id: 'digital-photo-1',
      variant: 'success',
      title: 'Base Photography Package',
      linkTitle: 'Business starter package',
      description: 'Great value photography package',
      header: 'Digital Photo Package 1',
      icon: ['fas', 'check'],
      subheader: '1 hour, rights to all images + 24 edited images',
      features: [
      ],
      price: { value: 270, unit: 'package', discount: '0' },
      relatedServices: ['photographer-nz'],
      keywords: [...commonKeywords, 'photography package']
    },
    {
      id: 'digital-photo-2',
      variant: 'success',
      title: 'Midi Photography Package',
      linkTitle: 'Midi Photography package',
      description: 'Great value business starter web package',
      header: 'Digital Photo Package 2',
      icon: ['fas', 'check'],
      subheader: '2 hours, rights to all images + 100 edited images',
      features: [
      ],
      price: { value: 680, unit: 'package', discount: '0' },
      relatedServices: ['photographer-nz'],
      keywords: [...commonKeywords, 'photography maxi package']
    },
    {
      id: 'digital-photo-3',
      variant: 'success',
      title: 'Maxi Photography Package',
      linkTitle: 'Maxi Photography package',
      description: 'Maxi Photography package',
      header: 'Digital Photo Package 3',
      icon: ['fas', 'check'],
      subheader: '6 hours, rights to all images + 300 edited images',
      features: [
      ],
      price: { value: 1900, unit: 'package', discount: '0', flexible: true },
      relatedServices: ['photographer-nz'],
      keywords: [...commonKeywords, 'photography maxi package']
    },
    {
      id: 'film-photography-nz',
      variant: 'success',
      title: 'Film Photography',
      linkTitle: 'Business starter package',
      description: 'Great value photography package',
      header: 'Film Photography',
      icon: ['fas', 'check'],
      subheader: 'Per hour & 24 x 35mm developed images',
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
      price: { value: 420, unit: 'package', discount: '0' },
      isFeatured: true,
      isFeaturedOrder: 5,
      relatedServices: ['photographer-nz'],
      keywords: [...commonKeywords, 'film photography package']
    },
    {
      id: 'seo-1',
      variant: 'success',
      title: 'SEO Package A',
      linkTitle: 'SEO Package A',
      description: 'SEO Package A',
      header: 'Flexi SEO',
      icon: ['fas', 'check'],
      subheader: 'Optimization of up to 5 Pages',
      features: [
      ],
      price: { value: 450, unit: 'package', discount: '0', flexible: true },
      isFeatured: true,
      isFeaturedOrder: 3,
      relatedServices: ['seo-auckland'],
      keywords: [...commonKeywords, 'seo package A']
    },
    {
      id: 'seo-2',
      variant: 'success',
      title: 'SEO Package B',
      linkTitle: 'SEO Package B',
      description: 'SEO Package B',
      header: 'SEO Package B',
      icon: ['fas', 'check'],
      subheader: 'Optimization of up to 10 Pages',
      features: [
      ],
      price: { value: 900, unit: 'package', discount: '0', flexible: true },
      relatedServices: ['seo-auckland'],
      keywords: [...commonKeywords, 'seo package B']
    },
    {
      id: 'seo-3',
      variant: 'success',
      title: 'SEO Package C',
      linkTitle: 'SEO Package C',
      description: 'SEO Package C',
      header: 'SEO Package C',
      icon: ['fas', 'check'],
      subheader: 'Optimization of up to 20 Pages',
      features: [
      ],
      price: { value: 1700, unit: 'package', discount: '0', flexible: true },
      relatedServices: ['seo-auckland'],
      keywords: [...commonKeywords, 'seo package C']
    },
    {
      id: 'seo-4',
      variant: 'success',
      title: 'SEO Package D',
      linkTitle: 'SEO Package D',
      description: 'SEO Package D',
      header: 'SEO Package D',
      icon: ['fas', 'check'],
      subheader: 'Optimization of up to 40 Pages',
      features: [
      ],
      price: { value: 3200, unit: 'package', discount: '0', flexible: true },
      relatedServices: ['seo-auckland'],
      keywords: [...commonKeywords, 'seo package D']
    },
    {
      id: 'seo-5',
      variant: 'success',
      title: 'SEO Package E',
      linkTitle: 'SEO Package E',
      description: 'SEO Package E',
      header: 'SEO Package E',
      icon: ['fas', 'check'],
      subheader: 'Optimization of up to 75 Pages for large websites with numerous services and products',
      features: [
      ],
      price: { value: 5900, unit: 'package', discount: '0', flexible: true },
      relatedServices: ['seo-auckland'],
      keywords: [...commonKeywords, 'seo package E']
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
        title: item.title,
        variant: item.variant
      }
    })
  },
  getPaymentPlan: state => (price) => {
    const gstRate = 0.15
    const depositRate = price <= 500 ? 0.50 : 0.30
    const interestRate = 0.02
    const frequency = price <= 500 ? 2 : (price < 1000 ? 5 : 10)
    const total = price * (1 + gstRate)
    const depositBalance = Math.round((total * depositRate) * 100) / 100
    const remainingBalance = total * (1 - depositRate)
    const frequencyPayment = Math.round(((remainingBalance * (1 + interestRate)) / frequency) * 100) / 100
    return `Flexi payment: deposit $${depositBalance} + ${frequency} weekly payments of $${frequencyPayment} (incl. ${interestRate * 100}% admin fee)`
  },
  getFeaturedProducts: (state, getters) => () => {
    return state.all.filter(product => product.isFeatured)
      .sort((a, b) => { return a.isFeaturedOrder - b.isFeaturedOrder || a.price.value - b.price.value })
      // .sort((a, b) => { return a.price.value - b.price.value })
      .map(item => (
        {
          id: item.id,
          header: item.header,
          subheader: item.subheader,
          features: item.features,
          price: item.price,
          paymentPlan: item.price.flexible ? getters.getPaymentPlan(item.price.value) : undefined,
          relatedServices: item.relatedServices
        }
      ))
  },
  getProductById: state => (id) => {
    return state.all.find(product => product.id === id)
  },
  getProductsById: (state, getters) => (serviceId) => {
    return state.all.filter(product => (product.relatedServices.includes(serviceId)))
      .sort((a, b) => { return a.price.value - b.price.value })
      .map(item => (
        {
          id: item.id,
          header: item.header,
          subheader: item.subheader,
          features: item.features,
          price: item.price,
          paymentPlan: item.price.flexible ? getters.getPaymentPlan(item.price.value) : undefined,
          relatedServices: item.relatedServices
        }
      ))
  }
}
