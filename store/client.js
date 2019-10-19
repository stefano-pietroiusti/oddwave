export const state = () => ({
  client: {
    'id': 1,
    'name': 'The Odd Wave Limited',
    'category': ['Technology'],
    'email': 'team@theoddwave.co.nz',
    'phone': ['+64 210 8658 172', '+64 210 8823 769'],
    'copyright': '© 2019 Copyright The Odd Wave',
    'poweredBy': 'powered by The Odd Wave suite of technologies',
    'about': 'Digital enabler specializing in cloud, web, data and search',
    'content': [
      { header: 'Our approach is simple and flexible', text: 'We manage data and content so it can be distributed anywhere, we make content accessible for display on any device. We revise and optimize content in response to trending keyword searches to make it search engine friendly and increase your Google rankings' },
      { text: 'We design and develop awesome mobile-first websites to present your content - web apps that are fast, responsive and look great anywhere.<br/>Choose between static, periodic publishing and real-time, universal mobile web apps. A range of fit-for-purpose services and hosting packages are also available to keep carbon footprints and running costs low.' },
      { text: "We're here to help you save money while reaching a more significant customer base than traditional methods." }
    ],
    fb: 'https://www.facebook.com/theoddwave',
    linkedin: '#',
    whatsapp: 'https://chat.whatsapp.com/DT09gv1r4fR7iD05jl7ing',
    'created_at': 1567119314889,
    'updated_at': 1567119314913
  }
})

export const getters = {
  contactInfo: state => ({
    id: state.client.id,
    name: state.client.name,
    email: encodeURIComponent(state.client.email),
    phone: state.client.phone,
    copyright: state.client.copyright,
    poweredBy: state.client.poweredBy,
    fb: state.client.fb,
    linkedin: state.client.linkedin,
    whatsapp: state.client.whatsapp
  })
}
