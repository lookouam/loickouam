/** @jsx jsx */
import { jsx, Link } from "theme-ui"

const Footer = () => {

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by @loicKouam. All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://twitter.com/loicKouam"
        >
          Respectons 
        </Link>
        {` `}
        les
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://github.com/lookouam">
          gestes barrières
        </Link>
      </div>
    </footer>
  )
}

export default Footer
