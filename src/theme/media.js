// @flow

// API

// const Content = styled.div`
//   background: papayawhip;

//   ${media.desktop} {
//     background: blue;
//   }
// }

const sizes: {
  xlDesktop: number,
  awkward: number,
  desktop: number,
  tablet: number,
  phone: number,
} = {
  xlDesktop: 2000,
  awkward: 1480,
  desktop: 1280,
  tablet: 769,
  phone: 0,
}

type Response = {
  xlDesktop: string,
  desktop: string,
  tablet: string,
  phone: string,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc: any, label: string): Response => {
  acc[label] = `@media (min-width: ${sizes[label] / 16}em)`
  return acc
}, {})

export default media
