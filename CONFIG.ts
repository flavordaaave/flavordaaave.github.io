/* eslint-disable sort-keys */

interface ConfigPage {
  title: string
  gradient: string[]
}

interface Config {
  pages: {
    '/': ConfigPage
    [key: string]: ConfigPage | undefined
  }
}

const CONFIG: Config = {
  pages: {
    '/': {
      title: 'Welcome',
      gradient: ['#9a348e', '#da5552'],
    },
    '/skills': {
      title: 'Skills',
      gradient: ['#da5552', '#ffb88c'],
    },
    '/work': {
      title: 'Work',
      gradient: ['#ffb88c', '#00c6ff'],
    },
    '/education': {
      title: 'Education',
      gradient: ['#00c6ff', '#129378'],
    },
  },
}

export default CONFIG
