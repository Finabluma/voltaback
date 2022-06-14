module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 30,
      maxLimit: 50
    }
  },
  ckeditor: {
    enabled: true,
    config: {
      editor: { // editor default config

        removePlugins: ['Markdown'],

        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
        toolbar: {
          items: [
            'heading',
            'bold',
            'italic',
            'underline',
            'removeFormat',
            '|',
            'blockQuote',
            'bulletedList',
            // 'todoList',
            'numberedList',
            '|',
            'link',
            'undo',
            'redo',
            '|',
            'StrapiMediaLib',
            '|',
            "fullScreen",
            'sourceEditing',
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
        image: {
          resizeUnit: "%",
          resizeOptions: [{
            name: 'resizeImage:original',
            value: null,
            icon: 'original'
          },
          {
            name: 'resizeImage:25',
            value: '25',
            icon: 'small'
          },
          {
            name: 'resizeImage:50',
            value: '50',
            icon: 'medium'
          },
          {
            name: 'resizeImage:75',
            value: '75',
            icon: 'large'
          }],
          toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            // 'imageStyle:inline',
            'imageStyle:block',
            // 'imageStyle:side',
            'linkImage',
            'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original'
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
        htmlSupport: {
          allow: [
            {
              name: 'img',
              attributes: {
                sizes: true,
                loading: true,
              }
            },
          ]
        },
        link: {
          // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
          addTargetToExternalLinks: true,
        }
      }
    }
  }
})
