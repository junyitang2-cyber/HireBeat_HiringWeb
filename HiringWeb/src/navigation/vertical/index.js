const navigation = () => {
  return [
    {
      title: 'Searching Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Jobs',
      path: '/second-page',
      icon: 'mdi:email-outline'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline'
    }
  ]
}

export default navigation
