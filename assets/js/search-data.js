const ninja = document.querySelector('ninja-keys');ninja.data = [
  /* Home / About */
  {
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },

  /* Navigation pages only */{
        id: "nav-research",
        title: "Research",
        description: "Ongoing research projects, working papers, conference presentations, and related scholarly work.",
        section: "Navigation",
        handler: () => {
          window.location.href = "/research/";
        },
      },{
        id: "nav-photos",
        title: "Photos",
        description: "Selected moments from conferences, academic settings, and professional work.",
        section: "Navigation",
        handler: () => {
          window.location.href = "/photos/";
        },
      },{
        id: "nav-references",
        title: "References",
        description: "",
        section: "Navigation",
        handler: () => {
          window.location.href = "/references/";
        },
      },/* Social links */{
          id: "social-cv",
          title: "CV",
          section: "Socials",
          handler: () => {
            window.location.href = "/assets/pdf/Prateek_Tiwari_CV.pdf";
          },
        },{
          id: "social-email",
          title: "Email",
          section: "Socials",
          handler: () => {
            window.location.href = "mailto:%70%72%61%74.%39%37%74%69%77@%67%6D%61%69%6C.%63%6F%6D";
          },
        },{
          id: "social-github",
          title: "GitHub",
          section: "Socials",
          handler: () => {
            window.open("https://github.com/Prateek97ds", "_blank");
          },
        },{
          id: "social-linkedin",
          title: "LinkedIn",
          section: "Socials",
          handler: () => {
            window.open("https://www.linkedin.com/in/prateek-tiwari-ds", "_blank");
          },
        },/* Theme toggles */{
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
    },];
