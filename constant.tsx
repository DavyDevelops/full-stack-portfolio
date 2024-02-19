import { SketchLogoIcon, Pencil2Icon, ImageIcon } from "@radix-ui/react-icons";

interface SkillItemProps {
  width: number;
  height: number;
  className: string
}

const config = {
  header: {
    leftMenu: [
      {
        name: "Home",
        id: '/#home'
      },
      {
        name: "Skills",
        id: '/#skills'
      },
      {
        name: "Portfolio",
        id: '/#portfolio'
      },
      {
        name: "Blogs",
        id: '/#blogs'
      },
      {
        name: "Contact",
        id: '/#contact'
      },
    ],
    rightMenu: [
      {
        name: "Download CV",
      },
    ],
  },
  banner: {
    title: "Welcome",
    heading: "I have Creative Design Experience",
    subTitle:
      "I'm Tanvir, a creative Product Designer. I've been helping businesses to solve their problems with my design for 2 years.",
    actionButton: [
      {
        name: "Contact Me",
      },
      {
        name: "View portfolio",
      },
    ],
  },
  info: {
    data: [
      {
        title: "90+",
        subTitle: "Projects Completed",
      },
      {
        title: "900,000+",
        subTitle: "Lines of Code",
      },
      {
        title: "50+",
        subTitle: "Awesome Developers",
      },
    ],
  },
  mySkills: {
    title: "About Us",
    subTitle: "Who Are We?",
    content:
      "Welcome to the American University of Nigeria Google Developers Club.",
    actionButton: {
      name: "Sign Up",
      id: "/signup",
    },
    skills: [
      {
        icon: (props: SkillItemProps) => {
          return <SketchLogoIcon {...props}/>
        },
        title: "Vision",
        subTitle: "Our vision is to empower individuals and communities across Africa by leveraging the power of technology to solve pressing challenges and foster sustainable development.",
      },
      {
        icon: (props: SkillItemProps) => {
          return <Pencil2Icon {...props}/>
        },
        title: "Goals",
        subTitle: "Empowering through tech education, fostering innovation, engaging communities, and contributing to open-source projects.",
      },
      {
        icon: (props: SkillItemProps) => {
          return <ImageIcon {...props}/>
        },
        title: "Mission",
        subTitle: "Our mission is to cultivate a vibrant community of developers who are committed to driving positive change through technology.",
      },
    ],
  },
  technologies: {
    title: "Technologies",
    subTitle:
      "I have selected and mentioned here some of i worked projects technologies here",
    technologies: [
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "TypeScript",
      },
      {
        name: "NodeJS",
      },
      {
        name: "React.js",
      },
      {
        name: "Next.js",
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    subTitle: "My Creative Works Latest Projects",
    content:
      "I have selected and mentioned here some of my latest projects to share with you.",
  },
  blogs: {
    title: "Blogs",
    subTitle: "My latest articles",
    content:
      "I have selected and mentioned here some of my latest blogs to share with you.",
    actionButton: "View All",
  },
  contact: {
    title: "Contact",
    subTitle: "Want to learn more about us?",
    content:
      "Let's make something new, different and more meaningful or make thing more visual or conceptual",
    fields: [
      {
        fieldName: "First name",
      },
      {
        fieldName: "Last name",
      },
      {
        fieldName: "Your email",
      },
      {
        fieldName: "Phone number",
      },
      {
        fieldName: "Message",
      },
    ],
  },
  contactInfo: {
    call:{
      fieldName: "Call Us",
      value: "+1 12445221",
    },
    email:{
      fieldName: "Email me",
      value: "aungdsc@outlook.com",
    },
    address:{
      fieldName: "Address",
      value: "American University of Nigeria",
    }
  },
  footer: {
    leftContent: "@ 2022. All Rights Reserved",
    centerContent: "Designed by GDSC(Otuekong Nyong)",
  },
};

export { config };
