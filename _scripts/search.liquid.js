---
permalink: /assets/js/search-data.js
---
const ninja = document.querySelector('ninja-keys');

{%- assign about_title = "About" -%}
{%- for page in site.pages -%}
  {%- if page.permalink == '/' and page.title -%}
    {%- assign about_title = page.title | strip -%}
  {%- endif -%}
{%- endfor -%}

ninja.data = [
  /* Home / About */
  {
    id: "nav-about",
    title: "{{ about_title | truncatewords: 13 }}",
    section: "Navigation",
    handler: () => {
      window.location.href = "{{ '/' | relative_url }}";
    },
  },

  /* Navigation pages only */
  {%- assign sorted_pages = site.pages | sort: "nav_order" -%}
  {%- for p in sorted_pages -%}
    {%- if p.nav and p.autogen == null and p.permalink != '/' -%}
      {
        id: "nav-{{ p.title | slugify }}",
        title: "{{ p.title | truncatewords: 13 }}",
        description: "{{ p.description | strip_html | strip_newlines | escape | strip }}",
        section: "Navigation",
        handler: () => {
          window.location.href = "{{ p.url | relative_url }}";
        },
      },
    {%- endif -%}
  {%- endfor -%}

  /* Social links */
  {%- if site.socials_in_search -%}
    {%- for social in site.data.socials -%}
      {%- case social[0] -%}

        {%- when "email" -%}
        {
          id: "social-email",
          title: "Email",
          section: "Socials",
          handler: () => {
            window.location.href = "mailto:{{ social[1] | encode_email }}";
          },
        },

        {%- when "github_username" -%}
        {
          id: "social-github",
          title: "GitHub",
          section: "Socials",
          handler: () => {
            window.open("https://github.com/{{ social[1] }}", "_blank");
          },
        },

        {%- when "linkedin_username" -%}
        {
          id: "social-linkedin",
          title: "LinkedIn",
          section: "Socials",
          handler: () => {
            window.open("https://www.linkedin.com/in/{{ social[1] }}", "_blank");
          },
        },

        {%- when "cv_pdf" -%}
        {
          id: "social-cv",
          title: "CV",
          section: "Socials",
          handler: () => {
            window.location.href = "{{ social[1] | relative_url }}";
          },
        },

      {%- endcase -%}
    {%- endfor -%}
  {%- endif -%}

  /* Theme toggles */
  {%- if site.enable_darkmode -%}
    {
      id: "theme-light",
      title: "Light theme",
      section: "Theme",
      handler: () => setThemeSetting("light"),
    },
    {
      id: "theme-dark",
      title: "Dark theme",
      section: "Theme",
      handler: () => setThemeSetting("dark"),
    },
    {
      id: "theme-system",
      title: "System theme",
      section: "Theme",
      handler: () => setThemeSetting("system"),
    },
  {%- endif -%}
];
