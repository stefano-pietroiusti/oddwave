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
          header: 'A+ in SEO, Accessibility & Best Practices ',
          text: 'Error free in factors that affect user experience',
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
      price: { value: 2200, unit: 'package', discount: '0' },
      keywords: [...commonKeywords, 'business website package', 'custom website', 'landing page', 'products website', 'services website', 'website with contact form']
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
  }
}
