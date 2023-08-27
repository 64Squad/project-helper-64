import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: "Project Helper",
    description: "This project is designed to help developers manage their projects and to-do tasks. Including an estimate of monthly expenses to make things easier to manage.",
    themeConfig: {
        nav: [
            {text: 'Todo', link: '/Todo-list'},
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    {
                        text: 'Getting Started' , link: '/Todo-list',
                        items: [
                            {text: 'Project Todo list', link: '/Todo-list'},
                        ]
                    },
                    {
                        text: 'Working Log' ,
                        items: [
                            {text: 'work plan', link: '/log/1.plan'},
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/64Squad/project-helper-64'}
        ]
    }
})
