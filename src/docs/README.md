## The guidelines for writing markdown files for projects and posts.

When you want to **write a new post or project**, you should follow the below structure. This structure is important for the website to render the content correctly.

```mdx
---
title: // Title of the project or post
description: // Description of the project or post
thumbnail_img: // path to the thumbnail image in the public folder, remember to create root directory and add two folders: light and dark to there.
open_graph_img: // path to the opengraph image in the public folder. This the image should be in 1200x630px size.
tags: // Tags in array string format
publishedAt: // Date publication
---
```

The above code block is **the front matter of the markdown file**. It's important to load all necessary information about **thumbnail, seo details and date publication**. Remember to create mdx files in the `/docs/<projects|posts>` folder in the `/<new_name>` and to place there two files with the same name and different extensions: `.pl.mdx` or `.en.mdx`.

### How to write markdown files?

You can use the markdown syntax to write your content. If you are not familiar with markdown syntax, you can check the [Markdown Guide](https://www.markdownguide.org/). You should learn how to use **all custom components** that they were defined in **storybook**.

1. To run the **storybook**, you can use the below command:

```sh
npm run storybook
```

When you run the above command, you can see **all custom components that you can use in your markdown files**. Now, you can use them in your markdown files and you will glad to share your content with the world 🔥📱.
