import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Documentation sidebar
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Environments',
      items: [
        {
          type: 'doc',
          id: 'environment/staging',
          label: 'Staging',
        },
      ],
    },
  ],

  // API sidebar configuration
  apiSidebar: [
    {
      type: 'category',
      label: 'OpenAPI',
      link: {
        type: 'doc',
        id: 'api/index',
      },
      items: [
        {
          type: 'link',
          label: 'PAM',
          href: '/api/pam',
        },
        {
          type: 'link',
          label: 'Backoffice',
          href: '/api/bo',
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
