import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`${css`
    :root {
        // COLORS
        --generalColor-100: #131523;
        --generalColor-90: #333752;
        --generalColor-80: #5a607f;
        --generalColor-70: #7e84a3;
        --generalColor-60: #a1a7c4;
        --generalColor-50: #d7dbec;
        --generalColor-40: #e6e9f4;
        --generalColor-30: #f5f6fa;

        --primaryColor-100: #1e5eff;
        --primaryColor-90: #336dff;
        --primaryColor-80: #4f81ff;
        --primaryColor-70: #608dff;
        --primaryColor-60: #89abff;
        --primaryColor-50: #b6cbff;
        --primaryColor-40: #3d9e4ff;
        --primaryColor-30: #ecf2ff;

        --whiteColor: #ffffff;

        // SPACING
        --spacing-1: 0.2rem;
        --spacing-2: 0.4rem;
        --spacing-3: 0.8rem;
        --spacing-4: 1.2rem;
        --spacing-5: 1.8rem;
        --spacing-6: 2.4rem;
        --spacing-7: 3.2rem;
        --spacing-8: 4rem;
        --spacing-9: 4.8rem;
        --spacing-10: 6.4rem;
        --spacing-11: 8rem;
        --spacing-12: 9.6rem;
        --spacing-13: 11.2rem;
        --spacing-14: 12.8rem;

        // Typography
        --font-size-1: 1.2rem;
        --font-size-2: 1.4rem;
        --font-size-3: 1.6rem;
        --font-size-4: 1.8rem;
        --font-size-5: 2rem;
        --font-size-6: 2.4rem;
        --font-size-7: 2.8rem;
        --font-size-8: 3.2rem;
        --font-size-9: 4rem;
        --font-size-10: 4.8rem;
        --font-size-11: 6rem;
        --font-size-12: 7.6rem;

        --line-height-1: 1.6rem;
        --line-height-2: 1.8rem;
        --line-height-3: 2.4rem;
        --line-height-4: 3rem;
        --line-height-5: 3.2rem;
        --line-height-6: 3.6rem;
        --line-height-7: 4rem;
        --line-height-8: 4.8rem;
        --line-height-9: 5.6rem;
        --line-height-10: 6.4rem;
        --line-height-11: 7.6rem;
        --line-height-12: 9.2rem;

        --font-weight-300: 300;
        --font-weight-400: 400;
        --font-weight-500: 500;
        --font-weight-600: 600;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        outline: none;
    }

    body {
        box-sizing: border-box;
        background-color: var(--generalColor-30);
    }
    html {
        font-size: 62.5%;
    }

    html,
    body {
        -webkit-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
        text-size-adjust: none;
        -webkit-text-size-adjust: none;
    }

    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
`}`;

export default GlobalStyle;
