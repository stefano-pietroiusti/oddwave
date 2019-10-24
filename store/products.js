const commonKeywords = ['developing solutions', 'creating solutions', 'northland', 'auckland', 'rotorua', 'new zealand', 'NZ']

export const state = () => ({
  all: [
    {
      id: 'business-starter',
      variant: 'success',
      title: 'Surface Website Package',
      linkTitle: 'Business starter package',
      description: 'Great value business starter web package',
      header: 'Flexi-Surface Website Package',
      icon: ['fas', 'check'],
      subheader: 'Universal package suitable for businesses, professional services, campaigns, portfolios',
      features: [
        {
          header: '4 page custom website',
          text: 'Landing page, products &/ services, contact form',
          icon: ['fas', 'check']
        },
        {
          header: 'A+ score in SEO, Accessibility & Best Practices audit',
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
          header: 'Content design/restructuring',
          text: 'to improve website flow, content & SEO',

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
          header: 'Custom contact form',
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
      addons: [
        {
          header: 'Content writing & SEO',
          text:
            'Additional page, services, products',
          icon: ['fab', 'servicestack'],
          price: { value: 120, unit: 'page of optimised 250 words' }
        },
        {
          header: 'Custom development',
          text:
            'Features, addons, customisations',
          price: { value: 100, unit: 'hour' }
        },
        {
          header: 'Monthly management, maintenance, reporting',
          text:
            'Monthly management, maintenance, analytics reporting up to 2 hours',
          price: { value: 80, unit: 'package' }
        }, {
          header: 'Updates',
          text:
            '2 hours per month',
          icon: ['fas', 'check']
        },
        {
          header: 'Monthly management & reporting',
          text:
            '2 hours per month',
          icon: ['fas', 'check']
        }
      ],
      relatedServices: ['website-design-auckland'],
      price: { value: 2200, unit: 'package', discount: '0' },
      keywords: [...commonKeywords, 'business website package', 'custom website', 'landing page', 'products website', 'services website', 'website with contact form']
    },
    {
      id: 'photo-1',
      variant: 'success',
      title: 'Base Photography Package',
      linkTitle: 'Business starter package',
      description: 'Great value photography package',
      header: 'Photo Package 1',
      icon: ['fas', 'check'],
      subheader: '1 hour & 24 edited images',
      features: [
      ],
      price: { value: 270, unit: '1 hrs & 30 edited images', discount: '0' },
      relatedServices: ['creative-photographer-auckland'],
      keywords: [...commonKeywords, 'photography package']
    },
    {
      id: 'photo-2',
      variant: 'success',
      title: 'Midi Photography Package',
      linkTitle: 'Midi Photography package',
      description: 'Great value business starter web package',
      header: 'Photo Package 2',
      icon: ['fas', 'check'],
      subheader: '2 hrs & 100 edited images',
      features: [
      ],
      price: { value: 680, unit: '2 hrs & 100 edited images', discount: '0' },
      relatedServices: ['creative-photographer-auckland'],
      keywords: [...commonKeywords, 'photography maxi package']
    },
    {
      id: 'photo-3',
      variant: 'success',
      title: 'Maxi Photography Package',
      linkTitle: 'Maxi Photography package',
      description: 'Maxi Photography package',
      header: 'Photo Package 3',
      icon: ['fas', 'check'],
      subheader: '6 hrs & 300 edited images',
      features: [
      ],
      price: { value: 1900, unit: '6 hrs & 300 edited images', discount: '0' },
      relatedServices: ['creative-photographer-auckland'],
      keywords: [...commonKeywords, 'photography maxi package']
    }, // {
    //   id: 'film-starter',
    //   variant: 'success',
    //   title: 'Base Photography Package',
    //   linkTitle: 'Business starter package',
    //   description: 'Great value photography package',
    //   header: 'Flexi-Photo Package',
    //   icon: ['fas', 'check'],
    //   subheader: '1 hours & 24 edited images',
    //   features: [
    //   ],
    //   price: { value: 500, unit: '1 hrs & 24 edited images', discount: '0' },
    //   relatedServices: ['creative-photographer-auckland'],
    //   keywords: [...commonKeywords, 'photography package']
    // }

    {
      id: 'seo-1',
      variant: 'success',
      title: 'SEO Package A',
      linkTitle: 'SEO Package A',
      description: 'SEO Package A',
      header: 'SEO Package A',
      icon: ['fas', 'check'],
      subheader: 'Optimization of up to 5 Pages',
      features: [
      ],
      price: { value: 450, unit: 'Optimization of up to 5 Pages', discount: '0' },
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
      price: { value: 900, unit: 'Optimization of up to 10 Pages', discount: '0' },
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
      price: { value: 1700, unit: 'Optimization of up to 20 Pages', discount: '0' },
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
      price: { value: 3200, unit: 'Optimization of up to 40 Pages', discount: '0' },
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
      subheader: 'Optimization of up to 40 Pages',
      features: [
      ],
      price: { value: 5900, unit: 'Optimization of up to 75 Pages for large websites with numerous services and products', discount: '0' },
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
  getProductById: state => (id) => {
    return state.all.find(product => product.id === id)
  },
  getProductsById: state => (serviceId) => {
    // console.log(serviceId)
    // const products = state.all.filter(product => (product.relatedServices.includes(serviceId)))
    // console.log(products)
    return state.all.filter(product => (product.relatedServices.includes(serviceId)))
  }
}
