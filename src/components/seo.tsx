import React, { memo } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const siteMetadata = {
  title: "Daniel Rocha | Software Engineer",
  author: "Daniel Rocha",
  description: "Daniel Rocha Personal Website",
  siteUrl: "http://danielrocha.xyz",
};
const keywords = ["Daniel Rocha", "personal website", "software engineer"];

const SEO = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      meta={[
        {
          name: `description`,
          content: siteMetadata.description,
        },
        {
          property: `og:title`,
          content: siteMetadata.title,
        },
        {
          property: `og:description`,
          content: siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: siteMetadata.description,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )}
      title={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default memo(SEO);
