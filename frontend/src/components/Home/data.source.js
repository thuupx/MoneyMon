import React from 'react';


export const BannerDataSource = {
  wrapper: { className: 'banner' },
  textWrapper: { className: 'banner-text-wrapper' },
  title: {
    className: 'banner-title',
    children: 'https://i.ibb.co/dfx6G33/logo.png',
  },
  content: {
    className: 'banner-content',
    children: (
      <span>
        <p>Lorem me ipsum dolor sit amet, consectet.</p>
        <p>Lorem ips ipsum dolor sit amet, consectet. Cur </p>
      </span>
    ),
  },
  button: { className: 'banner-button', children: 'Learn More' },
};
export const ContentDataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Lorem ipsum' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: { children: 'Lorem ipsum dolor sit amet' },
          content: { children: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: { children: 'lorem ipsum dolor sit amet' },
          content: { children: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: { children: 'lorem ipsum dolor sit amet' },
          content: { children: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
        },
      },
    ],
  },
};
export const Content70DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'lorem ipsum dolor sit amet',
        className: 'title-h1',
      },
      { name: 'content', children: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'PHONE', className: 'content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>lorem</h3>
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
                <br />
                <h3>Lorem me ipsum</h3>
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
                <br />
                <h3>
                  lorem
                </h3>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: 'TABLET' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>lorem</h3>
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
                <br />
                <h3>lorem</h3>
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
                <br />
                <h3>
                  Lorem
                </h3>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: 'DESKTOP', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>lorem</h3>
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
                <br />
                <h3>lorem vel</h3>
                <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
                <br />
                <h3>
                  lorem porro quisquam
                </h3>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
export const Content130DataSource = {
  OverPack: {
    className:
      'home-page-wrapper content13-wrapper home-page-wrapper content13-wrapper jnwq7vhwgqg-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'Lorem', className: 'title-h1' },
      {
        name: 'content',
        children:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        className: 'title-content',
      },
    ],
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Login ipsum text', className: 'title-h1' }],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};

