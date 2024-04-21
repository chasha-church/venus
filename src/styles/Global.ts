import { createGlobalStyle, css } from 'styled-components';
import fontsCss from './fonts.module.css';

export const GlobalStyles = createGlobalStyle`
 ${fontsCss} // this works as a normal styled css

:root {
  font-size: 16px;
  /* Sidebar variables */
  --sidebar-grid-left-col: 3em;
  --sidebar-grid-gap: 0.5em;
  --sidebar-grid-padding: 1em;

  /* Content */
  --content-margin:
  calc(var(--sidebar-grid-left-col) + var(--sidebar-grid-gap) + var(--sidebar-grid-padding) * 2);
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme }) => theme.fonts.fontFamily}, sans-serif;
  font-size: ${({ theme }) => theme.fonts.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  line-height: ${({ theme }) => theme.fonts.fontSize.sm};
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
li {
  list-style-type: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* A elements that don't have a class get default styles */
a {
  text-decoration: none;
  color: #000;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
