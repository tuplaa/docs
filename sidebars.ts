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
  docs: [
    {
      type: 'doc',
      id: 'getting-started/index',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'OpenAPI References',
      items: [
        {
          type: 'doc',
          id: 'openapis/pam',
          label: 'PAM',
        },
        {
          type: 'doc',
          id: 'openapis/bopam',
          label: 'BO PAM',
        },
      ],
    },
    {
      type: 'category',
      label: 'Environments',
      items: [
        {
          type: 'doc',
          id: 'environments/staging',
          label: 'Staging',
        },
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      items: [
        {
          type: 'doc',
          id: 'environments/cashier',
          label: 'Cashier',
        },
      ],
    },
    {
      type: 'category',
      label: 'Discovery',
      items: [
        {
          type: 'doc',
          id: 'discovery/livechat_rd',
          label: 'Livechat R&D',
        },
        {
          type: 'doc',
          id: 'discovery/design_system_guidelines',
          label: 'Design System Guidelines',
        },
        {
          type: 'doc',
          id: 'discovery/web_usecases',
          label: 'Web Use Cases',
        },
      ],
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Changelog',
    },
  ],
};

export default sidebars;
