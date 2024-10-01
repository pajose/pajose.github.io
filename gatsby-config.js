module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://pajose.github.io/`,
    // Your Name
    name: 'Patrick Jose',
    // Main Site Title
    title: `Patrick Jose Portfolio`,
    // Description that goes under your name in main bio
    description: `Software Engineer | Real-time Systems | Full-stack developer`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/pajose`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/patrick-jose/`,
    // Content of the About Me section
    about: `As a professional software engineer with nearly 6 years of experience, I have a strong foundation in developing real-time software systems. \
            My expertise spans a range of programming languages and tools, including C++, Python, Java, and JavaScript, as well as cloud platforms like \
            Google Cloud and AWS. I also have experience in other areas, including developing AI models, designing and implementing distributed systems, \
            and creating web and mobile applications.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ParkSpace',
        description:
          'A full-stack web application that connects people who want to rent their parking spots with those seeking parking for events',
        link: '',
      },
      {
        name: 'TMDB Films',
        description:
          'A full-stack web and mobile application allowing users to query info about films and TV shows',
        link: '',
      },
      {
        name: 'Housing Prices AI',
        description:
          'Collaborated with 2 engineers to implement a Python Machine Learning model blending Lasso, Elastic Net, and Gradient Boost, predicting housing sale prices from a dataset of 1,400+ entries along 80+ features',
        link: '',
      },
      {
        name: 'AI Rap Generator',
        description:
          'Developed 2 Natural Language Processing AI models with Tensorflow in Python to generate rap lyrics in the style of Kendrick Lamar, collecting and preprocessing 260+ songs, generating new content with a field-test accuracy of 60% ',
        link: 'https://github.com/pajose/Kendrick-Lamar-AI',
      },
      {
        name: 'Multiplayer Online Snake Game',
        description:
          'A real-time online multiplayer snake game using C++, JavaScript, and HTML',
        link: 'https://github.com/pajose/Multiplayer-Online-Snake-Game',
      },
      {
        name: 'HealthCarenect',
        description:
          'An Android application that physicians and patients can use as an online forum page to gain medical advice and support',
        link: 'https://github.com/pajose/HealthCarenect',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'The Boeing Company',
        description: 'Senior Software Engineer, July 2021 - Present',
        link: '',
      },
      {
        name: 'The Boeing Company',
        description: 'Software Engineer, January 2019 - July 2021',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C/C++, C#, Java, JavaScript/Typescript, Angular, React, Flask, Vue.js, Express.js',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Kubernetes, Amazon Web Services (AWS), Google Cloud Platform, Hadoop, Kafka, Apache Solr, Node.js, AI/ML (TensorFlow, Keras, scikit-learn, NLP, RNN, CNN, Transformers), Gitlab CI/CD, Unreal Engine, Linux',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
