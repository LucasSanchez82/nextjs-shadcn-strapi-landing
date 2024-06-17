import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerPoweredBy extends Schema.Component {
  collectionName: 'components_powered_by_powered_bies';
  info: {
    displayName: 'banner';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    subtitle: Attribute.String;
    banner_card: Attribute.Component<'banner.powered-card', true>;
  };
}

export interface BannerPoweredCard extends Schema.Component {
  collectionName: 'components_powered_by_powered_cards';
  info: {
    displayName: 'banner-card';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    illustrate_icon: Attribute.Enumeration<
      [
        'blank',
        'nextjs',
        'shadcnUi',
        'vercel',
        'fileSearch',
        'barChart',
        'settings',
        'moon',
        'sun',
        'back',
        'next',
        'up',
        'down',
        'close',
        'trash',
        'spinner',
        'userAlt',
        'ellipsis',
        'warning',
        'add',
        'history',
        'signout',
        'calendar',
        'sort',
        'fire',
        'statsBar',
        'mixer',
        'check'
      ]
    > &
      Attribute.DefaultTo<'blank'>;
  };
}

export interface FeaturesFeatureCard extends Schema.Component {
  collectionName: 'components_features_feature_cards';
  info: {
    displayName: 'feature-card';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    subtitle: Attribute.String & Attribute.Required;
    svg: Attribute.Enumeration<
      [
        'blank',
        'nextjs',
        'shadcnUi',
        'vercel',
        'fileSearch',
        'barChart',
        'settings',
        'moon',
        'sun',
        'back',
        'next',
        'up',
        'down',
        'close',
        'trash',
        'spinner',
        'userAlt',
        'ellipsis',
        'warning',
        'add',
        'history',
        'signout',
        'calendar',
        'sort',
        'fire',
        'statsBar',
        'mixer',
        'check'
      ]
    > &
      Attribute.DefaultTo<'blank'>;
  };
}

export interface FeaturesFeatures extends Schema.Component {
  collectionName: 'components_features_features';
  info: {
    displayName: 'features';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    subtitle: Attribute.String;
    feature_card: Attribute.Component<'features.feature-card', true>;
    img: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LandingHeader extends Schema.Component {
  collectionName: 'components_landing_headers';
  info: {
    displayName: 'header';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    button: Attribute.Component<'landing.main-button'>;
  };
}

export interface LandingIcon extends Schema.Component {
  collectionName: 'components_landing_icons';
  info: {
    displayName: 'icon';
    icon: 'alien';
  };
  attributes: {
    icon: Attribute.Enumeration<
      [
        'blank',
        'nextjs',
        'shadcnUi',
        'vercel',
        'fileSearch',
        'barChart',
        'settings',
        'moon',
        'sun',
        'back',
        'next',
        'up',
        'down',
        'close',
        'trash',
        'spinner',
        'userAlt',
        'ellipsis',
        'warning',
        'add',
        'history',
        'signout',
        'calendar',
        'sort',
        'fire',
        'statsBar',
        'mixer',
        'check'
      ]
    >;
  };
}

export interface LandingMainButton extends Schema.Component {
  collectionName: 'components_landing_main_buttons';
  info: {
    displayName: 'main-button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    libelle: Attribute.String;
    link: Attribute.String;
  };
}

export interface LinkRelativeLink extends Schema.Component {
  collectionName: 'components_link_relative_links';
  info: {
    displayName: 'relative-link';
    icon: 'link';
    description: '';
  };
  attributes: {
    libelle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.powered-by': BannerPoweredBy;
      'banner.powered-card': BannerPoweredCard;
      'features.feature-card': FeaturesFeatureCard;
      'features.features': FeaturesFeatures;
      'landing.header': LandingHeader;
      'landing.icon': LandingIcon;
      'landing.main-button': LandingMainButton;
      'link.relative-link': LinkRelativeLink;
    }
  }
}
